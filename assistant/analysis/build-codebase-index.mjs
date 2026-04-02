#!/usr/bin/env node

import { promises as fs } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const SRC_DIR = path.join(ROOT, 'src')
const OUT_DIR = path.join(ROOT, 'assistant', 'analysis')
const INDEX_PATH = path.join(OUT_DIR, 'codebase_index.json')
const SUMMARY_PATH = path.join(OUT_DIR, 'codebase_summary.md')
const FILE_CARDS_PATH = path.join(OUT_DIR, 'file_cards.md')

const TEXT_EXTS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
  '.md',
  '.yml',
  '.yaml',
])

function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join('/')
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const out = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      out.push(...(await walk(full)))
    } else if (e.isFile()) {
      out.push(full)
    }
  }
  return out
}

function countMatches(content, rx) {
  const m = content.match(rx)
  return m ? m.length : 0
}

function extractByRegex(content, rx, group = 1) {
  const values = []
  let m
  while ((m = rx.exec(content)) !== null) {
    const v = m[group]
    if (v) values.push(v)
  }
  return values
}

function topComment(content) {
  const lines = content.split('\n').slice(0, 35)
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('//')) {
      return trimmed.replace(/^\/\/\s?/, '').slice(0, 180)
    }
    if (trimmed.length > 0 && !trimmed.startsWith('/*') && !trimmed.startsWith('*')) {
      break
    }
  }
  return ''
}

function classifyTags(filePath, content) {
  const tags = new Set()
  const p = filePath.toLowerCase()
  const c = content.toLowerCase()

  if (p.includes('/auth') || c.includes('oauth') || c.includes('token')) tags.add('auth')
  if (p.includes('/permission') || c.includes('permission')) tags.add('permissions')
  if (p.includes('/bridge') || c.includes('bridge')) tags.add('bridge')
  if (p.includes('/remote') || c.includes('websocket')) tags.add('remote')
  if (p.includes('/mcp') || c.includes('mcp')) tags.add('mcp')
  if (p.includes('/query') || c.includes('tool_use')) tags.add('query-loop')
  if (p.includes('/tool') || c.includes('tool')) tags.add('tools')
  if (p.includes('/command') || c.includes('slash command')) tags.add('commands')
  if (p.includes('/memory') || c.includes('session') || c.includes('transcript')) tags.add('state-memory')
  if (p.includes('/cost') || c.includes('budget') || c.includes('rate limit')) tags.add('cost-budget')
  if (p.includes('/hook') || c.includes('ssrf')) tags.add('hooks-security')

  return [...tags]
}

function scoreImportance(relPath, lines, tags, exportsCount, importCount) {
  let score = 0
  const p = relPath

  if (p === 'src/main.tsx') score += 80
  if (p === 'src/query.ts') score += 80
  if (p === 'src/QueryEngine.ts') score += 80
  if (p === 'src/tools.ts' || p === 'src/commands.ts') score += 60
  if (p.startsWith('src/bridge/')) score += 35
  if (p.startsWith('src/tools/')) score += 30
  if (p.startsWith('src/commands/')) score += 25
  if (p.startsWith('src/services/')) score += 20
  if (p.startsWith('src/utils/')) score += 15

  score += Math.min(Math.floor(lines / 80), 30)
  score += Math.min(exportsCount * 2, 18)
  score += Math.min(importCount, 10)

  if (tags.includes('auth')) score += 12
  if (tags.includes('permissions')) score += 10
  if (tags.includes('query-loop')) score += 10
  if (tags.includes('hooks-security')) score += 10

  return score
}

async function analyzeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const relativePath = rel(filePath)

  if (!TEXT_EXTS.has(ext)) {
    const st = await fs.stat(filePath)
    return {
      path: relativePath,
      ext,
      sizeBytes: st.size,
      lineCount: 0,
      importCount: 0,
      exportCount: 0,
      exports: [],
      classes: [],
      functions: [],
      topComment: '',
      tags: [],
      importance: 0,
      textAnalyzed: false,
    }
  }

  let content = ''
  try {
    content = await fs.readFile(filePath, 'utf8')
  } catch {
    const st = await fs.stat(filePath)
    return {
      path: relativePath,
      ext,
      sizeBytes: st.size,
      lineCount: 0,
      importCount: 0,
      exportCount: 0,
      exports: [],
      classes: [],
      functions: [],
      topComment: '',
      tags: [],
      importance: 0,
      textAnalyzed: false,
      note: 'read_failed',
    }
  }

  const st = await fs.stat(filePath)
  const lineCount = content.split('\n').length
  const importCount = countMatches(content, /^\s*import\s/mg)

  const exportedFunctions = extractByRegex(content, /export\s+(?:async\s+)?function\s+([A-Za-z0-9_]+)/g)
  const exportedClasses = extractByRegex(content, /export\s+class\s+([A-Za-z0-9_]+)/g)
  const exportedConsts = extractByRegex(content, /export\s+const\s+([A-Za-z0-9_]+)/g)
  const exportedTypes = extractByRegex(content, /export\s+type\s+([A-Za-z0-9_]+)/g)
  const exportedInterfaces = extractByRegex(content, /export\s+interface\s+([A-Za-z0-9_]+)/g)
  const exportedEnums = extractByRegex(content, /export\s+enum\s+([A-Za-z0-9_]+)/g)
  const hasDefaultExport = /export\s+default\s+/m.test(content)

  const classes = extractByRegex(content, /(?:export\s+)?class\s+([A-Za-z0-9_]+)/g)
  const functions = extractByRegex(content, /(?:export\s+)?(?:async\s+)?function\s+([A-Za-z0-9_]+)/g)

  const exportsList = [
    ...exportedFunctions,
    ...exportedClasses,
    ...exportedConsts,
    ...exportedTypes,
    ...exportedInterfaces,
    ...exportedEnums,
    ...(hasDefaultExport ? ['default'] : []),
  ]

  const tags = classifyTags(relativePath, content)
  const importance = scoreImportance(relativePath, lineCount, tags, exportsList.length, importCount)

  return {
    path: relativePath,
    ext,
    sizeBytes: st.size,
    lineCount,
    importCount,
    exportCount: exportsList.length,
    exports: exportsList.slice(0, 40),
    classes: classes.slice(0, 30),
    functions: functions.slice(0, 40),
    topComment: topComment(content),
    tags,
    importance,
    textAnalyzed: true,
  }
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0)
}

