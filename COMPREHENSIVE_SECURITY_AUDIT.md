# Comprehensive Security Audit Report

Date: 2026-04-01
Repository: Personal-Cluade
Assessment Type: Static code review (no exploit execution, no dynamic fuzzing)

## 1. Executive Summary

This assessment reviewed trust boundaries, permission handling, multi-agent orchestration, remote bridge paths, persistence surfaces, and automation controls.

Overall posture is **defense-aware but policy-fragile** in several high-impact areas:

- Permission bypass behavior can be broader than some interface/schema wording implies.
- Non-interactive/headless flows intentionally skip interactive trust UX and can auto-approve certain project-scoped pathways.
- HTTP hook SSRF hardening is reduced when a proxy is active, shifting security to proxy policy quality.

No confirmed unauthenticated remote critical exploit was identified in this static pass.

## 2. Scope

### In-scope themes

- CLI startup, mode parsing, and permission-mode resolution
- Trust dialog and interactive/non-interactive gating
- Query engine and tool execution loop
- Multi-agent spawn/inheritance behavior
- Bridge, token handling, and trusted device flows
- Memory/session persistence and transcript handling
- Scheduled and remote trigger automation surfaces
- Hook execution and SSRF controls

### Representative files reviewed

- [src/main.tsx](src/main.tsx)
- [src/utils/permissions/permissionSetup.ts](src/utils/permissions/permissionSetup.ts)
- [src/interactiveHelpers.tsx](src/interactiveHelpers.tsx)
- [src/setup.ts](src/setup.ts)
- [src/query.ts](src/query.ts)
- [src/QueryEngine.ts](src/QueryEngine.ts)
- [src/utils/hooks/execHttpHook.ts](src/utils/hooks/execHttpHook.ts)
- [src/utils/hooks/ssrfGuard.ts](src/utils/hooks/ssrfGuard.ts)
- [src/utils/swarm/spawnUtils.ts](src/utils/swarm/spawnUtils.ts)
- [src/tools/shared/spawnMultiAgent.ts](src/tools/shared/spawnMultiAgent.ts)
- [src/services/mcp/utils.ts](src/services/mcp/utils.ts)
- [src/bridge/bridgeMain.ts](src/bridge/bridgeMain.ts)
- [src/bridge/trustedDevice.ts](src/bridge/trustedDevice.ts)
- [src/bridge/jwtUtils.ts](src/bridge/jwtUtils.ts)
- [src/history.ts](src/history.ts)
- [src/utils/sessionStorage.ts](src/utils/sessionStorage.ts)
- [src/tools/ScheduleCronTool/CronCreateTool.ts](src/tools/ScheduleCronTool/CronCreateTool.ts)
- [src/tools/RemoteTriggerTool/RemoteTriggerTool.ts](src/tools/RemoteTriggerTool/RemoteTriggerTool.ts)

## 3. Methodology

1. Static code inspection across core control-plane paths.
2. Pattern-based search for risky markers (permission bypass, trust skips, TODO/FIXME indicators).
3. Cross-file dataflow tracing for:
   - startup flags -> permission mode
   - permission mode -> tool context -> spawned teammates
   - trust state -> interactive setup behavior
   - hook URL/proxy behavior -> SSRF guard application
4. Severity ranking by exploitability, blast radius, and default exposure.

## 4. Threat Model Snapshot

### Assets

- User filesystem access and workspace integrity
- Auth tokens (OAuth/session ingress/trusted device token)
- Session history/transcripts and persisted context
- Ability to execute tools and shell commands
- Automation triggers (scheduled and remote)

### Trust boundaries

- Interactive trusted workspace vs non-interactive `--print`/SDK-style execution
- Parent session vs spawned teammates/subagents
- Direct HTTP hook egress vs proxied egress
- Local policy/settings vs remote feature-gate behavior

## 5. Positive Controls (Strengths)

