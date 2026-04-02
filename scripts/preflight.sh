#!/usr/bin/env bash
set -euo pipefail

ok=0
warn=0

print_ok() {
  printf "[OK] %s\n" "$1"
  ok=$((ok + 1))
}

print_warn() {
  printf "[WARN] %s\n" "$1"
  warn=$((warn + 1))
}

have() {
  command -v "$1" >/dev/null 2>&1
}

printf "== Vibe Coder Preflight ==\n"
printf "Workspace: %s\n\n" "$PWD"

if have git; then
  print_ok "git found: $(command -v git)"
else
  print_warn "git missing (install git)"
fi

if have bun; then
  print_ok "bun found: $(command -v bun)"
elif [[ -x "$HOME/.bun/bin/bun" ]]; then
  print_warn "bun is installed at $HOME/.bun/bin/bun but not in PATH (run: source ~/.bashrc)"
else
  print_warn "bun missing (install Bun 1.x)"
fi

if have rg; then
  print_ok "ripgrep found: $(command -v rg)"
else
  print_warn "ripgrep missing (install ripgrep for fast search)"
fi

if have claude; then
  print_ok "claude CLI found: $(command -v claude)"
else
  print_warn "claude CLI not found (safe launcher will not run until installed)"
fi

if [[ -f "package.json" ]]; then
  print_ok "package.json found"
else
  print_warn "package.json not found in this leaked snapshot (full build/run may be unavailable)"
fi

if [[ -d "src" ]]; then
  print_ok "src directory found"
else
  print_warn "src directory missing"
fi

printf "\nSummary: %d OK, %d WARN\n" "$ok" "$warn"

if [[ "$warn" -gt 0 ]]; then
  printf "\nNext step: read START_HERE.md and follow the quick setup path.\n"
else
  printf "\nYou are ready for the safe launcher. Run: ./scripts/launch-safe.sh\n"
fi
