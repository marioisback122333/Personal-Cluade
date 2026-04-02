#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env.copilot.local"
FORCE=0

if [[ "${1:-}" == "--force" ]]; then
  FORCE=1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "[ERROR] GitHub CLI (gh) is not installed."
  echo "Install gh first, then re-run this script."
  exit 1
fi

echo "Starting GitHub device/web authentication..."
echo "If prompted with a code, open: https://github.com/login/device"

# If these env vars are set, gh prefers them over stored credentials and
# can silently keep using a limited CI/Codespaces token.
if [[ -n "${GITHUB_TOKEN:-}" || -n "${GH_TOKEN:-}" ]]; then
  echo "[INFO] Detected GITHUB_TOKEN/GH_TOKEN in environment."
  echo "[INFO] Temporarily unsetting them for interactive device login."
fi

if [[ "$FORCE" -eq 1 ]]; then
  env -u GITHUB_TOKEN -u GH_TOKEN gh auth logout --hostname github.com || true
fi

env -u GITHUB_TOKEN -u GH_TOKEN gh auth login --hostname github.com --git-protocol https --web

TOKEN="$(env -u GITHUB_TOKEN -u GH_TOKEN gh auth token)"
if [[ -z "$TOKEN" ]]; then
  echo "[ERROR] Could not read token from gh auth token."
  exit 1
fi

umask 077
printf 'GITHUB_TOKEN=%s\nCOPILOT_GITHUB_TOKEN=%s\n' "$TOKEN" "$TOKEN" > "$ENV_FILE"
chmod 600 "$ENV_FILE"

echo
echo "[OK] Auth complete. Token saved to: $ENV_FILE"
echo "Load it in your shell with:"
echo "  set -a; source ./.env.copilot.local; set +a"
echo
echo "Then run:"
echo "  ./scripts/launch-copilot-assistant.sh"