function bucketByTopFolder(files) {
  const map = new Map()
  for (const f of files) {
    const seg = f.path.split('/')[1] || '(root)'
    const cur = map.get(seg) || { folder: seg, files: 0, lines: 0, exports: 0, avgImportance: 0 }
    cur.files += 1
    cur.lines += f.lineCount
    cur.exports += f.exportCount
    map.set(seg, cur)
  }
  const out = [...map.values()]
  for (const row of out) {
    const items = files.filter(f => f.path.split('/')[1] === row.folder)
    row.avgImportance = items.length
      ? Number((sum(items.map(i => i.importance)) / items.length).toFixed(2))
      : 0
  }
  return out.sort((a, b) => b.files - a.files)
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true })

  const all = await walk(SRC_DIR)
  const analyzed = []
  for (const p of all) {
    analyzed.push(await analyzeFile(p))
  }

  analyzed.sort((a, b) => a.path.localeCompare(b.path))

  const topFolders = bucketByTopFolder(analyzed)
  const topImportant = [...analyzed].sort((a, b) => b.importance - a.importance).slice(0, 80)
  const topLargest = [...analyzed].sort((a, b) => b.lineCount - a.lineCount).slice(0, 80)

  const index = {
    generatedAt: new Date().toISOString(),
    root: rel(SRC_DIR),
    totals: {
      files: analyzed.length,
      textAnalyzed: analyzed.filter(f => f.textAnalyzed).length,
      lines: sum(analyzed.map(f => f.lineCount)),
      exports: sum(analyzed.map(f => f.exportCount)),
    },
    topFolders,
    topImportant,
    topLargest,
    files: analyzed,
  }

  await fs.writeFile(INDEX_PATH, JSON.stringify(index, null, 2), 'utf8')

  const summaryLines = []
  summaryLines.push('# Claude Code Leaked Source Deep Index')
  summaryLines.push('')
  summaryLines.push(`Generated: ${index.generatedAt}`)
  summaryLines.push(`Scope: ${index.root}`)
  summaryLines.push('')
  summaryLines.push('## Totals')
  summaryLines.push('')
  summaryLines.push(`- Files: ${index.totals.files}`)
  summaryLines.push(`- Text analyzed: ${index.totals.textAnalyzed}`)
  summaryLines.push(`- Total lines: ${index.totals.lines}`)
  summaryLines.push(`- Total exported symbols: ${index.totals.exports}`)
  summaryLines.push('')
  summaryLines.push('## Top Folders')
  summaryLines.push('')
  for (const row of topFolders.slice(0, 30)) {
    summaryLines.push(
      `- ${row.folder}: files=${row.files}, lines=${row.lines}, exports=${row.exports}, avgImportance=${row.avgImportance}`
    )
  }
  summaryLines.push('')
  summaryLines.push('## Highest Importance Files')
  summaryLines.push('')
  for (const f of topImportant.slice(0, 40)) {
    summaryLines.push(
      `- ${f.path}: importance=${f.importance}, lines=${f.lineCount}, exports=${f.exportCount}, tags=[${f.tags.join(', ')}]`
    )
  }
  summaryLines.push('')
  summaryLines.push('## Largest Files')
  summaryLines.push('')
  for (const f of topLargest.slice(0, 40)) {
    summaryLines.push(`- ${f.path}: lines=${f.lineCount}, imports=${f.importCount}, exports=${f.exportCount}`)
  }

  await fs.writeFile(SUMMARY_PATH, summaryLines.join('\n') + '\n', 'utf8')

  const cards = []
  cards.push('# File Cards (Automated)')
  cards.push('')
  cards.push(`Generated: ${index.generatedAt}`)
  cards.push('')

  for (const f of analyzed) {
    cards.push(`## ${f.path}`)
    cards.push('')
    cards.push(`- lines: ${f.lineCount}`)
    cards.push(`- imports: ${f.importCount}`)
    cards.push(`- exports: ${f.exportCount}`)
    cards.push(`- importance: ${f.importance}`)
    cards.push(`- tags: ${f.tags.length ? f.tags.join(', ') : '(none)'}`)
    if (f.topComment) cards.push(`- topComment: ${f.topComment}`)
    if (f.exports.length) cards.push(`- exportedSymbols: ${f.exports.join(', ')}`)
    if (f.classes.length) cards.push(`- classes: ${f.classes.join(', ')}`)
    if (f.functions.length) cards.push(`- functions: ${f.functions.join(', ')}`)
    cards.push('')
  }

  await fs.writeFile(FILE_CARDS_PATH, cards.join('\n'), 'utf8')

  console.log(`Wrote ${rel(INDEX_PATH)}`)
  console.log(`Wrote ${rel(SUMMARY_PATH)}`)
  console.log(`Wrote ${rel(FILE_CARDS_PATH)}`)
  console.log(`Analyzed files: ${index.totals.files}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
