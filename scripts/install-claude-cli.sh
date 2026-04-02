#!/usr/bin/env bash
set -euo pipefail

if ! command -v npm >/dev/null 2>&1; then
  echo "[ERROR] npm is not installed. Install Node.js/npm first."
  exit 1
fi

echo "Installing Claude CLI from npm package @anthropic-ai/claude-code ..."
npm install -g @anthropic-ai/claude-code

if command -v claude >/dev/null 2>&1; then
  echo "[OK] claude installed: $(command -v claude)"
  claude --version || true
else
  echo "[WARN] Install finished but 'claude' was not found in PATH."
  echo "You may need to restart shell or ensure npm global bin is in PATH."
  echo "Try: npm bin -g"
  exit 1
fi
