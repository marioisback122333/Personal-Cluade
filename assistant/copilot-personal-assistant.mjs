#!/usr/bin/env node

import process from 'node:process'
import readline from 'node:readline/promises'
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { stdin as input, stdout as output } from 'node:process'

const SESSIONS_DIR = path.join(process.cwd(), 'assistant', 'sessions')
const PROFILES_DIR = path.join(process.cwd(), 'assistant', 'profiles')
const HOOKS_DIR = path.join(process.cwd(), 'assistant', 'hooks')
const CODEBASE_INDEX_PATH = path.join(process.cwd(), 'assistant', 'analysis', 'codebase_index.json')
const DEFAULT_MODELS_CACHE_TTL_MS = 60 * 60 * 1000
const DEFAULT_MODELS_STALE_MS = 24 * 60 * 60 * 1000
const DEFAULT_WHERE_CACHE_TTL_MS = 5 * 60 * 1000
const DEFAULT_QUEUE_MAX_PENDING = 32
const DEFAULT_MAX_HISTORY_MESSAGES = 28
const DEFAULT_CIRCUIT_FAILURES = 4
const DEFAULT_CIRCUIT_COOLDOWN_MS = 30 * 1000
const DEFAULT_COPILOT_RUNTIME_TOKEN_URLS = [
  'https://api.github.com/copilot_internal/v2/token',
  'https://api.github.com/copilot_internal/token',
]
const COPILOT_RUNTIME_TOKEN_URLS = resolveCopilotRuntimeTokenUrls(process.env)
const DEFAULT_COPILOT_RUNTIME_BASE_URL = 'https://api.individual.githubcopilot.com'
const COPILOT_RUNTIME_TOKEN_REFRESH_MARGIN_MS = 5 * 60 * 1000
const COPILOT_RUNTIME_TOKEN_CACHE_PATH = path.join(
  process.cwd(),
  'assistant',
  'cache',
  'github-copilot.token.json'
)
const COPILOT_RUNTIME_TOKEN_EXCHANGE_USER_AGENT = 'openclaw-copilot-assistant/1.0'
const COPILOT_RUNTIME_EDITOR_VERSION = 'vscode/1.96.2'
const COPILOT_RUNTIME_EDITOR_PLUGIN_VERSION = 'copilot-chat/0.26.7'
const COPILOT_RUNTIME_USER_AGENT = 'GitHubCopilotChat/0.26.7'
const COPILOT_RUNTIME_API_VERSION = '2025-04-01'
const MODEL_PROVIDER_PREFIXES = [
  'github-copilot/',
  'openai/',
  'anthropic/',
  'google/',
  'xai/',
]

const DEFAULT_ASSISTANT_SYSTEM_PROMPT = [
  'You are a practical personal coding assistant.',
  'Respond with clean, modern Markdown that looks polished in terminal output.',
  'Start with a direct answer, then use short sections for detail when needed.',
  'Use concise bullet points for features/steps and numbered phases for build plans.',
  'For product/app requests, include: concept, core features, stack, implementation phases, and deployment path.',
  'If scope is too large for one shot, propose an MVP first and clearly state the immediate next step.',
  'Keep the tone practical, clear, and concise.',
].join('\n')

const RISKY_PROMPT_RULES = [
  { id: 'rm_root', label: 'destructive rm on root', regex: /\brm\s+-rf\s+\/(?:\s|$)/i },
  { id: 'rm_sudo_root', label: 'sudo rm on root', regex: /\bsudo\s+rm\s+-rf\s+\/(?:\s|$)/i },
  { id: 'disk_format', label: 'disk formatting command', regex: /\b(mkfs|diskpart\s+clean|format\s+[A-Za-z]:)\b/i },
  { id: 'raw_disk_write', label: 'raw disk write', regex: /\bdd\s+if=.*\s+of=\/dev\//i },
  { id: 'curl_pipe_shell', label: 'remote script pipe to shell', regex: /\b(curl|wget)\b[^\n]*\|\s*(bash|sh|zsh|pwsh|powershell)\b/i },
  { id: 'fork_bomb', label: 'fork bomb pattern', regex: /:\(\)\s*\{\s*:\|:&\s*\};:/i },
]

const ANSI = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
}
let codebaseIndexCache = null
let modelListCache
let whereResultsCache
const modelRefreshInFlight = new Map()

function resolveCopilotRuntimeTokenUrls(env = process.env) {
  const fromEnv = String(env.COPILOT_RUNTIME_TOKEN_URLS || '')
    .split(',')
    .map(v => v.trim())
    .filter(Boolean)

  const values = []
  const pushUnique = value => {
    const normalized = String(value || '').trim().replace(/\/+$/, '')
    if (!normalized) return
    if (!values.includes(normalized)) values.push(normalized)
  }

  for (const value of fromEnv) pushUnique(value)
  for (const value of DEFAULT_COPILOT_RUNTIME_TOKEN_URLS) pushUnique(value)

  const rank = value => {
    if (/\/copilot_internal\/v2\/token$/i.test(value)) return 0
    if (/\/copilot_internal\/token$/i.test(value)) return 2
    return 1
  }

  return values.sort((a, b) => rank(a) - rank(b))
}

function resolveOpenClawStateDirCandidates(env = process.env) {
  const values = []
  const pushUnique = value => {
    const trimmed = String(value || '').trim()
    if (!trimmed) return
    if (!values.includes(trimmed)) values.push(trimmed)
  }

  const home = String(env.HOME || '').trim()
  const openclawHome = String(env.OPENCLAW_HOME || '').trim()
  const openclawStateDir = String(env.OPENCLAW_STATE_DIR || '').trim()

  if (openclawStateDir) {
    if (openclawStateDir.startsWith('~/') && home) {
      pushUnique(path.join(home, openclawStateDir.slice(2)))
    } else {
      pushUnique(openclawStateDir)
    }
  }

  const effectiveHome = openclawHome || home
  if (effectiveHome) {
    pushUnique(path.join(effectiveHome, '.openclaw'))
    pushUnique(path.join(effectiveHome, '.clawdbot'))
  }

  return values
}

function resolveOpenClawAuthProfilePaths(env = process.env) {
  return resolveOpenClawStateDirCandidates(env).map(stateDir =>
    path.join(stateDir, 'agents', 'main', 'agent', 'auth-profiles.json')
  )
}

function resolveOpenClawRuntimeTokenCachePaths(env = process.env) {
  return resolveOpenClawStateDirCandidates(env).map(stateDir =>
    path.join(stateDir, 'credentials', 'github-copilot.token.json')
  )
}

class HTTPError extends Error {
  constructor(status, body, headers = {}) {
    super(`HTTP ${status}: ${body}`)
    this.status = status
    this.body = body
    this.headers = headers
  }
}

class TimeoutError extends Error {
  constructor(timeoutMs) {
    super(`Request timed out after ${timeoutMs}ms`)
    this.timeoutMs = timeoutMs
  }
}

class QueueFullError extends Error {
  constructor(maxPending) {
    super(`Request queue is full (maxPending=${maxPending})`)
    this.maxPending = maxPending
  }
}

class CircuitOpenError extends Error {
  constructor(remainingMs) {
    super(
      remainingMs > 0
        ? `Circuit breaker is open. Retry in ${remainingMs}ms`
        : 'Circuit breaker is open'
    )
    this.remainingMs = remainingMs
  }
}

class LruTtlCache {
  constructor(maxEntries = 64) {
    this.maxEntries = Math.max(1, Number(maxEntries) || 64)
    this.map = new Map()
  }

  clear() {
    this.map.clear()
  }

  delete(key) {
    return this.map.delete(key)
  }

  setMaxEntries(maxEntries) {
    this.maxEntries = Math.max(1, Number(maxEntries) || this.maxEntries)
    this.#prune()
  }

  set(key, value, ttlMs) {
    const now = Date.now()
    const ttl = Math.max(1, Number(ttlMs) || 1)
    const entry = {
      value,
      createdAt: now,
      expiresAt: now + ttl,
      lastAccessAt: now,
    }
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    this.map.set(key, entry)
    this.#prune()
    return entry
  }

  getFresh(key, now = Date.now()) {
    const entry = this.map.get(key)
    if (!entry) return null
    if (entry.expiresAt <= now) {
      this.map.delete(key)
      return null
    }
    entry.lastAccessAt = now
    this.map.delete(key)
    this.map.set(key, entry)
    return entry.value
  }

  getStale(key, now = Date.now()) {
    const entry = this.map.get(key)
    if (!entry) return null
    entry.lastAccessAt = now
    this.map.delete(key)
    this.map.set(key, entry)
    return entry
  }

  stats(now = Date.now()) {
    let fresh = 0
    let expired = 0
    for (const entry of this.map.values()) {
      if (entry.expiresAt > now) fresh += 1
      else expired += 1
    }
    return {
      entries: this.map.size,
      maxEntries: this.maxEntries,
      fresh,
      expired,
    }
  }

  #prune() {
    while (this.map.size > this.maxEntries) {
      const oldestKey = this.map.keys().next().value
      if (oldestKey === undefined) break
      this.map.delete(oldestKey)
    }
  }
}

class SerialTaskQueue {
  constructor(maxPending = DEFAULT_QUEUE_MAX_PENDING) {
    this.maxPending = Math.max(1, Number(maxPending) || DEFAULT_QUEUE_MAX_PENDING)
    this.pending = []
    this.running = false
    this.metrics = {
      enqueued: 0,
      rejected: 0,
      maxObservedDepth: 0,
    }
  }

  setMaxPending(maxPending) {
    this.maxPending = Math.max(1, Number(maxPending) || this.maxPending)
  }

  size() {
    return this.pending.length + (this.running ? 1 : 0)
  }

  async enqueue(task) {
    if (this.pending.length >= this.maxPending) {
      this.metrics.rejected += 1
      throw new QueueFullError(this.maxPending)
    }

    return await new Promise((resolve, reject) => {
      this.pending.push({ task, resolve, reject })
      this.metrics.enqueued += 1
      this.metrics.maxObservedDepth = Math.max(
        this.metrics.maxObservedDepth,
        this.pending.length
      )
      this.#drain().catch(err => {
        output.write(`[ERROR] queue drain failed: ${err instanceof Error ? err.message : String(err)}\n`)
      })
    })
  }

  async #drain() {
    if (this.running) return
    this.running = true

    try {
      while (this.pending.length > 0) {
        const item = this.pending.shift()
        if (!item) continue

        try {
          const value = await item.task()
          item.resolve(value)
        } catch (err) {
          item.reject(err)
        }
      }
    } finally {
      this.running = false
    }
  }
}

class CircuitBreaker {
  constructor({ failureThreshold = DEFAULT_CIRCUIT_FAILURES, cooldownMs = DEFAULT_CIRCUIT_COOLDOWN_MS }) {
    this.failureThreshold = Math.max(1, Number(failureThreshold) || DEFAULT_CIRCUIT_FAILURES)
    this.cooldownMs = Math.max(1000, Number(cooldownMs) || DEFAULT_CIRCUIT_COOLDOWN_MS)
    this.state = 'closed'
    this.failureCount = 0
    this.openedAt = 0
  }

  canRequest(now = Date.now()) {
    if (this.state !== 'open') return { allowed: true, remainingMs: 0 }

    const elapsed = now - this.openedAt
    const remainingMs = Math.max(0, this.cooldownMs - elapsed)
    if (remainingMs > 0) {
      return { allowed: false, remainingMs }
    }

    this.state = 'half-open'
    return { allowed: true, remainingMs: 0 }
  }

  onSuccess() {
    this.state = 'closed'
    this.failureCount = 0
    this.openedAt = 0
  }

  onFailure(now = Date.now()) {
    if (this.state === 'half-open') {
      this.state = 'open'
      this.openedAt = now
      this.failureCount = this.failureThreshold
      return
    }

    this.failureCount += 1
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'open'
      this.openedAt = now
    }
  }

  status(now = Date.now()) {
    let remainingMs = 0
    if (this.state === 'open') {
      const elapsed = now - this.openedAt
      remainingMs = Math.max(0, this.cooldownMs - elapsed)
    }
    return {
      state: this.state,
      failureCount: this.failureCount,
      failureThreshold: this.failureThreshold,
      cooldownMs: this.cooldownMs,
      remainingMs,
    }
  }

  reconfigure({ failureThreshold, cooldownMs }) {
    this.failureThreshold = Math.max(
      1,
      Number(failureThreshold) || this.failureThreshold || DEFAULT_CIRCUIT_FAILURES
    )
    this.cooldownMs = Math.max(
      1000,
      Number(cooldownMs) || this.cooldownMs || DEFAULT_CIRCUIT_COOLDOWN_MS
    )
    if (this.failureCount > this.failureThreshold) {
      this.failureCount = this.failureThreshold
    }
  }
}

modelListCache = new LruTtlCache(24)
whereResultsCache = new LruTtlCache(200)

function canUseColor() {
  return Boolean(output.isTTY && !process.env.NO_COLOR)
}

function tint(text, colorCode) {
  if (!canUseColor()) return text
  return `${colorCode}${text}${ANSI.reset}`
}

const ui = {
  heading: text => tint(text, `${ANSI.bold}${ANSI.cyan}`),
  info: text => tint(text, ANSI.blue),
  success: text => tint(text, ANSI.green),
  warn: text => tint(text, ANSI.yellow),
  error: text => tint(text, ANSI.red),
  dim: text => tint(text, ANSI.dim),
  accent: text => tint(text, ANSI.magenta),
}

function printDivider(char = '=') {
  const line = char.repeat(72)
  output.write(`${ui.dim(line)}\n`)
}

function printInteractiveBanner({ model, profile }) {
  printDivider('=')
  output.write(`${ui.heading('Copilot Personal Assistant')}\n`)
  output.write(`${ui.info(`Profile: ${profile}`)}\n`)
  output.write(`${ui.info(`Model: ${model}`)}\n`)
  output.write(`${ui.dim('Type /help for commands, /exit to quit.')}\n`)
  printDivider('-')
  output.write('\n')
}

function formatListItem(label, value) {
  return `${ui.dim(label)} ${value}`
}

function detectRiskyContent(text) {
  const payload = String(text || '')
  if (!payload) return []

  const findings = []
  for (const rule of RISKY_PROMPT_RULES) {
    if (rule.regex.test(payload)) {
      findings.push(rule.label)
    }
  }
  return findings
}

function historyWindow(history, maxHistoryMessages, metrics) {
  const maxMessages = Math.max(0, Number(maxHistoryMessages) || 0)
  if (maxMessages <= 0) return history

  const system = history[0]?.role === 'system' ? history[0] : null
  const body = history.filter((m, idx) => idx !== 0 || !system)
  if (body.length <= maxMessages) return history

  const trimmed = body.slice(-maxMessages)
  const next = system ? [system, ...trimmed] : trimmed
  if (metrics) {
    metrics.historyTrimEvents += 1
    metrics.historyTrimmedMessages += Math.max(0, body.length - trimmed.length)
  }
  return next
}

function normalizeHookTransforms(values) {
  if (!Array.isArray(values)) return []
  return values
    .map(v => (typeof v === 'object' && v ? v : null))
    .filter(Boolean)
    .filter(v => ['prepend', 'append', 'replace'].includes(String(v.type || '')))
}

function applyHookTransforms(text, transforms) {
  let out = String(text || '')
  for (const t of transforms) {
    const type = String(t.type || '')
    if (type === 'prepend') {
      const prefix = String(t.text || '')
      if (prefix) out = `${prefix}${out}`
      continue
    }
    if (type === 'append') {
      const suffix = String(t.text || '')
      if (suffix) out = `${out}${suffix}`
      continue
    }
    if (type === 'replace') {
      const find = String(t.find || '')
      if (!find) continue
      const replace = String(t.replace || '')
      const flags = String(t.flags || 'g')
      try {
        const re = new RegExp(find, flags)
        out = out.replace(re, replace)
      } catch {
        // Ignore invalid regex transforms.
      }
    }
  }
  return out
}