1. Bypass safety checks during setup include root/sudo and sandbox+internet constraints.
   - [src/setup.ts](src/setup.ts#L395)
   - [src/setup.ts](src/setup.ts#L411)
   - [src/setup.ts](src/setup.ts#L437)
2. Bridge path enforces prior workspace trust acceptance.
   - [src/bridge/bridgeMain.ts](src/bridge/bridgeMain.ts#L2086)
3. SSRF guard blocks private/link-local ranges when direct DNS lookup path is used.
   - [src/utils/hooks/ssrfGuard.ts](src/utils/hooks/ssrfGuard.ts)
4. Memory path detection includes path normalization to reduce traversal bypass risk.
   - [src/utils/memoryFileDetection.ts](src/utils/memoryFileDetection.ts#L153)

## 6. Findings (Ranked)

### High-1: Permission contract mismatch and bypass-mode reachability

**What was observed**

- SDK schema text states bypass mode requires `allowDangerouslySkipPermissions`.
  - [src/entrypoints/sdk/coreSchemas.ts](src/entrypoints/sdk/coreSchemas.ts#L344)
- Resolver logic promotes bypass when `dangerouslySkipPermissions` is set.
  - [src/utils/permissions/permissionSetup.ts](src/utils/permissions/permissionSetup.ts#L725)
  - [src/utils/permissions/permissionSetup.ts](src/utils/permissions/permissionSetup.ts#L726)
- CLI exposes both flags.
  - [src/main.tsx](src/main.tsx#L976)

**Risk**

- Integrators and policy authors may assume stricter guarantees than runtime behavior enforces, creating policy drift.

**Recommendation**

- Either enforce schema contract in resolver or align schema/help text and policy docs to actual resolution order.

---

### High-2: Headless trust path and auto-approval behavior can expand unattended risk

**What was observed**

- Non-interactive path treats trust as implicit for system-context prefetch.
  - [src/main.tsx](src/main.tsx#L363)
  - [src/main.tsx](src/main.tsx#L366)
- Interactive trust dialog is not reached for non-interactive sessions.
  - [src/interactiveHelpers.tsx](src/interactiveHelpers.tsx#L129)
- MCP project server status can auto-approve in non-interactive mode when project settings source is enabled.
  - [src/services/mcp/utils.ts](src/services/mcp/utils.ts#L394)
  - [src/services/mcp/utils.ts](src/services/mcp/utils.ts#L399)

**Risk**

- Scripted/headless use in untrusted repos may execute with fewer user-visible trust checks than interactive use.

**Recommendation**

- Add an explicit headless trust policy control (secure-by-default), requiring opt-in for project-scoped auto-approvals in unattended contexts.

---

### High-3: SSRF guard is intentionally skipped under proxy mode

**What was observed**

- `execHttpHook` disables SSRF lookup guard when sandbox proxy or env proxy is active.
  - [src/utils/hooks/execHttpHook.ts](src/utils/hooks/execHttpHook.ts#L184)
  - [src/utils/hooks/execHttpHook.ts](src/utils/hooks/execHttpHook.ts#L216)
- SSRF guard documentation explicitly notes this trust shift.
  - [src/utils/hooks/ssrfGuard.ts](src/utils/hooks/ssrfGuard.ts#L15)

**Risk**

- If proxy policy is weak/misconfigured, blocked target classes (for example metadata endpoints or internal ranges) may become reachable via proxy-routed traffic.

**Recommendation**

- Add optional preflight hard-deny rules for known sensitive targets even when proxied, unless explicit allowlist entries are present.

---

### Medium-1: Bypass mode can propagate to spawned teammates

**What was observed**

- Spawned teammate CLI flags inherit dangerous bypass posture from session/mode state.
  - [src/utils/swarm/spawnUtils.ts](src/utils/swarm/spawnUtils.ts#L51)
  - [src/utils/swarm/spawnUtils.ts](src/utils/swarm/spawnUtils.ts#L53)
  - [src/tools/shared/spawnMultiAgent.ts](src/tools/shared/spawnMultiAgent.ts#L220)

**Risk**

- A single permissive parent context can fan out into multiple autonomous workers with equivalent bypass exposure.

**Recommendation**

- Require explicit per-teammate bypass inheritance opt-in, or default teammates to safer mode.

---

### Medium-2: Durable automation surfaces depend heavily on policy/gates

**What was observed**

- Durable cron behavior persists jobs and can survive restarts.
  - [src/tools/ScheduleCronTool/CronCreateTool.ts](src/tools/ScheduleCronTool/CronCreateTool.ts#L38)
  - [src/tools/ScheduleCronTool/CronCreateTool.ts](src/tools/ScheduleCronTool/CronCreateTool.ts#L144)
- Remote trigger tool supports list/get/create/update/run under feature+policy gating.
  - [src/tools/RemoteTriggerTool/RemoteTriggerTool.ts](src/tools/RemoteTriggerTool/RemoteTriggerTool.ts#L20)
  - [src/tools/RemoteTriggerTool/RemoteTriggerTool.ts](src/tools/RemoteTriggerTool/RemoteTriggerTool.ts#L57)
  - [src/tools/RemoteTriggerTool/RemoteTriggerTool.ts](src/tools/RemoteTriggerTool/RemoteTriggerTool.ts#L60)

**Risk**

- Mis-scoped policies can enable unattended execution channels with broad operational impact.

**Recommendation**

- Add stricter default constraints and mandatory audit logging for create/run actions.

---

### Low-1: Minor robustness signals (TODO/test fragility notes)

**What was observed**

- A TODO near MCP status path indicates known test fragility concerns.
  - [src/services/mcp/utils.ts](src/services/mcp/utils.ts)

**Risk**

- Low direct impact, but reduces confidence in edge-condition behavior over time.

**Recommendation**

- Convert TODO into deterministic regression tests and remove ambiguity.

## 7. Hidden / Feature-Gated Capability Notes

Security posture is strongly affected by runtime flags and feature gates, especially for:

- bypass permission mode behavior
- auto mode behavior
- remote trigger and scheduling surfaces
- multi-agent swarm/team behavior

Representative control points:

- [src/utils/permissions/permissionSetup.ts](src/utils/permissions/permissionSetup.ts)
- [src/tools/RemoteTriggerTool/RemoteTriggerTool.ts](src/tools/RemoteTriggerTool/RemoteTriggerTool.ts)
- [src/utils/swarm/spawnUtils.ts](src/utils/swarm/spawnUtils.ts)

## 8. Persistence and Data Exposure Surfaces

1. Prompt history stored in `history.jsonl` under config home.
   - [src/history.ts](src/history.ts#L115)
2. Session and agent transcripts persisted with large-read safeguards.
   - [src/utils/sessionStorage.ts](src/utils/sessionStorage.ts#L202)
   - [src/utils/sessionStorage.ts](src/utils/sessionStorage.ts#L229)
   - [src/utils/sessionStorage.ts](src/utils/sessionStorage.ts#L247)
3. Main concern is confidentiality/retention and cross-session data hygiene.

## 9. Multi-Agent / Task Orchestration Risk Notes

- Query loop and engine support iterative tool execution and compaction behavior.
  - [src/query.ts](src/query.ts)
  - [src/QueryEngine.ts](src/QueryEngine.ts)
- Multi-agent task fan-out increases blast radius if parent permissions are too broad.

## 10. Bridge and Token Handling Notes

- Trusted device enrollment and cached token retrieval are implemented with gate checks.
  - [src/bridge/trustedDevice.ts](src/bridge/trustedDevice.ts)
- JWT expiry scheduling and refresh mechanics reduce sudden expiry risk.
  - [src/bridge/jwtUtils.ts](src/bridge/jwtUtils.ts)
- Work-secret/session-id handling includes format checks and compatibility logic.
  - [src/bridge/workSecret.ts](src/bridge/workSecret.ts)

## 11. Risk Matrix

| Finding | Severity | Likelihood | Impact | Priority |
|---|---|---:|---:|---:|
| Permission contract mismatch | High | Medium | High | P0 |
| Headless trust + auto-approval interactions | High | Medium | High | P0 |
| SSRF guard skipped under proxy | High | Medium | High | P0 |
| Bypass propagation to teammates | Medium | Medium | Medium/High | P1 |
| Durable automation governance drift | Medium | Medium | Medium | P1 |
| Minor TODO robustness signals | Low | Medium | Low | P2 |

## 12. Remediation Roadmap

### P0 (Immediate)

1. Align bypass-mode contract across schema, resolver, and docs.
2. Add explicit headless trust enforcement control for project-scoped approvals.
3. Add proxy-mode SSRF hardening for sensitive address classes.

### P1 (Near term)

1. Make bypass inheritance to teammates explicit/opt-in.
2. Tighten create/run governance on automation tools with stronger policy defaults and event logs.

### P2 (Backlog)

1. Convert TODO/fragility comments into strict regression tests.
2. Expand static checks for permission-mode state propagation paths.

## 13. Validation and Follow-up Test Plan

Recommended CI test additions:

1. Permission mode matrix:
   - `dangerouslySkipPermissions` vs `allowDangerouslySkipPermissions`
   - settings default mode permutations
   - gate on/off behavior
2. Trust matrix:
   - interactive trusted/untrusted paths
   - non-interactive `--print` paths with project settings enabled/disabled
3. Hook egress matrix:
   - direct DNS path with blocked ranges
   - proxy-enabled path with sensitive target attempts
4. Multi-agent matrix:
   - parent mode -> teammate inherited flags
   - plan-mode precedence behavior
5. Automation matrix:
   - cron create durability constraints
   - remote trigger create/update/run under policy permutations

## Appendix A: Notes and Boundaries

- This document reflects static review state as of 2026-04-01.
- No destructive operations or live attack simulation were performed.
- Findings are prioritized for practical risk reduction and policy clarity.
