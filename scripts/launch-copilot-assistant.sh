#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env.copilot.local"

if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  source "$ENV_FILE"
fi

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] Node.js is required but not found in PATH."
  exit 1
fi

is_blank_token() {
  [[ -z "${1//[[:space:]]/}" ]]
}

if is_blank_token "${COPILOT_AUTH_TOKEN:-}" && is_blank_token "${COPILOT_GITHUB_TOKEN:-}" && is_blank_token "${GITHUB_TOKEN:-}" && is_blank_token "${GH_TOKEN:-}"; then
  if command -v gh >/dev/null 2>&1; then
    GH_TOKEN_VALUE="$(env -u GITHUB_TOKEN -u GH_TOKEN gh auth token 2>/dev/null || true)"
    if [[ -n "${GH_TOKEN_VALUE}" ]]; then
      export GITHUB_TOKEN="${GH_TOKEN_VALUE}"
      echo "[INFO] Using token from gh auth token."
    fi
  fi
fi

if is_blank_token "${COPILOT_AUTH_TOKEN:-}" && is_blank_token "${COPILOT_GITHUB_TOKEN:-}" && is_blank_token "${GITHUB_TOKEN:-}" && is_blank_token "${GH_TOKEN:-}"; then
  echo "[ERROR] No token found."
  echo "Run: ./scripts/auth-github-device.sh"
  echo "Or set one of: COPILOT_AUTH_TOKEN, COPILOT_GITHUB_TOKEN, GITHUB_TOKEN, GH_TOKEN"
  exit 1
fi

exec node "$ROOT_DIR/assistant/copilot-personal-assistant.mjs" "$@"
