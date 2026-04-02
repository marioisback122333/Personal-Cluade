#!/usr/bin/env bash
set -euo pipefail

if ! command -v claude >/dev/null 2>&1; then
  echo "[ERROR] claude CLI is not installed or not in PATH."
  echo "Install the official CLI first, then run this script again."
  exit 1
fi

if [[ ! -d "src" ]]; then
  echo "[ERROR] Run this from the project root (src directory not found)."
  exit 1
fi

echo "Launching Claude in a safer default profile..."
echo "- Permission mode: default"
echo "- Working dir scope: current project"
echo "- No bypass-permission flags"
echo

exec claude \
  --permission-mode default \
  --add-dir "$PWD" \
  "$@"