async function loadHooks(profileName) {
  const normalized = sanitizeProfileName(profileName)
  const candidates = [`${normalized}.json`, 'default.json']

  for (const fileName of candidates) {
    try {
      const filePath = path.join(HOOKS_DIR, fileName)
      const raw = await readFile(filePath, 'utf8')
      const parsed = JSON.parse(raw)
      return {
        fileName,
        beforeSend: normalizeHookTransforms(parsed?.beforeSend),
        afterReceive: normalizeHookTransforms(parsed?.afterReceive),
      }
    } catch {
      // Continue to next fallback hook file.
    }
  }

  return {
    fileName: '',
    beforeSend: [],
    afterReceive: [],
  }
}

function applyBeforeSendHooks(messages, transforms, metrics) {
  if (!Array.isArray(transforms) || transforms.length === 0) return messages
  const cloned = messages.map(m => ({ ...m }))
  for (let i = cloned.length - 1; i >= 0; i -= 1) {
    const m = cloned[i]
    if (m?.role !== 'user') continue
    const next = applyHookTransforms(String(m.content || ''), transforms)
    if (next !== String(m.content || '')) {
      cloned[i] = { ...m, content: next }
      if (metrics) metrics.hooksApplied.beforeSend += transforms.length
    }
    break
  }
  return cloned
}

function applyAfterReceiveHooks(text, transforms, metrics) {
  if (!Array.isArray(transforms) || transforms.length === 0) return String(text || '')
  const next = applyHookTransforms(String(text || ''), transforms)
  if (metrics) metrics.hooksApplied.afterReceive += transforms.length
  return next
}

async function endpointHealth({ endpoint, token, timeoutMs }) {
  const started = Date.now()
  const modelsEndpoint = deriveModelsEndpoint(endpoint)
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const res = await fetch(modelsEndpoint, {
      method: 'GET',
      headers: buildApiRequestHeaders(token, modelsEndpoint),
      signal: controller.signal,
    })
    return {
      ok: res.ok,
      status: res.status,
      latencyMs: Date.now() - started,
    }
  } catch (err) {
    if (controller.signal.aborted) {
      return {
        ok: false,
        status: 0,
        latencyMs: Date.now() - started,
        error: `timeout after ${timeoutMs}ms`,
      }
    }
    return {
      ok: false,
      status: 0,
      latencyMs: Date.now() - started,
      error: err instanceof Error ? err.message : String(err),
    }
  } finally {
    clearTimeout(timeout)
  }
}

async function probeModelAccess({ endpoint, token, model, timeoutMs, temperature = 0 }) {
  const probeMessages = [
    { role: 'system', content: 'You are a concise assistant.' },
    { role: 'user', content: 'Reply with OK only.' },
  ]

  try {
    const reply = await chatOnce({
      endpoint,
      token,
      model,
      messages: probeMessages,
      timeoutMs: Math.min(timeoutMs, 15000),
      temperature,
    })
    return {
      ok: true,
      model,
      sample: String(reply || '').trim().slice(0, 40),
      reason: 'accessible',
    }
  } catch (err) {
    if (err instanceof HTTPError) {
      const body = String(err.body || '')
      const unknown = /unknown_model/i.test(body)
      const unsupported = /model_not_supported/i.test(body)
      const forbidden = err.status === 401 || err.status === 403
      return {
        ok: false,
        model,
        reason: unknown
          ? 'unknown_model'
          : unsupported
            ? 'model_not_supported'
            : forbidden
              ? 'forbidden'
              : `http_${err.status}`,
        details: body.slice(0, 160),
      }
    }
    if (err instanceof TimeoutError) {
      return {
        ok: false,
        model,
        reason: 'timeout',
        details: err.message,
      }
    }
    return {
      ok: false,
      model,
      reason: 'error',
      details: err instanceof Error ? err.message : String(err),
    }
  }
}

async function updateDefaultModelProfile(modelName) {
  const profileName = 'default'
  let profile = {}
  try {
    profile = await loadProfile(profileName)
  } catch {
    profile = {}
  }

  const next = {
    ...profile,
    model: normalizeModelName(modelName),
  }
  const filePath = await saveProfile(profileName, next)
  return { filePath, model: next.model }
}

function isCopilotRuntimeTokenUsable(cache, now = Date.now()) {
  if (!cache || typeof cache.token !== 'string' || typeof cache.expiresAt !== 'number') {
    return false
  }
  return cache.expiresAt - now > COPILOT_RUNTIME_TOKEN_REFRESH_MARGIN_MS
}

function parseCopilotRuntimeTokenResponse(value) {
  if (!value || typeof value !== 'object') {
    throw new Error('Unexpected response from Copilot token endpoint')
  }

  const asRecord = value
  const token = asRecord.token
  const expiresAt = asRecord.expires_at
  if (typeof token !== 'string' || token.trim().length === 0) {
    throw new Error('Copilot token response missing token')
  }

  let expiresAtMs
  if (typeof expiresAt === 'number' && Number.isFinite(expiresAt)) {
    expiresAtMs = expiresAt < 100_000_000_000 ? expiresAt * 1000 : expiresAt
  } else if (typeof expiresAt === 'string' && expiresAt.trim().length > 0) {
    const parsed = Number.parseInt(expiresAt, 10)
    if (!Number.isFinite(parsed)) {
      throw new Error('Copilot token response has invalid expires_at')
    }
    expiresAtMs = parsed < 100_000_000_000 ? parsed * 1000 : parsed
  } else {
    throw new Error('Copilot token response missing expires_at')
  }

  return {
    token: token.trim(),
    expiresAt: expiresAtMs,
  }
}

function deriveCopilotApiBaseUrlFromRuntimeToken(token) {
  const trimmed = String(token || '').trim()
  if (!trimmed) return null

  const match = trimmed.match(/(?:^|;)\s*proxy-ep=([^;\s]+)/i)
  const proxyEp = match?.[1]?.trim()
  if (!proxyEp) return null

  const host = proxyEp
    .replace(/^https?:\/\//, '')
    .replace(/^proxy\./i, 'api.')
  if (!host) return null
  return `https://${host}`
}

function applyBaseUrlToEndpoint(endpoint, baseUrl) {
  try {
    const original = new URL(endpoint)
    const base = new URL(baseUrl)
    const path = `${original.pathname}${original.search}` || '/chat/completions'
    return new URL(path, base).toString()
  } catch {
    return endpoint
  }
}

async function loadCopilotRuntimeTokenCache() {
  try {
    const raw = await readFile(COPILOT_RUNTIME_TOKEN_CACHE_PATH, 'utf8')
    return JSON.parse(raw)
  } catch {
    return null
  }
}

async function loadOpenClawRuntimeTokenCache() {
  const cachePaths = resolveOpenClawRuntimeTokenCachePaths(process.env)
  for (const cachePath of cachePaths) {
    try {
      const raw = await readFile(cachePath, 'utf8')
      const parsed = JSON.parse(raw)
      if (isCopilotRuntimeTokenUsable(parsed)) {
        return {
          token: String(parsed.token),
          expiresAt: Number(parsed.expiresAt),
          source: `openclaw-cache:${cachePath}`,
        }
      }
    } catch {
      // Continue checking OpenClaw cache fallbacks.
    }
  }
  return null
}

async function saveCopilotRuntimeTokenCache(payload) {
  try {
    await mkdir(path.dirname(COPILOT_RUNTIME_TOKEN_CACHE_PATH), { recursive: true })
    await writeFile(
      COPILOT_RUNTIME_TOKEN_CACHE_PATH,
      JSON.stringify(payload, null, 2),
      'utf8'
    )
  } catch {
    // Best effort cache write.
  }
}

async function resolveCopilotRuntimeAuth({ githubToken, forceRefresh = false, timeoutMs = 15000 }) {
  const sourceToken = String(githubToken || '').trim()
  if (!sourceToken) {
    throw new Error('GitHub token required for Copilot runtime auth')
  }

  if (!forceRefresh) {
    const cached = await loadCopilotRuntimeTokenCache()
    if (isCopilotRuntimeTokenUsable(cached)) {
      return {
        token: String(cached.token),
        expiresAt: Number(cached.expiresAt),
        baseUrl:
          deriveCopilotApiBaseUrlFromRuntimeToken(String(cached.token)) ||
          DEFAULT_COPILOT_RUNTIME_BASE_URL,
        source: `cache:${COPILOT_RUNTIME_TOKEN_CACHE_PATH}`,
      }
    }

    const openclawCached = await loadOpenClawRuntimeTokenCache()
    if (openclawCached) {
      return {
        token: openclawCached.token,
        expiresAt: openclawCached.expiresAt,
        baseUrl:
          deriveCopilotApiBaseUrlFromRuntimeToken(openclawCached.token) ||
          DEFAULT_COPILOT_RUNTIME_BASE_URL,
        source: openclawCached.source,
      }
    }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), Math.min(timeoutMs, 20_000))
  try {
    const attempts = []
    for (const tokenUrl of COPILOT_RUNTIME_TOKEN_URLS) {
      let res
      try {
        res = await fetch(tokenUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'User-Agent': COPILOT_RUNTIME_TOKEN_EXCHANGE_USER_AGENT,
            'X-GitHub-Api-Version': '2022-11-28',
            Authorization: `Bearer ${sourceToken}`,
          },
          signal: controller.signal,
        })
      } catch (err) {
        if (controller.signal.aborted) {
          throw new Error(
            `Copilot token exchange timed out after ${Math.min(timeoutMs, 20_000)}ms`
          )
        }
        attempts.push(`${tokenUrl} -> ${err instanceof Error ? err.message : String(err)}`)
        continue
      }

      if (!res.ok) {
        attempts.push(`${tokenUrl} -> HTTP ${res.status}`)
        if (res.status === 404) {
          continue
        }
        if (res.status === 401 || res.status === 403) {
          throw new Error(
            `Copilot token exchange failed: ${tokenUrl} -> HTTP ${res.status} (token unauthorized for runtime exchange)`
          )
        }
        throw new Error(`Copilot token exchange failed: ${tokenUrl} -> HTTP ${res.status}`)
      }

      const parsed = parseCopilotRuntimeTokenResponse(await res.json())
      const cachePayload = {
        token: parsed.token,
        expiresAt: parsed.expiresAt,
        updatedAt: Date.now(),
      }
      await saveCopilotRuntimeTokenCache(cachePayload)

      return {
        token: parsed.token,
        expiresAt: parsed.expiresAt,
        baseUrl:
          deriveCopilotApiBaseUrlFromRuntimeToken(parsed.token) ||
          DEFAULT_COPILOT_RUNTIME_BASE_URL,
        source: `fetched:${tokenUrl}`,
      }
    }

    throw new Error(
      `Copilot token exchange failed: ${
        attempts.length ? attempts.join('; ') : 'no token endpoints configured'
      }`
    )
  } finally {
    clearTimeout(timeout)
  }
}

function toNumber(value, fallback) {
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

function clampNumber(value, fallback, min, max) {
  const n = toNumber(value, fallback)
  return Math.min(Math.max(n, min), max)
}

function normalizeMs(value, fallback, min = 1, max = 24 * 60 * 60 * 1000) {
  return Math.floor(clampNumber(value, fallback, min, max))
}

function tokenFingerprint(token) {
  const text = String(token || '')
  let hash = 0
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0
  }
  return hash.toString(16)
}

function isCopilotRuntimeApiToken(token) {
  return /(?:^|;)\s*proxy-ep=/i.test(String(token || ''))
}

function isGitHubModelsEndpoint(endpoint) {
  try {
    const host = String(new URL(String(endpoint || '')).host || '').toLowerCase()
    return host === 'models.github.ai'
  } catch {
    return false
  }
}

function buildApiRequestHeaders(token, endpoint = '') {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  if (isCopilotRuntimeApiToken(token)) {
    headers['Editor-Version'] = COPILOT_RUNTIME_EDITOR_VERSION
    headers['Editor-Plugin-Version'] = COPILOT_RUNTIME_EDITOR_PLUGIN_VERSION
    headers['User-Agent'] = COPILOT_RUNTIME_USER_AGENT
    headers['X-Github-Api-Version'] = COPILOT_RUNTIME_API_VERSION
  }

  if (isGitHubModelsEndpoint(endpoint)) {
    headers.Accept = 'application/vnd.github+json'
    headers['X-GitHub-Api-Version'] = '2022-11-28'
  }

  return headers
}

function createRuntimeMetrics() {
  return {
    startedAt: new Date().toISOString(),
    requests: 0,
    successfulRequests: 0,
    failedRequests: 0,
    retries: 0,
    totalLatencyMs: 0,
    circuitOpenRejections: 0,
    guardrailWarnings: 0,
    historyTrimEvents: 0,
    historyTrimmedMessages: 0,
    hooksApplied: {
      beforeSend: 0,
      afterReceive: 0,
    },
    cache: {
      models: {
        hits: 0,
        misses: 0,
        staleHits: 0,
        refreshes: 0,
        refreshFailures: 0,
      },
      where: {
        hits: 0,
        misses: 0,
      },
    },
  }
}

function averageLatencyMs(metrics) {
  if (metrics.successfulRequests <= 0) return 0
  return Math.round(metrics.totalLatencyMs / metrics.successfulRequests)
}

function printRuntimeStats({ metrics, queue, circuitBreaker }) {
  const models = modelListCache.stats()
  const where = whereResultsCache.stats()
  const circuit = circuitBreaker?.status?.() || null
  output.write(
    [
      ui.heading('Runtime stats:'),
      formatListItem('- startedAt:', metrics.startedAt),
      formatListItem('- requests:', String(metrics.requests)),
      formatListItem('- successful:', String(metrics.successfulRequests)),
      formatListItem('- failed:', String(metrics.failedRequests)),
      formatListItem('- retries:', String(metrics.retries)),
      formatListItem('- avgLatencyMs:', String(averageLatencyMs(metrics))),
      formatListItem('- guardrailWarnings:', String(metrics.guardrailWarnings)),
      formatListItem('- historyTrimEvents:', String(metrics.historyTrimEvents)),
      formatListItem('- historyTrimmedMessages:', String(metrics.historyTrimmedMessages)),
      formatListItem('- hooksBeforeSend:', String(metrics.hooksApplied.beforeSend)),
      formatListItem('- hooksAfterReceive:', String(metrics.hooksApplied.afterReceive)),
      formatListItem('- queueSize:', String(queue.size())),
      formatListItem('- queueEnqueued:', String(queue.metrics.enqueued)),
      formatListItem('- queueRejected:', String(queue.metrics.rejected)),
      formatListItem('- queueMaxObservedDepth:', String(queue.metrics.maxObservedDepth)),
      formatListItem('- circuitOpenRejections:', String(metrics.circuitOpenRejections)),
      circuit
        ? formatListItem(
            '- circuitState:',
            `${circuit.state} (failures=${circuit.failureCount}/${circuit.failureThreshold}, remainingMs=${circuit.remainingMs})`
          )
        : '',
      formatListItem(
        '- modelsCache:',
        `entries=${models.entries}, fresh=${models.fresh}, expired=${models.expired}, hits=${metrics.cache.models.hits}, misses=${metrics.cache.models.misses}, staleHits=${metrics.cache.models.staleHits}`
      ),
      formatListItem(
        '- whereCache:',
        `entries=${where.entries}, fresh=${where.fresh}, expired=${where.expired}, hits=${metrics.cache.where.hits}, misses=${metrics.cache.where.misses}`
      ),
    ].join('\n') + '\n\n'
  )
}

