# Claude Code Leaked Source Deep Index

Generated: 2026-04-01T19:13:35.930Z
Scope: src

## Totals

- Files: 1902
- Text analyzed: 1902
- Total lines: 514587
- Total exported symbols: 8058

## Top Folders

- utils: files=564, lines=181036, exports=3570, avgImportance=38.45
- components: files=389, lines=81935, exports=628, avgImportance=17.78
- commands: files=207, lines=26656, exports=262, avgImportance=36.19
- tools: files=184, lines=51012, exports=630, avgImportance=53.97
- services: files=130, lines=53810, exports=797, avgImportance=51.02
- hooks: files=104, lines=19308, exports=166, avgImportance=24.77
- ink: files=96, lines=19938, exports=421, avgImportance=14.76
- bridge: files=31, lines=12644, exports=152, avgImportance=66.19
- constants: files=21, lines=2669, exports=161, avgImportance=18.62
- skills: files=20, lines=4086, exports=42, avgImportance=16.7
- cli: files=19, lines=12372, exports=67, avgImportance=30.26
- keybindings: files=14, lines=3173, exports=59, avgImportance=16.93
- tasks: files=12, lines=3298, exports=92, avgImportance=30.75
- migrations: files=11, lines=614, exports=11, avgImportance=7.64
- types: files=11, lines=3457, exports=128, avgImportance=30.55
- context: files=9, lines=1013, exports=36, avgImportance=12.11
- entrypoints: files=8, lines=4059, exports=214, avgImportance=38.13
- memdir: files=8, lines=1744, exports=48, avgImportance=22.5
- buddy: files=6, lines=1304, exports=53, avgImportance=19.17
- state: files=6, lines=1196, exports=24, avgImportance=23.33
- vim: files=5, lines=1518, exports=39, avgImportance=16.2
- native-ts: files=4, lines=4085, exports=53, avgImportance=31.25
- query: files=4, lines=656, exports=8, avgImportance=28.75
- remote: files=4, lines=1131, exports=14, avgImportance=38
- screens: files=3, lines=5980, exports=5, avgImportance=45
- server: files=3, lines=361, exports=11, avgImportance=38
- plugins: files=2, lines=184, exports=8, avgImportance=11
- upstreamproxy: files=2, lines=742, exports=9, avgImportance=31
- assistant: files=1, lines=88, exports=6, avgImportance=30
- bootstrap: files=1, lines=1759, exports=215, avgImportance=71

## Highest Importance Files

