# Start Here: Make It Work For You

If you want a practical default setup that does most work with lower risk, follow this.

## 1. Run preflight

```bash
./scripts/preflight.sh
```

This checks whether your machine has what you need.

If you are on Ubuntu/Debian and dependencies are missing, run:

```bash
./scripts/install-prereqs-ubuntu.sh
```

This installer now auto-recovers from the Yarn apt GPG issue by temporarily disabling the broken Yarn source and retrying apt update.

Install Claude CLI:

```bash
./scripts/install-claude-cli.sh
```

Then run preflight again.

## 2. Use this as your daily default

- Work inside a dedicated project folder/container.
- Use normal permission mode (not bypass).
- Keep secrets out of prompts and test data.
- Commit often so rollback is easy.

## 3. Launch with safe defaults

If `claude` CLI is installed:

```bash
./scripts/launch-safe.sh
```

You can still pass normal args:

```bash
./scripts/launch-safe.sh "help me add tests for src/query.ts"
```

First-time practical workflow:

1. Start with code reading/search tasks.
2. Move to small edits in one file.
3. Ask for tests and validation after each change.

## 4. Copy-paste starter prompts

### Build feature

"Implement this feature in small steps, show plan first, then run tests after each step."

### Debug fast

"Find root cause, make minimal fix, add regression test, and summarize changed files."

### Refactor safely

"Refactor for readability only, no behavior changes, then verify with tests."

### Daily review

"Review current diffs for risks/regressions and list findings by severity."

## 5. What to avoid by default

- `--dangerously-skip-permissions`
- Running as root/sudo for daily coding
- Untrusted plugins/MCP servers
- Unattended remote triggers without strict policy

## 6. Reality check for this leaked repo

This snapshot appears to include source files but not full build metadata in root (for example, no `package.json` currently present).

So the most reliable way to get value now is:

1. use this repo as a high-quality reference,
2. use the safe launcher with an installed CLI,
3. apply the prompt workflow above for your personal coding tasks.

If `claude` is not installed yet, you can still use this repo immediately with your editor AI workflow:

1. Open tasks from this guide.
2. Ask for one small change at a time.
3. Keep verification and git checkpoints strict.