function parseArgs(argv) {
  const firstNonEmpty = (...values) => {
    for (const value of values) {
      const trimmed = String(value || '').trim()
      if (trimmed) return trimmed
    }
    return ''
  }

  const readGhAuthToken = () => {
    try {
      const result = spawnSync('gh', ['auth', 'token'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
        env: {
          ...process.env,
          GITHUB_TOKEN: '',
          GH_TOKEN: '',
        },
      })
      if (result.status !== 0) return ''
      return String(result.stdout || '').trim()
    } catch {
      return ''
    }
  }

  const readOpenClawProfileToken = () => {
    const profilePaths = resolveOpenClawAuthProfilePaths(process.env)
    for (const profilePath of profilePaths) {
      try {
        const raw = readFileSync(profilePath, 'utf8')
        const parsed = JSON.parse(raw)
        const profiles = parsed?.profiles && typeof parsed.profiles === 'object'
          ? parsed.profiles
          : {}
        for (const profile of Object.values(profiles)) {
          if (!profile || typeof profile !== 'object') continue
          if (String(profile.provider || '').trim() !== 'github-copilot') continue
          if (String(profile.type || '').trim() !== 'token') continue
          const token = String(profile.token || '').trim()
          if (token) return token
        }
      } catch {
        // Continue checking additional OpenClaw auth profile locations.
      }
    }
    return ''
  }

  const envCopilotToken = String(process.env.COPILOT_AUTH_TOKEN || '').trim()
  const envCopilotGithubToken = String(process.env.COPILOT_GITHUB_TOKEN || '').trim()
  const envGithubToken = String(process.env.GITHUB_TOKEN || '').trim()
  const envGhToken = String(process.env.GH_TOKEN || '').trim()
  const openClawProfileToken = firstNonEmpty(readOpenClawProfileToken())
  const ghCliToken = firstNonEmpty(readGhAuthToken())

  const initialToken = firstNonEmpty(
    envCopilotToken,
    envCopilotGithubToken,
    envGithubToken,
    envGhToken,
    openClawProfileToken,
    ghCliToken
  )
  const initialTokenSource = envCopilotToken
    ? 'copilot_auth_token'
    : envCopilotGithubToken
      ? 'copilot_github_token'
    : envGithubToken
      ? 'github_token'
      : envGhToken
        ? 'gh_token'
        : openClawProfileToken
          ? 'openclaw_profile'
        : ghCliToken
          ? 'gh_cli'
        : 'none'

  const args = {
    model:
      process.env.COPILOT_MODEL ||
      process.env.GITHUB_MODELS_MODEL ||
      'gpt-4o-mini',
    endpoint:
      process.env.COPILOT_API_ENDPOINT ||
      process.env.GITHUB_MODELS_ENDPOINT ||
      'https://models.inference.ai.azure.com/chat/completions',
    token: initialToken,
    tokenSource: initialTokenSource,
    githubCopilotAuth:
      process.env.COPILOT_DISABLE_GITHUB_COPILOT_AUTH === '1' ||
      String(process.env.COPILOT_DISABLE_GITHUB_COPILOT_AUTH || '').toLowerCase() === 'true'
        ? false
        : true,
    system:
      process.env.COPILOT_ASSISTANT_SYSTEM ||
      DEFAULT_ASSISTANT_SYSTEM_PROMPT,
    prompt: '',
    timeoutMs: Number(process.env.COPILOT_TIMEOUT_MS || '60000'),
    temperature: Number(process.env.COPILOT_TEMPERATURE || '0.2'),
    maxOutputTokens: Number(process.env.COPILOT_MAX_OUTPUT_TOKENS || '2048'),
    stream:
      String(process.env.COPILOT_STREAM || 'true').toLowerCase() !== 'false' &&
      process.env.COPILOT_STREAM !== '0',
    showThinking:
      String(process.env.COPILOT_SHOW_THINKING || 'true').toLowerCase() !== 'false' &&
      process.env.COPILOT_SHOW_THINKING !== '0',
    maxRetries: Number(process.env.COPILOT_MAX_RETRIES || '2'),
    maxTurns: Number(process.env.COPILOT_MAX_TURNS || '0'),
    maxHistoryMessages: Number(
      process.env.COPILOT_MAX_HISTORY_MESSAGES || String(DEFAULT_MAX_HISTORY_MESSAGES)
    ),
    circuitFailures: Number(
      process.env.COPILOT_CIRCUIT_FAILURES || String(DEFAULT_CIRCUIT_FAILURES)
    ),
    circuitCooldownMs: Number(
      process.env.COPILOT_CIRCUIT_COOLDOWN_MS || String(DEFAULT_CIRCUIT_COOLDOWN_MS)
    ),
    allowRiskyPrompts:
      String(process.env.COPILOT_ALLOW_RISKY_PROMPTS || '').toLowerCase() === 'true' ||
      process.env.COPILOT_ALLOW_RISKY_PROMPTS === '1',
    color: !process.env.NO_COLOR,
    modelsCacheTtlMs: Number(
      process.env.COPILOT_MODELS_CACHE_TTL_MS || String(DEFAULT_MODELS_CACHE_TTL_MS)
    ),
    modelsCacheStaleMs: Number(
      process.env.COPILOT_MODELS_CACHE_STALE_MS || String(DEFAULT_MODELS_STALE_MS)
    ),
    whereCacheTtlMs: Number(
      process.env.COPILOT_WHERE_CACHE_TTL_MS || String(DEFAULT_WHERE_CACHE_TTL_MS)
    ),
    queueMaxPending: Number(
      process.env.COPILOT_QUEUE_MAX_PENDING || String(DEFAULT_QUEUE_MAX_PENDING)
    ),
    profile: process.env.COPILOT_PROFILE || 'default',
    resume: '',
    help: false,
    nonInteractive: false,
    listModels: false,
    pickModel: false,
    codebaseSummary: false,
    where: '',
    setDefaultModel: '',
    probeModel: '',
    explicit: {
      model: false,
      endpoint: false,
      system: false,
      timeoutMs: false,
      temperature: false,
      maxOutputTokens: false,
      stream: false,
      showThinking: false,
      maxRetries: false,
      maxTurns: false,
      maxHistoryMessages: false,
      circuitFailures: false,
      circuitCooldownMs: false,
      allowRiskyPrompts: false,
      color: false,
      modelsCacheTtlMs: false,
      modelsCacheStaleMs: false,
      whereCacheTtlMs: false,
      queueMaxPending: false,
      profile: false,
    },
  }

  for (let i = 2; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--help' || a === '-h') {
      args.help = true
    } else if (a === '--model' && argv[i + 1]) {
      args.model = argv[++i]
      args.explicit.model = true
    } else if (a === '--endpoint' && argv[i + 1]) {
      args.endpoint = argv[++i]
      args.explicit.endpoint = true
    } else if (a === '--token' && argv[i + 1]) {
      args.token = argv[++i]
      args.tokenSource = 'cli'
    } else if (a === '--github-copilot-auth') {
      args.githubCopilotAuth = true
    } else if (a === '--no-github-copilot-auth') {
      args.githubCopilotAuth = false
    } else if (a === '--system' && argv[i + 1]) {
      args.system = argv[++i]
      args.explicit.system = true
    } else if (a === '--prompt' && argv[i + 1]) {
      args.prompt = argv[++i]
    } else if (a === '--timeout-ms' && argv[i + 1]) {
      args.timeoutMs = Number(argv[++i])
      args.explicit.timeoutMs = true
    } else if (a === '--temperature' && argv[i + 1]) {
      args.temperature = Number(argv[++i])
      args.explicit.temperature = true
    } else if (a === '--max-output-tokens' && argv[i + 1]) {
      args.maxOutputTokens = Number(argv[++i])
      args.explicit.maxOutputTokens = true
    } else if (a === '--stream') {
      args.stream = true
      args.explicit.stream = true
    } else if (a === '--no-stream') {
      args.stream = false
      args.explicit.stream = true
    } else if (a === '--show-thinking') {
      args.showThinking = true
      args.explicit.showThinking = true
    } else if (a === '--hide-thinking') {
      args.showThinking = false
      args.explicit.showThinking = true
    } else if (a === '--max-retries' && argv[i + 1]) {
      args.maxRetries = Number(argv[++i])
      args.explicit.maxRetries = true
    } else if (a === '--max-turns' && argv[i + 1]) {
      args.maxTurns = Number(argv[++i])
      args.explicit.maxTurns = true
    } else if (a === '--max-history-messages' && argv[i + 1]) {
      args.maxHistoryMessages = Number(argv[++i])
      args.explicit.maxHistoryMessages = true
    } else if (a === '--circuit-failures' && argv[i + 1]) {
      args.circuitFailures = Number(argv[++i])
      args.explicit.circuitFailures = true
    } else if (a === '--circuit-cooldown-ms' && argv[i + 1]) {
      args.circuitCooldownMs = Number(argv[++i])
      args.explicit.circuitCooldownMs = true
    } else if (a === '--allow-risky-prompts') {
      args.allowRiskyPrompts = true
      args.explicit.allowRiskyPrompts = true
    } else if (a === '--no-color') {
      args.color = false
      args.explicit.color = true
      process.env.NO_COLOR = '1'
    } else if (a === '--color') {
      args.color = true
      args.explicit.color = true
      delete process.env.NO_COLOR
    } else if (a === '--models-cache-ttl-ms' && argv[i + 1]) {
      args.modelsCacheTtlMs = Number(argv[++i])
      args.explicit.modelsCacheTtlMs = true
    } else if (a === '--models-cache-stale-ms' && argv[i + 1]) {
      args.modelsCacheStaleMs = Number(argv[++i])
      args.explicit.modelsCacheStaleMs = true
    } else if (a === '--where-cache-ttl-ms' && argv[i + 1]) {
      args.whereCacheTtlMs = Number(argv[++i])
      args.explicit.whereCacheTtlMs = true
    } else if (a === '--queue-max-pending' && argv[i + 1]) {
      args.queueMaxPending = Number(argv[++i])
      args.explicit.queueMaxPending = true
    } else if (a === '--profile' && argv[i + 1]) {
      args.profile = argv[++i]
      args.explicit.profile = true
    } else if (a === '--resume' && argv[i + 1]) {
      args.resume = argv[++i]
    } else if (a === '--non-interactive') {
      args.nonInteractive = true
    } else if (a === '--list-models') {
      args.listModels = true
    } else if (a === '--pick-model') {
      args.pickModel = true
    } else if (a === '--codebase-summary') {
      args.codebaseSummary = true
    } else if (a === '--where' && argv[i + 1]) {
      args.where = argv[++i]
    } else if (a === '--set-default-model' && argv[i + 1]) {
      args.setDefaultModel = argv[++i]
    } else if (a === '--probe-model' && argv[i + 1]) {
      args.probeModel = argv[++i]
    }
  }

  return args
}

function printHelp() {
  printDivider('=')
  output.write(
    [
      ui.heading('Copilot Personal Assistant'),
      '',
      'Usage:',
      '  node assistant/copilot-personal-assistant.mjs [options]',
      '',
      'Options:',
      '  --token <value>         GitHub/Copilot auth token (or use env vars)',
      '  --model <value>         Model name (default: gpt-4o-mini)',
      '  --profile <name>        Load/save named runtime profile (default: default)',
      '  --resume <file|index>   Resume a previous JSON session from assistant/sessions',
      '  --endpoint <url>        Chat completions endpoint',
      '  --system <text>         System prompt',
      '  --prompt <text>         Single-turn prompt (non-interactive)',
      '  --non-interactive       Exit after one request (requires prompt or stdin)',
      '  --list-models           List models available for your token/endpoint',
      '  --pick-model            Prompt to pick model from endpoint before chat starts',
      '  --codebase-summary      Show summary of generated leaked-code index',
      '  --where <query>         Search generated leaked-code index for files/symbols',
      '  --set-default-model     Save model into default profile (OpenClaw style names supported)',
      '  --probe-model <name>    Probe if a specific model is actually accessible',
      '  --github-copilot-auth   Exchange GitHub token for Copilot runtime token (default: on)',
      '  --no-github-copilot-auth Disable Copilot runtime token exchange',
      '  --timeout-ms <number>   Request timeout in milliseconds',
      '  --temperature <number>  Sampling temperature',
      '  --max-output-tokens <n> Max tokens generated per response (default: 2048)',
      '  --stream / --no-stream  Enable real-time token streaming (default: on)',
      '  --show-thinking         Show provider-exposed reasoning/thinking deltas',
      '  --hide-thinking         Hide reasoning/thinking stream output',
      '  --max-retries <number>  Retry count for transient API failures (default: 2)',
      '  --max-turns <number>    Exit after N assistant replies in interactive mode',
      '  --max-history-messages  Sliding history window used per request',
      '  --circuit-failures      Consecutive failures before circuit opens',
      '  --circuit-cooldown-ms   Circuit breaker cooldown before retry',
      '  --allow-risky-prompts   Skip risky prompt confirmation guardrail',
      '  --color / --no-color    Force ANSI colors on/off',
      '  --models-cache-ttl-ms   Fresh TTL for model list cache',
      '  --models-cache-stale-ms Stale window for model list stale-while-refresh',
      '  --where-cache-ttl-ms    TTL for codebase search cache',
      '  --queue-max-pending     Max queued requests before backpressure rejection',
      '  --help                  Show this help',
      '',
      'Token env fallback order:',
      '  COPILOT_AUTH_TOKEN -> COPILOT_GITHUB_TOKEN -> GITHUB_TOKEN -> GH_TOKEN',
    ].join('\n') + '\n'
  )
  printDivider('=')
}

function printInteractiveHelp() {
  printDivider('-')
  output.write(
    [
      ui.heading('Interactive commands:'),
      '  /help                 Show this help',
      '  /models               List available chat models',
      '  /models refresh       Refresh model list from endpoint (bypass cache)',
      '  /models all           List all models (including non-chat tasks)',
      '  /pickmodel            Interactively pick model from numbered list',
      '  /model <name>         Switch model for this session',
      '  /showmodel            Show current model',
      '  /codebase             Show leaked codebase index summary',
      '  /where <query>        Search files/symbols in leaked codebase index',
      '  /probe <name>         Probe model accessibility on current endpoint/token',
      '  /folder <name>        Show top files inside a top-level folder',
      '  /retry                Retry the latest user turn',
      '  /undo                 Remove latest user/assistant turn pair',
      '  /temperature          Show current temperature',
      '  /temperature <value>  Set temperature (0.0 to 2.0)',
      '  /max-tokens           Show current max output tokens',
      '  /max-tokens <value>   Set max output tokens (64 to 8192)',
      '  /stream               Show streaming status',
      '  /stream <on|off>      Toggle real-time token streaming',
      '  /thinking             Show thinking-stream status',
      '  /thinking <on|off>    Toggle provider reasoning display',
      '  /system               Show current system prompt',
      '  /system <text>        Set new system prompt',
      '  /history              Show recent user/assistant messages',
      '  /save                 Save conversation markdown under assistant/sessions/',
      '  /sessions             List saved sessions',
      '  /resume <file|index>  Resume a saved JSON session',
      '  /profile              Show active runtime settings',
      '  /profiles             List saved profiles',
      '  /profile save [name]  Save current runtime profile',
      '  /profile load <name>  Load runtime profile',
      '  /hooks                Show active hook file and transform counts',
      '  /hooks reload         Reload hooks for current profile',
      '  /health               Check endpoint and circuit health',
      '  /dashboard            Show compact runtime overview',
      '  /stats                Show runtime/cache/queue stats',
      '  /cache clear          Clear in-memory model and codebase search caches',
      '  /clear                Clear conversation history (keeps system prompt)',
      '  /exit                 Quit',
    ].join('\n') + '\n\n'
  )
  printDivider('-')
  output.write('\n')
}

async function readStdinIfPiped() {
  if (process.stdin.isTTY) return ''
  let data = ''
  for await (const chunk of process.stdin) {
    data += chunk
  }
  return data.trim()
}

function isInputClosedError(err) {
  const msg = (err instanceof Error ? err.message : String(err)).toLowerCase()
  return msg.includes('aborted') || msg.includes('ctrl+d') || msg.includes('end of input')
}

function extractTextFromStructuredContent(value) {
  if (typeof value === 'string') return value
  if (Array.isArray(value)) {
    return value.map(part => extractTextFromStructuredContent(part)).join('')
  }
  if (!value || typeof value !== 'object') return ''

  const text = typeof value.text === 'string' ? value.text : ''
  const content =
    typeof value.content === 'string'
      ? value.content
      : Array.isArray(value.content)
        ? value.content.map(part => extractTextFromStructuredContent(part)).join('')
        : ''
  const valueField =
    String(value.type || '').toLowerCase() === 'text' && typeof value.value === 'string'
      ? value.value
      : ''

  return `${text}${content}${valueField}`
}