- src/main.tsx: importance=146, lines=4684, exports=2, tags=[auth, permissions, bridge, remote, mcp, tools, commands, state-memory, cost-budget]
- src/query.ts: importance=145, lines=1730, exports=1, tags=[auth, permissions, mcp, query-loop, tools, commands, state-memory, cost-budget]
- src/QueryEngine.ts: importance=130, lines=1296, exports=2, tags=[permissions, mcp, query-loop, tools, commands, state-memory, cost-budget]
- src/tools/BashTool/bashPermissions.ts: importance=120, lines=2622, exports=24, tags=[auth, permissions, query-loop, tools, state-memory, cost-budget]
- src/commands.ts: importance=119, lines=755, exports=17, tags=[auth, permissions, bridge, mcp, tools, commands, state-memory]
- src/bridge/bridgeMain.ts: importance=115, lines=3000, exports=10, tags=[auth, permissions, bridge, remote, tools, state-memory, cost-budget]
- src/tools.ts: importance=114, lines=390, exports=9, tags=[auth, permissions, mcp, tools]
- src/services/api/claude.ts: importance=110, lines=3420, exports=21, tags=[auth, permissions, mcp, query-loop, tools, state-memory, cost-budget]
- src/services/mcp/client.ts: importance=110, lines=3349, exports=28, tags=[auth, permissions, bridge, remote, mcp, query-loop, tools, commands, state-memory]
- src/bridge/replBridge.ts: importance=107, lines=2407, exports=5, tags=[auth, permissions, bridge, remote, tools, commands, state-memory, cost-budget]
- src/utils/attachments.ts: importance=105, lines=3998, exports=51, tags=[auth, permissions, bridge, mcp, query-loop, tools, commands, state-memory, cost-budget]
- src/utils/messages.ts: importance=105, lines=5513, exports=114, tags=[auth, permissions, bridge, mcp, query-loop, tools, commands, state-memory, cost-budget]
- src/utils/hooks.ts: importance=103, lines=5023, exports=38, tags=[permissions, mcp, query-loop, tools, state-memory, hooks-security]
- src/services/compact/compact.ts: importance=101, lines=1706, exports=25, tags=[auth, permissions, bridge, remote, mcp, query-loop, tools, state-memory, cost-budget]
- src/bridge/bridgeMessaging.ts: importance=100, lines=462, exports=10, tags=[auth, permissions, bridge, remote, query-loop, tools, state-memory]
- src/tools/FileReadTool/FileReadTool.ts: importance=100, lines=1184, exports=7, tags=[auth, permissions, query-loop, tools, state-memory, cost-budget]
- src/commands/insights.ts: importance=99, lines=3201, exports=6, tags=[auth, mcp, query-loop, tools, commands, state-memory]
- src/tools/AgentTool/AgentTool.tsx: importance=99, lines=1398, exports=5, tags=[auth, permissions, mcp, query-loop, tools, state-memory]
- src/tools/AgentTool/agentToolUtils.ts: importance=98, lines=687, exports=12, tags=[auth, permissions, mcp, query-loop, tools, state-memory]
- src/tools/PowerShellTool/readOnlyValidation.ts: importance=98, lines=1824, exports=10, tags=[auth, permissions, tools, state-memory]
- src/tools/BashTool/bashSecurity.ts: importance=96, lines=2593, exports=4, tags=[auth, permissions, tools]
- src/tools/BashTool/BashTool.tsx: importance=96, lines=1144, exports=5, tags=[auth, permissions, mcp, query-loop, tools, cost-budget]
- src/tools/shared/spawnMultiAgent.ts: importance=95, lines=1094, exports=5, tags=[auth, permissions, query-loop, tools, state-memory]
- src/utils/plugins/marketplaceManager.ts: importance=95, lines=2644, exports=25, tags=[auth, permissions]
- src/utils/sessionStorage.ts: importance=95, lines=5106, exports=94, tags=[auth, bridge, mcp, query-loop, tools, commands, state-memory, cost-budget]
- src/tools/PowerShellTool/pathValidation.ts: importance=93, lines=2050, exports=3, tags=[auth, permissions, tools, state-memory]
- src/tools/SkillTool/SkillTool.ts: importance=93, lines=1109, exports=4, tags=[auth, permissions, mcp, query-loop, tools, state-memory, cost-budget]
- src/utils/permissions/permissions.ts: importance=93, lines=1487, exports=17, tags=[auth, permissions, mcp, query-loop, tools, state-memory]
- src/utils/permissions/yoloClassifier.ts: importance=93, lines=1496, exports=12, tags=[auth, permissions, query-loop, tools, state-memory, cost-budget]
- src/services/analytics/metadata.ts: importance=92, lines=974, exports=18, tags=[auth, permissions, mcp, query-loop, tools, state-memory]
- src/tools/PowerShellTool/PowerShellTool.tsx: importance=92, lines=1001, exports=4, tags=[auth, permissions, mcp, query-loop, tools, cost-budget]
- src/cli/print.ts: importance=90, lines=5595, exports=12, tags=[auth, permissions, bridge, remote, mcp, query-loop, tools, commands, state-memory, cost-budget]
- src/services/mcp/auth.ts: importance=90, lines=2466, exports=13, tags=[auth, mcp, state-memory]
- src/tools/AgentTool/UI.tsx: importance=90, lines=872, exports=12, tags=[auth, query-loop, tools, state-memory]
- src/tools/BashTool/pathValidation.ts: importance=90, lines=1304, exports=6, tags=[auth, permissions, tools, state-memory]
- src/tools/BashTool/readOnlyValidation.ts: importance=90, lines=1991, exports=2, tags=[auth, permissions, bridge, tools, state-memory]
- src/tools/PowerShellTool/powershellPermissions.ts: importance=90, lines=1649, exports=4, tags=[auth, permissions, tools, state-memory]
- src/utils/analyzeContext.ts: importance=90, lines=1383, exports=8, tags=[auth, permissions, mcp, query-loop, tools, cost-budget]
- src/utils/teleport.tsx: importance=90, lines=1226, exports=15, tags=[auth, permissions, bridge, mcp, query-loop, tools, state-memory]
- src/services/PromptSuggestion/speculation.ts: importance=88, lines=992, exports=7, tags=[auth, permissions, query-loop, tools, state-memory]

