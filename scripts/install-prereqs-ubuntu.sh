#!/usr/bin/env bash
set -euo pipefail

DISABLED_YARN_REPO=0

retry_apt_update_with_yarn_fallback() {
  if sudo apt-get update; then
    return 0
  fi

  if [[ -f "/etc/apt/sources.list.d/yarn.list" ]]; then
    echo "[WARN] apt update failed. Temporarily disabling broken Yarn repo and retrying..."
    sudo mv /etc/apt/sources.list.d/yarn.list /etc/apt/sources.list.d/yarn.list.disabled-by-vibe-coder
    DISABLED_YARN_REPO=1
    sudo apt-get update
    return 0
  fi

  echo "[ERROR] apt update failed and no Yarn fallback was available."
  return 1
}

if [[ "${EUID}" -eq 0 ]]; then
  echo "[WARN] Running as root. It is safer to run as your normal user."
fi

if ! command -v apt-get >/dev/null 2>&1; then
  echo "[ERROR] apt-get not found. This installer is for Ubuntu/Debian-like systems."
  exit 1
fi

echo "Installing required packages (git, ripgrep, curl)..."
retry_apt_update_with_yarn_fallback
sudo apt-get install -y git ripgrep curl ca-certificates

echo "Installing Bun (official install script)..."
if command -v bun >/dev/null 2>&1; then
  echo "[OK] Bun already installed: $(command -v bun)"
else
  curl -fsSL https://bun.sh/install | bash
fi

echo
echo "Done. Open a new shell or run:"
echo "  source ~/.bashrc  # or source ~/.zshrc"
echo
echo "Then verify:"
echo "  bun --version"
echo "  rg --version"
echo "  git --version"

if [[ "${DISABLED_YARN_REPO}" -eq 1 ]]; then
  echo
  echo "[INFO] Yarn apt repo was disabled due invalid/missing key."
  echo "If you need Yarn later, re-enable it after fixing its signing key:"
  echo "  sudo mv /etc/apt/sources.list.d/yarn.list.disabled-by-vibe-coder /etc/apt/sources.list.d/yarn.list"
fi
