# Copilot Token Personal Assistant

This is a lightweight personal assistant runner that accepts a GitHub/Copilot token input and calls a chat-completions compatible endpoint.

## Runtime efficiency layer

The assistant now includes a clean-room runtime layer inspired by robust patterns in the larger leaked codebase:

- Retry classifier with timeout/network/429/5xx handling
- `Retry-After` support for rate-limit backoff
- GitHub token -> Copilot runtime token exchange with local cache and auto base URL binding
- Circuit breaker for repeated upstream failures
- Stale-while-refresh model list cache (TTL + stale window)
- LRU+TTL cache for codebase `/where` queries
- Serial request queue with backpressure limit
- Sliding history window to keep requests fast and stable
- Risky command pattern guardrail (with confirm flow in interactive mode)
- Optional profile hooks for before-send and after-receive transforms
- Runtime stats and cache controls (`/stats`, `/cache clear`)
- Improved interactive terminal UI with status-aware prompt and colorized sections

## Files

- [assistant/copilot-personal-assistant.mjs](assistant/copilot-personal-assistant.mjs)
- [scripts/launch-copilot-assistant.sh](scripts/launch-copilot-assistant.sh)

## Token input

The assistant checks tokens in this order:

1. `COPILOT_AUTH_TOKEN`
2. `COPILOT_GITHUB_TOKEN`
3. `GITHUB_TOKEN`
4. `GH_TOKEN`

Additional fallback sources:

- OpenClaw auth profile token from `~/.openclaw/agents/main/agent/auth-profiles.json`
- `gh auth token`

Or pass `--token` directly.

## Quick start

```bash
chmod +x scripts/launch-copilot-assistant.sh
export GITHUB_TOKEN="your_token_here"
./scripts/launch-copilot-assistant.sh
```

Device login flow (recommended):

```bash
chmod +x scripts/auth-github-device.sh
./scripts/auth-github-device.sh
set -a; source ./.env.copilot.local; set +a
./scripts/launch-copilot-assistant.sh
```

If `gh auth status` shows `(GITHUB_TOKEN)` and models are unavailable, force a real device login:

```bash
./scripts/auth-github-device.sh --force
./scripts/launch-copilot-assistant.sh --list-models
```

The launcher auto-loads `.env.copilot.local` if present.

Single prompt mode:

```bash
./scripts/launch-copilot-assistant.sh --prompt "Give me a plan to build a notes app"
```

## Config options

- `--model` (default: `gpt-4o-mini`)
- `--profile <name>` (default: `default`)
- `--resume <file|index>`
- `--endpoint` (default: `https://models.inference.ai.azure.com/chat/completions`)
- `--system`
- `--timeout-ms`
- `--temperature`
- `--max-retries`
- `--stream` / `--no-stream`
- `--show-thinking` / `--hide-thinking`
- `--max-turns`
- `--max-history-messages`
- `--circuit-failures`
- `--circuit-cooldown-ms`
- `--allow-risky-prompts`
- `--color` / `--no-color`
- `--models-cache-ttl-ms`
- `--models-cache-stale-ms`
- `--where-cache-ttl-ms`
- `--queue-max-pending`
- `--non-interactive`
- `--list-models`
- `--pick-model`
- `--codebase-summary`
- `--where <query>`
- `--set-default-model <name>`
- `--probe-model <name>`
- `--github-copilot-auth`
- `--no-github-copilot-auth`

## Interactive slash commands

Inside interactive mode, you can use:

- `/help`
- `/models`
- `/models refresh`
- `/models all`
- `/pickmodel`
- `/model <name>`
- `/showmodel`
- `/codebase`
- `/where <query>`
- `/probe <name>`
- `/folder <name>`
- `/retry`
- `/undo`
- `/temperature`
- `/temperature <value>`
- `/stream`
- `/stream <on|off>`
- `/thinking`
- `/thinking <on|off>`
- `/system`
- `/system <text>`
- `/history`
- `/save`
- `/sessions`
- `/resume <file|index>`
- `/profile`
- `/profiles`
- `/profile save [name]`
- `/profile load <name>`
- `/hooks`
- `/hooks reload`
- `/health`
- `/dashboard`
- `/stats`
- `/cache clear`
- `/clear`
- `/exit`

## Hook files (optional)

Place hook files in `assistant/hooks/`.

File lookup order for profile `student`:

1. `assistant/hooks/student.json`
2. `assistant/hooks/default.json`

Hook schema:

```json
{
  "beforeSend": [
    { "type": "prepend", "text": "[mode=strict] " },
    { "type": "replace", "find": "\\bETA\\b", "replace": "estimated time", "flags": "gi" }
  ],
  "afterReceive": [
    { "type": "append", "text": "\n\n(checked by local hook)" }
  ]
}
```

Model picker at startup:

```bash
./scripts/launch-copilot-assistant.sh --pick-model
```

## How to change model

List models your token can access:

```bash
./scripts/launch-copilot-assistant.sh --list-models
```

Run with a specific model:

```bash
./scripts/launch-copilot-assistant.sh --model "gpt-4o-mini"
```

Or set a default model once:

```bash
export COPILOT_MODEL="gpt-4o-mini"
./scripts/launch-copilot-assistant.sh
```

Note: Some endpoints expect model names without provider prefixes (for example `gpt-4o-mini`, not `openai/gpt-4o-mini`).
OpenClaw-style names are supported too (for example `github-copilot/gpt-5.2-codex`), and are automatically normalized.
When enabled (default), the assistant also applies OpenClaw-like auth behavior: it exchanges your GitHub token for a short-lived Copilot runtime token and uses the Copilot runtime base URL when available.
If your environment needs custom Copilot token endpoints, set `COPILOT_RUNTIME_TOKEN_URLS` as a comma-separated list.
If Claude models (for example Sonnet/Opus/Haiku) are available on your endpoint/token, they will appear in `/models` and can be selected with `/pickmodel` or `/model <name>`.

Set a persistent default model (OpenClaw style accepted):

```bash
./scripts/launch-copilot-assistant.sh --set-default-model "github-copilot/gpt-5.2-codex"
```

Probe whether a model is actually accessible on your token/endpoint:

```bash
./scripts/launch-copilot-assistant.sh --probe-model "github-copilot/gpt-5.2-codex"
```

If you select a model that is unavailable, the assistant now auto-falls back to the first available chat model from your endpoint.

## Deep codebase analysis integration

Generate full-file index artifacts for leaked source:

```bash
node assistant/analysis/build-codebase-index.mjs
```

Generated files:

- `assistant/analysis/codebase_index.json`
- `assistant/analysis/codebase_summary.md`
- `assistant/analysis/file_cards.md`

Use from assistant:

```bash
./scripts/launch-copilot-assistant.sh --codebase-summary
./scripts/launch-copilot-assistant.sh --where "auth token refresh"
```

Or interactive commands:

- `/codebase`
- `/where auth token refresh`
- `/folder bridge`

## Profile and session examples

Save profile:

```bash
/profile save student
```

Load profile:

```bash
/profile load student
```

List and resume sessions:

```bash
/sessions
/resume 1
```

Example with custom endpoint:

```bash
./scripts/launch-copilot-assistant.sh \
  --endpoint "https://your-endpoint/chat/completions" \
  --model "your-model-name" \
  --prompt "hello"
```

## Important note

This implementation accepts GitHub/Copilot token inputs, but actual access depends on what that token is allowed to call on your account and endpoint. If the endpoint returns 401/403, use a token with proper permissions or switch endpoint/model.