## Largest Files

- src/cli/print.ts: lines=5595, imports=148, exports=12
- src/utils/messages.ts: lines=5513, imports=67, exports=114
- src/utils/sessionStorage.ts: lines=5106, imports=42, exports=94
- src/utils/hooks.ts: lines=5023, imports=60, exports=38
- src/screens/REPL.tsx: lines=5006, imports=244, exports=3
- src/main.tsx: lines=4684, imports=164, exports=2
- src/utils/bash/bashParser.ts: lines=4437, imports=0, exports=4
- src/utils/attachments.ts: lines=3998, imports=100, exports=51
- src/services/api/claude.ts: lines=3420, imports=77, exports=21
- src/services/mcp/client.ts: lines=3349, imports=65, exports=28
- src/utils/plugins/pluginLoader.ts: lines=3303, imports=34, exports=21
- src/commands/insights.ts: lines=3201, imports=21, exports=6
- src/bridge/bridgeMain.ts: lines=3000, imports=30, exports=10
- src/utils/bash/ast.ts: lines=2680, imports=3, exports=8
- src/utils/plugins/marketplaceManager.ts: lines=2644, imports=27, exports=25
- src/tools/BashTool/bashPermissions.ts: lines=2622, imports=36, exports=24
- src/tools/BashTool/bashSecurity.ts: lines=2593, imports=6, exports=4
- src/native-ts/yoga-layout/index.ts: lines=2579, imports=1, exports=9
- src/services/mcp/auth.ts: lines=2466, imports=30, exports=13
- src/bridge/replBridge.ts: lines=2407, imports=28, exports=5
- src/components/PromptInput/PromptInput.tsx: lines=2339, imports=123, exports=1
- src/commands/plugin/ManagePlugins.tsx: lines=2215, imports=52, exports=2
- src/tools/PowerShellTool/pathValidation.ts: lines=2050, imports=17, exports=3
- src/utils/auth.ts: lines=2003, imports=35, exports=58
- src/tools/BashTool/readOnlyValidation.ts: lines=1991, imports=15, exports=2
- src/utils/shell/readOnlyCommandValidation.ts: lines=1894, imports=1, exports=12
- src/entrypoints/sdk/coreSchemas.ts: lines=1890, imports=2, exports=135
- src/tools/PowerShellTool/readOnlyValidation.ts: lines=1824, imports=6, exports=10
- src/components/Settings/Config.tsx: lines=1822, imports=49, exports=1
- src/utils/config.ts: lines=1818, imports=34, exports=45
- src/utils/powershell/parser.ts: lines=1805, imports=5, exports=34
- src/utils/permissions/filesystem.ts: lines=1778, imports=31, exports=29
- src/bootstrap/state.ts: lines=1759, imports=20, exports=215
- src/services/tools/toolExecution.ts: lines=1746, imports=43, exports=5
- src/query.ts: lines=1730, imports=43, exports=1
- src/ink/ink.tsx: lines=1723, imports=40, exports=3
- src/utils/nativeInstaller/installer.ts: lines=1709, imports=24, exports=12
- src/services/compact/compact.ts: lines=1706, imports=48, exports=25
- src/utils/plugins/schemas.ts: lines=1682, imports=4, exports=45
- src/tools/PowerShellTool/powershellPermissions.ts: lines=1649, imports=17, exports=4