function extractThinkingFromStructuredContent(value) {
  if (!value || typeof value !== 'object') return ''

  const direct = [
    value.reasoning,
    value.reasoning_content,
    value.reasoning_text,
    value.thinking,
    value.thought,
  ]
    .map(v => (typeof v === 'string' ? v : ''))
    .filter(Boolean)
    .join('')

  const fromContentArray = Array.isArray(value.content)
    ? value.content
        .map(part => {
          if (!part || typeof part !== 'object') return ''
          const kind = String(part.type || '').toLowerCase()
          if (!kind.includes('reason') && !kind.includes('thinking')) return ''
          return extractTextFromStructuredContent(part)
        })
        .join('')
    : ''

  return `${direct}${fromContentArray}`
}

function parseChatSuccessPayload(parsed) {
  const choice = parsed?.choices?.[0] || {}
  const message = choice?.message || {}
  const content =
    extractTextFromStructuredContent(message?.content) ||
    extractTextFromStructuredContent(choice?.text) ||
    ''
  const thinking = extractThinkingFromStructuredContent(message)
  const finishReason = String(choice?.finish_reason || '').toLowerCase()

  return { content, thinking, finishReason }
}

async function chatOnce({
  endpoint,
  token,
  model,
  messages,
  timeoutMs,
  temperature,
  maxOutputTokens,
  stream = false,
  showThinking = false,
  onToken,
  onThinkingToken,
  continuationDepth = 0,
}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    let res
    try {
      const requestBody = {
        model,
        messages,
        temperature,
        ...(stream ? { stream: true } : {}),
      }

      if (isGitHubModelsEndpoint(endpoint)) {
        requestBody.max_tokens = maxOutputTokens
      } else {
        requestBody.max_tokens = maxOutputTokens
        requestBody.max_completion_tokens = maxOutputTokens
      }

      res = await fetch(endpoint, {
        method: 'POST',
        headers: buildApiRequestHeaders(token, endpoint),
        body: JSON.stringify(requestBody),
        signal: controller.signal,
      })
    } catch (err) {
      if (controller.signal.aborted) {
        throw new TimeoutError(timeoutMs)
      }
      throw err
    }

    if (!res.ok) {
      const text = await res.text()
      const headers = Object.fromEntries(res.headers.entries())
      let details = text
      try {
        const parsedErr = JSON.parse(text)
        const code = parsedErr?.error?.code
        if (code === 'unknown_model' || code === 'model_not_supported') {
          details +=
            '\nHint: run with --list-models, then pass one via --model <name> or set COPILOT_MODEL. Some endpoints use names like gpt-4o-mini (without openai/ prefix).'
        }
      } catch {
        // Keep raw body text when error response is not JSON.
      }
      throw new HTTPError(res.status, details, headers)
    }

    let content = ''
    let thinking = ''
    let finishReason = ''
    const contentType = String(res.headers.get('content-type') || '').toLowerCase()

    if (stream && contentType.includes('text/event-stream') && res.body) {
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      const processEvent = rawEvent => {
        const event = String(rawEvent || '').replace(/\r/g, '')
        if (!event) return

        const dataLines = []
        for (const line of event.split('\n')) {
          const trimmed = line.trim()
          if (!trimmed || trimmed.startsWith(':')) continue
          if (trimmed.toLowerCase().startsWith('data:')) {
            dataLines.push(trimmed.slice(5).trimStart())
          }
        }

        if (dataLines.length === 0) return
        const payload = dataLines.join('\n').trim()
        if (!payload || payload === '[DONE]') return

        try {
          const parsed = JSON.parse(payload)
          const choice = parsed?.choices?.[0] || {}
          const delta = choice?.delta || {}

          const contentDelta =
            extractTextFromStructuredContent(delta?.content) ||
            (typeof delta?.text === 'string' ? delta.text : '')
          if (contentDelta) {
            content += contentDelta
            if (typeof onToken === 'function') onToken(contentDelta)
          }

          const thinkingDelta = extractThinkingFromStructuredContent(delta)
          if (thinkingDelta) {
            thinking += thinkingDelta
            if (showThinking && typeof onThinkingToken === 'function') {
              onThinkingToken(thinkingDelta)
            }
          }

          if (!finishReason && choice?.finish_reason) {
            finishReason = String(choice.finish_reason).toLowerCase()
          }
        } catch {
          // Ignore malformed SSE payload fragments.
        }
      }

      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })

        while (true) {
          const boundary = buffer.indexOf('\n\n')
          if (boundary < 0) break
          const eventChunk = buffer.slice(0, boundary)
          buffer = buffer.slice(boundary + 2)
          processEvent(eventChunk)
        }
      }

      buffer += decoder.decode()
      if (buffer.trim()) {
        processEvent(buffer)
      }
    } else {
      const text = await res.text()
      let parsed
      try {
        parsed = JSON.parse(text)
      } catch {
        throw new Error('Response was not valid JSON')
      }

      const parsedPayload = parseChatSuccessPayload(parsed)
      content = parsedPayload.content
      thinking = parsedPayload.thinking
      finishReason = parsedPayload.finishReason

      if (thinking && showThinking && typeof onThinkingToken === 'function') {
        onThinkingToken(thinking)
      }
      if (content && stream && typeof onToken === 'function') {
        onToken(content)
      }
    }

    if (!content) {
      throw new Error('No assistant content in response')
    }

    // Some endpoints return partial output with finish_reason="length".
    // Continue once so interactive replies do not appear to stop mid-sentence.
    if (finishReason === 'length' && continuationDepth < 2) {
      if (typeof onToken === 'function') {
        onToken('\n')
      }
      const continuationPrompt = 'Continue exactly where you left off. Do not repeat previous text.'
      const continuationMessages = [
        ...messages,
        { role: 'assistant', content: String(content) },
        { role: 'user', content: continuationPrompt },
      ]

      const continuation = await chatOnce({
        endpoint,
        token,
        model,
        messages: continuationMessages,
        timeoutMs,
        temperature,
        maxOutputTokens,
        stream,
        showThinking,
        onToken,
        onThinkingToken,
        continuationDepth: continuationDepth + 1,
      })

      return `${String(content).trimEnd()}\n${String(continuation).trimStart()}`
    }

    return String(content)
  } finally {
    clearTimeout(timeout)
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function parseRetryAfterMs(headerValue) {
  if (!headerValue) return null

  const numeric = Number(headerValue)
  if (Number.isFinite(numeric) && numeric >= 0) {
    return Math.floor(numeric * 1000)
  }

  const dateTs = Date.parse(String(headerValue))
  if (Number.isFinite(dateTs)) {
    const delta = dateTs - Date.now()
    return delta > 0 ? delta : 0
  }

  return null
}

function shouldTripCircuit(err) {
  if (err instanceof QueueFullError || err instanceof CircuitOpenError) {
    return false
  }
  const classification = classifyRetry(err)
  return classification.retryable
}

function isAuthRefreshCandidate(err) {
  return err instanceof HTTPError && (err.status === 401 || err.status === 403)
}

function isModelUnavailableError(err) {
  const detail = err instanceof HTTPError
    ? `${String(err.body || '')} ${String(err.message || '')}`
    : err instanceof Error
      ? String(err.message || '')
      : String(err || '')

  return /unknown_model|model_not_supported|unsupported_api_for_model/i.test(detail)
}

function classifyRetry(err) {
  if (err instanceof TimeoutError) {
    return { retryable: true, reason: 'timeout', retryAfterMs: null }
  }

  if (err instanceof HTTPError) {
    if (err.status === 429) {
      return {
        retryable: true,
        reason: 'rate_limited',
        retryAfterMs: parseRetryAfterMs(err.headers?.['retry-after']),
      }
    }
    if (err.status === 408 || err.status === 409 || err.status === 425) {
      return { retryable: true, reason: `http_${err.status}`, retryAfterMs: null }
    }
    if (err.status >= 500 && err.status <= 599) {
      return { retryable: true, reason: `http_${err.status}`, retryAfterMs: null }
    }
    return { retryable: false, reason: `http_${err.status}`, retryAfterMs: null }
  }

  if (err instanceof TypeError) {
    return { retryable: true, reason: 'network_error', retryAfterMs: null }
  }

  return { retryable: false, reason: 'non_retryable', retryAfterMs: null }
}

function computeRetryDelayMs(attempt, retryAfterMs = null) {
  if (Number.isFinite(retryAfterMs) && retryAfterMs !== null) {
    return Math.min(Math.max(0, Math.floor(retryAfterMs)), 30_000)
  }
  const backoffMs = Math.min(1_000 * 2 ** attempt, 12_000)
  const jitterMs = Math.floor(Math.random() * 400)
  return backoffMs + jitterMs
}

async function chatWithRetry({
  endpoint,
  token,
  model,
  messages,
  timeoutMs,
  temperature,
  maxOutputTokens,
  stream,
  showThinking,
  onToken,
  onThinkingToken,
  maxRetries,
  metrics,
  onRetry,
}) {
  const startedAt = Date.now()
  const effectiveMaxRetries = stream ? 0 : maxRetries
  if (metrics) {
    metrics.requests += 1
  }

  let attempt = 0
  while (true) {
    try {
      const result = await chatOnce({
        endpoint,
        token,
        model,
        messages,
        timeoutMs,
        temperature,
        maxOutputTokens,
        stream,
        showThinking,
        onToken,
        onThinkingToken,
      })
      if (metrics) {
        metrics.successfulRequests += 1
        metrics.totalLatencyMs += Date.now() - startedAt
      }
      return result
    } catch (err) {
      const classification = classifyRetry(err)
      if (!classification.retryable || attempt >= effectiveMaxRetries) {
        if (metrics) {
          metrics.failedRequests += 1
          metrics.totalLatencyMs += Date.now() - startedAt
        }
        throw err
      }

      const waitMs = computeRetryDelayMs(attempt, classification.retryAfterMs)
      if (metrics) {
        metrics.retries += 1
      }
      if (typeof onRetry === 'function') {
        onRetry({
          attempt: attempt + 1,
          waitMs,
          reason: classification.reason,
        })
      }

      await sleep(waitMs)
      attempt += 1
    }
  }
}

function printRuntimeProfile({
  endpoint,
  model,
  temperature,
  maxOutputTokens,
  stream,
  showThinking,
  timeoutMs,
  maxRetries,
  maxTurns,
  maxHistoryMessages,
  allowRiskyPrompts,
  circuitFailures,
  circuitCooldownMs,
  profile,
  modelsCacheTtlMs,
  modelsCacheStaleMs,
  whereCacheTtlMs,
  queueMaxPending,
}) {
  output.write(
    [
      'Runtime profile:',
      `- profile: ${profile}`,
      `- endpoint: ${endpoint}`,
      `- model: ${model}`,
      `- temperature: ${temperature}`,
      `- maxOutputTokens: ${maxOutputTokens}`,
      `- stream: ${stream}`,
      `- showThinking: ${showThinking}`,
      `- timeoutMs: ${timeoutMs}`,
      `- maxRetries: ${maxRetries}`,
      `- maxTurns: ${maxTurns > 0 ? maxTurns : 'unlimited'}`,
      `- maxHistoryMessages: ${maxHistoryMessages}`,
      `- allowRiskyPrompts: ${allowRiskyPrompts}`,
      `- circuitFailures: ${circuitFailures}`,
      `- circuitCooldownMs: ${circuitCooldownMs}`,
      `- modelsCacheTtlMs: ${modelsCacheTtlMs}`,
      `- modelsCacheStaleMs: ${modelsCacheStaleMs}`,
      `- whereCacheTtlMs: ${whereCacheTtlMs}`,
      `- queueMaxPending: ${queueMaxPending}`,
    ].join('\n') + '\n\n'
  )
}

function printRecentHistory(history, limit = 8) {
  const messages = history.filter(
    m => m?.role === 'user' || m?.role === 'assistant'
  )
  const tail = messages.slice(-limit)

  if (tail.length === 0) {
    output.write('No conversation history yet.\n\n')
    return
  }

  output.write('Recent conversation:\n')
  tail.forEach((m, i) => {
    const label = m.role === 'user' ? 'you' : 'assistant'
    const text = String(m.content ?? '').replace(/\s+/g, ' ').trim()
    const clipped = text.length > 180 ? `${text.slice(0, 177)}...` : text
    output.write(`${i + 1}. ${label}: ${clipped}\n`)
  })
  output.write('\n')
}

function printDashboard({
  profile,
  model,
  endpoint,
  metrics,
  queue,
  circuitBreaker,
  hooks,
  maxRetries,
  maxOutputTokens,
  stream,
  showThinking,
  timeoutMs,
  maxHistoryMessages,
}) {
  const circuit = circuitBreaker.status()
  output.write(
    [
      ui.heading('Dashboard:'),
      formatListItem('- profile:', profile),
      formatListItem('- model:', model),
      formatListItem('- endpoint:', endpoint),
      formatListItem('- timeoutMs:', String(timeoutMs)),
      formatListItem('- maxOutputTokens:', String(maxOutputTokens)),
      formatListItem('- stream:', String(stream)),
      formatListItem('- showThinking:', String(showThinking)),
      formatListItem('- maxRetries:', String(maxRetries)),
      formatListItem('- maxHistoryMessages:', String(maxHistoryMessages)),
      formatListItem(
        '- circuit:',
        `${circuit.state} (failures=${circuit.failureCount}/${circuit.failureThreshold}, remainingMs=${circuit.remainingMs})`
      ),
      formatListItem('- queue:', `size=${queue.size()}, maxDepth=${queue.metrics.maxObservedDepth}`),
      formatListItem('- requests:', `${metrics.requests} total, ${metrics.failedRequests} failed`),
      formatListItem('- avgLatencyMs:', String(averageLatencyMs(metrics))),
      formatListItem(
        '- hooks:',
        `${hooks.fileName || 'none'} (beforeSend=${hooks.beforeSend.length}, afterReceive=${hooks.afterReceive.length})`
      ),
      '',
    ].join('\n')
  )
}

function timestampSlug() {
  return new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').replace('Z', '')
}

function sanitizeProfileName(name) {
  const cleaned = String(name || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-')
  return cleaned || 'default'
}

function sessionBasename() {
  return `session_${timestampSlug()}`
}

async function saveConversation({ history, model, endpoint, temperature, timeoutMs }) {
  const outDir = SESSIONS_DIR
  await mkdir(outDir, { recursive: true })

  const base = sessionBasename()
  const mdPath = path.join(outDir, `${base}.md`)
  const jsonPath = path.join(outDir, `${base}.json`)
  const lines = [
    '# Copilot Assistant Session',
    '',
    `- model: ${model}`,
    `- endpoint: ${endpoint}`,
    `- temperature: ${temperature}`,
    `- timeoutMs: ${timeoutMs}`,
    '',
    '---',
    '',
  ]

  for (const m of history) {
    if (m?.role !== 'user' && m?.role !== 'assistant' && m?.role !== 'system') {
      continue
    }
    lines.push(`## ${m.role}`)
    lines.push('')
    lines.push(String(m.content ?? ''))
    lines.push('')
  }

  await writeFile(mdPath, lines.join('\n'), 'utf8')
  await writeFile(
    jsonPath,
    JSON.stringify(
      {
        savedAt: new Date().toISOString(),
        endpoint,
        model,
        temperature,
        timeoutMs,
        history,
      },
      null,
      2
    ),
    'utf8'
  )

  return { mdPath, jsonPath }
}

async function listSavedSessions() {
  try {
    const entries = await readdir(SESSIONS_DIR, { withFileTypes: true })
    return entries
      .filter(e => e.isFile() && e.name.endsWith('.json'))
      .map(e => e.name)
      .sort((a, b) => b.localeCompare(a))
  } catch {
    return []
  }
}

async function loadSavedSession(spec) {
  const sessions = await listSavedSessions()
  if (sessions.length === 0) {
    throw new Error('No saved sessions found')
  }

  let chosen = ''
  const n = Number(spec)
  if (Number.isInteger(n) && n >= 1 && n <= sessions.length) {
    chosen = sessions[n - 1]
  } else {
    const normalized = String(spec || '').trim()
    if (!normalized) {
      chosen = sessions[0]
    } else if (normalized.endsWith('.json')) {
      chosen = normalized
    } else {
      chosen = `${normalized}.json`
    }
  }

  const raw = await readFile(path.join(SESSIONS_DIR, chosen), 'utf8')
  const parsed = JSON.parse(raw)
  const history = Array.isArray(parsed?.history) ? parsed.history : []
  return {
    file: chosen,
    model: typeof parsed?.model === 'string' ? parsed.model : '',
    endpoint: typeof parsed?.endpoint === 'string' ? parsed.endpoint : '',
    temperature:
      typeof parsed?.temperature === 'number' && Number.isFinite(parsed.temperature)
        ? parsed.temperature
        : undefined,
    timeoutMs:
      typeof parsed?.timeoutMs === 'number' && Number.isFinite(parsed.timeoutMs)
        ? parsed.timeoutMs
        : undefined,
    history,
  }
}

async function listSavedProfiles() {
  try {
    const entries = await readdir(PROFILES_DIR, { withFileTypes: true })
    return entries
      .filter(e => e.isFile() && e.name.endsWith('.json'))
      .map(e => e.name.replace(/\.json$/i, ''))
      .sort((a, b) => a.localeCompare(b))
  } catch {
    return []
  }
}

async function loadProfile(name) {
  const profileName = sanitizeProfileName(name)
  const raw = await readFile(path.join(PROFILES_DIR, `${profileName}.json`), 'utf8')
  return JSON.parse(raw)
}

async function saveProfile(name, data) {
  const profileName = sanitizeProfileName(name)
  await mkdir(PROFILES_DIR, { recursive: true })
  const filePath = path.join(PROFILES_DIR, `${profileName}.json`)
  await writeFile(filePath, JSON.stringify(data, null, 2), 'utf8')
  return filePath
}

function deriveModelsEndpoint(chatEndpoint) {
  if (isGitHubModelsEndpoint(chatEndpoint)) {
    try {
      const url = new URL(String(chatEndpoint || ''))
      return `${url.origin}/catalog/models`
    } catch {
      return 'https://models.github.ai/catalog/models'
    }
  }

  return chatEndpoint.replace(/\/chat\/completions\/?$/, '/models')
}

function modelsCacheKey(endpoint, token) {
  return `${deriveModelsEndpoint(endpoint)}::${tokenFingerprint(token)}`
}

async function fetchModelsFromEndpoint({ endpoint, token, timeoutMs }) {
  const modelsEndpoint = deriveModelsEndpoint(endpoint)
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    let res
    try {
      res = await fetch(modelsEndpoint, {
        method: 'GET',
        headers: buildApiRequestHeaders(token, modelsEndpoint),
        signal: controller.signal,
      })
    } catch (err) {
      if (controller.signal.aborted) {
        throw new TimeoutError(timeoutMs)
      }
      throw err
    }

    const text = await res.text()
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${text}`)
    }

    const parsed = JSON.parse(text)
    const rawModels = Array.isArray(parsed)
      ? parsed
      : Array.isArray(parsed?.data)
        ? parsed.data
        : []
    const chatModels = rawModels.filter(m => !m?.task || m.task === 'chat-completion')
    return { rawModels, chatModels }
  } finally {
    clearTimeout(timeout)
  }
}

async function refreshModelsCacheEntry({
  cacheKey,
  endpoint,
  token,
  timeoutMs,
  modelsCacheTtlMs,
  metrics,
}) {
  const inFlight = modelRefreshInFlight.get(cacheKey)
  if (inFlight) return inFlight

  const refreshPromise = (async () => {
    if (metrics) metrics.cache.models.refreshes += 1
    const fetched = await fetchModelsFromEndpoint({ endpoint, token, timeoutMs })
    modelListCache.set(cacheKey, fetched, modelsCacheTtlMs)
    return fetched
  })()
    .catch(err => {
      if (metrics) metrics.cache.models.refreshFailures += 1
      throw err
    })
    .finally(() => {
      modelRefreshInFlight.delete(cacheKey)
    })

  modelRefreshInFlight.set(cacheKey, refreshPromise)
  return refreshPromise
}

async function loadCodebaseIndex() {
  if (codebaseIndexCache) return codebaseIndexCache
  const raw = await readFile(CODEBASE_INDEX_PATH, 'utf8')
  const parsed = JSON.parse(raw)
  codebaseIndexCache = parsed
  return parsed
}

function printCodebaseSummary(index) {
  output.write(`${ui.heading('Leaked codebase summary:')}\n`)
  output.write(`${formatListItem('- generatedAt:', String(index.generatedAt))}\n`)
  output.write(`${formatListItem('- files:', String(index?.totals?.files ?? 0))}\n`)
  output.write(`${formatListItem('- lines:', String(index?.totals?.lines ?? 0))}\n`)
  output.write(`${formatListItem('- exported symbols:', String(index?.totals?.exports ?? 0))}\n`)
  output.write(`${ui.info('Top folders:')}\n`)
  for (const row of (index.topFolders || []).slice(0, 8)) {
    output.write(`${formatListItem(`- ${row.folder}:`, `files=${row.files}, lines=${row.lines}`)}\n`)
  }
  output.write('\n')
}

function scoreFileMatch(file, qLower, tokens) {
  let s = 0
  const p = String(file.path || '').toLowerCase()
  if (p.includes(qLower)) s += 25

  const tags = Array.isArray(file.tags) ? file.tags : []
  const exportsList = Array.isArray(file.exports) ? file.exports : []
  const classes = Array.isArray(file.classes) ? file.classes : []
  const funcs = Array.isArray(file.functions) ? file.functions : []
  const comment = String(file.topComment || '').toLowerCase()

  for (const t of tokens) {
    if (!t) continue
    if (p.includes(t)) s += 4
    if (tags.some(x => String(x).toLowerCase().includes(t))) s += 5
    if (exportsList.some(x => String(x).toLowerCase().includes(t))) s += 5
    if (classes.some(x => String(x).toLowerCase().includes(t))) s += 4
    if (funcs.some(x => String(x).toLowerCase().includes(t))) s += 3
    if (comment.includes(t)) s += 2
  }

  s += Math.min(Number(file.importance || 0), 15)
  return s
}

function searchCodebase(index, query, limit = 12) {
  const qLower = String(query || '').trim().toLowerCase()
  const tokens = qLower.split(/\s+/).filter(Boolean)
  if (!qLower) return []

  const scored = (index.files || [])
    .map(file => ({ file, score: scoreFileMatch(file, qLower, tokens) }))
    .filter(item => item.score > 10)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scored
}

function searchCodebaseCached(index, query, { ttlMs, metrics, limit = 12 }) {
  const normalized = String(query || '').trim().toLowerCase()
  if (!normalized) return []

  const generatedAt = String(index?.generatedAt || '')
  const key = `${generatedAt}::${normalized}::${limit}`
  const hit = whereResultsCache.getFresh(key)
  if (hit) {
    if (metrics) metrics.cache.where.hits += 1
    return hit
  }

  if (metrics) metrics.cache.where.misses += 1
  const computed = searchCodebase(index, normalized, limit)
  whereResultsCache.set(key, computed, ttlMs)
  return computed
}

function printWhereResults(results) {
  if (results.length === 0) {
    output.write('No matching files found in index.\n\n')
    return
  }
  output.write(`${ui.heading('Top matches:')}\n`)
  for (const r of results) {
    const f = r.file
    const tags = Array.isArray(f.tags) && f.tags.length ? f.tags.join(', ') : 'none'
    output.write(
      `${formatListItem(`- ${f.path}:`, `score=${r.score}, importance=${f.importance}, lines=${f.lineCount}, tags=${tags}`)}\n`
    )
  }
  output.write('\n')
}

function printFolderSummary(index, folderName) {
  const target = String(folderName || '').trim().toLowerCase()
  if (!target) {
    output.write('Usage: /folder <name>\n\n')
    return
  }

  const files = (index.files || []).filter(f => {
    const seg = String(f.path || '').split('/')[1] || ''
    return seg.toLowerCase() === target
  })

  if (files.length === 0) {
    output.write(`No files found for top-level folder: ${folderName}\n\n`)
    return
  }

  const top = [...files].sort((a, b) => b.importance - a.importance).slice(0, 12)
  output.write(`${ui.heading(`Folder '${folderName}' summary:`)} ${files.length} files\n`)
  output.write(`${ui.info('Top important files:')}\n`)
  for (const f of top) {
    output.write(
      `${formatListItem(`- ${f.path}:`, `importance=${f.importance}, lines=${f.lineCount}, exports=${f.exportCount}`)}\n`
    )
  }
  output.write('\n')
}

async function resolveModelInput(
  inputModel,
  { endpoint, token, timeoutMs, modelsCacheTtlMs, modelsCacheStaleMs, metrics }
) {
  const raw = normalizeModelName(inputModel)
  if (!raw) return raw

  const aliases = {
    sonnet: ['sonnet', 'claude-sonnet', 'claude sonnet'],
    opus: ['opus', 'claude-opus', 'claude opus'],
    haiku: ['haiku', 'claude-haiku', 'claude haiku'],
    gpt4o: ['gpt-4o', 'gpt4o'],
    gpt4omini: ['gpt-4o-mini', 'gpt4omini', 'gpt4o-mini'],
  }

  const lower = raw.toLowerCase()
  const aliasKey = Object.keys(aliases).find(key => aliases[key].includes(lower))
  if (!aliasKey) {
    try {
      const { chatModels } = await fetchModels({
        endpoint,
        token,
        timeoutMs,
        modelsCacheTtlMs,
        modelsCacheStaleMs,
        metrics,
      })
      const matched = findModelMatch(chatModels, raw)
      return matched || raw
    } catch {
      return raw
    }
  }

  try {
    const { chatModels } = await fetchModels({
      endpoint,
      token,
      timeoutMs,
      modelsCacheTtlMs,
      modelsCacheStaleMs,
      metrics,
    })
    const preferred = {
      sonnet: ['sonnet'],
      opus: ['opus'],
      haiku: ['haiku'],
      gpt4o: ['gpt-4o'],
      gpt4omini: ['gpt-4o-mini'],
    }[aliasKey]

    const found = chatModels.find(m => {
      const label = `${String(m?.name ?? '')} ${String(m?.id ?? '')}`.toLowerCase()
      return preferred.some(term => label.includes(term))
    })
    return found ? modelValue(found) : raw
  } catch {
    return raw
  }
}

function modelValue(modelEntry) {
  const name = String(modelEntry?.name || '').trim()
  const id = String(modelEntry?.id || '').trim()

  // Prefer machine-friendly IDs when they are requestable model slugs.
  // Keep using name for URI-like IDs (for example azureml://...) that are
  // metadata identifiers rather than request model names.
  if (id && !/^azureml:\/\//i.test(id) && !/^https?:\/\//i.test(id)) {
    return id
  }
  if (name) return name
  if (id) return id
  return ''
}

function normalizeModelName(inputModel) {
  const raw = String(inputModel || '').trim()
  if (!raw) return ''
  const lower = raw.toLowerCase()
  for (const prefix of MODEL_PROVIDER_PREFIXES) {
    if (lower.startsWith(prefix)) {
      return raw.slice(prefix.length)
    }
  }
  return raw
}

function modelRequestCandidates(inputModel) {
  const raw = String(inputModel || '').trim()
  const normalized = normalizeModelName(raw)
  const values = [raw, normalized]
  return [...new Set(values.filter(Boolean))]
}

function findModelMatch(models, requestedModel) {
  const candidates = modelRequestCandidates(requestedModel)
    .map(v => v.toLowerCase())
    .filter(Boolean)

  if (candidates.length === 0) return ''

  for (const entry of models) {
    const name = String(entry?.name || '').toLowerCase()
    const id = String(entry?.id || '').toLowerCase()
    if (!name && !id) continue
    if (candidates.some(c => c === name || c === id)) {
      return modelValue(entry)
    }
  }

  for (const entry of models) {
    const name = String(entry?.name || '').toLowerCase()
    const id = String(entry?.id || '').toLowerCase()
    if (!name && !id) continue
    const hasMatch = candidates.some(c => {
      if (c.includes('/')) return false
      return name.includes(c) || id.includes(`/${c}/`) || id.endsWith(`/${c}`)
    })
    if (hasMatch) {
      return modelValue(entry)
    }
  }

  return ''
}

function formatModelLabel(modelEntry) {
  const name = modelEntry?.name ? String(modelEntry.name) : ''
  const id = modelEntry?.id ? String(modelEntry.id) : ''
  if (name && id) return `${name} (${id})`
  if (name) return name
  if (id) return id
  return '(unknown model)'
}

async function fetchModels({
  endpoint,
  token,
  timeoutMs,
  modelsCacheTtlMs = DEFAULT_MODELS_CACHE_TTL_MS,
  modelsCacheStaleMs = DEFAULT_MODELS_STALE_MS,
  forceRefresh = false,
  metrics,
}) {
  const cacheKey = modelsCacheKey(endpoint, token)
  const now = Date.now()

  if (!forceRefresh) {
    const fresh = modelListCache.getFresh(cacheKey, now)
    if (fresh) {
      if (metrics) metrics.cache.models.hits += 1
      return fresh
    }

    const staleEntry = modelListCache.getStale(cacheKey, now)
    if (staleEntry) {
      const staleAge = Math.max(0, now - staleEntry.expiresAt)
      if (staleAge <= modelsCacheStaleMs) {
        if (metrics) metrics.cache.models.staleHits += 1
        if (!modelRefreshInFlight.has(cacheKey)) {
          void refreshModelsCacheEntry({
            cacheKey,
            endpoint,
            token,
            timeoutMs,
            modelsCacheTtlMs,
            metrics,
          }).catch(() => {
            // Keep serving stale cache until stale window expires.
          })
        }
        return staleEntry.value
      }

      modelListCache.delete(cacheKey)
    }
  }

  if (metrics) metrics.cache.models.misses += 1
  return await refreshModelsCacheEntry({
    cacheKey,
    endpoint,
    token,
    timeoutMs,
    modelsCacheTtlMs,
    metrics,
  })
}

function printModelList(models, heading) {
  if (models.length === 0) {
    output.write('No models found.\n')
    return
  }

  output.write(`${ui.heading(`${heading}:`)}\n`)
  models.forEach((m, i) => {
    output.write(`${ui.dim(`${i + 1}.`)} ${formatModelLabel(m)}\n`)
  })
}

async function listModels({
  endpoint,
  token,
  timeoutMs,
  includeAll = false,
  forceRefresh = false,
  modelsCacheTtlMs,
  modelsCacheStaleMs,
  metrics,
}) {
  const { rawModels, chatModels } = await fetchModels({
    endpoint,
    token,
    timeoutMs,
    modelsCacheTtlMs,
    modelsCacheStaleMs,
    forceRefresh,
    metrics,
  })
  const models = includeAll ? rawModels : chatModels

  if (!includeAll && models.length === 0) {
    output.write('No chat-completion models returned by endpoint.\n')
    if (rawModels.length > 0) {
      output.write(
        `Found ${rawModels.length} total models, but none marked chat-completion.\n`
      )
    }
    return models
  }

  if (includeAll) {
    printModelList(models, 'Available models (all tasks)')
  } else {
    printModelList(models, 'Available chat models')
  }

  return models
}

async function pickModelInteractive({
  endpoint,
  token,
  timeoutMs,
  rl,
  modelsCacheTtlMs,
  modelsCacheStaleMs,
  metrics,
}) {
  const models = await listModels({
    endpoint,
    token,
    timeoutMs,
    includeAll: false,
    modelsCacheTtlMs,
    modelsCacheStaleMs,
    metrics,
  })
  if (models.length === 0) {
    return null
  }

  const raw = (await rl.question('pick model (number or name, blank to cancel)> ')).trim()
  if (!raw) return null

  const n = Number(raw)
  if (Number.isInteger(n) && n >= 1 && n <= models.length) {
    const selected = modelValue(models[n - 1])
    return selected || null
  }

  const byName = models.find(
    m => m?.name && String(m.name).toLowerCase() === raw.toLowerCase()
  )
  if (byName) {
    return modelValue(byName) || null
  }

  const byId = models.find(
    m => m?.id && String(m.id).toLowerCase() === raw.toLowerCase()
  )
  if (byId) {
    return modelValue(byId) || null
  }

  const matched = findModelMatch(models, raw)
  return matched || normalizeModelName(raw)
}

async function selectAccessibleFallbackModel({
  endpoint,
  token,
  chatModels,
  timeoutMs,
  temperature = 0,
}) {
  const candidates = Array.isArray(chatModels)
    ? chatModels.map(model => modelValue(model)).filter(Boolean)
    : []

  for (const candidate of candidates.slice(0, 20)) {
    try {
      const probe = await probeModelAccess({
        endpoint,
        token,
        model: candidate,
        timeoutMs: Math.min(timeoutMs, 10_000),
        temperature,
      })
      if (probe.ok) return candidate
    } catch {
      // Ignore failed probe and continue scanning fallback candidates.
    }
  }

  return ''
}

function normalizeRuntimeArgs(args) {
  args.timeoutMs = normalizeMs(args.timeoutMs, 60000, 1000, 15 * 60 * 1000)
  args.temperature = clampNumber(args.temperature, 0.2, 0, 2)
  args.maxOutputTokens = Math.floor(clampNumber(args.maxOutputTokens, 2048, 64, 8192))
  args.maxRetries = Math.floor(clampNumber(args.maxRetries, 2, 0, 8))
  args.maxTurns = Math.floor(clampNumber(args.maxTurns, 0, 0, 10000))
  args.maxHistoryMessages = Math.floor(
    clampNumber(args.maxHistoryMessages, DEFAULT_MAX_HISTORY_MESSAGES, 8, 120)
  )
  args.circuitFailures = Math.floor(
    clampNumber(args.circuitFailures, DEFAULT_CIRCUIT_FAILURES, 1, 20)
  )
  args.circuitCooldownMs = normalizeMs(
    args.circuitCooldownMs,
    DEFAULT_CIRCUIT_COOLDOWN_MS,
    1000,
    10 * 60 * 1000
  )
  args.modelsCacheTtlMs = normalizeMs(
    args.modelsCacheTtlMs,
    DEFAULT_MODELS_CACHE_TTL_MS,
    1000,
    24 * 60 * 60 * 1000
  )
  args.modelsCacheStaleMs = normalizeMs(
    args.modelsCacheStaleMs,
    DEFAULT_MODELS_STALE_MS,
    1000,
    14 * 24 * 60 * 60 * 1000
  )
  args.whereCacheTtlMs = normalizeMs(
    args.whereCacheTtlMs,
    DEFAULT_WHERE_CACHE_TTL_MS,
    1000,
    6 * 60 * 60 * 1000
  )
  args.queueMaxPending = Math.floor(
    clampNumber(args.queueMaxPending, DEFAULT_QUEUE_MAX_PENDING, 1, 500)
  )
}

async function run() {
  const args = parseArgs(process.argv)

  // Profile defaults: profile values apply unless explicitly overridden by CLI flags.
  try {
    const profile = await loadProfile(args.profile)
    if (!args.explicit.model && typeof profile?.model === 'string') args.model = profile.model
    if (!args.explicit.endpoint && typeof profile?.endpoint === 'string') args.endpoint = profile.endpoint
    if (!args.explicit.system && typeof profile?.system === 'string') args.system = profile.system
    if (!args.explicit.temperature && typeof profile?.temperature === 'number') {
      args.temperature = profile.temperature
    }
    if (!args.explicit.maxOutputTokens && typeof profile?.maxOutputTokens === 'number') {
      args.maxOutputTokens = profile.maxOutputTokens
    }
    if (!args.explicit.stream && typeof profile?.stream === 'boolean') {
      args.stream = profile.stream
    }
    if (!args.explicit.showThinking && typeof profile?.showThinking === 'boolean') {
      args.showThinking = profile.showThinking
    }
    if (!args.explicit.timeoutMs && typeof profile?.timeoutMs === 'number') {
      args.timeoutMs = profile.timeoutMs
    }
    if (!args.explicit.maxRetries && typeof profile?.maxRetries === 'number') {
      args.maxRetries = profile.maxRetries
    }
    if (!args.explicit.maxTurns && typeof profile?.maxTurns === 'number') {
      args.maxTurns = profile.maxTurns
    }
    if (!args.explicit.maxHistoryMessages && typeof profile?.maxHistoryMessages === 'number') {
      args.maxHistoryMessages = profile.maxHistoryMessages
    }
    if (!args.explicit.circuitFailures && typeof profile?.circuitFailures === 'number') {
      args.circuitFailures = profile.circuitFailures
    }
    if (!args.explicit.circuitCooldownMs && typeof profile?.circuitCooldownMs === 'number') {
      args.circuitCooldownMs = profile.circuitCooldownMs
    }
    if (!args.explicit.allowRiskyPrompts && typeof profile?.allowRiskyPrompts === 'boolean') {
      args.allowRiskyPrompts = profile.allowRiskyPrompts
    }
    if (!args.explicit.color && typeof profile?.color === 'boolean') {
      args.color = profile.color
      if (!args.color) process.env.NO_COLOR = '1'
      else delete process.env.NO_COLOR
    }
    if (!args.explicit.modelsCacheTtlMs && typeof profile?.modelsCacheTtlMs === 'number') {
      args.modelsCacheTtlMs = profile.modelsCacheTtlMs
    }
    if (!args.explicit.modelsCacheStaleMs && typeof profile?.modelsCacheStaleMs === 'number') {
      args.modelsCacheStaleMs = profile.modelsCacheStaleMs
    }
    if (!args.explicit.whereCacheTtlMs && typeof profile?.whereCacheTtlMs === 'number') {
      args.whereCacheTtlMs = profile.whereCacheTtlMs
    }
    if (!args.explicit.queueMaxPending && typeof profile?.queueMaxPending === 'number') {
      args.queueMaxPending = profile.queueMaxPending
    }
  } catch {
    // Ignore missing or invalid profiles; defaults remain in place.
  }

  normalizeRuntimeArgs(args)
  if (!args.color) process.env.NO_COLOR = '1'
  else delete process.env.NO_COLOR

  const metrics = createRuntimeMetrics()
  const requestQueue = new SerialTaskQueue(args.queueMaxPending)
  const circuitBreaker = new CircuitBreaker({
    failureThreshold: args.circuitFailures,
    cooldownMs: args.circuitCooldownMs,
  })

  if (args.help) {
    printHelp()
    return
  }

  if (args.setDefaultModel) {
    try {
      const saved = await updateDefaultModelProfile(args.setDefaultModel)
      output.write(`Saved default model: ${saved.model}\n`)
      output.write(`Profile file: ${saved.filePath}\n`)
      return
    } catch (err) {
      output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
      process.exitCode = 1
      return
    }
  }

  if (!args.token) {
    output.write(
      '[ERROR] Missing token. Set COPILOT_AUTH_TOKEN, COPILOT_GITHUB_TOKEN, GITHUB_TOKEN, GH_TOKEN, or pass --token.\n'
    )
    process.exitCode = 1
    return
  }

  const runtimeAuth = {
    sourceToken: String(args.token || ''),
    apiToken: String(args.token || ''),
    mode: 'direct',
    expiresAt: 0,
    baseUrl: '',
    source: 'direct',
  }

  const shouldTryCopilotRuntimeAuth =
    args.githubCopilotAuth &&
    runtimeAuth.sourceToken.length > 0 &&
    args.tokenSource !== 'copilot_auth_token' &&
    !isGitHubModelsEndpoint(args.endpoint)

  if (shouldTryCopilotRuntimeAuth) {
    try {
      const resolved = await resolveCopilotRuntimeAuth({
        githubToken: runtimeAuth.sourceToken,
        timeoutMs: args.timeoutMs,
      })
      runtimeAuth.apiToken = resolved.token
      runtimeAuth.mode = 'github-copilot-runtime'
      runtimeAuth.expiresAt = resolved.expiresAt
      runtimeAuth.baseUrl = resolved.baseUrl
      runtimeAuth.source = resolved.source
      args.endpoint = applyBaseUrlToEndpoint(args.endpoint, resolved.baseUrl)
      output.write(
        `${ui.dim(
          `[auth] using GitHub Copilot runtime token (${resolved.source}); base=${resolved.baseUrl}`
        )}\n`
      )
    } catch (err) {
      output.write(
        `${ui.dim(
          `[auth] GitHub Copilot runtime exchange unavailable; continuing with direct token (${err instanceof Error ? err.message : String(err)})`
        )}\n`
      )
    }
  }

  const currentApiToken = () => runtimeAuth.apiToken

  args.model = await resolveModelInput(args.model, {
    endpoint: args.endpoint,
    token: currentApiToken(),
    timeoutMs: args.timeoutMs,
    modelsCacheTtlMs: args.modelsCacheTtlMs,
    modelsCacheStaleMs: args.modelsCacheStaleMs,
    metrics,
  })

  let activeHooks = await loadHooks(args.profile)

  if (args.probeModel) {
    try {
      const resolved = await resolveModelInput(args.probeModel, {
        endpoint: args.endpoint,
        token: currentApiToken(),
        timeoutMs: args.timeoutMs,
        modelsCacheTtlMs: args.modelsCacheTtlMs,
        modelsCacheStaleMs: args.modelsCacheStaleMs,
        metrics,
      })
      const result = await probeModelAccess({
        endpoint: args.endpoint,
        token: currentApiToken(),
        model: resolved,
        timeoutMs: args.timeoutMs,
      })
      output.write(`Requested model: ${args.probeModel}\n`)
      output.write(`Resolved model: ${resolved}\n`)
      output.write(`Accessible: ${result.ok}\n`)
      output.write(`Reason: ${result.reason}\n`)
      if (result.details) output.write(`Details: ${result.details}\n`)
      return
    } catch (err) {
      output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
      process.exitCode = 1
      return
    }
  }

  const runGuardedChat = async ({
    endpoint,
    model,
    timeoutMs,
    temperature,
    maxOutputTokens,
    stream,
    showThinking,
    onToken,
    onThinkingToken,
    maxRetries,
    messages,
    onRetry,
  }) => {
    const gate = circuitBreaker.canRequest()
    if (!gate.allowed) {
      metrics.circuitOpenRejections += 1
      throw new CircuitOpenError(gate.remainingMs)
    }

    const runWithCurrentAuth = async targetEndpoint => {
      return await requestQueue.enqueue(async () => {
        return await chatWithRetry({
          endpoint: targetEndpoint,
          token: currentApiToken(),
          model,
          timeoutMs,
          temperature,
          maxOutputTokens,
          stream,
          showThinking,
          onToken,
          onThinkingToken,
          messages,
          maxRetries,
          metrics,
          onRetry,
        })
      })
    }

    try {
      const reply = await runWithCurrentAuth(endpoint)
      circuitBreaker.onSuccess()
      return reply
    } catch (err) {
      if (isAuthRefreshCandidate(err) && runtimeAuth.sourceToken && args.githubCopilotAuth) {
        try {
          const refreshed = await resolveCopilotRuntimeAuth({
            githubToken: runtimeAuth.sourceToken,
            forceRefresh: true,
            timeoutMs,
          })
          runtimeAuth.apiToken = refreshed.token
          runtimeAuth.mode = 'github-copilot-runtime'
          runtimeAuth.expiresAt = refreshed.expiresAt
          runtimeAuth.baseUrl = refreshed.baseUrl
          runtimeAuth.source = refreshed.source

          const reboundEndpoint = applyBaseUrlToEndpoint(endpoint, refreshed.baseUrl)
          args.endpoint = applyBaseUrlToEndpoint(args.endpoint, refreshed.baseUrl)
          currentEndpoint = applyBaseUrlToEndpoint(currentEndpoint, refreshed.baseUrl)
          const reply = await runWithCurrentAuth(reboundEndpoint)
          circuitBreaker.onSuccess()
          output.write(
            `${ui.dim('[auth] refreshed GitHub Copilot runtime token after auth error')}\n`
          )
          return reply
        } catch {
          // Fall through to normal failure handling.
        }
      }

      if (shouldTripCircuit(err)) {
        circuitBreaker.onFailure()
      }
      throw err
    }
  }

  void fetchModels({
    endpoint: args.endpoint,
    token: currentApiToken(),
    timeoutMs: Math.min(args.timeoutMs, 8000),
    modelsCacheTtlMs: args.modelsCacheTtlMs,
    modelsCacheStaleMs: args.modelsCacheStaleMs,
    metrics,
  }).catch(() => {
    // Cache prewarm is best effort.
  })

  if (args.listModels) {
    try {
      await listModels({
        endpoint: args.endpoint,
        token: currentApiToken(),
        timeoutMs: args.timeoutMs,
        modelsCacheTtlMs: args.modelsCacheTtlMs,
        modelsCacheStaleMs: args.modelsCacheStaleMs,
        metrics,
      })
      return
    } catch (err) {
      output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
      process.exitCode = 1
      return
    }
  }

  if (args.codebaseSummary) {
    try {
      const index = await loadCodebaseIndex()
      printCodebaseSummary(index)
      return
    } catch (err) {
      output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
      output.write('Run: node assistant/analysis/build-codebase-index.mjs\n')
      process.exitCode = 1
      return
    }
  }

  if (args.where) {
    try {
      const index = await loadCodebaseIndex()
      const results = searchCodebaseCached(index, args.where, {
        ttlMs: args.whereCacheTtlMs,
        metrics,
      })
      printWhereResults(results)
      return
    } catch (err) {
      output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
      output.write('Run: node assistant/analysis/build-codebase-index.mjs\n')
      process.exitCode = 1
      return
    }
  }

  const stdinPrompt = await readStdinIfPiped()
  const initialPrompt = args.prompt || stdinPrompt

  const baseMessages = [{ role: 'system', content: args.system }]
  let currentSystemPrompt = args.system
  let currentEndpoint = args.endpoint

  if (initialPrompt || args.nonInteractive) {
    if (!initialPrompt) {
      output.write('[ERROR] Non-interactive mode requires --prompt or piped stdin.\n')
      process.exitCode = 1
      return
    }

    const riskyPromptFindings = detectRiskyContent(initialPrompt)
    if (riskyPromptFindings.length > 0 && !args.allowRiskyPrompts) {
      metrics.guardrailWarnings += 1
      output.write(
        `${ui.warn(
          `[WARN] Prompt contains risky operations (${riskyPromptFindings.join(', ')}). Re-run with --allow-risky-prompts to continue.`
        )}\n`
      )
      process.exitCode = 1
      return
    }

    try {
      const singleTurnMessages = [...baseMessages, { role: 'user', content: initialPrompt }]
      const preparedMessages = applyBeforeSendHooks(
        singleTurnMessages,
        activeHooks.beforeSend,
        metrics
      )
      const liveStream = args.stream && Boolean(output.isTTY)
      let streamedReply = false
      let streamedThinking = false
      let thinkingLineOpen = false

      const onThinkingToken =
        liveStream && args.showThinking
          ? chunk => {
              if (!thinkingLineOpen) {
                output.write(`${ui.dim('thinking> ')} `)
                thinkingLineOpen = true
                streamedThinking = true
              }
              output.write(chunk)
            }
          : undefined

      const onToken =
        liveStream
          ? chunk => {
              if (!streamedReply) {
                if (thinkingLineOpen) {
                  output.write('\n')
                  thinkingLineOpen = false
                }
                output.write(`${ui.accent('assistant>')} `)
                streamedReply = true
              }
              output.write(chunk)
            }
          : undefined
      try {
        const replyRaw = await runGuardedChat({
          endpoint: args.endpoint,
          model: args.model,
          timeoutMs: args.timeoutMs,
          temperature: args.temperature,
          maxOutputTokens: args.maxOutputTokens,
          stream: liveStream,
          showThinking: args.showThinking,
          onToken,
          onThinkingToken,
          messages: preparedMessages,
          maxRetries: args.maxRetries,
        })

        const reply = applyAfterReceiveHooks(replyRaw, activeHooks.afterReceive, metrics)
        const riskyReplyFindings = detectRiskyContent(reply)
        if (riskyReplyFindings.length > 0) {
          metrics.guardrailWarnings += 1
          output.write(
            `${ui.warn(`[WARN] Reply includes risky command patterns: ${riskyReplyFindings.join(', ')}`)}\n`
          )
        }
        if (liveStream && (streamedReply || streamedThinking)) {
          if (thinkingLineOpen) output.write('\n')
          output.write('\n')
        } else {
          output.write(reply + '\n')
        }
        return
      } catch (err) {
        if (!isModelUnavailableError(err)) {
          throw err
        }

        const { chatModels } = await fetchModels({
          endpoint: args.endpoint,
          token: currentApiToken(),
          timeoutMs: args.timeoutMs,
          modelsCacheTtlMs: args.modelsCacheTtlMs,
          modelsCacheStaleMs: args.modelsCacheStaleMs,
          metrics,
        })
        const fallbackModel = await selectAccessibleFallbackModel({
          endpoint: args.endpoint,
          token: currentApiToken(),
          chatModels,
          timeoutMs: args.timeoutMs,
          temperature: args.temperature,
        })
        if (!fallbackModel) {
          throw err
        }

        const retryRaw = await runGuardedChat({
          endpoint: args.endpoint,
          model: fallbackModel,
          timeoutMs: args.timeoutMs,
          temperature: args.temperature,
          maxOutputTokens: args.maxOutputTokens,
          stream: liveStream,
          showThinking: args.showThinking,
          onToken,
          onThinkingToken,
          messages: preparedMessages,
          maxRetries: args.maxRetries,
        })
        const retry = applyAfterReceiveHooks(retryRaw, activeHooks.afterReceive, metrics)
        if (liveStream && (streamedReply || streamedThinking)) {
          if (thinkingLineOpen) output.write('\n')
          output.write('\n')
        } else {
          output.write(retry + '\n')
        }
        return
      }
    } catch (err) {
      output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
      process.exitCode = 1
      return
    }
  }

  printInteractiveBanner({
    model: args.model,
    profile: sanitizeProfileName(args.profile),
  })
  printInteractiveHelp()

  const rl = readline.createInterface({ input, output })
  const history = [...baseMessages]
  let currentModel = args.model
  let currentTemperature = args.temperature
  let currentMaxOutputTokens = args.maxOutputTokens
  let currentStream = args.stream
  let currentShowThinking = args.showThinking
  let currentTimeoutMs = args.timeoutMs
  let currentMaxRetries = args.maxRetries
  let currentMaxTurns = args.maxTurns
  let currentMaxHistoryMessages = args.maxHistoryMessages
  let currentAllowRiskyPrompts = args.allowRiskyPrompts
  let currentCircuitFailures = args.circuitFailures
  let currentCircuitCooldownMs = args.circuitCooldownMs
  let currentModelsCacheTtlMs = args.modelsCacheTtlMs
  let currentModelsCacheStaleMs = args.modelsCacheStaleMs
  let currentWhereCacheTtlMs = args.whereCacheTtlMs
  let currentQueueMaxPending = args.queueMaxPending
  let currentProfile = sanitizeProfileName(args.profile)
  let assistantTurns = 0

  const submitUserTurn = async userText => {
    const riskyPromptFindings = detectRiskyContent(userText)
    if (riskyPromptFindings.length > 0) {
      metrics.guardrailWarnings += 1
      output.write(
        `${ui.warn(`[WARN] Risky prompt patterns: ${riskyPromptFindings.join(', ')}`)}\n`
      )
      if (!currentAllowRiskyPrompts) {
        const confirm = (
          await rl.question('Proceed with this prompt anyway? type yes to continue> ')
        )
          .trim()
          .toLowerCase()
        if (confirm !== 'yes' && confirm !== 'y') {
          output.write(`${ui.info('Prompt cancelled by guardrail.')}\n\n`)
          return true
        }
      }
    }

    history.push({ role: 'user', content: userText })
    let requestMessages = historyWindow(history, currentMaxHistoryMessages, metrics)
    requestMessages = applyBeforeSendHooks(requestMessages, activeHooks.beforeSend, metrics)

    const liveStream = currentStream && Boolean(output.isTTY)
    let streamedReply = false
    let streamedThinking = false
    let thinkingLineOpen = false

    const onThinkingToken =
      liveStream && currentShowThinking
        ? chunk => {
            if (!thinkingLineOpen) {
              output.write(`${ui.dim('thinking> ')} `)
              thinkingLineOpen = true
              streamedThinking = true
            }
            output.write(chunk)
          }
        : undefined

    const onToken =
      liveStream
        ? chunk => {
            if (!streamedReply) {
              if (thinkingLineOpen) {
                output.write('\n')
                thinkingLineOpen = false
              }
              output.write(`${ui.accent('assistant>')} `)
              streamedReply = true
            }
            output.write(chunk)
          }
        : undefined

    try {
      const replyRaw = await runGuardedChat({
        endpoint: currentEndpoint,
        model: currentModel,
        timeoutMs: currentTimeoutMs,
        temperature: currentTemperature,
        maxOutputTokens: currentMaxOutputTokens,
        stream: liveStream,
        showThinking: currentShowThinking,
        onToken,
        onThinkingToken,
        messages: requestMessages,
        maxRetries: currentMaxRetries,
        onRetry: info => {
          output.write(
            `${ui.dim(
              `retrying request (${info.attempt}/${currentMaxRetries}, reason=${info.reason}, wait=${info.waitMs}ms)`
            )}\n`
          )
        },
      })

      const reply = applyAfterReceiveHooks(replyRaw, activeHooks.afterReceive, metrics)
      history.push({ role: 'assistant', content: reply })
      assistantTurns += 1
      if (liveStream && (streamedReply || streamedThinking)) {
        if (thinkingLineOpen) output.write('\n')
        output.write('\n\n')
      } else {
        output.write(`${ui.accent('assistant>')} ${reply}\n\n`)
      }

      const riskyReplyFindings = detectRiskyContent(reply)
      if (riskyReplyFindings.length > 0) {
        metrics.guardrailWarnings += 1
        output.write(
          `${ui.warn(`[WARN] Assistant reply contains risky patterns: ${riskyReplyFindings.join(', ')}`)}\n\n`
        )
      }
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err)
      if (isModelUnavailableError(err)) {
        try {
          const { chatModels } = await fetchModels({
            endpoint: currentEndpoint,
            token: currentApiToken(),
            timeoutMs: currentTimeoutMs,
            modelsCacheTtlMs: currentModelsCacheTtlMs,
            modelsCacheStaleMs: currentModelsCacheStaleMs,
            metrics,
          })
          const fallbackModel = await selectAccessibleFallbackModel({
            endpoint: currentEndpoint,
            token: currentApiToken(),
            chatModels,
            timeoutMs: currentTimeoutMs,
            temperature: currentTemperature,
          })
          if (fallbackModel) {
            currentModel = fallbackModel
            output.write(`${ui.warn(`Model unavailable, auto-switched to: ${currentModel}`)}\n`)
            const retryRaw = await runGuardedChat({
              endpoint: currentEndpoint,
              model: currentModel,
              timeoutMs: currentTimeoutMs,
              temperature: currentTemperature,
              maxOutputTokens: currentMaxOutputTokens,
              stream: liveStream,
              showThinking: currentShowThinking,
              onToken,
              onThinkingToken,
              messages: requestMessages,
              maxRetries: currentMaxRetries,
              onRetry: info => {
                output.write(
                  `${ui.dim(
                    `retrying request (${info.attempt}/${currentMaxRetries}, reason=${info.reason}, wait=${info.waitMs}ms)`
                  )}\n`
                )
              },
            })
            const retryReply = applyAfterReceiveHooks(
              retryRaw,
              activeHooks.afterReceive,
              metrics
            )
            history.push({ role: 'assistant', content: retryReply })
            assistantTurns += 1
            if (liveStream && (streamedReply || streamedThinking)) {
              if (thinkingLineOpen) output.write('\n')
              output.write('\n\n')
            } else {
              output.write(`${ui.accent('assistant>')} ${retryReply}\n\n`)
            }
            return true
          }
        } catch {
          // fall through to regular error print
        }
      }
      if (err instanceof CircuitOpenError) {
        output.write(`${ui.warn(`[WARN] ${err.message}`)}\n\n`)
      } else {
        output.write(`${ui.error(`[ERROR] ${errMsg}`)}\n\n`)
      }
      return true
    }

    if (currentMaxTurns > 0 && assistantTurns >= currentMaxTurns) {
      output.write(`Reached max turns (${currentMaxTurns}). Exiting.\n`)
      return false
    }
    return true
  }

  if (args.resume) {
    try {
      const loaded = await loadSavedSession(args.resume)
      const loadedHistory = Array.isArray(loaded.history)
        ? loaded.history.filter(
            m => m?.role === 'system' || m?.role === 'user' || m?.role === 'assistant'
          )
        : []

      history.length = 0
      if (loadedHistory.length > 0) {
        history.push(...loadedHistory)
      }
      if (history.length === 0 || history[0]?.role !== 'system') {
        history.unshift({ role: 'system', content: currentSystemPrompt })
      }

      currentSystemPrompt = String(history[0]?.content ?? currentSystemPrompt)
      if (loaded.endpoint) currentEndpoint = loaded.endpoint
      if (typeof loaded.temperature === 'number') currentTemperature = loaded.temperature
      if (typeof loaded.timeoutMs === 'number') currentTimeoutMs = loaded.timeoutMs
      if (loaded.model) {
        currentModel = await resolveModelInput(loaded.model, {
          endpoint: currentEndpoint,
          token: currentApiToken(),
          timeoutMs: currentTimeoutMs,
          modelsCacheTtlMs: currentModelsCacheTtlMs,
          modelsCacheStaleMs: currentModelsCacheStaleMs,
          metrics,
        })
      }
      output.write(`Resumed session from: ${loaded.file}\n\n`)
    } catch (err) {
      output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
    }
  }

  if (args.pickModel) {
    try {
      const selected = await pickModelInteractive({
        endpoint: currentEndpoint,
        token: currentApiToken(),
        timeoutMs: currentTimeoutMs,
        rl,
        modelsCacheTtlMs: currentModelsCacheTtlMs,
        modelsCacheStaleMs: currentModelsCacheStaleMs,
        metrics,
      })
      if (selected) {
        currentModel = await resolveModelInput(selected, {
          endpoint: currentEndpoint,
          token: currentApiToken(),
          timeoutMs: currentTimeoutMs,
          modelsCacheTtlMs: currentModelsCacheTtlMs,
          modelsCacheStaleMs: currentModelsCacheStaleMs,
          metrics,
        })
        output.write(`Using selected model: ${currentModel}\n\n`)
      }
    } catch (err) {
      output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
    }
  }

  const promptLabel = () => {
    return `${ui.dim(`[${currentProfile} | ${currentModel}]`)} you> `
  }

  try {
    while (true) {
      let rawUserText = ''
      try {
        rawUserText = await rl.question(promptLabel())
      } catch (err) {
        if (isInputClosedError(err)) {
          output.write(`${ui.dim('Input closed. Exiting.')}\n`)
          break
        }
        throw err
      }

      const userText = rawUserText.trim()
      if (!userText) continue

      if (userText === '/exit' || userText === '/quit') break
      if (userText === '/help') {
        printInteractiveHelp()
        continue
      }
      if (userText === '/showmodel') {
        output.write(`Current model: ${currentModel}\n\n`)
        continue
      }
      if (userText === '/codebase') {
        try {
          const index = await loadCodebaseIndex()
          printCodebaseSummary(index)
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
          output.write('Run: node assistant/analysis/build-codebase-index.mjs\n\n')
        }
        continue
      }
      if (userText.startsWith('/where ')) {
        const q = userText.slice('/where '.length).trim()
        if (!q) {
          output.write('Usage: /where <query>\n\n')
          continue
        }
        try {
          const index = await loadCodebaseIndex()
          printWhereResults(
            searchCodebaseCached(index, q, {
              ttlMs: currentWhereCacheTtlMs,
              metrics,
            })
          )
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
          output.write('Run: node assistant/analysis/build-codebase-index.mjs\n\n')
        }
        continue
      }
      if (userText === '/where') {
        output.write('Usage: /where <query>\n\n')
        continue
      }
      if (userText.startsWith('/probe ')) {
        const requested = userText.slice('/probe '.length).trim()
        if (!requested) {
          output.write('Usage: /probe <model-name>\n\n')
          continue
        }
        try {
          const resolved = await resolveModelInput(requested, {
            endpoint: currentEndpoint,
            token: currentApiToken(),
            timeoutMs: currentTimeoutMs,
            modelsCacheTtlMs: currentModelsCacheTtlMs,
            modelsCacheStaleMs: currentModelsCacheStaleMs,
            metrics,
          })
          const result = await probeModelAccess({
            endpoint: currentEndpoint,
            token: currentApiToken(),
            model: resolved,
            timeoutMs: currentTimeoutMs,
            temperature: currentTemperature,
          })
          output.write(`${ui.heading('Model probe:')}\n`)
          output.write(`${formatListItem('- requested:', requested)}\n`)
          output.write(`${formatListItem('- resolved:', resolved)}\n`)
          output.write(`${formatListItem('- accessible:', String(result.ok))}\n`)
          output.write(`${formatListItem('- reason:', result.reason)}\n`)
          if (result.details) {
            output.write(`${formatListItem('- details:', result.details)}\n`)
          }
          output.write('\n')
        } catch (err) {
          output.write(`${ui.error(`[ERROR] ${err instanceof Error ? err.message : String(err)}`)}\n\n`)
        }
        continue
      }
      if (userText === '/probe') {
        output.write('Usage: /probe <model-name>\n\n')
        continue
      }
      if (userText.startsWith('/folder ')) {
        const folder = userText.slice('/folder '.length).trim()
        try {
          const index = await loadCodebaseIndex()
          printFolderSummary(index, folder)
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n`)
          output.write('Run: node assistant/analysis/build-codebase-index.mjs\n\n')
        }
        continue
      }
      if (userText === '/folder') {
        output.write('Usage: /folder <name>\n\n')
        continue
      }
      if (userText === '/retry') {
        if (history.length < 2) {
          output.write('Nothing to retry yet.\n\n')
          continue
        }

        let retryText = ''
        if (
          history.at(-1)?.role === 'assistant' &&
          history.at(-2)?.role === 'user'
        ) {
          retryText = String(history.at(-2)?.content ?? '')
          history.pop()
          history.pop()
        } else if (history.at(-1)?.role === 'user') {
          retryText = String(history.at(-1)?.content ?? '')
          history.pop()
        }

        if (!retryText) {
          output.write('Could not find a recent user turn to retry.\n\n')
          continue
        }

        const shouldContinue = await submitUserTurn(retryText)
        if (!shouldContinue) break
        continue
      }
      if (userText === '/undo') {
        if (
          history.at(-1)?.role === 'assistant' &&
          history.at(-2)?.role === 'user'
        ) {
          history.pop()
          history.pop()
          output.write('Removed last user/assistant turn.\n\n')
        } else if (history.at(-1)?.role === 'user') {
          history.pop()
          output.write('Removed last user turn.\n\n')
        } else {
          output.write('Nothing to undo.\n\n')
        }
        continue
      }
      if (userText === '/temperature') {
        output.write(`Current temperature: ${currentTemperature}\n\n`)
        continue
      }
      if (userText.startsWith('/temperature ')) {
        const raw = userText.slice('/temperature '.length).trim()
        const val = Number(raw)
        if (!Number.isFinite(val) || val < 0 || val > 2) {
          output.write('Usage: /temperature <value between 0 and 2>\n\n')
        } else {
          currentTemperature = val
          output.write(`Temperature set to: ${currentTemperature}\n\n`)
        }
        continue
      }
      if (userText === '/max-tokens') {
        output.write(`Current max output tokens: ${currentMaxOutputTokens}\n\n`)
        continue
      }
      if (userText.startsWith('/max-tokens ')) {
        const raw = userText.slice('/max-tokens '.length).trim()
        const val = Number(raw)
        if (!Number.isFinite(val) || val < 64 || val > 8192) {
          output.write('Usage: /max-tokens <value between 64 and 8192>\n\n')
        } else {
          currentMaxOutputTokens = Math.floor(val)
          output.write(`Max output tokens set to: ${currentMaxOutputTokens}\n\n`)
        }
        continue
      }
      if (userText === '/stream') {
        output.write(`Streaming is currently: ${currentStream ? 'on' : 'off'}\n\n`)
        continue
      }
      if (userText.startsWith('/stream ')) {
        const mode = userText.slice('/stream '.length).trim().toLowerCase()
        if (mode === 'on') {
          currentStream = true
          output.write('Streaming enabled.\n\n')
        } else if (mode === 'off') {
          currentStream = false
          output.write('Streaming disabled.\n\n')
        } else {
          output.write('Usage: /stream <on|off>\n\n')
        }
        continue
      }
      if (userText === '/thinking') {
        output.write(`Thinking display is currently: ${currentShowThinking ? 'on' : 'off'}\n\n`)
        continue
      }
      if (userText.startsWith('/thinking ')) {
        const mode = userText.slice('/thinking '.length).trim().toLowerCase()
        if (mode === 'on') {
          currentShowThinking = true
          output.write('Thinking display enabled.\n\n')
        } else if (mode === 'off') {
          currentShowThinking = false
          output.write('Thinking display disabled.\n\n')
        } else {
          output.write('Usage: /thinking <on|off>\n\n')
        }
        continue
      }
      if (userText === '/system') {
        output.write(`Current system prompt:\n${currentSystemPrompt}\n\n`)
        continue
      }
      if (userText.startsWith('/system ')) {
        const nextSystem = userText.slice('/system '.length).trim()
        if (!nextSystem) {
          output.write('Usage: /system <text>\n\n')
        } else {
          currentSystemPrompt = nextSystem
          history[0] = { role: 'system', content: currentSystemPrompt }
          output.write('System prompt updated for this session.\n\n')
        }
        continue
      }
      if (userText === '/history') {
        printRecentHistory(history)
        continue
      }
      if (userText === '/hooks') {
        const activeFile = activeHooks.fileName || '(none)'
        output.write(
          [
            ui.heading('Active hooks:'),
            formatListItem('- file:', activeFile),
            formatListItem('- beforeSend:', String(activeHooks.beforeSend.length)),
            formatListItem('- afterReceive:', String(activeHooks.afterReceive.length)),
            '',
          ].join('\n')
        )
        continue
      }
      if (userText === '/hooks reload') {
        activeHooks = await loadHooks(currentProfile)
        output.write(
          `${ui.success(
            `Reloaded hooks from ${activeHooks.fileName || 'no hook file'} (beforeSend=${activeHooks.beforeSend.length}, afterReceive=${activeHooks.afterReceive.length})`
          )}\n\n`
        )
        continue
      }
      if (userText === '/health') {
        const h = await endpointHealth({
          endpoint: currentEndpoint,
          token: currentApiToken(),
          timeoutMs: Math.min(currentTimeoutMs, 10_000),
        })
        const circuit = circuitBreaker.status()
        output.write(
          [
            ui.heading('Endpoint health:'),
            formatListItem('- ok:', String(h.ok)),
            formatListItem('- status:', String(h.status)),
            formatListItem('- latencyMs:', String(h.latencyMs)),
            h.error ? formatListItem('- error:', h.error) : '',
            formatListItem(
              '- circuit:',
              `${circuit.state} (failures=${circuit.failureCount}/${circuit.failureThreshold}, remainingMs=${circuit.remainingMs})`
            ),
            '',
          ].join('\n')
        )
        continue
      }
      if (userText === '/dashboard') {
        printDashboard({
          profile: currentProfile,
          model: currentModel,
          endpoint: currentEndpoint,
          metrics,
          queue: requestQueue,
          circuitBreaker,
          hooks: activeHooks,
          maxRetries: currentMaxRetries,
          maxOutputTokens: currentMaxOutputTokens,
          stream: currentStream,
          showThinking: currentShowThinking,
          timeoutMs: currentTimeoutMs,
          maxHistoryMessages: currentMaxHistoryMessages,
        })
        continue
      }
      if (userText === '/stats') {
        printRuntimeStats({ metrics, queue: requestQueue, circuitBreaker })
        continue
      }
      if (userText === '/cache clear') {
        modelListCache.clear()
        whereResultsCache.clear()
        output.write('Cleared in-memory model/search caches.\n\n')
        continue
      }
      if (userText === '/profile') {
        printRuntimeProfile({
          endpoint: currentEndpoint,
          model: currentModel,
          temperature: currentTemperature,
          maxOutputTokens: currentMaxOutputTokens,
          stream: currentStream,
          showThinking: currentShowThinking,
          timeoutMs: currentTimeoutMs,
          maxRetries: currentMaxRetries,
          maxTurns: currentMaxTurns,
          maxHistoryMessages: currentMaxHistoryMessages,
          allowRiskyPrompts: currentAllowRiskyPrompts,
          circuitFailures: currentCircuitFailures,
          circuitCooldownMs: currentCircuitCooldownMs,
          profile: currentProfile,
          modelsCacheTtlMs: currentModelsCacheTtlMs,
          modelsCacheStaleMs: currentModelsCacheStaleMs,
          whereCacheTtlMs: currentWhereCacheTtlMs,
          queueMaxPending: currentQueueMaxPending,
        })
        continue
      }
      if (userText === '/profiles') {
        const profiles = await listSavedProfiles()
        if (profiles.length === 0) {
          output.write('No saved profiles found.\n\n')
        } else {
          output.write('Saved profiles:\n')
          profiles.forEach((name, i) => output.write(`${i + 1}. ${name}\n`))
          output.write('\n')
        }
        continue
      }
      if (userText.startsWith('/profile save')) {
        const rawName = userText.slice('/profile save'.length).trim() || currentProfile
        const profileName = sanitizeProfileName(rawName)
        const savedPath = await saveProfile(profileName, {
          endpoint: currentEndpoint,
          model: currentModel,
          system: currentSystemPrompt,
          temperature: currentTemperature,
          maxOutputTokens: currentMaxOutputTokens,
          stream: currentStream,
          showThinking: currentShowThinking,
          timeoutMs: currentTimeoutMs,
          maxRetries: currentMaxRetries,
          maxTurns: currentMaxTurns,
          maxHistoryMessages: currentMaxHistoryMessages,
          allowRiskyPrompts: currentAllowRiskyPrompts,
          circuitFailures: currentCircuitFailures,
          circuitCooldownMs: currentCircuitCooldownMs,
          color: canUseColor(),
          modelsCacheTtlMs: currentModelsCacheTtlMs,
          modelsCacheStaleMs: currentModelsCacheStaleMs,
          whereCacheTtlMs: currentWhereCacheTtlMs,
          queueMaxPending: currentQueueMaxPending,
        })
        currentProfile = profileName
        output.write(`Saved profile '${profileName}' -> ${savedPath}\n\n`)
        continue
      }
      if (userText.startsWith('/profile load ')) {
        const rawName = userText.slice('/profile load '.length).trim()
        if (!rawName) {
          output.write('Usage: /profile load <name>\n\n')
          continue
        }
        try {
          const p = await loadProfile(rawName)
          if (typeof p.endpoint === 'string') currentEndpoint = p.endpoint
          if (typeof p.model === 'string') {
            currentModel = await resolveModelInput(p.model, {
              endpoint: currentEndpoint,
              token: currentApiToken(),
              timeoutMs: currentTimeoutMs,
              modelsCacheTtlMs: currentModelsCacheTtlMs,
              modelsCacheStaleMs: currentModelsCacheStaleMs,
              metrics,
            })
          }
          if (typeof p.system === 'string') {
            currentSystemPrompt = p.system
            history[0] = { role: 'system', content: currentSystemPrompt }
          }
          if (typeof p.temperature === 'number') currentTemperature = p.temperature
          if (typeof p.maxOutputTokens === 'number') {
            currentMaxOutputTokens = Math.floor(
              clampNumber(p.maxOutputTokens, currentMaxOutputTokens, 64, 8192)
            )
          }
          if (typeof p.stream === 'boolean') currentStream = p.stream
          if (typeof p.showThinking === 'boolean') currentShowThinking = p.showThinking
          if (typeof p.timeoutMs === 'number') currentTimeoutMs = p.timeoutMs
          if (typeof p.maxRetries === 'number') currentMaxRetries = p.maxRetries
          if (typeof p.maxTurns === 'number') currentMaxTurns = p.maxTurns
          if (typeof p.maxHistoryMessages === 'number') {
            currentMaxHistoryMessages = Math.floor(
              clampNumber(p.maxHistoryMessages, currentMaxHistoryMessages, 8, 120)
            )
          }
          if (typeof p.allowRiskyPrompts === 'boolean') {
            currentAllowRiskyPrompts = p.allowRiskyPrompts
          }
          if (typeof p.circuitFailures === 'number') {
            currentCircuitFailures = Math.floor(
              clampNumber(p.circuitFailures, currentCircuitFailures, 1, 20)
            )
          }
          if (typeof p.circuitCooldownMs === 'number') {
            currentCircuitCooldownMs = normalizeMs(
              p.circuitCooldownMs,
              currentCircuitCooldownMs,
              1000,
              10 * 60 * 1000
            )
          }
          circuitBreaker.reconfigure({
            failureThreshold: currentCircuitFailures,
            cooldownMs: currentCircuitCooldownMs,
          })
          if (typeof p.color === 'boolean') {
            if (!p.color) process.env.NO_COLOR = '1'
            else delete process.env.NO_COLOR
          }
          if (typeof p.modelsCacheTtlMs === 'number') {
            currentModelsCacheTtlMs = normalizeMs(
              p.modelsCacheTtlMs,
              currentModelsCacheTtlMs,
              1000,
              24 * 60 * 60 * 1000
            )
          }
          if (typeof p.modelsCacheStaleMs === 'number') {
            currentModelsCacheStaleMs = normalizeMs(
              p.modelsCacheStaleMs,
              currentModelsCacheStaleMs,
              1000,
              14 * 24 * 60 * 60 * 1000
            )
          }
          if (typeof p.whereCacheTtlMs === 'number') {
            currentWhereCacheTtlMs = normalizeMs(
              p.whereCacheTtlMs,
              currentWhereCacheTtlMs,
              1000,
              6 * 60 * 60 * 1000
            )
          }
          if (typeof p.queueMaxPending === 'number') {
            currentQueueMaxPending = Math.floor(
              clampNumber(p.queueMaxPending, currentQueueMaxPending, 1, 500)
            )
            requestQueue.setMaxPending(currentQueueMaxPending)
          }
          currentProfile = sanitizeProfileName(rawName)
          activeHooks = await loadHooks(currentProfile)
          output.write(`Loaded profile '${currentProfile}'.\n\n`)
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
        }
        continue
      }
      if (userText === '/save') {
        try {
          const saved = await saveConversation({
            history,
            model: currentModel,
            endpoint: currentEndpoint,
            temperature: currentTemperature,
            timeoutMs: currentTimeoutMs,
          })
          output.write(`Saved conversation markdown: ${saved.mdPath}\n`)
          output.write(`Saved conversation JSON: ${saved.jsonPath}\n\n`)
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
        }
        continue
      }
      if (userText === '/sessions') {
        const sessions = await listSavedSessions()
        if (sessions.length === 0) {
          output.write('No saved sessions found.\n\n')
        } else {
          output.write('Saved sessions:\n')
          sessions.slice(0, 20).forEach((name, i) => output.write(`${i + 1}. ${name}\n`))
          output.write('\n')
        }
        continue
      }
      if (userText.startsWith('/resume ')) {
        const spec = userText.slice('/resume '.length).trim()
        if (!spec) {
          output.write('Usage: /resume <file|index>\n\n')
          continue
        }
        try {
          const loaded = await loadSavedSession(spec)
          const loadedHistory = Array.isArray(loaded.history)
            ? loaded.history.filter(
                m => m?.role === 'system' || m?.role === 'user' || m?.role === 'assistant'
              )
            : []

          history.length = 0
          if (loadedHistory.length > 0) {
            history.push(...loadedHistory)
          }
          if (history.length === 0 || history[0]?.role !== 'system') {
            history.unshift({ role: 'system', content: currentSystemPrompt })
          }

          currentSystemPrompt = String(history[0]?.content ?? currentSystemPrompt)
          if (loaded.endpoint) currentEndpoint = loaded.endpoint
          if (typeof loaded.temperature === 'number') currentTemperature = loaded.temperature
          if (typeof loaded.timeoutMs === 'number') currentTimeoutMs = loaded.timeoutMs
          if (loaded.model) {
            currentModel = await resolveModelInput(loaded.model, {
              endpoint: currentEndpoint,
              token: currentApiToken(),
              timeoutMs: currentTimeoutMs,
              modelsCacheTtlMs: currentModelsCacheTtlMs,
              modelsCacheStaleMs: currentModelsCacheStaleMs,
              metrics,
            })
          }
          output.write(`Resumed session from: ${loaded.file}\n\n`)
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
        }
        continue
      }
      if (userText === '/clear') {
        history.length = 0
        history.push({ role: 'system', content: currentSystemPrompt })
        output.write('Conversation cleared.\n\n')
        continue
      }
      if (userText === '/models') {
        try {
          await listModels({
            endpoint: currentEndpoint,
            token: currentApiToken(),
            timeoutMs: currentTimeoutMs,
            includeAll: false,
            modelsCacheTtlMs: currentModelsCacheTtlMs,
            modelsCacheStaleMs: currentModelsCacheStaleMs,
            metrics,
          })
          output.write('\n')
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
        }
        continue
      }
      if (userText === '/models refresh') {
        try {
          await listModels({
            endpoint: currentEndpoint,
            token: currentApiToken(),
            timeoutMs: currentTimeoutMs,
            includeAll: false,
            forceRefresh: true,
            modelsCacheTtlMs: currentModelsCacheTtlMs,
            modelsCacheStaleMs: currentModelsCacheStaleMs,
            metrics,
          })
          output.write('\n')
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
        }
        continue
      }
      if (userText === '/models all') {
        try {
          await listModels({
            endpoint: currentEndpoint,
            token: currentApiToken(),
            timeoutMs: currentTimeoutMs,
            includeAll: true,
            modelsCacheTtlMs: currentModelsCacheTtlMs,
            modelsCacheStaleMs: currentModelsCacheStaleMs,
            metrics,
          })
          output.write('\n')
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
        }
        continue
      }
      if (userText === '/pickmodel') {
        try {
          const selected = await pickModelInteractive({
            endpoint: currentEndpoint,
            token: currentApiToken(),
            timeoutMs: currentTimeoutMs,
            rl,
            modelsCacheTtlMs: currentModelsCacheTtlMs,
            modelsCacheStaleMs: currentModelsCacheStaleMs,
            metrics,
          })
          if (!selected) {
            output.write('Model selection cancelled.\n\n')
          } else {
            currentModel = await resolveModelInput(selected, {
              endpoint: currentEndpoint,
              token: currentApiToken(),
              timeoutMs: currentTimeoutMs,
              modelsCacheTtlMs: currentModelsCacheTtlMs,
              modelsCacheStaleMs: currentModelsCacheStaleMs,
              metrics,
            })
            output.write(`Switched model to: ${currentModel}\n\n`)
          }
        } catch (err) {
          output.write(`[ERROR] ${err instanceof Error ? err.message : String(err)}\n\n`)
        }
        continue
      }
      if (userText.startsWith('/model ')) {
        const next = userText.slice('/model '.length).trim()
        if (!next) {
          output.write('Usage: /model <name>\n\n')
        } else {
          currentModel = await resolveModelInput(next, {
            endpoint: currentEndpoint,
            token: currentApiToken(),
            timeoutMs: currentTimeoutMs,
            modelsCacheTtlMs: currentModelsCacheTtlMs,
            modelsCacheStaleMs: currentModelsCacheStaleMs,
            metrics,
          })
          output.write(`Switched model to: ${currentModel}\n\n`)
        }
        continue
      }
      if (userText === '/model') {
        output.write('Usage: /model <name>\n\n')
        continue
      }

      const shouldContinue = await submitUserTurn(userText)
      if (!shouldContinue) break
    }
  } finally {
    rl.close()
  }
}

run().catch(err => {
  output.write(`[FATAL] ${err instanceof Error ? err.message : String(err)}\n`)
  process.exitCode = 1
})
