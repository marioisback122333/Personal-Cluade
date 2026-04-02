# File Cards (Automated)

Generated: 2026-04-01T19:13:35.930Z

## src/assistant/sessionHistory.ts

- lines: 88
- imports: 5
- exports: 6
- importance: 30
- tags: auth, state-memory
- exportedSymbols: createHistoryAuthCtx, fetchLatestEvents, fetchOlderEvents, HISTORY_PAGE_SIZE, HistoryPage, HistoryAuthCtx
- functions: createHistoryAuthCtx, fetchPage, fetchLatestEvents, fetchOlderEvents

## src/bootstrap/state.ts

- lines: 1759
- imports: 20
- exports: 215
- importance: 71
- tags: auth, permissions, bridge, tools, state-memory, cost-budget
- exportedSymbols: getSessionId, regenerateSessionId, getParentSessionId, switchSession, getSessionProjectDir, getOriginalCwd, getProjectRoot, setOriginalCwd, setProjectRoot, getCwdState, setCwdState, getDirectConnectServerUrl, setDirectConnectServerUrl, addToTotalDurationState, resetTotalDurationStateAndCost_FOR_TESTS_ONLY, addToTotalCostState, getTotalCostUSD, getTotalAPIDuration, getTotalDuration, getTotalAPIDurationWithoutRetries, getTotalToolDuration, addToToolDuration, getTurnHookDurationMs, addToTurnHookDuration, resetTurnHookDuration, getTurnHookCount, getTurnToolDurationMs, resetTurnToolDuration, getTurnToolCount, getTurnClassifierDurationMs, addToTurnClassifierDuration, resetTurnClassifierDuration, getTurnClassifierCount, getStatsStore, setStatsStore, updateLastInteractionTime, flushInteractionTime, addToTotalLinesChanged, getTotalLinesAdded, getTotalLinesRemoved
- functions: getInitialState, getSessionId, regenerateSessionId, getParentSessionId, switchSession, getSessionProjectDir, getOriginalCwd, getProjectRoot, setOriginalCwd, setProjectRoot, getCwdState, setCwdState, getDirectConnectServerUrl, setDirectConnectServerUrl, addToTotalDurationState, resetTotalDurationStateAndCost_FOR_TESTS_ONLY, addToTotalCostState, getTotalCostUSD, getTotalAPIDuration, getTotalDuration, getTotalAPIDurationWithoutRetries, getTotalToolDuration, addToToolDuration, getTurnHookDurationMs, addToTurnHookDuration, resetTurnHookDuration, getTurnHookCount, getTurnToolDurationMs, resetTurnToolDuration, getTurnToolCount, getTurnClassifierDurationMs, addToTurnClassifierDuration, resetTurnClassifierDuration, getTurnClassifierCount, getStatsStore, setStatsStore, updateLastInteractionTime, flushInteractionTime, flushInteractionTime_inner, addToTotalLinesChanged

## src/bridge/bridgeApi.ts

- lines: 540
- imports: 3
- exports: 5
- importance: 76
- tags: auth, permissions, bridge, state-memory, cost-budget
- exportedSymbols: validateBridgeId, createBridgeApiClient, isExpiredErrorType, isSuppressible403, BridgeFatalError
- classes: BridgeFatalError
- functions: validateBridgeId, createBridgeApiClient, debug, getHeaders, resolveAuth, withOAuthRetry, handleErrorStatus, isExpiredErrorType, isSuppressible403, extractErrorTypeFromData

## src/bridge/bridgeConfig.ts

- lines: 49
- imports: 2
- exports: 4
- importance: 57
- tags: auth, bridge, tools
- exportedSymbols: getBridgeTokenOverride, getBridgeBaseUrlOverride, getBridgeAccessToken, getBridgeBaseUrl
- functions: getBridgeTokenOverride, getBridgeBaseUrlOverride, getBridgeAccessToken, getBridgeBaseUrl

## src/bridge/bridgeDebug.ts

- lines: 136
- imports: 3
- exports: 6
- importance: 63
- tags: auth, bridge, commands, state-memory
- exportedSymbols: registerBridgeDebugHandle, clearBridgeDebugHandle, getBridgeDebugHandle, injectBridgeFault, wrapApiForFaultInjection, BridgeDebugHandle
- functions: registerBridgeDebugHandle, clearBridgeDebugHandle, getBridgeDebugHandle, injectBridgeFault, wrapApiForFaultInjection, consume, throwFault

## src/bridge/bridgeEnabled.ts

- lines: 203
- imports: 5
- exports: 8
- importance: 70
- tags: auth, bridge, state-memory
- exportedSymbols: isBridgeEnabled, isBridgeEnabledBlocking, getBridgeDisabledReason, isEnvLessBridgeEnabled, isCseShimEnabled, checkBridgeMinVersion, getCcrAutoConnectDefault, isCcrMirrorEnabled
- functions: isBridgeEnabled, isBridgeEnabledBlocking, getBridgeDisabledReason, isClaudeAISubscriber, hasProfileScope, getOauthAccountInfo, isEnvLessBridgeEnabled, isCseShimEnabled, checkBridgeMinVersion, getCcrAutoConnectDefault, isCcrMirrorEnabled

## src/bridge/bridgeMain.ts

- lines: 3000
- imports: 30
- exports: 10
- importance: 115
- tags: auth, permissions, bridge, remote, tools, state-memory, cost-budget
- exportedSymbols: runBridgeLoop, isConnectionError, isServerError, parseArgs, bridgeMain, runBridgeHeadless, BridgeHeadlessPermanentError, BackoffConfig, ParsedArgs, HeadlessBridgeOpts
- classes: BridgeHeadlessPermanentError
- functions: isMultiSessionSpawnEnabled, pollSleepDetectionThresholdMs, spawnScriptArgs, safeSpawn, runBridgeLoop, heartbeatActiveWorkItems, trackCleanup, updateStatusDisplay, startStatusUpdates, stopStatusUpdates, onSessionDone, isConnectionError, isServerError, addJitter, formatDelay, stopWorkWithRetry, onSessionTimeout, parseSpawnValue, parseCapacityValue, parseArgs, makeError, printHelp, deriveSessionTitle, fetchSessionTitle, bridgeMain, runBridgeHeadless, createHeadlessBridgeLogger

## src/bridge/bridgeMessaging.ts

- lines: 462
- imports: 14
- exports: 10
- importance: 100
- tags: auth, permissions, bridge, remote, query-loop, tools, state-memory
- exportedSymbols: isSDKMessage, isSDKControlResponse, isSDKControlRequest, isEligibleBridgeMessage, extractTitleText, handleIngressMessage, handleServerControlRequest, makeResultMessage, BoundedUUIDSet, ServerControlRequestHandlers
- classes: BoundedUUIDSet
- functions: isSDKMessage, isSDKControlResponse, isSDKControlRequest, isEligibleBridgeMessage, extractTitleText, handleIngressMessage, handleServerControlRequest, makeResultMessage

## src/bridge/bridgePermissionCallbacks.ts

- lines: 44
- imports: 1
- exports: 0
- importance: 46
- tags: permissions, bridge, tools
- functions: isBridgePermissionResponse

## src/bridge/bridgePointer.ts

- lines: 211
- imports: 9
- exports: 7
- importance: 60
- tags: bridge, tools, state-memory
- exportedSymbols: getBridgePointerPath, writeBridgePointer, readBridgePointer, readBridgePointerAcrossWorktrees, clearBridgePointer, BRIDGE_POINTER_TTL_MS, BridgePointer
- functions: getBridgePointerPath, writeBridgePointer, readBridgePointer, readBridgePointerAcrossWorktrees, clearBridgePointer, safeJsonParse

## src/bridge/bridgeStatusUtil.ts

- lines: 164
- imports: 4
- exports: 15
- importance: 59
- tags: bridge, tools, state-memory
- exportedSymbols: timestamp, abbreviateActivity, buildBridgeConnectUrl, buildBridgeSessionUrl, computeGlimmerIndex, computeShimmerSegments, getBridgeStatus, buildIdleFooterText, buildActiveFooterText, wrapWithOsc8Link, TOOL_DISPLAY_EXPIRY_MS, SHIMMER_INTERVAL_MS, FAILED_FOOTER_TEXT, StatusState, BridgeStatusInfo
- functions: timestamp, abbreviateActivity, buildBridgeConnectUrl, buildBridgeSessionUrl, computeGlimmerIndex, computeShimmerSegments, getBridgeStatus, buildIdleFooterText, buildActiveFooterText, wrapWithOsc8Link

## src/bridge/bridgeUI.ts

- lines: 531
- imports: 7
- exports: 1
- importance: 50
- tags: bridge, tools, state-memory
- exportedSymbols: createBridgeLogger
- functions: generateQr, createBridgeLogger, countVisualLines, writeStatus, clearStatusLines, printLog, regenerateQr, renderConnectingLine, startConnecting, stopConnecting, renderStatusLine

## src/bridge/capacityWake.ts

- lines: 57
- imports: 0
- exports: 3
- importance: 41
- tags: bridge, state-memory
- exportedSymbols: createCapacityWake, CapacitySignal, CapacityWake
- functions: that, createCapacityWake, wake, signal

## src/bridge/codeSessionApi.ts

- lines: 169
- imports: 5
- exports: 3
- importance: 60
- tags: auth, bridge, state-memory
- exportedSymbols: createCodeSession, fetchRemoteCredentials, RemoteCredentials
- functions: oauthHeaders, createCodeSession, fetchRemoteCredentials

## src/bridge/createSession.ts

- lines: 385
- imports: 5
- exports: 4
- importance: 74
- tags: auth, permissions, bridge, state-memory
- exportedSymbols: createBridgeSession, getBridgeSession, archiveBridgeSession, updateBridgeSessionTitle
- functions: createBridgeSession, getBridgeSession, has, archiveBridgeSession, updateBridgeSessionTitle

## src/bridge/debugUtils.ts

- lines: 142
- imports: 4
- exports: 7
- importance: 66
- tags: auth, bridge, state-memory
- exportedSymbols: redactSecrets, debugTruncate, debugBody, describeAxiosError, extractHttpStatus, extractErrorDetail, logBridgeSkip
- functions: redactSecrets, debugTruncate, debugBody, describeAxiosError, extractHttpStatus, extractErrorDetail, logBridgeSkip

## src/bridge/envLessBridgeConfig.ts

- lines: 166
- imports: 5
- exports: 5
- importance: 64
- tags: auth, bridge, state-memory, cost-budget
- exportedSymbols: getEnvLessBridgeConfig, checkEnvLessBridgeMinVersion, shouldShowAppUpgradeMessage, DEFAULT_ENV_LESS_BRIDGE_CONFIG, EnvLessBridgeConfig
- functions: getEnvLessBridgeConfig, checkEnvLessBridgeMinVersion, shouldShowAppUpgradeMessage

## src/bridge/flushGate.ts

- lines: 72
- imports: 0
- exports: 1
- importance: 37
- tags: bridge, state-memory
- exportedSymbols: FlushGate
- classes: FlushGate

## src/bridge/inboundAttachments.ts

- lines: 176
- imports: 11
- exports: 5
- importance: 69
- tags: auth, bridge, tools, state-memory
- exportedSymbols: extractInboundAttachments, resolveInboundAttachments, prependPathRefs, resolveAndPrepend, InboundAttachment
- functions: debug, extractInboundAttachments, sanitizeFileName, uploadsDir, resolveOne, resolveInboundAttachments, prependPathRefs, resolveAndPrepend

## src/bridge/inboundMessages.ts

- lines: 81
- imports: 4
- exports: 2
- importance: 44
- tags: bridge, state-memory
- exportedSymbols: extractInboundMessageFields, normalizeImageBlocks
- functions: extractInboundMessageFields, normalizeImageBlocks, isMalformedBase64Image

## src/bridge/initReplBridge.ts

- lines: 570
- imports: 31
- exports: 2
- importance: 78
- tags: auth, permissions, bridge, tools, commands, state-memory, cost-budget
- exportedSymbols: initReplBridge, InitBridgeOptions
- functions: initReplBridge, deriveTitle

## src/bridge/jwtUtils.ts

- lines: 257
- imports: 5
- exports: 3
- importance: 61
- tags: auth, bridge, remote, state-memory
- exportedSymbols: decodeJwtPayload, decodeJwtExpiry, createTokenRefreshScheduler
- functions: formatDuration, decodeJwtPayload, decodeJwtExpiry, createTokenRefreshScheduler, nextGeneration, schedule, scheduleFromExpiresIn, doRefresh, cancel, cancelAll

## src/bridge/pollConfig.ts

- lines: 111
- imports: 4
- exports: 1
- importance: 42
- tags: bridge, state-memory
- exportedSymbols: getPollIntervalConfig
- functions: getPollIntervalConfig

## src/bridge/pollConfigDefaults.ts

- lines: 83
- imports: 0
- exports: 2
- importance: 52
- tags: auth, bridge, state-memory
- exportedSymbols: DEFAULT_POLL_CONFIG, PollIntervalConfig

## src/bridge/remoteBridgeCore.ts

- lines: 1009
- imports: 25
- exports: 3
- importance: 85
- tags: auth, permissions, bridge, remote, mcp, tools, state-memory, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: initEnvLessBridgeCore, fetchRemoteCredentials, EnvLessBridgeParams
- functions: oauthHeaders, initEnvLessBridgeCore, onConnectTimeout, wireTransportCallbacks, doesn, rebuildTransport, recoverFromAuthFailure, drainFlushGate, flushHistory, teardown, withRetry, fetchRemoteCredentials, archiveSession

## src/bridge/replBridge.ts

- lines: 2407
- imports: 28
- exports: 5
- importance: 107
- tags: auth, permissions, bridge, remote, tools, commands, state-memory, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: initBridgeCore, ReplBridgeHandle, BridgeState, BridgeCoreParams, BridgeCoreHandle
- functions: initBridgeCore, tryReconnectInPlace, reconnectEnvironmentWithSession, doReconnect, getOAuthToken, drainFlushGate, triggerTeardown, handleTransportPermanentClose, startWorkPollLoop

## src/bridge/replBridgeHandle.ts

- lines: 37
- imports: 3
- exports: 3
- importance: 56
- tags: auth, bridge, tools, commands, state-memory
- exportedSymbols: setReplBridgeHandle, getReplBridgeHandle, getSelfBridgeCompatId
- functions: setReplBridgeHandle, getReplBridgeHandle, getSelfBridgeCompatId

## src/bridge/replBridgeTransport.ts

- lines: 371
- imports: 9
- exports: 3
- importance: 76
- tags: auth, permissions, bridge, remote, state-memory, cost-budget
- exportedSymbols: createV1ReplTransport, createV2ReplTransport, ReplBridgeTransport
- functions: createV1ReplTransport, createV2ReplTransport

## src/bridge/sessionIdCompat.ts

- lines: 58
- imports: 0
- exports: 3
- importance: 41
- tags: bridge, state-memory
- exportedSymbols: setCseShimGate, toCompatSessionId, toInfraSessionId
- functions: setCseShimGate, toCompatSessionId, toInfraSessionId

## src/bridge/sessionRunner.ts

- lines: 551
- imports: 8
- exports: 3
- importance: 87
- tags: auth, permissions, bridge, query-loop, tools, state-memory
- exportedSymbols: safeFilenameId, createSessionSpawner, PermissionRequest
- functions: safeFilenameId, toolSummary, extractActivities, extractUserMessageText, inputPreview, createSessionSpawner

## src/bridge/trustedDevice.ts

- lines: 211
- imports: 10
- exports: 4
- importance: 77
- tags: auth, permissions, bridge, state-memory
- exportedSymbols: getTrustedDeviceToken, clearTrustedDeviceTokenCache, clearTrustedDeviceToken, enrollTrustedDevice
- functions: isGateEnabled, getTrustedDeviceToken, clearTrustedDeviceTokenCache, clearTrustedDeviceToken, enrollTrustedDevice

## src/bridge/types.ts

- lines: 263
- imports: 0
- exports: 19
- importance: 78
- tags: auth, permissions, bridge, remote, mcp, tools, state-memory
- exportedSymbols: DEFAULT_SESSION_TIMEOUT_MS, BRIDGE_LOGIN_INSTRUCTION, BRIDGE_LOGIN_ERROR, REMOTE_CONTROL_DISCONNECTED_MSG, WorkData, WorkResponse, WorkSecret, SessionDoneStatus, SessionActivityType, SessionActivity, SpawnMode, BridgeWorkerType, BridgeConfig, PermissionResponseEvent, BridgeApiClient, SessionHandle, SessionSpawnOpts, SessionSpawner, BridgeLogger

## src/bridge/workSecret.ts

- lines: 128
- imports: 3
- exports: 5
- importance: 61
- tags: auth, bridge, remote, state-memory
- exportedSymbols: decodeWorkSecret, buildSdkUrl, sameSessionId, buildCCRv2SdkUrl, registerWorker
- functions: decodeWorkSecret, buildSdkUrl, sameSessionId, buildCCRv2SdkUrl, registerWorker

## src/buddy/companion.ts

- lines: 134
- imports: 2
- exports: 5
- importance: 25
- tags: auth
- exportedSymbols: roll, rollWithSeed, companionUserId, getCompanion, Roll
- functions: mulberry32, hashString, pick, rollRarity, rollStats, rollFrom, roll, rollWithSeed, companionUserId, getCompanion

## src/buddy/CompanionSprite.tsx

- lines: 371
- imports: 15
- exports: 4
- importance: 22
- tags: (none)
- exportedSymbols: companionReservedColumns, CompanionSprite, CompanionFloatingBubble, MIN_COLS_FOR_FULL_SPRITE
- functions: wrap, SpeechBubble, spriteColWidth, companionReservedColumns, CompanionSprite, CompanionFloatingBubble, _temp3, _temp2, _temp

## src/buddy/prompt.ts

- lines: 37
- imports: 5
- exports: 2
- importance: 9
- tags: (none)
- exportedSymbols: companionIntroText, getCompanionIntroAttachment
- functions: companionIntroText, getCompanionIntroAttachment

## src/buddy/sprites.ts

- lines: 515
- imports: 2
- exports: 3
- importance: 14
- tags: (none)
- exportedSymbols: renderSprite, spriteFrameCount, renderFace
- functions: renderSprite, spriteFrameCount, renderFace

## src/buddy/types.ts

- lines: 149
- imports: 0
- exports: 35
- importance: 29
- tags: permissions
- exportedSymbols: RARITIES, duck, goose, blob, cat, dragon, octopus, owl, penguin, turtle, snail, ghost, axolotl, capybara, cactus, robot, rabbit, mushroom, chonk, SPECIES, EYES, HATS, STAT_NAMES, RARITY_WEIGHTS, RARITY_STARS, RARITY_COLORS, Rarity, Species, Eye, Hat, StatName, CompanionBones, CompanionSoul, Companion, StoredCompanion

## src/buddy/useBuddyNotification.tsx

- lines: 98
- imports: 7
- exports: 4
- importance: 16
- tags: (none)
- exportedSymbols: isBuddyTeaserWindow, isBuddyLive, useBuddyNotification, findBuddyTriggerPositions
- functions: isBuddyTeaserWindow, isBuddyLive, RainbowText, _temp, useBuddyNotification, findBuddyTriggerPositions

## src/cli/exit.ts

- lines: 32
- imports: 0
- exports: 2
- importance: 4
- tags: mcp
- topComment: `return undefined as never` (not a post-exit throw) — tests spy on
- exportedSymbols: cliError, cliOk
- functions: cliError, cliOk

## src/cli/handlers/agents.ts

- lines: 71
- imports: 3
- exports: 1
- importance: 5
- tags: tools
- exportedSymbols: agentsHandler
- functions: formatAgent, agentsHandler

## src/cli/handlers/auth.ts

- lines: 331
- imports: 18
- exports: 4
- importance: 34
- tags: auth, mcp, state-memory
- exportedSymbols: installOAuthTokens, authLogin, authStatus, authLogout
- functions: installOAuthTokens, authLogin, authStatus, authLogout

## src/cli/handlers/autoMode.ts

- lines: 171
- imports: 6
- exports: 3
- importance: 36
- tags: auth, permissions, tools
- exportedSymbols: autoModeDefaultsHandler, autoModeConfigHandler, autoModeCritiqueHandler
- functions: writeRules, autoModeDefaultsHandler, autoModeConfigHandler, autoModeCritiqueHandler, formatRulesForCritique

## src/cli/handlers/mcp.tsx

- lines: 362
- imports: 20
- exports: 7
- importance: 40
- tags: auth, mcp
- exportedSymbols: mcpServeHandler, mcpRemoveHandler, mcpListHandler, mcpGetHandler, mcpAddJsonHandler, mcpAddFromDesktopHandler, mcpResetChoicesHandler
- functions: checkMcpServerHealth, mcpServeHandler, mcpRemoveHandler, mcpListHandler, mcpGetHandler, mcpAddJsonHandler, mcpAddFromDesktopHandler, mcpResetChoicesHandler

## src/cli/handlers/plugins.ts

- lines: 879
- imports: 22
- exports: 12
- importance: 38
- tags: mcp, state-memory
- exportedSymbols: handleMarketplaceError, pluginValidateHandler, pluginListHandler, marketplaceAddHandler, marketplaceListHandler, marketplaceRemoveHandler, marketplaceUpdateHandler, pluginInstallHandler, pluginUninstallHandler, pluginEnableHandler, pluginDisableHandler, pluginUpdateHandler
- functions: to, handleMarketplaceError, printValidationResult, pluginValidateHandler, pluginListHandler, marketplaceAddHandler, marketplaceListHandler, marketplaceRemoveHandler, marketplaceUpdateHandler, pluginInstallHandler, pluginUninstallHandler, pluginEnableHandler, pluginDisableHandler, pluginUpdateHandler

## src/cli/handlers/util.tsx

- lines: 110
- imports: 13
- exports: 3
- importance: 29
- tags: auth, mcp
- exportedSymbols: setupTokenHandler, doctorHandler, installHandler
- functions: setupTokenHandler, DoctorWithPlugins, doctorHandler, installHandler

## src/cli/ndjsonSafeStringify.ts

- lines: 33
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: ndjsonSafeStringify
- functions: escapeJsLineTerminators, ndjsonSafeStringify

## src/cli/print.ts

- lines: 5595
- imports: 148
- exports: 12
- importance: 90
- tags: auth, permissions, bridge, remote, mcp, query-loop, tools, commands, state-memory, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: joinPromptValues, canBatchWith, runHeadless, createCanUseToolWithPermissionPrompt, getCanUseToolFn, removeInterruptedMessage, handleOrphanedPermissionResponse, handleMcpSetServers, reconcileMcpServers, DynamicMcpState, SdkMcpState, McpSetServersResult
- classes: sdkMcpConfigs
- functions: trackReceivedMessageUuid, toBlocks, joinPromptValues, canBatchWith, runHeadless, runHeadlessStreaming, injectModelSwitchBreadcrumbs, registerElicitationHandlers, updateSdkMcp, forwardMessagesToBridge, required, applyMcpServerChanges, buildMcpServerStatuses, required, installPluginsAndApplyMcpInBackground, refreshPluginState, applyPluginMcpDiff, for, converts, createCanUseToolWithPermissionPrompt, getCanUseToolFn, handleInitializeRequest, handleRewindFiles, handleSetPermissionMode, handleChannelEnable, reregisterChannelHandlerAfterReconnect, emitLoadError, removeInterruptedMessage, loadInitialMessages, getStructuredIO, handleOrphanedPermissionResponse, toScopedConfig, handleMcpSetServers, reconcileMcpServers

## src/cli/remoteIO.ts

- lines: 256
- imports: 23
- exports: 1
- importance: 37
- tags: auth, permissions, bridge, remote, state-memory
- exportedSymbols: RemoteIO
- classes: RemoteIO

## src/cli/structuredIO.ts

- lines: 860
- imports: 27
- exports: 2
- importance: 56
- tags: auth, permissions, bridge, remote, mcp, query-loop, tools, state-memory
- exportedSymbols: StructuredIO, SANDBOX_NETWORK_ACCESS_TOOL_NAME
- classes: StructuredIO
- functions: serializeDecisionReason, buildRequiresActionDetails, exitWithMessage, executePermissionRequestHooksForSDK

## src/cli/transports/ccrClient.ts

- lines: 999
- imports: 15
- exports: 8
- importance: 60
- tags: auth, bridge, remote, query-loop, tools, state-memory
- exportedSymbols: createStreamAccumulator, accumulateStreamEvents, clearStreamAccumulatorForMessage, CCRInitError, CCRClient, CCRInitFailReason, StreamAccumulatorState, InternalEvent
- classes: CCRInitError, CCRClient
- functions: alwaysValidStatus, createStreamAccumulator, scopeKey, accumulateStreamEvents, clearStreamAccumulatorForMessage

## src/cli/transports/HybridTransport.ts

- lines: 283
- imports: 7
- exports: 1
- importance: 24
- tags: auth, bridge, remote, state-memory, cost-budget
- exportedSymbols: HybridTransport
- classes: HybridTransport
- functions: convertWsUrlToPostUrl

## src/cli/transports/SerialBatchEventUploader.ts

- lines: 276
- imports: 1
- exports: 2
- importance: 8
- tags: state-memory, cost-budget
- exportedSymbols: RetryableError, SerialBatchEventUploader
- classes: RetryableError, SerialBatchEventUploader

## src/cli/transports/SSETransport.ts

- lines: 712
- imports: 10
- exports: 3
- importance: 36
- tags: auth, bridge, remote, state-memory, cost-budget
- exportedSymbols: parseSSEFrames, SSETransport, StreamClientEvent
- classes: SSETransport
- functions: alwaysValidStatus, parseSSEFrames, convertSSEUrlToPostUrl

## src/cli/transports/transportUtils.ts

- lines: 46
- imports: 6
- exports: 1
- importance: 8
- tags: remote, state-memory
- exportedSymbols: getTransportForUrl
- functions: to, getTransportForUrl

## src/cli/transports/WebSocketTransport.ts

- lines: 801
- imports: 12
- exports: 2
- importance: 36
- tags: auth, bridge, remote, mcp, tools, state-memory, cost-budget
- exportedSymbols: WebSocketTransport, WebSocketTransportOptions
- classes: WebSocketTransport

## src/cli/transports/WorkerStateUploader.ts

- lines: 132
- imports: 1
- exports: 1
- importance: 4
- tags: state-memory
- exportedSymbols: WorkerStateUploader
- classes: WorkerStateUploader
- functions: coalescePatches

## src/cli/update.ts

- lines: 423
- imports: 14
- exports: 1
- importance: 27
- tags: permissions
- exportedSymbols: update
- functions: update

## src/commands.ts

- lines: 755
- imports: 105
- exports: 17
- importance: 119
- tags: auth, permissions, bridge, mcp, tools, commands, state-memory
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: meetsAvailabilityRequirement, getCommands, clearCommandMemoizationCaches, clearCommandsCache, getMcpSkillCommands, isBridgeSafeCommand, filterCommandsForRemoteMode, findCommand, hasCommand, getCommand, formatDescriptionWithSource, INTERNAL_ONLY_COMMANDS, builtInCommandNames, getSkillToolCommands, getSlashCommandToolSkills, REMOTE_SAFE_COMMANDS, BRIDGE_SAFE_COMMANDS
- functions: so, getSkills, meetsAvailabilityRequirement, getCommands, clearCommandMemoizationCaches, clearCommandsCache, getMcpSkillCommands, isBridgeSafeCommand, filterCommandsForRemoteMode, findCommand, hasCommand, getCommand, formatDescriptionWithSource

## src/commands/add-dir/add-dir.tsx

- lines: 126
- imports: 14
- exports: 1
- importance: 48
- tags: permissions, tools, commands, state-memory
- exportedSymbols: call
- functions: AddDirError, call

## src/commands/add-dir/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/add-dir/validation.ts

- lines: 111
- imports: 7
- exports: 3
- importance: 49
- tags: permissions, tools, commands
- exportedSymbols: validateDirectoryForWorkspace, addDirHelpMessage, AddDirectoryResult
- functions: validateDirectoryForWorkspace, addDirHelpMessage

## src/commands/advisor.ts

- lines: 110
- imports: 6
- exports: 1
- importance: 34
- tags: commands
- exportedSymbols: default

## src/commands/agents/agents.tsx

- lines: 12
- imports: 5
- exports: 1
- importance: 42
- tags: permissions, tools, commands
- exportedSymbols: call
- functions: call

## src/commands/agents/index.ts

- lines: 11
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/ant-trace/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/autofix-pr/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/backfill-sessions/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/branch/branch.ts

- lines: 297
- imports: 11
- exports: 2
- importance: 42
- tags: tools, commands, state-memory, cost-budget
- exportedSymbols: deriveFirstPrompt, call
- functions: deriveFirstPrompt, createFork, getUniqueForkName, call

## src/commands/branch/index.ts

- lines: 15
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/break-cache/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/bridge-kick.ts

- lines: 201
- imports: 3
- exports: 1
- importance: 42
- tags: permissions, bridge, commands, state-memory
- exportedSymbols: default

## src/commands/bridge/bridge.tsx

- lines: 509
- imports: 20
- exports: 1
- importance: 55
- tags: auth, bridge, remote, tools, commands, state-memory
- exportedSymbols: call
- functions: BridgeToggle, _temp3, _temp2, _temp, BridgeDisconnectDialog, handleDisconnect, handleShowQR, handleContinue, _temp10, _temp1, _temp0, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, checkBridgePrerequisites, call

## src/commands/bridge/index.ts

- lines: 27
- imports: 3
- exports: 1
- importance: 30
- tags: bridge, commands, state-memory
- exportedSymbols: default
- functions: isEnabled

## src/commands/brief.ts

- lines: 131
- imports: 10
- exports: 1
- importance: 38
- tags: bridge, tools, commands, state-memory
- exportedSymbols: default
- functions: getBriefConfig

## src/commands/btw/btw.tsx

- lines: 243
- imports: 25
- exports: 1
- importance: 40
- tags: mcp, tools, commands
- exportedSymbols: call
- functions: BtwSideQuestion, handleKeyDown, fetchResponse, _temp, stripInProgressAssistantMessage, buildCacheSafeParams, call

## src/commands/btw/index.ts

- lines: 14
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/bughunter/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/chrome/chrome.tsx

- lines: 285
- imports: 13
- exports: 1
- importance: 50
- tags: permissions, mcp, commands
- exportedSymbols: call
- functions: ClaudeInChromeMenu, openUrl, handleAction, _temp5, _temp4, _temp3, _temp2, _temp

## src/commands/chrome/index.ts

- lines: 14
- imports: 2
- exports: 1
- importance: 29
- tags: commands, state-memory
- exportedSymbols: default

## src/commands/clear/caches.ts

- lines: 145
- imports: 21
- exports: 1
- importance: 60
- tags: auth, permissions, mcp, tools, commands, state-memory
- exportedSymbols: clearSessionCaches
- functions: clearSessionCaches

## src/commands/clear/clear.ts

- lines: 8
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: call

## src/commands/clear/conversation.ts

- lines: 252
- imports: 21
- exports: 1
- importance: 50
- tags: permissions, mcp, tools, commands, state-memory
- exportedSymbols: clearConversation
- functions: clearConversation

## src/commands/clear/index.ts

- lines: 20
- imports: 1
- exports: 1
- importance: 28
- tags: commands, state-memory
- exportedSymbols: default

## src/commands/color/color.ts

- lines: 94
- imports: 7
- exports: 1
- importance: 35
- tags: tools, commands, state-memory
- exportedSymbols: call
- functions: call

## src/commands/color/index.ts

- lines: 17
- imports: 1
- exports: 1
- importance: 28
- tags: commands, state-memory
- exportedSymbols: default

## src/commands/commit-push-pr.ts

- lines: 159
- imports: 5
- exports: 1
- importance: 43
- tags: permissions, mcp, tools, commands
- exportedSymbols: default
- functions: getPromptContent

## src/commands/commit.ts

- lines: 93
- imports: 4
- exports: 1
- importance: 42
- tags: permissions, tools, commands
- exportedSymbols: default
- functions: getPromptContent

## src/commands/compact/compact.ts

- lines: 288
- imports: 22
- exports: 1
- importance: 62
- tags: auth, permissions, mcp, tools, commands, state-memory
- exportedSymbols: call
- functions: compactViaReactive, buildDisplayText, getCacheSharingParams

## src/commands/compact/index.ts

- lines: 16
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/config/config.tsx

- lines: 7
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: call

## src/commands/config/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/context/context-noninteractive.ts

- lines: 326
- imports: 11
- exports: 2
- importance: 65
- tags: auth, permissions, mcp, tools, commands
- exportedSymbols: collectContextData, call
- functions: collectContextData, call, formatContextAsMarkdownTable

## src/commands/context/context.tsx

- lines: 64
- imports: 10
- exports: 1
- importance: 59
- tags: auth, permissions, tools, commands
- exportedSymbols: call
- functions: toApiView, call

## src/commands/context/index.ts

- lines: 25
- imports: 2
- exports: 2
- importance: 31
- tags: commands, state-memory
- exportedSymbols: context, contextNonInteractive

## src/commands/copy/copy.tsx

- lines: 371
- imports: 22
- exports: 3
- importance: 57
- tags: auth, mcp, tools, commands
- exportedSymbols: collectRecentAssistantTexts, fileExtension, call
- functions: extractCodeBlocks, collectRecentAssistantTexts, fileExtension, writeToFile, copyOrWriteToFile, truncateLine, CopyPicker, getSelectionContent, handleSelect, handleWrite, handleKeyDown, _temp2, _temp

## src/commands/copy/index.ts

- lines: 16
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/cost/cost.ts

- lines: 25
- imports: 4
- exports: 1
- importance: 31
- tags: commands, cost-budget
- exportedSymbols: call

## src/commands/cost/index.ts

- lines: 24
- imports: 2
- exports: 1
- importance: 29
- tags: commands, state-memory, cost-budget
- exportedSymbols: default

## src/commands/createMovedToPluginCommand.ts

- lines: 66
- imports: 3
- exports: 1
- importance: 30
- tags: tools, commands
- exportedSymbols: createMovedToPluginCommand
- functions: createMovedToPluginCommand

## src/commands/ctx_viz/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/debug-tool-call/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/desktop/desktop.tsx

- lines: 9
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/desktop/index.ts

- lines: 27
- imports: 1
- exports: 1
- importance: 28
- tags: commands, state-memory
- exportedSymbols: default
- functions: isSupportedPlatform

## src/commands/diff/diff.tsx

- lines: 9
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: call

## src/commands/diff/index.ts

- lines: 9
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/doctor/doctor.tsx

- lines: 7
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: call

## src/commands/doctor/index.ts

- lines: 13
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/effort/effort.tsx

- lines: 183
- imports: 8
- exports: 3
- importance: 41
- tags: mcp, commands, state-memory
- exportedSymbols: showCurrentEffort, executeEffort, call
- functions: setEffortValue, showCurrentEffort, unsetEffortLevel, executeEffort, ShowCurrentEffort, _temp, ApplyEffortAndClose, call

## src/commands/effort/index.ts

- lines: 14
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/env/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/exit/exit.tsx

- lines: 33
- imports: 9
- exports: 1
- importance: 36
- tags: commands, state-memory
- exportedSymbols: call
- functions: getRandomGoodbyeMessage, call

## src/commands/exit/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/export/export.tsx

- lines: 91
- imports: 9
- exports: 3
- importance: 41
- tags: mcp, tools, commands
- exportedSymbols: extractFirstPrompt, sanitizeFilename, call
- functions: formatTimestamp, extractFirstPrompt, sanitizeFilename, exportWithReactRenderer, call

## src/commands/export/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/extra-usage/extra-usage-core.ts

- lines: 119
- imports: 8
- exports: 1
- importance: 36
- tags: commands
- exportedSymbols: runExtraUsage
- functions: runExtraUsage

## src/commands/extra-usage/extra-usage-noninteractive.ts

- lines: 17
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/extra-usage/extra-usage.tsx

- lines: 17
- imports: 5
- exports: 1
- importance: 32
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/extra-usage/index.ts

- lines: 32
- imports: 4
- exports: 2
- importance: 33
- tags: commands, state-memory
- exportedSymbols: extraUsage, extraUsageNonInteractive
- functions: isExtraUsageAllowed

## src/commands/fast/fast.tsx

- lines: 269
- imports: 15
- exports: 2
- importance: 42
- tags: commands, state-memory, cost-budget
- exportedSymbols: FastModePicker, call
- functions: applyFastMode, FastModePicker, handleConfirm, handleCancel, handleToggle, _temp4, _temp3, _temp2, _temp, handleFastModeShortcut, call

## src/commands/fast/index.ts

- lines: 27
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: default

## src/commands/feedback/feedback.tsx

- lines: 25
- imports: 5
- exports: 2
- importance: 34
- tags: commands
- exportedSymbols: renderFeedbackComponent, call
- functions: to, renderFeedbackComponent, call

## src/commands/feedback/index.ts

- lines: 27
- imports: 4
- exports: 1
- importance: 31
- tags: commands
- exportedSymbols: default

## src/commands/files/files.ts

- lines: 20
- imports: 5
- exports: 1
- importance: 32
- tags: tools, commands
- exportedSymbols: call
- functions: call

## src/commands/files/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/good-claude/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/heapdump/heapdump.ts

- lines: 18
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/heapdump/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/help/help.tsx

- lines: 11
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: call

## src/commands/help/index.ts

- lines: 11
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/hooks/hooks.tsx

- lines: 13
- imports: 5
- exports: 1
- importance: 52
- tags: permissions, tools, commands, hooks-security
- exportedSymbols: call

## src/commands/hooks/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 38
- tags: tools, commands, hooks-security
- exportedSymbols: default

## src/commands/ide/ide.tsx

- lines: 646
- imports: 17
- exports: 2
- importance: 59
- tags: auth, mcp, tools, commands, state-memory
- exportedSymbols: call, formatWorkspaceFolders
- functions: IDEScreen, _temp3, _temp2, _temp, findCurrentIDE, IDEOpenSelection, handleCancel, _temp4, RunningIDESelector, handleCancel, _temp5, InstallOnMount, call, IDECommandFlow, formatWorkspaceFolders

## src/commands/ide/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/init-verifiers.ts

- lines: 263
- imports: 1
- exports: 1
- importance: 43
- tags: auth, mcp, tools, commands, state-memory
- exportedSymbols: default

## src/commands/init.ts

- lines: 257
- imports: 4
- exports: 1
- importance: 46
- tags: auth, mcp, tools, commands, state-memory
- exportedSymbols: default

## src/commands/insights.ts

- lines: 3201
- imports: 21
- exports: 6
- importance: 99
- tags: auth, mcp, query-loop, tools, commands, state-memory
- exportedSymbols: deduplicateSessionBranches, detectMultiClauding, buildExportData, generateUsageReport, InsightsExport, default
- functions: getAnalysisModel, getInsightsModel, getDataDir, getFacetsDir, getSessionMetaDir, getLanguageFromPath, extractToolStats, hasValidDates, logToSessionMeta, deduplicateSessionBranches, formatTranscriptForFacets, summarizeTranscriptChunk, formatTranscriptWithSummarization, loadCachedFacets, saveFacets, loadCachedSessionMeta, saveSessionMeta, extractFacetsFromAPI, detectMultiClauding, aggregateData, generateSectionInsight, generateParallelInsights, escapeHtmlWithBold, generateBarChart, generateResponseTimeHistogram, generateTimeOfDayChart, getHourCountsJson, generateHtmlReport, toggleCollapsible, copyText, copyCmdItem, copyAllCheckedClaudeMd, updateHourHistogram, buildExportData, scanAllSessions, generateUsageReport, safeEntries, safeKeys, isValidSessionFacets

## src/commands/install-github-app/ApiKeyStep.tsx

- lines: 231
- imports: 6
- exports: 1
- importance: 47
- tags: auth, commands
- exportedSymbols: ApiKeyStep
- functions: ApiKeyStep

## src/commands/install-github-app/CheckExistingSecretStep.tsx

- lines: 190
- imports: 6
- exports: 1
- importance: 35
- tags: mcp, commands
- exportedSymbols: CheckExistingSecretStep
- functions: CheckExistingSecretStep

## src/commands/install-github-app/CheckGitHubStep.tsx

- lines: 15
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: CheckGitHubStep
- functions: CheckGitHubStep

## src/commands/install-github-app/ChooseRepoStep.tsx

- lines: 211
- imports: 6
- exports: 1
- importance: 45
- tags: permissions, commands
- exportedSymbols: ChooseRepoStep
- functions: ChooseRepoStep

## src/commands/install-github-app/CreatingStep.tsx

- lines: 65
- imports: 4
- exports: 1
- importance: 31
- tags: commands
- exportedSymbols: CreatingStep
- functions: CreatingStep

## src/commands/install-github-app/ErrorStep.tsx

- lines: 85
- imports: 4
- exports: 1
- importance: 32
- tags: commands
- exportedSymbols: ErrorStep
- functions: ErrorStep, _temp

## src/commands/install-github-app/ExistingWorkflowStep.tsx

- lines: 103
- imports: 4
- exports: 1
- importance: 32
- tags: mcp, commands
- exportedSymbols: ExistingWorkflowStep
- functions: ExistingWorkflowStep

## src/commands/install-github-app/index.ts

- lines: 14
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/install-github-app/install-github-app.tsx

- lines: 587
- imports: 27
- exports: 1
- importance: 66
- tags: auth, permissions, mcp, commands
- exportedSymbols: call
- functions: InstallGitHubApp, openGitHubAppInstallation, checkRepositoryPermissions, checkExistingWorkflowFile, checkExistingSecret, handleDismissKeyDown, call

## src/commands/install-github-app/InstallAppStep.tsx

- lines: 94
- imports: 6
- exports: 1
- importance: 44
- tags: permissions, commands
- exportedSymbols: InstallAppStep
- functions: InstallAppStep

## src/commands/install-github-app/OAuthFlowStep.tsx

- lines: 276
- imports: 12
- exports: 1
- importance: 62
- tags: auth, permissions, commands, state-memory
- exportedSymbols: OAuthFlowStep
- functions: OAuthFlowStep, handleKeyDown, handleSubmitCode, to, renderStatusMessage

## src/commands/install-github-app/setupGitHubActions.ts

- lines: 326
- imports: 7
- exports: 1
- importance: 60
- tags: auth, permissions, commands
- exportedSymbols: setupGitHubActions
- functions: createWorkflowFile, setupGitHubActions

## src/commands/install-github-app/SuccessStep.tsx

- lines: 96
- imports: 3
- exports: 1
- importance: 31
- tags: commands
- exportedSymbols: SuccessStep
- functions: SuccessStep

## src/commands/install-github-app/WarningsStep.tsx

- lines: 73
- imports: 7
- exports: 1
- importance: 44
- tags: permissions, commands
- exportedSymbols: WarningsStep
- functions: WarningsStep, _temp2, _temp

## src/commands/install-slack-app/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/install-slack-app/install-slack-app.ts

- lines: 31
- imports: 4
- exports: 1
- importance: 31
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/install.tsx

- lines: 300
- imports: 13
- exports: 1
- importance: 40
- tags: mcp, commands
- exportedSymbols: install
- functions: getInstallationPath, SetupNotes, _temp, Install, run

## src/commands/issue/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/keybindings/index.ts

- lines: 14
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/keybindings/keybindings.ts

- lines: 54
- imports: 6
- exports: 1
- importance: 33
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/login/index.ts

- lines: 15
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: default

## src/commands/login/login.tsx

- lines: 104
- imports: 18
- exports: 2
- importance: 62
- tags: auth, permissions, bridge, mcp, tools, commands, state-memory
- exportedSymbols: call, Login
- functions: call, Login, _temp

## src/commands/logout/index.ts

- lines: 11
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/logout/logout.tsx

- lines: 82
- imports: 14
- exports: 3
- importance: 54
- tags: auth, bridge, tools, commands, state-memory
- exportedSymbols: performLogout, clearAuthRelatedCaches, call
- functions: performLogout, clearAuthRelatedCaches, call

## src/commands/mcp/addCommand.ts

- lines: 281
- imports: 9
- exports: 1
- importance: 51
- tags: auth, remote, mcp, commands
- exportedSymbols: registerMcpAddCommand
- functions: registerMcpAddCommand

## src/commands/mcp/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: mcp, commands
- exportedSymbols: default

## src/commands/mcp/mcp.tsx

- lines: 85
- imports: 8
- exports: 1
- importance: 36
- tags: mcp, commands
- exportedSymbols: call
- functions: MCPToggle, _temp2, _temp, call

## src/commands/mcp/xaaIdpCommand.ts

- lines: 267
- imports: 5
- exports: 1
- importance: 47
- tags: auth, mcp, commands
- exportedSymbols: registerMcpXaaIdpCommand
- functions: registerMcpXaaIdpCommand

## src/commands/memory/index.ts

- lines: 11
- imports: 1
- exports: 1
- importance: 28
- tags: commands, state-memory
- exportedSymbols: default

## src/commands/memory/memory.tsx

- lines: 90
- imports: 13
- exports: 1
- importance: 38
- tags: commands, state-memory
- exportedSymbols: call
- functions: MemoryCommand

## src/commands/mobile/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/mobile/mobile.tsx

- lines: 274
- imports: 9
- exports: 1
- importance: 39
- tags: commands
- exportedSymbols: call
- functions: MobileQRCode, generateQRCodes, handleKeyDown, _temp4, _temp3, _temp2, _temp, call

## src/commands/mock-limits/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/model/index.ts

- lines: 17
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: default

## src/commands/model/model.tsx

- lines: 297
- imports: 17
- exports: 1
- importance: 40
- tags: commands, state-memory
- exportedSymbols: call
- functions: ModelPickerWrapper, handleCancel, handleSelect, _temp4, _temp3, _temp2, _temp, SetModelAndClose, handleModelChange, setModel, isKnownAlias, isOpus1mUnavailable, isSonnet1mUnavailable, ShowModelAndClose, _temp9, _temp8, _temp7, renderModelLabel

## src/commands/oauth-refresh/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/onboarding/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/output-style/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/output-style/output-style.tsx

- lines: 7
- imports: 1
- exports: 1
- importance: 28
- tags: commands, state-memory
- exportedSymbols: call
- functions: call

## src/commands/passes/index.ts

- lines: 23
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/passes/passes.tsx

- lines: 24
- imports: 6
- exports: 1
- importance: 33
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/perf-issue/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/permissions/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 38
- tags: permissions, tools, commands
- exportedSymbols: default

## src/commands/permissions/permissions.tsx

- lines: 10
- imports: 4
- exports: 1
- importance: 41
- tags: permissions, commands
- exportedSymbols: call

## src/commands/plan/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands, state-memory
- exportedSymbols: default

## src/commands/plan/plan.tsx

- lines: 122
- imports: 13
- exports: 1
- importance: 48
- tags: permissions, tools, commands, state-memory
- exportedSymbols: call
- functions: PlanDisplay, call

## src/commands/plugin/AddMarketplace.tsx

- lines: 162
- imports: 15
- exports: 1
- importance: 39
- tags: mcp, commands
- exportedSymbols: AddMarketplace
- functions: AddMarketplace

## src/commands/plugin/BrowseMarketplace.tsx

- lines: 802
- imports: 27
- exports: 1
- importance: 47
- tags: mcp, commands
- exportedSymbols: BrowseMarketplace
- functions: BrowseMarketplace, loadMarketplaceData, loadPluginsForMarketplace, finish

## src/commands/plugin/DiscoverPlugins.tsx

- lines: 781
- imports: 31
- exports: 1
- importance: 46
- tags: mcp, commands
- exportedSymbols: DiscoverPlugins
- functions: DiscoverPlugins, loadAllPlugins, finish, DiscoverPluginsKeyHint, EmptyStateMessage

## src/commands/plugin/index.tsx

- lines: 11
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/plugin/ManageMarketplaces.tsx

- lines: 838
- imports: 23
- exports: 1
- importance: 47
- tags: commands
- exportedSymbols: ManageMarketplaces
- functions: ManageMarketplaces, loadMarketplaces, ManageMarketplacesKeyHints

## src/commands/plugin/ManagePlugins.tsx

- lines: 2215
- imports: 52
- exports: 2
- importance: 66
- tags: mcp, tools, commands, state-memory
- exportedSymbols: filterManagedDisabledPlugins, ManagePlugins
- functions: getBaseFileNames, getSkillDirNames, PluginComponentsDisplay, loadComponents, checkIfLocalPlugin, filterManagedDisabledPlugins, ManagePlugins, detectMcpb, loadInstalledPlugins, finish, handleSave, handleCancel

## src/commands/plugin/parseArgs.ts

- lines: 104
- imports: 0
- exports: 2
- importance: 30
- tags: commands
- topComment: Parse plugin subcommand arguments into structured commands
- exportedSymbols: parsePluginArgs, ParsedCommand
- functions: parsePluginArgs

## src/commands/plugin/plugin.tsx

- lines: 7
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/plugin/pluginDetailsHelpers.tsx

- lines: 117
- imports: 6
- exports: 5
- importance: 42
- tags: commands
- exportedSymbols: extractGitHubRepo, buildPluginDetailsMenuOptions, PluginSelectionKeyHint, InstallablePlugin, PluginDetailsMenuOption
- functions: extractGitHubRepo, buildPluginDetailsMenuOptions, PluginSelectionKeyHint

## src/commands/plugin/PluginErrors.tsx

- lines: 124
- imports: 1
- exports: 2
- importance: 41
- tags: permissions, mcp, commands
- exportedSymbols: formatErrorMessage, getErrorGuidance
- functions: formatErrorMessage, getErrorGuidance

## src/commands/plugin/PluginOptionsDialog.tsx

- lines: 357
- imports: 9
- exports: 2
- importance: 42
- tags: mcp, commands
- exportedSymbols: buildFinalValues, PluginOptionsDialog
- functions: buildFinalValues, PluginOptionsDialog, _temp3, _temp2, _temp

## src/commands/plugin/PluginOptionsFlow.tsx

- lines: 135
- imports: 8
- exports: 2
- importance: 38
- tags: mcp, commands
- exportedSymbols: findPluginOptionsTarget, PluginOptionsFlow
- functions: findPluginOptionsTarget, runs, PluginOptionsFlow, handleSave

## src/commands/plugin/PluginSettings.tsx

- lines: 1072
- imports: 29
- exports: 1
- importance: 50
- tags: mcp, commands
- exportedSymbols: PluginSettings
- functions: MarketplaceList, loadList, _temp, McpRedirectBanner, getExtraMarketplaceSourceInfo, buildMarketplaceAction, buildPluginAction, isTransientError, getPluginNameFromError, buildErrorRows, removeExtraMarketplace, ErrorsTabContent, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, getInitialViewState, getInitialTab, PluginSettings, _temp1, _temp0

## src/commands/plugin/PluginTrustWarning.tsx

- lines: 32
- imports: 5
- exports: 1
- importance: 32
- tags: mcp, commands
- exportedSymbols: PluginTrustWarning
- functions: PluginTrustWarning

## src/commands/plugin/UnifiedInstalledCell.tsx

- lines: 565
- imports: 6
- exports: 1
- importance: 40
- tags: mcp, commands
- exportedSymbols: UnifiedInstalledCell
- functions: UnifiedInstalledCell

## src/commands/plugin/usePagination.ts

- lines: 172
- imports: 1
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: usePagination
- functions: usePagination

## src/commands/plugin/ValidatePlugin.tsx

- lines: 98
- imports: 9
- exports: 1
- importance: 37
- tags: mcp, commands
- exportedSymbols: ValidatePlugin
- functions: ValidatePlugin, runValidation

## src/commands/pr_comments/index.ts

- lines: 51
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/privacy-settings/index.ts

- lines: 15
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/privacy-settings/privacy-settings.tsx

- lines: 58
- imports: 5
- exports: 1
- importance: 32
- tags: commands
- exportedSymbols: call
- functions: call, onDoneWithDecision, onDoneWithSettingsCheck

## src/commands/rate-limit-options/index.ts

- lines: 20
- imports: 2
- exports: 1
- importance: 29
- tags: commands, cost-budget
- exportedSymbols: default

## src/commands/rate-limit-options/rate-limit-options.tsx

- lines: 210
- imports: 16
- exports: 1
- importance: 51
- tags: auth, tools, commands
- exportedSymbols: call
- functions: RateLimitOptionsMenu, handleCancel, handleSelect, call

## src/commands/release-notes/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/release-notes/release-notes.ts

- lines: 51
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: call
- functions: formatReleaseNotes, call

## src/commands/reload-plugins/index.ts

- lines: 19
- imports: 1
- exports: 1
- importance: 28
- tags: mcp, commands, state-memory
- exportedSymbols: default

## src/commands/reload-plugins/reload-plugins.ts

- lines: 62
- imports: 8
- exports: 1
- importance: 35
- tags: mcp, commands, state-memory
- exportedSymbols: call
- functions: n

## src/commands/remote-env/index.ts

- lines: 16
- imports: 3
- exports: 1
- importance: 30
- tags: remote, commands, state-memory
- exportedSymbols: default

## src/commands/remote-env/remote-env.tsx

- lines: 7
- imports: 3
- exports: 1
- importance: 30
- tags: remote, commands
- exportedSymbols: call
- functions: call

## src/commands/remote-setup/api.ts

- lines: 183
- imports: 5
- exports: 7
- importance: 58
- tags: auth, remote, commands
- exportedSymbols: importGithubToken, createDefaultEnvironment, isSignedIn, getCodeWebUrl, RedactedGithubToken, ImportTokenResult, ImportTokenError
- classes: RedactedGithubToken
- functions: importGithubToken, hasExistingEnvironment, createDefaultEnvironment, isSignedIn, getCodeWebUrl

## src/commands/remote-setup/index.ts

- lines: 21
- imports: 3
- exports: 1
- importance: 30
- tags: remote, commands, state-memory
- exportedSymbols: default

## src/commands/remote-setup/remote-setup.tsx

- lines: 187
- imports: 12
- exports: 1
- importance: 51
- tags: auth, remote, commands
- exportedSymbols: call
- functions: checkLoginState, errorMessage, Web, call

## src/commands/rename/generateSessionName.ts

- lines: 68
- imports: 8
- exports: 1
- importance: 35
- tags: bridge, mcp, tools, commands, state-memory
- exportedSymbols: generateSessionName
- functions: generateSessionName

## src/commands/rename/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/rename/rename.ts

- lines: 88
- imports: 9
- exports: 1
- importance: 49
- tags: auth, bridge, tools, commands, state-memory
- exportedSymbols: call
- functions: call

## src/commands/reset-limits/index.js

- lines: 5
- imports: 0
- exports: 3
- importance: 31
- tags: commands
- exportedSymbols: resetLimits, resetLimitsNonInteractive, default

## src/commands/resume/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/resume/resume.tsx

- lines: 275
- imports: 22
- exports: 2
- importance: 42
- tags: mcp, commands, state-memory
- exportedSymbols: filterResumableSessions, call
- functions: resumeHelpMessage, ResumeError, ResumeCommand, init, handleSelect, handleCancel, filterResumableSessions

## src/commands/review.ts

- lines: 58
- imports: 3
- exports: 1
- importance: 40
- tags: permissions, commands
- exportedSymbols: default

## src/commands/review/reviewRemote.ts

- lines: 317
- imports: 12
- exports: 4
- importance: 46
- tags: tools, commands, state-memory
- exportedSymbols: confirmOverage, checkOverageGate, launchRemoteReview, OverageGate
- functions: confirmOverage, checkOverageGate, launchRemoteReview

## src/commands/review/ultrareviewCommand.tsx

- lines: 58
- imports: 5
- exports: 1
- importance: 32
- tags: commands, state-memory
- exportedSymbols: call
- functions: contentBlocksToString, launchAndDone

## src/commands/review/ultrareviewEnabled.ts

- lines: 15
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: isUltrareviewEnabled
- functions: isUltrareviewEnabled

## src/commands/review/UltrareviewOverageDialog.tsx

- lines: 96
- imports: 5
- exports: 1
- importance: 33
- tags: commands
- exportedSymbols: UltrareviewOverageDialog
- functions: UltrareviewOverageDialog

## src/commands/rewind/index.ts

- lines: 14
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/rewind/rewind.ts

- lines: 14
- imports: 2
- exports: 1
- importance: 29
- tags: tools, commands
- exportedSymbols: call
- functions: call

## src/commands/sandbox-toggle/index.ts

- lines: 51
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: default

## src/commands/sandbox-toggle/sandbox-toggle.tsx

- lines: 83
- imports: 9
- exports: 1
- importance: 37
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/security-review.ts

- lines: 244
- imports: 4
- exports: 1
- importance: 66
- tags: auth, permissions, tools, commands, state-memory, cost-budget, hooks-security
- exportedSymbols: default
- functions: or

## src/commands/session/index.ts

- lines: 17
- imports: 2
- exports: 1
- importance: 29
- tags: commands, state-memory
- exportedSymbols: default

## src/commands/session/session.tsx

- lines: 140
- imports: 10
- exports: 1
- importance: 38
- tags: commands, state-memory
- exportedSymbols: call
- functions: SessionInfo, generateQRCode, _temp4, _temp3, _temp2, _temp

## src/commands/share/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/skills/index.ts

- lines: 11
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/skills/skills.tsx

- lines: 8
- imports: 4
- exports: 1
- importance: 31
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/stats/index.ts

- lines: 11
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/stats/stats.tsx

- lines: 7
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: call

## src/commands/status/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: tools, commands
- exportedSymbols: default

## src/commands/status/status.tsx

- lines: 8
- imports: 4
- exports: 1
- importance: 31
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/statusline.tsx

- lines: 24
- imports: 3
- exports: 1
- importance: 30
- tags: tools, commands
- exportedSymbols: default

## src/commands/stickers/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/stickers/stickers.ts

- lines: 17
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: call
- functions: call

## src/commands/summary/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/tag/index.ts

- lines: 13
- imports: 1
- exports: 1
- importance: 28
- tags: commands, state-memory
- exportedSymbols: default

## src/commands/tag/tag.tsx

- lines: 215
- imports: 14
- exports: 1
- importance: 39
- tags: commands, state-memory
- exportedSymbols: call
- functions: ConfirmRemoveTag, ToggleTagAndClose, ShowHelp, call

## src/commands/tasks/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/tasks/tasks.tsx

- lines: 8
- imports: 4
- exports: 1
- importance: 31
- tags: tools, commands
- exportedSymbols: call
- functions: call

## src/commands/teleport/index.js

- lines: 2
- imports: 0
- exports: 1
- importance: 27
- tags: commands
- exportedSymbols: default

## src/commands/terminalSetup/index.ts

- lines: 24
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/terminalSetup/terminalSetup.tsx

- lines: 531
- imports: 22
- exports: 7
- importance: 55
- tags: mcp, tools, commands, state-memory
- exportedSymbols: getNativeCSIuTerminalDisplayName, shouldOfferTerminalSetup, setupTerminal, isShiftEnterKeyBindingInstalled, hasUsedBackslashReturn, markBackslashReturnUsed, call
- functions: isVSCodeRemoteSSH, getNativeCSIuTerminalDisplayName, formatPathLink, shouldOfferTerminalSetup, setupTerminal, isShiftEnterKeyBindingInstalled, hasUsedBackslashReturn, markBackslashReturnUsed, call, installBindingsForVSCodeTerminal, enableOptionAsMetaForProfile, disableAudioBellForProfile, enableOptionAsMetaForTerminal, installBindingsForAlacritty, installBindingsForZed

## src/commands/theme/index.ts

- lines: 11
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/theme/theme.tsx

- lines: 57
- imports: 7
- exports: 1
- importance: 44
- tags: permissions, commands
- exportedSymbols: call
- functions: ThemePickerCommand

## src/commands/thinkback-play/index.ts

- lines: 18
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/thinkback-play/thinkback-play.ts

- lines: 44
- imports: 5
- exports: 1
- importance: 32
- tags: commands
- exportedSymbols: call
- functions: getPluginId, call

## src/commands/thinkback/index.ts

- lines: 14
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/thinkback/thinkback.tsx

- lines: 554
- imports: 25
- exports: 2
- importance: 45
- tags: mcp, tools, commands
- exportedSymbols: playAnimation, call
- functions: getMarketplaceName, getMarketplaceRepo, getPluginId, getThinkbackSkillDir, playAnimation, ThinkbackInstaller, checkAndInstall, ThinkbackMenu, handleSelect, handleCancel, ThinkbackFlow, handleReady, handleAction, call

## src/commands/ultraplan.tsx

- lines: 471
- imports: 18
- exports: 5
- importance: 72
- tags: auth, permissions, bridge, mcp, commands, state-memory
- exportedSymbols: buildUltraplanPrompt, stopUltraplan, launchUltraplan, CCR_TERMS_URL, default
- functions: getUltraplanModel, buildUltraplanPrompt, startDetachedPoll, buildLaunchMessage, buildSessionReadyMessage, buildAlreadyActiveMessage, stopUltraplan, launchUltraplan, launchDetached

## src/commands/upgrade/index.ts

- lines: 17
- imports: 3
- exports: 1
- importance: 30
- tags: commands, cost-budget
- exportedSymbols: default

## src/commands/upgrade/upgrade.tsx

- lines: 38
- imports: 8
- exports: 1
- importance: 47
- tags: auth, commands
- exportedSymbols: call
- functions: call

## src/commands/usage/index.ts

- lines: 10
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/usage/usage.tsx

- lines: 7
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: call

## src/commands/version.ts

- lines: 23
- imports: 1
- exports: 1
- importance: 28
- tags: commands, state-memory
- exportedSymbols: default

## src/commands/vim/index.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 28
- tags: commands
- exportedSymbols: default

## src/commands/vim/vim.ts

- lines: 39
- imports: 3
- exports: 1
- importance: 30
- tags: commands
- exportedSymbols: call

## src/commands/voice/index.ts

- lines: 21
- imports: 2
- exports: 1
- importance: 29
- tags: commands
- exportedSymbols: default

## src/commands/voice/voice.ts

- lines: 151
- imports: 9
- exports: 1
- importance: 59
- tags: auth, permissions, tools, commands
- exportedSymbols: call

## src/components/AgentProgressLine.tsx

- lines: 136
- imports: 5
- exports: 1
- importance: 20
- tags: auth, tools
- exportedSymbols: AgentProgressLine
- functions: AgentProgressLine

## src/components/agents/AgentDetail.tsx

- lines: 220
- imports: 14
- exports: 1
- importance: 24
- tags: permissions, tools
- exportedSymbols: AgentDetail
- functions: AgentDetail, renderToolsList

## src/components/agents/AgentEditor.tsx

- lines: 178
- imports: 17
- exports: 1
- importance: 14
- tags: tools
- exportedSymbols: AgentEditor
- functions: AgentEditor

## src/components/agents/agentFileUtils.ts

- lines: 273
- imports: 11
- exports: 8
- importance: 29
- tags: tools
- exportedSymbols: formatAgentAsMarkdown, getNewAgentFilePath, getActualAgentFilePath, getNewRelativeAgentFilePath, getActualRelativeAgentFilePath, saveAgentToFile, updateAgentFile, deleteAgentFromFile
- functions: formatAgentAsMarkdown, getAgentDirectoryPath, getRelativeAgentDirectoryPath, getNewAgentFilePath, getActualAgentFilePath, getNewRelativeAgentFilePath, getActualRelativeAgentFilePath, ensureAgentDirectoryExists, saveAgentToFile, updateAgentFile, deleteAgentFromFile, writeFileAndFlush

## src/components/agents/AgentNavigationFooter.tsx

- lines: 26
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: AgentNavigationFooter
- functions: AgentNavigationFooter

## src/components/agents/AgentsList.tsx

- lines: 440
- imports: 13
- exports: 1
- importance: 17
- tags: tools
- exportedSymbols: AgentsList
- functions: AgentsList, _temp1, _temp0, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/agents/AgentsMenu.tsx

- lines: 800
- imports: 24
- exports: 1
- importance: 32
- tags: permissions, mcp, tools
- exportedSymbols: AgentsMenu
- functions: AgentsMenu, _temp0, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/agents/ColorPicker.tsx

- lines: 112
- imports: 7
- exports: 1
- importance: 10
- tags: tools
- exportedSymbols: ColorPicker
- functions: ColorPicker, _temp2, _temp

## src/components/agents/generateAgent.ts

- lines: 198
- imports: 12
- exports: 1
- importance: 24
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: generateAgent
- functions: that, call, generateAgent

## src/components/agents/ModelSelector.tsx

- lines: 68
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: ModelSelector
- functions: ModelSelector

## src/components/agents/new-agent-creation/CreateAgentWizard.tsx

- lines: 97
- imports: 19
- exports: 1
- importance: 13
- tags: mcp, tools
- exportedSymbols: CreateAgentWizard
- functions: CreateAgentWizard, _temp

## src/components/agents/new-agent-creation/wizard-steps/ColorStep.tsx

- lines: 84
- imports: 12
- exports: 1
- importance: 13
- tags: tools
- exportedSymbols: ColorStep
- functions: ColorStep

## src/components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx

- lines: 378
- imports: 19
- exports: 1
- importance: 16
- tags: tools
- exportedSymbols: ConfirmStep
- functions: ConfirmStep, _temp3, _temp2, _temp

## src/components/agents/new-agent-creation/wizard-steps/ConfirmStepWrapper.tsx

- lines: 74
- imports: 12
- exports: 1
- importance: 12
- tags: mcp, tools
- exportedSymbols: ConfirmStepWrapper
- functions: ConfirmStepWrapper

## src/components/agents/new-agent-creation/wizard-steps/DescriptionStep.tsx

- lines: 123
- imports: 12
- exports: 1
- importance: 13
- tags: mcp
- exportedSymbols: DescriptionStep
- functions: DescriptionStep

## src/components/agents/new-agent-creation/wizard-steps/GenerateStep.tsx

- lines: 143
- imports: 15
- exports: 1
- importance: 13
- tags: mcp, tools
- exportedSymbols: GenerateStep
- functions: GenerateStep

## src/components/agents/new-agent-creation/wizard-steps/LocationStep.tsx

- lines: 80
- imports: 11
- exports: 1
- importance: 13
- tags: mcp
- exportedSymbols: LocationStep
- functions: LocationStep

## src/components/agents/new-agent-creation/wizard-steps/MemoryStep.tsx

- lines: 113
- imports: 13
- exports: 1
- importance: 13
- tags: mcp, tools, state-memory
- exportedSymbols: MemoryStep
- functions: MemoryStep

## src/components/agents/new-agent-creation/wizard-steps/MethodStep.tsx

- lines: 80
- imports: 10
- exports: 1
- importance: 13
- tags: (none)
- exportedSymbols: MethodStep
- functions: MethodStep

## src/components/agents/new-agent-creation/wizard-steps/ModelStep.tsx

- lines: 52
- imports: 9
- exports: 1
- importance: 11
- tags: (none)
- exportedSymbols: ModelStep
- functions: ModelStep

## src/components/agents/new-agent-creation/wizard-steps/PromptStep.tsx

- lines: 128
- imports: 12
- exports: 1
- importance: 13
- tags: (none)
- exportedSymbols: PromptStep
- functions: PromptStep

## src/components/agents/new-agent-creation/wizard-steps/ToolsStep.tsx

- lines: 61
- imports: 10
- exports: 1
- importance: 12
- tags: tools
- exportedSymbols: ToolsStep
- functions: ToolsStep

## src/components/agents/new-agent-creation/wizard-steps/TypeStep.tsx

- lines: 103
- imports: 13
- exports: 1
- importance: 13
- tags: mcp, tools
- exportedSymbols: TypeStep
- functions: TypeStep

## src/components/agents/ToolSelector.tsx

- lines: 562
- imports: 30
- exports: 1
- importance: 19
- tags: mcp, tools
- exportedSymbols: ToolSelector
- functions: getToolBuckets, getMcpServerBuckets, ToolSelector, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/agents/types.ts

- lines: 28
- imports: 2
- exports: 3
- importance: 8
- tags: tools
- exportedSymbols: AGENT_PATHS, ModeState, AgentValidationResult

## src/components/agents/utils.ts

- lines: 19
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: getAgentSourceDisplayName
- functions: getAgentSourceDisplayName

## src/components/agents/validateAgent.ts

- lines: 110
- imports: 4
- exports: 3
- importance: 11
- tags: tools
- exportedSymbols: validateAgentType, validateAgent, AgentValidationResult
- functions: validateAgentType, validateAgent

## src/components/App.tsx

- lines: 56
- imports: 7
- exports: 1
- importance: 9
- tags: state-memory
- exportedSymbols: App
- functions: App

## src/components/ApproveApiKey.tsx

- lines: 123
- imports: 6
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: ApproveApiKey
- functions: ApproveApiKey, onChange

## src/components/AutoModeOptInDialog.tsx

- lines: 142
- imports: 7
- exports: 2
- importance: 22
- tags: permissions, tools, state-memory
- exportedSymbols: AutoModeOptInDialog, AUTO_MODE_DESCRIPTION
- functions: AutoModeOptInDialog, onChange, _temp

## src/components/AutoUpdater.tsx

- lines: 198
- imports: 14
- exports: 1
- importance: 24
- tags: permissions, mcp
- exportedSymbols: AutoUpdater
- functions: AutoUpdater

## src/components/AutoUpdaterWrapper.tsx

- lines: 91
- imports: 10
- exports: 1
- importance: 13
- tags: (none)
- exportedSymbols: AutoUpdaterWrapper
- functions: AutoUpdaterWrapper, checkInstallation

## src/components/AwsAuthStatusBox.tsx

- lines: 82
- imports: 4
- exports: 1
- importance: 17
- tags: permissions
- exportedSymbols: AwsAuthStatusBox
- functions: AwsAuthStatusBox, _temp

## src/components/BaseTextInput.tsx

- lines: 136
- imports: 9
- exports: 1
- importance: 12
- tags: (none)
- exportedSymbols: BaseTextInput
- functions: BaseTextInput

## src/components/BashModeProgress.tsx

- lines: 56
- imports: 7
- exports: 1
- importance: 9
- tags: tools
- exportedSymbols: BashModeProgress
- functions: BashModeProgress

## src/components/BridgeDialog.tsx

- lines: 401
- imports: 15
- exports: 1
- importance: 17
- tags: bridge, state-memory
- exportedSymbols: BridgeDialog
- functions: BridgeDialog, _temp14, _temp13, _temp12, _temp11, _temp10, _temp1, _temp0, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/BypassPermissionsModeDialog.tsx

- lines: 87
- imports: 8
- exports: 1
- importance: 21
- tags: permissions
- exportedSymbols: BypassPermissionsModeDialog
- functions: BypassPermissionsModeDialog, onChange, _temp2, _temp

## src/components/ChannelDowngradeDialog.tsx

- lines: 102
- imports: 5
- exports: 2
- importance: 20
- tags: permissions
- exportedSymbols: ChannelDowngradeDialog, ChannelDowngradeChoice
- functions: ChannelDowngradeDialog, handleSelect, handleCancel

## src/components/ClaudeCodeHint/PluginHintMenu.tsx

- lines: 78
- imports: 4
- exports: 1
- importance: 16
- tags: permissions
- exportedSymbols: PluginHintMenu
- functions: PluginHintMenu, onSelect

## src/components/ClaudeInChromeOnboarding.tsx

- lines: 121
- imports: 7
- exports: 1
- importance: 20
- tags: permissions
- exportedSymbols: ClaudeInChromeOnboarding
- functions: ClaudeInChromeOnboarding, _temp

## src/components/ClaudeMdExternalIncludesDialog.tsx

- lines: 137
- imports: 8
- exports: 1
- importance: 11
- tags: (none)
- exportedSymbols: ClaudeMdExternalIncludesDialog
- functions: ClaudeMdExternalIncludesDialog, _temp4, _temp3, _temp2, _temp

## src/components/ClickableImageRef.tsx

- lines: 73
- imports: 8
- exports: 1
- importance: 10
- tags: (none)
- exportedSymbols: ClickableImageRef
- functions: ClickableImageRef

## src/components/CompactSummary.tsx

- lines: 118
- imports: 9
- exports: 1
- importance: 12
- tags: state-memory
- exportedSymbols: CompactSummary
- functions: CompactSummary

## src/components/ConfigurableShortcutHint.tsx

- lines: 57
- imports: 5
- exports: 1
- importance: 7
- tags: state-memory
- exportedSymbols: ConfigurableShortcutHint
- functions: ConfigurableShortcutHint

## src/components/ConsoleOAuthFlow.tsx

- lines: 631
- imports: 19
- exports: 1
- importance: 41
- tags: auth, permissions, mcp
- exportedSymbols: ConsoleOAuthFlow
- functions: ConsoleOAuthFlow, handleSubmitCode, OAuthStatusMessage

## src/components/ContextSuggestions.tsx

- lines: 47
- imports: 7
- exports: 1
- importance: 21
- tags: auth
- exportedSymbols: ContextSuggestions
- functions: ContextSuggestions, _temp

## src/components/ContextVisualization.tsx

- lines: 489
- imports: 11
- exports: 1
- importance: 30
- tags: auth, mcp, tools
- exportedSymbols: ContextVisualization
- functions: CollapseStatus, groupBySource, ContextVisualization, _temp27, _temp26, _temp25, _temp24, _temp23, _temp22, _temp21, _temp20, _temp19, _temp18, _temp17, _temp16, _temp15, _temp14, _temp13, _temp12, _temp11, _temp10, _temp1, _temp0, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/CoordinatorAgentStatus.tsx

- lines: 273
- imports: 13
- exports: 3
- importance: 31
- tags: auth
- exportedSymbols: getVisibleAgentTasks, CoordinatorTaskPanel, useCoordinatorTaskCount
- functions: getVisibleAgentTasks, CoordinatorTaskPanel, useCoordinatorTaskCount, _temp, MainLine, AgentLine

## src/components/CostThresholdDialog.tsx

- lines: 50
- imports: 5
- exports: 1
- importance: 7
- tags: state-memory, cost-budget
- exportedSymbols: CostThresholdDialog
- functions: CostThresholdDialog

## src/components/CtrlOToExpand.tsx

- lines: 51
- imports: 8
- exports: 3
- importance: 14
- tags: state-memory
- exportedSymbols: SubAgentProvider, CtrlOToExpand, ctrlOToExpand
- functions: SubAgentProvider, CtrlOToExpand, ctrlOToExpand

## src/components/CustomSelect/index.ts

- lines: 4
- imports: 0
- exports: 0
- importance: 0
- tags: (none)

## src/components/CustomSelect/option-map.ts

- lines: 51
- imports: 2
- exports: 1
- importance: 4
- tags: (none)
- exportedSymbols: default
- classes: OptionMap

## src/components/CustomSelect/select-input-option.tsx

- lines: 488
- imports: 13
- exports: 1
- importance: 18
- tags: mcp
- exportedSymbols: SelectInputOption
- functions: to, SelectInputOption, _temp

## src/components/CustomSelect/select-option.tsx

- lines: 68
- imports: 3
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: SelectOption, SelectOptionProps
- functions: SelectOption

## src/components/CustomSelect/select.tsx

- lines: 690
- imports: 13
- exports: 3
- importance: 24
- tags: mcp
- exportedSymbols: Select, OptionWithDescription, SelectProps
- functions: getTextContent, to, Select, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp, TwoColumnRow

## src/components/CustomSelect/SelectMulti.tsx

- lines: 213
- imports: 10
- exports: 2
- importance: 16
- tags: (none)
- exportedSymbols: SelectMulti, SelectMultiProps
- functions: to, SelectMulti, _temp

## src/components/CustomSelect/use-multi-select-state.ts

- lines: 415
- imports: 8
- exports: 3
- importance: 19
- tags: mcp
- exportedSymbols: useMultiSelectState, UseMultiSelectStateProps, MultiSelectState
- functions: useMultiSelectState

## src/components/CustomSelect/use-select-input.ts

- lines: 288
- imports: 8
- exports: 2
- importance: 15
- tags: (none)
- exportedSymbols: useSelectInput, UseSelectProps

## src/components/CustomSelect/use-select-navigation.ts

- lines: 654
- imports: 4
- exports: 3
- importance: 18
- tags: (none)
- exportedSymbols: useSelectNavigation, UseSelectNavigationProps, SelectNavigation
- functions: useSelectNavigation

## src/components/CustomSelect/use-select-state.ts

- lines: 158
- imports: 3
- exports: 3
- importance: 10
- tags: (none)
- exportedSymbols: useSelectState, UseSelectStateProps, SelectState
- functions: useSelectState

## src/components/design-system/Byline.tsx

- lines: 77
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: Byline
- functions: Byline, _temp

## src/components/design-system/color.ts

- lines: 31
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: color
- functions: color

## src/components/design-system/Dialog.tsx

- lines: 138
- imports: 10
- exports: 1
- importance: 23
- tags: permissions
- exportedSymbols: Dialog
- functions: Dialog

## src/components/design-system/Divider.tsx

- lines: 149
- imports: 6
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: Divider
- functions: Divider

## src/components/design-system/FuzzyPicker.tsx

- lines: 312
- imports: 13
- exports: 1
- importance: 25
- tags: permissions, mcp
- exportedSymbols: FuzzyPicker
- functions: FuzzyPicker, List, firstWord

## src/components/design-system/KeyboardShortcutHint.tsx

- lines: 81
- imports: 3
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: KeyboardShortcutHint
- functions: KeyboardShortcutHint

## src/components/design-system/ListItem.tsx

- lines: 244
- imports: 6
- exports: 1
- importance: 11
- tags: (none)
- exportedSymbols: ListItem
- functions: ListItem, renderIndicator, getTextColor

## src/components/design-system/LoadingState.tsx

- lines: 94
- imports: 4
- exports: 1
- importance: 7
- tags: state-memory
- exportedSymbols: LoadingState
- functions: LoadingState

## src/components/design-system/Pane.tsx

- lines: 77
- imports: 6
- exports: 1
- importance: 18
- tags: permissions
- exportedSymbols: Pane
- functions: Pane

## src/components/design-system/ProgressBar.tsx

- lines: 86
- imports: 4
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: ProgressBar
- functions: ProgressBar

## src/components/design-system/Ratchet.tsx

- lines: 80
- imports: 5
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: Ratchet
- functions: Ratchet

## src/components/design-system/StatusIcon.tsx

- lines: 95
- imports: 4
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: StatusIcon
- functions: StatusIcon

## src/components/design-system/Tabs.tsx

- lines: 340
- imports: 10
- exports: 4
- importance: 22
- tags: mcp
- exportedSymbols: Tabs, Tab, useTabsWidth, useTabHeaderFocus
- functions: Tabs, _temp4, _temp3, _temp2, _temp, Tab, useTabsWidth, useTabHeaderFocus

## src/components/design-system/ThemedBox.tsx

- lines: 156
- imports: 10
- exports: 2
- importance: 15
- tags: (none)
- exportedSymbols: Props, default
- functions: resolveColor, ThemedBox

## src/components/design-system/ThemedText.tsx

- lines: 124
- imports: 7
- exports: 3
- importance: 14
- tags: (none)
- exportedSymbols: TextHoverColorContext, Props, default
- functions: resolveColor, ThemedText

## src/components/design-system/ThemeProvider.tsx

- lines: 170
- imports: 7
- exports: 4
- importance: 17
- tags: mcp, tools
- exportedSymbols: ThemeProvider, useTheme, useThemeSetting, usePreviewTheme
- functions: defaultInitialTheme, defaultSaveTheme, ThemeProvider, useTheme, useThemeSetting, usePreviewTheme

## src/components/DesktopHandoff.tsx

- lines: 193
- imports: 10
- exports: 2
- importance: 16
- tags: state-memory
- exportedSymbols: getDownloadUrl, DesktopHandoff
- functions: getDownloadUrl, DesktopHandoff, performHandoff, _temp2, _temp

## src/components/DesktopUpsell/DesktopUpsellStartup.tsx

- lines: 171
- imports: 10
- exports: 3
- importance: 28
- tags: permissions, state-memory
- exportedSymbols: getDesktopUpsellConfig, shouldShowDesktopUpsellStartup, DesktopUpsellStartup
- functions: getDesktopUpsellConfig, isSupportedPlatform, shouldShowDesktopUpsellStartup, DesktopUpsellStartup, handleSelect, _temp2, _temp

## src/components/DevBar.tsx

- lines: 49
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: DevBar
- functions: shouldShowDevBar, DevBar, _temp

## src/components/DevChannelsDialog.tsx

- lines: 105
- imports: 7
- exports: 1
- importance: 10
- tags: (none)
- exportedSymbols: DevChannelsDialog
- functions: DevChannelsDialog, onChange, _temp2, _temp

## src/components/DiagnosticsDisplay.tsx

- lines: 95
- imports: 9
- exports: 1
- importance: 12
- tags: (none)
- exportedSymbols: DiagnosticsDisplay
- functions: DiagnosticsDisplay, _temp3, _temp2, _temp

## src/components/diff/DiffDetailView.tsx

- lines: 281
- imports: 10
- exports: 1
- importance: 15
- tags: (none)
- exportedSymbols: DiffDetailView
- functions: DiffDetailView

## src/components/diff/DiffDialog.tsx

- lines: 383
- imports: 16
- exports: 1
- importance: 16
- tags: (none)
- exportedSymbols: DiffDialog
- functions: turnDiffToDiffData, DiffDialog, handleCancel, _temp3, _temp2, _temp

## src/components/diff/DiffFileList.tsx

- lines: 292
- imports: 8
- exports: 1
- importance: 13
- tags: (none)
- exportedSymbols: DiffFileList
- functions: DiffFileList, FileItem, FileStats

## src/components/EffortCallout.tsx

- lines: 265
- imports: 13
- exports: 2
- importance: 27
- tags: permissions
- exportedSymbols: EffortCallout, shouldShowEffortCallout
- functions: EffortCallout, _temp, EffortIndicatorSymbol, EffortOptionLabel, shouldShowEffortCallout, markV2Dismissed

## src/components/EffortIndicator.ts

- lines: 43
- imports: 2
- exports: 2
- importance: 6
- tags: (none)
- exportedSymbols: getEffortNotificationText, effortLevelToSymbol
- functions: getEffortNotificationText, effortLevelToSymbol

## src/components/ExitFlow.tsx

- lines: 48
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: ExitFlow
- functions: getRandomGoodbyeMessage, ExitFlow, onExit

## src/components/ExportDialog.tsx

- lines: 128
- imports: 15
- exports: 1
- importance: 23
- tags: permissions
- exportedSymbols: ExportDialog
- functions: ExportDialog, renderInputGuide

## src/components/FallbackToolUseErrorMessage.tsx

- lines: 116
- imports: 10
- exports: 1
- importance: 23
- tags: query-loop, tools, state-memory
- exportedSymbols: FallbackToolUseErrorMessage
- functions: FallbackToolUseErrorMessage

## src/components/FallbackToolUseRejectedMessage.tsx

- lines: 16
- imports: 4
- exports: 1
- importance: 6
- tags: tools
- exportedSymbols: FallbackToolUseRejectedMessage
- functions: FallbackToolUseRejectedMessage

## src/components/FastIcon.tsx

- lines: 46
- imports: 8
- exports: 2
- importance: 12
- tags: (none)
- exportedSymbols: FastIcon, getFastIconString
- functions: FastIcon, getFastIconString

## src/components/Feedback.tsx

- lines: 592
- imports: 31
- exports: 3
- importance: 45
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: redactSensitiveInfo, Feedback, createGitHubIssueUrl
- functions: to, redactSensitiveInfo, getSanitizedErrorLogs, loadRawTranscriptJsonl, Feedback, loadEnvInfo, createGitHubIssueUrl, generateTitle, createFallbackTitle, to, sanitizeAndLogError, submitFeedback, to

## src/components/FeedbackSurvey/FeedbackSurvey.tsx

- lines: 174
- imports: 9
- exports: 1
- importance: 13
- tags: state-memory
- exportedSymbols: FeedbackSurvey
- functions: FeedbackSurvey, FeedbackSurveyThanks

## src/components/FeedbackSurvey/FeedbackSurveyView.tsx

- lines: 108
- imports: 5
- exports: 2
- importance: 10
- tags: state-memory
- exportedSymbols: FeedbackSurveyView, isValidResponseInput
- functions: FeedbackSurveyView

## src/components/FeedbackSurvey/submitTranscriptShare.ts

- lines: 113
- imports: 11
- exports: 2
- importance: 27
- tags: auth, state-memory
- exportedSymbols: submitTranscriptShare, TranscriptShareTrigger
- functions: submitTranscriptShare

## src/components/FeedbackSurvey/TranscriptSharePrompt.tsx

- lines: 88
- imports: 5
- exports: 2
- importance: 10
- tags: mcp, state-memory
- exportedSymbols: TranscriptSharePrompt, TranscriptShareResponse
- functions: TranscriptSharePrompt

## src/components/FeedbackSurvey/useDebouncedDigitInput.ts

- lines: 83
- imports: 2
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: useDebouncedDigitInput
- functions: useDebouncedDigitInput

## src/components/FeedbackSurvey/useFeedbackSurvey.tsx

- lines: 296
- imports: 16
- exports: 1
- importance: 25
- tags: permissions, mcp, state-memory
- exportedSymbols: useFeedbackSurvey
- functions: useFeedbackSurvey

## src/components/FeedbackSurvey/useMemorySurvey.tsx

- lines: 213
- imports: 17
- exports: 1
- importance: 24
- tags: mcp, query-loop, tools, state-memory
- exportedSymbols: useMemorySurvey
- functions: hasMemoryFileRead, useMemorySurvey

## src/components/FeedbackSurvey/usePostCompactSurvey.tsx

- lines: 206
- imports: 12
- exports: 1
- importance: 14
- tags: mcp, state-memory
- exportedSymbols: usePostCompactSurvey
- functions: hasMessageAfterBoundary, usePostCompactSurvey, _temp4, _temp3, _temp2, _temp

## src/components/FeedbackSurvey/useSurveyState.tsx

- lines: 100
- imports: 4
- exports: 1
- importance: 7
- tags: state-memory
- exportedSymbols: useSurveyState
- functions: useSurveyState

## src/components/FileEditToolDiff.tsx

- lines: 181
- imports: 13
- exports: 1
- importance: 24
- tags: permissions, tools
- exportedSymbols: FileEditToolDiff
- functions: FileEditToolDiff, DiffBody, DiffFrame, loadDiffData, diffToolInputsOnly, normalizeEdit

## src/components/FileEditToolUpdatedMessage.tsx

- lines: 124
- imports: 8
- exports: 1
- importance: 11
- tags: tools
- exportedSymbols: FileEditToolUpdatedMessage
- functions: FileEditToolUpdatedMessage, _temp4, _temp3, _temp2, _temp

## src/components/FileEditToolUseRejectedMessage.tsx

- lines: 170
- imports: 10
- exports: 1
- importance: 14
- tags: tools
- exportedSymbols: FileEditToolUseRejectedMessage
- functions: FileEditToolUseRejectedMessage

## src/components/FilePathLink.tsx

- lines: 43
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: FilePathLink
- functions: FilePathLink

## src/components/FullscreenLayout.tsx

- lines: 637
- imports: 17
- exports: 6
- importance: 49
- tags: permissions, query-loop, tools, state-memory
- exportedSymbols: useUnseenDivider, countUnseenAssistantTurns, computeUnseenDivider, FullscreenLayout, ScrollChromeContext, UnseenDivider
- functions: useUnseenDivider, countUnseenAssistantTurns, assistantHasVisibleText, computeUnseenDivider, FullscreenLayout, _temp3, _temp2, _temp, NewMessagesPill, StickyPromptHeader, SuggestionsOverlay, DialogOverlay

## src/components/GlobalSearchDialog.tsx

- lines: 343
- imports: 17
- exports: 2
- importance: 28
- tags: permissions, mcp
- exportedSymbols: GlobalSearchDialog, parseRipgrepLine
- functions: GlobalSearchDialog, _temp4, _temp3, _temp2, _temp, matchKey, parseRipgrepLine

## src/components/grove/Grove.tsx

- lines: 463
- imports: 9
- exports: 3
- importance: 20
- tags: state-memory
- exportedSymbols: GroveDialog, PrivacySettingsDialog, GroveDecision
- functions: GracePeriodContentBody, PostGracePeriodContentBody, GroveDialog, checkGroveSettings, onChange, handleCancel, _temp, PrivacySettingsDialog, _temp2

## src/components/HelpV2/Commands.tsx

- lines: 82
- imports: 8
- exports: 1
- importance: 11
- tags: commands
- exportedSymbols: Commands
- functions: Commands, _temp

## src/components/HelpV2/General.tsx

- lines: 23
- imports: 4
- exports: 1
- importance: 16
- tags: permissions
- exportedSymbols: General
- functions: General

## src/components/HelpV2/HelpV2.tsx

- lines: 184
- imports: 13
- exports: 1
- importance: 14
- tags: (none)
- exportedSymbols: HelpV2
- functions: HelpV2

## src/components/HighlightedCode.tsx

- lines: 190
- imports: 10
- exports: 1
- importance: 14
- tags: (none)
- exportedSymbols: HighlightedCode
- functions: HighlightedCode, CodeLine

## src/components/HighlightedCode/Fallback.tsx

- lines: 193
- imports: 8
- exports: 1
- importance: 12
- tags: mcp
- exportedSymbols: HighlightedCodeFallback
- functions: cachedHighlight, HighlightedCodeFallback, Highlighted

## src/components/HistorySearchDialog.tsx

- lines: 118
- imports: 12
- exports: 1
- importance: 13
- tags: mcp
- exportedSymbols: HistorySearchDialog
- functions: HistorySearchDialog, isSubsequence

## src/components/hooks/HooksConfigMenu.tsx

- lines: 578
- imports: 18
- exports: 1
- importance: 29
- tags: mcp, tools, hooks-security
- exportedSymbols: HooksConfigMenu
- functions: HooksConfigMenu, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/hooks/PromptDialog.tsx

- lines: 90
- imports: 7
- exports: 1
- importance: 30
- tags: permissions, tools, hooks-security
- exportedSymbols: PromptDialog
- functions: PromptDialog, _temp

## src/components/hooks/SelectEventMode.tsx

- lines: 127
- imports: 9
- exports: 1
- importance: 22
- tags: hooks-security
- exportedSymbols: SelectEventMode
- functions: SelectEventMode

## src/components/hooks/SelectHookMode.tsx

- lines: 112
- imports: 8
- exports: 1
- importance: 21
- tags: hooks-security
- exportedSymbols: SelectHookMode
- functions: SelectHookMode, _temp2, _temp

## src/components/hooks/SelectMatcherMode.tsx

- lines: 144
- imports: 8
- exports: 1
- importance: 21
- tags: mcp, hooks-security
- exportedSymbols: SelectMatcherMode
- functions: SelectMatcherMode, _temp3, _temp2, _temp

## src/components/hooks/ViewHookMode.tsx

- lines: 199
- imports: 5
- exports: 1
- importance: 19
- tags: hooks-security
- exportedSymbols: ViewHookMode
- functions: ViewHookMode, _temp, getContentFieldLabel, getContentFieldValue

## src/components/IdeAutoConnectDialog.tsx

- lines: 154
- imports: 7
- exports: 4
- importance: 16
- tags: (none)
- exportedSymbols: IdeAutoConnectDialog, shouldShowAutoConnectDialog, IdeDisableAutoConnectDialog, shouldShowDisableAutoConnectDialog
- functions: IdeAutoConnectDialog, shouldShowAutoConnectDialog, IdeDisableAutoConnectDialog, _temp, shouldShowDisableAutoConnectDialog

## src/components/IdeOnboardingDialog.tsx

- lines: 167
- imports: 9
- exports: 2
- importance: 15
- tags: (none)
- exportedSymbols: IdeOnboardingDialog, hasIdeOnboardingDialogBeenShown
- functions: IdeOnboardingDialog, hasIdeOnboardingDialogBeenShown, markDialogAsShown

## src/components/IdeStatusIndicator.tsx

- lines: 58
- imports: 7
- exports: 1
- importance: 9
- tags: mcp
- exportedSymbols: IdeStatusIndicator
- functions: IdeStatusIndicator

## src/components/IdleReturnDialog.tsx

- lines: 118
- imports: 6
- exports: 1
- importance: 21
- tags: auth
- exportedSymbols: IdleReturnDialog
- functions: IdleReturnDialog, formatIdleDuration

## src/components/InterruptedByUser.tsx

- lines: 15
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: InterruptedByUser
- functions: InterruptedByUser

## src/components/InvalidConfigDialog.tsx

- lines: 156
- imports: 11
- exports: 1
- importance: 13
- tags: mcp
- exportedSymbols: showInvalidConfigDialog
- functions: InvalidConfigDialog, showInvalidConfigDialog

## src/components/InvalidSettingsDialog.tsx

- lines: 89
- imports: 7
- exports: 1
- importance: 10
- tags: (none)
- exportedSymbols: InvalidSettingsDialog
- functions: InvalidSettingsDialog, handleSelect

## src/components/KeybindingWarnings.tsx

- lines: 55
- imports: 4
- exports: 1
- importance: 6
- tags: mcp
- exportedSymbols: KeybindingWarnings
- functions: KeybindingWarnings, _temp4, _temp3, _temp2, _temp

## src/components/LanguagePicker.tsx

- lines: 86
- imports: 6
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: LanguagePicker
- functions: LanguagePicker, handleSubmit

## src/components/LogoV2/AnimatedAsterisk.tsx

- lines: 50
- imports: 6
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: AnimatedAsterisk
- functions: AnimatedAsterisk

## src/components/LogoV2/AnimatedClawd.tsx

- lines: 124
- imports: 6
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: AnimatedClawd
- functions: hold, AnimatedClawd, useClawdAnimation

## src/components/LogoV2/ChannelsNotice.tsx

- lines: 266
- imports: 11
- exports: 1
- importance: 27
- tags: auth, mcp, state-memory
- exportedSymbols: ChannelsNotice
- functions: ChannelsNotice, _temp4, _temp3, _temp2, _temp, formatEntry, findUnmatched

## src/components/LogoV2/Clawd.tsx

- lines: 240
- imports: 4
- exports: 2
- importance: 11
- tags: (none)
- exportedSymbols: Clawd, ClawdPose
- functions: Clawd, AppleTerminalClawd

## src/components/LogoV2/CondensedLogo.tsx

- lines: 161
- imports: 18
- exports: 1
- importance: 14
- tags: (none)
- exportedSymbols: CondensedLogo
- functions: CondensedLogo, _temp2, _temp

## src/components/LogoV2/EmergencyTip.tsx

- lines: 58
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: EmergencyTip
- functions: EmergencyTip, getTipOfFeed

## src/components/LogoV2/Feed.tsx

- lines: 112
- imports: 5
- exports: 4
- importance: 14
- tags: (none)
- exportedSymbols: calculateFeedWidth, Feed, FeedLine, FeedConfig
- functions: calculateFeedWidth, Feed, _temp

## src/components/LogoV2/FeedColumn.tsx

- lines: 59
- imports: 6
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: FeedColumn
- functions: FeedColumn, _temp

## src/components/LogoV2/feedConfigs.tsx

- lines: 92
- imports: 10
- exports: 4
- importance: 19
- tags: (none)
- exportedSymbols: createRecentActivityFeed, createWhatsNewFeed, createProjectOnboardingFeed, createGuestPassesFeed
- functions: createRecentActivityFeed, createWhatsNewFeed, createProjectOnboardingFeed, createGuestPassesFeed

## src/components/LogoV2/GuestPassesUpsell.tsx

- lines: 70
- imports: 7
- exports: 3
- importance: 13
- tags: (none)
- exportedSymbols: useShowGuestPassesUpsell, incrementGuestPassesSeenCount, GuestPassesUpsell
- functions: resetIfPassesRefreshed, shouldShowGuestPassesUpsell, useShowGuestPassesUpsell, _temp, incrementGuestPassesSeenCount, GuestPassesUpsell

## src/components/LogoV2/LogoV2.tsx

- lines: 543
- imports: 35
- exports: 1
- importance: 30
- tags: auth, mcp, state-memory
- exportedSymbols: LogoV2
- functions: LogoV2, _temp3, _temp2, _temp

## src/components/LogoV2/Opus1mMergeNotice.tsx

- lines: 55
- imports: 8
- exports: 2
- importance: 12
- tags: (none)
- exportedSymbols: shouldShowOpus1mMergeNotice, Opus1mMergeNotice
- functions: shouldShowOpus1mMergeNotice, Opus1mMergeNotice

## src/components/LogoV2/OverageCreditUpsell.tsx

- lines: 166
- imports: 9
- exports: 7
- importance: 25
- tags: mcp, cost-budget
- exportedSymbols: isEligibleForOverageCreditGrant, shouldShowOverageCreditUpsell, maybeRefreshOverageCreditCache, useShowOverageCreditUpsell, incrementOverageCreditUpsellSeenCount, OverageCreditUpsell, createOverageCreditFeed
- functions: isEligibleForOverageCreditGrant, shouldShowOverageCreditUpsell, maybeRefreshOverageCreditCache, useShowOverageCreditUpsell, _temp, incrementOverageCreditUpsellSeenCount, getUsageText, getFeedTitle, OverageCreditUpsell, createOverageCreditFeed

## src/components/LogoV2/VoiceModeNotice.tsx

- lines: 68
- imports: 10
- exports: 1
- importance: 12
- tags: (none)
- exportedSymbols: VoiceModeNotice
- functions: VoiceModeNotice, VoiceModeNoticeInner, _temp

## src/components/LogoV2/WelcomeV2.tsx

- lines: 433
- imports: 4
- exports: 1
- importance: 11
- tags: (none)
- exportedSymbols: WelcomeV2
- functions: WelcomeV2, AppleTerminalWelcomeV2

## src/components/LogSelector.tsx

- lines: 1575
- imports: 32
- exports: 2
- importance: 33
- tags: mcp, tools, state-memory
- exportedSymbols: LogSelector, LogSelectorProps
- functions: normalizeAndTruncateToWidth, formatSnippet, extractSnippet, buildLogLabel, buildLogMetadata, LogSelector, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp, extractSearchableText, buildSearchableText, groupLogsBySessionId, getUniqueTags

## src/components/LspRecommendation/LspRecommendationMenu.tsx

- lines: 88
- imports: 4
- exports: 1
- importance: 17
- tags: permissions, mcp
- exportedSymbols: LspRecommendationMenu
- functions: LspRecommendationMenu, onSelect

## src/components/ManagedSettingsSecurityDialog/ManagedSettingsSecurityDialog.tsx

- lines: 149
- imports: 9
- exports: 1
- importance: 22
- tags: permissions
- exportedSymbols: ManagedSettingsSecurityDialog
- functions: ManagedSettingsSecurityDialog, onChange, _temp

## src/components/ManagedSettingsSecurityDialog/utils.ts

- lines: 145
- imports: 3
- exports: 5
- importance: 14
- tags: (none)
- exportedSymbols: extractDangerousSettings, hasDangerousSettings, hasDangerousSettingsChanged, formatDangerousSettingsList, DangerousSettings
- functions: extractDangerousSettings, hasDangerousSettings, hasDangerousSettingsChanged, formatDangerousSettingsList

## src/components/Markdown.tsx

- lines: 236
- imports: 10
- exports: 2
- importance: 28
- tags: auth, tools
- exportedSymbols: Markdown, StreamingMarkdown
- functions: hasMarkdownSyntax, cachedLexer, Markdown, MarkdownWithHighlight, MarkdownBody, flushNonTableContent, StreamingMarkdown

## src/components/MarkdownTable.tsx

- lines: 322
- imports: 9
- exports: 1
- importance: 27
- tags: auth, mcp
- exportedSymbols: MarkdownTable
- functions: wrapText, MarkdownTable, formatCell, getPlainText, getMinWidth, getIdealWidth, calculateMaxRowLines, renderRowLines, renderBorderLine, renderVerticalFormat

## src/components/mcp/CapabilitiesSection.tsx

- lines: 61
- imports: 4
- exports: 1
- importance: 6
- tags: mcp, tools
- exportedSymbols: CapabilitiesSection
- functions: CapabilitiesSection

## src/components/mcp/ElicitationDialog.tsx

- lines: 1169
- imports: 18
- exports: 1
- importance: 36
- tags: permissions, mcp, cost-budget
- exportedSymbols: ElicitationDialog
- functions: resetTypeahead, ResolvingSpinner, formatDateDisplay, ElicitationDialog, ElicitationFormDialog, validateMultiSelect, handleNavigation, setField, updateValidationError, unsetField, commitTextField, resolveFieldAsync, handleTextInputChange, handleTextInputSubmit, runTypeahead, validateRequired, renderFormFields, ElicitationURLDialog

## src/components/mcp/index.ts

- lines: 10
- imports: 0
- exports: 0
- importance: 0
- tags: mcp, tools

## src/components/mcp/MCPAgentServerMenu.tsx

- lines: 183
- imports: 14
- exports: 1
- importance: 26
- tags: auth, mcp
- exportedSymbols: MCPAgentServerMenu
- functions: MCPAgentServerMenu

## src/components/mcp/MCPListPanel.tsx

- lines: 504
- imports: 16
- exports: 1
- importance: 18
- tags: mcp
- exportedSymbols: MCPListPanel
- functions: getScopeHeading, groupServersByScope, MCPListPanel, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/mcp/McpParsingWarnings.tsx

- lines: 213
- imports: 7
- exports: 1
- importance: 11
- tags: mcp
- exportedSymbols: McpParsingWarnings
- functions: McpConfigErrorSection, _temp2, _temp, McpParsingWarnings, _temp5, _temp4, _temp3, filterErrors

## src/components/mcp/MCPReconnect.tsx

- lines: 167
- imports: 8
- exports: 1
- importance: 12
- tags: mcp
- exportedSymbols: MCPReconnect
- functions: MCPReconnect, attemptReconnect

## src/components/mcp/MCPRemoteServerMenu.tsx

- lines: 649
- imports: 29
- exports: 1
- importance: 42
- tags: auth, permissions, mcp, tools
- exportedSymbols: MCPRemoteServerMenu
- functions: MCPRemoteServerMenu

## src/components/mcp/MCPSettings.tsx

- lines: 398
- imports: 15
- exports: 1
- importance: 28
- tags: auth, mcp, tools, state-memory
- exportedSymbols: MCPSettings
- functions: MCPSettings, prepareServers, _temp4, _temp3, _temp2, _temp

## src/components/mcp/MCPStdioServerMenu.tsx

- lines: 177
- imports: 19
- exports: 1
- importance: 14
- tags: mcp, tools
- exportedSymbols: MCPStdioServerMenu
- functions: MCPStdioServerMenu

## src/components/mcp/MCPToolDetailView.tsx

- lines: 212
- imports: 8
- exports: 1
- importance: 22
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: MCPToolDetailView
- functions: MCPToolDetailView, loadDescription, _temp

## src/components/mcp/MCPToolListView.tsx

- lines: 141
- imports: 14
- exports: 1
- importance: 13
- tags: mcp, tools
- exportedSymbols: MCPToolListView
- functions: MCPToolListView, _temp2, _temp

## src/components/mcp/utils/reconnectHelpers.tsx

- lines: 49
- imports: 3
- exports: 3
- importance: 9
- tags: mcp, tools
- exportedSymbols: handleReconnectResult, handleReconnectError, ReconnectResult
- functions: handleReconnectResult, handleReconnectError

## src/components/MCPServerApprovalDialog.tsx

- lines: 115
- imports: 7
- exports: 1
- importance: 10
- tags: mcp
- exportedSymbols: MCPServerApprovalDialog
- functions: MCPServerApprovalDialog, onChange

## src/components/MCPServerDesktopImportDialog.tsx

- lines: 203
- imports: 13
- exports: 1
- importance: 14
- tags: mcp
- exportedSymbols: MCPServerDesktopImportDialog
- functions: MCPServerDesktopImportDialog, onSubmit

## src/components/MCPServerDialogCopy.tsx

- lines: 15
- imports: 3
- exports: 1
- importance: 5
- tags: mcp, tools
- exportedSymbols: MCPServerDialogCopy
- functions: MCPServerDialogCopy

## src/components/MCPServerMultiselectDialog.tsx

- lines: 133
- imports: 12
- exports: 1
- importance: 13
- tags: mcp
- exportedSymbols: MCPServerMultiselectDialog
- functions: MCPServerMultiselectDialog, onSubmit, _temp

## src/components/memory/MemoryFileSelector.tsx

- lines: 438
- imports: 26
- exports: 1
- importance: 17
- tags: mcp, tools, state-memory
- exportedSymbols: MemoryFileSelector
- functions: MemoryFileSelector, handleToggleAutoMemory, handleToggleAutoDream, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/memory/MemoryUpdateNotification.tsx

- lines: 45
- imports: 6
- exports: 2
- importance: 10
- tags: state-memory
- exportedSymbols: getRelativeMemoryPath, MemoryUpdateNotification
- functions: getRelativeMemoryPath, MemoryUpdateNotification

## src/components/MemoryUsageIndicator.tsx

- lines: 37
- imports: 4
- exports: 1
- importance: 6
- tags: state-memory
- exportedSymbols: MemoryUsageIndicator
- functions: MemoryUsageIndicator

## src/components/Message.tsx

- lines: 627
- imports: 31
- exports: 4
- importance: 35
- tags: query-loop, tools, state-memory
- exportedSymbols: hasThinkingContent, areMessagePropsEqual, Message, Props
- functions: MessageImpl, UserMessage, AssistantMessageBlock, hasThinkingContent, areMessagePropsEqual

## src/components/messageActions.tsx

- lines: 450
- imports: 9
- exports: 17
- importance: 42
- tags: mcp, query-loop, tools
- exportedSymbols: isNavigableMessage, toolCallOf, useSelectedMessageBg, useMessageActions, MessageActionsKeybindings, MessageActionsBar, stripSystemReminders, copyTextOf, MESSAGE_ACTIONS, MessageActionsSelectedContext, InVirtualListContext, NavigableType, NavigableOf, NavigableMessage, MessageActionCaps, MessageActionsState, MessageActionsNav
- functions: isNavigableMessage, toolCallOf, action, isApplicable, useSelectedMessageBg, useMessageActions, MessageActionsKeybindings, MessageActionsBar, stripSystemReminders, copyTextOf, toolResultText

## src/components/MessageModel.tsx

- lines: 43
- imports: 5
- exports: 1
- importance: 7
- tags: state-memory
- exportedSymbols: MessageModel
- functions: MessageModel, _temp

## src/components/MessageResponse.tsx

- lines: 78
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: MessageResponse
- functions: MessageResponse, MessageResponseProvider

## src/components/MessageRow.tsx

- lines: 383
- imports: 14
- exports: 6
- importance: 36
- tags: query-loop, tools, state-memory
- exportedSymbols: hasContentAfterIndex, isMessageStreaming, allToolsResolved, areMessageRowPropsEqual, MessageRow, Props
- functions: hasContentAfterIndex, MessageRowImpl, _temp, isMessageStreaming, allToolsResolved, areMessageRowPropsEqual

## src/components/Messages.tsx

- lines: 834
- imports: 46
- exports: 6
- importance: 52
- tags: permissions, mcp, query-loop, tools, state-memory, cost-budget
- exportedSymbols: filterForBriefTool, dropTextInBriefTurns, computeSliceStart, shouldRenderStatically, Messages, SliceAnchor
- classes: of
- functions: LogoHeader, filterForBriefTool, dropTextInBriefTurns, computeSliceStart, expandKey, setsEqual, shouldRenderStatically

## src/components/messages/AdvisorMessage.tsx

- lines: 158
- imports: 10
- exports: 1
- importance: 23
- tags: query-loop, tools
- exportedSymbols: AdvisorMessage
- functions: AdvisorMessage

## src/components/messages/AssistantRedactedThinkingMessage.tsx

- lines: 31
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: AssistantRedactedThinkingMessage
- functions: AssistantRedactedThinkingMessage

## src/components/messages/AssistantTextMessage.tsx

- lines: 270
- imports: 18
- exports: 1
- importance: 27
- tags: auth
- exportedSymbols: AssistantTextMessage
- functions: InvalidApiKeyMessage, AssistantTextMessage

## src/components/messages/AssistantThinkingMessage.tsx

- lines: 86
- imports: 6
- exports: 1
- importance: 9
- tags: mcp, state-memory
- exportedSymbols: AssistantThinkingMessage
- functions: AssistantThinkingMessage

## src/components/messages/AssistantToolUseMessage.tsx

- lines: 368
- imports: 20
- exports: 1
- importance: 26
- tags: permissions, tools, state-memory
- exportedSymbols: AssistantToolUseMessage
- functions: AssistantToolUseMessage, _temp3, _temp2, _temp, renderToolUseMessage, renderToolUseProgressMessage, renderToolUseQueuedMessage

## src/components/messages/AttachmentMessage.tsx

- lines: 536
- imports: 28
- exports: 1
- importance: 28
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: AttachmentMessage
- functions: AttachmentMessage, TaskStatusMessage, GenericTaskStatus, TeammateTaskStatus, Line

## src/components/messages/CollapsedReadSearchContent.tsx

- lines: 484
- imports: 20
- exports: 1
- importance: 28
- tags: mcp, query-loop, tools
- exportedSymbols: CollapsedReadSearchContent
- functions: VerboseToolUse, CollapsedReadSearchContent, pushPart

## src/components/messages/CompactBoundaryMessage.tsx

- lines: 18
- imports: 4
- exports: 1
- importance: 6
- tags: state-memory
- exportedSymbols: CompactBoundaryMessage
- functions: CompactBoundaryMessage

## src/components/messages/GroupedToolUseContent.tsx

- lines: 58
- imports: 5
- exports: 1
- importance: 17
- tags: query-loop, tools
- exportedSymbols: GroupedToolUseContent
- functions: GroupedToolUseContent

## src/components/messages/HighlightedThinkingText.tsx

- lines: 162
- imports: 9
- exports: 1
- importance: 13
- tags: (none)
- exportedSymbols: HighlightedThinkingText
- functions: HighlightedThinkingText

## src/components/messages/HookProgressMessage.tsx

- lines: 116
- imports: 6
- exports: 1
- importance: 19
- tags: tools, state-memory, hooks-security
- exportedSymbols: HookProgressMessage
- functions: HookProgressMessage

## src/components/messages/nullRenderingAttachments.ts

- lines: 71
- imports: 2
- exports: 2
- importance: 28
- tags: auth, permissions, mcp, tools, state-memory, cost-budget
- exportedSymbols: isNullRenderingAttachment, NullRenderingAttachmentType
- functions: isNullRenderingAttachment

## src/components/messages/PlanApprovalMessage.tsx

- lines: 222
- imports: 8
- exports: 4
- importance: 18
- tags: (none)
- exportedSymbols: PlanApprovalRequestDisplay, PlanApprovalResponseDisplay, tryRenderPlanApprovalMessage, formatTeammateMessageContent
- functions: PlanApprovalRequestDisplay, PlanApprovalResponseDisplay, tryRenderPlanApprovalMessage, getPlanApprovalSummary, getIdleNotificationSummary, formatTeammateMessageContent

## src/components/messages/RateLimitMessage.tsx

- lines: 161
- imports: 9
- exports: 2
- importance: 15
- tags: (none)
- exportedSymbols: getUpsellMessage, RateLimitMessage
- functions: getUpsellMessage, RateLimitMessage

## src/components/messages/ShutdownMessage.tsx

- lines: 132
- imports: 4
- exports: 4
- importance: 13
- tags: (none)
- exportedSymbols: ShutdownRequestDisplay, ShutdownRejectedDisplay, tryRenderShutdownMessage, getShutdownMessageSummary
- functions: ShutdownRequestDisplay, ShutdownRejectedDisplay, tryRenderShutdownMessage, getShutdownMessageSummary

## src/components/messages/SystemAPIErrorMessage.tsx

- lines: 141
- imports: 9
- exports: 1
- importance: 12
- tags: (none)
- exportedSymbols: SystemAPIErrorMessage
- functions: SystemAPIErrorMessage, _temp

## src/components/messages/SystemTextMessage.tsx

- lines: 827
- imports: 25
- exports: 1
- importance: 44
- tags: auth, permissions, bridge, mcp, state-memory, cost-budget
- exportedSymbols: SystemTextMessage
- functions: SystemTextMessage, StopHookSummaryMessage, _temp3, _temp2, _temp, SystemTextMessageInner, TurnDurationMessage, _temp4, MemorySavedMessage, _temp5, MemoryFileRow, ThinkingMessage, BridgeStatusMessage

## src/components/messages/TaskAssignmentMessage.tsx

- lines: 76
- imports: 4
- exports: 3
- importance: 10
- tags: mcp
- exportedSymbols: TaskAssignmentDisplay, tryRenderTaskAssignmentMessage, getTaskAssignmentSummary
- functions: TaskAssignmentDisplay, tryRenderTaskAssignmentMessage, getTaskAssignmentSummary

## src/components/messages/teamMemCollapsed.tsx

- lines: 140
- imports: 4
- exports: 2
- importance: 9
- tags: (none)
- exportedSymbols: checkHasTeamMemOps, TeamMemCountParts
- functions: checkHasTeamMemOps, TeamMemCountParts

## src/components/messages/teamMemSaved.ts

- lines: 20
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: teamMemSavedPart
- functions: teamMemSavedPart

## src/components/messages/UserAgentNotificationMessage.tsx

- lines: 83
- imports: 6
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: UserAgentNotificationMessage
- functions: getStatusColor, UserAgentNotificationMessage

## src/components/messages/UserBashInputMessage.tsx

- lines: 58
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: UserBashInputMessage
- functions: UserBashInputMessage

## src/components/messages/UserBashOutputMessage.tsx

- lines: 54
- imports: 4
- exports: 1
- importance: 6
- tags: tools
- exportedSymbols: UserBashOutputMessage
- functions: UserBashOutputMessage

## src/components/messages/UserChannelMessage.tsx

- lines: 137
- imports: 7
- exports: 1
- importance: 10
- tags: (none)
- exportedSymbols: UserChannelMessage
- functions: displayServerName, UserChannelMessage

## src/components/messages/UserCommandMessage.tsx

- lines: 108
- imports: 7
- exports: 1
- importance: 10
- tags: (none)
- exportedSymbols: UserCommandMessage
- functions: UserCommandMessage

## src/components/messages/UserImageMessage.tsx

- lines: 59
- imports: 8
- exports: 1
- importance: 10
- tags: (none)
- exportedSymbols: UserImageMessage
- functions: UserImageMessage

## src/components/messages/UserLocalCommandOutputMessage.tsx

- lines: 167
- imports: 8
- exports: 1
- importance: 12
- tags: (none)
- exportedSymbols: UserLocalCommandOutputMessage
- functions: UserLocalCommandOutputMessage, IndentedContent, CloudLaunchContent

## src/components/messages/UserMemoryInputMessage.tsx

- lines: 75
- imports: 7
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: UserMemoryInputMessage
- functions: getSavingMessage, UserMemoryInputMessage

## src/components/messages/UserPlanMessage.tsx

- lines: 42
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: UserPlanMessage
- functions: UserPlanMessage

## src/components/messages/UserPromptMessage.tsx

- lines: 80
- imports: 12
- exports: 1
- importance: 13
- tags: tools, state-memory
- exportedSymbols: UserPromptMessage
- functions: UserPromptMessage

## src/components/messages/UserResourceUpdateMessage.tsx

- lines: 121
- imports: 5
- exports: 1
- importance: 8
- tags: mcp, tools
- exportedSymbols: UserResourceUpdateMessage
- functions: parseUpdates, formatUri, UserResourceUpdateMessage, _temp

## src/components/messages/UserTeammateMessage.tsx

- lines: 206
- imports: 13
- exports: 2
- importance: 16
- tags: mcp, state-memory
- exportedSymbols: UserTeammateMessage, TeammateMessageContent
- functions: parseTeammateMessages, getDisplayName, UserTeammateMessage, TeammateMessageContent

## src/components/messages/UserTextMessage.tsx

- lines: 275
- imports: 20
- exports: 1
- importance: 25
- tags: mcp, query-loop, tools, state-memory
- exportedSymbols: UserTextMessage
- functions: UserTextMessage

## src/components/messages/UserToolResultMessage/RejectedPlanMessage.tsx

- lines: 31
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: RejectedPlanMessage
- functions: RejectedPlanMessage

## src/components/messages/UserToolResultMessage/RejectedToolUseMessage.tsx

- lines: 16
- imports: 4
- exports: 1
- importance: 6
- tags: tools
- exportedSymbols: RejectedToolUseMessage
- functions: RejectedToolUseMessage

## src/components/messages/UserToolResultMessage/UserToolCanceledMessage.tsx

- lines: 16
- imports: 4
- exports: 1
- importance: 6
- tags: tools
- exportedSymbols: UserToolCanceledMessage
- functions: UserToolCanceledMessage

## src/components/messages/UserToolResultMessage/UserToolErrorMessage.tsx

- lines: 103
- imports: 14
- exports: 1
- importance: 23
- tags: query-loop, tools, state-memory
- exportedSymbols: UserToolErrorMessage
- functions: UserToolErrorMessage

## src/components/messages/UserToolResultMessage/UserToolRejectMessage.tsx

- lines: 95
- imports: 8
- exports: 1
- importance: 11
- tags: tools, state-memory
- exportedSymbols: UserToolRejectMessage
- functions: UserToolRejectMessage

## src/components/messages/UserToolResultMessage/UserToolResultMessage.tsx

- lines: 106
- imports: 11
- exports: 1
- importance: 23
- tags: query-loop, tools, state-memory
- exportedSymbols: UserToolResultMessage
- functions: UserToolResultMessage

## src/components/messages/UserToolResultMessage/UserToolSuccessMessage.tsx

- lines: 104
- imports: 12
- exports: 1
- importance: 13
- tags: tools, state-memory
- exportedSymbols: UserToolSuccessMessage
- functions: UserToolSuccessMessage

## src/components/messages/UserToolResultMessage/utils.tsx

- lines: 44
- imports: 5
- exports: 1
- importance: 7
- tags: tools
- exportedSymbols: useGetToolFromMessages
- functions: useGetToolFromMessages

## src/components/MessageSelector.tsx

- lines: 831
- imports: 27
- exports: 3
- importance: 46
- tags: permissions, query-loop, tools, state-memory
- exportedSymbols: MessageSelector, selectableUserMessagesFilter, messagesAfterAreOnlySynthetic
- functions: isTextBlock, isSummarizeOption, MessageSelector, getRestoreOptions, restoreConversationDirectly, handleSelect, onSelectRestoreOption, loadFileHistoryMetadata, getRestoreOptionConversationText, RestoreOptionDescription, RestoreCodeConfirmation, DiffStatsText, UserMessageOption, computeDiffStatsBetweenMessages, selectableUserMessagesFilter, messagesAfterAreOnlySynthetic

## src/components/MessageTimestamp.tsx

- lines: 63
- imports: 5
- exports: 1
- importance: 7
- tags: state-memory
- exportedSymbols: MessageTimestamp
- functions: MessageTimestamp, _temp

## src/components/ModelPicker.tsx

- lines: 448
- imports: 20
- exports: 2
- importance: 29
- tags: permissions, mcp, state-memory
- exportedSymbols: ModelPicker, Props
- functions: ModelPicker, handleSelect, _temp4, _temp3, _temp2, _temp, resolveOptionModel, EffortLevelIndicator, cycleEffortLevel, getDefaultEffortLevelForOption

## src/components/NativeAutoUpdater.tsx

- lines: 193
- imports: 14
- exports: 1
- importance: 24
- tags: permissions
- exportedSymbols: NativeAutoUpdater
- functions: getErrorType, NativeAutoUpdater

## src/components/NotebookEditToolUseRejectedMessage.tsx

- lines: 92
- imports: 7
- exports: 1
- importance: 10
- tags: tools
- exportedSymbols: NotebookEditToolUseRejectedMessage
- functions: NotebookEditToolUseRejectedMessage

## src/components/OffscreenFreeze.tsx

- lines: 44
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: OffscreenFreeze
- functions: OffscreenFreeze

## src/components/Onboarding.tsx

- lines: 244
- imports: 21
- exports: 2
- importance: 29
- tags: auth, mcp
- exportedSymbols: Onboarding, SkippableStep
- functions: Onboarding, goToNextStep, handleThemeSelection, handleApiKeyDone, SkippableStep

## src/components/OutputStylePicker.tsx

- lines: 112
- imports: 10
- exports: 2
- importance: 15
- tags: (none)
- exportedSymbols: OutputStylePicker, OutputStylePickerProps
- functions: mapConfigsToOptions, OutputStylePicker

## src/components/PackageManagerAutoUpdater.tsx

- lines: 104
- imports: 11
- exports: 1
- importance: 13
- tags: (none)
- exportedSymbols: PackageManagerAutoUpdater
- functions: PackageManagerAutoUpdater

## src/components/Passes/Passes.tsx

- lines: 184
- imports: 14
- exports: 1
- importance: 36
- tags: auth, permissions
- exportedSymbols: Passes
- functions: Passes, loadPassesData

## src/components/permissions/AskUserQuestionPermissionRequest/AskUserQuestionPermissionRequest.tsx

- lines: 645
- imports: 25
- exports: 1
- importance: 30
- tags: permissions, tools
- exportedSymbols: AskUserQuestionPermissionRequest
- functions: AskUserQuestionPermissionRequest, AskUserQuestionWithHighlight, AskUserQuestionPermissionRequestBody, onImagePaste, handleFinalResponse, _temp6, _temp5, _temp4, _temp3, _temp2, _temp, convertImagesToBlocks

## src/components/permissions/AskUserQuestionPermissionRequest/PreviewBox.tsx

- lines: 229
- imports: 9
- exports: 1
- importance: 23
- tags: permissions, cost-budget
- exportedSymbols: PreviewBox
- functions: PreviewBox, PreviewBoxWithHighlight, PreviewBoxBody, _temp

## src/components/permissions/AskUserQuestionPermissionRequest/PreviewQuestionView.tsx

- lines: 328
- imports: 17
- exports: 1
- importance: 26
- tags: permissions, tools, cost-budget
- exportedSymbols: PreviewQuestionView
- functions: PreviewQuestionView

## src/components/permissions/AskUserQuestionPermissionRequest/QuestionNavigationBar.tsx

- lines: 178
- imports: 8
- exports: 1
- importance: 22
- tags: permissions, tools
- exportedSymbols: QuestionNavigationBar
- functions: QuestionNavigationBar, _temp3, _temp2, _temp

## src/components/permissions/AskUserQuestionPermissionRequest/QuestionView.tsx

- lines: 465
- imports: 19
- exports: 1
- importance: 27
- tags: permissions, tools
- exportedSymbols: QuestionView
- functions: QuestionView, _temp4, _temp3, _temp2, _temp

## src/components/permissions/AskUserQuestionPermissionRequest/SubmitQuestionsView.tsx

- lines: 144
- imports: 11
- exports: 1
- importance: 23
- tags: permissions, tools
- exportedSymbols: SubmitQuestionsView
- functions: SubmitQuestionsView

## src/components/permissions/AskUserQuestionPermissionRequest/use-multiple-choice-state.ts

- lines: 180
- imports: 1
- exports: 4
- importance: 21
- tags: permissions
- exportedSymbols: useMultipleChoiceState, AnswerValue, QuestionState, MultipleChoiceState
- functions: reducer, useMultipleChoiceState

## src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx

- lines: 482
- imports: 33
- exports: 1
- importance: 38
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: BashPermissionRequest
- functions: ClassifierCheckingSubtitle, BashPermissionRequest, BashPermissionRequestInner, onSelect

## src/components/permissions/BashPermissionRequest/bashToolUseOptions.tsx

- lines: 147
- imports: 8
- exports: 2
- importance: 23
- tags: permissions, mcp, tools
- exportedSymbols: bashToolUseOptions, BashToolUseOption
- functions: descriptionAlreadyExists, stripBashRedirections, bashToolUseOptions

## src/components/permissions/ComputerUseApproval/ComputerUseApproval.tsx

- lines: 441
- imports: 13
- exports: 1
- importance: 27
- tags: permissions, mcp, state-memory
- exportedSymbols: ComputerUseApproval
- functions: ComputerUseApproval, ComputerUseTccPanel, onChange, ComputerUseAppListPanel, respond, _temp4, _temp3, _temp2, _temp

## src/components/permissions/EnterPlanModePermissionRequest/EnterPlanModePermissionRequest.tsx

- lines: 122
- imports: 10
- exports: 1
- importance: 23
- tags: permissions, tools, state-memory
- exportedSymbols: EnterPlanModePermissionRequest
- functions: EnterPlanModePermissionRequest, handleResponse, _temp

## src/components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx

- lines: 768
- imports: 45
- exports: 4
- importance: 49
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: buildPermissionUpdates, autoNameSessionFromPlan, ExitPlanModePermissionRequest, buildPlanApprovalOptions
- functions: buildPermissionUpdates, autoNameSessionFromPlan, ExitPlanModePermissionRequest, onImagePaste, handleResponse, would, handleEmptyPlanResponse, buildPlanApprovalOptions, getContextUsedPercent

## src/components/permissions/FallbackPermissionRequest.tsx

- lines: 333
- imports: 14
- exports: 1
- importance: 36
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: FallbackPermissionRequest
- functions: FallbackPermissionRequest

## src/components/permissions/FileEditPermissionRequest/FileEditPermissionRequest.tsx

- lines: 182
- imports: 11
- exports: 1
- importance: 24
- tags: permissions, tools
- exportedSymbols: FileEditPermissionRequest
- functions: FileEditPermissionRequest, _temp

## src/components/permissions/FilePermissionDialog/FilePermissionDialog.tsx

- lines: 204
- imports: 19
- exports: 2
- importance: 36
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: FilePermissionDialog, FilePermissionDialogProps
- functions: FilePermissionDialog

## src/components/permissions/FilePermissionDialog/ideDiffConfig.ts

- lines: 43
- imports: 1
- exports: 5
- importance: 21
- tags: permissions, tools
- exportedSymbols: createSingleEditDiffConfig, FileEdit, IDEDiffConfig, IDEDiffChangeInput, IDEDiffSupport
- functions: createSingleEditDiffConfig

## src/components/permissions/FilePermissionDialog/permissionOptions.tsx

- lines: 177
- imports: 10
- exports: 6
- importance: 34
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: isInClaudeFolder, isInGlobalClaudeFolder, getFilePermissionOptions, PermissionOption, PermissionOptionWithLabel, FileOperationType
- functions: isInClaudeFolder, isInGlobalClaudeFolder, getFilePermissionOptions

## src/components/permissions/FilePermissionDialog/useFilePermissionDialog.ts

- lines: 213
- imports: 10
- exports: 4
- importance: 30
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: useFilePermissionDialog, UseFilePermissionDialogProps, UseFilePermissionDialogResult, ToolInput
- functions: useFilePermissionDialog

## src/components/permissions/FilePermissionDialog/usePermissionHandler.ts

- lines: 186
- imports: 10
- exports: 3
- importance: 28
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: PERMISSION_HANDLERS, PermissionHandlerParams, PermissionHandlerOptions
- functions: logPermissionEvent, handleAcceptOnce, handleAcceptSession, handleReject

## src/components/permissions/FilesystemPermissionRequest/FilesystemPermissionRequest.tsx

- lines: 115
- imports: 7
- exports: 1
- importance: 30
- tags: permissions, query-loop, tools
- exportedSymbols: FilesystemPermissionRequest
- functions: pathFromToolUse, FilesystemPermissionRequest, _temp

## src/components/permissions/FileWritePermissionRequest/FileWritePermissionRequest.tsx

- lines: 161
- imports: 13
- exports: 1
- importance: 24
- tags: permissions, tools
- exportedSymbols: FileWritePermissionRequest
- functions: FileWritePermissionRequest, _temp

## src/components/permissions/FileWritePermissionRequest/FileWriteToolDiff.tsx

- lines: 89
- imports: 9
- exports: 1
- importance: 22
- tags: permissions, tools
- exportedSymbols: FileWriteToolDiff
- functions: FileWriteToolDiff, _temp

## src/components/permissions/hooks.ts

- lines: 210
- imports: 15
- exports: 2
- importance: 46
- tags: permissions, mcp, query-loop, tools, state-memory, hooks-security
- exportedSymbols: usePermissionRequestLogging, UnaryEvent
- functions: permissionResultToLog, decisionReasonToString, usePermissionRequestLogging

## src/components/permissions/NotebookEditPermissionRequest/NotebookEditPermissionRequest.tsx

- lines: 166
- imports: 10
- exports: 1
- importance: 34
- tags: permissions, query-loop, tools
- exportedSymbols: NotebookEditPermissionRequest
- functions: NotebookEditPermissionRequest, _temp

## src/components/permissions/NotebookEditPermissionRequest/NotebookEditToolDiff.tsx

- lines: 235
- imports: 14
- exports: 1
- importance: 24
- tags: permissions, tools
- exportedSymbols: NotebookEditToolDiff
- functions: NotebookEditToolDiff, _temp2, _temp, NotebookEditToolDiffInner, _temp3

## src/components/permissions/PermissionDecisionDebugInfo.tsx

- lines: 460
- imports: 16
- exports: 1
- importance: 27
- tags: permissions, tools, state-memory
- exportedSymbols: PermissionDecisionDebugInfo
- functions: decisionReasonDisplayString, PermissionDecisionInfoItem, formatDecisionReason, SuggestedRules, _temp, to, extractDirectories, to, extractMode, SuggestionDisplay, _temp3, _temp2, PermissionDecisionDebugInfo, _temp5, _temp4

## src/components/permissions/PermissionDialog.tsx

- lines: 72
- imports: 6
- exports: 1
- importance: 18
- tags: permissions
- exportedSymbols: PermissionDialog
- functions: PermissionDialog

## src/components/permissions/PermissionExplanation.tsx

- lines: 272
- imports: 9
- exports: 2
- importance: 38
- tags: auth, permissions, tools
- exportedSymbols: usePermissionExplainerUI, PermissionExplainerContent
- functions: ShimmerLoadingText, getRiskColor, getRiskLabel, createExplanationPromise, usePermissionExplainerUI, _temp, ExplanationResult, PermissionExplainerContent

## src/components/permissions/PermissionPrompt.tsx

- lines: 336
- imports: 8
- exports: 5
- importance: 32
- tags: permissions, mcp, tools
- exportedSymbols: PermissionPrompt, FeedbackType, PermissionPromptOption, ToolAnalyticsContext, PermissionPromptProps
- functions: PermissionPrompt, _temp

## src/components/permissions/PermissionRequest.tsx

- lines: 217
- imports: 37
- exports: 3
- importance: 28
- tags: permissions, mcp, tools
- exportedSymbols: PermissionRequest, PermissionRequestProps, ToolUseConfirm
- functions: permissionComponentForTool, getNotificationMessage, PermissionRequest

## src/components/permissions/PermissionRequestTitle.tsx

- lines: 66
- imports: 5
- exports: 1
- importance: 17
- tags: permissions
- exportedSymbols: PermissionRequestTitle
- functions: PermissionRequestTitle

## src/components/permissions/PermissionRuleExplanation.tsx

- lines: 121
- imports: 10
- exports: 2
- importance: 25
- tags: permissions, tools, state-memory
- exportedSymbols: PermissionRuleExplanation, PermissionRuleExplanationProps
- functions: stringsForDecisionReason, PermissionRuleExplanation, _temp

## src/components/permissions/PowerShellPermissionRequest/PowerShellPermissionRequest.tsx

- lines: 235
- imports: 21
- exports: 1
- importance: 34
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: PowerShellPermissionRequest
- functions: PowerShellPermissionRequest, onSelect

## src/components/permissions/PowerShellPermissionRequest/powershellToolUseOptions.tsx

- lines: 91
- imports: 5
- exports: 2
- importance: 20
- tags: permissions, mcp, tools
- exportedSymbols: powershellToolUseOptions, PowerShellToolUseOption
- functions: powershellToolUseOptions

## src/components/permissions/rules/AddPermissionRules.tsx

- lines: 180
- imports: 17
- exports: 2
- importance: 26
- tags: permissions, mcp, tools
- exportedSymbols: optionForPermissionSaveDestination, AddPermissionRules
- functions: optionForPermissionSaveDestination, AddPermissionRules, _temp

## src/components/permissions/rules/AddWorkspaceDirectory.tsx

- lines: 340
- imports: 18
- exports: 1
- importance: 26
- tags: permissions, tools, state-memory
- exportedSymbols: AddWorkspaceDirectory
- functions: PermissionDescription, DirectoryDisplay, DirectoryInput, _temp, AddWorkspaceDirectory, _temp2

## src/components/permissions/rules/PermissionRuleDescription.tsx

- lines: 76
- imports: 5
- exports: 1
- importance: 17
- tags: permissions, tools
- exportedSymbols: PermissionRuleDescription
- functions: PermissionRuleDescription

## src/components/permissions/rules/PermissionRuleInput.tsx

- lines: 138
- imports: 13
- exports: 2
- importance: 25
- tags: permissions, tools
- exportedSymbols: PermissionRuleInput, PermissionRuleInputProps
- functions: PermissionRuleInput

## src/components/permissions/rules/PermissionRuleList.tsx

- lines: 1179
- imports: 32
- exports: 1
- importance: 36
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: PermissionRuleList
- functions: RuleSourceText, to, getRuleBehaviorLabel, RuleDetails, RulesTabContent, PermissionRulesTab, PermissionRuleList, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/permissions/rules/RecentDenialsTab.tsx

- lines: 207
- imports: 8
- exports: 1
- importance: 22
- tags: permissions, mcp
- exportedSymbols: RecentDenialsTab
- functions: RecentDenialsTab, _temp3, _temp2, _temp

## src/components/permissions/rules/RemoveWorkspaceDirectory.tsx

- lines: 110
- imports: 8
- exports: 1
- importance: 21
- tags: permissions, tools, state-memory
- exportedSymbols: RemoveWorkspaceDirectory
- functions: RemoveWorkspaceDirectory

## src/components/permissions/rules/WorkspaceTab.tsx

- lines: 150
- imports: 10
- exports: 1
- importance: 23
- tags: permissions, tools
- exportedSymbols: WorkspaceTab
- functions: WorkspaceTab, _temp2, _temp

## src/components/permissions/SandboxPermissionRequest.tsx

- lines: 163
- imports: 7
- exports: 2
- importance: 23
- tags: permissions, mcp
- exportedSymbols: SandboxPermissionRequest, SandboxPermissionRequestProps
- functions: SandboxPermissionRequest, onSelect

## src/components/permissions/SedEditPermissionRequest/SedEditPermissionRequest.tsx

- lines: 230
- imports: 13
- exports: 1
- importance: 24
- tags: permissions, tools
- exportedSymbols: SedEditPermissionRequest
- functions: SedEditPermissionRequest, _temp, SedEditPermissionRequestInner

## src/components/permissions/shellPermissionHelpers.tsx

- lines: 164
- imports: 6
- exports: 1
- importance: 20
- tags: permissions, tools
- exportedSymbols: generateShellSuggestionsLabel
- functions: commandListDisplay, commandListDisplayTruncated, formatPathList, generateShellSuggestionsLabel

## src/components/permissions/SkillPermissionRequest/SkillPermissionRequest.tsx

- lines: 369
- imports: 16
- exports: 1
- importance: 36
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: SkillPermissionRequest
- functions: SkillPermissionRequest, _temp

## src/components/permissions/useShellPermissionFeedback.ts

- lines: 149
- imports: 6
- exports: 1
- importance: 29
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: useShellPermissionFeedback
- functions: useShellPermissionFeedback, handleInputModeToggle, handleReject, handleFocus

## src/components/permissions/utils.ts

- lines: 26
- imports: 3
- exports: 1
- importance: 15
- tags: permissions, tools
- exportedSymbols: logUnaryPermissionEvent
- functions: logUnaryPermissionEvent

## src/components/permissions/WebFetchPermissionRequest/WebFetchPermissionRequest.tsx

- lines: 258
- imports: 11
- exports: 1
- importance: 35
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: WebFetchPermissionRequest
- functions: inputToPermissionRuleContent, WebFetchPermissionRequest, onChange

## src/components/permissions/WorkerBadge.tsx

- lines: 49
- imports: 5
- exports: 2
- importance: 19
- tags: permissions
- exportedSymbols: WorkerBadge, WorkerBadgeProps
- functions: WorkerBadge

## src/components/permissions/WorkerPendingPermission.tsx

- lines: 105
- imports: 6
- exports: 1
- importance: 19
- tags: permissions, tools
- exportedSymbols: WorkerPendingPermission
- functions: WorkerPendingPermission

## src/components/PrBadge.tsx

- lines: 97
- imports: 4
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: PrBadge
- functions: PrBadge, getPrStatusColor

## src/components/PressEnterToContinue.tsx

- lines: 15
- imports: 3
- exports: 1
- importance: 15
- tags: permissions
- exportedSymbols: PressEnterToContinue
- functions: PressEnterToContinue

## src/components/PromptInput/HistorySearchInput.tsx

- lines: 51
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: default
- functions: HistorySearchInput, _temp

## src/components/PromptInput/inputModes.ts

- lines: 34
- imports: 2
- exports: 4
- importance: 10
- tags: (none)
- exportedSymbols: prependModeCharacterToInput, getModeFromInput, getValueFromInput, isInputModeCharacter
- functions: prependModeCharacterToInput, getModeFromInput, getValueFromInput, isInputModeCharacter

## src/components/PromptInput/inputPaste.ts

- lines: 91
- imports: 2
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: maybeTruncateMessageForInput, maybeTruncateInput
- functions: maybeTruncateMessageForInput, formatTruncatedTextRef, maybeTruncateInput

## src/components/PromptInput/IssueFlagBanner.tsx

- lines: 12
- imports: 3
- exports: 1
- importance: 5
- tags: state-memory
- exportedSymbols: IssueFlagBanner
- functions: IssueFlagBanner

## src/components/PromptInput/Notifications.tsx

- lines: 332
- imports: 34
- exports: 2
- importance: 30
- tags: auth, mcp
- exportedSymbols: Notifications, FOOTER_TEMPORARY_STATUS_TIMEOUT
- functions: Notifications, _temp2, _temp, NotificationContent

## src/components/PromptInput/PromptInput.tsx

- lines: 2339
- imports: 123
- exports: 1
- importance: 63
- tags: auth, permissions, bridge, mcp, tools, commands, state-memory, cost-budget
- exportedSymbols: default
- functions: PromptInput, so, selectFooterItem, navigateFooter, handleHistoryUp, handleHistoryDown, onImagePaste, onTextPaste, insertTextAtCursor, getInitialPasteId, buildBorderText

## src/components/PromptInput/PromptInputFooter.tsx

- lines: 191
- imports: 25
- exports: 1
- importance: 24
- tags: permissions, bridge, mcp, tools, state-memory
- exportedSymbols: default
- functions: PromptInputFooter, BridgeStatusIndicator

## src/components/PromptInput/PromptInputFooterLeftSide.tsx

- lines: 517
- imports: 38
- exports: 1
- importance: 28
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: PromptInputFooterLeftSide
- functions: ProactiveCountdown, update, PromptInputFooterLeftSide, ModeIndicator, getSpinnerHintParts, isPrStatusEnabled

## src/components/PromptInput/PromptInputFooterSuggestions.tsx

- lines: 293
- imports: 8
- exports: 5
- importance: 21
- tags: mcp
- exportedSymbols: PromptInputFooterSuggestions, OVERLAY_MAX_ITEMS, SuggestionItem, SuggestionType, default
- functions: getIcon, isUnifiedSuggestion, SuggestionItemRow, PromptInputFooterSuggestions, _temp

## src/components/PromptInput/PromptInputHelpMenu.tsx

- lines: 358
- imports: 10
- exports: 1
- importance: 16
- tags: state-memory
- exportedSymbols: PromptInputHelpMenu
- functions: formatShortcut, PromptInputHelpMenu

## src/components/PromptInput/PromptInputModeIndicator.tsx

- lines: 93
- imports: 9
- exports: 1
- importance: 12
- tags: tools
- exportedSymbols: PromptInputModeIndicator
- functions: getTeammateThemeColor, PromptChar, PromptInputModeIndicator

## src/components/PromptInput/PromptInputQueuedCommands.tsx

- lines: 117
- imports: 13
- exports: 1
- importance: 13
- tags: mcp, tools, state-memory
- exportedSymbols: PromptInputQueuedCommands
- functions: isIdleNotification, createOverflowNotificationMessage, processQueuedCommands, PromptInputQueuedCommandsImpl

## src/components/PromptInput/PromptInputStashNotice.tsx

- lines: 25
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: PromptInputStashNotice
- functions: PromptInputStashNotice

## src/components/PromptInput/SandboxPromptFooterHint.tsx

- lines: 64
- imports: 6
- exports: 1
- importance: 8
- tags: state-memory
- exportedSymbols: SandboxPromptFooterHint
- functions: SandboxPromptFooterHint

## src/components/PromptInput/ShimmeredInput.tsx

- lines: 143
- imports: 5
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: HighlightedInput
- functions: HighlightedInput, _temp

## src/components/PromptInput/useMaybeTruncateInput.ts

- lines: 59
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: useMaybeTruncateInput
- functions: useMaybeTruncateInput

## src/components/PromptInput/usePromptInputPlaceholder.ts

- lines: 77
- imports: 7
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: usePromptInputPlaceholder
- functions: usePromptInputPlaceholder

## src/components/PromptInput/useShowFastIconHint.ts

- lines: 32
- imports: 1
- exports: 1
- importance: 3
- tags: state-memory
- exportedSymbols: useShowFastIconHint
- functions: useShowFastIconHint

## src/components/PromptInput/useSwarmBanner.ts

- lines: 156
- imports: 11
- exports: 1
- importance: 13
- tags: tools
- exportedSymbols: useSwarmBanner
- functions: useSwarmBanner, toThemeColor

## src/components/PromptInput/utils.ts

- lines: 61
- imports: 4
- exports: 3
- importance: 10
- tags: (none)
- exportedSymbols: isVimModeEnabled, getNewlineInstructions, isNonSpacePrintable
- functions: to, isVimModeEnabled, getNewlineInstructions, isNonSpacePrintable

## src/components/PromptInput/VoiceIndicator.tsx

- lines: 137
- imports: 6
- exports: 2
- importance: 11
- tags: (none)
- exportedSymbols: VoiceIndicator, VoiceWarmupHint
- functions: VoiceIndicator, VoiceIndicatorImpl, VoiceWarmupHint, ProcessingShimmer

## src/components/QuickOpenDialog.tsx

- lines: 244
- imports: 16
- exports: 1
- importance: 15
- tags: mcp
- exportedSymbols: QuickOpenDialog
- functions: QuickOpenDialog, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/RemoteCallout.tsx

- lines: 76
- imports: 8
- exports: 2
- importance: 34
- tags: auth, permissions, bridge, remote, state-memory
- exportedSymbols: RemoteCallout, shouldShowRemoteCallout
- functions: RemoteCallout, shouldShowRemoteCallout

## src/components/RemoteEnvironmentDialog.tsx

- lines: 340
- imports: 19
- exports: 1
- importance: 16
- tags: remote, mcp
- exportedSymbols: RemoteEnvironmentDialog
- functions: RemoteEnvironmentDialog, fetchInfo, handleSelect, EnvironmentLabel, SingleEnvironmentContent, MultipleEnvironmentsContent, _temp

## src/components/ResumeTask.tsx

- lines: 268
- imports: 15
- exports: 1
- importance: 37
- tags: auth, permissions, state-memory, cost-budget
- exportedSymbols: ResumeTask
- functions: ResumeTask, determineErrorType, renderErrorSpecificGuidance

## src/components/sandbox/SandboxConfigTab.tsx

- lines: 45
- imports: 4
- exports: 1
- importance: 16
- tags: permissions
- exportedSymbols: SandboxConfigTab
- functions: SandboxConfigTab, _temp

## src/components/sandbox/SandboxDependenciesTab.tsx

- lines: 120
- imports: 5
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: SandboxDependenciesTab
- functions: SandboxDependenciesTab, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/sandbox/SandboxDoctorSection.tsx

- lines: 46
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: SandboxDoctorSection
- functions: SandboxDoctorSection, _temp2, _temp

## src/components/sandbox/SandboxOverridesTab.tsx

- lines: 193
- imports: 7
- exports: 1
- importance: 21
- tags: permissions, mcp
- exportedSymbols: SandboxOverridesTab
- functions: SandboxOverridesTab, OverridesSelect, handleSelect

## src/components/sandbox/SandboxSettings.tsx

- lines: 296
- imports: 14
- exports: 1
- importance: 25
- tags: permissions, mcp, tools
- exportedSymbols: SandboxSettings
- functions: SandboxSettings, handleSelect, SandboxModeTab

## src/components/SandboxViolationExpandedView.tsx

- lines: 99
- imports: 7
- exports: 1
- importance: 20
- tags: permissions
- exportedSymbols: SandboxViolationExpandedView
- functions: formatTime, SandboxViolationExpandedView, _temp

## src/components/ScrollKeybindingHandler.tsx

- lines: 1012
- imports: 11
- exports: 13
- importance: 40
- tags: state-memory
- exportedSymbols: shouldClearSelectionOnKey, selectionFocusMoveForKey, computeWheelStep, readScrollSpeedBase, initWheelAccel, ScrollKeybindingHandler, dragScrollDirection, jumpBy, scrollUp, modalPagerAction, applyModalPagerAction, WheelAccelState, ModalPagerAction
- functions: shouldClearSelectionOnKey, selectionFocusMoveForKey, computeWheelStep, readScrollSpeedBase, initWheelAccel, initAndLogWheelAccel, ScrollKeybindingHandler, showCopiedToast, copyAndToast, translateSelectionForJump, useDragToScroll, stop, tick, start, check, dragScrollDirection, jumpBy, scrollDown, scrollUp, modalPagerAction, applyModalPagerAction

## src/components/SearchBox.tsx

- lines: 72
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: SearchBox
- functions: SearchBox

## src/components/SentryErrorBoundary.ts

- lines: 29
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: SentryErrorBoundary
- classes: SentryErrorBoundary

## src/components/SessionBackgroundHint.tsx

- lines: 108
- imports: 13
- exports: 1
- importance: 13
- tags: state-memory
- exportedSymbols: SessionBackgroundHint
- functions: SessionBackgroundHint, _temp2, _temp

## src/components/SessionPreview.tsx

- lines: 194
- imports: 14
- exports: 1
- importance: 14
- tags: tools, state-memory
- exportedSymbols: SessionPreview
- functions: SessionPreview

## src/components/Settings/Config.tsx

- lines: 1822
- imports: 49
- exports: 1
- importance: 44
- tags: permissions, bridge, mcp, tools, state-memory
- exportedSymbols: Config
- functions: Config, onChangeMainModelConfig, onChangeVerbose, teammateModelDisplayString, NotifChannelLabel

## src/components/Settings/Settings.tsx

- lines: 137
- imports: 13
- exports: 1
- importance: 23
- tags: permissions
- exportedSymbols: Settings
- functions: Settings, _temp2, _temp

## src/components/Settings/Status.tsx

- lines: 241
- imports: 14
- exports: 2
- importance: 17
- tags: mcp, state-memory
- exportedSymbols: buildDiagnostics, Status
- functions: buildPrimarySection, buildSecondarySection, buildDiagnostics, PropertyValue, Status, _temp4, _temp3, _temp2, _temp, Diagnostics, _temp5

## src/components/Settings/Usage.tsx

- lines: 377
- imports: 17
- exports: 1
- importance: 16
- tags: state-memory
- exportedSymbols: Usage
- functions: LimitBar, Usage, ExtraUsageSection

## src/components/shell/ExpandShellOutputContext.tsx

- lines: 36
- imports: 3
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: ExpandShellOutputProvider, useExpandShellOutput
- functions: ExpandShellOutputProvider, useExpandShellOutput

## src/components/shell/OutputLine.tsx

- lines: 118
- imports: 11
- exports: 5
- importance: 21
- tags: mcp
- exportedSymbols: tryFormatJson, tryJsonFormatContent, linkifyUrlsInText, OutputLine, stripUnderlineAnsi
- functions: tryFormatJson, tryJsonFormatContent, linkifyUrlsInText, OutputLine, stripUnderlineAnsi

## src/components/shell/ShellProgressMessage.tsx

- lines: 150
- imports: 8
- exports: 1
- importance: 11
- tags: (none)
- exportedSymbols: ShellProgressMessage
- functions: ShellProgressMessage, _temp

## src/components/shell/ShellTimeDisplay.tsx

- lines: 74
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: ShellTimeDisplay
- functions: ShellTimeDisplay

## src/components/ShowInIDEPrompt.tsx

- lines: 170
- imports: 9
- exports: 1
- importance: 23
- tags: permissions, mcp
- exportedSymbols: ShowInIDEPrompt
- functions: ShowInIDEPrompt

## src/components/SkillImprovementSurvey.tsx

- lines: 152
- imports: 8
- exports: 1
- importance: 11
- tags: (none)
- exportedSymbols: SkillImprovementSurvey
- functions: SkillImprovementSurvey, isValidInput, SkillImprovementSurveyView, _temp

## src/components/skills/SkillsMenu.tsx

- lines: 237
- imports: 13
- exports: 1
- importance: 26
- tags: auth, mcp
- exportedSymbols: SkillsMenu
- functions: getSourceTitle, getSourceSubtitle, SkillsMenu, _temp3, _temp2, _temp

## src/components/Spinner.tsx

- lines: 562
- imports: 37
- exports: 3
- importance: 35
- tags: auth, bridge, tools, state-memory, cost-budget
- exportedSymbols: SpinnerWithVerb, BriefIdleStatus, Spinner
- functions: SpinnerWithVerb, SpinnerWithVerbInner, BriefSpinner, _temp6, _temp5, _temp4, BriefIdleStatus, _temp8, _temp7, Spinner, findNextPendingTask

## src/components/Spinner/FlashingChar.tsx

- lines: 61
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: FlashingChar
- functions: FlashingChar

## src/components/Spinner/GlimmerMessage.tsx

- lines: 328
- imports: 8
- exports: 1
- importance: 14
- tags: tools
- exportedSymbols: GlimmerMessage
- functions: GlimmerMessage

## src/components/Spinner/index.ts

- lines: 11
- imports: 0
- exports: 0
- importance: 0
- tags: (none)

## src/components/Spinner/ShimmerChar.tsx

- lines: 36
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: ShimmerChar
- functions: ShimmerChar

## src/components/Spinner/SpinnerAnimationRow.tsx

- lines: 265
- imports: 16
- exports: 2
- importance: 29
- tags: auth, tools
- exportedSymbols: SpinnerAnimationRow, SpinnerAnimationRowProps
- functions: SpinnerAnimationRow, SpinnerModeGlyph

## src/components/Spinner/SpinnerGlyph.tsx

- lines: 80
- imports: 5
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: SpinnerGlyph
- functions: SpinnerGlyph

## src/components/Spinner/teammateSelectHint.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 2
- tags: (none)
- exportedSymbols: TEAMMATE_SELECT_HINT

## src/components/Spinner/TeammateSpinnerLine.tsx

- lines: 233
- imports: 15
- exports: 1
- importance: 36
- tags: auth, query-loop, tools
- exportedSymbols: TeammateSpinnerLine
- functions: getMessagePreview, TeammateSpinnerLine

## src/components/Spinner/TeammateSpinnerTree.tsx

- lines: 272
- imports: 9
- exports: 1
- importance: 26
- tags: auth, mcp
- exportedSymbols: TeammateSpinnerTree
- functions: TeammateSpinnerTree, _temp3, _temp2, _temp, HideRow

## src/components/Spinner/useShimmerAnimation.ts

- lines: 32
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: useShimmerAnimation
- functions: useShimmerAnimation

## src/components/Spinner/useStalledAnimation.ts

- lines: 76
- imports: 1
- exports: 1
- importance: 15
- tags: auth, tools
- exportedSymbols: useStalledAnimation
- functions: useStalledAnimation

## src/components/Spinner/utils.ts

- lines: 85
- imports: 2
- exports: 5
- importance: 13
- tags: (none)
- exportedSymbols: getDefaultCharacters, interpolateColor, toRGBColor, hueToRgb, parseRGB
- functions: getDefaultCharacters, interpolateColor, toRGBColor, hueToRgb, parseRGB

## src/components/Stats.tsx

- lines: 1228
- imports: 25
- exports: 1
- importance: 39
- tags: auth, mcp, state-memory
- exportedSymbols: Stats
- functions: formatPeakDay, getNextDateRange, createAllTimeStatsPromise, Stats, StatsContent, _temp, DateRangeSelector, OverviewTab, generateFunFactoid, ModelsTab, _temp1, _temp0, _temp9, _temp8, _temp7, ModelEntry, generateTokenChart, generateXAxisLabels, handleScreenshot, renderStatsToAnsi, renderOverviewToAnsi, renderModelsToAnsi

## src/components/StatusLine.tsx

- lines: 324
- imports: 29
- exports: 3
- importance: 42
- tags: auth, permissions, tools, state-memory
- exportedSymbols: statusLineShouldDisplay, getLastAssistantMessageId, StatusLine
- functions: statusLineShouldDisplay, buildStatusLineCommandInput, getLastAssistantMessageId, StatusLineInner

## src/components/StatusNotices.tsx

- lines: 55
- imports: 8
- exports: 1
- importance: 10
- tags: tools
- exportedSymbols: StatusNotices
- functions: StatusNotices

## src/components/StructuredDiff.tsx

- lines: 190
- imports: 10
- exports: 1
- importance: 14
- tags: state-memory
- exportedSymbols: StructuredDiff
- functions: computeGutterWidth, renderColorDiff, StructuredDiff

## src/components/StructuredDiff/colorDiff.ts

- lines: 38
- imports: 2
- exports: 5
- importance: 12
- tags: (none)
- exportedSymbols: getColorModuleUnavailableReason, expectColorDiff, expectColorFile, getSyntaxTheme, ColorModuleUnavailableReason
- functions: getColorModuleUnavailableReason, expectColorDiff, expectColorFile, getSyntaxTheme

## src/components/StructuredDiff/Fallback.tsx

- lines: 487
- imports: 7
- exports: 6
- importance: 37
- tags: auth
- exportedSymbols: StructuredDiffFallback, transformLinesToObjects, processAdjacentLines, calculateWordDiffs, numberDiffLines, LineObject
- functions: oldName, newName, StructuredDiffFallback, _temp, transformLinesToObjects, processAdjacentLines, calculateWordDiffs, generateWordDiffElements, only, formatDiff, numberDiffLines

## src/components/StructuredDiffList.tsx

- lines: 30
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: StructuredDiffList
- functions: StructuredDiffList

## src/components/TagTabs.tsx

- lines: 139
- imports: 4
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: TagTabs
- functions: getTabWidth, truncateTag, TagTabs

## src/components/TaskListV2.tsx

- lines: 378
- imports: 16
- exports: 1
- importance: 16
- tags: tools
- exportedSymbols: TaskListV2
- functions: byIdAsc, TaskListV2, getTaskIcon, TaskItem, _temp2, _temp

## src/components/tasks/AsyncAgentDetailDialog.tsx

- lines: 229
- imports: 18
- exports: 1
- importance: 36
- tags: auth, permissions, tools
- exportedSymbols: AsyncAgentDetailDialog
- functions: AsyncAgentDetailDialog

## src/components/tasks/BackgroundTask.tsx

- lines: 345
- imports: 12
- exports: 1
- importance: 16
- tags: mcp, state-memory
- exportedSymbols: BackgroundTask
- functions: BackgroundTask

## src/components/tasks/BackgroundTasksDialog.tsx

- lines: 652
- imports: 41
- exports: 1
- importance: 20
- tags: mcp, tools, state-memory
- exportedSymbols: BackgroundTasksDialog
- functions: getSelectableBackgroundTasks, BackgroundTasksDialog, killShellTask, killAgentTask, killTeammateTask, killDreamTask, killRemoteAgentTask, renderInputGuide, toListItem, Item, TeammateTaskGroups, _temp2, _temp

## src/components/tasks/BackgroundTaskStatus.tsx

- lines: 429
- imports: 17
- exports: 1
- importance: 17
- tags: tools
- exportedSymbols: BackgroundTaskStatus
- functions: BackgroundTaskStatus, _temp1, _temp0, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp, AgentPill, SummaryPill, getAgentThemeColor

## src/components/tasks/DreamDetailDialog.tsx

- lines: 251
- imports: 12
- exports: 1
- importance: 15
- tags: tools, state-memory
- exportedSymbols: DreamDetailDialog
- functions: DreamDetailDialog, _temp2, _temp

## src/components/tasks/InProcessTeammateDetailDialog.tsx

- lines: 266
- imports: 17
- exports: 1
- importance: 37
- tags: auth, permissions, tools
- exportedSymbols: InProcessTeammateDetailDialog
- functions: InProcessTeammateDetailDialog

## src/components/tasks/RemoteSessionDetailDialog.tsx

- lines: 904
- imports: 29
- exports: 2
- importance: 35
- tags: remote, query-loop, tools, state-memory
- exportedSymbols: formatToolUseSummary, RemoteSessionDetailDialog
- functions: formatToolUseSummary, UltraplanSessionDetail, StagePipeline, reviewCountsLine, ReviewSessionDetail, _temp, RemoteSessionDetailDialog, handleTeleport

## src/components/tasks/RemoteSessionProgress.tsx

- lines: 243
- imports: 9
- exports: 2
- importance: 28
- tags: auth, remote, mcp, state-memory
- exportedSymbols: formatReviewStageCounts, RemoteSessionProgress
- functions: formatReviewStageCounts, RainbowText, useSmoothCount, ReviewRainbowLine, RemoteSessionProgress, _temp

## src/components/tasks/renderToolActivity.tsx

- lines: 33
- imports: 6
- exports: 1
- importance: 8
- tags: tools
- exportedSymbols: renderToolActivity
- functions: renderToolActivity

## src/components/tasks/ShellDetailDialog.tsx

- lines: 404
- imports: 15
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: ShellDetailDialog
- functions: getTaskOutput, ShellDetailDialog, _temp, ShellOutputContent, _temp2

## src/components/tasks/ShellProgress.tsx

- lines: 87
- imports: 7
- exports: 2
- importance: 12
- tags: (none)
- exportedSymbols: TaskStatusText, ShellProgress
- functions: TaskStatusText, ShellProgress

## src/components/tasks/taskStatusUtils.tsx

- lines: 107
- imports: 7
- exports: 5
- importance: 18
- tags: (none)
- exportedSymbols: isTerminalStatus, getTaskStatusIcon, getTaskStatusColor, describeTeammateActivity, shouldHideTasksFooter
- functions: isTerminalStatus, getTaskStatusIcon, getTaskStatusColor, describeTeammateActivity, shouldHideTasksFooter

## src/components/TeammateViewHeader.tsx

- lines: 82
- imports: 8
- exports: 1
- importance: 11
- tags: state-memory
- exportedSymbols: TeammateViewHeader
- functions: TeammateViewHeader, _temp

## src/components/teams/TeamsDialog.tsx

- lines: 715
- imports: 30
- exports: 1
- importance: 30
- tags: permissions, tools, state-memory
- exportedSymbols: TeamsDialog
- classes: imports
- functions: TeamsDialog, getMaxIndex, TeamDetailView, TeammateListItem, TeammateDetailView, _temp2, _temp, killTeammate, viewTeammateOutput, toggleTeammateVisibility, hideTeammate, showTeammate, sendModeChangeToTeammate, cycleTeammateMode, cycleAllTeammateModes

## src/components/teams/TeamStatus.tsx

- lines: 80
- imports: 4
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: TeamStatus
- functions: TeamStatus, _temp2, _temp

## src/components/TeleportError.tsx

- lines: 189
- imports: 9
- exports: 3
- importance: 29
- tags: auth, mcp
- exportedSymbols: TeleportError, getTeleportErrors, TeleportLocalErrorType
- functions: TeleportError, _temp, getTeleportErrors

## src/components/TeleportProgress.tsx

- lines: 140
- imports: 8
- exports: 2
- importance: 13
- tags: state-memory
- exportedSymbols: TeleportProgress, teleportWithProgress
- functions: TeleportProgress, teleportWithProgress, from, TeleportProgressWrapper

## src/components/TeleportRepoMismatchDialog.tsx

- lines: 104
- imports: 8
- exports: 1
- importance: 11
- tags: mcp
- exportedSymbols: TeleportRepoMismatchDialog
- functions: TeleportRepoMismatchDialog, _temp

## src/components/TeleportResumeWrapper.tsx

- lines: 167
- imports: 10
- exports: 1
- importance: 14
- tags: state-memory
- exportedSymbols: TeleportResumeWrapper
- functions: TeleportResumeWrapper

## src/components/TeleportStash.tsx

- lines: 116
- imports: 9
- exports: 1
- importance: 12
- tags: (none)
- exportedSymbols: TeleportStash
- functions: TeleportStash

## src/components/TextInput.tsx

- lines: 124
- imports: 13
- exports: 2
- importance: 15
- tags: (none)
- exportedSymbols: Props, default
- functions: TextInput

## src/components/ThemePicker.tsx

- lines: 333
- imports: 18
- exports: 2
- importance: 28
- tags: permissions
- exportedSymbols: ThemePicker, ThemePickerProps
- functions: ThemePicker, greet, _temp2, _temp

## src/components/ThinkingToggle.tsx

- lines: 153
- imports: 11
- exports: 2
- importance: 25
- tags: permissions, mcp, state-memory
- exportedSymbols: ThinkingToggle, Props
- functions: ThinkingToggle, handleSelectChange, _temp

## src/components/TokenWarning.tsx

- lines: 179
- imports: 9
- exports: 1
- importance: 25
- tags: auth
- exportedSymbols: TokenWarning
- functions: CollapseLabel, TokenWarning

## src/components/ToolUseLoader.tsx

- lines: 42
- imports: 5
- exports: 1
- importance: 7
- tags: tools
- exportedSymbols: ToolUseLoader
- functions: ToolUseLoader

## src/components/TrustDialog/TrustDialog.tsx

- lines: 290
- imports: 18
- exports: 1
- importance: 25
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: TrustDialog
- functions: TrustDialog, onChange, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/components/TrustDialog/utils.ts

- lines: 246
- imports: 6
- exports: 8
- importance: 35
- tags: permissions, tools
- exportedSymbols: getHooksSources, getBashPermissionSources, formatListWithAnd, getOtelHeadersHelperSources, getApiKeyHelperSources, getAwsCommandsSources, getGcpCommandsSources, getDangerousEnvVarsSources
- functions: hasHooks, getHooksSources, hasBashPermission, getBashPermissionSources, formatListWithAnd, hasOtelHeadersHelper, getOtelHeadersHelperSources, hasApiKeyHelper, getApiKeyHelperSources, hasAwsCommands, getAwsCommandsSources, hasGcpCommands, getGcpCommandsSources, hasDangerousEnvVars, getDangerousEnvVarsSources

## src/components/ui/OrderedList.tsx

- lines: 71
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: OrderedList
- functions: OrderedListComponent

## src/components/ui/OrderedListItem.tsx

- lines: 45
- imports: 3
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: OrderedListItem, OrderedListItemContext
- functions: OrderedListItem

## src/components/ui/TreeSelect.tsx

- lines: 397
- imports: 5
- exports: 3
- importance: 15
- tags: (none)
- exportedSymbols: TreeSelect, TreeNode, TreeSelectProps
- functions: for, for, TreeSelect, traverse, _temp2, _temp

## src/components/ValidationErrorsList.tsx

- lines: 148
- imports: 6
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: ValidationErrorsList
- functions: buildNestedTree, ValidationErrorsList, _temp3, _temp2, _temp

## src/components/VimTextInput.tsx

- lines: 140
- imports: 9
- exports: 2
- importance: 14
- tags: (none)
- exportedSymbols: Props, default
- functions: VimTextInput, _temp

## src/components/VirtualMessageList.tsx

- lines: 1082
- imports: 16
- exports: 3
- importance: 41
- tags: auth, mcp, tools, state-memory
- exportedSymbols: VirtualMessageList, StickyPrompt, JumpHandle
- functions: defaultExtractSearchText, stickyPromptText, computeStickyPromptText, VirtualItem, VirtualMessageList, targetFor, highlight, jump, step, StickyTracker

## src/components/wizard/index.ts

- lines: 10
- imports: 0
- exports: 0
- importance: 0
- tags: (none)

## src/components/wizard/useWizard.ts

- lines: 14
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: useWizard
- functions: useWizard

## src/components/wizard/WizardDialogLayout.tsx

- lines: 65
- imports: 6
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: WizardDialogLayout
- functions: WizardDialogLayout

## src/components/wizard/WizardNavigationFooter.tsx

- lines: 24
- imports: 6
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: WizardNavigationFooter
- functions: WizardNavigationFooter

## src/components/wizard/WizardProvider.tsx

- lines: 213
- imports: 4
- exports: 2
- importance: 10
- tags: (none)
- exportedSymbols: WizardProvider, WizardContext
- functions: WizardProvider, _temp3, _temp2, _temp

## src/components/WorkflowMultiselectDialog.tsx

- lines: 128
- imports: 10
- exports: 1
- importance: 13
- tags: mcp
- exportedSymbols: WorkflowMultiselectDialog
- functions: renderInputGuide, WorkflowMultiselectDialog, _temp

## src/components/WorktreeExitDialog.tsx

- lines: 231
- imports: 12
- exports: 1
- importance: 14
- tags: state-memory
- exportedSymbols: WorktreeExitDialog
- functions: recordWorktreeExit, WorktreeExitDialog, loadChanges, handleSelect, handleCancel

## src/constants/apiLimits.ts

- lines: 95
- imports: 0
- exports: 11
- importance: 19
- tags: tools
- topComment: =============================================================================
- exportedSymbols: API_IMAGE_MAX_BASE64_SIZE, IMAGE_TARGET_RAW_SIZE, IMAGE_MAX_WIDTH, IMAGE_MAX_HEIGHT, PDF_TARGET_RAW_SIZE, API_PDF_MAX_PAGES, PDF_EXTRACT_SIZE_THRESHOLD, PDF_MAX_EXTRACT_SIZE, PDF_MAX_PAGES_PER_READ, PDF_AT_MENTION_INLINE_THRESHOLD, API_MAX_MEDIA_PER_REQUEST

## src/constants/betas.ts

- lines: 53
- imports: 1
- exports: 20
- importance: 31
- tags: auth, tools, state-memory, cost-budget
- exportedSymbols: CLAUDE_CODE_20250219_BETA_HEADER, INTERLEAVED_THINKING_BETA_HEADER, CONTEXT_1M_BETA_HEADER, CONTEXT_MANAGEMENT_BETA_HEADER, STRUCTURED_OUTPUTS_BETA_HEADER, WEB_SEARCH_BETA_HEADER, TOOL_SEARCH_BETA_HEADER_1P, TOOL_SEARCH_BETA_HEADER_3P, EFFORT_BETA_HEADER, TASK_BUDGETS_BETA_HEADER, PROMPT_CACHING_SCOPE_BETA_HEADER, FAST_MODE_BETA_HEADER, REDACT_THINKING_BETA_HEADER, TOKEN_EFFICIENT_TOOLS_BETA_HEADER, SUMMARIZE_CONNECTOR_TEXT_BETA_HEADER, AFK_MODE_BETA_HEADER, CLI_INTERNAL_BETA_HEADER, ADVISOR_BETA_HEADER, BEDROCK_EXTRA_PARAMS_HEADERS, VERTEX_COUNT_TOKENS_ALLOWED_BETAS

## src/constants/common.ts

- lines: 34
- imports: 1
- exports: 3
- importance: 7
- tags: tools, state-memory
- exportedSymbols: getLocalISODate, getLocalMonthYear, getSessionStartDate
- functions: getLocalISODate, getLocalMonthYear

## src/constants/cyberRiskInstruction.ts

- lines: 25
- imports: 0
- exports: 1
- importance: 2
- tags: tools
- exportedSymbols: CYBER_RISK_INSTRUCTION

## src/constants/errorIds.ts

- lines: 16
- imports: 0
- exports: 1
- importance: 12
- tags: query-loop, tools
- exportedSymbols: E_TOOL_USE_SUMMARY_GENERATION_FAILED

## src/constants/figures.ts

- lines: 46
- imports: 1
- exports: 25
- importance: 19
- tags: bridge, mcp, state-memory
- exportedSymbols: BLACK_CIRCLE, BULLET_OPERATOR, TEARDROP_ASTERISK, UP_ARROW, DOWN_ARROW, LIGHTNING_BOLT, EFFORT_LOW, EFFORT_MEDIUM, EFFORT_HIGH, EFFORT_MAX, PLAY_ICON, PAUSE_ICON, REFRESH_ARROW, CHANNEL_ARROW, INJECTED_ARROW, FORK_GLYPH, DIAMOND_OPEN, DIAMOND_FILLED, REFERENCE_MARK, FLAG_ICON, BLOCKQUOTE_BAR, HEAVY_HORIZONTAL, BRIDGE_SPINNER_FRAMES, BRIDGE_READY_INDICATOR, BRIDGE_FAILED_INDICATOR

## src/constants/files.ts

- lines: 157
- imports: 0
- exports: 3
- importance: 7
- tags: tools
- exportedSymbols: hasBinaryExtension, isBinaryContent, BINARY_EXTENSIONS
- functions: hasBinaryExtension, isBinaryContent

## src/constants/github-app.ts

- lines: 145
- imports: 0
- exports: 5
- importance: 33
- tags: auth, permissions, tools
- exportedSymbols: PR_TITLE, GITHUB_ACTION_SETUP_DOCS_URL, WORKFLOW_CONTENT, PR_BODY, CODE_REVIEW_PLUGIN_WORKFLOW_CONTENT

## src/constants/keys.ts

- lines: 12
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: getGrowthBookClientKey
- functions: getGrowthBookClientKey

## src/constants/messages.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 2
- tags: (none)
- exportedSymbols: NO_CONTENT_MESSAGE

## src/constants/oauth.ts

- lines: 235
- imports: 1
- exports: 9
- importance: 33
- tags: auth, mcp, tools, state-memory
- exportedSymbols: fileSuffixForOauthConfig, getOauthConfig, CLAUDE_AI_INFERENCE_SCOPE, CLAUDE_AI_PROFILE_SCOPE, OAUTH_BETA_HEADER, CONSOLE_OAUTH_SCOPES, CLAUDE_AI_OAUTH_SCOPES, ALL_OAUTH_SCOPES, MCP_CLIENT_METADATA_URL
- functions: getOauthConfigType, fileSuffixForOauthConfig, getLocalOauthConfig, getOauthConfig

## src/constants/outputStyles.ts

- lines: 217
- imports: 9
- exports: 8
- importance: 27
- tags: tools
- exportedSymbols: clearAllOutputStylesCache, getOutputStyleConfig, hasCustomOutputStyle, DEFAULT_OUTPUT_STYLE_NAME, OUTPUT_STYLE_CONFIG, getAllOutputStyles, OutputStyleConfig, OutputStyles
- functions: should, as, getAllOutputStyles, clearAllOutputStylesCache, getOutputStyleConfig, hasCustomOutputStyle

## src/constants/product.ts

- lines: 77
- imports: 0
- exports: 8
- importance: 16
- tags: bridge, state-memory
- exportedSymbols: isRemoteSessionStaging, isRemoteSessionLocal, getClaudeAiBaseUrl, getRemoteSessionUrl, PRODUCT_URL, CLAUDE_AI_BASE_URL, CLAUDE_AI_STAGING_BASE_URL, CLAUDE_AI_LOCAL_BASE_URL
- functions: isRemoteSessionStaging, isRemoteSessionLocal, getClaudeAiBaseUrl, getRemoteSessionUrl

## src/constants/prompts.ts

- lines: 915
- imports: 44
- exports: 10
- importance: 61
- tags: auth, permissions, mcp, tools, commands, state-memory, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: prependBullets, getSystemPrompt, computeEnvInfo, computeSimpleEnvInfo, getUnameSR, enhanceSystemPromptWithEnvDetails, getScratchpadInstructions, CLAUDE_CODE_DOCS_MAP_URL, SYSTEM_PROMPT_DYNAMIC_BOUNDARY, DEFAULT_AGENT_PROMPT
- functions: ref, getHooksSection, getSystemRemindersSection, getAntModelOverrideSection, getLanguageSection, getOutputStyleSection, getMcpInstructionsSection, prependBullets, getSimpleIntroSection, getSimpleSystemSection, getSimpleDoingTasksSection, getActionsSection, getUsingYourToolsSection, getAgentToolSection, getDiscoverSkillsGuidance, getSessionSpecificGuidanceSection, getOutputEfficiencySection, getSimpleToneAndStyleSection, getSystemPrompt, getMcpInstructions, computeEnvInfo, computeSimpleEnvInfo, getKnowledgeCutoff, getShellInfoLine, getUnameSR, enhanceSystemPromptWithEnvDetails, signature, getScratchpadInstructions, getFunctionResultClearingSection, getBriefSection, getProactiveSection

## src/constants/spinnerVerbs.ts

- lines: 205
- imports: 1
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: getSpinnerVerbs, SPINNER_VERBS
- functions: getSpinnerVerbs

## src/constants/system.ts

- lines: 96
- imports: 6
- exports: 4
- importance: 27
- tags: auth
- topComment: Critical system constants extracted to break circular dependencies
- exportedSymbols: getCLISyspromptPrefix, getAttributionHeader, CLI_SYSPROMPT_PREFIXES, CLISyspromptPrefix
- functions: getCLISyspromptPrefix, isAttributionHeaderEnabled, getAttributionHeader

## src/constants/systemPromptSections.ts

- lines: 69
- imports: 1
- exports: 4
- importance: 9
- tags: (none)
- exportedSymbols: systemPromptSection, DANGEROUS_uncachedSystemPromptSection, resolveSystemPromptSections, clearSystemPromptSections
- functions: systemPromptSection, DANGEROUS_uncachedSystemPromptSection, resolveSystemPromptSections, clearSystemPromptSections

## src/constants/toolLimits.ts

- lines: 57
- imports: 0
- exports: 6
- importance: 24
- tags: auth, tools, cost-budget
- exportedSymbols: DEFAULT_MAX_RESULT_SIZE_CHARS, MAX_TOOL_RESULT_TOKENS, BYTES_PER_TOKEN, MAX_TOOL_RESULT_BYTES, MAX_TOOL_RESULTS_PER_MESSAGE_CHARS, TOOL_SUMMARY_MAX_LENGTH

## src/constants/tools.ts

- lines: 113
- imports: 29
- exports: 5
- importance: 21
- tags: mcp, tools
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: ALL_AGENT_DISALLOWED_TOOLS, CUSTOM_AGENT_DISALLOWED_TOOLS, ASYNC_AGENT_ALLOWED_TOOLS, IN_PROCESS_TEAMMATE_ALLOWED_TOOLS, COORDINATOR_MODE_ALLOWED_TOOLS

## src/constants/turnCompletionVerbs.ts

- lines: 13
- imports: 0
- exports: 1
- importance: 2
- tags: (none)
- topComment: Past tense verbs for turn completion messages
- exportedSymbols: TURN_COMPLETION_VERBS

## src/constants/xml.ts

- lines: 87
- imports: 0
- exports: 33
- importance: 29
- tags: query-loop, tools, commands, state-memory
- topComment: XML tag names used to mark skill/command metadata in messages
- exportedSymbols: COMMAND_NAME_TAG, COMMAND_MESSAGE_TAG, COMMAND_ARGS_TAG, BASH_INPUT_TAG, BASH_STDOUT_TAG, BASH_STDERR_TAG, LOCAL_COMMAND_STDOUT_TAG, LOCAL_COMMAND_STDERR_TAG, LOCAL_COMMAND_CAVEAT_TAG, TERMINAL_OUTPUT_TAGS, TICK_TAG, TASK_NOTIFICATION_TAG, TASK_ID_TAG, TOOL_USE_ID_TAG, TASK_TYPE_TAG, OUTPUT_FILE_TAG, STATUS_TAG, SUMMARY_TAG, REASON_TAG, WORKTREE_TAG, WORKTREE_PATH_TAG, WORKTREE_BRANCH_TAG, ULTRAPLAN_TAG, REMOTE_REVIEW_TAG, REMOTE_REVIEW_PROGRESS_TAG, TEAMMATE_MESSAGE_TAG, CHANNEL_MESSAGE_TAG, CHANNEL_TAG, CROSS_SESSION_MESSAGE_TAG, FORK_BOILERPLATE_TAG, FORK_DIRECTIVE_PREFIX, COMMON_HELP_ARGS, COMMON_INFO_ARGS

## src/context.ts

- lines: 190
- imports: 11
- exports: 5
- importance: 32
- tags: permissions, tools
- exportedSymbols: getSystemPromptInjection, setSystemPromptInjection, getGitStatus, getSystemContext, getUserContext
- functions: getSystemPromptInjection, setSystemPromptInjection

## src/context/fpsMetrics.tsx

- lines: 30
- imports: 3
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: FpsMetricsProvider, useFpsMetrics
- functions: FpsMetricsProvider, useFpsMetrics

## src/context/mailbox.tsx

- lines: 38
- imports: 3
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: MailboxProvider, useMailbox
- functions: MailboxProvider, useMailbox

## src/context/modalContext.tsx

- lines: 58
- imports: 3
- exports: 4
- importance: 11
- tags: state-memory
- exportedSymbols: useIsInsideModal, useModalOrTerminalSize, useModalScrollRef, ModalContext
- functions: useIsInsideModal, useModalOrTerminalSize, useModalScrollRef

## src/context/notifications.tsx

- lines: 240
- imports: 4
- exports: 3
- importance: 13
- tags: mcp
- exportedSymbols: useNotifications, getNext, Notification
- functions: useNotifications, getNext

## src/context/overlayContext.tsx

- lines: 151
- imports: 4
- exports: 3
- importance: 11
- tags: (none)
- exportedSymbols: useRegisterOverlay, useIsOverlayActive, useIsModalOverlayActive
- functions: useSelectInput, useRegisterOverlay, CancelRequestHandler, _temp, useIsOverlayActive, _temp2, useIsModalOverlayActive, _temp3

## src/context/promptOverlayContext.tsx

- lines: 125
- imports: 3
- exports: 6
- importance: 16
- tags: (none)
- exportedSymbols: PromptOverlayProvider, usePromptOverlay, usePromptOverlayDialog, useSetPromptOverlay, useSetPromptOverlayDialog, PromptOverlayData
- functions: PromptOverlayProvider, usePromptOverlay, usePromptOverlayDialog, useSetPromptOverlay, useSetPromptOverlayDialog

## src/context/QueuedMessageContext.tsx

- lines: 63
- imports: 3
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: useQueuedMessage, QueuedMessageProvider
- functions: useQueuedMessage, QueuedMessageProvider

## src/context/stats.tsx

- lines: 220
- imports: 3
- exports: 9
- importance: 23
- tags: mcp, state-memory
- exportedSymbols: createStatsStore, StatsProvider, useStats, useCounter, useGauge, useTimer, useSet, StatsContext, StatsStore
- functions: percentile, createStatsStore, StatsProvider, useStats, useCounter, useGauge, useTimer, useSet

## src/context/voice.tsx

- lines: 88
- imports: 3
- exports: 5
- importance: 14
- tags: state-memory
- exportedSymbols: VoiceProvider, useVoiceState, useSetVoiceState, useGetVoiceState, VoiceState
- functions: VoiceProvider, _temp, useVoiceStore, useVoiceState, useSetVoiceState, useGetVoiceState

## src/coordinator/coordinatorMode.ts

- lines: 370
- imports: 14
- exports: 4
- importance: 54
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: isCoordinatorMode, matchSessionMode, getCoordinatorUserContext, getCoordinatorSystemPrompt
- functions: isScratchpadGateEnabled, isCoordinatorMode, matchSessionMode, getCoordinatorUserContext, getCoordinatorSystemPrompt

## src/cost-tracker.ts

- lines: 324
- imports: 13
- exports: 5
- importance: 46
- tags: auth, query-loop, tools, state-memory, cost-budget
- exportedSymbols: getStoredSessionCosts, restoreCostStateForSession, saveCurrentSessionCosts, formatTotalCost, addToTotalSessionCost
- functions: getStoredSessionCosts, restoreCostStateForSession, saveCurrentSessionCosts, formatCost, formatModelUsage, formatTotalCost, round, addToTotalModelUsage, addToTotalSessionCost

## src/costHook.ts

- lines: 23
- imports: 4
- exports: 1
- importance: 6
- tags: state-memory, cost-budget
- exportedSymbols: useCostSummary
- functions: useCostSummary

## src/dialogLaunchers.tsx

- lines: 133
- imports: 11
- exports: 7
- importance: 25
- tags: bridge, tools, state-memory
- exportedSymbols: launchSnapshotUpdateDialog, launchInvalidSettingsDialog, launchAssistantSessionChooser, launchAssistantInstallWizard, launchTeleportResumeWrapper, launchTeleportRepoMismatchDialog, launchResumeChooser
- functions: launchSnapshotUpdateDialog, launchInvalidSettingsDialog, launchAssistantSessionChooser, launchAssistantInstallWizard, launchTeleportResumeWrapper, launchTeleportRepoMismatchDialog, launchResumeChooser

## src/entrypoints/agentSdkTypes.ts

- lines: 444
- imports: 3
- exports: 25
- importance: 48
- tags: auth, permissions, bridge, remote, mcp, tools, state-memory
- exportedSymbols: tool, createSdkMcpServer, query, query, query, unstable_v2_createSession, unstable_v2_resumeSession, unstable_v2_prompt, getSessionMessages, listSessions, getSessionInfo, renameSession, tagSession, forkSession, watchScheduledTasks, buildMissedTaskNotification, connectRemoteControl, AbortError, CronTask, CronJitterConfig, ScheduledTaskEvent, ScheduledTasksHandle, InboundPrompt, ConnectRemoteControlOptions, RemoteControlHandle
- classes: AbortError
- functions: signatures, tool, createSdkMcpServer, query, query, query, unstable_v2_createSession, unstable_v2_resumeSession, for, unstable_v2_prompt, getSessionMessages, listSessions, getSessionInfo, renameSession, tagSession, forkSession, watchScheduledTasks, buildMissedTaskNotification, connectRemoteControl

## src/entrypoints/cli.tsx

- lines: 303
- imports: 1
- exports: 0
- importance: 16
- tags: auth, bridge, mcp, tools, state-memory
- functions: main

## src/entrypoints/init.ts

- lines: 341
- imports: 30
- exports: 2
- importance: 40
- tags: auth, permissions, state-memory
- exportedSymbols: initializeTelemetryAfterTrust, init
- functions: is, initializeTelemetryAfterTrust, doInitializeTelemetry, setMeterState, for

## src/entrypoints/mcp.ts

- lines: 197
- imports: 18
- exports: 1
- importance: 24
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: startMCPServer
- functions: startMCPServer, runServer

## src/entrypoints/sandboxTypes.ts

- lines: 157
- imports: 2
- exports: 7
- importance: 27
- tags: permissions, tools
- exportedSymbols: SandboxNetworkConfigSchema, SandboxFilesystemConfigSchema, SandboxSettingsSchema, SandboxSettings, SandboxNetworkConfig, SandboxFilesystemConfig, SandboxIgnoreViolations

## src/entrypoints/sdk/controlSchemas.ts

- lines: 664
- imports: 3
- exports: 42
- importance: 61
- tags: auth, permissions, remote, mcp, query-loop, tools, state-memory
- exportedSymbols: JSONRPCMessagePlaceholder, SDKHookCallbackMatcherSchema, SDKControlInitializeRequestSchema, SDKControlInitializeResponseSchema, SDKControlInterruptRequestSchema, SDKControlPermissionRequestSchema, SDKControlSetPermissionModeRequestSchema, SDKControlSetModelRequestSchema, SDKControlSetMaxThinkingTokensRequestSchema, SDKControlMcpStatusRequestSchema, SDKControlMcpStatusResponseSchema, SDKControlGetContextUsageRequestSchema, SDKControlGetContextUsageResponseSchema, SDKControlRewindFilesRequestSchema, SDKControlRewindFilesResponseSchema, SDKControlCancelAsyncMessageRequestSchema, SDKControlCancelAsyncMessageResponseSchema, SDKControlSeedReadStateRequestSchema, SDKHookCallbackRequestSchema, SDKControlMcpMessageRequestSchema, SDKControlMcpSetServersRequestSchema, SDKControlMcpSetServersResponseSchema, SDKControlReloadPluginsRequestSchema, SDKControlReloadPluginsResponseSchema, SDKControlMcpReconnectRequestSchema, SDKControlMcpToggleRequestSchema, SDKControlStopTaskRequestSchema, SDKControlApplyFlagSettingsRequestSchema, SDKControlGetSettingsRequestSchema, SDKControlGetSettingsResponseSchema, SDKControlElicitationRequestSchema, SDKControlElicitationResponseSchema, SDKControlRequestInnerSchema, SDKControlRequestSchema, ControlResponseSchema, ControlErrorResponseSchema, SDKControlResponseSchema, SDKControlCancelRequestSchema, SDKKeepAliveMessageSchema, SDKUpdateEnvironmentVariablesMessageSchema

## src/entrypoints/sdk/coreSchemas.ts

- lines: 1890
- imports: 2
- exports: 135
- importance: 75
- tags: auth, permissions, mcp, query-loop, tools, commands, state-memory, cost-budget
- exportedSymbols: ModelUsageSchema, OutputFormatTypeSchema, BaseOutputFormatSchema, JsonSchemaOutputFormatSchema, OutputFormatSchema, ApiKeySourceSchema, ConfigScopeSchema, SdkBetaSchema, ThinkingAdaptiveSchema, ThinkingEnabledSchema, ThinkingDisabledSchema, ThinkingConfigSchema, McpStdioServerConfigSchema, McpSSEServerConfigSchema, McpHttpServerConfigSchema, McpSdkServerConfigSchema, McpServerConfigForProcessTransportSchema, McpClaudeAIProxyServerConfigSchema, McpServerStatusConfigSchema, McpServerStatusSchema, McpSetServersResultSchema, PermissionUpdateDestinationSchema, PermissionBehaviorSchema, PermissionRuleValueSchema, PermissionUpdateSchema, PermissionDecisionClassificationSchema, PermissionResultSchema, PermissionModeSchema, HOOK_EVENTS, HookEventSchema, BaseHookInputSchema, PreToolUseHookInputSchema, PermissionRequestHookInputSchema, PostToolUseHookInputSchema, PostToolUseFailureHookInputSchema, PermissionDeniedHookInputSchema, NotificationHookInputSchema, UserPromptSubmitHookInputSchema, SessionStartHookInputSchema, SetupHookInputSchema

## src/entrypoints/sdk/coreTypes.ts

- lines: 63
- imports: 0
- exports: 2
- importance: 14
- tags: permissions, tools, state-memory
- topComment: SDK Core Types - Common serializable types used by both SDK consumers and SDK builders.
- exportedSymbols: HOOK_EVENTS, EXIT_REASONS

## src/history.ts

- lines: 465
- imports: 13
- exports: 9
- importance: 33
- tags: tools, state-memory
- exportedSymbols: getPastedTextRefNumLines, formatPastedTextRef, formatImageRef, parseReferences, expandPastedTextRefs, addToHistory, clearPendingHistoryEntries, removeLastFromHistory, TimestampedHistoryEntry
- functions: getPastedTextRefNumLines, formatPastedTextRef, formatImageRef, parseReferences, expandPastedTextRefs, deserializeLogEntry, resolveStoredPastedContent, logEntryToHistoryEntry, immediateFlushHistory, flushPromptHistory, addToPromptHistory, addToHistory, clearPendingHistoryEntries, removeLastFromHistory

## src/hooks/fileSuggestions.ts

- lines: 812
- imports: 21
- exports: 10
- importance: 48
- tags: state-memory, hooks-security
- exportedSymbols: clearFileSuggestionCaches, pathListSignature, getDirectoryNames, getDirectoryNamesAsync, getPathsForSuggestions, findLongestCommonPrefix, startBackgroundCacheRefresh, generateFileSuggestions, applyFileSuggestion, onIndexBuildComplete
- functions: getFileIndex, clearFileSuggestionCaches, pathListSignature, getGitIndexMtime, normalizeGitPaths, mergeUntrackedIntoNormalizedCache, loadRipgrepIgnorePatterns, getFilesUsingGit, void, collects, getDirectoryNames, getDirectoryNamesAsync, collectDirectoryNames, getClaudeConfigFiles, getProjectFiles, getPathsForSuggestions, findCommonPrefix, findLongestCommonPrefix, createFileSuggestionItem, findMatchingFiles, startBackgroundCacheRefresh, getTopLevelPaths, generateFileSuggestions, applyFileSuggestion

## src/hooks/notifs/useAutoModeUnavailableNotification.ts

- lines: 57
- imports: 8
- exports: 1
- importance: 30
- tags: permissions, tools, state-memory, hooks-security
- exportedSymbols: useAutoModeUnavailableNotification
- functions: useAutoModeUnavailableNotification

## src/hooks/notifs/useCanSwitchToExistingSubscription.tsx

- lines: 60
- imports: 7
- exports: 1
- importance: 31
- tags: auth, hooks-security
- exportedSymbols: useCanSwitchToExistingSubscription
- functions: useCanSwitchToExistingSubscription, _temp2, _temp, getExistingClaudeSubscription

## src/hooks/notifs/useDeprecationWarningNotification.tsx

- lines: 44
- imports: 5
- exports: 1
- importance: 17
- tags: mcp, hooks-security
- exportedSymbols: useDeprecationWarningNotification
- functions: useDeprecationWarningNotification

## src/hooks/notifs/useFastModeNotification.tsx

- lines: 162
- imports: 7
- exports: 1
- importance: 21
- tags: hooks-security
- exportedSymbols: useFastModeNotification
- functions: useFastModeNotification, _temp3, _temp2, _temp, getCooldownMessage

## src/hooks/notifs/useIDEStatusIndicator.tsx

- lines: 186
- imports: 10
- exports: 1
- importance: 24
- tags: mcp, hooks-security
- exportedSymbols: useIDEStatusIndicator
- functions: useIDEStatusIndicator, _temp2, _temp

## src/hooks/notifs/useInstallMessages.tsx

- lines: 26
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: useInstallMessages
- functions: useInstallMessages, _temp2, _temp

## src/hooks/notifs/useLspInitializationNotification.tsx

- lines: 143
- imports: 10
- exports: 1
- importance: 23
- tags: mcp, tools, hooks-security
- exportedSymbols: useLspInitializationNotification
- functions: useLspInitializationNotification, _temp2, _temp

## src/hooks/notifs/useMcpConnectivityStatus.tsx

- lines: 88
- imports: 8
- exports: 1
- importance: 21
- tags: mcp, hooks-security
- exportedSymbols: useMcpConnectivityStatus
- functions: useMcpConnectivityStatus, _temp4, _temp3, _temp2, _temp

## src/hooks/notifs/useModelMigrationNotifications.tsx

- lines: 52
- imports: 3
- exports: 1
- importance: 15
- tags: hooks-security
- exportedSymbols: useModelMigrationNotifications
- functions: useModelMigrationNotifications, _temp, recent

## src/hooks/notifs/useNpmDeprecationNotification.tsx

- lines: 25
- imports: 4
- exports: 1
- importance: 16
- tags: hooks-security
- exportedSymbols: useNpmDeprecationNotification
- functions: useNpmDeprecationNotification, _temp

## src/hooks/notifs/usePluginAutoupdateNotification.tsx

- lines: 83
- imports: 8
- exports: 1
- importance: 21
- tags: hooks-security
- exportedSymbols: usePluginAutoupdateNotification
- functions: usePluginAutoupdateNotification, _temp

## src/hooks/notifs/usePluginInstallationStatus.tsx

- lines: 128
- imports: 9
- exports: 1
- importance: 22
- tags: hooks-security
- exportedSymbols: usePluginInstallationStatus
- functions: usePluginInstallationStatus, _temp3, _temp2, _temp

## src/hooks/notifs/useRateLimitWarningNotification.tsx

- lines: 114
- imports: 10
- exports: 1
- importance: 23
- tags: hooks-security
- exportedSymbols: useRateLimitWarningNotification
- functions: useRateLimitWarningNotification

## src/hooks/notifs/useSettingsErrors.tsx

- lines: 69
- imports: 7
- exports: 1
- importance: 19
- tags: hooks-security
- exportedSymbols: useSettingsErrors
- functions: useSettingsErrors, _temp

## src/hooks/notifs/useStartupNotification.ts

- lines: 42
- imports: 4
- exports: 1
- importance: 16
- tags: state-memory, hooks-security
- exportedSymbols: useStartupNotification
- functions: useStartupNotification

## src/hooks/notifs/useTeammateShutdownNotification.ts

- lines: 79
- imports: 5
- exports: 1
- importance: 17
- tags: hooks-security
- exportedSymbols: useTeammateLifecycleNotification
- functions: parseCount, foldSpawn, makeSpawnNotif, foldShutdown, makeShutdownNotif, useTeammateLifecycleNotification

## src/hooks/renderPlaceholder.ts

- lines: 52
- imports: 1
- exports: 1
- importance: 13
- tags: hooks-security
- exportedSymbols: renderPlaceholder
- functions: renderPlaceholder

## src/hooks/toolPermission/handlers/coordinatorHandler.ts

- lines: 66
- imports: 6
- exports: 0
- importance: 26
- tags: permissions, tools, hooks-security
- functions: handleCoordinatorPermission

## src/hooks/toolPermission/handlers/interactiveHandler.ts

- lines: 537
- imports: 19
- exports: 0
- importance: 36
- tags: permissions, bridge, mcp, tools, state-memory, cost-budget, hooks-security
- functions: does, handleInteractivePermission, clearClassifierIndicator

## src/hooks/toolPermission/handlers/swarmWorkerHandler.ts

- lines: 160
- imports: 12
- exports: 0
- importance: 32
- tags: permissions, tools, hooks-security
- functions: handleSwarmWorkerPermission

## src/hooks/toolPermission/PermissionContext.ts

- lines: 389
- imports: 18
- exports: 0
- importance: 44
- tags: permissions, bridge, query-loop, tools, state-memory, hooks-security
- functions: createResolveOnce, createPermissionContext, createPermissionQueueOps

## src/hooks/toolPermission/permissionLogging.ts

- lines: 239
- imports: 9
- exports: 0
- importance: 41
- tags: permissions, query-loop, tools, state-memory, hooks-security
- topComment: Centralized analytics/telemetry logging for tool permission decisions.
- functions: isCodeEditingTool, buildCodeEditToolAttributes, sourceToString, baseMetadata, logApprovalEvent, logRejectionEvent, logPermissionDecision

## src/hooks/unifiedSuggestions.ts

- lines: 203
- imports: 10
- exports: 1
- importance: 24
- tags: mcp, tools, hooks-security
- exportedSymbols: generateUnifiedSuggestions
- functions: createSuggestionFromSource, truncateDescription, generateAgentSuggestions, generateUnifiedSuggestions

## src/hooks/useAfterFirstRender.ts

- lines: 18
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: useAfterFirstRender
- functions: useAfterFirstRender

## src/hooks/useApiKeyVerification.ts

- lines: 85
- imports: 4
- exports: 3
- importance: 21
- tags: state-memory, hooks-security
- exportedSymbols: useApiKeyVerification, VerificationStatus, ApiKeyVerificationResult
- functions: useApiKeyVerification

## src/hooks/useArrowKeyHistory.tsx

- lines: 229
- imports: 9
- exports: 2
- importance: 25
- tags: state-memory, hooks-security
- exportedSymbols: useArrowKeyHistory, HistoryMode
- functions: loadHistoryEntries, useArrowKeyHistory

## src/hooks/useAssistantHistory.ts

- lines: 251
- imports: 8
- exports: 1
- importance: 23
- tags: tools, state-memory, cost-budget, hooks-security
- exportedSymbols: useAssistantHistory
- functions: pageToMessages, useAssistantHistory, mkSentinel

## src/hooks/useAwaySummary.ts

- lines: 126
- imports: 7
- exports: 1
- importance: 20
- tags: hooks-security
- exportedSymbols: useAwaySummary
- functions: hasSummarySinceLastUserTurn, useAwaySummary, clearTimer, abortInFlight, generate, onBlurTimerFire, onFocusChange

## src/hooks/useBackgroundTaskNavigation.ts

- lines: 252
- imports: 8
- exports: 1
- importance: 23
- tags: bridge, state-memory, hooks-security
- exportedSymbols: useBackgroundTaskNavigation
- functions: stepTeammateSelection, useBackgroundTaskNavigation

## src/hooks/useBlink.ts

- lines: 35
- imports: 1
- exports: 1
- importance: 13
- tags: hooks-security
- exportedSymbols: useBlink
- functions: BlinkingDot, useBlink

## src/hooks/useCancelRequest.ts

- lines: 277
- imports: 18
- exports: 1
- importance: 35
- tags: permissions, tools, state-memory, hooks-security
- exportedSymbols: CancelRequestHandler
- functions: CancelRequestHandler

## src/hooks/useCanUseTool.tsx

- lines: 204
- imports: 26
- exports: 2
- importance: 36
- tags: permissions, bridge, tools, state-memory, hooks-security
- exportedSymbols: CanUseToolFn, default
- functions: useCanUseTool, _temp2, _temp

## src/hooks/useChromeExtensionNotification.tsx

- lines: 50
- imports: 6
- exports: 1
- importance: 18
- tags: hooks-security
- exportedSymbols: useChromeExtensionNotification
- functions: getChromeFlag, useChromeExtensionNotification, _temp

## src/hooks/useClaudeCodeHintRecommendation.tsx

- lines: 129
- imports: 9
- exports: 1
- importance: 22
- tags: state-memory, hooks-security
- exportedSymbols: useClaudeCodeHintRecommendation
- functions: useClaudeCodeHintRecommendation

## src/hooks/useClipboardImageHint.ts

- lines: 78
- imports: 4
- exports: 1
- importance: 16
- tags: hooks-security
- exportedSymbols: useClipboardImageHint
- functions: useClipboardImageHint

## src/hooks/useCommandKeybindings.tsx

- lines: 108
- imports: 6
- exports: 1
- importance: 19
- tags: commands, hooks-security
- exportedSymbols: CommandKeybindingHandlers
- functions: CommandKeybindingHandlers

## src/hooks/useCommandQueue.ts

- lines: 16
- imports: 3
- exports: 1
- importance: 15
- tags: hooks-security
- exportedSymbols: useCommandQueue
- functions: useCommandQueue

## src/hooks/useCopyOnSelect.ts

- lines: 99
- imports: 5
- exports: 2
- importance: 20
- tags: bridge, hooks-security
- exportedSymbols: useCopyOnSelect, useSelectionBgColor
- functions: useCopyOnSelect, useSelectionBgColor

## src/hooks/useDeferredHookMessages.ts

- lines: 47
- imports: 2
- exports: 1
- importance: 14
- tags: state-memory, hooks-security
- exportedSymbols: useDeferredHookMessages
- functions: useDeferredHookMessages

## src/hooks/useDiffData.ts

- lines: 111
- imports: 3
- exports: 3
- importance: 20
- tags: hooks-security
- exportedSymbols: useDiffData, DiffFile, DiffData
- functions: useDiffData, loadDiffData

## src/hooks/useDiffInIDE.ts

- lines: 380
- imports: 18
- exports: 2
- importance: 38
- tags: permissions, remote, mcp, tools, hooks-security
- exportedSymbols: useDiffInIDE, computeEditsFromContents
- functions: useDiffInIDE, showDiff, computeEditsFromContents, showDiffInIDE, cleanup, can, closeTabInIDE, isClosedMessage, isRejectedMessage, isSaveMessage

## src/hooks/useDirectConnect.ts

- lines: 230
- imports: 13
- exports: 1
- importance: 44
- tags: permissions, bridge, remote, query-loop, tools, state-memory, hooks-security
- exportedSymbols: useDirectConnect
- functions: useDirectConnect

## src/hooks/useDoublePress.ts

- lines: 63
- imports: 1
- exports: 2
- importance: 15
- tags: hooks-security
- topComment: Creates a function that calls one function on the first call and another
- exportedSymbols: useDoublePress, DOUBLE_PRESS_TIMEOUT_MS
- functions: that, on, on, useDoublePress

## src/hooks/useDynamicConfig.ts

- lines: 23
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: useDynamicConfig
- functions: useDynamicConfig

## src/hooks/useElapsedTime.ts

- lines: 38
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: useElapsedTime
- functions: useElapsedTime

## src/hooks/useExitOnCtrlCD.ts

- lines: 96
- imports: 4
- exports: 2
- importance: 19
- tags: hooks-security
- exportedSymbols: useExitOnCtrlCD, ExitState
- functions: useExitOnCtrlCD

## src/hooks/useExitOnCtrlCDWithKeybindings.ts

- lines: 25
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: useExitOnCtrlCDWithKeybindings
- functions: useExitOnCtrlCDWithKeybindings

## src/hooks/useFileHistorySnapshotInit.ts

- lines: 26
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: useFileHistorySnapshotInit
- functions: useFileHistorySnapshotInit

## src/hooks/useGlobalKeybindings.tsx

- lines: 249
- imports: 10
- exports: 1
- importance: 25
- tags: tools, state-memory, hooks-security
- exportedSymbols: GlobalKeybindingHandlers
- functions: GlobalKeybindingHandlers

## src/hooks/useHistorySearch.ts

- lines: 304
- imports: 9
- exports: 1
- importance: 24
- tags: bridge, hooks-security
- exportedSymbols: useHistorySearch
- functions: useHistorySearch

## src/hooks/useIdeAtMentioned.ts

- lines: 77
- imports: 6
- exports: 2
- importance: 20
- tags: mcp, hooks-security
- exportedSymbols: useIdeAtMentioned, IDEAtMentioned
- functions: useIdeAtMentioned

## src/hooks/useIdeConnectionStatus.ts

- lines: 34
- imports: 2
- exports: 2
- importance: 16
- tags: mcp, hooks-security
- exportedSymbols: useIdeConnectionStatus, IdeStatus
- functions: useIdeConnectionStatus

## src/hooks/useIDEIntegration.tsx

- lines: 70
- imports: 7
- exports: 1
- importance: 31
- tags: auth, mcp, hooks-security
- exportedSymbols: useIDEIntegration
- functions: useIDEIntegration, addIde

## src/hooks/useIdeLogging.ts

- lines: 42
- imports: 6
- exports: 1
- importance: 18
- tags: mcp, hooks-security
- exportedSymbols: useIdeLogging
- functions: useIdeLogging

## src/hooks/useIdeSelection.ts

- lines: 151
- imports: 6
- exports: 4
- importance: 25
- tags: mcp, hooks-security
- exportedSymbols: useIdeSelection, SelectionPoint, SelectionData, IDESelection
- functions: useIdeSelection, for

## src/hooks/useInboxPoller.ts

- lines: 970
- imports: 30
- exports: 1
- importance: 54
- tags: permissions, bridge, query-loop, tools, state-memory, hooks-security
- exportedSymbols: useInboxPoller
- functions: getAgentNameToPoll, useInboxPoller, const, processSandboxPermissionResponse

## src/hooks/useInputBuffer.ts

- lines: 133
- imports: 2
- exports: 4
- importance: 21
- tags: hooks-security
- exportedSymbols: useInputBuffer, BufferEntry, UseInputBufferProps, UseInputBufferResult
- functions: useInputBuffer

## src/hooks/useIssueFlagBanner.ts

- lines: 134
- imports: 4
- exports: 3
- importance: 31
- tags: mcp, query-loop, tools, state-memory, hooks-security
- exportedSymbols: isSessionContainerCompatible, hasFrictionSignal, useIssueFlagBanner
- functions: isSessionContainerCompatible, hasFrictionSignal, useIssueFlagBanner

## src/hooks/useLogMessages.ts

- lines: 120
- imports: 6
- exports: 1
- importance: 29
- tags: query-loop, tools, state-memory, hooks-security
- exportedSymbols: useLogMessages
- functions: useLogMessages

## src/hooks/useLspPluginRecommendation.tsx

- lines: 194
- imports: 13
- exports: 2
- importance: 26
- tags: state-memory, hooks-security
- exportedSymbols: useLspPluginRecommendation, LspRecommendationState
- functions: useLspPluginRecommendation, _temp2, _temp

## src/hooks/useMailboxBridge.ts

- lines: 22
- imports: 2
- exports: 1
- importance: 14
- tags: bridge, hooks-security
- exportedSymbols: useMailboxBridge
- functions: useMailboxBridge

## src/hooks/useMainLoopModel.ts

- lines: 35
- imports: 4
- exports: 1
- importance: 16
- tags: state-memory, hooks-security
- exportedSymbols: useMainLoopModel
- functions: useMainLoopModel

## src/hooks/useManagePlugins.ts

- lines: 305
- imports: 20
- exports: 1
- importance: 25
- tags: mcp, tools, state-memory, hooks-security
- exportedSymbols: useManagePlugins
- functions: useManagePlugins

## src/hooks/useMemoryUsage.ts

- lines: 40
- imports: 2
- exports: 3
- importance: 18
- tags: hooks-security
- exportedSymbols: useMemoryUsage, MemoryUsageStatus, MemoryUsageInfo
- functions: useMemoryUsage

## src/hooks/useMergedClients.ts

- lines: 24
- imports: 3
- exports: 2
- importance: 17
- tags: mcp, hooks-security
- exportedSymbols: mergeClients, useMergedClients
- functions: mergeClients, useMergedClients

## src/hooks/useMergedCommands.ts

- lines: 16
- imports: 3
- exports: 1
- importance: 15
- tags: mcp, hooks-security
- exportedSymbols: useMergedCommands
- functions: useMergedCommands

## src/hooks/useMergedTools.ts

- lines: 45
- imports: 5
- exports: 1
- importance: 27
- tags: permissions, bridge, mcp, tools, hooks-security
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: useMergedTools
- functions: used, useMergedTools, that

## src/hooks/useMinDisplayTime.ts

- lines: 36
- imports: 1
- exports: 1
- importance: 13
- tags: hooks-security
- exportedSymbols: useMinDisplayTime
- functions: useMinDisplayTime

## src/hooks/useNotifyAfterTimeout.ts

- lines: 66
- imports: 4
- exports: 2
- importance: 18
- tags: hooks-security
- exportedSymbols: useNotifyAfterTimeout, DEFAULT_INTERACTION_THRESHOLD_MS
- functions: getTimeSinceLastInteraction, hasRecentInteraction, shouldNotify, useNotifyAfterTimeout

## src/hooks/useOfficialMarketplaceNotification.tsx

- lines: 48
- imports: 6
- exports: 1
- importance: 28
- tags: permissions, hooks-security
- exportedSymbols: useOfficialMarketplaceNotification
- functions: useOfficialMarketplaceNotification, _temp

## src/hooks/usePasteHandler.ts

- lines: 286
- imports: 8
- exports: 1
- importance: 23
- tags: hooks-security
- exportedSymbols: usePasteHandler
- functions: usePasteHandler

## src/hooks/usePluginRecommendationBase.tsx

- lines: 105
- imports: 8
- exports: 2
- importance: 23
- tags: hooks-security
- exportedSymbols: usePluginRecommendationBase, installPluginAndNotify
- functions: usePluginRecommendationBase, installPluginAndNotify

## src/hooks/usePromptsFromClaudeInChrome.tsx

- lines: 71
- imports: 11
- exports: 1
- importance: 32
- tags: permissions, mcp, tools, hooks-security
- exportedSymbols: usePromptsFromClaudeInChrome
- functions: usePromptsFromClaudeInChrome, _temp, findChromeClient

## src/hooks/usePromptSuggestion.ts

- lines: 178
- imports: 5
- exports: 1
- importance: 19
- tags: hooks-security
- exportedSymbols: usePromptSuggestion
- functions: usePromptSuggestion

## src/hooks/usePrStatus.ts

- lines: 107
- imports: 3
- exports: 2
- importance: 18
- tags: state-memory, hooks-security
- exportedSymbols: usePrStatus, PrStatusState
- functions: usePrStatus, poll

## src/hooks/useQueueProcessor.ts

- lines: 69
- imports: 5
- exports: 1
- importance: 17
- tags: hooks-security
- exportedSymbols: useQueueProcessor
- functions: handles, useQueueProcessor

## src/hooks/useRemoteSession.ts

- lines: 606
- imports: 19
- exports: 1
- importance: 49
- tags: permissions, bridge, remote, query-loop, tools, commands, state-memory, hooks-security
- exportedSymbols: useRemoteSession
- functions: useRemoteSession

## src/hooks/useReplBridge.tsx

- lines: 723
- imports: 26
- exports: 2
- importance: 65
- tags: auth, permissions, bridge, remote, mcp, query-loop, tools, state-memory, hooks-security
- exportedSymbols: useReplBridge, BRIDGE_FAILURE_DISMISS_MS
- functions: useReplBridge, notifyBridgeFailed, handleInboundMessage, handleStateChange, handlePermissionResponse

## src/hooks/useScheduledTasks.ts

- lines: 140
- imports: 13
- exports: 1
- importance: 23
- tags: tools, commands, state-memory, hooks-security
- exportedSymbols: useScheduledTasks
- functions: useScheduledTasks, formatCronFireTime

## src/hooks/useSearchInput.ts

- lines: 365
- imports: 5
- exports: 1
- importance: 21
- tags: bridge, hooks-security
- exportedSymbols: useSearchInput
- functions: isKillKey, isYankKey, useSearchInput

## src/hooks/useSessionBackgrounding.ts

- lines: 159
- imports: 3
- exports: 1
- importance: 16
- tags: state-memory, hooks-security
- exportedSymbols: useSessionBackgrounding
- functions: useSessionBackgrounding

## src/hooks/useSettings.ts

- lines: 18
- imports: 1
- exports: 2
- importance: 15
- tags: hooks-security
- exportedSymbols: useSettings, ReadonlySettings
- functions: useSettings

## src/hooks/useSettingsChange.ts

- lines: 26
- imports: 5
- exports: 1
- importance: 17
- tags: hooks-security
- exportedSymbols: useSettingsChange
- functions: useSettingsChange

## src/hooks/useSkillImprovementSurvey.ts

- lines: 106
- imports: 8
- exports: 1
- importance: 21
- tags: hooks-security
- exportedSymbols: useSkillImprovementSurvey
- functions: useSkillImprovementSurvey

## src/hooks/useSkillsChange.ts

- lines: 63
- imports: 6
- exports: 1
- importance: 18
- tags: state-memory, hooks-security
- exportedSymbols: useSkillsChange
- functions: useSkillsChange

## src/hooks/useSSHSession.ts

- lines: 242
- imports: 14
- exports: 1
- importance: 45
- tags: permissions, bridge, remote, query-loop, tools, state-memory, hooks-security
- exportedSymbols: useSSHSession
- functions: useSSHSession

## src/hooks/useSwarmInitialization.ts

- lines: 82
- imports: 9
- exports: 1
- importance: 22
- tags: state-memory, hooks-security
- exportedSymbols: useSwarmInitialization
- functions: useSwarmInitialization

## src/hooks/useSwarmPermissionPoller.ts

- lines: 331
- imports: 7
- exports: 11
- importance: 49
- tags: permissions, tools, state-memory, hooks-security
- exportedSymbols: registerPermissionCallback, unregisterPermissionCallback, hasPermissionCallback, clearAllPendingCallbacks, processMailboxPermissionResponse, registerSandboxPermissionCallback, hasSandboxPermissionCallback, processSandboxPermissionResponse, useSwarmPermissionPoller, PermissionResponseCallback, SandboxPermissionResponseCallback
- functions: parsePermissionUpdates, registerPermissionCallback, unregisterPermissionCallback, hasPermissionCallback, clearAllPendingCallbacks, processMailboxPermissionResponse, registerSandboxPermissionCallback, hasSandboxPermissionCallback, processSandboxPermissionResponse, processResponse, useSwarmPermissionPoller

## src/hooks/useTaskListWatcher.ts

- lines: 222
- imports: 4
- exports: 1
- importance: 18
- tags: hooks-security
- exportedSymbols: useTaskListWatcher
- functions: useTaskListWatcher, identity, findAvailableTask, formatTaskAsPrompt

## src/hooks/useTasksV2.ts

- lines: 251
- imports: 7
- exports: 2
- importance: 24
- tags: tools, state-memory, hooks-security
- exportedSymbols: useTasksV2, useTasksV2WithCollapseEffect
- classes: TasksV2Store
- functions: getStore, useTasksV2, useTasksV2WithCollapseEffect

## src/hooks/useTeammateViewAutoExit.ts

- lines: 64
- imports: 4
- exports: 1
- importance: 16
- tags: state-memory, hooks-security
- exportedSymbols: useTeammateViewAutoExit
- functions: useTeammateViewAutoExit

## src/hooks/useTeleportResume.tsx

- lines: 85
- imports: 8
- exports: 3
- importance: 25
- tags: state-memory, hooks-security
- exportedSymbols: useTeleportResume, TeleportResumeError, TeleportSource
- functions: useTeleportResume

## src/hooks/useTerminalSize.ts

- lines: 16
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: useTerminalSize
- functions: useTerminalSize

## src/hooks/useTextInput.ts

- lines: 530
- imports: 13
- exports: 2
- importance: 42
- tags: auth, hooks-security
- exportedSymbols: useTextInput, UseTextInputProps
- functions: mapInput, useTextInput, handleCtrlD, killToLineEnd, killToLineStart, killWordBefore, yank, handleYankPop, handleEnter, upOrHistoryUp, downOrHistoryDown, mapKey, isKillKey, isYankKey, onInput

## src/hooks/useTimeout.ts

- lines: 15
- imports: 1
- exports: 1
- importance: 13
- tags: hooks-security
- exportedSymbols: useTimeout
- functions: useTimeout

## src/hooks/useTurnDiffs.ts

- lines: 214
- imports: 5
- exports: 3
- importance: 23
- tags: tools, hooks-security
- exportedSymbols: useTurnDiffs, TurnFileDiff, TurnDiff
- functions: isFileEditResult, isFileWriteOutput, countHunkLines, getUserPromptPreview, computeTurnStats, useTurnDiffs

## src/hooks/useTypeahead.tsx

- lines: 1385
- imports: 30
- exports: 6
- importance: 61
- tags: auth, bridge, mcp, tools, commands, state-memory, hooks-security
- exportedSymbols: extractSearchToken, formatReplacementValue, applyShellSuggestion, applyDirectorySuggestion, extractCompletionToken, useTypeahead
- classes: for
- functions: isPathMetadata, getPreservedSelection, buildResumeInputFromSuggestion, extractSearchToken, formatReplacementValue, applyShellSuggestion, applyTriggerSuggestion, generateBashSuggestions, applyDirectorySuggestion, extractCompletionToken, extractCommandNameAndArgs, hasCommandWithArguments, useTypeahead, acceptSuggestionText

## src/hooks/useUpdateNotification.ts

- lines: 35
- imports: 2
- exports: 3
- importance: 18
- tags: hooks-security
- exportedSymbols: getSemverPart, shouldShowUpdateNotification, useUpdateNotification
- functions: getSemverPart, shouldShowUpdateNotification, useUpdateNotification

## src/hooks/useVimInput.ts

- lines: 317
- imports: 9
- exports: 1
- importance: 24
- tags: hooks-security
- exportedSymbols: useVimInput
- functions: useVimInput, createOperatorContext, replayLastChange, handleVimInput

## src/hooks/useVirtualScroll.ts

- lines: 722
- imports: 4
- exports: 2
- importance: 39
- tags: auth, tools, state-memory, cost-budget, hooks-security
- exportedSymbols: useVirtualScroll, VirtualScrollResult
- functions: useVirtualScroll

## src/hooks/useVoice.ts

- lines: 1145
- imports: 12
- exports: 4
- importance: 64
- tags: auth, permissions, remote, tools, state-memory, hooks-security
- topComment: React hook for hold-to-talk voice input using Anthropic voice_stream STT.
- exportedSymbols: normalizeLanguageForSTT, computeLevel, useVoice, FIRST_PRESS_FALLBACK_MS
- functions: normalizeLanguageForSTT, computeLevel, useVoice, updateState, finishRecording, armFocusSilenceTimer, startRecordingSession

## src/hooks/useVoiceEnabled.ts

- lines: 26
- imports: 3
- exports: 1
- importance: 27
- tags: auth, state-memory, hooks-security
- exportedSymbols: useVoiceEnabled
- functions: useVoiceEnabled

## src/hooks/useVoiceIntegration.tsx

- lines: 677
- imports: 13
- exports: 3
- importance: 44
- tags: permissions, bridge, remote, mcp, state-memory, hooks-security
- exportedSymbols: useVoiceIntegration, useVoiceKeybindingHandler, VoiceKeybindingHandler
- functions: matchesKeyboardEvent, useVoiceIntegration, useVoiceKeybindingHandler, VoiceKeybindingHandler

## src/ink.ts

- lines: 86
- imports: 3
- exports: 2
- importance: 8
- tags: (none)
- exportedSymbols: render, createRoot
- functions: withTheme, render, createRoot

## src/ink/Ansi.tsx

- lines: 292
- imports: 6
- exports: 1
- importance: 11
- tags: tools
- exportedSymbols: Ansi
- functions: Ansi, parseToSpans, textStyleToSpanProps, colorToString, propsEqual, hasAnyProps, hasAnyTextProps, StyledText

## src/ink/bidi.ts

- lines: 140
- imports: 1
- exports: 1
- importance: 4
- tags: state-memory
- exportedSymbols: reorderBidi
- functions: needsBidi, getBidi, reorderBidi, reverseRange, reverseRangeNumbers, hasRTLCharacters

## src/ink/clearTerminal.ts

- lines: 75
- imports: 1
- exports: 2
- importance: 5
- tags: state-memory
- exportedSymbols: getClearTerminalSequence, clearTerminal
- functions: isWindowsTerminal, isMintty, isModernWindowsTerminal, getClearTerminalSequence

## src/ink/colorize.ts

- lines: 232
- imports: 2
- exports: 6
- importance: 16
- tags: state-memory
- exportedSymbols: applyTextStyles, applyColor, CHALK_BOOSTED_FOR_XTERMJS, CHALK_CLAMPED_FOR_TMUX, colorize, ColorType
- functions: boostChalkLevelForXtermJs, clampChalkLevelForTmux, applyTextStyles, applyColor

## src/ink/components/AlternateScreen.tsx

- lines: 80
- imports: 7
- exports: 1
- importance: 10
- tags: state-memory
- exportedSymbols: AlternateScreen
- functions: AlternateScreen

## src/ink/components/App.tsx

- lines: 658
- imports: 25
- exports: 2
- importance: 22
- tags: mcp, tools, state-memory
- exportedSymbols: handleMouseEvent, default
- classes: App
- functions: processKeysInBatch, handleMouseEvent

## src/ink/components/AppContext.ts

- lines: 22
- imports: 1
- exports: 2
- importance: 5
- tags: (none)
- exportedSymbols: Props, default

## src/ink/components/Box.tsx

- lines: 214
- imports: 10
- exports: 2
- importance: 16
- tags: (none)
- exportedSymbols: Props, default
- functions: Box

## src/ink/components/Button.tsx

- lines: 192
- imports: 9
- exports: 2
- importance: 15
- tags: (none)
- exportedSymbols: Props, default
- functions: Button, _temp

## src/ink/components/ClockContext.tsx

- lines: 112
- imports: 4
- exports: 4
- importance: 13
- tags: (none)
- exportedSymbols: createClock, ClockProvider, ClockContext, Clock
- functions: createClock, tick, updateInterval, ClockProvider, _temp

## src/ink/components/CursorDeclarationContext.ts

- lines: 33
- imports: 2
- exports: 3
- importance: 8
- tags: (none)
- exportedSymbols: CursorDeclaration, CursorDeclarationSetter, default

## src/ink/components/ErrorOverview.tsx

- lines: 109
- imports: 6
- exports: 1
- importance: 9
- tags: (none)
- exportedSymbols: default
- functions: removes, getStackUtils, ErrorOverview

## src/ink/components/Link.tsx

- lines: 42
- imports: 5
- exports: 2
- importance: 9
- tags: (none)
- exportedSymbols: Props, default
- functions: Link

## src/ink/components/Newline.tsx

- lines: 39
- imports: 2
- exports: 2
- importance: 6
- tags: (none)
- exportedSymbols: Props, default
- functions: Newline

## src/ink/components/NoSelect.tsx

- lines: 68
- imports: 3
- exports: 1
- importance: 5
- tags: tools
- exportedSymbols: NoSelect
- functions: NoSelect

## src/ink/components/RawAnsi.tsx

- lines: 57
- imports: 2
- exports: 1
- importance: 4
- tags: state-memory
- exportedSymbols: RawAnsi
- functions: RawAnsi

## src/ink/components/ScrollBox.tsx

- lines: 237
- imports: 9
- exports: 3
- importance: 17
- tags: mcp
- exportedSymbols: ScrollBoxHandle, ScrollBoxProps, default
- functions: ScrollBox, scrollMutated

## src/ink/components/Spacer.tsx

- lines: 20
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: default
- functions: Spacer

## src/ink/components/StdinContext.ts

- lines: 50
- imports: 3
- exports: 2
- importance: 7
- tags: (none)
- exportedSymbols: Props, default
- functions: via, does

## src/ink/components/TerminalFocusContext.tsx

- lines: 52
- imports: 3
- exports: 3
- importance: 9
- tags: (none)
- exportedSymbols: TerminalFocusProvider, TerminalFocusContextProps, default
- functions: TerminalFocusProvider

## src/ink/components/TerminalSizeContext.tsx

- lines: 7
- imports: 1
- exports: 2
- importance: 5
- tags: (none)
- exportedSymbols: TerminalSizeContext, TerminalSize

## src/ink/components/Text.tsx

- lines: 254
- imports: 4
- exports: 2
- importance: 11
- tags: (none)
- exportedSymbols: Props, default
- functions: Text

## src/ink/constants.ts

- lines: 3
- imports: 0
- exports: 1
- importance: 2
- tags: (none)
- topComment: Shared frame interval for render throttling and animations (~60fps)
- exportedSymbols: FRAME_INTERVAL_MS

## src/ink/dom.ts

- lines: 485
- imports: 10
- exports: 20
- importance: 34
- tags: tools
- exportedSymbols: findOwnerChainAtRow, createNode, appendChildNode, insertBeforeNode, removeChildNode, setAttribute, setStyle, setTextStyles, createTextNode, markDirty, scheduleRenderFrom, setTextNodeValue, clearYogaNodeReferences, TextName, ElementNames, NodeNames, DOMElement, TextNode, DOMNode, DOMNodeAttribute
- functions: collectRemovedRects, stylesEqual, shallowEqual, isDOMElement, findOwnerChainAtRow, walk

## src/ink/events/click-event.ts

- lines: 39
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: ClickEvent
- classes: ClickEvent

## src/ink/events/dispatcher.ts

- lines: 234
- imports: 4
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: Dispatcher
- classes: Dispatcher
- functions: getHandler, collectListeners, processDispatchQueue, getEventPriority

## src/ink/events/emitter.ts

- lines: 40
- imports: 2
- exports: 1
- importance: 4
- tags: (none)
- exportedSymbols: EventEmitter
- classes: EventEmitter

## src/ink/events/event-handlers.ts

- lines: 74
- imports: 5
- exports: 3
- importance: 11
- tags: (none)
- exportedSymbols: HANDLER_FOR_EVENT, EVENT_HANDLER_PROPS, EventHandlerProps

## src/ink/events/event.ts

- lines: 12
- imports: 0
- exports: 1
- importance: 2
- tags: (none)
- exportedSymbols: Event
- classes: Event

## src/ink/events/focus-event.ts

- lines: 22
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: FocusEvent
- classes: FocusEvent

## src/ink/events/input-event.ts

- lines: 206
- imports: 2
- exports: 2
- importance: 20
- tags: auth
- exportedSymbols: InputEvent, Key
- classes: InputEvent
- functions: parseKey, keys, keys

## src/ink/events/keyboard-event.ts

- lines: 52
- imports: 2
- exports: 1
- importance: 4
- tags: (none)
- exportedSymbols: KeyboardEvent
- classes: KeyboardEvent
- functions: keyFromParsed

## src/ink/events/terminal-event.ts

- lines: 108
- imports: 1
- exports: 2
- importance: 6
- tags: (none)
- exportedSymbols: TerminalEvent, EventTarget
- classes: for, TerminalEvent

## src/ink/events/terminal-focus-event.ts

- lines: 20
- imports: 1
- exports: 2
- importance: 5
- tags: (none)
- exportedSymbols: TerminalFocusEvent, TerminalFocusEventType
- classes: TerminalFocusEvent

## src/ink/focus.ts

- lines: 182
- imports: 2
- exports: 3
- importance: 10
- tags: (none)
- exportedSymbols: getRootNode, getFocusManager, FocusManager
- classes: FocusManager
- functions: collectTabbable, walkTree, isInTree, getRootNode, getFocusManager

## src/ink/frame.ts

- lines: 125
- imports: 4
- exports: 7
- importance: 19
- tags: (none)
- exportedSymbols: emptyFrame, shouldClearScreen, Frame, FlickerReason, FrameEvent, Patch, Diff
- functions: emptyFrame, shouldClearScreen

## src/ink/get-max-width.ts

- lines: 28
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: default

## src/ink/hit-test.ts

- lines: 131
- imports: 4
- exports: 3
- importance: 11
- tags: (none)
- exportedSymbols: hitTest, dispatchClick, dispatchHover
- functions: hitTest, dispatchClick, dispatchHover

## src/ink/hooks/use-animation-frame.ts

- lines: 58
- imports: 4
- exports: 1
- importance: 16
- tags: hooks-security
- exportedSymbols: useAnimationFrame
- functions: Spinner, useAnimationFrame

## src/ink/hooks/use-app.ts

- lines: 9
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: default

## src/ink/hooks/use-declared-cursor.ts

- lines: 74
- imports: 3
- exports: 1
- importance: 15
- tags: tools, hooks-security
- exportedSymbols: useDeclaredCursor
- functions: useDeclaredCursor

## src/ink/hooks/use-input.ts

- lines: 93
- imports: 4
- exports: 1
- importance: 17
- tags: hooks-security
- exportedSymbols: default

## src/ink/hooks/use-interval.ts

- lines: 68
- imports: 2
- exports: 2
- importance: 16
- tags: hooks-security
- exportedSymbols: useAnimationTimer, useInterval
- functions: useAnimationTimer, useInterval

## src/ink/hooks/use-search-highlight.ts

- lines: 54
- imports: 5
- exports: 1
- importance: 17
- tags: hooks-security
- exportedSymbols: useSearchHighlight
- functions: useSearchHighlight

## src/ink/hooks/use-selection.ts

- lines: 105
- imports: 4
- exports: 2
- importance: 19
- tags: hooks-security
- exportedSymbols: useSelection, useHasSelection
- functions: useSelection, useHasSelection

## src/ink/hooks/use-stdin.ts

- lines: 9
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: default

## src/ink/hooks/use-tab-status.ts

- lines: 73
- imports: 4
- exports: 2
- importance: 18
- tags: state-memory, hooks-security
- exportedSymbols: useTabStatus, TabStatusKind
- functions: useTabStatus

## src/ink/hooks/use-terminal-focus.ts

- lines: 17
- imports: 2
- exports: 1
- importance: 14
- tags: hooks-security
- exportedSymbols: useTerminalFocus
- functions: useTerminalFocus

## src/ink/hooks/use-terminal-title.ts

- lines: 32
- imports: 4
- exports: 1
- importance: 16
- tags: hooks-security
- exportedSymbols: useTerminalTitle
- functions: useTerminalTitle

## src/ink/hooks/use-terminal-viewport.ts

- lines: 97
- imports: 3
- exports: 1
- importance: 16
- tags: hooks-security
- exportedSymbols: useTerminalViewport
- functions: useTerminalViewport

## src/ink/ink.tsx

- lines: 1723
- imports: 40
- exports: 3
- importance: 37
- tags: bridge, mcp, tools, state-memory
- exportedSymbols: drainStdin, Options, default
- classes: Ink
- functions: makeAltScreenParkPatch, drainStdin

## src/ink/instances.ts

- lines: 11
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- topComment: Store all instances of Ink (instance.js) to ensure that consecutive render() calls
- exportedSymbols: default

## src/ink/layout/engine.ts

- lines: 7
- imports: 2
- exports: 1
- importance: 4
- tags: (none)
- exportedSymbols: createLayoutNode
- functions: createLayoutNode

## src/ink/layout/geometry.ts

- lines: 98
- imports: 0
- exports: 15
- importance: 19
- tags: (none)
- exportedSymbols: edges, edges, edges, edges, addEdges, resolveEdges, unionRect, clampRect, withinBounds, clamp, ZERO_EDGES, Point, Size, Rectangle, Edges
- functions: edges, edges, edges, edges, addEdges, resolveEdges, unionRect, clampRect, withinBounds, clamp

## src/ink/layout/node.ts

- lines: 153
- imports: 0
- exports: 22
- importance: 19
- tags: (none)
- topComment: --
- exportedSymbols: LayoutEdge, LayoutGutter, LayoutDisplay, LayoutFlexDirection, LayoutAlign, LayoutJustify, LayoutWrap, LayoutPositionType, LayoutOverflow, LayoutMeasureMode, LayoutEdge, LayoutGutter, LayoutDisplay, LayoutFlexDirection, LayoutAlign, LayoutJustify, LayoutWrap, LayoutPositionType, LayoutOverflow, LayoutMeasureFunc, LayoutMeasureMode, LayoutNode

## src/ink/layout/yoga.ts

- lines: 309
- imports: 2
- exports: 2
- importance: 9
- tags: (none)
- exportedSymbols: createYogaLayoutNode, YogaLayoutNode
- classes: YogaLayoutNode
- functions: createYogaLayoutNode

## src/ink/line-width-cache.ts

- lines: 25
- imports: 1
- exports: 1
- importance: 15
- tags: auth
- exportedSymbols: lineWidth
- functions: lineWidth

## src/ink/log-update.ts

- lines: 774
- imports: 7
- exports: 1
- importance: 30
- tags: auth
- exportedSymbols: LogUpdate
- classes: LogUpdate, VirtualScreen
- functions: transitionHyperlink, transitionStyle, readLine, fullResetSequence_CAUSES_FLICKER, renderFrame, renderFrameSlice, writeCellWithStyleStr, moveCursorTo, needsWidthCompensation

## src/ink/measure-element.ts

- lines: 24
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: default

## src/ink/measure-text.ts

- lines: 48
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: default
- functions: measureText

## src/ink/node-cache.ts

- lines: 55
- imports: 2
- exports: 5
- importance: 12
- tags: (none)
- exportedSymbols: addPendingClear, consumeAbsoluteRemovedFlag, nodeCache, pendingClears, CachedLayout
- functions: addPendingClear, consumeAbsoluteRemovedFlag

## src/ink/optimizer.ts

- lines: 94
- imports: 1
- exports: 1
- importance: 4
- tags: (none)
- exportedSymbols: optimize
- functions: optimize

## src/ink/output.ts

- lines: 798
- imports: 9
- exports: 3
- importance: 36
- tags: auth, state-memory
- exportedSymbols: Operation, Clip, default
- classes: Output
- functions: intersectClip, maxDefined, minDefined, stylesEqual, styledCharsWithGraphemeClustering, flushBuffer, writeLineToScreen

## src/ink/parse-keypress.ts

- lines: 802
- imports: 3
- exports: 10
- importance: 43
- tags: auth
- exportedSymbols: parseMultipleKeypresses, DECRPM_STATUS, INITIAL_STATE, nonAlphanumericKeys, TerminalResponse, KeyParseState, ParsedKey, ParsedResponse, ParsedMouse, ParsedInput
- functions: createPasteKey, parseTerminalResponse, splitNumericParams, inputToString, parseMultipleKeypresses, decodeModifier, keycodeToName, parseMouseEvent, parseKeypress, createNavKey

## src/ink/reconciler.ts

- lines: 513
- imports: 10
- exports: 9
- importance: 34
- tags: tools
- exportedSymbols: getOwnerChain, isDebugRepaintsEnabled, recordYogaMs, getLastYogaMs, markCommitStart, getLastCommitMs, resetProfileCounters, dispatcher, default
- functions: setEventHandler, applyProp, getOwnerChain, isDebugRepaintsEnabled, recordYogaMs, getLastYogaMs, markCommitStart, getLastCommitMs, resetProfileCounters

## src/ink/render-border.ts

- lines: 232
- imports: 7
- exports: 4
- importance: 17
- tags: (none)
- exportedSymbols: CUSTOM_BORDER_STYLES, BorderTextOptions, BorderStyle, default
- functions: embedTextInBorder, styleBorderLine

## src/ink/render-node-to-output.ts

- lines: 1463
- imports: 15
- exports: 10
- importance: 68
- tags: auth, permissions, tools, state-memory
- exportedSymbols: resetLayoutShifted, didLayoutShift, resetScrollHint, getScrollHint, resetScrollDrainNode, getScrollDrainNode, consumeFollowScroll, ScrollHint, FollowScroll, default
- functions: isXtermJsHost, resetLayoutShifted, didLayoutShift, resetScrollHint, getScrollHint, resetScrollDrainNode, getScrollDrainNode, consumeFollowScroll, drainAdaptive, drainProportional, wrapWithOsc8Link, buildCharToSegmentMap, applyStylesToWrappedText, wrapWithSoftWrap, applyPaddingToText, renderNodeToOutput, renderChildren, clipsBothAxes, siblingSharesY, blitEscapingAbsoluteDescendants, renderScrolledChildren, dropSubtreeCache

## src/ink/render-to-screen.ts

- lines: 232
- imports: 10
- exports: 4
- importance: 20
- tags: (none)
- exportedSymbols: renderToScreen, scanPositions, applyPositionedHighlight, MatchPosition
- functions: renderToScreen, scanPositions, applyPositionedHighlight

## src/ink/renderer.ts

- lines: 179
- imports: 7
- exports: 3
- importance: 27
- tags: auth
- exportedSymbols: RenderOptions, Renderer, default
- functions: createRenderer

## src/ink/root.ts

- lines: 185
- imports: 6
- exports: 6
- importance: 20
- tags: bridge
- exportedSymbols: createRoot, renderSync, RenderOptions, Instance, Root, default
- functions: createRoot

## src/ink/screen.ts

- lines: 1487
- imports: 4
- exports: 27
- importance: 52
- tags: auth, tools
- exportedSymbols: isEmptyCellAt, isCellEmpty, createScreen, resetScreen, migrateScreenPools, cellAt, cellAtIndex, visibleCellAtIndex, charInCellAt, setCellAt, setCellStyleId, blitRegion, clearRegion, shiftRows, extractHyperlinkFromStyles, filterOutHyperlinkStyles, diff, diffEach, markNoSelectRegion, CharPool, HyperlinkPool, StylePool, enum, OSC8_PREFIX, Hyperlink, Cell, Screen
- classes: CharPool, HyperlinkPool, StylePool
- functions: hasVisibleSpaceEffect, initCharAscii, packWord1, isEmptyCellByIndex, isEmptyCellAt, isCellEmpty, internHyperlink, createScreen, resetScreen, migrateScreenPools, cellAt, cellAtIndex, visibleCellAtIndex, cellAtCI, charInCellAt, automatically, doesn, setCellAt, setCellStyleId, internCharString, blitRegion, clearRegion, shiftRows, extractHyperlinkFromStyles, filterOutHyperlinkStyles, diff, diffEach, findNextDiff, diffRowBoth, diffRowRemoved, diffRowAdded, diffSameWidth, diffDifferentWidth, markNoSelectRegion

## src/ink/searchHighlight.ts

- lines: 94
- imports: 1
- exports: 1
- importance: 4
- tags: (none)
- exportedSymbols: applySearchHighlight
- functions: applySearchHighlight

## src/ink/selection.ts

- lines: 918
- imports: 3
- exports: 21
- importance: 44
- tags: auth
- exportedSymbols: createSelectionState, startSelection, updateSelection, finishSelection, clearSelection, selectWordAt, findPlainTextUrlAt, selectLineAt, extendSelection, moveFocus, shiftSelection, shiftAnchor, shiftSelectionForFollow, hasSelection, selectionBounds, isCellSelected, getSelectedText, captureScrolledRows, applySelectionOverlay, SelectionState, FocusMove
- classes: for, as, change, character, check, change, character
- functions: createSelectionState, startSelection, updateSelection, finishSelection, clearSelection, charClass, wordBoundsAt, comparePoints, selectWordAt, isUrlChar, findPlainTextUrlAt, selectLineAt, extendSelection, moveFocus, shiftSelection, shiftAnchor, shiftSelectionForFollow, hasSelection, selectionBounds, isCellSelected, extractRowText, joinRows, getSelectedText, captureScrolledRows, applySelectionOverlay

## src/ink/squash-text-nodes.ts

- lines: 93
- imports: 2
- exports: 3
- importance: 9
- tags: (none)
- exportedSymbols: squashTextNodesToSegments, StyledSegment, default
- functions: squashTextNodesToSegments, squashTextNodes

## src/ink/stringWidth.ts

- lines: 223
- imports: 4
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: stringWidth
- functions: stringWidthJavaScript, needsSegmentation, getEmojiWidth, isZeroWidth

## src/ink/styles.ts

- lines: 772
- imports: 2
- exports: 8
- importance: 27
- tags: tools
- exportedSymbols: RGBColor, HexColor, Ansi256Color, AnsiColor, Color, TextStyles, Styles, default
- functions: applyPositionEdge

## src/ink/supports-hyperlinks.ts

- lines: 58
- imports: 1
- exports: 2
- importance: 5
- tags: (none)
- exportedSymbols: supportsHyperlinks, ADDITIONAL_HYPERLINK_TERMINALS
- functions: supportsHyperlinks

## src/ink/tabstops.ts

- lines: 47
- imports: 2
- exports: 1
- importance: 16
- tags: auth
- topComment: Tab expansion, inspired by Ghostty's Tabstops.zig
- exportedSymbols: expandTabs
- functions: expandTabs

## src/ink/terminal-focus-state.ts

- lines: 48
- imports: 0
- exports: 6
- importance: 12
- tags: (none)
- topComment: Terminal focus state signal — non-React access to DECSET 1004 focus events.
- exportedSymbols: setTerminalFocused, getTerminalFocused, getTerminalFocusState, subscribeTerminalFocus, resetTerminalFocusState, TerminalFocusState
- functions: setTerminalFocused, getTerminalFocused, getTerminalFocusState, subscribeTerminalFocus, resetTerminalFocusState

## src/ink/terminal-querier.ts

- lines: 213
- imports: 3
- exports: 9
- importance: 23
- tags: (none)
- exportedSymbols: decrqm, da1, da2, kittyKeyboard, cursorPosition, oscColor, xtversion, TerminalQuerier, TerminalQuery
- classes: TerminalQuerier
- functions: decrqm, da1, da2, kittyKeyboard, cursorPosition, oscColor, xtversion

## src/ink/terminal.ts

- lines: 249
- imports: 9
- exports: 10
- importance: 30
- tags: state-memory
- exportedSymbols: isProgressReportingAvailable, isSynchronizedOutputSupported, setXtversionName, isXtermJs, supportsExtendedKeys, hasCursorUpViewportYankBug, writeDiffToTerminal, SYNC_OUTPUT_SUPPORTED, Progress, Terminal
- functions: isProgressReportingAvailable, isSynchronizedOutputSupported, setXtversionName, isXtermJs, supportsExtendedKeys, hasCursorUpViewportYankBug, writeDiffToTerminal

## src/ink/termio.ts

- lines: 43
- imports: 0
- exports: 0
- importance: 12
- tags: auth
- topComment: Parser

## src/ink/termio/ansi.ts

- lines: 76
- imports: 0
- exports: 7
- importance: 14
- tags: (none)
- exportedSymbols: isC0, isEscFinal, C0, ESC, BEL, SEP, ESC_TYPE
- functions: isC0, isEscFinal

## src/ink/termio/csi.ts

- lines: 320
- imports: 1
- exports: 44
- importance: 23
- tags: (none)
- exportedSymbols: isCSIParam, isCSIIntermediate, isCSIFinal, csi, cursorUp, cursorDown, cursorForward, cursorBack, cursorTo, cursorPosition, cursorMove, eraseToEndOfLine, eraseToStartOfLine, eraseLine, eraseToEndOfScreen, eraseToStartOfScreen, eraseScreen, eraseLines, scrollUp, scrollDown, setScrollRegion, CSI_PREFIX, CSI_RANGE, CSI, ERASE_DISPLAY, ERASE_LINE_REGION, CURSOR_STYLES, CURSOR_LEFT, CURSOR_HOME, CURSOR_SAVE, CURSOR_RESTORE, ERASE_LINE, ERASE_SCREEN, ERASE_SCROLLBACK, RESET_SCROLL_REGION, PASTE_START, PASTE_END, FOCUS_IN, FOCUS_OUT, ENABLE_KITTY_KEYBOARD
- functions: isCSIParam, isCSIIntermediate, isCSIFinal, csi, cursorUp, cursorDown, cursorForward, cursorBack, cursorTo, cursorPosition, cursorMove, eraseToEndOfLine, eraseToStartOfLine, eraseLine, eraseToEndOfScreen, eraseToStartOfScreen, eraseScreen, eraseLines, scrollUp, scrollDown, setScrollRegion

## src/ink/termio/dec.ts

- lines: 61
- imports: 1
- exports: 15
- importance: 19
- tags: (none)
- exportedSymbols: decset, decreset, DEC, BSU, ESU, EBP, DBP, EFE, DFE, SHOW_CURSOR, HIDE_CURSOR, ENTER_ALT_SCREEN, EXIT_ALT_SCREEN, ENABLE_MOUSE_TRACKING, DISABLE_MOUSE_TRACKING
- functions: decset, decreset

## src/ink/termio/esc.ts

- lines: 68
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: parseEsc
- functions: parseEsc

## src/ink/termio/osc.ts

- lines: 494
- imports: 5
- exports: 21
- importance: 39
- tags: permissions, tools, state-memory
- exportedSymbols: osc, wrapForMultiplexer, getClipboardPath, tmuxLoadBuffer, setClipboard, _resetLinuxCopyCache, parseOSC, parseOscColor, link, supportsTabStatus, tabStatus, OSC_PREFIX, ST, OSC, LINK_END, ITERM2, PROGRESS, CLEAR_ITERM2_PROGRESS, CLEAR_TERMINAL_TITLE, CLEAR_TAB_STATUS, ClipboardPath
- functions: osc, wrapForMultiplexer, getClipboardPath, tmuxPassthrough, tmuxLoadBuffer, setClipboard, copyNative, _resetLinuxCopyCache, parseOSC, parseOscColor, parseTabStatus, link, osc8Id, supportsTabStatus, tabStatus

## src/ink/termio/parser.ts

- lines: 395
- imports: 10
- exports: 1
- importance: 28
- tags: auth
- exportedSymbols: Parser
- classes: Parser
- functions: isEmoji, isEastAsianWide, hasMultipleCodepoints, graphemeWidth, parseCSIParams, parseCSI, identifySequence

## src/ink/termio/sgr.ts

- lines: 309
- imports: 2
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: applySGR
- functions: parseParams, parseExtendedColor, applySGR

## src/ink/termio/tokenize.ts

- lines: 320
- imports: 2
- exports: 3
- importance: 24
- tags: auth
- exportedSymbols: createTokenizer, Token, Tokenizer
- functions: createTokenizer, tokenize

## src/ink/termio/types.ts

- lines: 237
- imports: 0
- exports: 18
- importance: 20
- tags: (none)
- topComment: =============================================================================
- exportedSymbols: defaultStyle, stylesEqual, colorsEqual, NamedColor, Color, UnderlineStyle, TextStyle, CursorDirection, CursorAction, EraseAction, ScrollAction, ModeAction, LinkAction, TitleAction, TabStatusAction, TextSegment, Grapheme, Action
- functions: defaultStyle, stylesEqual, colorsEqual

## src/ink/useTerminalNotification.ts

- lines: 127
- imports: 4
- exports: 4
- importance: 13
- tags: (none)
- exportedSymbols: useTerminalNotification, TerminalWriteContext, TerminalWriteProvider, TerminalNotification
- functions: useTerminalNotification

## src/ink/warn.ts

- lines: 10
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: ifNotInteger
- functions: ifNotInteger

## src/ink/widest-line.ts

- lines: 20
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: widestLine
- functions: widestLine

## src/ink/wrap-text.ts

- lines: 75
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: default
- functions: sliceFit, truncate, wrapText

## src/ink/wrapAnsi.ts

- lines: 21
- imports: 1
- exports: 0
- importance: 1
- tags: (none)

## src/interactiveHelpers.tsx

- lines: 366
- imports: 31
- exports: 8
- importance: 52
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: completeOnboarding, showDialog, exitWithError, exitWithMessage, showSetupDialog, renderAndRun, showSetupScreens, getRenderContext
- functions: completeOnboarding, showDialog, exitWithError, exitWithMessage, showSetupDialog, renderAndRun, showSetupScreens, returns, getRenderContext

## src/keybindings/defaultBindings.ts

- lines: 341
- imports: 5
- exports: 1
- importance: 21
- tags: permissions, state-memory
- exportedSymbols: DEFAULT_BINDINGS

## src/keybindings/KeybindingContext.tsx

- lines: 243
- imports: 5
- exports: 4
- importance: 16
- tags: mcp
- exportedSymbols: KeybindingProvider, useKeybindingContext, useOptionalKeybindingContext, useRegisterKeybindingContext
- functions: KeybindingProvider, _temp, useKeybindingContext, useOptionalKeybindingContext, ThemePicker, useRegisterKeybindingContext

## src/keybindings/KeybindingProviderSetup.tsx

- lines: 308
- imports: 13
- exports: 1
- importance: 15
- tags: (none)
- exportedSymbols: KeybindingSetup
- functions: useKeybindingWarnings, _temp2, _temp, KeybindingSetup, ChordInterceptor

## src/keybindings/loadUserBindings.ts

- lines: 473
- imports: 16
- exports: 11
- importance: 43
- tags: permissions
- exportedSymbols: isKeybindingCustomizationEnabled, getKeybindingsPath, loadKeybindings, loadKeybindingsSync, loadKeybindingsSyncWithWarnings, initializeKeybindingWatcher, disposeKeybindingWatcher, getCachedKeybindingWarnings, resetKeybindingLoaderForTesting, subscribeToKeybindingChanges, KeybindingsLoadResult
- functions: is, isKeybindingCustomizationEnabled, logCustomBindingsLoadedOncePerDay, isKeybindingBlock, isKeybindingBlockArray, getKeybindingsPath, getDefaultParsedBindings, loadKeybindings, loadKeybindingsSync, loadKeybindingsSyncWithWarnings, initializeKeybindingWatcher, disposeKeybindingWatcher, handleChange, handleDelete, getCachedKeybindingWarnings, resetKeybindingLoaderForTesting

## src/keybindings/match.ts

- lines: 121
- imports: 2
- exports: 3
- importance: 9
- tags: (none)
- exportedSymbols: getKeyName, matchesKeystroke, matchesBinding
- functions: ensures, getInkModifiers, getKeyName, modifiersMatch, matchesKeystroke, matchesBinding

## src/keybindings/parser.ts

- lines: 204
- imports: 1
- exports: 7
- importance: 17
- tags: (none)
- exportedSymbols: parseKeystroke, parseChord, keystrokeToString, chordToString, keystrokeToDisplayString, chordToDisplayString, parseBindings
- functions: parseKeystroke, parseChord, keystrokeToString, keyToDisplayName, chordToString, keystrokeToDisplayString, chordToDisplayString, parseBindings

## src/keybindings/reservedShortcuts.ts

- lines: 128
- imports: 1
- exports: 6
- importance: 14
- tags: (none)
- exportedSymbols: getReservedShortcuts, normalizeKeyForComparison, NON_REBINDABLE, TERMINAL_RESERVED, MACOS_RESERVED, ReservedShortcut
- functions: getReservedShortcuts, normalizeKeyForComparison, normalizeStep

## src/keybindings/resolver.ts

- lines: 245
- imports: 4
- exports: 6
- importance: 19
- tags: (none)
- exportedSymbols: resolveKey, getBindingDisplayText, keystrokesEqual, resolveKeyWithChordState, ResolveResult, ChordResolveResult
- functions: resolveKey, getBindingDisplayText, buildKeystroke, keystrokesEqual, chordPrefixMatches, chordExactlyMatches, handles, resolveKeyWithChordState

## src/keybindings/schema.ts

- lines: 237
- imports: 2
- exports: 6
- importance: 26
- tags: permissions, commands, state-memory
- exportedSymbols: KEYBINDING_CONTEXTS, KEYBINDING_CONTEXT_DESCRIPTIONS, KEYBINDING_ACTIONS, KeybindingBlockSchema, KeybindingsSchema, KeybindingsSchemaType

## src/keybindings/shortcutFormat.ts

- lines: 64
- imports: 4
- exports: 1
- importance: 6
- tags: state-memory
- exportedSymbols: getShortcutDisplay
- functions: getShortcutDisplay

## src/keybindings/template.ts

- lines: 53
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: generateKeybindingsTemplate
- functions: filterReservedShortcuts, generateKeybindingsTemplate

## src/keybindings/useKeybinding.ts

- lines: 197
- imports: 5
- exports: 2
- importance: 11
- tags: (none)
- exportedSymbols: useKeybinding, useKeybindings
- functions: useKeybinding, useKeybindings

## src/keybindings/useShortcutDisplay.ts

- lines: 60
- imports: 4
- exports: 1
- importance: 6
- tags: state-memory
- exportedSymbols: useShortcutDisplay
- functions: useShortcutDisplay

## src/keybindings/validate.ts

- lines: 499
- imports: 4
- exports: 9
- importance: 28
- tags: state-memory
- exportedSymbols: checkDuplicateKeysInJson, validateUserConfig, checkDuplicates, checkReservedShortcuts, validateBindings, formatWarning, formatWarnings, KeybindingWarningType, KeybindingWarning
- functions: isKeybindingBlock, isKeybindingBlockArray, isValidContext, validateKeystroke, validateBlock, checkDuplicateKeysInJson, validateUserConfig, checkDuplicates, checkReservedShortcuts, getUserBindingsForValidation, validateBindings, formatWarning, formatWarnings

## src/main.tsx

- lines: 4684
- imports: 164
- exports: 2
- importance: 146
- tags: auth, permissions, bridge, remote, mcp, tools, commands, state-memory, cost-budget
- topComment: These side-effects must run before all other imports:
- exportedSymbols: startDeferredPrefetches, main
- functions: logManagedSettings, isBeingDebugged, logSessionTelemetry, getCertEnvVarTelemetry, logStartupTelemetry, runMigrations, prefetchSystemContextIfSafe, startDeferredPrefetches, runs, loadSettingsFromFlag, loadSettingSourcesFromFlag, eagerLoadSettings, initializeEntrypoint, main, getInputPrompt, run, createSortedHelpConfig, to, logTenguInit, maybeActivateProactive, maybeActivateBrief, resetCursor, extractTeammateOptions

## src/memdir/findRelevantMemories.ts

- lines: 142
- imports: 7
- exports: 2
- importance: 24
- tags: auth, mcp, tools, cost-budget
- exportedSymbols: findRelevantMemories, RelevantMemory
- functions: findRelevantMemories, selectRelevantMemories

## src/memdir/memdir.ts

- lines: 508
- imports: 16
- exports: 12
- importance: 34
- tags: tools, state-memory
- exportedSymbols: truncateEntrypointContent, ensureMemoryDirExists, buildMemoryLines, buildMemoryPrompt, buildSearchingPastContextSection, loadMemoryPrompt, ENTRYPOINT_NAME, MAX_ENTRYPOINT_LINES, MAX_ENTRYPOINT_BYTES, DIR_EXISTS_GUIDANCE, DIRS_EXIST_GUIDANCE, EntrypointTruncation
- functions: truncateEntrypointContent, ensureMemoryDirExists, logMemoryDirCounts, buildMemoryLines, buildMemoryPrompt, buildAssistantDailyLogPrompt, buildSearchingPastContextSection, names, loadMemoryPrompt

## src/memdir/memoryAge.ts

- lines: 54
- imports: 0
- exports: 4
- importance: 8
- tags: tools, state-memory
- exportedSymbols: memoryAgeDays, memoryAge, memoryFreshnessText, memoryFreshnessNote
- functions: memoryAgeDays, memoryAge, memoryFreshnessText, memoryFreshnessNote

## src/memdir/memoryScan.ts

- lines: 95
- imports: 5
- exports: 3
- importance: 12
- tags: state-memory
- exportedSymbols: scanMemoryFiles, formatMemoryManifest, MemoryHeader
- functions: scanMemoryFiles, formatMemoryManifest

## src/memdir/memoryTypes.ts

- lines: 272
- imports: 0
- exports: 10
- importance: 33
- tags: auth, commands, state-memory, cost-budget
- exportedSymbols: parseMemoryType, MEMORY_TYPES, TYPES_SECTION_COMBINED, TYPES_SECTION_INDIVIDUAL, WHAT_NOT_TO_SAVE_SECTION, MEMORY_DRIFT_CAVEAT, WHEN_TO_ACCESS_SECTION, TRUSTING_RECALL_SECTION, MEMORY_FRONTMATTER_EXAMPLE, MemoryType
- functions: parseMemoryType, or

## src/memdir/paths.ts

- lines: 279
- imports: 9
- exports: 8
- importance: 38
- tags: permissions, tools, state-memory
- exportedSymbols: isAutoMemoryEnabled, isExtractModeActive, getMemoryBaseDir, hasAutoMemPathOverride, getAutoMemDailyLogPath, getAutoMemEntrypoint, isAutoMemPath, getAutoMemPath
- classes: of
- functions: isAutoMemoryEnabled, isExtractModeActive, getMemoryBaseDir, validateMemoryPath, getAutoMemPathOverride, getAutoMemPathSetting, hasAutoMemPathOverride, getAutoMemBase, getAutoMemDailyLogPath, getAutoMemEntrypoint, isAutoMemPath

## src/memdir/teamMemPaths.ts

- lines: 293
- imports: 5
- exports: 8
- importance: 24
- tags: tools
- exportedSymbols: isTeamMemoryEnabled, getTeamMemPath, getTeamMemEntrypoint, isTeamMemPath, validateTeamMemWritePath, validateTeamMemKey, isTeamMemFile, PathTraversalError
- classes: PathTraversalError
- functions: sanitizePathKey, isTeamMemoryEnabled, getTeamMemPath, getTeamMemEntrypoint, realpathDeepestExisting, isRealPathWithinTeamDir, isTeamMemPath, validateTeamMemWritePath, validateTeamMemKey, isTeamMemFile

## src/memdir/teamMemPrompts.ts

- lines: 101
- imports: 4
- exports: 1
- importance: 7
- tags: state-memory
- exportedSymbols: buildCombinedMemoryPrompt
- functions: buildCombinedMemoryPrompt

## src/migrations/migrateAutoUpdatesToSettings.ts

- lines: 62
- imports: 4
- exports: 1
- importance: 6
- tags: (none)
- exportedSymbols: migrateAutoUpdatesToSettings
- functions: migrateAutoUpdatesToSettings

## src/migrations/migrateBypassPermissionsAcceptedToSettings.ts

- lines: 41
- imports: 4
- exports: 1
- importance: 16
- tags: permissions
- exportedSymbols: migrateBypassPermissionsAcceptedToSettings
- functions: migrateBypassPermissionsAcceptedToSettings

## src/migrations/migrateEnableAllProjectMcpServersToSettings.ts

- lines: 119
- imports: 4
- exports: 1
- importance: 7
- tags: mcp
- exportedSymbols: migrateEnableAllProjectMcpServersToSettings
- functions: migrateEnableAllProjectMcpServersToSettings

## src/migrations/migrateFennecToOpus.ts

- lines: 46
- imports: 1
- exports: 1
- importance: 3
- tags: (none)
- exportedSymbols: migrateFennecToOpus
- functions: migrateFennecToOpus

## src/migrations/migrateLegacyOpusToCurrent.ts

- lines: 58
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: migrateLegacyOpusToCurrent
- functions: migrateLegacyOpusToCurrent

## src/migrations/migrateOpusToOpus1m.ts

- lines: 44
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: migrateOpusToOpus1m
- functions: migrateOpusToOpus1m

## src/migrations/migrateReplBridgeEnabledToRemoteControlAtStartup.ts

- lines: 23
- imports: 1
- exports: 1
- importance: 3
- tags: bridge
- exportedSymbols: migrateReplBridgeEnabledToRemoteControlAtStartup
- functions: migrateReplBridgeEnabledToRemoteControlAtStartup

## src/migrations/migrateSonnet1mToSonnet45.ts

- lines: 49
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: migrateSonnet1mToSonnet45
- functions: migrateSonnet1mToSonnet45

## src/migrations/migrateSonnet45ToSonnet46.ts

- lines: 68
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: migrateSonnet45ToSonnet46
- functions: migrateSonnet45ToSonnet46

## src/migrations/resetAutoModeOptInForDefaultOffer.ts

- lines: 52
- imports: 6
- exports: 1
- importance: 18
- tags: permissions, state-memory
- exportedSymbols: resetAutoModeOptInForDefaultOffer
- functions: resetAutoModeOptInForDefaultOffer

## src/migrations/resetProToOpusDefault.ts

- lines: 52
- imports: 5
- exports: 1
- importance: 7
- tags: (none)
- exportedSymbols: resetProToOpusDefault
- functions: resetProToOpusDefault

## src/moreright/useMoreRight.tsx

- lines: 26
- imports: 0
- exports: 1
- importance: 2
- tags: tools
- topComment: Stub for external builds — the real hook is internal only.
- exportedSymbols: useMoreRight
- functions: useMoreRight

## src/native-ts/color-diff/index.ts

- lines: 1000
- imports: 5
- exports: 8
- importance: 45
- tags: auth
- exportedSymbols: getSyntaxTheme, getNativeModule, ColorDiff, ColorFile, __test, Hunk, SyntaxTheme, NativeModule
- classes: ColorDiff, ColorFile
- functions: hljs, rgb, ansiIdx, detectColorMode, ansi256FromRgb, colorToEscape, asTerminalEscaped, defaultSyntaxThemeName, buildTheme, defaultStyle, lineBackground, wordBackground, decorationColor, detectLanguage, scopeColor, flattenHljs, hasRootNode, highlightLine, tokenize, findAdjacentPairs, wordDiffStrings, removeNewlines, charWidth, wrapText, addLineNumber, addMarker, dimContent, applyBackground, intoLines, maxLineNumber, parseMarker, getSyntaxTheme, getNativeModule

## src/native-ts/file-index/index.ts

- lines: 371
- imports: 0
- exports: 4
- importance: 12
- tags: (none)
- exportedSymbols: yieldToEventLoop, FileIndex, SearchResult, default
- classes: FileIndex
- functions: scoreBonusAt, isBoundary, isLower, isUpper, yieldToEventLoop, computeTopLevelEntries

## src/native-ts/yoga-layout/enums.ts

- lines: 135
- imports: 0
- exports: 32
- importance: 19
- tags: (none)
- exportedSymbols: Align, BoxSizing, Dimension, Direction, Display, Edge, Errata, ExperimentalFeature, FlexDirection, Gutter, Justify, MeasureMode, Overflow, PositionType, Unit, Wrap, Align, BoxSizing, Dimension, Direction, Display, Edge, Errata, ExperimentalFeature, FlexDirection, Gutter, Justify, MeasureMode, Overflow, PositionType, Unit, Wrap

## src/native-ts/yoga-layout/index.ts

- lines: 2579
- imports: 1
- exports: 9
- importance: 49
- tags: (none)
- exportedSymbols: getYogaCounters, loadYoga, Node, Value, MeasureFunction, Size, Config, Yoga, default
- classes: Node
- functions: pointValue, percentValue, resolveValue, isDefined, sameFloat, defaultStyle, resolveEdge, resolveEdgeRaw, isMarginAuto, hasAnyAutoEdge, hasAnyDefinedEdge, resolveEdges4Into, isRow, isReverse, crossAxis, leadingEdge, trailingEdge, createConfig, setMeasureFunc, cacheWrite, commitCacheOutputs, getYogaCounters, layoutNode, layoutAbsoluteChild, justifyAbsolute, alignAbsolute, computeFlexBasis, hasMeasureFuncInSubtree, resolveFlexibleLengths, isStretchAlign, resolveChildAlign, calculateBaseline, isBaselineLayout, childMarginForAxis, resolveGap, boundAxis, zeroLayoutRecursive, collectLayoutChildren, roundLayout, isWholeNumber

## src/outputStyles/loadOutputStylesDir.ts

- lines: 99
- imports: 8
- exports: 2
- importance: 13
- tags: (none)
- exportedSymbols: clearOutputStyleCaches, getOutputStyleDirStyles
- functions: clearOutputStyleCaches

## src/plugins/builtinPlugins.ts

- lines: 160
- imports: 4
- exports: 7
- importance: 20
- tags: mcp, tools, commands
- exportedSymbols: registerBuiltinPlugin, isBuiltinPluginId, getBuiltinPluginDefinition, getBuiltinPlugins, getBuiltinPluginSkillCommands, clearBuiltinPlugins, BUILTIN_MARKETPLACE_NAME
- functions: registerBuiltinPlugin, isBuiltinPluginId, getBuiltinPluginDefinition, getBuiltinPlugins, getBuiltinPluginSkillCommands, clearBuiltinPlugins, skillDefinitionToCommand

## src/plugins/bundled/index.ts

- lines: 24
- imports: 0
- exports: 1
- importance: 2
- tags: (none)
- exportedSymbols: initBuiltinPlugins
- functions: initBuiltinPlugins

## src/projectOnboardingState.ts

- lines: 84
- imports: 6
- exports: 6
- importance: 19
- tags: (none)
- exportedSymbols: getSteps, isProjectOnboardingComplete, maybeMarkProjectOnboardingComplete, incrementProjectOnboardingSeenCount, shouldShowProjectOnboarding, Step
- functions: getSteps, isProjectOnboardingComplete, maybeMarkProjectOnboardingComplete, incrementProjectOnboardingSeenCount

## src/query.ts

- lines: 1730
- imports: 43
- exports: 1
- importance: 145
- tags: auth, permissions, mcp, query-loop, tools, commands, state-memory, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: QueryParams
- functions: isWithheldMaxOutputTokens

## src/query/config.ts

- lines: 47
- imports: 4
- exports: 2
- importance: 30
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: buildQueryConfig, QueryConfig
- functions: buildQueryConfig

## src/query/deps.ts

- lines: 41
- imports: 4
- exports: 2
- importance: 18
- tags: query-loop, tools
- exportedSymbols: productionDeps, QueryDeps
- functions: productionDeps

## src/query/stopHooks.ts

- lines: 474
- imports: 21
- exports: 0
- importance: 35
- tags: permissions, mcp, query-loop, tools, state-memory

## src/query/tokenBudget.ts

- lines: 94
- imports: 1
- exports: 4
- importance: 32
- tags: auth, query-loop, cost-budget
- exportedSymbols: createBudgetTracker, checkTokenBudget, BudgetTracker, TokenBudgetDecision
- functions: createBudgetTracker, checkTokenBudget

## src/QueryEngine.ts

- lines: 1296
- imports: 51
- exports: 2
- importance: 130
- tags: permissions, mcp, query-loop, tools, commands, state-memory, cost-budget
- exportedSymbols: QueryEngine, QueryEngineConfig
- classes: that, QueryEngine
- functions: hook

## src/remote/remotePermissionBridge.ts

- lines: 79
- imports: 5
- exports: 2
- importance: 41
- tags: auth, permissions, remote, mcp, query-loop, tools
- exportedSymbols: createSyntheticAssistantMessage, createToolStub
- functions: createSyntheticAssistantMessage, createToolStub

## src/remote/RemoteSessionManager.ts

- lines: 344
- imports: 6
- exports: 5
- importance: 52
- tags: auth, permissions, remote, query-loop, tools, state-memory
- exportedSymbols: createRemoteSessionConfig, RemoteSessionManager, RemotePermissionResponse, RemoteSessionConfig, RemoteSessionCallbacks
- classes: RemoteSessionManager
- functions: isSDKMessage, createRemoteSessionConfig

## src/remote/sdkMessageAdapter.ts

- lines: 303
- imports: 5
- exports: 5
- importance: 28
- tags: bridge, remote, query-loop, tools, state-memory, cost-budget
- exportedSymbols: convertSDKMessage, isSessionEndMessage, isSuccessResult, getResultText, ConvertedMessage
- functions: convertAssistantMessage, convertStreamEvent, convertResultMessage, convertInitMessage, convertStatusMessage, convertToolProgressMessage, convertCompactBoundaryMessage, convertSDKMessage, isSessionEndMessage, isSuccessResult, getResultText

## src/remote/SessionsWebSocket.ts

- lines: 405
- imports: 10
- exports: 2
- importance: 31
- tags: auth, remote, state-memory, cost-budget
- exportedSymbols: SessionsWebSocket, SessionsWebSocketCallbacks
- classes: SessionsWebSocket
- functions: isSessionsMessage

## src/replLauncher.tsx

- lines: 23
- imports: 6
- exports: 1
- importance: 8
- tags: (none)
- exportedSymbols: launchRepl
- functions: launchRepl

## src/schemas/hooks.ts

- lines: 223
- imports: 4
- exports: 10
- importance: 56
- tags: auth, permissions, tools, hooks-security
- exportedSymbols: HookCommandSchema, HookMatcherSchema, HooksSchema, HookCommand, BashCommandHook, PromptHook, AgentHook, HttpHook, HookMatcher, HooksSettings
- functions: buildHookSchemas, value, hooks

## src/screens/Doctor.tsx

- lines: 575
- imports: 31
- exports: 1
- importance: 41
- tags: auth, permissions, mcp, tools
- exportedSymbols: Doctor
- functions: DistTagsDisplay, Doctor, _temp18, _temp17, _temp16, _temp15, _temp14, _temp13, _temp12, _temp11, _temp10, _temp1, _temp0, _temp9, _temp8, _temp7, _temp6, _temp5, _temp4, _temp3, _temp2, _temp

## src/screens/REPL.tsx

- lines: 5006
- imports: 244
- exports: 3
- importance: 78
- tags: auth, permissions, bridge, remote, mcp, query-loop, tools, commands, state-memory, cost-budget
- exportedSymbols: REPL, Props, Screen
- classes: as, as
- functions: identity, median, TranscriptModeFooter, TranscriptSearchBar, AnimatedTerminalTitle, _temp2, _temp, REPL, getFocusedInputDialog, onCancel, resolveOnce, processInitialMessage, onInit

## src/screens/ResumeConversation.tsx

- lines: 399
- imports: 35
- exports: 1
- importance: 16
- tags: mcp, tools, state-memory
- exportedSymbols: ResumeConversation
- functions: parsePrIdentifier, ResumeConversation, onCancel, onSelect, NoConversationsMessage, _temp, CrossProjectMessage, _temp3, _temp2

## src/server/createDirectConnectSession.ts

- lines: 89
- imports: 4
- exports: 2
- importance: 31
- tags: auth, permissions, state-memory
- exportedSymbols: createDirectConnectSession, DirectConnectError
- classes: DirectConnectError
- functions: createDirectConnectSession

## src/server/directConnectManager.ts

- lines: 214
- imports: 6
- exports: 3
- importance: 46
- tags: auth, permissions, remote, query-loop, tools, state-memory
- exportedSymbols: DirectConnectSessionManager, DirectConnectConfig, DirectConnectCallbacks
- classes: DirectConnectSessionManager
- functions: isStdoutMessage

## src/server/types.ts

- lines: 58
- imports: 3
- exports: 6
- importance: 37
- tags: auth, permissions, state-memory
- exportedSymbols: connectResponseSchema, ServerConfig, SessionState, SessionInfo, SessionIndexEntry, SessionIndex

## src/services/AgentSummary/agentSummary.ts

- lines: 180
- imports: 9
- exports: 1
- importance: 45
- tags: auth, tools, state-memory, cost-budget
- exportedSymbols: startAgentSummarization
- functions: buildSummaryPrompt, startAgentSummarization, runSummary, scheduleNext, stop

## src/services/analytics/config.ts

- lines: 39
- imports: 2
- exports: 2
- importance: 26
- tags: state-memory
- exportedSymbols: isAnalyticsDisabled, isFeedbackSurveyDisabled
- functions: isAnalyticsDisabled, isFeedbackSurveyDisabled

## src/services/analytics/datadog.ts

- lines: 308
- imports: 10
- exports: 3
- importance: 61
- tags: auth, bridge, mcp, query-loop, tools, state-memory
- exportedSymbols: shutdownDatadog, trackDatadogEvent, initializeDatadog
- functions: camelToSnakeCase, flushLogs, scheduleFlush, shutdownDatadog, trackDatadogEvent, getFlushIntervalMs

## src/services/analytics/firstPartyEventLogger.ts

- lines: 450
- imports: 19
- exports: 10
- importance: 53
- tags: state-memory
- exportedSymbols: getEventSamplingConfig, shouldSampleEvent, shutdown1PEventLogging, is1PEventLoggingEnabled, logEventTo1P, logGrowthBookExperimentTo1P, initialize1PEventLogging, reinitialize1PEventLoggingIfConfigChanged, EventSamplingConfig, GrowthBookExperimentData
- functions: getEventSamplingConfig, shouldSampleEvent, getBatchConfig, shutdown1PEventLogging, is1PEventLoggingEnabled, logEventTo1PAsync, logEventTo1P, getEnvironmentForGrowthBook, logGrowthBookExperimentTo1P, initialize1PEventLogging, reinitialize1PEventLoggingIfConfigChanged

## src/services/analytics/firstPartyEventLoggingExporter.ts

- lines: 807
- imports: 25
- exports: 1
- importance: 54
- tags: auth, state-memory
- exportedSymbols: FirstPartyEventLoggingExporter
- classes: FirstPartyEventLoggingExporter
- functions: getStorageDir, getAxiosErrorContext

## src/services/analytics/growthbook.ts

- lines: 1156
- imports: 13
- exports: 22
- importance: 74
- tags: auth, mcp, state-memory
- exportedSymbols: onGrowthBookRefresh, hasGrowthBookEnvOverride, getAllGrowthBookFeatures, getGrowthBookConfigOverrides, setGrowthBookConfigOverride, clearGrowthBookConfigOverrides, getApiBaseUrlHost, getFeatureValue_DEPRECATED, getFeatureValue_CACHED_MAY_BE_STALE, getFeatureValue_CACHED_WITH_REFRESH, checkStatsigFeatureGate_CACHED_MAY_BE_STALE, checkSecurityRestrictionGate, checkGate_CACHED_OR_BLOCKING, refreshGrowthBookAfterAuthChange, resetGrowthBook, refreshGrowthBookFeatures, setupPeriodicGrowthBookRefresh, stopPeriodicGrowthBookRefresh, getDynamicConfig_BLOCKS_ON_INIT, getDynamicConfig_CACHED_MAY_BE_STALE, initializeGrowthBook, GrowthBookUserAttributes
- functions: callSafe, onGrowthBookRefresh, getEnvOverrides, hasGrowthBookEnvOverride, getConfigOverrides, getAllGrowthBookFeatures, getGrowthBookConfigOverrides, setGrowthBookConfigOverride, clearGrowthBookConfigOverrides, logExposureForFeature, processRemoteEvalPayload, syncRemoteEvalToDisk, isGrowthBookEnabled, getApiBaseUrlHost, getUserAttributes, getFeatureValueInternal, blocks, getFeatureValue_DEPRECATED, getFeatureValue_CACHED_MAY_BE_STALE, getFeatureValue_CACHED_WITH_REFRESH, is, checkStatsigFeatureGate_CACHED_MAY_BE_STALE, checkSecurityRestrictionGate, checkGate_CACHED_OR_BLOCKING, refreshGrowthBookAfterAuthChange, resetGrowthBook, refreshGrowthBookFeatures, setupPeriodicGrowthBookRefresh, stopPeriodicGrowthBookRefresh, getDynamicConfig_BLOCKS_ON_INIT, getDynamicConfig_CACHED_MAY_BE_STALE

## src/services/analytics/index.ts

- lines: 174
- imports: 0
- exports: 8
- importance: 38
- tags: (none)
- exportedSymbols: stripProtoFields, attachAnalyticsSink, logEvent, logEventAsync, _resetForTesting, AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED, AnalyticsSink
- functions: stripProtoFields, attachAnalyticsSink, logEvent, logEventAsync, _resetForTesting

## src/services/analytics/metadata.ts

- lines: 974
- imports: 19
- exports: 18
- importance: 92
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: sanitizeToolNameForAnalytics, isToolDetailsLoggingEnabled, isAnalyticsToolDetailsLoggingEnabled, mcpToolDetailsForAnalytics, extractMcpToolDetails, extractSkillName, extractToolInputForTelemetry, getFileExtensionForAnalytics, getFileExtensionsFromBashCommand, getEventMetadata, to1PEventFormat, AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, EnvContext, ProcessMetrics, EventMetadata, EnrichMetadataOptions, FirstPartyEventLoggingCoreMetadata, FirstPartyEventLoggingMetadata
- functions: redacts, sanitizeToolNameForAnalytics, isToolDetailsLoggingEnabled, isAnalyticsToolDetailsLoggingEnabled, mcpToolDetailsForAnalytics, extractMcpToolDetails, extractSkillName, truncateToolInputValue, extractToolInputForTelemetry, getFileExtensionForAnalytics, getFileExtensionsFromBashCommand, getAgentIdentification, buildProcessMetrics, collects, getEventMetadata, to1PEventFormat

## src/services/analytics/sink.ts

- lines: 115
- imports: 5
- exports: 2
- importance: 30
- tags: state-memory
- exportedSymbols: initializeAnalyticsGates, initializeAnalyticsSink
- functions: shouldTrackDatadog, logEventImpl, logEventAsyncImpl, initializeAnalyticsGates, initializeAnalyticsSink

## src/services/analytics/sinkKillswitch.ts

- lines: 26
- imports: 1
- exports: 2
- importance: 25
- tags: (none)
- exportedSymbols: isSinkKilled, SinkName
- functions: isSinkKilled

## src/services/api/adminRequests.ts

- lines: 120
- imports: 3
- exports: 8
- importance: 62
- tags: auth, permissions
- exportedSymbols: createAdminRequest, getMyAdminRequests, checkAdminRequestEligibility, AdminRequestType, AdminRequestStatus, AdminRequestSeatUpgradeDetails, AdminRequestCreateParams, AdminRequest
- functions: createAdminRequest, getMyAdminRequests, checkAdminRequestEligibility

## src/services/api/bootstrap.ts

- lines: 142
- imports: 13
- exports: 1
- importance: 45
- tags: auth
- exportedSymbols: fetchBootstrapData
- functions: fetchBootstrapAPI, fetchBootstrapData

## src/services/api/claude.ts

- lines: 3420
- imports: 77
- exports: 21
- importance: 110
- tags: auth, permissions, mcp, query-loop, tools, state-memory, cost-budget
- exportedSymbols: getExtraBodyParams, getPromptCachingEnabled, getCacheControl, configureTaskBudgetParams, getAPIMetadata, verifyApiKey, userMessageToMessageParam, assistantMessageToMessageParam, queryModelWithoutStreaming, stripExcessMediaItems, cleanupStream, updateUsage, accumulateUsage, addCacheBreakpoints, buildSystemPromptBlocks, queryHaiku, queryWithModel, adjustParamsForNonStreaming, getMaxOutputTokensForModel, MAX_NON_STREAMING_TOKENS, Options
- functions: getExtraBodyParams, getPromptCachingEnabled, getCacheControl, should1hCacheTTL, configureEffortParams, configureTaskBudgetParams, getAPIMetadata, verifyApiKey, userMessageToMessageParam, assistantMessageToMessageParam, queryModelWithoutStreaming, shouldDeferLspTool, getNonstreamingFallbackTimeoutMs, getPreviousRequestIdFromMessages, isMedia, isToolResult, stripExcessMediaItems, releaseStreamResources, clearStreamIdleTimers, resetStreamIdleTimer, cleanupStream, updateUsage, accumulateUsage, isToolResultBlock, addCacheBreakpoints, buildSystemPromptBlocks, queryHaiku, queryWithModel, adjustParamsForNonStreaming, isMaxTokensCapEnabled, getMaxOutputTokensForModel

## src/services/api/client.ts

- lines: 390
- imports: 12
- exports: 2
- importance: 50
- tags: auth, state-memory
- exportedSymbols: getAnthropicClient, CLIENT_REQUEST_ID_HEADER
- functions: createStderrLogger, getAnthropicClient, configureApiKeyHeaders, getCustomHeaders, buildFetch

## src/services/api/dumpPrompts.ts

- lines: 227
- imports: 7
- exports: 7
- importance: 43
- tags: tools, state-memory
- exportedSymbols: getLastApiRequests, clearApiRequestCache, clearDumpState, clearAllDumpState, addApiRequestToCache, getDumpPromptsPath, createDumpPromptsFetch
- functions: hashString, getLastApiRequests, clearApiRequestCache, clearDumpState, clearAllDumpState, addApiRequestToCache, getDumpPromptsPath, appendToFile, initFingerprint, dumpRequest, createDumpPromptsFetch

## src/services/api/emptyUsage.ts

- lines: 23
- imports: 1
- exports: 1
- importance: 45
- tags: auth, bridge, query-loop, tools
- exportedSymbols: EMPTY_USAGE

## src/services/api/errors.ts

- lines: 1208
- imports: 20
- exports: 32
- importance: 85
- tags: auth, query-loop, tools, state-memory, cost-budget
- exportedSymbols: startsWithApiErrorPrefix, isPromptTooLongMessage, parsePromptTooLongTokenCounts, getPromptTooLongTokenGap, isMediaSizeError, isMediaSizeErrorMessage, getPdfTooLargeErrorMessage, getPdfPasswordProtectedErrorMessage, getPdfInvalidErrorMessage, getImageTooLargeErrorMessage, getRequestTooLargeErrorMessage, getTokenRevokedErrorMessage, getOauthOrgNotAllowedErrorMessage, isValidAPIMessage, extractUnknownErrorFormat, getAssistantMessageFromError, classifyAPIError, categorizeRetryableAPIError, getErrorMessageIfRefusal, API_ERROR_MESSAGE_PREFIX, PROMPT_TOO_LONG_ERROR_MESSAGE, CREDIT_BALANCE_TOO_LOW_ERROR_MESSAGE, INVALID_API_KEY_ERROR_MESSAGE, INVALID_API_KEY_ERROR_MESSAGE_EXTERNAL, ORG_DISABLED_ERROR_MESSAGE_ENV_KEY_WITH_OAUTH, ORG_DISABLED_ERROR_MESSAGE_ENV_KEY, TOKEN_REVOKED_ERROR_MESSAGE, CCR_AUTH_ERROR_MESSAGE, REPEATED_529_ERROR_MESSAGE, CUSTOM_OFF_SWITCH_MESSAGE, API_TIMEOUT_ERROR_MESSAGE, OAUTH_ORG_NOT_ALLOWED_ERROR_MESSAGE
- functions: startsWithApiErrorPrefix, isPromptTooLongMessage, parsePromptTooLongTokenCounts, getPromptTooLongTokenGap, isMediaSizeError, isMediaSizeErrorMessage, getPdfTooLargeErrorMessage, getPdfPasswordProtectedErrorMessage, getPdfInvalidErrorMessage, getImageTooLargeErrorMessage, getRequestTooLargeErrorMessage, getTokenRevokedErrorMessage, getOauthOrgNotAllowedErrorMessage, isCCRMode, logToolUseToolResultMismatch, isValidAPIMessage, extractUnknownErrorFormat, getAssistantMessageFromError, get3PModelFallbackSuggestion, classifyAPIError, categorizeRetryableAPIError, getErrorMessageIfRefusal

## src/services/api/errorUtils.ts

- lines: 261
- imports: 1
- exports: 5
- importance: 46
- tags: auth, state-memory
- exportedSymbols: extractConnectionErrorDetails, getSSLErrorHint, sanitizeAPIError, formatAPIError, ConnectionErrorDetails
- functions: walks, extractConnectionErrorDetails, getSSLErrorHint, sanitizeMessageHTML, sanitizeAPIError, hasNestedError, extractNestedErrorMessage, formatAPIError

## src/services/api/filesApi.ts

- lines: 749
- imports: 11
- exports: 13
- importance: 69
- tags: auth, state-memory
- exportedSymbols: downloadFile, buildDownloadPath, downloadAndSaveFile, downloadSessionFiles, uploadFile, uploadSessionFiles, listFilesCreatedAfter, parseFileSpecs, File, FilesApiConfig, DownloadResult, UploadResult, FileMetadata
- classes: for, UploadNonRetriableError
- functions: getDefaultApiBaseUrl, logDebugError, logDebug, retryWithBackoff, downloadFile, buildDownloadPath, downloadAndSaveFile, to, parallelWithLimit, worker, downloadSessionFiles, uploadFile, uploadSessionFiles, listFilesCreatedAfter, parseFileSpecs

## src/services/api/firstTokenDate.ts

- lines: 61
- imports: 6
- exports: 1
- importance: 40
- tags: auth
- exportedSymbols: fetchAndStoreClaudeCodeFirstTokenDate
- functions: fetchAndStoreClaudeCodeFirstTokenDate

## src/services/api/grove.ts

- lines: 358
- imports: 13
- exports: 10
- importance: 64
- tags: auth, state-memory
- exportedSymbols: markGroveNoticeViewed, updateGroveSettings, isQualifiedForGrove, calculateShouldShowGrove, checkGroveForNonInteractive, getGroveSettings, getGroveNoticeConfig, AccountSettings, GroveConfig, ApiResult
- functions: markGroveNoticeViewed, updateGroveSettings, never, isQualifiedForGrove, fetchAndStoreGroveConfig, calculateShouldShowGrove, checkGroveForNonInteractive

## src/services/api/logging.ts

- lines: 789
- imports: 22
- exports: 4
- importance: 79
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: logAPIQuery, logAPIError, logAPISuccessAndDuration, GlobalCacheStrategy
- functions: getErrorMessage, detectGateway, getAnthropicEnvMetadata, getBuildAgeMinutes, logAPIQuery, logAPIError, logAPISuccess, logAPISuccessAndDuration

## src/services/api/metricsOptOut.ts

- lines: 160
- imports: 10
- exports: 2
- importance: 48
- tags: auth, state-memory
- exportedSymbols: checkMetricsEnabled, _clearMetricsEnabledCacheForTesting
- functions: to, _fetchMetricsEnabled, _checkMetricsEnabledAPI, refreshMetricsStatus, checkMetricsEnabled

## src/services/api/overageCreditGrant.ts

- lines: 138
- imports: 7
- exports: 5
- importance: 60
- tags: auth, permissions
- exportedSymbols: getCachedOverageCreditGrant, invalidateOverageCreditGrantCache, refreshOverageCreditGrantCache, formatGrantAmount, OverageCreditGrantInfo
- functions: fetchOverageCreditGrant, getCachedOverageCreditGrant, invalidateOverageCreditGrantCache, refreshOverageCreditGrantCache, formatGrantAmount

## src/services/api/promptCacheBreakDetection.ts

- lines: 728
- imports: 14
- exports: 8
- importance: 77
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: recordPromptState, checkResponseForCacheBreak, notifyCacheDeletion, notifyCompaction, cleanupAgentTracking, resetPromptCacheBreakDetection, CACHE_TTL_1HOUR_MS, PromptStateSnapshot
- functions: getCacheBreakDiffPath, isExcludedModel, getTrackingKey, stripCacheControl, computeHash, sanitizeToolName, computePerToolHashes, getSystemCharCount, buildDiffableContent, recordPromptState, checkResponseForCacheBreak, notifyCacheDeletion, notifyCompaction, cleanupAgentTracking, resetPromptCacheBreakDetection, writeCacheBreakDiff

## src/services/api/referral.ts

- lines: 282
- imports: 9
- exports: 9
- importance: 62
- tags: auth, state-memory
- exportedSymbols: fetchReferralEligibility, fetchReferralRedemptions, checkCachedPassesEligibility, formatCreditAmount, getCachedReferrerReward, getCachedRemainingPasses, fetchAndStorePassesEligibility, getCachedOrFetchPassesEligibility, prefetchPassesEligibility
- functions: fetchReferralEligibility, fetchReferralRedemptions, shouldCheckForPasses, checkCachedPassesEligibility, formatCreditAmount, getCachedReferrerReward, getCachedRemainingPasses, fetchAndStorePassesEligibility, never, getCachedOrFetchPassesEligibility, prefetchPassesEligibility

## src/services/api/sessionIngress.ts

- lines: 515
- imports: 13
- exports: 6
- importance: 60
- tags: auth, state-memory
- exportedSymbols: appendSessionLog, getSessionLogs, getSessionLogsViaOAuth, getTeleportEvents, clearSession, clearAllSessions
- functions: getOrCreateSequentialAppend, appendSessionLogImpl, appendSessionLog, getSessionLogs, getSessionLogsViaOAuth, getTeleportEvents, fetchSessionLogsFromUrl, findLastUuid, clearSession, clearAllSessions

## src/services/api/ultrareviewQuota.ts

- lines: 39
- imports: 5
- exports: 2
- importance: 41
- tags: auth, state-memory
- exportedSymbols: fetchUltrareviewQuota, UltrareviewQuotaResponse
- functions: fetchUltrareviewQuota

## src/services/api/usage.ts

- lines: 64
- imports: 6
- exports: 4
- importance: 46
- tags: auth
- exportedSymbols: fetchUtilization, RateLimit, ExtraUsage, Utilization
- functions: fetchUtilization

## src/services/api/withRetry.ts

- lines: 823
- imports: 23
- exports: 8
- importance: 68
- tags: auth, state-memory, cost-budget
- exportedSymbols: getRetryDelay, parseMaxTokensContextOverflowError, is529Error, getDefaultMaxRetries, CannotRetryError, FallbackTriggeredError, BASE_DELAY_MS, RetryContext
- classes: CannotRetryError, FallbackTriggeredError
- functions: shouldRetry529, isPersistentRetryEnabled, isTransientCapacityError, isStaleConnectionError, getRetryAfter, getRetryDelay, parseMaxTokensContextOverflowError, isFastModeNotEnabledError, is529Error, isOAuthTokenRevokedError, isBedrockAuthError, handleAwsCredentialError, isGoogleAuthLibraryCredentialError, isVertexAuthError, handleGcpCredentialError, shouldRetry, getDefaultMaxRetries, getMaxRetries, getRetryAfterMs, getRateLimitResetDelayMs

## src/services/autoDream/autoDream.ts

- lines: 325
- imports: 18
- exports: 2
- importance: 70
- tags: auth, permissions, query-loop, tools, state-memory
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: initAutoDream, executeAutoDream
- functions: getConfig, isGateOpen, isForced, initAutoDream, runAutoDream, makeDreamProgressWatcher, executeAutoDream

## src/services/autoDream/config.ts

- lines: 22
- imports: 2
- exports: 1
- importance: 24
- tags: (none)
- topComment: Leaf config module — intentionally minimal imports so UI components
- exportedSymbols: isAutoDreamEnabled
- functions: isAutoDreamEnabled

## src/services/autoDream/consolidationLock.ts

- lines: 141
- imports: 8
- exports: 5
- importance: 39
- tags: state-memory
- topComment: Lock file whose mtime IS lastConsolidatedAt. Body is the holder's PID.
- exportedSymbols: readLastConsolidatedAt, tryAcquireConsolidationLock, rollbackConsolidationLock, listSessionsTouchedSince, recordConsolidation
- functions: lockPath, readLastConsolidatedAt, tryAcquireConsolidationLock, rollbackConsolidationLock, listSessionsTouchedSince, recordConsolidation

## src/services/autoDream/consolidationPrompt.ts

- lines: 66
- imports: 1
- exports: 1
- importance: 23
- tags: state-memory
- topComment: Extracted from dream.ts so auto-dream ships independently of KAIROS
- exportedSymbols: buildConsolidationPrompt
- functions: buildConsolidationPrompt

## src/services/awaySummary.ts

- lines: 75
- imports: 9
- exports: 1
- importance: 41
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: generateAwaySummary
- functions: buildAwaySummaryPrompt, generateAwaySummary

## src/services/claudeAiLimits.ts

- lines: 516
- imports: 15
- exports: 9
- importance: 66
- tags: auth, state-memory, cost-budget
- exportedSymbols: getRateLimitDisplayName, getRawUtilization, emitStatusChange, checkQuotaStatus, extractQuotaStatusFromHeaders, extractQuotaStatusFromError, statusListeners, OverageDisabledReason, ClaudeAILimits
- functions: getRateLimitDisplayName, computeTimeProgress, getRawUtilization, extractRawUtilization, emitStatusChange, makeTestQuery, checkQuotaStatus, getHeaderBasedEarlyWarning, getTimeRelativeEarlyWarning, getEarlyWarningFromHeaders, computeNewLimitsFromHeaders, cacheExtraUsageDisabledReason, extractQuotaStatusFromHeaders, extractQuotaStatusFromError

## src/services/claudeAiLimitsHook.ts

- lines: 24
- imports: 2
- exports: 1
- importance: 24
- tags: (none)
- exportedSymbols: useClaudeAiLimits
- functions: useClaudeAiLimits

## src/services/compact/apiMicrocompact.ts

- lines: 154
- imports: 10
- exports: 3
- importance: 59
- tags: auth, query-loop, tools
- exportedSymbols: getAPIContextManagement, ContextEditStrategy, ContextManagementConfig
- functions: getAPIContextManagement

## src/services/compact/autoCompact.ts

- lines: 352
- imports: 21
- exports: 11
- importance: 64
- tags: auth, tools, state-memory
- exportedSymbols: getEffectiveContextWindowSize, getAutoCompactThreshold, calculateTokenWarningState, isAutoCompactEnabled, shouldAutoCompact, autoCompactIfNeeded, AUTOCOMPACT_BUFFER_TOKENS, WARNING_THRESHOLD_BUFFER_TOKENS, ERROR_THRESHOLD_BUFFER_TOKENS, MANUAL_COMPACT_BUFFER_TOKENS, AutoCompactTrackingState
- functions: getEffectiveContextWindowSize, getAutoCompactThreshold, calculateTokenWarningState, isAutoCompactEnabled, shouldAutoCompact, autoCompactIfNeeded

## src/services/compact/compact.ts

- lines: 1706
- imports: 48
- exports: 25
- importance: 101
- tags: auth, permissions, bridge, remote, mcp, query-loop, tools, state-memory, cost-budget
- exportedSymbols: stripImagesFromMessages, stripReinjectedAttachments, truncateHeadForPTLRetry, buildPostCompactMessages, annotateBoundaryWithPreservedSegment, mergeHookInstructions, compactConversation, partialCompactConversation, createCompactCanUseTool, createPostCompactFileAttachments, createPlanAttachmentIfNeeded, createSkillAttachmentIfNeeded, createPlanModeAttachmentIfNeeded, createAsyncAgentAttachmentsIfNeeded, POST_COMPACT_MAX_FILES_TO_RESTORE, POST_COMPACT_TOKEN_BUDGET, POST_COMPACT_MAX_TOKENS_PER_FILE, POST_COMPACT_MAX_TOKENS_PER_SKILL, POST_COMPACT_SKILLS_TOKEN_BUDGET, ERROR_MESSAGE_NOT_ENOUGH_MESSAGES, ERROR_MESSAGE_PROMPT_TOO_LONG, ERROR_MESSAGE_USER_ABORT, ERROR_MESSAGE_INCOMPLETE_RESPONSE, RecompactionInfo, CompactionResult
- functions: stripImagesFromMessages, stripReinjectedAttachments, truncateHeadForPTLRetry, buildPostCompactMessages, annotateBoundaryWithPreservedSegment, mergeHookInstructions, compactConversation, partialCompactConversation, addErrorNotificationIfNeeded, createCompactCanUseTool, streamCompactSummary, createPostCompactFileAttachments, createPlanAttachmentIfNeeded, createSkillAttachmentIfNeeded, createPlanModeAttachmentIfNeeded, createAsyncAgentAttachmentsIfNeeded, collectReadToolFilePaths, truncateToTokens, shouldExcludeFromPostCompactRestore

## src/services/compact/compactWarningHook.ts

- lines: 17
- imports: 2
- exports: 1
- importance: 24
- tags: (none)
- exportedSymbols: useCompactWarningSuppression
- functions: useCompactWarningSuppression

## src/services/compact/compactWarningState.ts

- lines: 19
- imports: 1
- exports: 3
- importance: 39
- tags: auth
- exportedSymbols: suppressCompactWarning, clearCompactWarningSuppression, compactWarningStore
- functions: suppressCompactWarning, clearCompactWarningSuppression

## src/services/compact/grouping.ts

- lines: 64
- imports: 1
- exports: 1
- importance: 45
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: groupMessagesByApiRound
- functions: groupMessagesByApiRound

## src/services/compact/microCompact.ts

- lines: 531
- imports: 21
- exports: 11
- importance: 76
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: consumePendingCacheEdits, getPinnedCacheEdits, pinCacheEdits, markToolsSentToAPIState, resetMicrocompactState, estimateMessageTokens, microcompactMessages, evaluateTimeBasedTrigger, TIME_BASED_MC_CLEARED_MESSAGE, PendingCacheEdits, MicrocompactResult
- functions: getCachedMCModule, ensureCachedMCState, consumePendingCacheEdits, getPinnedCacheEdits, pinCacheEdits, markToolsSentToAPIState, resetMicrocompactState, calculateToolResultTokens, estimateMessageTokens, collectCompactableToolIds, isMainThreadSource, microcompactMessages, cachedMicrocompactPath, evaluateTimeBasedTrigger, maybeTimeBasedMicrocompact

## src/services/compact/postCompactCleanup.ts

- lines: 78
- imports: 10
- exports: 1
- importance: 54
- tags: auth, permissions, tools, state-memory
- exportedSymbols: runPostCompactCleanup
- functions: runPostCompactCleanup

## src/services/compact/prompt.ts

- lines: 375
- imports: 2
- exports: 4
- importance: 34
- tags: tools, state-memory
- exportedSymbols: getPartialCompactPrompt, getCompactPrompt, formatCompactSummary, getCompactUserSummaryMessage
- functions: signatures, signatures, getPartialCompactPrompt, getCompactPrompt, formatCompactSummary, getCompactUserSummaryMessage

## src/services/compact/sessionMemoryCompact.ts

- lines: 631
- imports: 19
- exports: 10
- importance: 87
- tags: auth, permissions, query-loop, tools, state-memory, cost-budget
- exportedSymbols: setSessionMemoryCompactConfig, getSessionMemoryCompactConfig, resetSessionMemoryCompactConfig, hasTextBlocks, adjustIndexToPreserveAPIInvariants, calculateMessagesToKeepIndex, shouldUseSessionMemoryCompaction, trySessionMemoryCompaction, DEFAULT_SM_COMPACT_CONFIG, SessionMemoryCompactConfig
- functions: setSessionMemoryCompactConfig, getSessionMemoryCompactConfig, resetSessionMemoryCompactConfig, initSessionMemoryCompactConfig, hasTextBlocks, getToolResultIds, hasToolUseWithIds, adjustIndexToPreserveAPIInvariants, calculateMessagesToKeepIndex, shouldUseSessionMemoryCompaction, createCompactionResultFromSessionMemory, trySessionMemoryCompaction

## src/services/compact/timeBasedMCConfig.ts

- lines: 44
- imports: 1
- exports: 2
- importance: 25
- tags: tools
- exportedSymbols: getTimeBasedMCConfig, TimeBasedMCConfig
- functions: getTimeBasedMCConfig

## src/services/diagnosticTracking.ts

- lines: 398
- imports: 8
- exports: 4
- importance: 40
- tags: mcp, tools
- exportedSymbols: DiagnosticTrackingService, diagnosticTracker, Diagnostic, DiagnosticFile
- classes: DiagnosticsTrackingError, DiagnosticTrackingService

## src/services/extractMemories/extractMemories.ts

- lines: 616
- imports: 26
- exports: 4
- importance: 77
- tags: auth, permissions, query-loop, tools, state-memory
- exportedSymbols: createAutoMemCanUseTool, initExtractMemories, executeExtractMemories, drainPendingExtraction
- functions: isModelVisibleMessage, countModelVisibleMessagesSince, hasMemoryWritesSince, denyAutoMemTool, that, createAutoMemCanUseTool, getWrittenFilePath, extractWrittenPaths, initExtractMemories, runExtraction, executeExtractMemoriesImpl, executeExtractMemories, drainPendingExtraction

## src/services/extractMemories/prompts.ts

- lines: 155
- imports: 8
- exports: 2
- importance: 33
- tags: mcp, tools, cost-budget
- exportedSymbols: buildExtractAutoOnlyPrompt, buildExtractCombinedPrompt
- functions: opener, buildExtractAutoOnlyPrompt, buildExtractCombinedPrompt

## src/services/internalLogging.ts

- lines: 91
- imports: 5
- exports: 2
- importance: 40
- tags: permissions, tools
- exportedSymbols: logPermissionContextForAnts, getContainerId
- functions: logPermissionContextForAnts

## src/services/lsp/config.ts

- lines: 80
- imports: 7
- exports: 1
- importance: 30
- tags: (none)
- exportedSymbols: getAllLspServers
- functions: getAllLspServers

## src/services/lsp/LSPClient.ts

- lines: 448
- imports: 7
- exports: 2
- importance: 36
- tags: (none)
- exportedSymbols: createLSPClient, LSPClient
- functions: createLSPClient, checkStartFailed

## src/services/lsp/LSPDiagnosticRegistry.ts

- lines: 387
- imports: 7
- exports: 7
- importance: 45
- tags: state-memory
- exportedSymbols: registerPendingLSPDiagnostic, checkForLSPDiagnostics, clearAllLSPDiagnostics, resetAllLSPDiagnosticState, clearDeliveredDiagnosticsForFile, getPendingLSPDiagnosticCount, PendingLSPDiagnostic
- functions: registerPendingLSPDiagnostic, severityToNumber, createDiagnosticKey, deduplicateDiagnosticFiles, checkForLSPDiagnostics, clearAllLSPDiagnostics, resetAllLSPDiagnosticState, clearDeliveredDiagnosticsForFile, getPendingLSPDiagnosticCount

## src/services/lsp/LSPServerInstance.ts

- lines: 512
- imports: 10
- exports: 2
- importance: 40
- tags: (none)
- exportedSymbols: createLSPServerInstance, LSPServerInstance
- functions: pattern, createLSPServerInstance, start, stop, restart, isHealthy, sendRequest, sendNotification, to, onNotification, to, onRequest, withTimeout

## src/services/lsp/LSPServerManager.ts

- lines: 421
- imports: 8
- exports: 2
- importance: 37
- tags: (none)
- exportedSymbols: createLSPServerManager, LSPServerManager
- functions: pattern, createLSPServerManager, initialize, shutdown, getServerForFile, ensureServerStarted, sendRequest, getAllServers, openFile, changeFile, saveFile, closeFile, isFileOpen

## src/services/lsp/manager.ts

- lines: 290
- imports: 6
- exports: 8
- importance: 45
- tags: mcp, tools
- exportedSymbols: _resetLspManagerForTesting, getLspServerManager, getInitializationStatus, isLspConnected, waitForInitialization, initializeLspServerManager, reinitializeLspServerManager, shutdownLspServerManager
- functions: _resetLspManagerForTesting, getLspServerManager, getInitializationStatus, isLspConnected, waitForInitialization, is, initializeLspServerManager, reinitializeLspServerManager, shutdownLspServerManager

## src/services/lsp/passiveFeedback.ts

- lines: 329
- imports: 9
- exports: 3
- importance: 39
- tags: (none)
- exportedSymbols: formatDiagnosticsForAttachment, registerLSPNotificationHandlers, HandlerRegistrationResult
- functions: mapLSPSeverity, formatDiagnosticsForAttachment, registerLSPNotificationHandlers

## src/services/MagicDocs/magicDocs.ts

- lines: 255
- imports: 11
- exports: 4
- importance: 41
- tags: tools
- exportedSymbols: clearTrackedMagicDocs, detectMagicDocHeader, registerMagicDoc, initMagicDocs
- functions: clearTrackedMagicDocs, detectMagicDocHeader, registerMagicDoc, getMagicDocsAgent, updateMagicDoc, initMagicDocs

## src/services/MagicDocs/prompts.ts

- lines: 128
- imports: 3
- exports: 1
- importance: 26
- tags: tools
- exportedSymbols: buildMagicDocsUpdatePrompt
- functions: getUpdatePromptTemplate, loadMagicDocsPrompt, substituteVariables, buildMagicDocsUpdatePrompt

## src/services/mcp/auth.ts

- lines: 2466
- imports: 30
- exports: 13
- importance: 90
- tags: auth, mcp, state-memory
- exportedSymbols: normalizeOAuthErrorBody, getServerKey, hasMcpDiscoveryButNoToken, revokeServerTokens, clearServerTokensFromLocalStorage, performMCPOAuthFlow, wrapFetchWithStepUpDetection, readClientSecret, saveMcpClientSecret, clearMcpClientConfig, getMcpClientConfig, AuthenticationCancelledError, ClaudeAuthProvider
- classes: mapping, AuthenticationCancelledError, ClaudeAuthProvider
- functions: redactSensitiveUrlParams, normalizeOAuthErrorBody, with, createAuthFetch, fetchAuthServerMetadata, getServerKey, hasMcpDiscoveryButNoToken, revokeToken, revokeServerTokens, clearServerTokensFromLocalStorage, performMCPXaaAuth, performMCPOAuthFlow, wrapFetchWithStepUpDetection, readClientSecret, saveMcpClientSecret, clearMcpClientConfig, getMcpClientConfig, getScopeFromMetadata

## src/services/mcp/channelAllowlist.ts

- lines: 77
- imports: 4
- exports: 4
- importance: 32
- tags: mcp, state-memory
- exportedSymbols: getChannelAllowlist, isChannelsEnabled, isChannelAllowlisted, ChannelAllowlistEntry
- functions: getChannelAllowlist, isChannelsEnabled, isChannelAllowlisted

## src/services/mcp/channelNotification.ts

- lines: 317
- imports: 10
- exports: 10
- importance: 73
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: wrapChannelMessage, getEffectiveChannelAllowlist, findChannelEntry, gateChannelServer, ChannelMessageNotificationSchema, CHANNEL_PERMISSION_METHOD, ChannelPermissionNotificationSchema, CHANNEL_PERMISSION_REQUEST_METHOD, ChannelPermissionRequestParams, ChannelGateResult
- functions: wrapChannelMessage, getEffectiveChannelAllowlist, findChannelEntry, gateChannelServer

## src/services/mcp/channelPermissions.ts

- lines: 241
- imports: 2
- exports: 8
- importance: 51
- tags: permissions, bridge, mcp, tools, state-memory
- exportedSymbols: isChannelPermissionRelayEnabled, shortRequestId, truncateForPreview, filterPermissionRelayClients, createChannelPermissionCallbacks, PERMISSION_REPLY_RE, ChannelPermissionResponse, ChannelPermissionCallbacks
- functions: isChannelPermissionRelayEnabled, hashToId, shortRequestId, truncateForPreview, filterPermissionRelayClients, createChannelPermissionCallbacks

## src/services/mcp/claudeai.ts

- lines: 165
- imports: 11
- exports: 4
- importance: 52
- tags: auth, mcp, state-memory
- exportedSymbols: clearClaudeAIMcpConfigsCache, markClaudeAiMcpConnected, hasClaudeAiMcpEverConnected, fetchClaudeAIMcpConfigsIfEligible
- functions: clearClaudeAIMcpConfigsCache, markClaudeAiMcpConnected, hasClaudeAiMcpEverConnected

## src/services/mcp/client.ts

- lines: 3349
- imports: 65
- exports: 28
- importance: 110
- tags: auth, permissions, bridge, remote, mcp, query-loop, tools, commands, state-memory
- exportedSymbols: isMcpSessionExpiredError, clearMcpAuthCache, createClaudeAiProxyFetch, wrapFetchWithTimeout, getMcpServerConnectionBatchSize, getServerCacheKey, clearServerCache, ensureConnectedClient, areMcpConfigsEqual, mcpToolInputToAutoClassifierInput, callIdeRpc, reconnectMcpServerImpl, getMcpToolsCommandsAndResources, prefetchAllMcpResources, transformResultContent, inferCompactSchema, transformMCPResult, processMCPResult, callMCPToolWithUrlElicitationRetry, setupSdkMcpClients, McpAuthError, McpToolCallError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, connectToServer, fetchToolsForClient, fetchResourcesForClient, fetchCommandsForClient, MCPResultType, TransformedMCPResult
- classes: to, McpAuthError, McpSessionExpiredError, McpToolCallError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
- functions: isMcpSessionExpiredError, getMcpToolTimeoutMs, getMcpAuthCachePath, getMcpAuthCache, isMcpAuthCached, setMcpAuthCacheEntry, clearMcpAuthCache, mcpBaseUrlAnalytics, handleRemoteAuthFailure, createClaudeAiProxyFetch, createNodeWsClient, getConnectionTimeoutMs, to, to, wrapFetchWithTimeout, getMcpServerConnectionBatchSize, getRemoteMcpServerConnectionBatchSize, isLocalMcpServer, isIncludedMcpTool, getServerCacheKey, clearServerCache, ensureConnectedClient, areMcpConfigsEqual, mcpToolInputToAutoClassifierInput, callIdeRpc, from, reconnectMcpServerImpl, processBatched, getMcpToolsCommandsAndResources, prefetchAllMcpResources, transformResultContent, persistBlobToTextBlock, inferCompactSchema, transformMCPResult, contentContainsImages, processMCPResult, callMCPToolWithUrlElicitationRetry, callMCPTool, extractToolUseId, setupSdkMcpClients

## src/services/mcp/config.ts

- lines: 1579
- imports: 30
- exports: 20
- importance: 77
- tags: permissions, remote, mcp, tools, state-memory
- exportedSymbols: getEnterpriseMcpFilePath, unwrapCcrProxyUrl, getMcpServerSignature, dedupPluginMcpServers, dedupClaudeAiMcpServers, filterMcpServersByPolicy, addMcpConfig, removeMcpConfig, getProjectMcpConfigsFromCwd, getMcpConfigsByScope, getMcpConfigByName, getClaudeCodeMcpConfigs, getAllMcpConfigs, parseMcpConfig, parseMcpConfigFromFilePath, shouldAllowManagedMcpServersOnly, areMcpConfigsAllowedWithEnterpriseMcpConfig, isMcpServerDisabled, setMcpServerEnabled, doesEnterpriseMcpConfigExist
- functions: getEnterpriseMcpFilePath, addScopeToServers, writeMcpjsonFile, getServerCommandArray, commandArraysMatch, getServerUrl, unwrapCcrProxyUrl, getMcpServerSignature, dedupPluginMcpServers, dedupClaudeAiMcpServers, urlPatternToRegex, urlMatchesPattern, getMcpAllowlistSettings, getMcpDenylistSettings, isMcpServerDenied, isMcpServerAllowedByPolicy, filterMcpServersByPolicy, expandEnvVars, expandString, addMcpConfig, removeMcpConfig, getProjectMcpConfigsFromCwd, getMcpConfigsByScope, getMcpConfigByName, getClaudeCodeMcpConfigs, drops, getAllMcpConfigs, parseMcpConfig, parseMcpConfigFromFilePath, shouldAllowManagedMcpServersOnly, areMcpConfigsAllowedWithEnterpriseMcpConfig, isDefaultDisabledBuiltin, isMcpServerDisabled, toggleMembership, setMcpServerEnabled

## src/services/mcp/elicitationHandler.ts

- lines: 314
- imports: 7
- exports: 5
- importance: 40
- tags: mcp
- exportedSymbols: registerElicitationHandler, runElicitationHooks, runElicitationResultHooks, ElicitationWaitingState, ElicitationRequestEvent
- functions: getElicitationMode, findElicitationInQueue, registerElicitationHandler, runElicitationHooks, runElicitationResultHooks

## src/services/mcp/envExpansion.ts

- lines: 39
- imports: 0
- exports: 1
- importance: 22
- tags: mcp
- exportedSymbols: expandEnvVarsInString
- functions: expandEnvVarsInString

## src/services/mcp/headersHelper.ts

- lines: 139
- imports: 9
- exports: 2
- importance: 34
- tags: remote, mcp, state-memory
- exportedSymbols: getMcpHeadersFromHelper, getMcpServerHeaders
- functions: isMcpServerFromProjectOrLocalSettings, getMcpHeadersFromHelper, getMcpServerHeaders

## src/services/mcp/InProcessTransport.ts

- lines: 64
- imports: 2
- exports: 1
- importance: 24
- tags: mcp
- exportedSymbols: createLinkedTransportPair
- classes: InProcessTransport
- functions: createLinkedTransportPair

## src/services/mcp/MCPConnectionManager.tsx

- lines: 73
- imports: 6
- exports: 3
- importance: 32
- tags: mcp, tools
- exportedSymbols: useMcpReconnect, useMcpToggleEnabled, MCPConnectionManager
- functions: useMcpReconnect, useMcpToggleEnabled, on, MCPConnectionManager

## src/services/mcp/mcpStringUtils.ts

- lines: 107
- imports: 1
- exports: 6
- importance: 44
- tags: permissions, mcp, tools
- exportedSymbols: mcpInfoFromString, getMcpPrefix, buildMcpToolName, getToolNameForPermissionCheck, getMcpDisplayName, extractMcpToolDisplayName
- functions: mcpInfoFromString, getMcpPrefix, buildMcpToolName, getToolNameForPermissionCheck, getMcpDisplayName, extractMcpToolDisplayName

## src/services/mcp/normalization.ts

- lines: 24
- imports: 0
- exports: 1
- importance: 22
- tags: mcp, tools
- topComment: Claude.ai server names are prefixed with this string
- exportedSymbols: normalizeNameForMCP
- functions: normalizeNameForMCP

## src/services/mcp/oauthPort.ts

- lines: 79
- imports: 2
- exports: 2
- importance: 38
- tags: auth, mcp
- exportedSymbols: buildRedirectUri, findAvailablePort
- functions: buildRedirectUri, getMcpOAuthCallbackPort, findAvailablePort

## src/services/mcp/officialRegistry.ts

- lines: 73
- imports: 3
- exports: 3
- importance: 29
- tags: mcp
- exportedSymbols: prefetchOfficialMcpUrls, isOfficialMcpUrl, resetOfficialMcpUrlsForTesting
- functions: normalizeUrl, prefetchOfficialMcpUrls, isOfficialMcpUrl, resetOfficialMcpUrlsForTesting

## src/services/mcp/SdkControlTransport.ts

- lines: 137
- imports: 2
- exports: 3
- importance: 29
- tags: bridge, mcp, tools
- exportedSymbols: SdkControlClientTransport, SdkControlServerTransport, SendMcpMessageCallback
- classes: SdkControlClientTransport, SdkControlServerTransport
- functions: to

## src/services/mcp/types.ts

- lines: 259
- imports: 4
- exports: 35
- importance: 57
- tags: auth, remote, mcp, tools
- exportedSymbols: ConfigScopeSchema, TransportSchema, McpStdioServerConfigSchema, McpSSEServerConfigSchema, McpSSEIDEServerConfigSchema, McpWebSocketIDEServerConfigSchema, McpHTTPServerConfigSchema, McpWebSocketServerConfigSchema, McpSdkServerConfigSchema, McpClaudeAIProxyServerConfigSchema, McpServerConfigSchema, McpJsonConfigSchema, ConfigScope, Transport, McpStdioServerConfig, McpSSEServerConfig, McpSSEIDEServerConfig, McpWebSocketIDEServerConfig, McpHTTPServerConfig, McpWebSocketServerConfig, McpSdkServerConfig, McpClaudeAIProxyServerConfig, McpServerConfig, ScopedMcpServerConfig, McpJsonConfig, ConnectedMCPServer, FailedMCPServer, NeedsAuthMCPServer, PendingMCPServer, DisabledMCPServer, MCPServerConnection, ServerResource, SerializedTool, SerializedClient, MCPCliState

## src/services/mcp/useManageMCPConnections.ts

- lines: 1142
- imports: 28
- exports: 1
- importance: 68
- tags: auth, permissions, remote, mcp, tools, state-memory
- exportedSymbols: useManageMCPConnections
- functions: getErrorKey, addErrorsToAppState, useManageMCPConnections, initializeServersAsPending, loadAndConnectMcpConfigs, for, to, getTransportDisplayName

## src/services/mcp/utils.ts

- lines: 576
- imports: 16
- exports: 22
- importance: 77
- tags: auth, permissions, remote, mcp, tools, state-memory
- exportedSymbols: filterToolsByServer, commandBelongsToServer, filterCommandsByServer, filterMcpPromptsByServer, filterResourcesByServer, excludeToolsByServer, excludeCommandsByServer, excludeResourcesByServer, hashMcpConfig, excludeStalePluginClients, isToolFromMcpServer, isMcpTool, isMcpCommand, describeMcpConfigFilePath, getScopeLabel, ensureConfigScope, ensureTransport, parseHeaders, getProjectMcpServerStatus, getMcpServerScopeFromToolName, extractAgentMcpServers, getLoggingSafeMcpBaseUrl
- functions: filterToolsByServer, commandBelongsToServer, filterCommandsByServer, filterMcpPromptsByServer, filterResourcesByServer, excludeToolsByServer, excludeCommandsByServer, excludeResourcesByServer, hashMcpConfig, excludeStalePluginClients, isToolFromMcpServer, isMcpTool, isMcpCommand, describeMcpConfigFilePath, getScopeLabel, ensureConfigScope, ensureTransport, parseHeaders, getProjectMcpServerStatus, getMcpServerScopeFromToolName, isStdioConfig, isSSEConfig, isHTTPConfig, isWebSocketConfig, extractAgentMcpServers, getLoggingSafeMcpBaseUrl

## src/services/mcp/vscodeSdkMcp.ts

- lines: 113
- imports: 6
- exports: 3
- importance: 55
- tags: auth, permissions, mcp
- exportedSymbols: notifyVscodeFileUpdated, setupVscodeSdkMcp, LogEventNotificationSchema
- functions: readAutoModeEnabledState, notifyVscodeFileUpdated, setupVscodeSdkMcp

## src/services/mcp/xaa.ts

- lines: 512
- imports: 6
- exports: 12
- importance: 62
- tags: auth, mcp
- exportedSymbols: discoverProtectedResource, discoverAuthorizationServer, requestJwtAuthorizationGrant, exchangeJwtAuthGrant, performCrossAppAccess, XaaTokenExchangeError, ProtectedResourceMetadata, AuthorizationServerMetadata, JwtAuthGrantResult, XaaTokenResult, XaaResult, XaaConfig
- classes: XaaTokenExchangeError
- functions: makeXaaFetch, normalizeUrl, redactTokens, discoverProtectedResource, discoverAuthorizationServer, requestJwtAuthorizationGrant, exchangeJwtAuthGrant, performCrossAppAccess

## src/services/mcp/xaaIdpLogin.ts

- lines: 488
- imports: 15
- exports: 13
- importance: 66
- tags: auth, mcp
- exportedSymbols: isXaaEnabled, getXaaIdpSettings, issuerKey, getCachedIdpIdToken, saveIdpIdTokenFromJwt, clearIdpIdToken, saveIdpClientSecret, getIdpClientSecret, clearIdpClientSecret, discoverOidc, acquireIdpIdToken, XaaIdpSettings, IdpLoginOptions
- functions: isXaaEnabled, getXaaIdpSettings, issuerKey, getCachedIdpIdToken, saveIdpIdToken, saveIdpIdTokenFromJwt, clearIdpIdToken, saveIdpClientSecret, getIdpClientSecret, clearIdpClientSecret, discoverOidc, jwtExp, waitForCallback, acquireIdpIdToken

## src/services/mcpServerApproval.tsx

- lines: 41
- imports: 8
- exports: 1
- importance: 30
- tags: mcp
- exportedSymbols: handleMcpjsonServerApprovals
- functions: handleMcpjsonServerApprovals

## src/services/mockRateLimits.ts

- lines: 883
- imports: 3
- exports: 21
- importance: 64
- tags: auth, commands, state-memory, cost-budget
- topComment: Mock rate limits for testing [ANT-ONLY]
- exportedSymbols: setMockHeader, addExceededLimit, setMockEarlyWarning, clearMockEarlyWarning, setMockRateLimitScenario, getMockHeaderless429Message, getMockHeaders, getMockStatus, clearMockHeaders, applyMockHeaders, shouldProcessMockLimits, getCurrentMockScenario, getScenarioDescription, setMockSubscriptionType, getMockSubscriptionType, shouldUseMockSubscription, setMockBillingAccess, isMockFastModeRateLimitScenario, checkMockFastModeRateLimit, MockHeaderKey, MockScenario
- functions: setMockHeader, updateRetryAfter, updateRepresentativeClaim, to, addExceededLimit, setMockEarlyWarning, clearMockEarlyWarning, setMockRateLimitScenario, getMockHeaderless429Message, getMockHeaders, getMockStatus, clearMockHeaders, applyMockHeaders, shouldProcessMockLimits, getCurrentMockScenario, getScenarioDescription, setMockSubscriptionType, getMockSubscriptionType, that, shouldUseMockSubscription, setMockBillingAccess, isMockFastModeRateLimitScenario, checkMockFastModeRateLimit

## src/services/notifier.ts

- lines: 157
- imports: 7
- exports: 2
- importance: 32
- tags: (none)
- exportedSymbols: sendNotification, NotificationOptions
- functions: sendNotification, sendToChannel, sendAuto, generateKittyId, isAppleTerminalBellDisabled

## src/services/oauth/auth-code-listener.ts

- lines: 212
- imports: 7
- exports: 1
- importance: 53
- tags: auth, permissions
- exportedSymbols: AuthCodeListener
- classes: AuthCodeListener

## src/services/oauth/client.ts

- lines: 567
- imports: 9
- exports: 12
- importance: 66
- tags: auth
- topComment: OAuth client for handling authentication flows with Claude services
- exportedSymbols: shouldUseClaudeAIAuth, parseScopes, buildAuthUrl, exchangeCodeForTokens, refreshOAuthToken, fetchAndStoreUserRoles, createAndStoreApiKey, isOAuthTokenExpired, fetchProfileInfo, getOrganizationUUID, populateOAuthAccountInfoIfNeeded, storeOAuthAccountInfo
- functions: shouldUseClaudeAIAuth, parseScopes, buildAuthUrl, exchangeCodeForTokens, refreshOAuthToken, fetchAndStoreUserRoles, createAndStoreApiKey, isOAuthTokenExpired, fetchProfileInfo, getOrganizationUUID, populateOAuthAccountInfoIfNeeded, storeOAuthAccountInfo

## src/services/oauth/crypto.ts

- lines: 24
- imports: 1
- exports: 3
- importance: 27
- tags: (none)
- exportedSymbols: generateCodeVerifier, generateCodeChallenge, generateState
- functions: base64URLEncode, generateCodeVerifier, generateCodeChallenge, generateState

## src/services/oauth/getOauthProfile.ts

- lines: 54
- imports: 6
- exports: 2
- importance: 42
- tags: auth, state-memory
- exportedSymbols: getOauthProfileFromApiKey, getOauthProfileFromOauthToken
- functions: getOauthProfileFromApiKey, getOauthProfileFromOauthToken

## src/services/oauth/index.ts

- lines: 199
- imports: 6
- exports: 1
- importance: 42
- tags: auth, cost-budget
- exportedSymbols: OAuthService
- classes: OAuthService

## src/services/plugins/pluginCliCommands.ts

- lines: 345
- imports: 11
- exports: 6
- importance: 46
- tags: (none)
- exportedSymbols: installPlugin, uninstallPlugin, enablePlugin, disablePlugin, disableAllPlugins, updatePluginCli
- functions: handlePluginCommandError, installPlugin, uninstallPlugin, enablePlugin, disablePlugin, disableAllPlugins, updatePluginCli

## src/services/plugins/PluginInstallationManager.ts

- lines: 185
- imports: 9
- exports: 1
- importance: 33
- tags: mcp
- exportedSymbols: performBackgroundPluginInstallations
- functions: updateMarketplaceStatus, performBackgroundPluginInstallations

## src/services/plugins/pluginOperations.ts

- lines: 1089
- imports: 22
- exports: 17
- importance: 61
- tags: mcp
- exportedSymbols: assertInstallableScope, isInstallableScope, getProjectPathForScope, isPluginEnabledAtProjectScope, getPluginInstallationFromV2, installPluginOp, uninstallPluginOp, setPluginEnabledOp, enablePluginOp, disablePluginOp, disableAllPluginsOp, updatePluginOp, VALID_INSTALLABLE_SCOPES, VALID_UPDATE_SCOPES, InstallableScope, PluginOperationResult, PluginUpdateResult
- functions: assertInstallableScope, isInstallableScope, getProjectPathForScope, isPluginEnabledAtProjectScope, findPluginInSettings, to, findPluginByIdentifier, resolveDelistedPluginId, getPluginInstallationFromV2, installPluginOp, uninstallPluginOp, setPluginEnabledOp, enablePluginOp, disablePluginOp, disableAllPluginsOp, performs, updatePluginOp, performPluginUpdate

## src/services/policyLimits/index.ts

- lines: 664
- imports: 19
- exports: 10
- importance: 68
- tags: auth, state-memory
- exportedSymbols: _resetPolicyLimitsForTesting, initializePolicyLimitsLoadingPromise, isPolicyLimitsEligible, waitForPolicyLimitsToLoad, isPolicyAllowed, loadPolicyLimits, refreshPolicyLimits, clearPolicyLimitsCache, startBackgroundPolling, stopBackgroundPolling
- functions: isNodeError, _resetPolicyLimitsForTesting, initializePolicyLimitsLoadingPromise, getCachePath, getPolicyLimitsEndpoint, sortKeysDeep, computeChecksum, must, that, isPolicyLimitsEligible, waitForPolicyLimitsToLoad, getAuthHeaders, fetchWithRetry, fetchPolicyLimits, loadCachedRestrictions, saveCachedRestrictions, fetchAndLoadPolicyLimits, isPolicyAllowed, getRestrictionsFromCache, loadPolicyLimits, refreshPolicyLimits, clearPolicyLimitsCache, pollPolicyLimits, startBackgroundPolling, stopBackgroundPolling

## src/services/policyLimits/types.ts

- lines: 28
- imports: 2
- exports: 3
- importance: 28
- tags: (none)
- exportedSymbols: PolicyLimitsResponseSchema, PolicyLimitsResponse, PolicyLimitsFetchResult

## src/services/preventSleep.ts

- lines: 166
- imports: 3
- exports: 3
- importance: 31
- tags: tools
- exportedSymbols: startPreventSleep, stopPreventSleep, forceStopPreventSleep
- functions: startPreventSleep, stopPreventSleep, forceStopPreventSleep, startRestartInterval, stopRestartInterval, spawnCaffeinate, killCaffeinate

## src/services/PromptSuggestion/promptSuggestion.ts

- lines: 524
- imports: 17
- exports: 12
- importance: 76
- tags: auth, permissions, tools, commands, state-memory
- exportedSymbols: getPromptVariant, shouldEnablePromptSuggestion, abortPromptSuggestion, getSuggestionSuppressReason, tryGenerateSuggestion, executePromptSuggestion, getParentCacheSuppressReason, generateSuggestion, shouldFilterSuggestion, logSuggestionOutcome, logSuggestionSuppressed, PromptVariant
- functions: getPromptVariant, shouldEnablePromptSuggestion, abortPromptSuggestion, getSuggestionSuppressReason, tryGenerateSuggestion, executePromptSuggestion, getParentCacheSuppressReason, generateSuggestion, shouldFilterSuggestion, logSuggestionOutcome, logSuggestionSuppressed

## src/services/PromptSuggestion/speculation.ts

- lines: 992
- imports: 29
- exports: 7
- importance: 88
- tags: auth, permissions, query-loop, tools, state-memory
- exportedSymbols: prepareMessagesForInjection, isSpeculationEnabled, startSpeculation, acceptSpeculation, abortSpeculation, handleSpeculationAccept, ActiveSpeculationState
- functions: safeRemoveOverlay, getOverlayPath, denySpeculation, copyOverlayToMain, logSpeculation, countToolsInMessages, getBoundaryTool, getBoundaryDetail, isUserMessageWithArrayContent, prepareMessagesForInjection, createSpeculationFeedbackMessage, updateActiveSpeculationState, resetSpeculationState, isSpeculationEnabled, generatePipelinedSuggestion, startSpeculation, acceptSpeculation, abortSpeculation, handleSpeculationAccept

## src/services/rateLimitMessages.ts

- lines: 345
- imports: 4
- exports: 7
- importance: 54
- tags: auth, state-memory, cost-budget
- exportedSymbols: isRateLimitErrorMessage, getRateLimitMessage, getRateLimitErrorMessage, getRateLimitWarning, getUsingOverageText, RATE_LIMIT_ERROR_PREFIXES, RateLimitMessage
- functions: isRateLimitErrorMessage, getRateLimitMessage, getRateLimitErrorMessage, getRateLimitWarning, getLimitReachedText, getEarlyWarningText, getWarningUpsellText, getUsingOverageText, formatLimitReachedText

## src/services/rateLimitMocking.ts

- lines: 145
- imports: 2
- exports: 4
- importance: 31
- tags: cost-budget
- exportedSymbols: processRateLimitHeaders, shouldProcessRateLimits, checkMockRateLimitError, isMockRateLimitError
- functions: processRateLimitHeaders, shouldProcessRateLimits, checkMockRateLimitError, isMockRateLimitError

## src/services/remoteManagedSettings/index.ts

- lines: 639
- imports: 18
- exports: 9
- importance: 77
- tags: auth, permissions, remote, state-memory
- exportedSymbols: initializeRemoteManagedSettingsLoadingPromise, computeChecksumFromSettings, isEligibleForRemoteManagedSettings, waitForRemoteManagedSettingsToLoad, clearRemoteManagedSettingsCache, loadRemoteManagedSettings, refreshRemoteManagedSettings, startBackgroundPolling, stopBackgroundPolling
- functions: initializeRemoteManagedSettingsLoadingPromise, getRemoteManagedSettingsEndpoint, sortKeysDeep, computeChecksumFromSettings, isEligibleForRemoteManagedSettings, waitForRemoteManagedSettingsToLoad, getRemoteSettingsAuthHeaders, fetchWithRetry, fetchRemoteManagedSettings, saveSettings, clearRemoteManagedSettingsCache, that, fetchAndLoadRemoteManagedSettings, sets, loadRemoteManagedSettings, refreshRemoteManagedSettings, pollRemoteSettings, startBackgroundPolling, stopBackgroundPolling

## src/services/remoteManagedSettings/securityCheck.tsx

- lines: 74
- imports: 11
- exports: 3
- importance: 36
- tags: remote
- exportedSymbols: checkManagedSettingsSecurity, handleSecurityCheckResult, SecurityCheckResult
- functions: checkManagedSettingsSecurity, handleSecurityCheckResult

## src/services/remoteManagedSettings/syncCache.ts

- lines: 113
- imports: 4
- exports: 2
- importance: 51
- tags: auth, permissions, remote
- exportedSymbols: resetSyncCache, isRemoteManagedSettingsEligible
- functions: that, resetSyncCache, must, that, isRemoteManagedSettingsEligible

## src/services/remoteManagedSettings/syncCacheState.ts

- lines: 97
- imports: 7
- exports: 5
- importance: 38
- tags: bridge, remote, state-memory
- exportedSymbols: setSessionCache, resetSyncCache, setEligibility, getSettingsPath, getRemoteManagedSettingsSyncFromCache
- functions: setSessionCache, resetSyncCache, setEligibility, getSettingsPath, loadSettings, getRemoteManagedSettingsSyncFromCache

## src/services/remoteManagedSettings/types.ts

- lines: 32
- imports: 3
- exports: 3
- importance: 29
- tags: remote
- exportedSymbols: RemoteManagedSettingsResponseSchema, RemoteManagedSettingsResponse, RemoteManagedSettingsFetchResult

## src/services/SessionMemory/prompts.ts

- lines: 325
- imports: 6
- exports: 6
- importance: 54
- tags: auth, tools, state-memory, cost-budget
- exportedSymbols: loadSessionMemoryTemplate, loadSessionMemoryPrompt, isSessionMemoryEmpty, buildSessionMemoryUpdatePrompt, truncateSessionMemoryForCompact, DEFAULT_SESSION_MEMORY_TEMPLATE
- functions: getDefaultUpdatePrompt, names, loadSessionMemoryTemplate, loadSessionMemoryPrompt, analyzeSectionSizes, generateSectionReminders, substituteVariables, isSessionMemoryEmpty, buildSessionMemoryUpdatePrompt, truncateSessionMemoryForCompact, flushSessionSection

## src/services/SessionMemory/sessionMemory.ts

- lines: 496
- imports: 25
- exports: 6
- importance: 80
- tags: auth, permissions, query-loop, tools, state-memory
- exportedSymbols: resetLastMemoryMessageUuid, shouldExtractMemory, initSessionMemory, manuallyExtractSessionMemory, createMemoryFileCanUseTool, ManualExtractionResult
- functions: isSessionMemoryGateEnabled, getSessionMemoryRemoteConfig, resetLastMemoryMessageUuid, countToolCallsSince, shouldExtractMemory, setupSessionMemoryFile, initSessionMemory, manuallyExtractSessionMemory, that, createMemoryFileCanUseTool, updateLastSummarizedMessageIdIfSafe

## src/services/SessionMemory/sessionMemoryUtils.ts

- lines: 208
- imports: 5
- exports: 17
- importance: 67
- tags: auth, permissions, tools, state-memory
- exportedSymbols: getLastSummarizedMessageId, setLastSummarizedMessageId, markExtractionStarted, markExtractionCompleted, waitForSessionMemoryExtraction, getSessionMemoryContent, setSessionMemoryConfig, getSessionMemoryConfig, recordExtractionTokenCount, isSessionMemoryInitialized, markSessionMemoryInitialized, hasMetInitializationThreshold, hasMetUpdateThreshold, getToolCallsBetweenUpdates, resetSessionMemoryState, DEFAULT_SESSION_MEMORY_CONFIG, SessionMemoryConfig
- functions: getLastSummarizedMessageId, setLastSummarizedMessageId, markExtractionStarted, markExtractionCompleted, waitForSessionMemoryExtraction, getSessionMemoryContent, setSessionMemoryConfig, getSessionMemoryConfig, recordExtractionTokenCount, isSessionMemoryInitialized, markSessionMemoryInitialized, hasMetInitializationThreshold, hasMetUpdateThreshold, getToolCallsBetweenUpdates, resetSessionMemoryState

## src/services/settingsSync/index.ts

- lines: 582
- imports: 23
- exports: 4
- importance: 57
- tags: auth, mcp, state-memory
- exportedSymbols: uploadUserSettingsInBackground, _resetDownloadPromiseForTesting, downloadUserSettings, redownloadUserSettings
- functions: uploadUserSettingsInBackground, _resetDownloadPromiseForTesting, downloadUserSettings, redownloadUserSettings, doDownloadUserSettings, isUsingOAuth, getSettingsSyncEndpoint, getSettingsSyncAuthHeaders, fetchUserSettingsOnce, fetchUserSettings, uploadUserSettings, tryReadFileForSync, buildEntriesFromLocalFiles, writeFileForSync, applyRemoteEntriesToLocal

## src/services/settingsSync/types.ts

- lines: 68
- imports: 2
- exports: 6
- importance: 34
- tags: (none)
- exportedSymbols: UserSyncContentSchema, UserSyncDataSchema, SYNC_KEYS, UserSyncData, SettingsSyncFetchResult, SettingsSyncUploadResult

## src/services/teamMemorySync/index.ts

- lines: 1257
- imports: 20
- exports: 8
- importance: 73
- tags: auth, tools, state-memory
- exportedSymbols: createSyncState, hashContent, batchDeltaByBytes, isTeamMemorySyncAvailable, pullTeamMemory, pushTeamMemory, syncTeamMemory, SyncState
- functions: createSyncState, hashContent, isErrnoException, isUsingOAuth, getTeamMemorySyncEndpoint, getAuthHeaders, fetchTeamMemoryOnce, fetchTeamMemoryHashes, fetchTeamMemory, batchDeltaByBytes, uploadTeamMemory, readLocalTeamMemory, walkDir, writeRemoteEntriesToLocal, isTeamMemorySyncAvailable, pullTeamMemory, pushTeamMemory, syncTeamMemory, logPull, logPush

## src/services/teamMemorySync/secretScanner.ts

- lines: 325
- imports: 1
- exports: 4
- importance: 45
- tags: auth, tools
- exportedSymbols: scanForSecrets, getSecretLabel, redactSecrets, SecretMatch
- functions: getCompiledRules, ruleIdToLabel, scanForSecrets, getSecretLabel, redactSecrets

## src/services/teamMemorySync/teamMemSecretGuard.ts

- lines: 45
- imports: 1
- exports: 1
- importance: 23
- tags: tools
- exportedSymbols: checkTeamMemSecrets
- functions: checkTeamMemSecrets

## src/services/teamMemorySync/types.ts

- lines: 157
- imports: 2
- exports: 9
- importance: 53
- tags: auth, tools
- exportedSymbols: TeamMemoryContentSchema, TeamMemoryDataSchema, TeamMemoryTooManyEntriesSchema, TeamMemoryData, SkippedSecretFile, TeamMemorySyncFetchResult, TeamMemoryHashesResult, TeamMemorySyncPushResult, TeamMemorySyncUploadResult

## src/services/teamMemorySync/watcher.ts

- lines: 388
- imports: 12
- exports: 6
- importance: 68
- tags: auth, permissions, tools, state-memory, cost-budget
- exportedSymbols: isPermanentFailure, startTeamMemoryWatcher, notifyTeamMemoryWrite, stopTeamMemoryWatcher, _resetWatcherStateForTesting, _startFileWatcherForTesting
- functions: isPermanentFailure, executePush, schedulePush, startFileWatcher, startTeamMemoryWatcher, notifyTeamMemoryWrite, stopTeamMemoryWatcher, _resetWatcherStateForTesting, _startFileWatcherForTesting

## src/services/tips/tipHistory.ts

- lines: 18
- imports: 1
- exports: 2
- importance: 25
- tags: state-memory
- exportedSymbols: recordTipShown, getSessionsSinceLastShown
- functions: recordTipShown, getSessionsSinceLastShown

## src/services/tips/tipRegistry.ts

- lines: 687
- imports: 29
- exports: 1
- importance: 50
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: getRelevantTips
- functions: isOfficialMarketplaceInstalled, isMarketplacePluginRelevant, getCustomTips, getRelevantTips

## src/services/tips/tipScheduler.ts

- lines: 59
- imports: 5
- exports: 3
- importance: 31
- tags: state-memory
- exportedSymbols: selectTipWithLongestTimeSinceShown, getTipToShowOnSpinner, recordShownTip
- functions: selectTipWithLongestTimeSinceShown, getTipToShowOnSpinner, recordShownTip

## src/services/tokenEstimation.ts

- lines: 496
- imports: 17
- exports: 8
- importance: 74
- tags: auth, mcp, query-loop, tools, cost-budget
- exportedSymbols: countTokensWithAPI, countMessagesTokensWithAPI, roughTokenCountEstimation, bytesPerTokenForFileType, roughTokenCountEstimationForFileType, countTokensViaHaikuFallback, roughTokenCountEstimationForMessages, roughTokenCountEstimationForMessage
- functions: hasThinkingBlocks, stripToolSearchFieldsFromMessages, countTokensWithAPI, countMessagesTokensWithAPI, roughTokenCountEstimation, bytesPerTokenForFileType, roughTokenCountEstimationForFileType, countTokensViaHaikuFallback, roughTokenCountEstimationForMessages, roughTokenCountEstimationForMessage, roughTokenCountEstimationForContent, roughTokenCountEstimationForBlock, countTokensWithBedrock

## src/services/tools/StreamingToolExecutor.ts

- lines: 531
- imports: 8
- exports: 1
- importance: 56
- tags: permissions, query-loop, tools
- exportedSymbols: StreamingToolExecutor
- classes: StreamingToolExecutor
- functions: markToolUseAsComplete

## src/services/tools/toolExecution.ts

- lines: 1746
- imports: 43
- exports: 5
- importance: 81
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: classifyToolError, buildSchemaNotSentHint, HOOK_TIMING_DISPLAY_THRESHOLD_MS, MessageUpdateLazy, McpServerType
- functions: extracts, classifyToolError, ruleSourceToOTelSource, decisionReasonToOTelSource, getNextImagePasteId, findMcpServerConnection, getMcpServerType, getMcpServerBaseUrlFromToolName, streamedCheckPermissionsAndCallTool, buildSchemaNotSentHint, checkPermissionsAndCallTool, addToolResult

## src/services/tools/toolHooks.ts

- lines: 651
- imports: 17
- exports: 2
- importance: 52
- tags: permissions, mcp, tools
- exportedSymbols: resolveHookPermissionDecision, PostToolUseHooksResult
- functions: resolveHookPermissionDecision

## src/services/tools/toolOrchestration.ts

- lines: 189
- imports: 6
- exports: 1
- importance: 40
- tags: query-loop, tools
- exportedSymbols: MessageUpdate
- functions: getMaxToolUseConcurrency, partitionToolCalls, markToolUseAsComplete

## src/services/toolUseSummary/toolUseSummaryGenerator.ts

- lines: 113
- imports: 6
- exports: 2
- importance: 41
- tags: mcp, query-loop, tools, state-memory
- exportedSymbols: generateToolUseSummary, GenerateToolUseSummaryParams
- functions: generateToolUseSummary, truncateJson

## src/services/vcr.ts

- lines: 407
- imports: 15
- exports: 2
- importance: 61
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: withVCR, withTokenCountVCR
- functions: shouldUseVCR, withFixture, withVCR, addCachedCostToTotalSessionCost, mapMessages, mapValuesDeep, mapAssistantMessage, mapMessage, dehydrateValue, hydrateValue, withTokenCountVCR

## src/services/voice.ts

- lines: 526
- imports: 6
- exports: 8
- importance: 58
- tags: permissions, state-memory
- topComment: Voice service: audio recording for push-to-talk voice input.
- exportedSymbols: _resetArecordProbeForTesting, _resetAlsaCardsForTesting, checkVoiceDependencies, requestMicrophonePermission, checkRecordingAvailability, startRecording, stopRecording, RecordingAvailability
- functions: loadAudioNapi, call, hasCommand, probeArecord, _resetArecordProbeForTesting, linuxHasAlsaCards, _resetAlsaCardsForTesting, detectPackageManager, checkVoiceDependencies, requestMicrophonePermission, checkRecordingAvailability, startRecording, startSoxRecording, startArecordRecording, stopRecording

## src/services/voiceKeyterms.ts

- lines: 107
- imports: 3
- exports: 2
- importance: 40
- tags: auth, mcp, state-memory
- topComment: Voice keyterms for improving STT accuracy in the voice_stream endpoint.
- exportedSymbols: splitIdentifier, getVoiceKeyterms
- functions: splitIdentifier, fileNameWords, getVoiceKeyterms

## src/services/voiceStreamSTT.ts

- lines: 545
- imports: 11
- exports: 6
- importance: 60
- tags: auth, remote, state-memory
- topComment: Anthropic voice_stream speech-to-text client for push-to-talk.
- exportedSymbols: isVoiceStreamAvailable, connectVoiceStream, FINALIZE_TIMEOUTS_MS, VoiceStreamCallbacks, FinalizeSource, VoiceStreamConnection
- classes: JA3
- functions: isVoiceStreamAvailable, connectVoiceStream

## src/setup.ts

- lines: 478
- imports: 34
- exports: 1
- importance: 39
- tags: auth, permissions, bridge, tools, state-memory
- exportedSymbols: setup
- functions: setup

## src/skills/bundled/batch.ts

- lines: 125
- imports: 7
- exports: 1
- importance: 10
- tags: tools
- exportedSymbols: registerBatchSkill
- functions: buildPrompt, parameters, registerBatchSkill

## src/skills/bundled/claudeApi.ts

- lines: 197
- imports: 3
- exports: 1
- importance: 7
- tags: tools
- exportedSymbols: registerClaudeApiSkill
- functions: detectLanguage, getFilesForLanguage, processContent, buildInlineReference, buildPrompt, registerClaudeApiSkill

## src/skills/bundled/claudeApiContent.ts

- lines: 76
- imports: 26
- exports: 3
- importance: 16
- tags: tools
- topComment: Content for the claude-api bundled skill.
- exportedSymbols: SKILL_MODEL_VARS, SKILL_PROMPT, SKILL_FILES

## src/skills/bundled/claudeInChrome.ts

- lines: 35
- imports: 4
- exports: 1
- importance: 16
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: registerClaudeInChromeSkill
- functions: registerClaudeInChromeSkill

## src/skills/bundled/debug.ts

- lines: 104
- imports: 7
- exports: 1
- importance: 10
- tags: tools, state-memory
- exportedSymbols: registerDebugSkill
- functions: registerDebugSkill

## src/skills/bundled/index.ts

- lines: 80
- imports: 13
- exports: 1
- importance: 13
- tags: tools
- exportedSymbols: initBundledSkills
- functions: that, here, initBundledSkills

## src/skills/bundled/keybindings.ts

- lines: 340
- imports: 7
- exports: 1
- importance: 23
- tags: permissions, tools, state-memory
- exportedSymbols: registerKeybindingsSkill
- functions: generateContextsTable, generateActionsTable, inferContextFromAction, generateReservedShortcuts, registerKeybindingsSkill, markdownTable

## src/skills/bundled/loop.ts

- lines: 93
- imports: 2
- exports: 1
- importance: 17
- tags: auth, tools, commands
- exportedSymbols: registerLoopSkill
- functions: buildPrompt, registerLoopSkill

## src/skills/bundled/loremIpsum.ts

- lines: 283
- imports: 1
- exports: 1
- importance: 18
- tags: auth
- exportedSymbols: registerLoremIpsumSkill
- functions: generateLoremIpsum, registerLoremIpsumSkill

## src/skills/bundled/remember.ts

- lines: 83
- imports: 2
- exports: 1
- importance: 5
- tags: tools, state-memory
- exportedSymbols: registerRememberSkill
- functions: registerRememberSkill

## src/skills/bundled/scheduleRemoteAgents.ts

- lines: 448
- imports: 14
- exports: 1
- importance: 39
- tags: auth, mcp, query-loop, tools, state-memory
- exportedSymbols: registerScheduleRemoteAgentsSkill
- functions: taggedIdToUUID, getConnectedClaudeAIConnectors, sanitizeConnectorName, formatConnectorsInfo, formatSetupNotes, getCurrentRepoHttpsUrl, buildPrompt, registerScheduleRemoteAgentsSkill

## src/skills/bundled/simplify.ts

- lines: 70
- imports: 2
- exports: 1
- importance: 4
- tags: tools
- exportedSymbols: registerSimplifySkill
- functions: that, to, instead, takes, registerSimplifySkill

## src/skills/bundled/skillify.ts

- lines: 198
- imports: 4
- exports: 1
- importance: 18
- tags: permissions, tools, state-memory
- exportedSymbols: registerSkillifySkill
- functions: extractUserMessages, registerSkillifySkill

## src/skills/bundled/stuck.ts

- lines: 80
- imports: 1
- exports: 1
- importance: 4
- tags: mcp, tools, state-memory
- exportedSymbols: registerStuckSkill
- functions: registerStuckSkill

## src/skills/bundled/updateConfig.ts

- lines: 476
- imports: 4
- exports: 1
- importance: 21
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: registerUpdateConfigSkill
- functions: generateSettingsSchema, registerUpdateConfigSkill

## src/skills/bundled/verify.ts

- lines: 31
- imports: 3
- exports: 1
- importance: 5
- tags: (none)
- exportedSymbols: registerVerifySkill
- functions: registerVerifySkill

## src/skills/bundled/verifyContent.ts

- lines: 14
- imports: 3
- exports: 2
- importance: 7
- tags: (none)
- topComment: Content for the verify bundled skill.
- exportedSymbols: SKILL_MD, SKILL_FILES

## src/skills/bundledSkills.ts

- lines: 221
- imports: 9
- exports: 5
- importance: 31
- tags: permissions, tools
- exportedSymbols: registerBundledSkill, getBundledSkills, clearBundledSkills, getBundledSkillExtractDir, BundledSkillDefinition
- functions: registerBundledSkill, getBundledSkills, clearBundledSkills, getBundledSkillExtractDir, extractBundledSkillFiles, writeSkillFiles, safeWriteFile, resolveSkillFilePath, prependBaseDir

## src/skills/loadSkillsDir.ts

- lines: 1087
- imports: 27
- exports: 14
- importance: 63
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: getSkillsPath, estimateSkillFrontmatterTokens, parseSkillFrontmatterFields, createSkillCommand, clearSkillCaches, onDynamicSkillsLoaded, discoverSkillDirsForPaths, addSkillDirectories, getDynamicSkills, activateConditionalSkillsForPaths, getConditionalSkillCount, clearDynamicSkills, getSkillDirCommands, LoadedFrom
- functions: getSkillsPath, estimateSkillFrontmatterTokens, getFileIdentity, parseHooksFromFrontmatter, parseSkillPaths, parseSkillFrontmatterFields, createSkillCommand, loadSkillsFromSkillsDir, isSkillFile, transformSkillFiles, buildNamespace, getSkillCommandName, getRegularCommandName, getCommandName, loadSkillsFromCommandsDir, clearSkillCaches, onDynamicSkillsLoaded, discoverSkillDirsForPaths, addSkillDirectories, getDynamicSkills, activateConditionalSkillsForPaths, getConditionalSkillCount, clearDynamicSkills

## src/skills/mcpSkillBuilders.ts

- lines: 45
- imports: 1
- exports: 3
- importance: 7
- tags: mcp
- exportedSymbols: registerMCPSkillBuilders, getMCPSkillBuilders, MCPSkillBuilders
- functions: registerMCPSkillBuilders, getMCPSkillBuilders

## src/state/AppState.tsx

- lines: 200
- imports: 11
- exports: 6
- importance: 34
- tags: permissions, tools
- exportedSymbols: AppStateProvider, useAppState, useSetAppState, useAppStateStore, useAppStateMaybeOutsideOfProvider, AppStoreContext
- functions: AppStateProvider, _temp, useAppStore, useAppState, useSetAppState, useAppStateStore, useAppStateMaybeOutsideOfProvider

## src/state/AppStateStore.ts

- lines: 570
- imports: 29
- exports: 8
- importance: 55
- tags: auth, permissions, bridge, remote, mcp, tools, state-memory
- exportedSymbols: getDefaultAppState, IDLE_SPECULATION_STATE, CompletionBoundary, SpeculationResult, SpeculationState, FooterItem, AppState, AppStateStore
- functions: types, getDefaultAppState

## src/state/onChangeAppState.ts

- lines: 172
- imports: 10
- exports: 2
- importance: 26
- tags: permissions, bridge, tools, commands, state-memory
- exportedSymbols: externalMetadataToAppState, onChangeAppState
- functions: externalMetadataToAppState, onChangeAppState

## src/state/selectors.ts

- lines: 77
- imports: 4
- exports: 3
- importance: 10
- tags: (none)
- exportedSymbols: getViewedTeammateTask, getActiveAgentForInput, ActiveAgentForInput
- functions: getViewedTeammateTask, getActiveAgentForInput

## src/state/store.ts

- lines: 35
- imports: 0
- exports: 2
- importance: 4
- tags: (none)
- exportedSymbols: createStore, Store
- functions: createStore

## src/state/teammateViewHelpers.ts

- lines: 142
- imports: 4
- exports: 3
- importance: 11
- tags: state-memory
- exportedSymbols: enterTeammateView, exitTeammateView, stopOrDismissAgent
- functions: isLocalAgent, release, enterTeammateView, exitTeammateView, stopOrDismissAgent

## src/Task.ts

- lines: 126
- imports: 4
- exports: 11
- importance: 23
- tags: mcp, tools
- exportedSymbols: isTerminalTaskStatus, generateTaskId, createTaskStateBase, TaskType, TaskStatus, TaskHandle, SetAppState, TaskContext, TaskStateBase, LocalShellSpawnInput, Task
- functions: isTerminalTaskStatus, getTaskIdPrefix, generateTaskId, createTaskStateBase

## src/tasks.ts

- lines: 40
- imports: 6
- exports: 2
- importance: 10
- tags: mcp, tools
- exportedSymbols: getAllTasks, getTaskByType
- functions: getAllTasks, getTaskByType

## src/tasks/DreamTask/DreamTask.ts

- lines: 158
- imports: 4
- exports: 9
- importance: 33
- tags: query-loop, tools, state-memory
- topComment: Background task entry for auto-dream (memory consolidation subagent).
- exportedSymbols: isDreamTask, registerDreamTask, addDreamTurn, completeDreamTask, failDreamTask, DreamTask, DreamTurn, DreamPhase, DreamTaskState
- functions: isDreamTask, registerDreamTask, addDreamTurn, completeDreamTask, failDreamTask

## src/tasks/InProcessTeammateTask/InProcessTeammateTask.tsx

- lines: 126
- imports: 8
- exports: 7
- importance: 23
- tags: mcp, state-memory
- exportedSymbols: requestTeammateShutdown, appendTeammateMessage, injectUserMessageToTeammate, findTeammateTaskByAgentId, getAllInProcessTeammateTasks, getRunningTeammatesSorted, InProcessTeammateTask
- functions: requestTeammateShutdown, appendTeammateMessage, injectUserMessageToTeammate, findTeammateTaskByAgentId, getAllInProcessTeammateTasks, getRunningTeammatesSorted

## src/tasks/InProcessTeammateTask/types.ts

- lines: 122
- imports: 6
- exports: 5
- importance: 39
- tags: auth, permissions, tools, state-memory
- exportedSymbols: isInProcessTeammateTask, appendCappedMessage, TEAMMATE_MESSAGES_UI_CAP, TeammateIdentity, InProcessTeammateTaskState
- functions: isInProcessTeammateTask, appendCappedMessage

## src/tasks/LocalAgentTask/LocalAgentTask.tsx

- lines: 683
- imports: 22
- exports: 28
- importance: 58
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: createProgressTracker, getTokenCountFromTracker, updateProgressFromMessage, getProgressUpdate, createActivityDescriptionResolver, isLocalAgentTask, isPanelAgentTask, queuePendingMessage, appendMessageToLocalAgent, drainPendingMessages, enqueueAgentNotification, killAsyncAgent, killAllRunningAgentTasks, markAgentsNotified, updateAgentProgress, updateAgentSummary, completeAgentTask, failAgentTask, registerAsyncAgent, registerAgentForeground, backgroundAgentTask, unregisterAgentForeground, LocalAgentTask, ToolActivity, AgentProgress, ProgressTracker, ActivityDescriptionResolver, LocalAgentTaskState
- functions: createProgressTracker, getTokenCountFromTracker, that, updateProgressFromMessage, getProgressUpdate, createActivityDescriptionResolver, isLocalAgentTask, isPanelAgentTask, queuePendingMessage, appendMessageToLocalAgent, drainPendingMessages, enqueueAgentNotification, killAsyncAgent, killAllRunningAgentTasks, markAgentsNotified, updateAgentProgress, updateAgentSummary, completeAgentTask, failAgentTask, registerAsyncAgent, for, registerAgentForeground, backgroundAgentTask, unregisterAgentForeground, to

## src/tasks/LocalMainSessionTask.ts

- lines: 480
- imports: 21
- exports: 6
- importance: 50
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: registerMainSessionTask, completeMainSessionTask, foregroundMainSessionTask, isMainSessionTask, startBackgroundSession, LocalMainSessionTaskState
- functions: generateMainSessionTaskId, registerMainSessionTask, completeMainSessionTask, enqueueMainSessionNotification, foregroundMainSessionTask, isMainSessionTask, startBackgroundSession

## src/tasks/LocalShellTask/guards.ts

- lines: 42
- imports: 3
- exports: 3
- importance: 9
- tags: state-memory
- topComment: Pure type + type guard for LocalShellTask state.
- exportedSymbols: isLocalShellTask, BashTaskKind, LocalShellTaskState
- functions: isLocalShellTask

## src/tasks/LocalShellTask/killShellTasks.ts

- lines: 77
- imports: 8
- exports: 2
- importance: 12
- tags: (none)
- topComment: Pure (non-React) kill helpers for LocalShellTask.
- exportedSymbols: killTask, killShellTasksForAgent
- functions: killTask, killShellTasksForAgent

## src/tasks/LocalShellTask/LocalShellTask.tsx

- lines: 523
- imports: 20
- exports: 10
- importance: 44
- tags: mcp, query-loop, tools, state-memory
- exportedSymbols: looksLikePrompt, spawnShellTask, registerForeground, hasForegroundTasks, backgroundAll, backgroundExistingForegroundTask, markTaskNotified, unregisterForeground, BACKGROUND_BASH_SUMMARY_PREFIX, LocalShellTask
- functions: looksLikePrompt, startStallWatchdog, enqueueShellNotification, spawnShellTask, registerForeground, backgroundTask, to, hasForegroundTasks, backgroundAll, backgroundExistingForegroundTask, markTaskNotified, unregisterForeground, to, flushAndCleanup

## src/tasks/pillLabel.ts

- lines: 83
- imports: 3
- exports: 2
- importance: 8
- tags: mcp, state-memory
- exportedSymbols: getPillLabel, pillNeedsCta
- functions: getPillLabel, pillNeedsCta

## src/tasks/RemoteAgentTask/RemoteAgentTask.tsx

- lines: 856
- imports: 21
- exports: 15
- importance: 70
- tags: auth, permissions, remote, mcp, query-loop, tools, state-memory
- exportedSymbols: registerCompletionChecker, checkRemoteAgentEligibility, formatPreconditionError, extractPlanFromLog, enqueueUltraplanFailureNotification, registerRemoteAgentTask, restoreRemoteAgentTasks, getRemoteTaskSessionUrl, RemoteAgentTask, RemoteAgentTaskState, RemoteTaskType, AutofixPrRemoteTaskMetadata, RemoteTaskMetadata, RemoteTaskCompletionChecker, RemoteAgentPreconditionResult
- functions: isRemoteTaskType, registerCompletionChecker, persistRemoteAgentMetadata, removeRemoteAgentMetadata, checkRemoteAgentEligibility, formatPreconditionError, enqueueRemoteNotification, markTaskNotified, extractPlanFromLog, enqueueUltraplanFailureNotification, extractReviewFromLog, extractReviewTagFromLog, enqueueRemoteReviewNotification, enqueueRemoteReviewFailureNotification, extractTodoListFromLog, registerRemoteAgentTask, restoreRemoteAgentTasks, restoreRemoteAgentTasksImpl, to, startRemoteSessionPolling, return, getRemoteTaskSessionUrl

## src/tasks/stopTask.ts

- lines: 101
- imports: 5
- exports: 2
- importance: 10
- tags: tools
- topComment: Shared logic for stopping a running task.
- exportedSymbols: stopTask, StopTaskError
- classes: StopTaskError
- functions: stopTask

## src/tasks/types.ts

- lines: 47
- imports: 7
- exports: 3
- importance: 13
- tags: mcp
- topComment: Union of all concrete task state types
- exportedSymbols: isBackgroundTask, TaskState, BackgroundTaskState
- functions: isBackgroundTask

## src/Tool.ts

- lines: 793
- imports: 28
- exports: 20
- importance: 69
- tags: auth, permissions, bridge, mcp, query-loop, tools, state-memory, cost-budget
- exportedSymbols: filterToolProgressMessages, toolMatchesName, findToolByName, buildTool, getEmptyToolPermissionContext, ToolInputJSONSchema, QueryChainTracking, ValidationResult, SetToolJSXFn, ToolPermissionContext, CompactProgressEvent, ToolUseContext, Progress, ToolProgress, ToolResult, ToolCallProgress, AnyObject, Tool, Tools, ToolDef
- functions: filterToolProgressMessages, toolMatchesName, findToolByName, buildTool

## src/tools.ts

- lines: 390
- imports: 45
- exports: 9
- importance: 114
- tags: auth, permissions, mcp, tools
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: parseToolPreset, getToolsForDefaultPreset, getAllBaseTools, filterToolsByDenyRules, assembleToolPool, getMergedTools, TOOL_PRESETS, getTools, ToolPreset
- functions: parseToolPreset, getToolsForDefaultPreset, getAllBaseTools, filterToolsByDenyRules, to, assembleToolPool, when, getMergedTools

## src/tools/AgentTool/agentColorManager.ts

- lines: 67
- imports: 2
- exports: 5
- importance: 42
- tags: tools
- exportedSymbols: getAgentColor, setAgentColor, AGENT_COLORS, AGENT_COLOR_TO_THEME_COLOR, AgentColorName
- functions: getAgentColor, setAgentColor

## src/tools/AgentTool/agentDisplay.ts

- lines: 105
- imports: 3
- exports: 7
- importance: 48
- tags: tools
- exportedSymbols: resolveAgentOverrides, resolveAgentModelDisplay, getOverrideSourceLabel, compareAgentsByName, AGENT_SOURCE_GROUPS, AgentSourceGroup, ResolvedAgent
- functions: resolveAgentOverrides, resolveAgentModelDisplay, getOverrideSourceLabel, compareAgentsByName

## src/tools/AgentTool/agentMemory.ts

- lines: 178
- imports: 7
- exports: 6
- importance: 51
- tags: tools
- exportedSymbols: getAgentMemoryDir, isAgentMemoryPath, getAgentMemoryEntrypoint, getMemoryScopeDisplay, loadAgentMemoryPrompt, AgentMemoryScope
- functions: sanitizeAgentTypeForPath, getLocalAgentMemoryDir, getAgentMemoryDir, isAgentMemoryPath, getAgentMemoryEntrypoint, getMemoryScopeDisplay, loadAgentMemoryPrompt

## src/tools/AgentTool/agentMemorySnapshot.ts

- lines: 198
- imports: 8
- exports: 5
- importance: 50
- tags: tools
- exportedSymbols: getSnapshotDirForAgent, checkAgentMemorySnapshot, initializeFromSnapshot, replaceFromSnapshot, markSnapshotSynced
- functions: getSnapshotDirForAgent, getSnapshotJsonPath, getSyncedJsonPath, readJsonFile, copySnapshotToLocal, saveSyncedMeta, checkAgentMemorySnapshot, initializeFromSnapshot, replaceFromSnapshot, markSnapshotSynced

## src/tools/AgentTool/AgentTool.tsx

- lines: 1398
- imports: 57
- exports: 5
- importance: 99
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: inputSchema, outputSchema, AgentTool, RemoteLaunchedOutput, Progress
- functions: getAutoBackgroundMs, resolveTeamName

## src/tools/AgentTool/agentToolUtils.ts

- lines: 687
- imports: 29
- exports: 12
- importance: 98
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: filterToolsForAgent, resolveAgentTools, countToolUses, finalizeAgentTool, getLastToolUseName, emitTaskProgress, classifyHandoffIfNeeded, extractPartialResult, runAsyncAgentLifecycle, agentToolResultSchema, ResolvedAgentTools, AgentToolResult
- functions: filterToolsForAgent, resolveAgentTools, countToolUses, finalizeAgentTool, getLastToolUseName, emitTaskProgress, classifyHandoffIfNeeded, extractPartialResult, runAsyncAgentLifecycle

## src/tools/AgentTool/built-in/claudeCodeGuideAgent.ts

- lines: 206
- imports: 12
- exports: 2
- importance: 56
- tags: permissions, mcp, tools, commands, state-memory
- exportedSymbols: CLAUDE_CODE_GUIDE_AGENT_TYPE, CLAUDE_CODE_GUIDE_AGENT
- functions: getClaudeCodeGuideBasePrompt, calling, getFeedbackGuideline

## src/tools/AgentTool/built-in/exploreAgent.ts

- lines: 84
- imports: 11
- exports: 2
- importance: 45
- tags: tools
- exportedSymbols: EXPLORE_AGENT_MIN_QUERIES, EXPLORE_AGENT
- functions: getExploreSystemPrompt

## src/tools/AgentTool/built-in/generalPurposeAgent.ts

- lines: 35
- imports: 1
- exports: 1
- importance: 33
- tags: tools
- exportedSymbols: GENERAL_PURPOSE_AGENT
- functions: getGeneralPurposeSystemPrompt

## src/tools/AgentTool/built-in/planAgent.ts

- lines: 93
- imports: 12
- exports: 1
- importance: 55
- tags: auth, tools
- exportedSymbols: PLAN_AGENT
- functions: getPlanV2SystemPrompt

## src/tools/AgentTool/built-in/statuslineSetup.ts

- lines: 145
- imports: 1
- exports: 1
- importance: 46
- tags: auth, tools, state-memory, cost-budget
- exportedSymbols: STATUSLINE_SETUP_AGENT

## src/tools/AgentTool/built-in/verificationAgent.ts

- lines: 153
- imports: 8
- exports: 1
- importance: 41
- tags: mcp, tools, state-memory
- exportedSymbols: VERIFICATION_AGENT

## src/tools/AgentTool/builtInAgents.ts

- lines: 73
- imports: 11
- exports: 2
- importance: 44
- tags: tools, state-memory
- exportedSymbols: areExplorePlanAgentsEnabled, getBuiltInAgents
- functions: areExplorePlanAgentsEnabled, getBuiltInAgents, body

## src/tools/AgentTool/constants.ts

- lines: 13
- imports: 0
- exports: 4
- importance: 60
- tags: auth, permissions, tools, state-memory
- exportedSymbols: AGENT_TOOL_NAME, LEGACY_AGENT_TOOL_NAME, VERIFICATION_AGENT_TYPE, ONE_SHOT_BUILTIN_AGENT_TYPES

## src/tools/AgentTool/forkSubagent.ts

- lines: 211
- imports: 10
- exports: 7
- importance: 76
- tags: permissions, query-loop, tools, commands, state-memory
- exportedSymbols: isForkSubagentEnabled, isInForkChild, buildForkedMessages, buildChildMessage, buildWorktreeNotice, FORK_SUBAGENT_TYPE, FORK_AGENT
- functions: isForkSubagentEnabled, isInForkChild, buildForkedMessages, buildChildMessage, buildWorktreeNotice

## src/tools/AgentTool/loadAgentsDir.ts

- lines: 756
- imports: 27
- exports: 18
- importance: 77
- tags: permissions, mcp, tools, commands, state-memory
- exportedSymbols: isBuiltInAgent, isCustomAgent, isPluginAgent, getActiveAgentsFromList, hasRequiredMcpServers, filterAgentsByMcpRequirements, clearAgentDefinitionsCache, parseAgentFromJson, parseAgentsFromJson, parseAgentFromMarkdown, getAgentDefinitionsWithOverrides, AgentMcpServerSpec, BaseAgentDefinition, BuiltInAgentDefinition, CustomAgentDefinition, PluginAgentDefinition, AgentDefinition, AgentDefinitionsResult
- functions: isBuiltInAgent, isCustomAgent, isPluginAgent, getActiveAgentsFromList, hasRequiredMcpServers, filterAgentsByMcpRequirements, initializeAgentMemorySnapshots, clearAgentDefinitionsCache, getParseError, parseHooksFromFrontmatter, parseAgentFromJson, parseAgentsFromJson, parseAgentFromMarkdown

## src/tools/AgentTool/prompt.ts

- lines: 288
- imports: 13
- exports: 3
- importance: 71
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: formatAgentLine, shouldInjectAgentListInMessages, getPrompt
- classes: Foo, definition, Foo
- functions: getToolsDescription, formatAgentLine, shouldInjectAgentListInMessages, getPrompt, that, isPrime

## src/tools/AgentTool/resumeAgent.ts

- lines: 266
- imports: 27
- exports: 2
- importance: 67
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: resumeAgentBackground, ResumeAgentResult
- functions: resumeAgentBackground

## src/tools/AgentTool/runAgent.ts

- lines: 974
- imports: 42
- exports: 1
- importance: 86
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: filterIncompleteToolCalls
- functions: initializeAgentMcpServers, for, isRecordableMessage, filterIncompleteToolCalls, getAgentSystemPrompt, resolveSkillName

## src/tools/AgentTool/UI.tsx

- lines: 872
- imports: 32
- exports: 12
- importance: 90
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: AgentPromptDisplay, AgentResponseDisplay, renderToolResultMessage, renderToolUseMessage, renderToolUseTag, renderToolUseProgressMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage, renderGroupedAgentToolUse, userFacingName, userFacingNameBackgroundColor, extractLastToolInfo
- functions: hasProgressMessage, getSearchOrReadInfo, processProgressMessages, flushGroup, AgentPromptDisplay, AgentResponseDisplay, _temp, VerboseAgentTranscript, _temp4, _temp3, _temp2, renderToolResultMessage, renderToolUseMessage, renderToolUseTag, renderToolUseProgressMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage, calculateAgentStats, renderGroupedAgentToolUse, userFacingName, userFacingNameBackgroundColor, extractLastToolInfo, isCustomSubagentType

## src/tools/AskUserQuestionTool/AskUserQuestionTool.tsx

- lines: 266
- imports: 13
- exports: 6
- importance: 75
- tags: permissions, query-loop, tools
- exportedSymbols: _sdkInputSchema, _sdkOutputSchema, AskUserQuestionTool, Question, QuestionOption, Output
- functions: AskUserQuestionResultMessage, _temp, validateHtmlPreview

## src/tools/AskUserQuestionTool/prompt.ts

- lines: 45
- imports: 1
- exports: 5
- importance: 41
- tags: tools
- exportedSymbols: ASK_USER_QUESTION_TOOL_NAME, ASK_USER_QUESTION_TOOL_CHIP_WIDTH, DESCRIPTION, PREVIEW_FEATURE_PROMPT, ASK_USER_QUESTION_TOOL_PROMPT

## src/tools/BashTool/bashCommandHelpers.ts

- lines: 266
- imports: 9
- exports: 2
- importance: 56
- tags: permissions, tools
- exportedSymbols: checkCommandOperatorPermissions, CommandIdentityCheckers
- functions: segmentedCommandPermissionResult, buildSegmentWithoutRedirections, checkCommandOperatorPermissions, bashToolCheckCommandOperatorPermissions

## src/tools/BashTool/bashPermissions.ts

- lines: 2622
- imports: 36
- exports: 24
- importance: 120
- tags: auth, permissions, query-loop, tools, state-memory, cost-budget
- exportedSymbols: getSimpleCommandPrefix, getFirstWordPrefix, matchWildcardPattern, stripSafeWrappers, stripWrappersFromArgv, stripAllLeadingEnvVars, checkCommandAndSuggestRules, peekSpeculativeClassifierCheck, startSpeculativeClassifierCheck, consumeSpeculativeClassifierCheck, clearSpeculativeChecks, awaitClassifierAutoApproval, executeAsyncClassifierCheck, bashToolHasPermission, isNormalizedGitCommand, isNormalizedCdCommand, commandHasAnyCd, MAX_SUBCOMMANDS_FOR_SECURITY_CHECK, MAX_SUGGESTED_RULES_FOR_COMPOUND, permissionRuleExtractPrefix, bashPermissionRule, BINARY_HIJACK_VARS, bashToolCheckExactMatchPermission, bashToolCheckPermission
- functions: complexity, logClassifierResultForAnts, getSimpleCommandPrefix, getFirstWordPrefix, suggestionForExactCommand, extractPrefixBeforeHeredoc, suggestionForPrefix, matchWildcardPattern, stripCommentLines, stripSafeWrappers, skipTimeoutFlags, stripWrappersFromArgv, stripAllLeadingEnvVars, filterRulesByContentsMatchingInput, matchingRulesForInput, checkCommandAndSuggestRules, should, checkSandboxAutoAllow, filterCdCwdSubcommands, checkEarlyExitDeny, checkSemanticsDeny, buildPendingClassifierCheck, peekSpeculativeClassifierCheck, startSpeculativeClassifierCheck, consumeSpeculativeClassifierCheck, clearSpeculativeChecks, awaitClassifierAutoApproval, executeAsyncClassifierCheck, bashToolHasPermission, isNormalizedGitCommand, isNormalizedCdCommand, commandHasAnyCd

## src/tools/BashTool/bashSecurity.ts

- lines: 2593
- imports: 6
- exports: 4
- importance: 96
- tags: auth, permissions, tools
- exportedSymbols: stripSafeHeredocSubstitutions, hasSafeHeredocSubstitution, bashCommandIsSafe_DEPRECATED, bashCommandIsSafeAsync_DEPRECATED
- classes: excludes, const
- functions: extractQuotedContent, stripSafeRedirections, only, hasUnescapedChar, validateEmpty, validateIncompleteCommands, isSafeHeredoc, stripSafeHeredocSubstitutions, hasSafeHeredocSubstitution, validateSafeCommandSubstitution, validateGitCommit, validateJqCommand, which, validateShellMetacharacters, validateDangerousVariables, validateDangerousPatterns, validateRedirections, validateNewlines, validateCarriageReturn, validateIFSInjection, validateProcEnvironAccess, validateMalformedTokenInjection, validateObfuscatedFlags, hasBackslashEscapedWhitespace, validateBackslashEscapedWhitespace, hasBackslashEscapedOperator, validateBackslashEscapedOperators, isEscapedAtPosition, validateBraceExpansion, validateUnicodeWhitespace, validateMidWordHash, validateCommentQuoteDesync, validateQuotedNewline, validateZshDangerousCommands, bashCommandIsSafe_DEPRECATED, bashCommandIsSafeAsync_DEPRECATED

## src/tools/BashTool/BashTool.tsx

- lines: 1144
- imports: 52
- exports: 5
- importance: 96
- tags: auth, permissions, mcp, query-loop, tools, cost-budget
- exportedSymbols: isSearchOrReadBashCommand, detectBlockedSleepPattern, BashTool, BashToolInput, Out
- functions: isSearchOrReadBashCommand, isSilentBashCommand, getCommandTypeForLogging, isAutobackgroundingAllowed, detectBlockedSleepPattern, applySedEdit, createProgressSignal, spawnBackgroundTask, startBackgrounding

## src/tools/BashTool/BashToolResultMessage.tsx

- lines: 191
- imports: 9
- exports: 1
- importance: 43
- tags: tools
- exportedSymbols: default
- functions: extractSandboxViolations, extractCwdResetWarning, BashToolResultMessage

## src/tools/BashTool/commandSemantics.ts

- lines: 141
- imports: 1
- exports: 2
- importance: 36
- tags: tools, commands
- exportedSymbols: interpretCommandResult, CommandSemantic
- functions: getCommandSemantic, extractBaseCommand, heuristicallyExtractBaseCommand, interpretCommandResult

## src/tools/BashTool/commentLabel.ts

- lines: 14
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: extractBashCommentLabel
- functions: extractBashCommentLabel

## src/tools/BashTool/destructiveCommandWarning.ts

- lines: 103
- imports: 0
- exports: 1
- importance: 43
- tags: permissions, tools
- exportedSymbols: getDestructiveCommandWarning
- functions: getDestructiveCommandWarning

## src/tools/BashTool/modeValidation.ts

- lines: 116
- imports: 5
- exports: 2
- importance: 50
- tags: permissions, tools
- exportedSymbols: checkPermissionMode, getAutoAllowedCommands
- functions: isFilesystemCommand, validateCommandForMode, checkPermissionMode, getAutoAllowedCommands

## src/tools/BashTool/pathValidation.ts

- lines: 1304
- imports: 16
- exports: 6
- importance: 90
- tags: auth, permissions, tools, state-memory
- exportedSymbols: createPathChecker, checkPathConstraints, stripWrappersFromArgv, PATH_EXTRACTORS, COMMAND_OPERATION_TYPE, PathCommand
- functions: checkDangerousRemovalPaths, filterOutFlags, parsePatternCommand, validateCommandPaths, createPathChecker, parseCommandArguments, validateSinglePathCommand, validateSinglePathCommandArgv, validateOutputRedirections, checkPathConstraints, astRedirectsToOutputRedirections, skipTimeoutFlags, skipStdbufFlags, skipEnvFlags, stripWrappersFromArgv

## src/tools/BashTool/prompt.ts

- lines: 370
- imports: 19
- exports: 3
- importance: 72
- tags: auth, permissions, tools, state-memory, cost-budget
- exportedSymbols: getDefaultTimeoutMs, getMaxTimeoutMs, getSimplePrompt
- functions: getDefaultTimeoutMs, getMaxTimeoutMs, getBackgroundUsageNote, getCommitAndPRInstructions, dedup, getSimpleSandboxSection, getSimplePrompt

## src/tools/BashTool/readOnlyValidation.ts

- lines: 1991
- imports: 15
- exports: 2
- importance: 90
- tags: auth, permissions, bridge, tools, state-memory
- exportedSymbols: isCommandSafeViaFlagParsing, checkReadOnlyConstraints
- classes: to
- functions: keys, getCommandAllowlist, that, isCommandSafeViaFlagParsing, const, makeRegexForSafeCommand, containsUnquotedExpansion, is, that, isCommandReadOnly, commandHasAnyGit, isGitInternalPath, extractWritePathsFromSubcommand, commandWritesToGitInternalPaths, that, checkReadOnlyConstraints

## src/tools/BashTool/sedEditParser.ts

- lines: 323
- imports: 2
- exports: 4
- importance: 56
- tags: auth, tools
- exportedSymbols: isSedInPlaceEdit, parseSedEditCommand, applySedSubstitution, SedEditInfo
- functions: isSedInPlaceEdit, parseSedEditCommand, applySedSubstitution

## src/tools/BashTool/sedValidation.ts

- lines: 685
- imports: 4
- exports: 6
- importance: 76
- tags: auth, permissions, tools
- exportedSymbols: isLinePrintingCommand, isPrintCommand, sedCommandIsAllowedByAllowlist, hasFileArgs, extractSedExpressions, checkSedConstraints
- functions: validateFlagsAgainstAllowlist, isLinePrintingCommand, isPrintCommand, isSubstitutionCommand, sedCommandIsAllowedByAllowlist, hasFileArgs, extractSedExpressions, containsDangerousOperations, checkSedConstraints

## src/tools/BashTool/shouldUseSandbox.ts

- lines: 154
- imports: 5
- exports: 1
- importance: 48
- tags: permissions, tools
- exportedSymbols: shouldUseSandbox
- functions: containsExcludedCommand, shouldUseSandbox

## src/tools/BashTool/toolName.ts

- lines: 3
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- topComment: Here to break circular dependency from prompt.ts
- exportedSymbols: BASH_TOOL_NAME

## src/tools/BashTool/UI.tsx

- lines: 185
- imports: 23
- exports: 6
- importance: 54
- tags: tools
- exportedSymbols: BackgroundHint, renderToolUseMessage, renderToolUseProgressMessage, renderToolUseQueuedMessage, renderToolResultMessage, renderToolUseErrorMessage
- functions: BackgroundHint, renderToolUseMessage, renderToolUseProgressMessage, renderToolUseQueuedMessage, renderToolResultMessage, renderToolUseErrorMessage

## src/tools/BashTool/utils.ts

- lines: 224
- imports: 12
- exports: 9
- importance: 80
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: stripEmptyLines, isImageOutput, parseDataUri, buildImageToolResult, resizeShellImageOutput, formatOutput, resetCwdIfOutsideProject, createContentSummary, stdErrAppendShellResetMessage
- functions: stripEmptyLines, isImageOutput, parseDataUri, buildImageToolResult, resizeShellImageOutput, formatOutput, resetCwdIfOutsideProject, createContentSummary

## src/tools/BriefTool/attachments.ts

- lines: 111
- imports: 8
- exports: 3
- importance: 67
- tags: auth, permissions, bridge, tools
- exportedSymbols: validateAttachmentPaths, resolveAttachments, ResolvedAttachment
- functions: validateAttachmentPaths, resolveAttachments

## src/tools/BriefTool/BriefTool.ts

- lines: 205
- imports: 13
- exports: 4
- importance: 60
- tags: bridge, query-loop, tools, commands, state-memory
- exportedSymbols: isBriefEntitled, isBriefEnabled, BriefTool, Output
- functions: isBriefEntitled, isBriefEnabled

## src/tools/BriefTool/prompt.ts

- lines: 23
- imports: 0
- exports: 5
- importance: 40
- tags: tools
- exportedSymbols: BRIEF_TOOL_NAME, LEGACY_BRIEF_TOOL_NAME, DESCRIPTION, BRIEF_TOOL_PROMPT, BRIEF_PROACTIVE_SECTION

## src/tools/BriefTool/UI.tsx

- lines: 101
- imports: 11
- exports: 3
- importance: 47
- tags: tools, state-memory
- exportedSymbols: renderToolUseMessage, renderToolResultMessage, AttachmentList
- functions: renderToolUseMessage, renderToolResultMessage, AttachmentList, _temp

## src/tools/BriefTool/upload.ts

- lines: 175
- imports: 11
- exports: 2
- importance: 58
- tags: auth, bridge, tools
- exportedSymbols: uploadBriefAttachment, BriefUploadContext
- functions: guessMimeType, debug, getBridgeBaseUrl, uploadBriefAttachment

## src/tools/ConfigTool/ConfigTool.ts

- lines: 468
- imports: 14
- exports: 3
- importance: 71
- tags: permissions, bridge, query-loop, tools
- exportedSymbols: ConfigTool, Input, Output
- functions: getValue, buildNestedObject

## src/tools/ConfigTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: CONFIG_TOOL_NAME

## src/tools/ConfigTool/prompt.ts

- lines: 94
- imports: 4
- exports: 2
- importance: 49
- tags: permissions, tools
- exportedSymbols: generatePrompt, DESCRIPTION
- functions: generatePrompt, generateModelSection

## src/tools/ConfigTool/supportedSettings.ts

- lines: 212
- imports: 6
- exports: 6
- importance: 60
- tags: permissions, bridge, tools, state-memory
- exportedSymbols: isSupported, getConfig, getAllKeys, getOptionsForSetting, getPath, SUPPORTED_SETTINGS
- functions: isSupported, getConfig, getAllKeys, getOptionsForSetting, getPath

## src/tools/ConfigTool/UI.tsx

- lines: 38
- imports: 5
- exports: 3
- importance: 41
- tags: mcp, tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage, renderToolUseRejectedMessage
- functions: renderToolUseMessage, renderToolResultMessage, renderToolUseRejectedMessage

## src/tools/EnterPlanModeTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: ENTER_PLAN_MODE_TOOL_NAME

## src/tools/EnterPlanModeTool/EnterPlanModeTool.ts

- lines: 127
- imports: 12
- exports: 2
- importance: 65
- tags: permissions, query-loop, tools, state-memory
- exportedSymbols: EnterPlanModeTool, Output

## src/tools/EnterPlanModeTool/prompt.ts

- lines: 171
- imports: 2
- exports: 1
- importance: 48
- tags: auth, remote, tools, state-memory
- exportedSymbols: getEnterPlanModeToolPrompt
- functions: getEnterPlanModeToolPromptExternal, with, getEnterPlanModeToolPromptAnt, getEnterPlanModeToolPrompt

## src/tools/EnterPlanModeTool/UI.tsx

- lines: 33
- imports: 8
- exports: 3
- importance: 54
- tags: permissions, tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage, renderToolUseRejectedMessage
- functions: renderToolUseMessage, renderToolResultMessage, renderToolUseRejectedMessage

## src/tools/EnterWorktreeTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: ENTER_WORKTREE_TOOL_NAME

## src/tools/EnterWorktreeTool/EnterWorktreeTool.ts

- lines: 128
- imports: 17
- exports: 2
- importance: 55
- tags: query-loop, tools, state-memory
- exportedSymbols: EnterWorktreeTool, Output

## src/tools/EnterWorktreeTool/prompt.ts

- lines: 31
- imports: 0
- exports: 1
- importance: 32
- tags: tools, state-memory
- exportedSymbols: getEnterWorktreeToolPrompt
- functions: getEnterWorktreeToolPrompt

## src/tools/EnterWorktreeTool/UI.tsx

- lines: 20
- imports: 6
- exports: 2
- importance: 40
- tags: tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage
- functions: renderToolUseMessage, renderToolResultMessage

## src/tools/ExitPlanModeTool/constants.ts

- lines: 3
- imports: 0
- exports: 2
- importance: 34
- tags: tools
- exportedSymbols: EXIT_PLAN_MODE_TOOL_NAME, EXIT_PLAN_MODE_V2_TOOL_NAME

## src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts

- lines: 494
- imports: 22
- exports: 5
- importance: 76
- tags: permissions, query-loop, tools, state-memory
- exportedSymbols: _sdkInputSchema, outputSchema, ExitPlanModeV2Tool, AllowedPrompt, Output

## src/tools/ExitPlanModeTool/prompt.ts

- lines: 30
- imports: 0
- exports: 1
- importance: 44
- tags: auth, tools
- topComment: External stub for ExitPlanModeTool prompt - excludes Ant-only allowedPrompts section
- exportedSymbols: EXIT_PLAN_MODE_V2_TOOL_PROMPT

## src/tools/ExitPlanModeTool/UI.tsx

- lines: 82
- imports: 13
- exports: 3
- importance: 57
- tags: permissions, tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage, renderToolUseRejectedMessage
- functions: renderToolUseMessage, renderToolResultMessage, renderToolUseRejectedMessage

## src/tools/ExitWorktreeTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: EXIT_WORKTREE_TOOL_NAME

## src/tools/ExitWorktreeTool/ExitWorktreeTool.ts

- lines: 330
- imports: 18
- exports: 2
- importance: 58
- tags: query-loop, tools, state-memory
- exportedSymbols: ExitWorktreeTool, Output
- functions: countWorktreeChanges, restoreSessionToOriginalCwd

## src/tools/ExitWorktreeTool/prompt.ts

- lines: 33
- imports: 0
- exports: 1
- importance: 32
- tags: tools, state-memory
- exportedSymbols: getExitWorktreeToolPrompt
- functions: getExitWorktreeToolPrompt

## src/tools/ExitWorktreeTool/UI.tsx

- lines: 25
- imports: 6
- exports: 2
- importance: 40
- tags: tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage
- functions: renderToolUseMessage, renderToolResultMessage

## src/tools/FileEditTool/constants.ts

- lines: 12
- imports: 0
- exports: 4
- importance: 48
- tags: permissions, tools, state-memory
- topComment: In its own file to avoid circular dependencies
- exportedSymbols: FILE_EDIT_TOOL_NAME, CLAUDE_FOLDER_PERMISSION_PATTERN, GLOBAL_CLAUDE_FOLDER_PERMISSION_PATTERN, FILE_UNEXPECTEDLY_MODIFIED_ERROR

## src/tools/FileEditTool/FileEditTool.ts

- lines: 626
- imports: 35
- exports: 1
- importance: 69
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: FileEditTool
- functions: readFileForEdit

## src/tools/FileEditTool/prompt.ts

- lines: 29
- imports: 2
- exports: 1
- importance: 34
- tags: tools
- exportedSymbols: getEditToolDescription
- functions: getPreReadInstruction, getEditToolDescription, getDefaultEditDescription

## src/tools/FileEditTool/types.ts

- lines: 86
- imports: 3
- exports: 6
- importance: 46
- tags: tools
- exportedSymbols: hunkSchema, gitDiffSchema, FileEditInput, EditInput, FileEdit, FileEditOutput

## src/tools/FileEditTool/UI.tsx

- lines: 289
- imports: 23
- exports: 6
- importance: 65
- tags: query-loop, tools
- exportedSymbols: userFacingName, getToolUseSummary, renderToolUseMessage, renderToolResultMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage
- functions: userFacingName, getToolUseSummary, renderToolUseMessage, renderToolResultMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage, EditRejectionDiff, EditRejectionBody, loadRejectionDiff

## src/tools/FileEditTool/utils.ts

- lines: 776
- imports: 8
- exports: 18
- importance: 77
- tags: auth, tools, state-memory
- exportedSymbols: normalizeQuotes, stripTrailingWhitespace, findActualString, preserveQuoteStyle, applyEditToFile, getPatchForEdit, getPatchForEdits, getSnippetForTwoFileDiff, getSnippetForPatch, getSnippet, getEditsForPatch, normalizeFileEditInput, areFileEditsEquivalent, areFileEditsInputsEquivalent, LEFT_SINGLE_CURLY_QUOTE, RIGHT_SINGLE_CURLY_QUOTE, LEFT_DOUBLE_CURLY_QUOTE, RIGHT_DOUBLE_CURLY_QUOTE
- functions: normalizeQuotes, stripTrailingWhitespace, findActualString, preserveQuoteStyle, isOpeningContext, applyCurlyDoubleQuotes, applyCurlySingleQuotes, applyEditToFile, getPatchForEdit, getPatchForEdits, getSnippetForTwoFileDiff, getSnippetForPatch, that, getSnippet, getEditsForPatch, desanitizeMatchString, normalizeFileEditInput, areFileEditsEquivalent, to, areFileEditsInputsEquivalent

## src/tools/FileReadTool/FileReadTool.ts

- lines: 1184
- imports: 42
- exports: 7
- importance: 100
- tags: auth, permissions, query-loop, tools, state-memory, cost-budget
- exportedSymbols: registerFileReadListener, readImageWithTokenBudget, MaxFileReadTokenExceededError, FileReadTool, CYBER_RISK_MITIGATION_REMINDER, Input, Output
- classes: MaxFileReadTokenExceededError
- functions: isBlockedDevicePath, tries, getAlternateScreenshotPath, registerFileReadListener, detectSessionFileType, pickLineFormatInstruction, formatFileLines, shouldIncludeFileReadMitigation, memoryFileFreshnessPrefix, validateContentTokens, createImageResponse, callInner, readImageWithTokenBudget

## src/tools/FileReadTool/imageProcessor.ts

- lines: 95
- imports: 2
- exports: 4
- importance: 41
- tags: tools
- exportedSymbols: getImageProcessor, getImageCreator, SharpInstance, SharpFunction
- functions: getImageProcessor, getImageCreator, unwrapDefault

## src/tools/FileReadTool/limits.ts

- lines: 93
- imports: 3
- exports: 3
- importance: 52
- tags: auth, tools, state-memory
- exportedSymbols: DEFAULT_MAX_OUTPUT_TOKENS, getDefaultFileReadingLimits, FileReadingLimits
- functions: getEnvMaxTokens

## src/tools/FileReadTool/prompt.ts

- lines: 50
- imports: 2
- exports: 8
- importance: 48
- tags: tools
- exportedSymbols: renderPromptTemplate, FILE_READ_TOOL_NAME, FILE_UNCHANGED_STUB, MAX_LINES_TO_READ, DESCRIPTION, LINE_FORMAT_INSTRUCTION, OFFSET_INSTRUCTION_DEFAULT, OFFSET_INSTRUCTION_TARGETED
- functions: renderPromptTemplate

## src/tools/FileReadTool/UI.tsx

- lines: 185
- imports: 12
- exports: 6
- importance: 64
- tags: mcp, query-loop, tools
- exportedSymbols: renderToolUseMessage, renderToolUseTag, renderToolResultMessage, renderToolUseErrorMessage, userFacingName, getToolUseSummary
- functions: getAgentOutputTaskId, renderToolUseMessage, renderToolUseTag, renderToolResultMessage, renderToolUseErrorMessage, userFacingName, getToolUseSummary

## src/tools/FileWriteTool/FileWriteTool.ts

- lines: 435
- imports: 33
- exports: 3
- importance: 71
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: FileWriteTool, Output, FileWriteToolInput

## src/tools/FileWriteTool/prompt.ts

- lines: 19
- imports: 1
- exports: 3
- importance: 37
- tags: tools
- exportedSymbols: getWriteToolDescription, FILE_WRITE_TOOL_NAME, DESCRIPTION
- functions: getPreReadInstruction, getWriteToolDescription

## src/tools/FileWriteTool/UI.tsx

- lines: 405
- imports: 25
- exports: 8
- importance: 71
- tags: mcp, query-loop, tools
- exportedSymbols: countLines, userFacingName, isResultTruncated, getToolUseSummary, renderToolUseMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage, renderToolResultMessage
- functions: countLines, FileWriteToolCreatedMessage, userFacingName, isResultTruncated, getToolUseSummary, renderToolUseMessage, renderToolUseRejectedMessage, WriteRejectionDiff, WriteRejectionBody, loadRejectionDiff, renderToolUseErrorMessage, renderToolResultMessage

## src/tools/GlobTool/GlobTool.ts

- lines: 199
- imports: 15
- exports: 2
- importance: 78
- tags: auth, permissions, query-loop, tools
- exportedSymbols: GlobTool, Output

## src/tools/GlobTool/prompt.ts

- lines: 8
- imports: 0
- exports: 2
- importance: 34
- tags: tools
- exportedSymbols: GLOB_TOOL_NAME, DESCRIPTION

## src/tools/GlobTool/UI.tsx

- lines: 63
- imports: 10
- exports: 5
- importance: 60
- tags: query-loop, tools
- exportedSymbols: userFacingName, renderToolUseMessage, renderToolUseErrorMessage, getToolUseSummary, renderToolResultMessage
- functions: userFacingName, renderToolUseMessage, renderToolUseErrorMessage, getToolUseSummary

## src/tools/GrepTool/GrepTool.ts

- lines: 578
- imports: 19
- exports: 1
- importance: 81
- tags: auth, permissions, query-loop, tools, state-memory
- exportedSymbols: GrepTool
- functions: applyHeadLimit, formatLimitInfo

## src/tools/GrepTool/prompt.ts

- lines: 19
- imports: 2
- exports: 2
- importance: 46
- tags: permissions, tools
- exportedSymbols: getDescription, GREP_TOOL_NAME
- functions: getDescription

## src/tools/GrepTool/UI.tsx

- lines: 201
- imports: 13
- exports: 4
- importance: 60
- tags: query-loop, tools
- exportedSymbols: renderToolUseMessage, renderToolUseErrorMessage, renderToolResultMessage, getToolUseSummary
- functions: SearchResultSummary, renderToolUseMessage, renderToolUseErrorMessage, renderToolResultMessage, getToolUseSummary

## src/tools/ListMcpResourcesTool/ListMcpResourcesTool.ts

- lines: 124
- imports: 10
- exports: 2
- importance: 55
- tags: mcp, query-loop, tools
- exportedSymbols: ListMcpResourcesTool, Output

## src/tools/ListMcpResourcesTool/prompt.ts

- lines: 21
- imports: 0
- exports: 3
- importance: 36
- tags: mcp, tools
- exportedSymbols: LIST_MCP_RESOURCES_TOOL_NAME, DESCRIPTION, PROMPT

## src/tools/ListMcpResourcesTool/UI.tsx

- lines: 29
- imports: 8
- exports: 2
- importance: 42
- tags: mcp, tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage
- functions: renderToolUseMessage, renderToolResultMessage

## src/tools/LSPTool/formatters.ts

- lines: 593
- imports: 5
- exports: 8
- importance: 58
- tags: tools
- exportedSymbols: formatGoToDefinitionResult, formatFindReferencesResult, formatHoverResult, formatDocumentSymbolResult, formatWorkspaceSymbolResult, formatPrepareCallHierarchyResult, formatIncomingCallsResult, formatOutgoingCallsResult
- functions: formatUri, groupByFile, formatLocation, locationLinkToLocation, isLocationLink, formatGoToDefinitionResult, formatFindReferencesResult, extractMarkupText, formatHoverResult, symbolKindToString, formatDocumentSymbolNode, formatDocumentSymbolResult, formatWorkspaceSymbolResult, formatCallHierarchyItem, formatPrepareCallHierarchyResult, formatIncomingCallsResult, formatOutgoingCallsResult, calls, if

## src/tools/LSPTool/LSPTool.ts

- lines: 861
- imports: 23
- exports: 3
- importance: 76
- tags: permissions, query-loop, tools
- exportedSymbols: LSPTool, Output, Input
- functions: getMethodAndParams, countSymbols, countUniqueFiles, uriToFilePath, filterGitIgnoredLocations, isLocationLink, toLocation, formatResult, countUniqueFilesFromCallItems, countUniqueFilesFromIncomingCalls, countUniqueFilesFromOutgoingCalls

## src/tools/LSPTool/prompt.ts

- lines: 22
- imports: 0
- exports: 2
- importance: 34
- tags: tools
- exportedSymbols: LSP_TOOL_NAME, DESCRIPTION
- functions: at, at

## src/tools/LSPTool/schemas.ts

- lines: 216
- imports: 2
- exports: 3
- importance: 40
- tags: tools
- exportedSymbols: isValidLSPOperation, lspToolInputSchema, LSPToolInput
- functions: at, at, isValidLSPOperation

## src/tools/LSPTool/symbolContext.ts

- lines: 91
- imports: 4
- exports: 1
- importance: 47
- tags: permissions, tools
- exportedSymbols: getSymbolAtPosition
- functions: getSymbolAtPosition

## src/tools/LSPTool/UI.tsx

- lines: 228
- imports: 11
- exports: 4
- importance: 60
- tags: mcp, query-loop, tools
- exportedSymbols: userFacingName, renderToolUseMessage, renderToolUseErrorMessage, renderToolResultMessage
- functions: LSPResultSummary, userFacingName, renderToolUseMessage, renderToolUseErrorMessage, renderToolResultMessage

## src/tools/McpAuthTool/McpAuthTool.ts

- lines: 216
- imports: 11
- exports: 2
- importance: 78
- tags: auth, permissions, mcp, query-loop, tools
- exportedSymbols: createMcpAuthTool, McpAuthOutput
- functions: getConfigUrl, createMcpAuthTool

## src/tools/MCPTool/classifyForCollapse.ts

- lines: 605
- imports: 0
- exports: 1
- importance: 39
- tags: mcp, tools, state-memory
- topComment: prettier-ignore
- exportedSymbols: classifyMcpToolForCollapse
- functions: normalize, classifyMcpToolForCollapse

## src/tools/MCPTool/MCPTool.ts

- lines: 78
- imports: 7
- exports: 4
- importance: 65
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: inputSchema, outputSchema, MCPTool, Output

## src/tools/MCPTool/prompt.ts

- lines: 4
- imports: 0
- exports: 2
- importance: 34
- tags: mcp, tools
- topComment: Actual prompt and description are overridden in mcpClient.ts
- exportedSymbols: PROMPT, DESCRIPTION

## src/tools/MCPTool/UI.tsx

- lines: 403
- imports: 18
- exports: 6
- importance: 69
- tags: auth, mcp, tools
- exportedSymbols: renderToolUseMessage, renderToolUseProgressMessage, renderToolResultMessage, tryFlattenJson, tryUnwrapTextPayload, trySlackSendCompact
- functions: renderToolUseMessage, renderToolUseProgressMessage, renderToolResultMessage, MCPTextOutput, _temp2, _temp, parseJsonEntries, tryFlattenJson, tryUnwrapTextPayload, trySlackSendCompact

## src/tools/NotebookEditTool/constants.ts

- lines: 3
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- topComment: In its own file to avoid circular dependencies
- exportedSymbols: NOTEBOOK_EDIT_TOOL_NAME

## src/tools/NotebookEditTool/NotebookEditTool.ts

- lines: 491
- imports: 19
- exports: 4
- importance: 74
- tags: permissions, query-loop, tools, state-memory
- exportedSymbols: inputSchema, outputSchema, NotebookEditTool, Output

## src/tools/NotebookEditTool/prompt.ts

- lines: 4
- imports: 0
- exports: 2
- importance: 34
- tags: tools
- exportedSymbols: DESCRIPTION, PROMPT

## src/tools/NotebookEditTool/UI.tsx

- lines: 93
- imports: 15
- exports: 5
- importance: 61
- tags: query-loop, tools
- exportedSymbols: getToolUseSummary, renderToolUseMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage, renderToolResultMessage
- functions: getToolUseSummary, renderToolUseMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage, renderToolResultMessage

## src/tools/PowerShellTool/clmTypes.ts

- lines: 212
- imports: 0
- exports: 3
- importance: 38
- tags: tools, state-memory
- exportedSymbols: normalizeTypeName, isClmAllowedType, CLM_ALLOWED_TYPES
- functions: normalizeTypeName, isClmAllowedType

## src/tools/PowerShellTool/commandSemantics.ts

- lines: 143
- imports: 0
- exports: 2
- importance: 47
- tags: auth, tools, commands
- exportedSymbols: interpretCommandResult, CommandSemantic
- functions: extractBaseCommand, heuristicallyExtractBaseCommand, interpretCommandResult

## src/tools/PowerShellTool/commonParameters.ts

- lines: 31
- imports: 0
- exports: 3
- importance: 36
- tags: tools
- exportedSymbols: COMMON_SWITCHES, COMMON_VALUE_PARAMS, COMMON_PARAMETERS

## src/tools/PowerShellTool/destructiveCommandWarning.ts

- lines: 110
- imports: 0
- exports: 1
- importance: 43
- tags: permissions, tools
- exportedSymbols: getDestructiveCommandWarning
- functions: getDestructiveCommandWarning

## src/tools/PowerShellTool/gitSafety.ts

- lines: 177
- imports: 3
- exports: 2
- importance: 51
- tags: auth, tools
- exportedSymbols: isGitInternalPathPS, isDotGitPathPS
- functions: resolveCwdReentry, normalizeGitPathArg, resolveEscapingPathToCwdRelative, matchesGitInternalPrefix, isGitInternalPathPS, isDotGitPathPS, matchesDotGitPrefix

## src/tools/PowerShellTool/modeValidation.ts

- lines: 405
- imports: 5
- exports: 2
- importance: 66
- tags: auth, permissions, tools
- exportedSymbols: isSymlinkCreatingCommand, checkPermissionMode
- functions: isAcceptEditsAllowedCmdlet, isItemTypeParamAbbrev, isSymlinkCreatingCommand, checkPermissionMode

## src/tools/PowerShellTool/pathValidation.ts

- lines: 2050
- imports: 17
- exports: 3
- importance: 93
- tags: auth, permissions, tools, state-memory
- exportedSymbols: isDangerousRemovalRawPath, dangerousRemovalDeny, checkPathConstraints
- functions: matchesParam, hasComplexColonValue, formatDirectoryList, expandTilde, isDangerousRemovalRawPath, dangerousRemovalDeny, isPathAllowed, checkDenyRuleForGuessedPath, validatePath, getGlobBaseDirectory, extractPathsFromCommand, checkArgElementType, checkPathConstraints, checkPathConstraintsForStatement

## src/tools/PowerShellTool/powershellPermissions.ts

- lines: 1649
- imports: 17
- exports: 4
- importance: 90
- tags: auth, permissions, tools, state-memory
- exportedSymbols: powershellPermissionRule, powershellToolCheckExactMatchPermission, powershellToolCheckPermission, powershellToolHasPermission
- functions: extractCommandName, powershellPermissionRule, suggestionForExactCommand, filterRulesByContentsMatchingInput, strEquals, strStartsWith, stripModulePrefixForRule, matchesCommand, matchingRulesForInput, powershellToolCheckExactMatchPermission, powershellToolCheckPermission, getSubCommandsForPermissionCheck, for, implements, powershellToolHasPermission, extractProviderPathFromArg, providerOrUncDecisionForArg

## src/tools/PowerShellTool/powershellSecurity.ts

- lines: 1091
- imports: 4
- exports: 1
- importance: 71
- tags: auth, permissions, tools, state-memory
- exportedSymbols: powershellCommandIsSafe
- functions: isPowerShellExecutable, psExeHasParamAbbreviation, checkInvokeExpression, checkDynamicCommandName, checkEncodedCommand, checkPwshCommandOrFile, isDownloader, isIex, checkDownloadCradles, checkDownloadUtilities, checkAddType, checkComObject, checkDangerousFilePathExecution, checkForEachMemberName, checkStartProcess, checkScriptBlockInjection, checkSubExpressions, checkExpandableStrings, checkSplatting, checkStopParsing, checkMemberInvocations, checkTypeLiterals, checkInvokeItem, checkScheduledTask, checkEnvVarManipulation, checkModuleLoading, checkRuntimeStateManipulation, checkWmiProcessSpawn, powershellCommandIsSafe

## src/tools/PowerShellTool/PowerShellTool.tsx

- lines: 1001
- imports: 46
- exports: 4
- importance: 92
- tags: auth, permissions, mcp, query-loop, tools, cost-budget
- exportedSymbols: detectBlockedSleepPattern, PowerShellTool, PowerShellToolInput, Out
- functions: isSearchOrReadPowerShellCommand, so, isAutobackgroundingAllowed, detectBlockedSleepPattern, isWindowsSandboxPolicyViolation, getCommandTypeForLogging, createProgressSignal, spawnBackgroundTask, startBackgrounding

## src/tools/PowerShellTool/prompt.ts

- lines: 146
- imports: 10
- exports: 3
- importance: 59
- tags: auth, tools
- exportedSymbols: getDefaultTimeoutMs, getMaxTimeoutMs, getPrompt
- functions: getDefaultTimeoutMs, getMaxTimeoutMs, getBackgroundUsageNote, getSleepGuidance, getEditionSection, getPrompt

## src/tools/PowerShellTool/readOnlyValidation.ts

- lines: 1824
- imports: 6
- exports: 10
- importance: 98
- tags: auth, permissions, tools, state-memory
- exportedSymbols: argLeaksValue, resolveToCanonical, isCwdChangingCmdlet, isSafeOutputCommand, isAllowlistedPipelineTail, isProvablySafeStatement, hasSyncSecurityConcerns, isReadOnlyCommand, isAllowlistedCommand, CMDLET_ALLOWLIST
- classes: stays, metadata
- functions: argLeaksValue, resolveToCanonical, isCwdChangingCmdlet, isSafeOutputCommand, isAllowlistedPipelineTail, isProvablySafeStatement, lookupAllowlist, hasSyncSecurityConcerns, isReadOnlyCommand, isAllowlistedCommand, isExternalCommandSafe, isGitSafe, isGhSafe, isDockerSafe, receives, isDotnetSafe

## src/tools/PowerShellTool/toolName.ts

- lines: 3
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- topComment: Here to break circular dependency from prompt.ts
- exportedSymbols: POWERSHELL_TOOL_NAME

## src/tools/PowerShellTool/UI.tsx

- lines: 131
- imports: 14
- exports: 5
- importance: 51
- tags: tools
- exportedSymbols: renderToolUseMessage, renderToolUseProgressMessage, renderToolUseQueuedMessage, renderToolResultMessage, renderToolUseErrorMessage
- functions: renderToolUseMessage, renderToolUseProgressMessage, renderToolUseQueuedMessage, renderToolResultMessage, renderToolUseErrorMessage

## src/tools/ReadMcpResourceTool/prompt.ts

- lines: 17
- imports: 0
- exports: 2
- importance: 34
- tags: mcp, tools
- exportedSymbols: DESCRIPTION, PROMPT

## src/tools/ReadMcpResourceTool/ReadMcpResourceTool.ts

- lines: 159
- imports: 10
- exports: 4
- importance: 59
- tags: mcp, query-loop, tools
- exportedSymbols: inputSchema, outputSchema, ReadMcpResourceTool, Output

## src/tools/ReadMcpResourceTool/UI.tsx

- lines: 37
- imports: 9
- exports: 3
- importance: 45
- tags: mcp, tools
- exportedSymbols: renderToolUseMessage, userFacingName, renderToolResultMessage
- functions: renderToolUseMessage, userFacingName, renderToolResultMessage

## src/tools/RemoteTriggerTool/prompt.ts

- lines: 16
- imports: 0
- exports: 3
- importance: 48
- tags: auth, remote, tools
- exportedSymbols: REMOTE_TRIGGER_TOOL_NAME, DESCRIPTION, PROMPT

## src/tools/RemoteTriggerTool/RemoteTriggerTool.ts

- lines: 162
- imports: 13
- exports: 3
- importance: 70
- tags: auth, remote, query-loop, tools, state-memory
- exportedSymbols: RemoteTriggerTool, Input, Output

## src/tools/RemoteTriggerTool/UI.tsx

- lines: 17
- imports: 5
- exports: 2
- importance: 39
- tags: remote, tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage
- functions: renderToolUseMessage, renderToolResultMessage

## src/tools/REPLTool/constants.ts

- lines: 47
- imports: 9
- exports: 3
- importance: 45
- tags: tools
- exportedSymbols: isReplModeEnabled, REPL_TOOL_NAME, REPL_ONLY_TOOLS
- functions: isReplModeEnabled

## src/tools/REPLTool/primitiveTools.ts

- lines: 40
- imports: 9
- exports: 1
- importance: 41
- tags: tools
- exportedSymbols: getReplPrimitiveTools
- functions: getReplPrimitiveTools

## src/tools/ScheduleCronTool/CronCreateTool.ts

- lines: 158
- imports: 11
- exports: 2
- importance: 55
- tags: query-loop, tools, state-memory
- exportedSymbols: CronCreateTool, CreateOutput

## src/tools/ScheduleCronTool/CronDeleteTool.ts

- lines: 96
- imports: 8
- exports: 2
- importance: 53
- tags: query-loop, tools
- exportedSymbols: CronDeleteTool, DeleteOutput

## src/tools/ScheduleCronTool/CronListTool.ts

- lines: 98
- imports: 9
- exports: 2
- importance: 54
- tags: query-loop, tools, state-memory
- exportedSymbols: CronListTool, ListOutput

## src/tools/ScheduleCronTool/prompt.ts

- lines: 136
- imports: 4
- exports: 12
- importance: 53
- tags: tools, state-memory
- exportedSymbols: isKairosCronEnabled, isDurableCronEnabled, buildCronCreateDescription, buildCronCreatePrompt, buildCronDeletePrompt, buildCronListPrompt, DEFAULT_MAX_AGE_DAYS, CRON_CREATE_TOOL_NAME, CRON_DELETE_TOOL_NAME, CRON_LIST_TOOL_NAME, CRON_DELETE_DESCRIPTION, CRON_LIST_DESCRIPTION
- functions: isKairosCronEnabled, isDurableCronEnabled, buildCronCreateDescription, buildCronCreatePrompt, buildCronDeletePrompt, buildCronListPrompt

## src/tools/ScheduleCronTool/UI.tsx

- lines: 60
- imports: 7
- exports: 6
- importance: 49
- tags: tools
- exportedSymbols: renderCreateToolUseMessage, renderCreateResultMessage, renderDeleteToolUseMessage, renderDeleteResultMessage, renderListToolUseMessage, renderListResultMessage
- functions: renderCreateToolUseMessage, renderCreateResultMessage, renderDeleteToolUseMessage, renderDeleteResultMessage, renderListToolUseMessage, renderListResultMessage

## src/tools/SendMessageTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: SEND_MESSAGE_TOOL_NAME

## src/tools/SendMessageTool/prompt.ts

- lines: 50
- imports: 1
- exports: 2
- importance: 35
- tags: bridge, tools, state-memory
- exportedSymbols: getPrompt, DESCRIPTION
- functions: getPrompt

## src/tools/SendMessageTool/SendMessageTool.ts

- lines: 918
- imports: 29
- exports: 8
- importance: 87
- tags: permissions, bridge, query-loop, tools, state-memory
- exportedSymbols: SendMessageTool, Input, MessageRouting, MessageOutput, BroadcastOutput, RequestOutput, ResponseOutput, SendMessageToolOutput
- functions: findTeammateColor, handleMessage, handleBroadcast, handleShutdownRequest, handleShutdownApproval, handleShutdownRejection, handlePlanApproval, handlePlanRejection

## src/tools/SendMessageTool/UI.tsx

- lines: 31
- imports: 5
- exports: 2
- importance: 39
- tags: tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage
- functions: renderToolUseMessage, renderToolResultMessage

## src/tools/shared/gitOperationTracking.ts

- lines: 278
- imports: 2
- exports: 6
- importance: 47
- tags: tools, state-memory
- exportedSymbols: parseGitCommitId, detectGitOperation, trackGitOperations, CommitKind, BranchAction, PrAction
- classes: tolerates
- functions: gitCmdRe, parsePrUrl, findPrInStdout, parseGitCommitId, parseGitPushBranch, parsePrNumberFromText, parseRefFromCommand, detectGitOperation, trackGitOperations

## src/tools/shared/spawnMultiAgent.ts

- lines: 1094
- imports: 33
- exports: 5
- importance: 95
- tags: auth, permissions, query-loop, tools, state-memory
- exportedSymbols: resolveTeammateModel, generateUniqueTeammateName, spawnTeammate, SpawnOutput, SpawnTeammateConfig
- functions: getDefaultTeammateModel, resolveTeammateModel, hasSession, ensureSession, getTeammateCommand, buildInheritedCliFlags, generateUniqueTeammateName, handleSpawnSplitPane, handleSpawnSeparateWindow, registerOutOfProcessTeammateTask, handleSpawnInProcess, handleSpawn, spawnTeammate

## src/tools/SkillTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: SKILL_TOOL_NAME

## src/tools/SkillTool/prompt.ts

- lines: 242
- imports: 11
- exports: 11
- importance: 73
- tags: auth, tools, commands, cost-budget
- exportedSymbols: getCharBudget, formatCommandsWithinBudget, getSkillToolInfo, getLimitedSkillToolCommands, clearPromptCache, getSkillInfo, SKILL_BUDGET_CONTEXT_PERCENT, CHARS_PER_TOKEN, DEFAULT_CHAR_BUDGET, MAX_LISTING_DESC_CHARS, getPrompt
- functions: getCharBudget, getCommandDescription, formatCommandDescription, formatCommandsWithinBudget, getSkillToolInfo, getLimitedSkillToolCommands, clearPromptCache, getSkillInfo

## src/tools/SkillTool/SkillTool.ts

- lines: 1109
- imports: 36
- exports: 4
- importance: 93
- tags: auth, permissions, mcp, query-loop, tools, state-memory, cost-budget
- exportedSymbols: inputSchema, outputSchema, SkillTool, Output
- functions: getAllCommands, executeForkedSkill, to, skillHasOnlySafeProperties, isOfficialMarketplaceSkill, extractUrlScheme, executeRemoteSkill

## src/tools/SkillTool/UI.tsx

- lines: 128
- imports: 16
- exports: 5
- importance: 51
- tags: tools, state-memory
- exportedSymbols: renderToolResultMessage, renderToolUseMessage, renderToolUseProgressMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage
- functions: renderToolResultMessage, renderToolUseMessage, renderToolUseProgressMessage, renderToolUseRejectedMessage, renderToolUseErrorMessage

## src/tools/SleepTool/prompt.ts

- lines: 18
- imports: 1
- exports: 3
- importance: 37
- tags: tools
- exportedSymbols: SLEEP_TOOL_NAME, DESCRIPTION, SLEEP_TOOL_PROMPT

## src/tools/SyntheticOutputTool/SyntheticOutputTool.ts

- lines: 164
- imports: 8
- exports: 5
- importance: 70
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: isSyntheticOutputToolEnabled, createSyntheticOutputTool, SYNTHETIC_OUTPUT_TOOL_NAME, SyntheticOutputTool, Output
- functions: isSyntheticOutputToolEnabled, createSyntheticOutputTool, buildSyntheticOutputTool

## src/tools/TaskCreateTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TASK_CREATE_TOOL_NAME

## src/tools/TaskCreateTool/prompt.ts

- lines: 57
- imports: 1
- exports: 2
- importance: 35
- tags: tools, state-memory
- exportedSymbols: getPrompt, DESCRIPTION
- functions: getPrompt

## src/tools/TaskCreateTool/TaskCreateTool.ts

- lines: 139
- imports: 8
- exports: 2
- importance: 53
- tags: query-loop, tools
- exportedSymbols: TaskCreateTool, Output

## src/tools/TaskGetTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TASK_GET_TOOL_NAME

## src/tools/TaskGetTool/prompt.ts

- lines: 25
- imports: 0
- exports: 2
- importance: 34
- tags: tools
- exportedSymbols: DESCRIPTION, PROMPT

## src/tools/TaskGetTool/TaskGetTool.ts

- lines: 129
- imports: 6
- exports: 2
- importance: 51
- tags: query-loop, tools
- exportedSymbols: TaskGetTool, Output

## src/tools/TaskListTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TASK_LIST_TOOL_NAME

## src/tools/TaskListTool/prompt.ts

- lines: 50
- imports: 1
- exports: 2
- importance: 35
- tags: tools
- exportedSymbols: getPrompt, DESCRIPTION
- functions: getPrompt

## src/tools/TaskListTool/TaskListTool.ts

- lines: 117
- imports: 6
- exports: 2
- importance: 51
- tags: query-loop, tools
- exportedSymbols: TaskListTool, Output

## src/tools/TaskOutputTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TASK_OUTPUT_TOOL_NAME

## src/tools/TaskOutputTool/TaskOutputTool.tsx

- lines: 584
- imports: 29
- exports: 2
- importance: 61
- tags: query-loop, tools, state-memory
- exportedSymbols: TaskOutputTool, default
- functions: getTaskOutputData, waitForTaskCompletion, TaskOutputResultDisplay

## src/tools/TaskStopTool/prompt.ts

- lines: 9
- imports: 0
- exports: 2
- importance: 34
- tags: tools
- exportedSymbols: TASK_STOP_TOOL_NAME, DESCRIPTION

## src/tools/TaskStopTool/TaskStopTool.ts

- lines: 132
- imports: 8
- exports: 2
- importance: 53
- tags: query-loop, tools, state-memory
- exportedSymbols: TaskStopTool, Output

## src/tools/TaskStopTool/UI.tsx

- lines: 41
- imports: 6
- exports: 2
- importance: 40
- tags: mcp, tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage
- functions: renderToolUseMessage, truncateCommand, renderToolResultMessage

## src/tools/TaskUpdateTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TASK_UPDATE_TOOL_NAME

## src/tools/TaskUpdateTool/prompt.ts

- lines: 78
- imports: 0
- exports: 2
- importance: 34
- tags: tools
- exportedSymbols: DESCRIPTION, PROMPT

## src/tools/TaskUpdateTool/TaskUpdateTool.ts

- lines: 407
- imports: 13
- exports: 2
- importance: 59
- tags: query-loop, tools, state-memory
- exportedSymbols: TaskUpdateTool, Output

## src/tools/TeamCreateTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TEAM_CREATE_TOOL_NAME

## src/tools/TeamCreateTool/prompt.ts

- lines: 114
- imports: 0
- exports: 1
- importance: 33
- tags: tools
- exportedSymbols: getPrompt
- functions: getPrompt

## src/tools/TeamCreateTool/TeamCreateTool.ts

- lines: 241
- imports: 22
- exports: 3
- importance: 59
- tags: query-loop, tools, state-memory
- exportedSymbols: TeamCreateTool, Output, Input
- functions: generateUniqueTeamName

## src/tools/TeamCreateTool/UI.tsx

- lines: 6
- imports: 2
- exports: 1
- importance: 34
- tags: tools
- exportedSymbols: renderToolUseMessage
- functions: renderToolUseMessage

## src/tools/TeamDeleteTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TEAM_DELETE_TOOL_NAME

## src/tools/TeamDeleteTool/prompt.ts

- lines: 17
- imports: 0
- exports: 1
- importance: 32
- tags: tools, state-memory
- exportedSymbols: getPrompt
- functions: getPrompt

## src/tools/TeamDeleteTool/TeamDeleteTool.ts

- lines: 140
- imports: 15
- exports: 3
- importance: 57
- tags: query-loop, tools, state-memory
- exportedSymbols: TeamDeleteTool, Output, Input

## src/tools/TeamDeleteTool/UI.tsx

- lines: 20
- imports: 3
- exports: 2
- importance: 37
- tags: tools
- exportedSymbols: renderToolUseMessage, renderToolResultMessage
- functions: renderToolUseMessage, renderToolResultMessage

## src/tools/testing/TestingPermissionTool.tsx

- lines: 74
- imports: 4
- exports: 1
- importance: 56
- tags: permissions, query-loop, tools
- exportedSymbols: TestingPermissionTool

## src/tools/TodoWriteTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TODO_WRITE_TOOL_NAME

## src/tools/TodoWriteTool/prompt.ts

- lines: 185
- imports: 1
- exports: 2
- importance: 37
- tags: tools, state-memory
- exportedSymbols: PROMPT, DESCRIPTION
- functions: getCwd, to, to

## src/tools/TodoWriteTool/TodoWriteTool.ts

- lines: 116
- imports: 11
- exports: 2
- importance: 65
- tags: permissions, query-loop, tools, state-memory
- exportedSymbols: TodoWriteTool, Output

## src/tools/ToolSearchTool/constants.ts

- lines: 2
- imports: 0
- exports: 1
- importance: 32
- tags: tools
- exportedSymbols: TOOL_SEARCH_TOOL_NAME

## src/tools/ToolSearchTool/prompt.ts

- lines: 122
- imports: 6
- exports: 3
- importance: 43
- tags: bridge, mcp, tools
- exportedSymbols: isDeferredTool, formatDeferredToolLine, getPrompt
- functions: getToolLocationHint, isDeferredTool, formatDeferredToolLine, getPrompt

## src/tools/ToolSearchTool/ToolSearchTool.ts

- lines: 472
- imports: 10
- exports: 5
- importance: 75
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: clearToolSearchDescriptionCache, inputSchema, outputSchema, ToolSearchTool, Output
- functions: getDeferredToolsCacheKey, maybeInvalidateCache, clearToolSearchDescriptionCache, buildSearchResult, parseToolName, compileTermPatterns, searchToolsWithKeywords, getPendingServerNames, logSearchOutcome

## src/tools/utils.ts

- lines: 41
- imports: 1
- exports: 2
- importance: 45
- tags: query-loop, tools
- exportedSymbols: tagMessagesWithToolUseID, getToolUseIDFromParentMessage
- functions: tagMessagesWithToolUseID, getToolUseIDFromParentMessage

## src/tools/WebFetchTool/preapproved.ts

- lines: 167
- imports: 0
- exports: 2
- importance: 46
- tags: permissions, tools
- topComment: For legal and security concerns, we typically only allow Web Fetch to access
- exportedSymbols: isPreapprovedHost, PREAPPROVED_HOSTS
- functions: isPreapprovedHost

## src/tools/WebFetchTool/prompt.ts

- lines: 47
- imports: 0
- exports: 3
- importance: 36
- tags: mcp, tools
- exportedSymbols: makeSecondaryModelPrompt, WEB_FETCH_TOOL_NAME, DESCRIPTION
- functions: makeSecondaryModelPrompt

## src/tools/WebFetchTool/UI.tsx

- lines: 72
- imports: 8
- exports: 4
- importance: 46
- tags: tools
- exportedSymbols: renderToolUseMessage, renderToolUseProgressMessage, renderToolResultMessage, getToolUseSummary
- functions: renderToolUseMessage, renderToolUseProgressMessage, renderToolResultMessage, getToolUseSummary

## src/tools/WebFetchTool/utils.ts

- lines: 531
- imports: 12
- exports: 10
- importance: 86
- tags: auth, mcp, query-loop, tools, state-memory
- exportedSymbols: clearWebFetchCache, isPreapprovedUrl, validateURL, checkDomainBlocklist, isPermittedRedirect, getWithPermittedRedirects, getURLMarkdownContent, applyPromptToMarkdown, MAX_MARKDOWN_LENGTH, FetchedContent
- classes: DomainBlockedError, DomainCheckFailedError, EgressBlockedError, itself
- functions: clearWebFetchCache, getTurndownService, isPreapprovedUrl, validateURL, checkDomainBlocklist, isPermittedRedirect, to, getWithPermittedRedirects, isRedirectInfo, getURLMarkdownContent, applyPromptToMarkdown

## src/tools/WebFetchTool/WebFetchTool.ts

- lines: 319
- imports: 11
- exports: 2
- importance: 67
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: WebFetchTool, Output
- functions: webFetchToolInputToPermissionRuleContent, buildSuggestions

## src/tools/WebSearchTool/prompt.ts

- lines: 35
- imports: 1
- exports: 2
- importance: 35
- tags: tools
- exportedSymbols: getWebSearchPrompt, WEB_SEARCH_TOOL_NAME
- functions: getWebSearchPrompt

## src/tools/WebSearchTool/UI.tsx

- lines: 101
- imports: 7
- exports: 4
- importance: 46
- tags: tools
- exportedSymbols: renderToolUseMessage, renderToolUseProgressMessage, renderToolResultMessage, getToolUseSummary
- functions: getSearchSummary, renderToolUseMessage, renderToolUseProgressMessage, renderToolResultMessage, getToolUseSummary

## src/tools/WebSearchTool/WebSearchTool.ts

- lines: 436
- imports: 16
- exports: 3
- importance: 71
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: WebSearchTool, SearchResult, Output
- functions: makeToolSchema, makeOutputFromSearchResponse

## src/types/command.ts

- lines: 217
- imports: 14
- exports: 15
- importance: 42
- tags: auth, mcp, tools, commands, state-memory, cost-budget
- exportedSymbols: getCommandName, isCommandEnabled, LocalCommandResult, PromptCommand, LocalCommandCall, LocalCommandModule, LocalJSXCommandContext, ResumeEntrypoint, CommandResultDisplay, LocalJSXCommandOnDone, LocalJSXCommandCall, LocalJSXCommandModule, CommandAvailability, CommandBase, Command
- functions: getCommandName, isCommandEnabled

## src/types/generated/events_mono/claude_code/v1/claude_code_internal_event.ts

- lines: 866
- imports: 2
- exports: 8
- importance: 28
- tags: tools, state-memory
- topComment: Code generated by protoc-gen-ts_proto. DO NOT EDIT.
- exportedSymbols: GitHubActionsMetadata, EnvironmentMetadata, SlackContext, ClaudeCodeInternalEvent, GitHubActionsMetadata, EnvironmentMetadata, SlackContext, ClaudeCodeInternalEvent
- functions: createBaseGitHubActionsMetadata, createBaseEnvironmentMetadata, createBaseSlackContext, createBaseClaudeCodeInternalEvent, fromTimestamp, fromJsonTimestamp, isSet

## src/types/generated/events_mono/common/v1/auth.ts

- lines: 101
- imports: 0
- exports: 2
- importance: 17
- tags: auth
- topComment: Code generated by protoc-gen-ts_proto. DO NOT EDIT.
- exportedSymbols: PublicApiAuth, PublicApiAuth
- functions: createBasePublicApiAuth, isSet

## src/types/generated/events_mono/growthbook/v1/growthbook_experiment_event.ts

- lines: 224
- imports: 2
- exports: 2
- importance: 8
- tags: tools, state-memory
- topComment: Code generated by protoc-gen-ts_proto. DO NOT EDIT.
- exportedSymbols: GrowthbookExperimentEvent, GrowthbookExperimentEvent
- functions: createBaseGrowthbookExperimentEvent, fromTimestamp, fromJsonTimestamp, isSet

## src/types/generated/google/protobuf/timestamp.ts

- lines: 188
- imports: 0
- exports: 2
- importance: 6
- tags: (none)
- topComment: Code generated by protoc-gen-ts_proto. DO NOT EDIT.
- exportedSymbols: Timestamp, Timestamp
- functions: createBaseTimestamp, isSet

## src/types/hooks.ts

- lines: 291
- imports: 11
- exports: 16
- importance: 51
- tags: permissions, mcp, tools, state-memory, hooks-security
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: isHookEvent, isSyncHookJSONOutput, isAsyncHookJSONOutput, promptRequestSchema, syncHookResponseSchema, hookJSONOutputSchema, PromptRequest, PromptResponse, HookCallbackContext, HookCallback, HookCallbackMatcher, HookProgress, HookBlockingError, PermissionRequestResult, HookResult, AggregatedHookResult
- functions: isHookEvent, to, isSyncHookJSONOutput, to, isAsyncHookJSONOutput

## src/types/ids.ts

- lines: 45
- imports: 0
- exports: 5
- importance: 10
- tags: state-memory
- exportedSymbols: asSessionId, asAgentId, toAgentId, SessionId, AgentId
- functions: asSessionId, asAgentId, toAgentId

## src/types/logs.ts

- lines: 331
- imports: 6
- exports: 25
- importance: 50
- tags: auth, permissions, tools, state-memory
- exportedSymbols: sortLogs, SerializedMessage, LogOption, SummaryMessage, CustomTitleMessage, AiTitleMessage, LastPromptMessage, TaskSummaryMessage, TagMessage, AgentNameMessage, AgentColorMessage, AgentSettingMessage, PRLinkMessage, ModeEntry, PersistedWorktreeSession, WorktreeStateEntry, ContentReplacementEntry, FileHistorySnapshotMessage, FileAttributionState, AttributionSnapshotMessage, TranscriptMessage, SpeculationAcceptMessage, ContextCollapseCommitEntry, ContextCollapseSnapshotEntry, Entry
- functions: sortLogs

## src/types/permissions.ts

- lines: 442
- imports: 2
- exports: 31
- importance: 57
- tags: auth, permissions, bridge, query-loop, tools, state-memory
- exportedSymbols: EXTERNAL_PERMISSION_MODES, INTERNAL_PERMISSION_MODES, PERMISSION_MODES, ExternalPermissionMode, InternalPermissionMode, PermissionMode, PermissionBehavior, PermissionRuleSource, PermissionRuleValue, PermissionRule, PermissionUpdateDestination, PermissionUpdate, WorkingDirectorySource, AdditionalWorkingDirectory, PermissionCommandMetadata, PermissionMetadata, PermissionAllowDecision, PendingClassifierCheck, PermissionAskDecision, PermissionDenyDecision, PermissionDecision, PermissionResult, PermissionDecisionReason, ClassifierResult, ClassifierBehavior, ClassifierUsage, YoloClassifierResult, RiskLevel, PermissionExplanation, ToolPermissionRulesBySource, ToolPermissionContext

## src/types/plugin.ts

- lines: 364
- imports: 5
- exports: 8
- importance: 25
- tags: mcp
- exportedSymbols: getPluginErrorMessage, BuiltinPluginDefinition, PluginRepository, PluginConfig, LoadedPlugin, PluginComponent, PluginError, PluginLoadResult
- functions: to, getPluginErrorMessage

## src/types/textInputTypes.ts

- lines: 388
- imports: 10
- exports: 14
- importance: 42
- tags: permissions, bridge, mcp, tools, commands, state-memory
- exportedSymbols: isValidImagePaste, getImagePasteIds, InlineGhostText, BaseTextInputProps, VimTextInputProps, VimMode, BaseInputState, TextInputState, VimInputState, PromptInputMode, EditablePromptInputMode, QueuePriority, QueuedCommand, OrphanedPermission
- functions: isValidImagePaste, getImagePasteIds

## src/upstreamproxy/relay.ts

- lines: 456
- imports: 4
- exports: 5
- importance: 31
- tags: auth, remote, state-memory
- exportedSymbols: encodeChunk, decodeChunk, startUpstreamProxyRelay, startNodeRelay, UpstreamProxyRelay
- functions: encodeChunk, decodeChunk, newConnState, startUpstreamProxyRelay, startBunRelay, startNodeRelay, handleData, openTunnel, sendKeepalive, forwardToWs, cleanupConn

## src/upstreamproxy/upstreamproxy.ts

- lines: 286
- imports: 8
- exports: 4
- importance: 31
- tags: auth, remote, mcp, state-memory
- exportedSymbols: initUpstreamProxy, getUpstreamProxyEnv, resetUpstreamProxyForTests, SESSION_TOKEN_PATH
- functions: initUpstreamProxy, getUpstreamProxyEnv, resetUpstreamProxyForTests, readToken, setNonDumpable, downloadCaBundle

## src/utils/abortController.ts

- lines: 100
- imports: 1
- exports: 2
- importance: 21
- tags: (none)
- exportedSymbols: createAbortController, createChildAbortController
- functions: createAbortController, avoids, propagateAbort, avoids, removeAbortHandler, createChildAbortController

## src/utils/activityManager.ts

- lines: 165
- imports: 1
- exports: 2
- importance: 22
- tags: tools
- exportedSymbols: ActivityManager, activityManager
- classes: ActivityManager

## src/utils/advisor.ts

- lines: 146
- imports: 5
- exports: 12
- importance: 49
- tags: query-loop, tools, state-memory
- exportedSymbols: isAdvisorBlock, isAdvisorEnabled, canUserConfigureAdvisor, getExperimentAdvisorModels, modelSupportsAdvisor, isValidAdvisorModel, getInitialAdvisorSetting, getAdvisorUsage, ADVISOR_TOOL_INSTRUCTIONS, AdvisorServerToolUseBlock, AdvisorToolResultBlock, AdvisorBlock
- functions: isAdvisorBlock, getAdvisorConfig, isAdvisorEnabled, canUserConfigureAdvisor, getExperimentAdvisorModels, modelSupportsAdvisor, isValidAdvisorModel, getInitialAdvisorSetting, getAdvisorUsage

## src/utils/agentContext.ts

- lines: 179
- imports: 3
- exports: 9
- importance: 38
- tags: tools, state-memory
- exportedSymbols: getAgentContext, runWithAgentContext, isSubagentContext, isTeammateAgentContext, getSubagentLogName, consumeInvokingRequestId, SubagentContext, TeammateAgentContext, AgentContext
- functions: getAgentContext, with, will, runWithAgentContext, isSubagentContext, isTeammateAgentContext, getSubagentLogName, consumeInvokingRequestId

## src/utils/agenticSessionSearch.ts

- lines: 308
- imports: 8
- exports: 1
- importance: 28
- tags: state-memory
- exportedSymbols: agenticSessionSearch
- functions: extractMessageText, extractTranscript, logContainsQuery, agenticSessionSearch

## src/utils/agentId.ts

- lines: 100
- imports: 0
- exports: 4
- importance: 24
- tags: tools
- exportedSymbols: formatAgentId, parseAgentId, generateRequestId, parseRequestId
- functions: formatAgentId, parseAgentId, generateRequestId, parseRequestId

## src/utils/agentSwarmsEnabled.ts

- lines: 45
- imports: 2
- exports: 1
- importance: 19
- tags: tools
- exportedSymbols: isAgentSwarmsEnabled
- functions: isAgentTeamsFlagSet, isAgentSwarmsEnabled

## src/utils/analyzeContext.ts

- lines: 1383
- imports: 31
- exports: 8
- importance: 90
- tags: auth, permissions, mcp, query-loop, tools, cost-budget
- exportedSymbols: countToolDefinitionTokens, countMcpToolTokens, analyzeContextUsage, TOOL_TOKEN_COUNT_OVERHEAD, DeferredBuiltinTool, SystemToolDetail, SystemPromptSectionDetail, ContextData
- functions: countTokensWithFallback, countToolDefinitionTokens, extractSectionName, countSystemTokens, countMemoryFileTokens, countBuiltInToolTokens, findSkillTool, countSlashCommandTokens, countSkillTokens, countMcpToolTokens, countCustomAgentTokens, processAssistantMessage, processUserMessage, processAttachment, approximateMessageTokens, analyzeContextUsage, to, createCategorySquares

## src/utils/ansiToPng.ts

- lines: 335
- imports: 3
- exports: 2
- importance: 26
- tags: (none)
- exportedSymbols: ansiToPng, AnsiToPngOptions
- functions: makeFallbackGlyph, decodeFont, ansiToPng, lineWidthCells, fillBackground, blitShade, blitGlyph, roundCorners, makeCrcTable, crc32, chunk, encodePng

## src/utils/ansiToSvg.ts

- lines: 273
- imports: 1
- exports: 8
- importance: 35
- tags: (none)
- exportedSymbols: parseAnsi, ansiToSvg, DEFAULT_FG, DEFAULT_BG, AnsiColor, TextSpan, ParsedLine, AnsiToSvgOptions
- functions: parseAnsi, get256Color, ansiToSvg

## src/utils/api.ts

- lines: 719
- imports: 41
- exports: 10
- importance: 73
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: toolToAPISchema, logAPIPrefix, splitSysPromptPrefix, appendSystemContext, prependUserContext, logContextMetrics, normalizeToolInput, normalizeToolInputForAPI, CacheScope, SystemPromptBlock
- functions: filterSwarmFieldsFromSchema, toolToAPISchema, logStripOnce, logAPIPrefix, splitSysPromptPrefix, appendSystemContext, prependUserContext, logContextMetrics, normalizeToolInput, normalizeToolInputForAPI

## src/utils/apiPreconnect.ts

- lines: 72
- imports: 2
- exports: 1
- importance: 31
- tags: auth, mcp
- exportedSymbols: preconnectAnthropicApi
- functions: preconnectAnthropicApi

## src/utils/appleTerminalBackup.ts

- lines: 125
- imports: 6
- exports: 5
- importance: 32
- tags: (none)
- exportedSymbols: markTerminalSetupInProgress, markTerminalSetupComplete, getTerminalPlistPath, backupTerminalPreferences, checkAndRestoreTerminalBackup
- functions: markTerminalSetupInProgress, markTerminalSetupComplete, getTerminalRecoveryInfo, getTerminalPlistPath, backupTerminalPreferences, checkAndRestoreTerminalBackup

## src/utils/argumentSubstitution.ts

- lines: 146
- imports: 1
- exports: 4
- importance: 37
- tags: auth
- exportedSymbols: parseArguments, parseArgumentNames, generateProgressiveArgumentHint, substituteArguments
- functions: parseArguments, parseArgumentNames, generateProgressiveArgumentHint, substituteArguments

## src/utils/array.ts

- lines: 14
- imports: 0
- exports: 3
- importance: 21
- tags: (none)
- exportedSymbols: intersperse, count, uniq
- functions: intersperse, count, uniq

## src/utils/asciicast.ts

- lines: 240
- imports: 10
- exports: 6
- importance: 40
- tags: state-memory
- exportedSymbols: getRecordFilePath, _resetRecordingStateForTesting, getSessionRecordingPaths, renameRecordingForSession, flushAsciicastRecorder, installAsciicastRecorder
- functions: getRecordFilePath, _resetRecordingStateForTesting, getSessionRecordingPaths, renameRecordingForSession, getTerminalSize, flushAsciicastRecorder, installAsciicastRecorder, onResize

## src/utils/attachments.ts

- lines: 3998
- imports: 100
- exports: 51
- importance: 105
- tags: auth, permissions, bridge, mcp, query-loop, tools, commands, state-memory, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: getAttachments, getQueuedCommandAttachments, getAgentPendingMessageAttachments, getDateChangeAttachments, getDeferredToolsDeltaAttachment, getAgentListingDeltaAttachment, getMcpInstructionsDeltaAttachment, getDirectoriesToProcess, memoryFilesToAttachments, getChangedFiles, collectSurfacedMemories, readMemoriesForSurfacing, memoryHeader, startRelevantMemoryPrefetch, collectRecentSuccessfulTools, filterDuplicateMemoryAttachments, resetSentSkillNames, suppressNextSkillListing, filterToBundledAndMcp, extractAtMentionedFiles, extractMcpResourceMentions, extractAgentMentions, parseAtMentionedFileLines, tryGetPDFReference, generateFileAttachment, createAttachmentMessage, getVerifyPlanReminderTurnCount, getCompactionReminderAttachment, getContextEfficiencyAttachment, TODO_REMINDER_CONFIG, PLAN_MODE_ATTACHMENT_CONFIG, AUTO_MODE_ATTACHMENT_CONFIG, RELEVANT_MEMORIES_CONFIG, VERIFY_PLAN_REMINDER_CONFIG, FileAttachment, CompactFileReferenceAttachment, PDFReferenceAttachment, AlreadyReadFileAttachment, AgentMentionAttachment, AsyncHookResponseAttachment
- functions: getAttachments, for, it, maybe, getQueuedCommandAttachments, getAgentPendingMessageAttachments, buildImageContentBlocks, getPlanModeAttachmentTurnCount, countPlanModeAttachmentsSinceLastExit, getPlanModeAttachments, getPlanModeExitAttachment, getAutoModeAttachmentTurnCount, countAutoModeAttachmentsSinceLastExit, getAutoModeAttachments, getAutoModeExitAttachment, getDateChangeAttachments, getUltrathinkEffortAttachment, getDeferredToolsDeltaAttachment, getAgentListingDeltaAttachment, getMcpInstructionsDeltaAttachment, getCriticalSystemReminderAttachment, getOutputStyleAttachment, getSelectedLinesFromIDE, getDirectoriesToProcess, isInstructionsMemoryType, memoryFilesToAttachments, and, performs, getNestedMemoryAttachmentsForFile, getOpenedFileFromIDE, processAtMentionedFiles, processAgentMentions, processMcpResourceAttachments, getChangedFiles, getNestedMemoryAttachments, getRelevantMemoryAttachments, collectSurfacedMemories, readMemoriesForSurfacing, memoryHeader, startRelevantMemoryPrefetch

## src/utils/attribution.ts

- lines: 394
- imports: 22
- exports: 4
- importance: 59
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: getAttributionTexts, countUserPromptsInMessages, getEnhancedPRAttribution, AttributionTexts
- functions: getAttributionTexts, isTerminalOutput, countUserPromptsInMessages, countUserPromptsFromEntries, getPRAttributionData, countMemoryFileAccessFromEntries, getTranscriptStats, getEnhancedPRAttribution

## src/utils/auth.ts

- lines: 2003
- imports: 35
- exports: 58
- importance: 80
- tags: auth, tools, state-memory, cost-budget
- exportedSymbols: isAnthropicAuthEnabled, getAuthTokenSource, getAnthropicApiKey, hasAnthropicApiKeyAuth, getAnthropicApiKeyWithSource, getConfiguredApiKeyHelper, isAwsAuthRefreshFromProjectSettings, isAwsCredentialExportFromProjectSettings, calculateApiKeyHelperTTL, getApiKeyHelperElapsedMs, getApiKeyFromApiKeyHelper, getApiKeyFromApiKeyHelperCached, clearApiKeyHelperCache, prefetchApiKeyFromApiKeyHelperIfSafe, refreshAwsAuth, clearAwsCredentialsCache, isGcpAuthRefreshFromProjectSettings, checkGcpCredentialsValid, refreshGcpAuth, clearGcpCredentialsCache, prefetchGcpCredentialsIfSafe, prefetchAwsCredentialsAndBedRockInfoIfSafe, saveApiKey, isCustomApiKeyApproved, removeApiKey, saveOAuthTokensIfNeeded, clearOAuthTokenCache, handleOAuth401Error, getClaudeAIOAuthTokensAsync, checkAndRefreshOAuthTokenIfNeeded, isClaudeAISubscriber, hasProfileScope, is1PApiCustomer, getOauthAccountInfo, isOverageProvisioningAllowed, hasOpusAccess, getSubscriptionType, isMaxSubscriber, isTeamSubscriber, isTeamPremiumSubscriber
- classes: GcpCredentialsTimeoutError
- functions: isManagedOAuthContext, isAnthropicAuthEnabled, getAuthTokenSource, getAnthropicApiKey, hasAnthropicApiKeyAuth, getAnthropicApiKeyWithSource, returns, getConfiguredApiKeyHelper, isApiKeyHelperFromProjectOrLocalSettings, getConfiguredAwsAuthRefresh, isAwsAuthRefreshFromProjectSettings, getConfiguredAwsCredentialExport, isAwsCredentialExportFromProjectSettings, calculateApiKeyHelperTTL, getApiKeyHelperElapsedMs, getApiKeyFromApiKeyHelper, _runAndCache, _executeApiKeyHelper, getApiKeyFromApiKeyHelperCached, clearApiKeyHelperCache, prefetchApiKeyFromApiKeyHelperIfSafe, runAwsAuthRefresh, refreshAwsAuth, getAwsCredsFromCredentialExport, clearAwsCredentialsCache, getConfiguredGcpAuthRefresh, isGcpAuthRefreshFromProjectSettings, checkGcpCredentialsValid, runGcpAuthRefresh, refreshGcpAuth, checks, clearGcpCredentialsCache, prefetchGcpCredentialsIfSafe, prefetchAwsCredentialsAndBedRockInfoIfSafe, isValidApiKey, saveApiKey, isCustomApiKeyApproved, removeApiKey, maybeRemoveApiKeyFromMacOSKeychain, saveOAuthTokensIfNeeded

## src/utils/authFileDescriptor.ts

- lines: 197
- imports: 6
- exports: 7
- importance: 49
- tags: auth, state-memory
- exportedSymbols: maybePersistTokenForSubprocesses, readTokenFromWellKnownFile, getOAuthTokenFromFileDescriptor, getApiKeyFromFileDescriptor, CCR_OAUTH_TOKEN_PATH, CCR_API_KEY_PATH, CCR_SESSION_INGRESS_TOKEN_PATH
- functions: maybePersistTokenForSubprocesses, readTokenFromWellKnownFile, on, getCredentialFromFd, getOAuthTokenFromFileDescriptor, getApiKeyFromFileDescriptor

## src/utils/authPortable.ts

- lines: 20
- imports: 2
- exports: 2
- importance: 33
- tags: auth
- exportedSymbols: maybeRemoveApiKeyFromMacOSKeychainThrows, normalizeApiKeyForConfig
- functions: maybeRemoveApiKeyFromMacOSKeychainThrows, normalizeApiKeyForConfig

## src/utils/autoModeDenials.ts

- lines: 27
- imports: 1
- exports: 3
- importance: 32
- tags: permissions, tools, state-memory
- exportedSymbols: recordAutoModeDenial, getAutoModeDenials, AutoModeDenial
- functions: recordAutoModeDenial, getAutoModeDenials

## src/utils/autoRunIssue.tsx

- lines: 122
- imports: 6
- exports: 5
- importance: 32
- tags: (none)
- exportedSymbols: AutoRunIssueNotification, shouldAutoRunIssue, getAutoRunCommand, getAutoRunIssueReasonText, AutoRunIssueReason
- functions: AutoRunIssueNotification, shouldAutoRunIssue, getAutoRunCommand, getAutoRunIssueReasonText

## src/utils/autoUpdater.ts

- lines: 562
- imports: 20
- exports: 16
- importance: 60
- tags: permissions
- exportedSymbols: assertMinVersion, getMaxVersion, getMaxVersionMessage, shouldSkipVersion, getLockFilePath, checkGlobalInstallPermissions, getLatestVersion, getNpmDistTags, getLatestVersionFromGcs, getGcsDistTags, getVersionHistory, installGlobalPackage, InstallStatus, AutoUpdaterResult, MaxVersionConfig, NpmDistTags
- classes: AutoUpdaterError
- functions: assertMinVersion, getMaxVersion, getMaxVersionMessage, getMaxVersionConfig, shouldSkipVersion, to, getLockFilePath, acquireLock, releaseLock, getInstallationPrefix, checkGlobalInstallPermissions, getLatestVersion, getNpmDistTags, getLatestVersionFromGcs, getGcsDistTags, getVersionHistory, installGlobalPackage, removeClaudeAliasesFromShellConfigs

## src/utils/aws.ts

- lines: 75
- imports: 1
- exports: 6
- importance: 40
- tags: auth, state-memory
- exportedSymbols: isAwsCredentialsProviderError, isValidAwsStsOutput, checkStsCallerIdentity, clearAwsIniCache, AwsCredentials, AwsStsOutput
- functions: isAwsCredentialsProviderError, isValidAwsStsOutput, checkStsCallerIdentity, clearAwsIniCache

## src/utils/awsAuthStatusManager.ts

- lines: 82
- imports: 1
- exports: 2
- importance: 21
- tags: (none)
- exportedSymbols: AwsAuthStatusManager, AwsAuthStatus
- classes: AwsAuthStatusManager

## src/utils/background/remote/preconditions.ts

- lines: 236
- imports: 12
- exports: 8
- importance: 55
- tags: auth, remote
- exportedSymbols: checkNeedsClaudeAiLogin, checkIsGitClean, checkHasRemoteEnvironment, checkIsInGitRepo, checkHasGitRemote, checkGithubAppInstalled, checkGithubTokenSynced, checkRepoForRemoteAccess
- functions: checkNeedsClaudeAiLogin, checkIsGitClean, checkHasRemoteEnvironment, checkIsInGitRepo, checkHasGitRemote, checkGithubAppInstalled, checkGithubTokenSynced, checkRepoForRemoteAccess

## src/utils/background/remote/remoteSession.ts

- lines: 99
- imports: 7
- exports: 3
- importance: 29
- tags: remote, state-memory
- exportedSymbols: checkBackgroundRemoteSessionEligibility, BackgroundRemoteSession, BackgroundRemoteSessionPrecondition
- functions: checkBackgroundRemoteSessionEligibility

## src/utils/backgroundHousekeeping.ts

- lines: 95
- imports: 8
- exports: 1
- importance: 26
- tags: state-memory
- exportedSymbols: startBackgroundHousekeeping
- functions: startBackgroundHousekeeping, runVerySlowOps

## src/utils/bash/ast.ts

- lines: 2680
- imports: 3
- exports: 8
- importance: 86
- tags: auth, permissions, tools, cost-budget
- exportedSymbols: nodeTypeId, parseForSecurity, parseForSecurityFromAst, checkSemantics, Redirect, SimpleCommand, ParseForSecurityResult, SemanticCheckResult
- functions: containsAnyPlaceholder, nodeTypeId, maskBracesInQuotedContexts, parseForSecurity, parseForSecurityFromAst, walkProgram, collectCommands, walkTestExpr, walkRedirectedStatement, walkFileRedirect, walkHeredocRedirect, walkHerestringRedirect, walkCommand, collectCommandSubstitution, implements, walkArgument, walkString, walkArithmetic, extractSafeCatHeredoc, walkVariableAssignment, resolveSimpleExpansion, applyVarToScope, stripRawString, tooComplex, checkSemantics, which

## src/utils/bash/bashParser.ts

- lines: 4437
- imports: 0
- exports: 4
- importance: 65
- tags: auth, cost-budget
- exportedSymbols: ensureParserInitialized, getParserModule, SHELL_KEYWORDS, TsNode
- functions: ensureParserInitialized, getParserModule, makeLexer, advance, peek, byteAt, isWordChar, isWordStart, isIdentStart, isIdentChar, isDigit, isHexDigit, isBaseDigit, isHeredocDelimChar, skipBlanks, nextToken, parseSource, byteLengthUtf8, checkBudget, mk, sliceBytes, leaf, parseProgram, saveLex, restoreLex, parseStatements, parseAndOr, skipNewlines, parsePipeline, parseCommand, parseSimpleCommand, definition, maybeRedirect, tryParseAssignment, parseSubscriptIndexInline, parseSubscriptIndex, isRedirectLiteralStart, tryParseRedirect, parseProcessSub, scanHeredocBodies

## src/utils/bash/bashPipeCommand.ts

- lines: 295
- imports: 1
- exports: 1
- importance: 33
- tags: auth
- exportedSymbols: rearrangePipeCommand
- functions: rearrangePipeCommand, findFirstPipeOperator, buildCommandParts, isEnvironmentVariableAssignment, isCommandSeparator, isOperator, containsControlStructure, quoteWithEvalStdinRedirect, singleQuoteForEval, joinContinuationLines

## src/utils/bash/commands.ts

- lines: 1340
- imports: 5
- exports: 8
- importance: 74
- tags: auth, permissions, tools, commands
- exportedSymbols: splitCommandWithOperators, filterControlOperators, splitCommand_DEPRECATED, isHelpCommand, clearCommandPrefixCaches, isUnsafeCompoundCommand_DEPRECATED, extractOutputRedirections, getCommandSubcommandPrefix
- classes: glob, check, matches
- functions: generatePlaceholders, isStaticRedirectTarget, splitCommandWithOperators, filterControlOperators, splitCommand_DEPRECATED, isHelpCommand, clearCommandPrefixCaches, isCommandList, isUnsafeCompoundCommand_DEPRECATED, extractOutputRedirections, on, isOperator, isSimpleTarget, hasDangerousExpansion, handleRedirection, handleFileDescriptorRedirection, detectCommandSubstitution, needsQuoting, addToken, reconstructCommand

## src/utils/bash/heredoc.ts

- lines: 734
- imports: 1
- exports: 5
- importance: 57
- tags: auth, permissions
- exportedSymbols: extractHeredocs, restoreHeredocs, containsHeredoc, HeredocInfo, HeredocExtractionResult
- functions: generatePlaceholderSalt, extractHeredocs, restoreHeredocsInString, restoreHeredocs, containsHeredoc

## src/utils/bash/ParsedCommand.ts

- lines: 319
- imports: 4
- exports: 5
- importance: 44
- tags: auth
- exportedSymbols: buildParsedCommandFromRoot, RegexParsedCommand_DEPRECATED, ParsedCommand, OutputRedirection, IParsedCommand
- classes: RegexParsedCommand_DEPRECATED, TreeSitterParsedCommand
- functions: visitNodes, extractPipePositions, extractRedirectionNodes, buildParsedCommandFromRoot, doParse

## src/utils/bash/parser.ts

- lines: 231
- imports: 4
- exports: 7
- importance: 35
- tags: cost-budget
- exportedSymbols: ensureInitialized, parseCommand, parseCommandRaw, extractCommandArguments, PARSE_ABORTED, Node, ParsedCommandData
- functions: logLoadOnce, ensureInitialized, parseCommand, parseCommandRaw, findCommandNode, extractEnvVars, extractCommandArguments, stripQuotes

## src/utils/bash/prefix.ts

- lines: 205
- imports: 4
- exports: 2
- importance: 25
- tags: (none)
- exportedSymbols: getCommandPrefixStatic, getCompoundCommandPrefixesStatic
- functions: isKnownSubcommand, getCommandPrefixStatic, handleWrapper, getCompoundCommandPrefixesStatic, longestCommonPrefix

## src/utils/bash/registry.ts

- lines: 54
- imports: 2
- exports: 5
- importance: 27
- tags: (none)
- exportedSymbols: loadFigSpec, getCommandSpec, CommandSpec, Argument, Option
- functions: loadFigSpec

## src/utils/bash/shellCompletion.ts

- lines: 260
- imports: 5
- exports: 2
- importance: 39
- tags: auth
- exportedSymbols: getShellCompletions, ShellCompletionType
- functions: isCommandOperator, getCompletionTypeFromPrefix, findLastStringToken, isNewCommandContext, parseInputContext, getBashCompletionCommand, getZshCompletionCommand, getCompletionsForShell, getShellCompletions

## src/utils/bash/shellPrefix.ts

- lines: 29
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: formatShellPrefixCommand
- functions: formatShellPrefixCommand

## src/utils/bash/shellQuote.ts

- lines: 305
- imports: 3
- exports: 7
- importance: 47
- tags: auth
- exportedSymbols: tryParseShellCommand, tryQuoteShellArgs, hasMalformedTokens, hasShellQuoteSingleQuoteBug, quote, ShellParseResult, ShellQuoteResult
- functions: tryParseShellCommand, tryQuoteShellArgs, values, hasMalformedTokens, hasShellQuoteSingleQuoteBug, quote

## src/utils/bash/shellQuoting.ts

- lines: 129
- imports: 1
- exports: 4
- importance: 25
- tags: (none)
- exportedSymbols: quoteShellCommand, hasStdinRedirect, shouldAddStdinRedirect, rewriteWindowsNullRedirect
- functions: containsHeredoc, containsMultilineString, quoteShellCommand, hasStdinRedirect, shouldAddStdinRedirect, rewriteWindowsNullRedirect

## src/utils/bash/ShellSnapshot.ts

- lines: 583
- imports: 18
- exports: 3
- importance: 48
- tags: permissions, tools, state-memory
- exportedSymbols: createRipgrepShellIntegration, createFindGrepShellIntegration, createAndSaveSnapshot
- functions: that, createArgv0ShellFunction, createRipgrepShellIntegration, that, createFindGrepShellIntegration, definitions, lookup, getConfigFile, getUserSnapshotContent, names, names, to, definition, getClaudeCodeSnapshotContent, to, definition, getSnapshotScript, definitions, is, but

## src/utils/bash/specs/alias.ts

- lines: 15
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: default

## src/utils/bash/specs/index.ts

- lines: 19
- imports: 8
- exports: 1
- importance: 25
- tags: (none)
- exportedSymbols: default

## src/utils/bash/specs/nohup.ts

- lines: 14
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: default

## src/utils/bash/specs/pyright.ts

- lines: 92
- imports: 1
- exports: 1
- importance: 19
- tags: (none)
- exportedSymbols: default

## src/utils/bash/specs/sleep.ts

- lines: 14
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: default

## src/utils/bash/specs/srun.ts

- lines: 32
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: default

## src/utils/bash/specs/time.ts

- lines: 14
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: default

## src/utils/bash/specs/timeout.ts

- lines: 21
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: default

## src/utils/bash/treeSitterAnalysis.ts

- lines: 507
- imports: 0
- exports: 9
- importance: 39
- tags: (none)
- exportedSymbols: extractQuoteContext, extractCompoundStructure, hasActualOperatorNodes, extractDangerousPatterns, analyzeCommand, QuoteContext, CompoundStructure, DangerousPatterns, TreeSitterAnalysis
- functions: takes, collectQuoteSpans, buildPositionSet, dropContainedSpans, removeSpans, replaceSpansKeepQuotes, extractQuoteContext, extractCompoundStructure, walkTopLevel, for, hasActualOperatorNodes, walk, extractDangerousPatterns, walk, analyzeCommand

## src/utils/betas.ts

- lines: 435
- imports: 13
- exports: 13
- importance: 70
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: filterAllowedSdkBetas, modelSupportsISP, modelSupportsContextManagement, modelSupportsStructuredOutputs, modelSupportsAutoMode, getToolSearchBetaHeader, shouldIncludeFirstPartyOnlyBetas, shouldUseGlobalCacheScope, getMergedBetas, clearBetasCaches, getAllModelBetas, getModelBetas, getBedrockExtraBodyParamsBetas
- functions: partitionBetasByAllowlist, filterAllowedSdkBetas, modelSupportsISP, vertexModelSupportsWebSearch, modelSupportsContextManagement, modelSupportsStructuredOutputs, modelSupportsAutoMode, getToolSearchBetaHeader, shouldIncludeFirstPartyOnlyBetas, shouldUseGlobalCacheScope, getMergedBetas, clearBetasCaches

## src/utils/billing.ts

- lines: 79
- imports: 3
- exports: 3
- importance: 36
- tags: auth
- exportedSymbols: hasConsoleBillingAccess, setMockBillingAccessOverride, hasClaudeAiBillingAccess
- functions: hasConsoleBillingAccess, setMockBillingAccessOverride, hasClaudeAiBillingAccess

## src/utils/binaryCheck.ts

- lines: 54
- imports: 2
- exports: 2
- importance: 21
- tags: state-memory
- exportedSymbols: isBinaryInstalled, clearBinaryCache
- functions: isBinaryInstalled, clearBinaryCache

## src/utils/browser.ts

- lines: 69
- imports: 1
- exports: 2
- importance: 20
- tags: (none)
- exportedSymbols: openPath, openBrowser
- functions: validateUrl, openPath, openBrowser

## src/utils/bufferedWriter.ts

- lines: 101
- imports: 0
- exports: 2
- importance: 20
- tags: (none)
- exportedSymbols: createBufferedWriter, BufferedWriter
- functions: createBufferedWriter, clearTimer, flush, scheduleFlush, flushDeferred

## src/utils/bundledMode.ts

- lines: 23
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- exportedSymbols: isRunningWithBun, isInBundledMode
- functions: isRunningWithBun, isInBundledMode

## src/utils/caCerts.ts

- lines: 116
- imports: 4
- exports: 2
- importance: 24
- tags: (none)
- exportedSymbols: clearCACertsCache, getCACertificates
- functions: clearCACertsCache

## src/utils/caCertsConfig.ts

- lines: 89
- imports: 3
- exports: 1
- importance: 31
- tags: permissions, remote, commands
- exportedSymbols: applyExtraCACertsFromConfig
- functions: applyExtraCACertsFromConfig, getExtraCertsPathFromConfig

## src/utils/cachePaths.ts

- lines: 39
- imports: 4
- exports: 1
- importance: 21
- tags: mcp, state-memory
- exportedSymbols: CACHE_PATHS
- functions: sanitizePath, getProjectDir

## src/utils/CircularBuffer.ts

- lines: 85
- imports: 0
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: CircularBuffer
- classes: CircularBuffer

## src/utils/classifierApprovals.ts

- lines: 89
- imports: 2
- exports: 10
- importance: 46
- tags: permissions, tools, state-memory
- exportedSymbols: setClassifierApproval, getClassifierApproval, setYoloClassifierApproval, getYoloClassifierApproval, setClassifierChecking, clearClassifierChecking, isClassifierChecking, deleteClassifierApproval, clearClassifierApprovals, subscribeClassifierChecking
- functions: setClassifierApproval, getClassifierApproval, setYoloClassifierApproval, getYoloClassifierApproval, setClassifierChecking, clearClassifierChecking, isClassifierChecking, deleteClassifierApproval, clearClassifierApprovals

## src/utils/classifierApprovalsHook.ts

- lines: 18
- imports: 2
- exports: 1
- importance: 29
- tags: permissions, tools
- exportedSymbols: useIsClassifierChecking
- functions: useIsClassifierChecking

## src/utils/claudeCodeHints.ts

- lines: 194
- imports: 2
- exports: 11
- importance: 49
- tags: auth, tools, state-memory
- exportedSymbols: extractClaudeCodeHints, setPendingHint, clearPendingHint, markShownThisSession, getPendingHintSnapshot, hasShownHintThisSession, _resetClaudeCodeHintStore, subscribeToPendingHint, _test, ClaudeCodeHintType, ClaudeCodeHint
- functions: extractClaudeCodeHints, parseAttrs, firstCommandToken, setPendingHint, clearPendingHint, markShownThisSession, getPendingHintSnapshot, hasShownHintThisSession, _resetClaudeCodeHintStore

## src/utils/claudeDesktop.ts

- lines: 153
- imports: 8
- exports: 2
- importance: 28
- tags: mcp
- exportedSymbols: getClaudeDesktopConfigPath, readClaudeDesktopMcpServers
- functions: getClaudeDesktopConfigPath, readClaudeDesktopMcpServers

## src/utils/claudeInChrome/chromeNativeHost.ts

- lines: 528
- imports: 8
- exports: 2
- importance: 43
- tags: permissions, mcp, tools
- topComment: biome-ignore-all lint/suspicious/noConsole: file uses console intentionally
- exportedSymbols: sendChromeMessage, runChromeNativeHost
- classes: ChromeNativeHost, ChromeMessageReader
- functions: log, sendChromeMessage, runChromeNativeHost

## src/utils/claudeInChrome/common.ts

- lines: 541
- imports: 11
- exports: 14
- importance: 49
- tags: bridge, mcp
- exportedSymbols: getAllBrowserDataPaths, getAllNativeMessagingHostsDirs, getAllWindowsRegistryKeys, detectAvailableBrowser, isClaudeInChromeMCPServer, trackClaudeInChromeTabId, isTrackedClaudeInChromeTabId, openInChrome, getSocketDir, getSecureSocketPath, getAllSocketPaths, CLAUDE_IN_CHROME_MCP_SERVER_NAME, CHROMIUM_BROWSERS, BROWSER_DETECTION_ORDER
- functions: getAllBrowserDataPaths, getAllNativeMessagingHostsDirs, getAllWindowsRegistryKeys, detectAvailableBrowser, isClaudeInChromeMCPServer, trackClaudeInChromeTabId, isTrackedClaudeInChromeTabId, openInChrome, getSocketDir, getSecureSocketPath, getAllSocketPaths, getSocketName, getUsername

## src/utils/claudeInChrome/mcpServer.ts

- lines: 294
- imports: 14
- exports: 2
- importance: 54
- tags: auth, permissions, bridge, mcp, tools
- exportedSymbols: createChromeContext, runClaudeInChromeMcpServer
- classes: DebugLogger
- functions: isPermissionMode, getChromeBridgeUrl, isLocalBridge, createChromeContext, runClaudeInChromeMcpServer

## src/utils/claudeInChrome/prompt.ts

- lines: 84
- imports: 0
- exports: 5
- importance: 38
- tags: auth, mcp, tools, state-memory
- exportedSymbols: getChromeSystemPrompt, BASE_CHROME_PROMPT, CHROME_TOOL_SEARCH_INSTRUCTIONS, CLAUDE_IN_CHROME_SKILL_HINT, CLAUDE_IN_CHROME_SKILL_HINT_WITH_WEBBROWSER
- functions: getChromeSystemPrompt

## src/utils/claudeInChrome/setup.ts

- lines: 401
- imports: 18
- exports: 5
- importance: 50
- tags: permissions, bridge, mcp, tools, state-memory
- exportedSymbols: shouldEnableClaudeInChrome, shouldAutoEnableClaudeInChrome, setupClaudeInChrome, installChromeNativeHostManifest, isChromeExtensionInstalled
- functions: shouldEnableClaudeInChrome, shouldAutoEnableClaudeInChrome, setupClaudeInChrome, getNativeMessagingHostsDirs, installChromeNativeHostManifest, registerWindowsNativeHosts, createWrapperScript, isChromeExtensionInstalled_CACHED_MAY_BE_STALE, isChromeExtensionInstalled

## src/utils/claudeInChrome/setupPortable.ts

- lines: 234
- imports: 4
- exports: 7
- importance: 35
- tags: (none)
- exportedSymbols: getAllBrowserDataPathsPortable, detectExtensionInstallationPortable, isChromeExtensionInstalledPortable, isChromeExtensionInstalled, CHROME_EXTENSION_URL, ChromiumBrowser, BrowserPath
- functions: getExtensionIds, getAllBrowserDataPathsPortable, detectExtensionInstallationPortable, isChromeExtensionInstalledPortable, that, isChromeExtensionInstalled

## src/utils/claudeInChrome/toolRendering.tsx

- lines: 262
- imports: 8
- exports: 3
- importance: 32
- tags: mcp, tools
- exportedSymbols: renderChromeToolResultMessage, getClaudeInChromeMCPToolOverrides, ChromeToolName
- functions: renderChromeToolUseMessage, renderChromeViewTabLink, renderChromeToolResultMessage, getClaudeInChromeMCPToolOverrides, isMCPToolResult

## src/utils/claudemd.ts

- lines: 1480
- imports: 27
- exports: 21
- importance: 83
- tags: auth, permissions, state-memory
- exportedSymbols: stripHtmlComments, processMemoryFile, processMdRules, clearMemoryFileCaches, resetGetMemoryFilesCache, getLargeMemoryFiles, filterInjectedMemoryFiles, getManagedAndUserConditionalRules, getMemoryFilesForNestedDirectory, getConditionalRulesForCwdLevelDirectory, processConditionedMdRules, getExternalClaudeMdIncludes, hasExternalClaudeMdIncludes, shouldShowClaudeMdExternalIncludesWarning, isMemoryFilePath, getAllMemoryFilePaths, MAX_MEMORY_CHARACTER_COUNT, getMemoryFiles, getClaudeMds, MemoryFileInfo, ExternalClaudeMdInclude
- functions: pathInOriginalCwd, parseFrontmatterPaths, stripHtmlComments, stripHtmlCommentsFromTokens, parseMemoryFileContent, handleMemoryFileReadError, safelyReadMemoryFileAsync, extractIncludePathsFromTokens, extractPathsFromText, processElements, isClaudeMdExcluded, resolveExcludePatterns, processMemoryFile, processMdRules, isInstructionsMemoryType, consumeNextEagerLoadReason, clearMemoryFileCaches, resetGetMemoryFilesCache, getLargeMemoryFiles, filterInjectedMemoryFiles, getManagedAndUserConditionalRules, getMemoryFilesForNestedDirectory, getConditionalRulesForCwdLevelDirectory, processConditionedMdRules, getExternalClaudeMdIncludes, hasExternalClaudeMdIncludes, shouldShowClaudeMdExternalIncludesWarning, isMemoryFilePath, getAllMemoryFilePaths

## src/utils/cleanup.ts

- lines: 603
- imports: 18
- exports: 12
- importance: 50
- tags: mcp, tools, state-memory
- exportedSymbols: addCleanupResults, convertFileNameToDate, cleanupOldMessageFiles, cleanupOldSessionFiles, cleanupOldPlanFiles, cleanupOldFileHistoryBackups, cleanupOldSessionEnvDirs, cleanupOldDebugLogs, cleanupNpmCacheForAnthropicPackages, cleanupOldVersionsThrottled, cleanupOldMessageFilesInBackground, CleanupResult
- functions: getCutoffDate, addCleanupResults, convertFileNameToDate, cleanupOldFilesInDirectory, cleanupOldMessageFiles, unlinkIfOld, tryRmdir, cleanupOldSessionFiles, cleanupSingleDirectory, cleanupOldPlanFiles, cleanupOldFileHistoryBackups, cleanupOldSessionEnvDirs, cleanupOldDebugLogs, cleanupNpmCacheForAnthropicPackages, cleanupOldVersionsThrottled, cleanupOldMessageFilesInBackground

## src/utils/cleanupRegistry.ts

- lines: 26
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- topComment: Global registry for cleanup functions
- exportedSymbols: registerCleanup, runCleanupFunctions
- functions: to, that, registerCleanup, runCleanupFunctions

## src/utils/cliArgs.ts

- lines: 61
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- exportedSymbols: eagerParseCliFlag, extractArgsAfterDoubleDash
- functions: is, eagerParseCliFlag, corrects, extractArgsAfterDoubleDash

## src/utils/cliHighlight.ts

- lines: 55
- imports: 1
- exports: 3
- importance: 32
- tags: permissions, mcp
- topComment: highlight.js's type defs carry `/// <reference lib="dom" />`. SSETransport,
- exportedSymbols: getCliHighlightPromise, getLanguageName, CliHighlight
- functions: loadCliHighlight, getCliHighlightPromise, getLanguageName

## src/utils/codeIndexing.ts

- lines: 207
- imports: 0
- exports: 4
- importance: 25
- tags: mcp, tools
- exportedSymbols: detectCodeIndexingFromCommand, detectCodeIndexingFromMcpTool, detectCodeIndexingFromMcpServerName, CodeIndexingTool
- functions: detectCodeIndexingFromCommand, detectCodeIndexingFromMcpTool, detectCodeIndexingFromMcpServerName

## src/utils/collapseBackgroundBashNotifications.ts

- lines: 85
- imports: 5
- exports: 1
- importance: 23
- tags: (none)
- exportedSymbols: collapseBackgroundBashNotifications
- functions: isCompletedBackgroundBash, collapseBackgroundBashNotifications

## src/utils/collapseHookSummaries.ts

- lines: 60
- imports: 1
- exports: 1
- importance: 18
- tags: tools
- exportedSymbols: collapseHookSummaries
- functions: isLabeledHookSummary, collapseHookSummaries

## src/utils/collapseReadSearch.ts

- lines: 1110
- imports: 15
- exports: 9
- importance: 66
- tags: mcp, query-loop, tools
- exportedSymbols: getToolSearchOrReadInfo, getSearchOrReadFromContent, getToolUseIdsFromCollapsedGroup, hasAnyToolInProgress, getDisplayMessageFromCollapsed, collapseReadSearchGroups, getSearchReadSummaryText, summarizeRecentActivities, SearchOrReadResult
- functions: getFilePathFromToolInput, isMemorySearch, isMemoryWriteOrEdit, commandAsHint, getToolSearchOrReadInfo, getSearchOrReadFromContent, isToolSearchOrRead, getCollapsibleToolInfo, isTextBreaker, isNonCollapsibleToolUse, isPreToolHookSummary, shouldSkipMessage, isCollapsibleToolUse, isCollapsibleToolResult, getToolUseIdsFromMessage, getToolUseIdsFromCollapsedGroup, hasAnyToolInProgress, getDisplayMessageFromCollapsed, countToolUses, getFilePathsFromReadMessage, scanBashResultForGitOps, createEmptyGroup, createCollapsedGroup, collapseReadSearchGroups, flushGroup, getSearchReadSummaryText, summarizeRecentActivities

## src/utils/collapseTeammateShutdowns.ts

- lines: 56
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: collapseTeammateShutdowns
- functions: isTeammateShutdownAttachment, collapseTeammateShutdowns

## src/utils/combinedAbortSignal.ts

- lines: 48
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: createCombinedAbortSignal
- functions: that, createCombinedAbortSignal

## src/utils/commandLifecycle.ts

- lines: 22
- imports: 0
- exports: 2
- importance: 19
- tags: commands
- exportedSymbols: setCommandLifecycleListener, notifyCommandLifecycle
- functions: setCommandLifecycleListener, notifyCommandLifecycle

## src/utils/commitAttribution.ts

- lines: 962
- imports: 15
- exports: 30
- importance: 65
- tags: permissions, tools, state-memory
- exportedSymbols: getAttributionRepoRoot, getRepoClassCached, isInternalModelRepoCached, sanitizeSurfaceKey, sanitizeModelName, getClientSurface, buildSurfaceKey, computeContentHash, normalizeFilePath, expandFilePath, createEmptyAttributionState, getFileMtime, trackFileModification, trackFileCreation, trackFileDeletion, trackBulkFileChanges, calculateCommitAttribution, getGitDiffSize, isFileDeleted, getStagedFiles, isGitTransientState, stateToSnapshotMessage, restoreAttributionStateFromSnapshots, attributionRestoreStateFromLog, incrementPromptCount, isInternalModelRepo, AttributionState, AttributionSummary, FileAttribution, AttributionData
- functions: getAttributionRepoRoot, getRepoClassCached, isInternalModelRepoCached, sanitizeSurfaceKey, sanitizeModelName, getClientSurface, buildSurfaceKey, computeContentHash, normalizeFilePath, expandFilePath, createEmptyAttributionState, computeFileModificationState, getFileMtime, trackFileModification, trackFileCreation, trackFileDeletion, trackBulkFileChanges, calculateCommitAttribution, getGitDiffSize, isFileDeleted, getStagedFiles, isGitTransientState, stateToSnapshotMessage, restoreAttributionStateFromSnapshots, attributionRestoreStateFromLog, incrementPromptCount

## src/utils/completionCache.ts

- lines: 167
- imports: 12
- exports: 2
- importance: 31
- tags: (none)
- exportedSymbols: setupShellCompletion, regenerateCompletionCache
- functions: detectShell, formatPathLink, setupShellCompletion, regenerateCompletionCache

## src/utils/computerUse/appNames.ts

- lines: 197
- imports: 0
- exports: 1
- importance: 41
- tags: auth, permissions, tools
- exportedSymbols: filterAppsForDescription
- functions: isUserFacingPath, isNoisyName, sanitizeCore, sanitizeAppNames, sanitizeTrustedNames, filterAppsForDescription

## src/utils/computerUse/cleanup.ts

- lines: 87
- imports: 6
- exports: 1
- importance: 24
- tags: mcp, tools, state-memory
- exportedSymbols: cleanupComputerUseAfterTurn
- functions: cleanupComputerUseAfterTurn

## src/utils/computerUse/common.ts

- lines: 62
- imports: 2
- exports: 5
- importance: 27
- tags: mcp, tools
- exportedSymbols: getTerminalBundleId, isComputerUseMCPServer, COMPUTER_USE_MCP_SERVER_NAME, CLI_HOST_BUNDLE_ID, CLI_CU_CAPABILITIES
- functions: getTerminalBundleId, isComputerUseMCPServer

## src/utils/computerUse/computerUseLock.ts

- lines: 216
- imports: 8
- exports: 6
- importance: 47
- tags: permissions, tools, state-memory
- exportedSymbols: checkComputerUseLock, isLockHeldLocally, tryAcquireComputerUseLock, releaseComputerUseLock, AcquireResult, CheckResult
- functions: for, isComputerUseLock, getLockPath, readLock, isProcessRunning, tryCreateExclusive, registerLockCleanup, checkComputerUseLock, isLockHeldLocally, tryAcquireComputerUseLock, releaseComputerUseLock

## src/utils/computerUse/drainRunLoop.ts

- lines: 80
- imports: 3
- exports: 3
- importance: 25
- tags: (none)
- exportedSymbols: drainRunLoop, retainPump, releasePump
- functions: drainTick, retain, release, timeoutReject, drainRunLoop

## src/utils/computerUse/escHotkey.ts

- lines: 55
- imports: 3
- exports: 3
- importance: 34
- tags: permissions
- exportedSymbols: registerEscHotkey, unregisterEscHotkey, notifyExpectedEscape
- functions: registerEscHotkey, unregisterEscHotkey, notifyExpectedEscape

## src/utils/computerUse/executor.ts

- lines: 659
- imports: 11
- exports: 2
- importance: 37
- tags: mcp, tools
- exportedSymbols: createCliExecutor, unhideComputerUseApps
- functions: computeTargetDims, readClipboardViaPbpaste, writeClipboardViaPbcopy, isBareEscape, moveAndSettle, releasePressed, withModifiers, typeViaClipboard, animatedMove, createCliExecutor, unhideComputerUseApps

## src/utils/computerUse/gates.ts

- lines: 73
- imports: 4
- exports: 3
- importance: 25
- tags: mcp, tools, state-memory
- exportedSymbols: getChicagoEnabled, getChicagoSubGates, getChicagoCoordinateMode
- functions: readConfig, hasRequiredSubscription, getChicagoEnabled, getChicagoSubGates, getChicagoCoordinateMode

## src/utils/computerUse/hostAdapter.ts

- lines: 70
- imports: 7
- exports: 1
- importance: 34
- tags: permissions, mcp, tools
- exportedSymbols: getComputerUseHostAdapter
- classes: DebugLogger
- functions: getComputerUseHostAdapter

## src/utils/computerUse/inputLoader.ts

- lines: 31
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: requireComputerUseInput
- functions: requireComputerUseInput

## src/utils/computerUse/mcpServer.ts

- lines: 107
- imports: 12
- exports: 2
- importance: 30
- tags: mcp, tools
- exportedSymbols: createComputerUseMcpServerForCli, runComputerUseMcpServer
- functions: tryGetInstalledAppNames, createComputerUseMcpServerForCli, runComputerUseMcpServer

## src/utils/computerUse/setup.ts

- lines: 54
- imports: 8
- exports: 1
- importance: 35
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: setupComputerUseMCP
- functions: setupComputerUseMCP

## src/utils/computerUse/swiftLoader.ts

- lines: 24
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: requireComputerUseSwift
- functions: requireComputerUseSwift

## src/utils/computerUse/toolRendering.tsx

- lines: 125
- imports: 5
- exports: 1
- importance: 23
- tags: mcp, tools
- exportedSymbols: getComputerUseMCPRenderingOverrides
- functions: fmtCoord, getComputerUseMCPRenderingOverrides

## src/utils/computerUse/wrapper.tsx

- lines: 336
- imports: 11
- exports: 2
- importance: 43
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: buildSessionContext, getComputerUseMCPToolOverrides
- functions: tuc, formatLockHeld, buildSessionContext, getOrBind, getComputerUseMCPToolOverrides, runPermissionDialog

## src/utils/concurrentSessions.ts

- lines: 205
- imports: 12
- exports: 8
- importance: 43
- tags: bridge, state-memory
- exportedSymbols: isBgSession, registerSession, updateSessionName, updateSessionBridgeId, updateSessionActivity, countConcurrentSessions, SessionKind, SessionStatus
- functions: getSessionsDir, envSessionKind, isBgSession, registerSession, updatePidFile, updateSessionName, updateSessionBridgeId, updateSessionActivity, countConcurrentSessions

## src/utils/config.ts

- lines: 1818
- imports: 34
- exports: 45
- importance: 87
- tags: auth, permissions, bridge, mcp, tools, state-memory
- exportedSymbols: isGlobalConfigKey, resetTrustDialogAcceptedCacheForTesting, checkHasTrustDialogAccepted, isPathTrusted, isProjectConfigKey, saveGlobalConfig, getGlobalConfigWriteCount, getGlobalConfig, getRemoteControlAtStartup, getCustomApiKeyStatus, enableConfigs, getCurrentProjectConfig, saveCurrentProjectConfig, isAutoUpdaterDisabled, shouldSkipPluginAutoupdate, formatAutoUpdaterDisabledReason, getAutoUpdaterDisabledReason, getOrCreateUserID, recordFirstStartTime, getMemoryPath, getManagedClaudeRulesDir, getUserClaudeRulesDir, _setGlobalConfigCacheForTesting, DEFAULT_GLOBAL_CONFIG, GLOBAL_CONFIG_KEYS, PROJECT_CONFIG_KEYS, CONFIG_WRITE_DISPLAY_THRESHOLD, getProjectPathForConfig, _getConfigForTesting, _wouldLoseAuthStateForTesting, PastedContent, ReleaseChannel, ProjectConfig, InstallMethod, NotificationChannel, AccountInfo, EditorMode, DiffTool, OutputStyle, GlobalConfig
- functions: createDefaultGlobalConfig, isGlobalConfigKey, traverses, resetTrustDialogAcceptedCacheForTesting, checkHasTrustDialogAccepted, computeTrustDialogAccepted, isPathTrusted, isProjectConfigKey, wouldLoseAuthState, saveGlobalConfig, getGlobalConfigWriteCount, reportConfigCacheStats, migrateConfigFields, removeProjectHistory, startGlobalConfigFreshnessWatcher, writeThroughGlobalConfigCache, getGlobalConfig, getRemoteControlAtStartup, getCustomApiKeyStatus, saveConfig, saveConfigWithLock, to, enableConfigs, getConfigBackupDir, findMostRecentBackup, getConfig, to, getCurrentProjectConfig, saveCurrentProjectConfig, isAutoUpdaterDisabled, shouldSkipPluginAutoupdate, formatAutoUpdaterDisabledReason, getAutoUpdaterDisabledReason, getOrCreateUserID, recordFirstStartTime, getMemoryPath, getManagedClaudeRulesDir, getUserClaudeRulesDir, _setGlobalConfigCacheForTesting

## src/utils/configConstants.ts

- lines: 22
- imports: 0
- exports: 3
- importance: 21
- tags: (none)
- topComment: These constants are in a separate file to avoid circular dependency issues.
- exportedSymbols: NOTIFICATION_CHANNELS, EDITOR_MODES, TEAMMATE_MODES

## src/utils/contentArray.ts

- lines: 52
- imports: 0
- exports: 1
- importance: 17
- tags: tools
- exportedSymbols: insertBlockAfterToolResults
- functions: insertBlockAfterToolResults

## src/utils/context.ts

- lines: 222
- imports: 5
- exports: 12
- importance: 52
- tags: auth, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: is1mContextDisabled, has1mContext, modelSupports1M, getContextWindowForModel, getSonnet1mExpTreatmentEnabled, calculateContextPercentages, getModelMaxOutputTokens, getMaxThinkingTokensForModel, MODEL_CONTEXT_WINDOW_DEFAULT, COMPACT_MAX_OUTPUT_TOKENS, CAPPED_DEFAULT_MAX_TOKENS, ESCALATED_MAX_TOKENS
- functions: is1mContextDisabled, has1mContext, modelSupports1M, getContextWindowForModel, getSonnet1mExpTreatmentEnabled, calculateContextPercentages, getModelMaxOutputTokens, getMaxThinkingTokensForModel

## src/utils/contextAnalysis.ts

- lines: 273
- imports: 6
- exports: 2
- importance: 50
- tags: auth, mcp, query-loop, tools
- exportedSymbols: analyzeContext, tokenStatsToStatsigMetrics
- functions: analyzeContext, processBlock, increment, tokenStatsToStatsigMetrics

## src/utils/contextSuggestions.ts

- lines: 236
- imports: 7
- exports: 3
- importance: 42
- tags: auth, tools
- exportedSymbols: generateContextSuggestions, SuggestionSeverity, ContextSuggestion
- functions: generateContextSuggestions, checkNearCapacity, checkLargeToolResults, getLargeToolSuggestion, checkReadResultBloat, checkMemoryBloat, checkAutoCompactDisabled

## src/utils/controlMessageCompat.ts

- lines: 33
- imports: 0
- exports: 1
- importance: 17
- tags: bridge
- exportedSymbols: normalizeControlMessageKeys
- functions: normalizeControlMessageKeys

## src/utils/conversationRecovery.ts

- lines: 598
- imports: 17
- exports: 8
- importance: 80
- tags: auth, permissions, query-loop, tools, state-memory
- exportedSymbols: deserializeMessages, deserializeMessagesWithInterruptDetection, restoreSkillStateFromMessages, loadMessagesFromJsonlPath, loadConversationForResume, TeleportRemoteResponse, TurnInterruptionState, DeserializeResult
- functions: migrateLegacyAttachmentTypes, deserializeMessages, deserializeMessagesWithInterruptDetection, detectTurnInterruption, isTerminalToolResult, restoreSkillStateFromMessages, loadMessagesFromJsonlPath, for, loadConversationForResume

## src/utils/cron.ts

- lines: 309
- imports: 0
- exports: 4
- importance: 26
- tags: (none)
- topComment: Minimal cron expression parsing and next-run calculation.
- exportedSymbols: parseCronExpression, computeNextCronRun, cronToHuman, CronFields
- functions: expandField, parseCronExpression, computeNextCronRun, formatLocalTime, formatUtcTimeAsLocal, cronToHuman

## src/utils/cronJitterConfig.ts

- lines: 76
- imports: 4
- exports: 1
- importance: 21
- tags: (none)
- topComment: GrowthBook-backed cron jitter configuration.
- exportedSymbols: getCronJitterConfig
- functions: when, getCronJitterConfig

## src/utils/cronScheduler.ts

- lines: 566
- imports: 7
- exports: 4
- importance: 47
- tags: permissions, tools, state-memory
- topComment: Non-React scheduler core for .claude/scheduled_tasks.json.
- exportedSymbols: isRecurringTaskAged, createCronScheduler, buildMissedTaskNotification, CronScheduler
- functions: isRecurringTaskAged, createCronScheduler, load, check, process, enable, buildMissedTaskNotification

## src/utils/cronTasks.ts

- lines: 459
- imports: 12
- exports: 15
- importance: 48
- tags: tools, state-memory
- topComment: Scheduled prompts, stored in <project>/.claude/scheduled_tasks.json.
- exportedSymbols: getCronFilePath, readCronTasks, hasCronTasksSync, writeCronTasks, addCronTask, removeCronTasks, markCronTasksFired, listAllCronTasks, nextCronRunMs, jitteredNextCronRunMs, oneShotJitteredNextCronRunMs, findMissedTasks, DEFAULT_CRON_JITTER_CONFIG, CronTask, CronJitterConfig
- functions: getCronFilePath, readCronTasks, hasCronTasksSync, writeCronTasks, addCronTask, from, removeCronTasks, markCronTasksFired, listAllCronTasks, nextCronRunMs, jitterFrac, jitteredNextCronRunMs, oneShotJitteredNextCronRunMs, findMissedTasks

## src/utils/cronTasksLock.ts

- lines: 196
- imports: 11
- exports: 3
- importance: 33
- tags: state-memory
- topComment: Scheduler lease lock for .claude/scheduled_tasks.json.
- exportedSymbols: tryAcquireSchedulerLock, releaseSchedulerLock, SchedulerLockOptions
- functions: getLockPath, readLock, tryCreateExclusive, registerLockCleanup, tryAcquireSchedulerLock, releaseSchedulerLock

## src/utils/crossProjectResume.ts

- lines: 76
- imports: 5
- exports: 2
- importance: 24
- tags: state-memory
- exportedSymbols: checkCrossProjectResume, CrossProjectResumeResult
- functions: checkCrossProjectResume

## src/utils/crypto.ts

- lines: 14
- imports: 1
- exports: 0
- importance: 16
- tags: (none)
- topComment: Indirection point for the package.json "browser" field. When bun builds

## src/utils/Cursor.ts

- lines: 1531
- imports: 3
- exports: 18
- importance: 67
- tags: auth
- exportedSymbols: pushToKillRing, getLastKill, getKillRingItem, getKillRingSize, clearKillRing, resetKillAccumulation, recordYank, canYankPop, yankPop, updateYankLength, resetYankState, Cursor, MeasuredText, VIM_WORD_CHAR_REGEX, WHITESPACE_REGEX, isVimWordChar, isVimWhitespace, isVimPunctuation
- classes: Cursor, WrappedLine, MeasuredText
- functions: pushToKillRing, getLastKill, getKillRingItem, getKillRingSize, clearKillRing, resetKillAccumulation, recordYank, canYankPop, yankPop, updateYankLength, resetYankState

## src/utils/cwd.ts

- lines: 33
- imports: 2
- exports: 3
- importance: 23
- tags: (none)
- exportedSymbols: runWithCwdOverride, pwd, getCwd
- functions: with, runWithCwdOverride, pwd, getCwd

## src/utils/debug.ts

- lines: 269
- imports: 11
- exports: 13
- importance: 46
- tags: state-memory
- exportedSymbols: enableDebugLogging, setHasFormattedOutput, getHasFormattedOutput, flushDebugLogs, logForDebugging, getDebugLogPath, logAntError, getMinDebugLogLevel, isDebugMode, getDebugFilter, isDebugToStdErr, getDebugFilePath, DebugLogLevel
- functions: enableDebugLogging, shouldLogDebugMessage, setHasFormattedOutput, getHasFormattedOutput, appendAsync, noop, getDebugWriter, flushDebugLogs, logForDebugging, getDebugLogPath, logAntError

## src/utils/debugFilter.ts

- lines: 158
- imports: 1
- exports: 5
- importance: 27
- tags: mcp
- exportedSymbols: extractDebugCategories, shouldShowDebugCategories, shouldShowDebugMessage, parseDebugFilter, DebugFilter
- functions: extractDebugCategories, shouldShowDebugCategories, to, shouldShowDebugMessage

## src/utils/deepLink/banner.ts

- lines: 124
- imports: 6
- exports: 3
- importance: 28
- tags: state-memory
- exportedSymbols: buildDeepLinkBanner, readLastFetchTime, DeepLinkBannerInfo
- functions: buildDeepLinkBanner, readLastFetchTime, mtimeOrUndefined, tildify

## src/utils/deepLink/parseDeepLink.ts

- lines: 171
- imports: 1
- exports: 4
- importance: 26
- tags: (none)
- exportedSymbols: parseDeepLink, buildDeepLink, DEEP_LINK_PROTOCOL, DeepLinkAction
- functions: containsControlChars, parseDeepLink, buildDeepLink

## src/utils/deepLink/protocolHandler.ts

- lines: 137
- imports: 8
- exports: 2
- importance: 28
- tags: (none)
- exportedSymbols: handleDeepLinkUri, handleUrlSchemeLaunch
- functions: parses, handleDeepLinkUri, handleUrlSchemeLaunch, resolveCwd

## src/utils/deepLink/registerProtocol.ts

- lines: 349
- imports: 13
- exports: 4
- importance: 37
- tags: tools, state-memory
- exportedSymbols: registerProtocolHandler, isProtocolHandlerCurrent, ensureDeepLinkProtocolRegistered, MACOS_BUNDLE_ID
- functions: linuxDesktopPath, linuxExecLine, windowsCommandValue, registerMacos, registerLinux, registerWindows, registerProtocolHandler, resolveClaudePath, isProtocolHandlerCurrent, ensureDeepLinkProtocolRegistered

## src/utils/deepLink/terminalLauncher.ts

- lines: 558
- imports: 6
- exports: 3
- importance: 33
- tags: state-memory
- exportedSymbols: detectTerminal, launchInTerminal, TerminalInfo
- functions: detectMacosTerminal, detectLinuxTerminal, detectWindowsTerminal, detectTerminal, launchInTerminal, launchMacosTerminal, launchLinuxTerminal, launchWindowsTerminal, spawnDetached, buildShellCommand, shellQuote, appleScriptQuote, psQuote, cmdQuote

## src/utils/deepLink/terminalPreference.ts

- lines: 55
- imports: 2
- exports: 1
- importance: 19
- tags: (none)
- exportedSymbols: updateDeepLinkTerminalPreference
- functions: updateDeepLinkTerminalPreference

## src/utils/desktopDeepLink.ts

- lines: 237
- imports: 9
- exports: 3
- importance: 32
- tags: state-memory
- exportedSymbols: getDesktopInstallStatus, openCurrentSessionInDesktop, DesktopInstallStatus
- functions: isDevMode, buildDesktopDeepLink, isDesktopInstalled, getDesktopVersion, getDesktopInstallStatus, openDeepLink, openCurrentSessionInDesktop

## src/utils/detectRepository.ts

- lines: 179
- imports: 3
- exports: 7
- importance: 34
- tags: bridge
- exportedSymbols: clearRepositoryCaches, detectCurrentRepository, detectCurrentRepositoryWithHost, getCachedRepository, parseGitRemote, parseGitHubRepository, ParsedRepository
- functions: clearRepositoryCaches, detectCurrentRepository, detectCurrentRepositoryWithHost, getCachedRepository, parseGitRemote, parseGitHubRepository, is, looksLikeRealHostname

## src/utils/diagLogs.ts

- lines: 95
- imports: 3
- exports: 2
- importance: 23
- tags: mcp, state-memory
- exportedSymbols: logForDiagnosticsNoPII, withDiagnosticsTiming
- functions: MUST, logForDiagnosticsNoPII, getDiagnosticLogFile, with, to, to, withDiagnosticsTiming

## src/utils/diff.ts

- lines: 178
- imports: 7
- exports: 6
- importance: 48
- tags: auth, tools
- exportedSymbols: adjustHunkLineNumbers, countLinesChanged, getPatchFromContents, getPatchForDisplay, CONTEXT_LINES, DIFF_TIMEOUT_MS
- functions: adjustHunkLineNumbers, escapeForDiff, unescapeFromDiff, countLinesChanged, getPatchFromContents, will, getPatchForDisplay

## src/utils/directMemberMessage.ts

- lines: 70
- imports: 1
- exports: 3
- importance: 22
- tags: (none)
- exportedSymbols: parseDirectMemberMessage, sendDirectMemberMessage, DirectMessageResult
- functions: parseDirectMemberMessage, sendDirectMemberMessage

## src/utils/displayTags.ts

- lines: 52
- imports: 0
- exports: 3
- importance: 21
- tags: bridge, state-memory
- exportedSymbols: stripDisplayTags, stripDisplayTagsAllowEmpty, stripIdeContextTags
- functions: stripDisplayTags, stripDisplayTagsAllowEmpty, stripIdeContextTags

## src/utils/doctorContextWarnings.ts

- lines: 266
- imports: 11
- exports: 3
- importance: 56
- tags: auth, permissions, mcp, tools
- exportedSymbols: checkContextWarnings, ContextWarning, ContextWarnings
- functions: checkClaudeMdFiles, checkAgentDescriptions, checkMcpTools, from, checkUnreachableRules, checkContextWarnings

## src/utils/doctorDiagnostic.ts

- lines: 626
- imports: 21
- exports: 6
- importance: 54
- tags: permissions
- exportedSymbols: getCurrentInstallationType, getInvokedBinary, detectLinuxGlobPatternWarnings, getDoctorDiagnostic, InstallationType, DiagnosticInfo
- functions: getNormalizedPaths, getCurrentInstallationType, getInstallationPath, doesn, doesn, getInvokedBinary, detectMultipleInstallations, detectConfigurationIssues, detectLinuxGlobPatternWarnings, getDoctorDiagnostic

## src/utils/dxt/helpers.ts

- lines: 89
- imports: 3
- exports: 4
- importance: 27
- tags: mcp, state-memory
- exportedSymbols: validateManifest, parseAndValidateManifestFromText, parseAndValidateManifestFromBytes, generateExtensionId
- functions: validateManifest, parseAndValidateManifestFromText, parseAndValidateManifestFromBytes, generateExtensionId

## src/utils/dxt/zip.ts

- lines: 227
- imports: 5
- exports: 5
- importance: 42
- tags: permissions, mcp
- exportedSymbols: isPathSafe, validateZipFile, unzipFile, parseZipModes, readAndUnzipFile
- functions: isPathSafe, validateZipFile, unzipFile, parseZipModes, readAndUnzipFile

## src/utils/earlyInput.ts

- lines: 192
- imports: 1
- exports: 6
- importance: 30
- tags: (none)
- exportedSymbols: startCapturingEarlyInput, stopCapturingEarlyInput, consumeEarlyInput, hasEarlyInput, seedEarlyInput, isCapturingEarlyInput
- functions: startCapturingEarlyInput, processChunk, keys, stopCapturingEarlyInput, consumeEarlyInput, hasEarlyInput, seedEarlyInput, isCapturingEarlyInput

## src/utils/editor.ts

- lines: 184
- imports: 6
- exports: 3
- importance: 41
- tags: auth
- exportedSymbols: classifyGuiEditor, openFileInExternalEditor, getExternalEditor
- functions: isCommandAvailable, classifyGuiEditor, guiGotoArgv, openFileInExternalEditor

## src/utils/effort.ts

- lines: 330
- imports: 8
- exports: 20
- importance: 45
- tags: state-memory, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: modelSupportsEffort, modelSupportsMaxEffort, isEffortLevel, parseEffortValue, toPersistableEffort, getInitialEffortSetting, resolvePickerEffortPersistence, getEffortEnvOverride, resolveAppliedEffort, getDisplayedEffortLevel, getEffortSuffix, isValidNumericEffort, convertEffortValueToLevel, getEffortLevelDescription, getEffortValueDescription, getOpusDefaultEffortConfig, getDefaultEffortForModel, EFFORT_LEVELS, EffortValue, OpusDefaultEffortConfig
- functions: modelSupportsEffort, modelSupportsMaxEffort, isEffortLevel, parseEffortValue, toPersistableEffort, getInitialEffortSetting, resolvePickerEffortPersistence, getEffortEnvOverride, resolveAppliedEffort, getDisplayedEffortLevel, getEffortSuffix, isValidNumericEffort, convertEffortValueToLevel, getEffortLevelDescription, getEffortValueDescription, getOpusDefaultEffortConfig, getDefaultEffortForModel

## src/utils/embeddedTools.ts

- lines: 30
- imports: 1
- exports: 2
- importance: 20
- tags: tools
- exportedSymbols: hasEmbeddedSearchTools, embeddedSearchToolsBinaryPath
- functions: hasEmbeddedSearchTools, embeddedSearchToolsBinaryPath

## src/utils/env.ts

- lines: 348
- imports: 9
- exports: 5
- importance: 50
- tags: auth, state-memory
- exportedSymbols: getHostPlatformForAnalytics, getGlobalClaudeFile, JETBRAINS_IDES, detectDeploymentEnvironment, env
- functions: isCommandAvailable, isConductor, detectTerminal, isSSHSession, getHostPlatformForAnalytics

## src/utils/envDynamic.ts

- lines: 152
- imports: 7
- exports: 4
- importance: 31
- tags: (none)
- exportedSymbols: getTerminalWithJetBrainsDetectionAsync, getTerminalWithJetBrainsDetection, initJetBrainsDetection, envDynamic
- functions: getIsBubblewrapSandbox, isMuslEnvironment, detectJetBrainsIDEFromParentProcessAsync, getTerminalWithJetBrainsDetectionAsync, getTerminalWithJetBrainsDetection, initJetBrainsDetection

## src/utils/envUtils.ts

- lines: 184
- imports: 3
- exports: 13
- importance: 38
- tags: mcp
- exportedSymbols: getTeamsDir, hasNodeOption, isEnvTruthy, isEnvDefinedFalsy, isBareMode, parseEnvVars, getAWSRegion, getDefaultVertexRegion, shouldMaintainProjectWorkingDir, isRunningOnHomespace, isInProtectedNamespace, getVertexRegionForModel, getClaudeConfigHomeDir
- functions: getTeamsDir, hasNodeOption, isEnvTruthy, isEnvDefinedFalsy, isBareMode, parseEnvVars, getAWSRegion, getDefaultVertexRegion, shouldMaintainProjectWorkingDir, isRunningOnHomespace, isInProtectedNamespace, getVertexRegionForModel

## src/utils/envValidation.ts

- lines: 39
- imports: 1
- exports: 2
- importance: 20
- tags: (none)
- exportedSymbols: validateBoundedIntEnvVar, EnvVarValidationResult
- functions: validateBoundedIntEnvVar

## src/utils/errorLogSink.ts

- lines: 236
- imports: 10
- exports: 5
- importance: 37
- tags: mcp, state-memory
- exportedSymbols: getErrorsPath, getMCPLogsPath, _flushLogWritersForTesting, _clearLogWritersForTesting, initializeErrorLogSink
- functions: getErrorsPath, getMCPLogsPath, createJsonlWriter, _flushLogWritersForTesting, _clearLogWritersForTesting, getLogWriter, appendToLog, extractServerMessage, logErrorImpl, logMCPErrorImpl, logMCPDebugImpl, initializeErrorLogSink

## src/utils/errors.ts

- lines: 239
- imports: 1
- exports: 18
- importance: 58
- tags: auth, permissions, mcp, tools
- exportedSymbols: isAbortError, hasExactErrorMessage, toError, errorMessage, getErrnoCode, isENOENT, getErrnoPath, shortErrorStack, isFsInaccessible, classifyAxiosError, ClaudeError, MalformedCommandError, AbortError, ConfigParseError, ShellError, TeleportOperationError, TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, AxiosErrorKind
- classes: ClaudeError, MalformedCommandError, AbortError, names, for, ConfigParseError, ShellError, TeleportOperationError, TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
- functions: isAbortError, hasExactErrorMessage, toError, errorMessage, getErrnoCode, isENOENT, getErrnoPath, shortErrorStack, isFsInaccessible, classifyAxiosError

## src/utils/exampleCommands.ts

- lines: 185
- imports: 9
- exports: 4
- importance: 34
- tags: (none)
- exportedSymbols: countAndSortItems, pickDiverseCoreFiles, getExampleCommandFromCache, refreshExampleCommands
- functions: isCoreFile, countAndSortItems, pickDiverseCoreFiles, getFrequentlyModifiedFiles

## src/utils/execFileNoThrow.ts

- lines: 151
- imports: 3
- exports: 2
- importance: 23
- tags: (none)
- topComment: This file represents useful wrappers over node:child_process
- exportedSymbols: execFileNoThrow, execFileNoThrowWithCwd
- functions: execFileNoThrow, getErrorMessage, execFileNoThrowWithCwd

## src/utils/execFileNoThrowPortable.ts

- lines: 90
- imports: 3
- exports: 4
- importance: 27
- tags: (none)
- exportedSymbols: execSyncWithDefaults_DEPRECATED, execSyncWithDefaults_DEPRECATED, execSyncWithDefaults_DEPRECATED, execSyncWithDefaults_DEPRECATED
- functions: execSyncWithDefaults_DEPRECATED, execSyncWithDefaults_DEPRECATED, execSyncWithDefaults_DEPRECATED, execSyncWithDefaults_DEPRECATED

## src/utils/execSyncWrapper.ts

- lines: 39
- imports: 2
- exports: 5
- importance: 27
- tags: (none)
- exportedSymbols: execSync_DEPRECATED, execSync_DEPRECATED, execSync_DEPRECATED, execSync_DEPRECATED, execSync_DEPRECATED
- functions: execSync_DEPRECATED, execSync_DEPRECATED, execSync_DEPRECATED, execSync_DEPRECATED, execSync_DEPRECATED

## src/utils/exportRenderer.tsx

- lines: 98
- imports: 10
- exports: 2
- importance: 40
- tags: query-loop, tools, state-memory
- exportedSymbols: streamRenderedMessages, renderMessagesToPlainText
- functions: StaticKeybindingProvider, normalizedUpperBound, streamRenderedMessages, renderMessagesToPlainText

## src/utils/extraUsage.ts

- lines: 24
- imports: 2
- exports: 1
- importance: 19
- tags: (none)
- exportedSymbols: isBilledAsExtraUsage
- functions: isBilledAsExtraUsage

## src/utils/fastMode.ts

- lines: 533
- imports: 15
- exports: 23
- importance: 61
- tags: auth, state-memory, cost-budget
- exportedSymbols: isFastModeEnabled, isFastModeAvailable, getFastModeUnavailableReason, getFastModeModel, getInitialFastModeSetting, isFastModeSupportedByModel, getFastModeRuntimeState, triggerFastModeCooldown, clearFastModeCooldown, handleFastModeRejectedByAPI, handleFastModeOverageRejection, isFastModeCooldown, getFastModeState, resolveFastModeStatusFromCache, prefetchFastModeStatus, FAST_MODE_MODEL_DISPLAY, onCooldownTriggered, onCooldownExpired, onFastModeOverageRejection, onOrgFastModeChanged, FastModeRuntimeState, CooldownReason, FastModeDisabledReason
- functions: isFastModeEnabled, isFastModeAvailable, getDisabledReasonMessage, getFastModeUnavailableReason, getFastModeModel, getInitialFastModeSetting, isFastModeSupportedByModel, getFastModeRuntimeState, triggerFastModeCooldown, clearFastModeCooldown, handleFastModeRejectedByAPI, getOverageDisabledMessage, isOutOfCreditsReason, handleFastModeOverageRejection, isFastModeCooldown, getFastModeState, fetchFastModeStatus, resolveFastModeStatusFromCache, prefetchFastModeStatus, doFetch

## src/utils/file.ts

- lines: 585
- imports: 15
- exports: 25
- importance: 60
- tags: permissions, tools
- exportedSymbols: pathExists, readFileSafe, getFileModificationTime, getFileModificationTimeAsync, writeTextContent, detectFileEncoding, detectLineEndings, convertLeadingTabsToSpaces, getAbsoluteAndRelativePaths, getDisplayPath, findSimilarFile, suggestPathUnderCwd, isCompactLinePrefixEnabled, addLineNumbers, stripLineNumberPrefix, isDirEmpty, readFileSyncCached, writeFileSyncAndFlush_DEPRECATED, getDesktopPath, isFileWithinReadSizeLimit, normalizePathForComparison, pathsEqual, MAX_OUTPUT_SIZE, FILE_NOT_FOUND_CWD_NOTE, File
- functions: pathExists, readFileSafe, getFileModificationTime, getFileModificationTimeAsync, writeTextContent, detectFileEncoding, detectLineEndings, convertLeadingTabsToSpaces, getAbsoluteAndRelativePaths, getDisplayPath, findSimilarFile, suggestPathUnderCwd, isCompactLinePrefixEnabled, addLineNumbers, stripLineNumberPrefix, isDirEmpty, readFileSyncCached, writeFileSyncAndFlush_DEPRECATED, getDesktopPath, isFileWithinReadSizeLimit, normalizePathForComparison, pathsEqual

## src/utils/fileHistory.ts

- lines: 1116
- imports: 17
- exports: 14
- importance: 66
- tags: permissions, mcp, state-memory
- exportedSymbols: fileHistoryEnabled, fileHistoryTrackEdit, fileHistoryMakeSnapshot, fileHistoryRewind, fileHistoryCanRestore, fileHistoryGetDiffStats, fileHistoryHasAnyChanges, checkOriginFileChanged, fileHistoryRestoreStateFromLog, copyFileHistoryForResume, FileHistoryBackup, FileHistorySnapshot, FileHistoryState, DiffStats
- functions: fileHistoryEnabled, fileHistoryEnabledSdk, fileHistoryTrackEdit, fileHistoryMakeSnapshot, fileHistoryRewind, fileHistoryCanRestore, fileHistoryGetDiffStats, fileHistoryHasAnyChanges, applySnapshot, checkOriginFileChanged, compareStatsAndContent, computeDiffStatsForFile, getBackupFileName, resolveBackupPath, createBackup, restoreBackup, getBackupFileNameFirstVersion, maybeShortenFilePath, maybeExpandFilePath, fileHistoryRestoreStateFromLog, copyFileHistoryForResume, notifyVscodeSnapshotFilesUpdated, readFileAsyncOrNull, maybeDumpStateForDebug

## src/utils/fileOperationAnalytics.ts

- lines: 72
- imports: 3
- exports: 1
- importance: 20
- tags: tools
- exportedSymbols: logFileOperation
- functions: hashFilePath, hashFileContent, logFileOperation

## src/utils/filePersistence/filePersistence.ts

- lines: 288
- imports: 10
- exports: 3
- importance: 46
- tags: auth, state-memory
- exportedSymbols: runFilePersistence, executeFilePersistence, isFilePersistenceEnabled
- functions: runFilePersistence, executeBYOCPersistence, executeCloudPersistence, executeFilePersistence, isFilePersistenceEnabled

## src/utils/filePersistence/outputsScanner.ts

- lines: 127
- imports: 5
- exports: 3
- importance: 27
- tags: state-memory
- exportedSymbols: logDebug, getEnvironmentKind, findModifiedFiles
- functions: logDebug, getEnvironmentKind, hasParentPath, hasPath, getEntryParentPath, findModifiedFiles

## src/utils/fileRead.ts

- lines: 103
- imports: 2
- exports: 5
- importance: 28
- tags: tools
- exportedSymbols: detectEncodingForResolvedPath, detectLineEndingsForString, readFileSyncWithMetadata, readFileSync, LineEndingType
- functions: detectEncodingForResolvedPath, detectLineEndingsForString, readFileSyncWithMetadata, readFileSync

## src/utils/fileReadCache.ts

- lines: 97
- imports: 2
- exports: 1
- importance: 20
- tags: tools
- exportedSymbols: fileReadCache
- classes: FileReadCache

## src/utils/fileStateCache.ts

- lines: 143
- imports: 2
- exports: 8
- importance: 34
- tags: tools
- exportedSymbols: createFileStateCacheWithSizeLimit, cacheToObject, cacheKeys, cloneFileStateCache, mergeFileStateCaches, FileStateCache, READ_FILE_STATE_CACHE_SIZE, FileState
- classes: FileStateCache
- functions: to, createFileStateCacheWithSizeLimit, to, cacheToObject, to, cacheKeys, to, cloneFileStateCache, mergeFileStateCaches

## src/utils/findExecutable.ts

- lines: 18
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: findExecutable
- functions: findExecutable

## src/utils/fingerprint.ts

- lines: 77
- imports: 2
- exports: 4
- importance: 25
- tags: (none)
- exportedSymbols: extractFirstMessageText, computeFingerprint, computeFingerprintFromMessages, FINGERPRINT_SALT
- functions: extractFirstMessageText, computeFingerprint, computeFingerprintFromMessages

## src/utils/forkedAgent.ts

- lines: 690
- imports: 24
- exports: 13
- importance: 83
- tags: auth, permissions, query-loop, tools, commands, state-memory, cost-budget
- exportedSymbols: saveCacheSafeParams, getLastCacheSafeParams, createCacheSafeParams, createGetAppStateWithAllowedTools, prepareForkedCommandContext, extractResultText, createSubagentContext, runForkedAgent, CacheSafeParams, ForkedAgentParams, ForkedAgentResult, PreparedForkedContext, SubagentContextOverrides
- functions: saveCacheSafeParams, getLastCacheSafeParams, for, createCacheSafeParams, createGetAppStateWithAllowedTools, prepareForkedCommandContext, extractResultText, createSubagentContext, runForkedAgent, logForkAgentQueryEvent

## src/utils/format.ts

- lines: 309
- imports: 1
- exports: 10
- importance: 49
- tags: auth
- topComment: Pure display formatters — leaf-safe (no Ink). Width-aware truncation lives in ./truncate.ts.
- exportedSymbols: formatFileSize, formatSecondsShort, formatDuration, formatNumber, formatTokens, formatRelativeTime, formatRelativeTimeAgo, formatLogMetadata, formatResetTime, formatResetText
- functions: formatFileSize, formatSecondsShort, formatDuration, formatNumber, formatTokens, formatRelativeTime, formatRelativeTimeAgo, formatLogMetadata, formatResetTime, formatResetText

## src/utils/formatBriefTimestamp.ts

- lines: 82
- imports: 0
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: formatBriefTimestamp
- functions: formatBriefTimestamp, getLocale, startOfDay

## src/utils/fpsTracker.ts

- lines: 48
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- exportedSymbols: FpsTracker, FpsMetrics
- classes: FpsTracker

## src/utils/frontmatterParser.ts

- lines: 371
- imports: 3
- exports: 10
- importance: 52
- tags: auth, tools, commands, cost-budget
- exportedSymbols: parseFrontmatter, splitPathInFrontmatter, parsePositiveIntFromFrontmatter, coerceDescriptionToString, parseBooleanFrontmatter, parseShellFrontmatter, FRONTMATTER_REGEX, FrontmatterData, ParsedMarkdown, FrontmatterShell
- functions: quoteProblematicValues, parseFrontmatter, splitPathInFrontmatter, expandBraces, parsePositiveIntFromFrontmatter, coerceDescriptionToString, parseBooleanFrontmatter, parseShellFrontmatter

## src/utils/fsOperations.ts

- lines: 771
- imports: 6
- exports: 12
- importance: 58
- tags: permissions, tools
- exportedSymbols: safeResolvePath, isDuplicatePath, resolveDeepestExistingAncestorSync, getPathsForPermissionCheck, setFsImplementation, getFsImplementation, setOriginalFsImplementation, readFileRange, tailFile, NodeFsOperations, FsOperations, ReadFileRangeResult
- functions: safeResolvePath, isDuplicatePath, resolveDeepestExistingAncestorSync, getPathsForPermissionCheck, does, setFsImplementation, getFsImplementation, does, setOriginalFsImplementation, readFileRange, tailFile

## src/utils/fullscreen.ts

- lines: 203
- imports: 5
- exports: 8
- importance: 38
- tags: state-memory
- exportedSymbols: isTmuxControlMode, _resetTmuxControlModeProbeForTesting, isFullscreenEnvEnabled, isMouseTrackingEnabled, isMouseClicksDisabled, isFullscreenActive, maybeGetTmuxMouseHint, _resetForTesting
- functions: isTmuxControlModeEnvHeuristic, probeTmuxControlModeSync, isTmuxControlMode, _resetTmuxControlModeProbeForTesting, isFullscreenEnvEnabled, isMouseTrackingEnabled, isMouseClicksDisabled, isFullscreenActive, maybeGetTmuxMouseHint, _resetForTesting

## src/utils/generatedFiles.ts

- lines: 137
- imports: 1
- exports: 2
- importance: 21
- tags: (none)
- exportedSymbols: isGeneratedFile, filterGeneratedFiles
- functions: isGeneratedFile, filterGeneratedFiles

## src/utils/generators.ts

- lines: 89
- imports: 0
- exports: 3
- importance: 22
- tags: (none)
- exportedSymbols: lastX, returnValue, toArray
- functions: lastX, returnValue, toArray

## src/utils/genericProcessUtils.ts

- lines: 185
- imports: 1
- exports: 5
- importance: 28
- tags: (none)
- exportedSymbols: isProcessRunning, getAncestorPidsAsync, getProcessCommand, getAncestorCommandsAsync, getChildPids
- functions: isProcessRunning, getAncestorPidsAsync, getProcessCommand, getAncestorCommandsAsync, getChildPids

## src/utils/getWorktreePaths.ts

- lines: 71
- imports: 4
- exports: 1
- importance: 21
- tags: (none)
- exportedSymbols: getWorktreePaths
- functions: getWorktreePaths

## src/utils/getWorktreePathsPortable.ts

- lines: 28
- imports: 2
- exports: 1
- importance: 19
- tags: state-memory
- exportedSymbols: getWorktreePathsPortable
- functions: getWorktreePathsPortable

## src/utils/ghPrStatus.ts

- lines: 107
- imports: 3
- exports: 4
- importance: 27
- tags: (none)
- exportedSymbols: deriveReviewState, fetchPrStatus, PrReviewState, PrStatus
- functions: deriveReviewState, fetchPrStatus

## src/utils/git.ts

- lines: 927
- imports: 15
- exports: 28
- importance: 64
- tags: permissions
- exportedSymbols: getGitDir, isAtGitRoot, normalizeGitRemoteUrl, getRepoRemoteHash, getGitState, getGithubRepo, findRemoteBase, preserveGitStateForIssue, isCurrentDirectoryBareGitRepo, findGitRoot, findCanonicalGitRoot, gitExe, getIsGit, dirIsInGitRepo, getHead, getBranch, getDefaultBranch, getRemoteUrl, getIsHeadOnRemote, hasUnpushedCommits, getIsClean, getChangedFiles, getFileStatus, getWorktreeCount, stashToCleanState, GitFileStatus, GitRepoState, PreservedGitState
- functions: createFindGitRoot, wrapper, createFindCanonicalGitRoot, wrapper, getGitDir, isAtGitRoot, normalizeGitRemoteUrl, getRepoRemoteHash, stages, getGitState, getGithubRepo, findRemoteBase, isShallowClone, captureUntrackedFiles, preserveGitStateForIssue, isLocalHost, isCurrentDirectoryBareGitRepo

## src/utils/git/gitConfigParser.ts

- lines: 278
- imports: 2
- exports: 2
- importance: 24
- tags: (none)
- exportedSymbols: parseGitConfigValue, parseConfigString
- functions: parseGitConfigValue, parseConfigString, parseKeyValue, parseValue, trimTrailingWhitespace, matchesSectionHeader, isKeyChar

## src/utils/git/gitFilesystem.ts

- lines: 700
- imports: 8
- exports: 18
- importance: 49
- tags: (none)
- exportedSymbols: clearResolveGitDirCache, resolveGitDir, isSafeRefName, isValidGitSha, readGitHead, resolveRef, getCommonDir, readRawSymref, getCachedBranch, getCachedHead, getCachedRemoteUrl, getCachedDefaultBranch, resetGitFileWatcher, getHeadForDir, readWorktreeHeadSha, getRemoteUrlForDir, isShallowClone, getWorktreeCountFromFs
- classes: GitFileWatcher
- functions: clearResolveGitDirCache, resolveGitDir, isSafeRefName, isValidGitSha, readGitHead, resolveRef, resolveRefInDir, getCommonDir, readRawSymref, computeBranch, computeHead, computeRemoteUrl, computeDefaultBranch, getCachedBranch, getCachedHead, getCachedRemoteUrl, getCachedDefaultBranch, resetGitFileWatcher, getHeadForDir, readWorktreeHeadSha, getRemoteUrlForDir, isShallowClone, getWorktreeCountFromFs

## src/utils/git/gitignore.ts

- lines: 100
- imports: 8
- exports: 3
- importance: 30
- tags: (none)
- exportedSymbols: isPathGitignored, getGlobalGitignorePath, addFileGlobRuleToGitignore
- functions: isPathGitignored, getGlobalGitignorePath, addFileGlobRuleToGitignore

## src/utils/gitDiff.ts

- lines: 533
- imports: 8
- exports: 11
- importance: 47
- tags: tools
- exportedSymbols: fetchGitDiff, fetchGitDiffHunks, parseGitNumstat, parseGitDiff, parseShortstat, fetchSingleFileGitDiff, GitDiffStats, PerFileStats, GitDiffResult, NumstatResult, ToolUseDiff
- functions: fetchGitDiff, fetchGitDiffHunks, parseGitNumstat, parseGitDiff, isInTransientGitState, fetchUntrackedFiles, parseShortstat, fetchSingleFileGitDiff, parseRawDiffToToolUseDiff, getDiffRef, generateSyntheticDiff

## src/utils/github/ghAuthStatus.ts

- lines: 30
- imports: 2
- exports: 2
- importance: 33
- tags: auth
- exportedSymbols: getGhAuthStatus, GhAuthStatus
- functions: getGhAuthStatus

## src/utils/githubRepoPathMapping.ts

- lines: 163
- imports: 8
- exports: 5
- importance: 35
- tags: (none)
- exportedSymbols: updateGithubRepoPathMapping, getKnownPathsForRepo, filterExistingPaths, validateRepoAtPath, removePathFromRepo
- functions: updateGithubRepoPathMapping, getKnownPathsForRepo, filterExistingPaths, validateRepoAtPath, removePathFromRepo

## src/utils/gitSettings.ts

- lines: 19
- imports: 2
- exports: 1
- importance: 19
- tags: (none)
- topComment: Git-related behaviors that depend on user settings.
- exportedSymbols: shouldIncludeGitInstructions
- functions: shouldIncludeGitInstructions

## src/utils/glob.ts

- lines: 131
- imports: 7
- exports: 2
- importance: 37
- tags: permissions, tools
- exportedSymbols: extractGlobBaseDirectory, glob
- functions: extractGlobBaseDirectory, glob

## src/utils/gracefulShutdown.ts

- lines: 530
- imports: 21
- exports: 6
- importance: 43
- tags: mcp, state-memory, cost-budget
- exportedSymbols: gracefulShutdownSync, isShuttingDown, resetShutdownState, getPendingShutdownForTesting, gracefulShutdown, setupGracefulShutdown
- classes: method, method, CleanupTimeoutError
- functions: cleanupTerminalModes, already, printResumeHint, forceExit, defaults, gracefulShutdownSync, isShuttingDown, resetShutdownState, getPendingShutdownForTesting, that, gracefulShutdown

## src/utils/groupToolUses.ts

- lines: 183
- imports: 4
- exports: 3
- importance: 37
- tags: mcp, query-loop, tools
- exportedSymbols: applyGrouping, MessageWithoutProgress, GroupingResult
- functions: getToolsWithGrouping, getToolUseInfo, applyGrouping

## src/utils/handlePromptSubmit.ts

- lines: 611
- imports: 29
- exports: 3
- importance: 38
- tags: bridge, tools, commands, state-memory
- exportedSymbols: handlePromptSubmit, PromptInputHelpers, HandlePromptSubmitParams
- functions: exit, handlePromptSubmit, executeUserInput, makeContext

## src/utils/hash.ts

- lines: 47
- imports: 0
- exports: 3
- importance: 21
- tags: (none)
- exportedSymbols: djb2Hash, hashContent, hashPair
- functions: djb2Hash, hashContent, hashPair

## src/utils/headlessProfiler.ts

- lines: 179
- imports: 6
- exports: 3
- importance: 29
- tags: state-memory
- exportedSymbols: headlessProfilerStartTurn, headlessProfilerCheckpoint, logHeadlessProfilerTurn
- functions: clearHeadlessMarks, headlessProfilerStartTurn, headlessProfilerCheckpoint, logHeadlessProfilerTurn

## src/utils/heapDumpService.ts

- lines: 304
- imports: 13
- exports: 4
- importance: 36
- tags: mcp, state-memory
- exportedSymbols: captureMemoryDiagnostics, performHeapDump, HeapDumpResult, MemoryDiagnostics
- functions: captureMemoryDiagnostics, performHeapDump, writeHeapSnapshot

## src/utils/heatmap.ts

- lines: 199
- imports: 3
- exports: 2
- importance: 24
- tags: (none)
- exportedSymbols: generateHeatmap, HeatmapOptions
- functions: calculatePercentiles, generateHeatmap, getIntensity, getHeatmapChar

## src/utils/highlightMatch.tsx

- lines: 28
- imports: 2
- exports: 1
- importance: 19
- tags: (none)
- exportedSymbols: highlightMatch
- functions: highlightMatch

## src/utils/hooks.ts

- lines: 5023
- imports: 60
- exports: 38
- importance: 103
- tags: permissions, mcp, query-loop, tools, state-memory, hooks-security
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: getSessionEndHookTimeoutMs, shouldSkipHookDueToTrust, createBaseHookInput, getMatchingHooks, getPreToolHookBlockingMessage, getStopHookMessage, getTeammateIdleHookMessage, getTaskCreatedHookMessage, getTaskCompletedHookMessage, getUserPromptSubmitHookBlockingMessage, hasBlockingResult, executeNotificationHooks, executeStopFailureHooks, executePreCompactHooks, executePostCompactHooks, executeSessionEndHooks, executeConfigChangeHooks, executeCwdChangedHooks, executeFileChangedHooks, hasInstructionsLoadedHook, executeInstructionsLoadedHooks, executeElicitationHooks, executeElicitationResultHooks, executeStatusLineCommand, executeFileSuggestionCommand, hasWorktreeCreateHook, executeWorktreeCreateHook, executeWorktreeRemoveHook, ElicitationResponse, AggregatedHookResult, HookOutsideReplResult, ConfigChangeSource, InstructionsLoadReason, InstructionsMemoryType, ElicitationHookResult, ElicitationResultHookResult, HookBlockingError, HookResult
- functions: getSessionEndHookTimeoutMs, executeInBackground, shouldSkipHookDueToTrust, createBaseHookInput, depending, validateHookJson, parseHookOutput, parseHttpHookOutput, processHookJSONOutput, execCommandHook, matchesPattern, prepareIfConditionMatcher, isInternalHook, hookDedupKey, getPluginHookCounts, getHookTypeCounts, getHooksConfig, hooks, hasHookForEvent, getMatchingHooks, hooks, getPreToolHookBlockingMessage, getStopHookMessage, getTeammateIdleHookMessage, getTaskCreatedHookMessage, getTaskCompletedHookMessage, getUserPromptSubmitHookBlockingMessage, hooks, hooks, getJsonInput, hook, hook, hasBlockingResult, only, to, executeHooksOutsideREPL, hooks, hook, executeNotificationHooks, executeStopFailureHooks

## src/utils/hooks/apiQueryHookHelper.ts

- lines: 142
- imports: 10
- exports: 4
- importance: 54
- tags: permissions, mcp, tools, state-memory, hooks-security
- exportedSymbols: createApiQueryHook, ApiQueryHookContext, ApiQueryHookConfig, ApiQueryResult
- functions: to, createApiQueryHook, const

## src/utils/hooks/AsyncHookRegistry.ts

- lines: 310
- imports: 6
- exports: 7
- importance: 48
- tags: tools, state-memory, hooks-security
- exportedSymbols: registerPendingAsyncHook, getPendingAsyncHooks, checkForAsyncHookResponses, removeDeliveredAsyncHooks, finalizePendingAsyncHooks, clearAllAsyncHooks, PendingAsyncHook
- functions: registerPendingAsyncHook, getPendingAsyncHooks, finalizeHook, checkForAsyncHookResponses, removeDeliveredAsyncHooks, finalizePendingAsyncHooks, to, clearAllAsyncHooks

## src/utils/hooks/execAgentHook.ts

- lines: 340
- imports: 26
- exports: 1
- importance: 51
- tags: permissions, tools, state-memory, hooks-security
- exportedSymbols: execAgentHook
- functions: execAgentHook

## src/utils/hooks/execHttpHook.ts

- lines: 243
- imports: 9
- exports: 1
- importance: 51
- tags: auth, mcp, tools, hooks-security
- exportedSymbols: execHttpHook
- functions: getSandboxProxyConfig, getHttpHookPolicy, urlMatchesPattern, sanitizeHeaderValue, interpolateEnvVars, execHttpHook

## src/utils/hooks/execPromptHook.ts

- lines: 212
- imports: 16
- exports: 1
- importance: 49
- tags: permissions, mcp, tools, state-memory, hooks-security
- exportedSymbols: execPromptHook
- functions: execPromptHook

## src/utils/hooks/fileChangedWatcher.ts

- lines: 192
- imports: 8
- exports: 5
- importance: 55
- tags: permissions, state-memory, hooks-security
- exportedSymbols: setEnvHookNotifier, initializeFileChangedWatcher, updateWatchPaths, onCwdChangedForHooks, resetFileChangedWatcherForTesting
- functions: setEnvHookNotifier, initializeFileChangedWatcher, resolveWatchPaths, startWatching, handleFileEvent, updateWatchPaths, restartWatching, onCwdChangedForHooks, dispose, resetFileChangedWatcherForTesting

## src/utils/hooks/hookEvents.ts

- lines: 193
- imports: 2
- exports: 12
- importance: 47
- tags: state-memory, hooks-security
- exportedSymbols: registerHookEventHandler, emitHookStarted, emitHookProgress, startHookProgressInterval, emitHookResponse, setAllHookEventsEnabled, clearHookEventState, HookStartedEvent, HookProgressEvent, HookResponseEvent, HookExecutionEvent, HookEventHandler
- functions: registerHookEventHandler, emit, shouldEmit, emitHookStarted, emitHookProgress, startHookProgressInterval, emitHookResponse, setAllHookEventsEnabled, clearHookEventState

## src/utils/hooks/hookHelpers.ts

- lines: 84
- imports: 8
- exports: 4
- importance: 42
- tags: tools, state-memory, hooks-security
- exportedSymbols: addArgumentsToPrompt, createStructuredOutputTool, registerStructuredOutputEnforcement, hookResponseSchema
- functions: addArgumentsToPrompt, createStructuredOutputTool, hook, registerStructuredOutputEnforcement

## src/utils/hooks/hooksConfigManager.ts

- lines: 401
- imports: 5
- exports: 7
- importance: 81
- tags: auth, permissions, mcp, query-loop, tools, state-memory, cost-budget, hooks-security
- exportedSymbols: groupHooksByEventAndMatcher, getSortedMatchersForEvent, getHooksForMatcher, getMatcherMetadata, getHookEventMetadata, MatcherMetadata, HookEventMetadata
- functions: groupHooksByEventAndMatcher, getSortedMatchersForEvent, getHooksForMatcher, getMatcherMetadata

## src/utils/hooks/hooksConfigSnapshot.ts

- lines: 134
- imports: 5
- exports: 6
- importance: 43
- tags: state-memory, hooks-security
- exportedSymbols: shouldAllowManagedHooksOnly, shouldDisableAllHooksIncludingManaged, captureHooksConfigSnapshot, updateHooksConfigSnapshot, getHooksConfigFromSnapshot, resetHooksConfigSnapshot
- functions: getHooksFromAllowedSources, shouldAllowManagedHooksOnly, shouldDisableAllHooksIncludingManaged, captureHooksConfigSnapshot, updateHooksConfigSnapshot, getHooksConfigFromSnapshot, resetHooksConfigSnapshot

## src/utils/hooks/hooksSettings.ts

- lines: 272
- imports: 10
- exports: 10
- importance: 56
- tags: state-memory, hooks-security
- exportedSymbols: isHookEqual, getHookDisplayText, getAllHooks, getHooksForEvent, hookSourceDescriptionDisplayString, hookSourceHeaderDisplayString, hookSourceInlineDisplayString, sortMatchersByPriority, HookSource, IndividualHookConfig
- functions: isHookEqual, getHookDisplayText, getAllHooks, getHooksForEvent, hookSourceDescriptionDisplayString, hookSourceHeaderDisplayString, hookSourceInlineDisplayString, sortMatchersByPriority

## src/utils/hooks/postSamplingHooks.ts

- lines: 71
- imports: 6
- exports: 5
- importance: 41
- tags: tools, hooks-security
- exportedSymbols: registerPostSamplingHook, clearPostSamplingHooks, executePostSamplingHooks, REPLHookContext, PostSamplingHook
- functions: registerPostSamplingHook, clearPostSamplingHooks, executePostSamplingHooks

## src/utils/hooks/registerFrontmatterHooks.ts

- lines: 68
- imports: 5
- exports: 1
- importance: 32
- tags: state-memory, hooks-security
- exportedSymbols: registerFrontmatterHooks
- functions: registerFrontmatterHooks

## src/utils/hooks/registerSkillHooks.ts

- lines: 65
- imports: 5
- exports: 1
- importance: 32
- tags: state-memory, hooks-security
- exportedSymbols: registerSkillHooks
- functions: registerSkillHooks

## src/utils/hooks/sessionHooks.ts

- lines: 448
- imports: 7
- exports: 13
- importance: 55
- tags: state-memory, hooks-security
- exportedSymbols: addSessionHook, addFunctionHook, removeFunctionHook, removeSessionHook, getSessionHooks, getSessionFunctionHooks, getSessionHookCallback, clearSessionHooks, FunctionHookCallback, FunctionHook, SessionStore, SessionHooksState, SessionDerivedHookMatcher
- functions: addSessionHook, hook, addFunctionHook, hook, removeFunctionHook, hook, addHookToSession, to, removeSessionHook, convertToHookMatchers, hooks, hooks, getSessionHooks, hooks, getSessionFunctionHooks, getSessionHookCallback, to, clearSessionHooks

## src/utils/hooks/skillImprovement.ts

- lines: 268
- imports: 18
- exports: 3
- importance: 54
- tags: permissions, mcp, tools, state-memory, hooks-security
- exportedSymbols: initSkillImprovement, applySkillImprovement, SkillUpdate
- functions: formatRecentMessages, findProjectSkill, createSkillImprovementHook, initSkillImprovement, applySkillImprovement

## src/utils/hooks/ssrfGuard.ts

- lines: 295
- imports: 3
- exports: 2
- importance: 35
- tags: hooks-security
- exportedSymbols: isBlockedAddress, ssrfGuardedLookup
- functions: isBlockedAddress, isBlockedV4, isBlockedV6, expandIPv6Groups, extractMappedIPv4, that, ssrfGuardedLookup, ssrfError

## src/utils/horizontalScroll.ts

- lines: 138
- imports: 0
- exports: 2
- importance: 20
- tags: (none)
- exportedSymbols: calculateHorizontalScrollWindow, HorizontalScrollWindow
- functions: calculateHorizontalScrollWindow, rangeWidth, getEffectiveWidth

## src/utils/http.ts

- lines: 137
- imports: 5
- exports: 6
- importance: 45
- tags: auth, bridge, mcp
- exportedSymbols: getUserAgent, getMCPUserAgent, getWebFetchUserAgent, getAuthHeaders, withOAuth401Retry, AuthHeaders
- functions: getUserAgent, getMCPUserAgent, getWebFetchUserAgent, getAuthHeaders, withOAuth401Retry

## src/utils/hyperlink.ts

- lines: 40
- imports: 2
- exports: 3
- importance: 23
- tags: (none)
- exportedSymbols: createHyperlink, OSC8_START, OSC8_END
- functions: createHyperlink

## src/utils/ide.ts

- lines: 1495
- imports: 29
- exports: 30
- importance: 83
- tags: auth, permissions, remote, mcp, tools, state-memory
- exportedSymbols: isVSCodeIde, isJetBrainsIde, getTerminalIdeType, getSortedIdeLockfiles, getIdeLockfilesPaths, cleanupStaleIdeLockfiles, maybeInstallIDEExtension, findAvailableIDE, detectIDEs, maybeNotifyIDEConnected, hasAccessToIDEExtensionDiffFeature, isIDEExtensionInstalled, isCursorInstalled, isWindsurfInstalled, isVSCodeInstalled, detectRunningIDEs, detectRunningIDEsCached, resetDetectRunningIDEs, getConnectedIdeName, getIdeClientName, toIDEDisplayName, getConnectedIdeClient, closeOpenDiffs, initializeIdeIntegration, isSupportedVSCodeTerminal, isSupportedJetBrainsTerminal, isSupportedTerminal, DetectedIDEInfo, IdeType, IDEExtensionInstallationStatus
- functions: isProcessRunning, that, makeAncestorPidLookup, isVSCodeIde, isJetBrainsIde, getTerminalIdeType, getSortedIdeLockfiles, readIdeLockfile, checkIdeConnection, getIdeLockfilesPaths, cleanupStaleIdeLockfiles, maybeInstallIDEExtension, findAvailableIDE, detectIDEs, maybeNotifyIDEConnected, hasAccessToIDEExtensionDiffFeature, isIDEExtensionInstalled, installIDEExtension, getInstallationEnv, getClaudeCodeVersion, getInstalledVSCodeExtensionVersion, getVSCodeIDECommandByParentProcess, already, already, getVSCodeIDECommand, isCursorInstalled, isWindsurfInstalled, isVSCodeInstalled, detectRunningIDEsImpl, detectRunningIDEs, detectRunningIDEsCached, resetDetectRunningIDEs, getConnectedIdeName, getIdeClientName, toIDEDisplayName, getConnectedIdeClient, closeOpenDiffs, initializeIdeIntegration, installFromArtifactory

## src/utils/idePathConversion.ts

- lines: 91
- imports: 1
- exports: 3
- importance: 23
- tags: (none)
- exportedSymbols: checkWSLDistroMatch, WindowsToWSLConverter, IDEPathConverter
- classes: WindowsToWSLConverter
- functions: checkWSLDistroMatch

## src/utils/idleTimeout.ts

- lines: 54
- imports: 2
- exports: 1
- importance: 19
- tags: (none)
- exportedSymbols: createIdleTimeoutManager
- functions: createIdleTimeoutManager

## src/utils/imagePaste.ts

- lines: 417
- imports: 12
- exports: 9
- importance: 58
- tags: permissions, tools
- exportedSymbols: hasImageInClipboard, getImageFromClipboard, getImagePathFromClipboard, isImageFilePath, asImageFilePath, tryReadImageFromPath, PASTE_THRESHOLD, IMAGE_EXTENSION_REGEX, ImageWithDimensions
- classes: PNGf, PNGf, furl, PNGf
- functions: getClipboardCommands, hasImageInClipboard, getImageFromClipboard, getImagePathFromClipboard, removeOuterQuotes, returns, stripBackslashEscapes, isImageFilePath, asImageFilePath, tryReadImageFromPath

## src/utils/imageResizer.ts

- lines: 881
- imports: 8
- exports: 12
- importance: 74
- tags: auth, permissions, tools
- exportedSymbols: maybeResizeAndDownsampleImageBuffer, maybeResizeAndDownsampleImageBlock, compressImageBuffer, compressImageBufferWithTokenLimit, compressImageBlock, detectImageFormatFromBuffer, detectImageFormatFromBase64, createImageMetadataText, ImageResizeError, ImageDimensions, ResizeResult, ImageBlockWithDimensions
- classes: ImageResizeError
- functions: classifyImageError, hashString, maybeResizeAndDownsampleImageBuffer, maybeResizeAndDownsampleImageBlock, compressImageBuffer, compressImageBufferWithTokenLimit, compressImageBlock, createCompressedImageResult, tryProgressiveResizing, applyFormatOptimizations, tryPalettePNG, tryJPEGConversion, createUltraCompressedJPEG, detectImageFormatFromBuffer, detectImageFormatFromBase64, createImageMetadataText

## src/utils/imageStore.ts

- lines: 168
- imports: 7
- exports: 6
- importance: 36
- tags: state-memory
- exportedSymbols: cacheImagePath, storeImage, storeImages, getStoredImagePath, clearStoredImagePaths, cleanupOldImageCaches
- functions: getImageStoreDir, ensureImageStoreDir, getImagePath, cacheImagePath, storeImage, storeImages, getStoredImagePath, clearStoredImagePaths, evictOldestIfAtCap, cleanupOldImageCaches

## src/utils/imageValidation.ts

- lines: 105
- imports: 3
- exports: 3
- importance: 25
- tags: (none)
- exportedSymbols: validateImagesForAPI, ImageSizeError, OversizedImage
- classes: ImageSizeError
- functions: isBase64ImageBlock, validateImagesForAPI

## src/utils/immediateCommand.ts

- lines: 16
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: shouldInferenceConfigCommandBeImmediate
- functions: shouldInferenceConfigCommandBeImmediate

## src/utils/ink.ts

- lines: 27
- imports: 2
- exports: 1
- importance: 19
- tags: tools
- exportedSymbols: toInkColor
- functions: toInkColor

## src/utils/inProcessTeammateHelpers.ts

- lines: 103
- imports: 4
- exports: 4
- importance: 38
- tags: permissions, tools
- exportedSymbols: findInProcessTeammateTaskId, setAwaitingPlanApproval, handlePlanApprovalResponse, isPermissionRelatedResponse
- functions: findInProcessTeammateTaskId, setAwaitingPlanApproval, handlePlanApprovalResponse, isPermissionRelatedResponse

## src/utils/intl.ts

- lines: 95
- imports: 0
- exports: 7
- importance: 30
- tags: (none)
- topComment: Segmenters for Unicode text processing (lazily initialized)
- exportedSymbols: getGraphemeSegmenter, firstGrapheme, lastGrapheme, getWordSegmenter, getRelativeTimeFormat, getTimeZone, getSystemLocaleLanguage
- functions: getGraphemeSegmenter, firstGrapheme, lastGrapheme, getWordSegmenter, getRelativeTimeFormat, getTimeZone, getSystemLocaleLanguage

## src/utils/iTermBackup.ts

- lines: 74
- imports: 5
- exports: 2
- importance: 24
- tags: (none)
- exportedSymbols: markITerm2SetupComplete, checkAndRestoreITerm2Backup
- functions: markITerm2SetupComplete, getIterm2RecoveryInfo, getITerm2PlistPath, checkAndRestoreITerm2Backup

## src/utils/jetbrains.ts

- lines: 192
- imports: 4
- exports: 3
- importance: 27
- tags: (none)
- exportedSymbols: isJetBrainsPluginInstalled, isJetBrainsPluginInstalledCached, isJetBrainsPluginInstalledCachedSync
- functions: buildCommonPluginDirectoryPaths, detectPluginDirectories, isJetBrainsPluginInstalled, isJetBrainsPluginInstalledMemoized, isJetBrainsPluginInstalledCached, isJetBrainsPluginInstalledCachedSync

## src/utils/json.ts

- lines: 278
- imports: 6
- exports: 5
- importance: 46
- tags: auth, mcp, tools
- exportedSymbols: safeParseJSONC, parseJSONL, readJSONLFile, addItemToJSONCArray, safeParseJSON
- functions: parseJSONUncached, safeParseJSON, safeParseJSONC, parseJSONLBun, parseJSONLBuffer, parseJSONLString, parseJSONL, readJSONLFile, addItemToJSONCArray

## src/utils/jsonRead.ts

- lines: 17
- imports: 0
- exports: 1
- importance: 29
- tags: auth
- exportedSymbols: stripBOM
- functions: stripBOM

## src/utils/keyboardShortcuts.ts

- lines: 15
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- topComment: Special characters that macOS Option+key produces, mapped to their
- exportedSymbols: isMacosOptionChar, MACOS_OPTION_SPECIAL_CHARS
- functions: isMacosOptionChar

## src/utils/lazySchema.ts

- lines: 9
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: lazySchema
- functions: that, lazySchema

## src/utils/listSessionsImpl.ts

- lines: 455
- imports: 6
- exports: 5
- importance: 46
- tags: query-loop, tools, state-memory
- exportedSymbols: parseSessionInfoFromLite, listCandidates, listSessionsImpl, SessionInfo, ListSessionsOptions
- functions: parseSessionInfoFromLite, listCandidates, readCandidate, compareDesc, applySortAndLimit, readAllAndSort, gatherProjectCandidates, gatherAllCandidates, listSessionsImpl

## src/utils/localInstaller.ts

- lines: 163
- imports: 9
- exports: 6
- importance: 48
- tags: permissions
- exportedSymbols: getLocalClaudePath, isRunningFromLocalInstallation, ensureLocalPackageEnvironment, installOrUpdateClaudePackage, localInstallationExists, getShellType
- functions: getLocalInstallDir, getLocalClaudePath, isRunningFromLocalInstallation, writeIfMissing, ensureLocalPackageEnvironment, installOrUpdateClaudePackage, localInstallationExists, getShellType

## src/utils/lockfile.ts

- lines: 44
- imports: 1
- exports: 4
- importance: 24
- tags: (none)
- exportedSymbols: lock, lockSync, unlock, check
- functions: is, getLockfile, lock, lockSync, unlock, check

## src/utils/log.ts

- lines: 363
- imports: 15
- exports: 12
- importance: 47
- tags: mcp, state-memory
- exportedSymbols: getLogDisplayTitle, dateToFilename, attachErrorLogSink, logError, getInMemoryErrors, loadErrorLogs, getErrorLogByIndex, logMCPError, logMCPDebug, captureAPIRequest, _resetErrorLogForTesting, ErrorLogSink
- functions: getLogDisplayTitle, dateToFilename, addToInMemoryErrorLog, attachErrorLogSink, logs, logError, getInMemoryErrors, loadErrorLogs, getErrorLogByIndex, to, loadLogList, parseISOString, logMCPError, logMCPDebug, captureAPIRequest, _resetErrorLogForTesting

## src/utils/logoV2Utils.ts

- lines: 351
- imports: 11
- exports: 13
- importance: 47
- tags: state-memory
- exportedSymbols: getLayoutMode, calculateLayoutDimensions, calculateOptimalLeftWidth, formatWelcomeMessage, truncatePath, getRecentActivity, getRecentActivitySync, formatReleaseNoteForDisplay, getLogoDisplayData, formatModelAndBilling, getRecentReleaseNotesSync, LayoutMode, LayoutDimensions
- functions: getLayoutMode, calculateLayoutDimensions, calculateOptimalLeftWidth, formatWelcomeMessage, truncatePath, getRecentActivity, getRecentActivitySync, formatReleaseNoteForDisplay, getLogoDisplayData, formatModelAndBilling, getRecentReleaseNotesSync

## src/utils/mailbox.ts

- lines: 74
- imports: 1
- exports: 3
- importance: 22
- tags: (none)
- exportedSymbols: Mailbox, MessageSource, Message
- classes: Mailbox

## src/utils/managedEnv.ts

- lines: 200
- imports: 9
- exports: 2
- importance: 42
- tags: auth, state-memory
- exportedSymbols: applySafeConfigEnvironmentVariables, applyConfigEnvironmentVariables
- functions: withoutSSHTunnelVars, withoutHostManagedProviderVars, withoutCcdSpawnEnvKeys, filterSettingsEnv, applySafeConfigEnvironmentVariables, applyConfigEnvironmentVariables

## src/utils/managedEnvConstants.ts

- lines: 192
- imports: 0
- exports: 3
- importance: 35
- tags: auth, mcp, tools, state-memory
- exportedSymbols: isProviderManagedEnvVar, DANGEROUS_SHELL_SETTINGS, SAFE_ENV_VARS
- functions: isProviderManagedEnvVar

## src/utils/markdown.ts

- lines: 382
- imports: 12
- exports: 4
- importance: 59
- tags: auth, permissions
- exportedSymbols: configureMarked, applyMarkdown, formatToken, padAligned
- functions: configureMarked, applyMarkdown, formatToken, to, getDisplayText, linkifyIssueReferences, numberToLetter, numberToRoman, getListNumber, padAligned

## src/utils/markdownConfigLoader.ts

- lines: 601
- imports: 20
- exports: 8
- importance: 58
- tags: permissions, tools, commands, state-memory
- exportedSymbols: extractDescriptionFromMarkdown, parseAgentToolsFromFrontmatter, parseSlashCommandToolsFromFrontmatter, getProjectDirsUpToHome, CLAUDE_CONFIG_DIRECTORIES, loadMarkdownFilesForSubdir, ClaudeConfigDirectory, MarkdownFile
- functions: extractDescriptionFromMarkdown, parseToolListString, parseAgentToolsFromFrontmatter, parseSlashCommandToolsFromFrontmatter, getFileIdentity, resolveStopBoundary, getProjectDirsUpToHome, findMarkdownFilesNative, walk, to, loadMarkdownFiles

## src/utils/mcp/dateTimeParser.ts

- lines: 122
- imports: 4
- exports: 3
- importance: 26
- tags: mcp, tools, state-memory
- exportedSymbols: parseNaturalLanguageDateTime, looksLikeISO8601, DateTimeParseResult
- functions: parseNaturalLanguageDateTime, looksLikeISO8601

## src/utils/mcp/elicitationValidation.ts

- lines: 337
- imports: 5
- exports: 13
- importance: 42
- tags: mcp
- exportedSymbols: isMultiSelectEnumSchema, getMultiSelectValues, getMultiSelectLabels, getMultiSelectLabel, getEnumValues, getEnumLabels, getEnumLabel, validateElicitationInput, getFormatHint, isDateTimeSchema, validateElicitationInputAsync, isEnumSchema, ValidationResult
- functions: isMultiSelectEnumSchema, getMultiSelectValues, getMultiSelectLabels, getMultiSelectLabel, getEnumValues, getEnumLabels, getEnumLabel, getZodSchema, validateElicitationInput, getFormatHint, isDateTimeSchema, validateElicitationInputAsync

## src/utils/mcpInstructionsDelta.ts

- lines: 131
- imports: 5
- exports: 4
- importance: 29
- tags: mcp, tools, state-memory
- exportedSymbols: isMcpInstructionsDeltaEnabled, getMcpInstructionsDelta, McpInstructionsDelta, ClientSideInstruction
- functions: isMcpInstructionsDeltaEnabled, getMcpInstructionsDelta

## src/utils/mcpOutputStorage.ts

- lines: 190
- imports: 8
- exports: 7
- importance: 51
- tags: auth, mcp, tools
- exportedSymbols: getFormatDescription, getLargeOutputInstructions, extensionForMimeType, isBinaryContentType, persistBinaryContent, getBinaryBlobSavedMessage, PersistBinaryResult
- functions: getFormatDescription, getLargeOutputInstructions, extensionForMimeType, isBinaryContentType, persistBinaryContent, getBinaryBlobSavedMessage

## src/utils/mcpValidation.ts

- lines: 209
- imports: 5
- exports: 8
- importance: 50
- tags: auth, mcp, tools, cost-budget
- exportedSymbols: getMaxMcpOutputTokens, getContentSizeEstimate, mcpContentNeedsTruncation, truncateMcpContent, truncateMcpContentIfNeeded, MCP_TOKEN_COUNT_THRESHOLD_FACTOR, IMAGE_TOKEN_ESTIMATE, MCPToolResult
- functions: getMaxMcpOutputTokens, isTextBlock, isImageBlock, getContentSizeEstimate, getMaxMcpOutputChars, getTruncationMessage, truncateString, truncateContentBlocks, mcpContentNeedsTruncation, truncateMcpContent, truncateMcpContentIfNeeded

## src/utils/mcpWebSocketTransport.ts

- lines: 201
- imports: 6
- exports: 1
- importance: 25
- tags: remote, mcp
- exportedSymbols: WebSocketTransport
- classes: WebSocketTransport

## src/utils/memoize.ts

- lines: 270
- imports: 3
- exports: 3
- importance: 27
- tags: (none)
- exportedSymbols: memoizeWithTTL, memoizeWithTTLAsync, memoizeWithLRU
- functions: that, to, memoizeWithTTL, that, to, memoizeWithTTLAsync, with, to, with, memoizeWithLRU

## src/utils/memory/types.ts

- lines: 13
- imports: 1
- exports: 2
- importance: 20
- tags: state-memory
- exportedSymbols: MEMORY_TYPE_VALUES, MemoryType

## src/utils/memory/versions.ts

- lines: 9
- imports: 1
- exports: 1
- importance: 18
- tags: state-memory
- exportedSymbols: projectIsInGitRepo
- functions: projectIsInGitRepo

## src/utils/memoryFileDetection.ts

- lines: 290
- imports: 6
- exports: 9
- importance: 54
- tags: auth, tools, state-memory
- exportedSymbols: detectSessionFileType, detectSessionPatternType, isAutoMemFile, memoryScopeForPath, isAutoManagedMemoryFile, isMemoryDirectory, isShellCommandTargetingMemory, isAutoManagedMemoryPattern, MemoryScope
- functions: toPosix, toComparable, detectSessionFileType, detectSessionPatternType, isAutoMemFile, memoryScopeForPath, isAgentMemFile, isAutoManagedMemoryFile, isMemoryDirectory, isShellCommandTargetingMemory, isAutoManagedMemoryPattern

## src/utils/messagePredicates.ts

- lines: 9
- imports: 1
- exports: 1
- importance: 18
- tags: tools
- exportedSymbols: isHumanTurn
- functions: isHumanTurn

## src/utils/messageQueueManager.ts

- lines: 548
- imports: 12
- exports: 32
- importance: 59
- tags: permissions, bridge, commands, state-memory
- exportedSymbols: getCommandQueueSnapshot, getCommandQueue, getCommandQueueLength, hasCommandsInQueue, recheckCommandQueue, enqueue, enqueuePendingNotification, dequeue, dequeueAll, peek, dequeueAllMatching, remove, removeByFilter, clearCommandQueue, resetCommandQueue, isPromptInputModeEditable, isQueuedCommandEditable, isQueuedCommandVisible, popAllEditable, getPendingNotificationsSnapshot, dequeuePendingNotification, getCommandsByMaxPriority, isSlashCommand, subscribeToCommandQueue, subscribeToPendingNotifications, hasPendingNotifications, getPendingNotificationsCount, recheckPendingNotifications, resetPendingNotifications, clearPendingNotifications, SetAppState, PopAllEditableResult
- functions: logOperation, notifySubscribers, getCommandQueueSnapshot, getCommandQueue, getCommandQueueLength, hasCommandsInQueue, recheckCommandQueue, enqueue, enqueuePendingNotification, dequeue, dequeueAll, peek, dequeueAllMatching, remove, removeByFilter, clearCommandQueue, resetCommandQueue, isPromptInputModeEditable, isQueuedCommandEditable, isQueuedCommandVisible, extractTextFromValue, extractImagesFromValue, popAllEditable, getPendingNotificationsSnapshot, dequeuePendingNotification, getCommandsByMaxPriority, isSlashCommand

## src/utils/messages.ts

- lines: 5513
- imports: 67
- exports: 114
- importance: 105
- tags: auth, permissions, bridge, mcp, query-loop, tools, commands, state-memory, cost-budget
- exportedSymbols: withMemoryCorrectionHint, deriveShortMessageId, AUTO_REJECT_MESSAGE, DONT_ASK_REJECT_MESSAGE, isClassifierDenial, buildYoloRejectionMessage, buildClassifierUnavailableMessage, isSyntheticMessage, getLastAssistantMessage, hasToolCallsInLastAssistantTurn, createAssistantMessage, createAssistantAPIErrorMessage, createUserMessage, prepareUserContent, createUserInterruptionMessage, createSyntheticUserCaveatMessage, formatCommandInputTags, createModelSwitchBreadcrumbs, createProgressMessage, createToolResultStopMessage, extractTag, isNotEmptyMessage, deriveUUID, normalizeMessages, normalizeMessages, normalizeMessages, normalizeMessages, normalizeMessages, isToolUseRequestMessage, isToolUseResultMessage, reorderMessagesInUI, hasUnresolvedHooks, getToolResultIDs, getSiblingToolUseIDs, buildMessageLookups, buildSubagentLookups, getSiblingToolUseIDsFromLookup, getProgressMessagesFromLookup, hasUnresolvedHooksFromLookup, getToolUseIDs
- functions: getTeammateMailbox, withMemoryCorrectionHint, deriveShortMessageId, AUTO_REJECT_MESSAGE, DONT_ASK_REJECT_MESSAGE, isClassifierDenial, buildYoloRejectionMessage, buildClassifierUnavailableMessage, isSyntheticMessage, isSyntheticApiErrorMessage, getLastAssistantMessage, hasToolCallsInLastAssistantTurn, baseCreateAssistantMessage, createAssistantMessage, createAssistantAPIErrorMessage, createUserMessage, prepareUserContent, createUserInterruptionMessage, createSyntheticUserCaveatMessage, formatCommandInputTags, createModelSwitchBreadcrumbs, createProgressMessage, createToolResultStopMessage, extractTag, isNotEmptyMessage, deriveUUID, normalizeMessages, normalizeMessages, normalizeMessages, normalizeMessages, normalizeMessages, isToolUseRequestMessage, isToolUseResultMessage, reorderMessagesInUI, isHookAttachmentMessage, getInProgressHookCount, getResolvedHookCount, hasUnresolvedHooks, getToolResultIDs, getSiblingToolUseIDs

## src/utils/messages/mappers.ts

- lines: 291
- imports: 12
- exports: 6
- importance: 62
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: toInternalMessages, toSDKCompactMetadata, fromSDKCompactMetadata, toSDKMessages, localCommandOutputToSDKAssistantMessage, toSDKRateLimitInfo
- functions: toInternalMessages, toSDKCompactMetadata, fromSDKCompactMetadata, toSDKMessages, localCommandOutputToSDKAssistantMessage, toSDKRateLimitInfo, normalizeAssistantMessageForSDK

## src/utils/messages/systemInit.ts

- lines: 97
- imports: 10
- exports: 3
- importance: 42
- tags: permissions, bridge, mcp, tools, state-memory
- exportedSymbols: sdkCompatToolName, buildSystemInitMessage, SystemInitInputs
- functions: sdkCompatToolName, buildSystemInitMessage

## src/utils/model/agent.ts

- lines: 158
- imports: 6
- exports: 7
- importance: 58
- tags: auth, permissions, tools
- exportedSymbols: getDefaultSubagentModel, getAgentModel, getAgentModelDisplay, getAgentModelOptions, AGENT_MODEL_OPTIONS, AgentModelAlias, AgentModelOption
- functions: getDefaultSubagentModel, getAgentModel, aliasMatchesParentTier, getAgentModelDisplay, getAgentModelOptions

## src/utils/model/aliases.ts

- lines: 26
- imports: 0
- exports: 5
- importance: 25
- tags: (none)
- exportedSymbols: isModelAlias, isModelFamilyAlias, MODEL_ALIASES, MODEL_FAMILY_ALIASES, ModelAlias
- functions: isModelAlias, isModelFamilyAlias

## src/utils/model/antModels.ts

- lines: 65
- imports: 2
- exports: 6
- importance: 41
- tags: auth
- exportedSymbols: getAntModelOverrideConfig, getAntModels, resolveAntModel, AntModel, AntModelSwitchCalloutConfig, AntModelOverrideConfig
- functions: getAntModelOverrideConfig, getAntModels, resolveAntModel

## src/utils/model/bedrock.ts

- lines: 266
- imports: 5
- exports: 9
- importance: 53
- tags: auth, state-memory
- exportedSymbols: findFirstMatch, createBedrockRuntimeClient, isFoundationModel, extractModelIdFromArn, getBedrockRegionPrefix, applyBedrockRegionPrefix, getBedrockInferenceProfiles, getInferenceProfileBackingModel, BedrockRegionPrefix
- functions: findFirstMatch, createBedrockClient, createBedrockRuntimeClient, isFoundationModel, extractModelIdFromArn, getBedrockRegionPrefix, applyBedrockRegionPrefix

## src/utils/model/check1mAccess.ts

- lines: 73
- imports: 4
- exports: 2
- importance: 23
- tags: (none)
- exportedSymbols: checkOpus1mAccess, checkSonnet1mAccess
- functions: isExtraUsageEnabled, checkOpus1mAccess, checkSonnet1mAccess

## src/utils/model/configs.ts

- lines: 119
- imports: 2
- exports: 17
- importance: 36
- tags: (none)
- exportedSymbols: CLAUDE_3_7_SONNET_CONFIG, CLAUDE_3_5_V2_SONNET_CONFIG, CLAUDE_3_5_HAIKU_CONFIG, CLAUDE_HAIKU_4_5_CONFIG, CLAUDE_SONNET_4_CONFIG, CLAUDE_SONNET_4_5_CONFIG, CLAUDE_OPUS_4_CONFIG, CLAUDE_OPUS_4_1_CONFIG, CLAUDE_OPUS_4_5_CONFIG, CLAUDE_OPUS_4_6_CONFIG, CLAUDE_SONNET_4_6_CONFIG, ALL_MODEL_CONFIGS, CANONICAL_MODEL_IDS, CANONICAL_ID_TO_KEY, ModelConfig, ModelKey, CanonicalModelId

## src/utils/model/contextWindowUpgradeCheck.ts

- lines: 48
- imports: 2
- exports: 1
- importance: 19
- tags: (none)
- exportedSymbols: getUpgradeMessage
- functions: getAvailableUpgrade, getUpgradeMessage

## src/utils/model/deprecation.ts

- lines: 102
- imports: 1
- exports: 1
- importance: 19
- tags: (none)
- exportedSymbols: getModelDeprecationWarning
- functions: getDeprecatedModelInfo, getModelDeprecationWarning

## src/utils/model/model.ts

- lines: 619
- imports: 13
- exports: 30
- importance: 72
- tags: auth, permissions, state-memory, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: getSmallFastModel, isNonCustomOpusModel, getUserSpecifiedModelSetting, getMainLoopModel, getBestModel, getDefaultOpusModel, getDefaultSonnetModel, getDefaultHaikuModel, getRuntimeMainLoopModel, getDefaultMainLoopModelSetting, getDefaultMainLoopModel, firstPartyNameToCanonical, getCanonicalName, getClaudeAiUserDefaultModelDescription, renderDefaultModelSetting, getOpus46PricingSuffix, isOpus1mMergeEnabled, renderModelSetting, getPublicModelDisplayName, renderModelName, getPublicModelName, parseUserSpecifiedModel, resolveSkillModelOverride, isLegacyModelRemapEnabled, modelDisplayString, getMarketingNameForModel, normalizeModelStringForAPI, ModelShortName, ModelName, ModelSetting
- classes: reasoning
- functions: getSmallFastModel, isNonCustomOpusModel, getUserSpecifiedModelSetting, getMainLoopModel, getBestModel, getDefaultOpusModel, getDefaultSonnetModel, getDefaultHaikuModel, getRuntimeMainLoopModel, getDefaultMainLoopModelSetting, getDefaultMainLoopModel, firstPartyNameToCanonical, getCanonicalName, getClaudeAiUserDefaultModelDescription, renderDefaultModelSetting, getOpus46PricingSuffix, isOpus1mMergeEnabled, renderModelSetting, getPublicModelDisplayName, maskModelCodename, renderModelName, getPublicModelName, intentionally, parseUserSpecifiedModel, resolveSkillModelOverride, isLegacyOpusFirstParty, isLegacyModelRemapEnabled, modelDisplayString, getMarketingNameForModel, normalizeModelStringForAPI

## src/utils/model/modelAllowlist.ts

- lines: 171
- imports: 4
- exports: 1
- importance: 23
- tags: (none)
- exportedSymbols: isModelAllowed
- functions: modelBelongsToFamily, prefixMatchesModel, modelMatchesVersionPrefix, familyHasSpecificEntries, isModelAllowed

## src/utils/model/modelCapabilities.ts

- lines: 119
- imports: 16
- exports: 3
- importance: 44
- tags: auth
- exportedSymbols: getModelCapability, refreshModelCapabilities, ModelCapability
- functions: getCacheDir, getCachePath, isModelCapabilitiesEligible, sortForMatching, getModelCapability, refreshModelCapabilities

## src/utils/model/modelOptions.ts

- lines: 541
- imports: 11
- exports: 7
- importance: 45
- tags: state-memory
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: getDefaultOptionForUser, getSonnet46_1MOption, getOpus46_1MOption, getMaxSonnet46_1MOption, getMaxOpus46_1MOption, getModelOptions, ModelOption
- functions: getDefaultOptionForUser, getCustomSonnetOption, getSonnet46Option, getCustomOpusOption, getOpus41Option, getOpus46Option, getSonnet46_1MOption, getOpus46_1MOption, getCustomHaikuOption, getHaiku45Option, getHaiku35Option, getHaikuOption, getMaxOpusOption, getMaxSonnet46_1MOption, getMaxOpus46_1MOption, getMergedOpus1MOption, getOpusPlanOption, getModelOptionsBase, getModelFamilyInfo, getKnownModelOption, getModelOptions, filterModelOptionsByAllowlist

## src/utils/model/modelStrings.ts

- lines: 167
- imports: 7
- exports: 4
- importance: 32
- tags: (none)
- exportedSymbols: resolveOverriddenModel, getModelStrings, ensureModelStringsInitialized, ModelStrings
- functions: getBuiltinModelStrings, getBedrockModelStrings, applyModelOverrides, resolveOverriddenModel, initModelStrings, getModelStrings, ensureModelStringsInitialized

## src/utils/model/modelSupportOverrides.ts

- lines: 51
- imports: 2
- exports: 2
- importance: 21
- tags: (none)
- exportedSymbols: get3PModelCapabilityOverride, ModelCapabilityOverride

## src/utils/model/providers.ts

- lines: 41
- imports: 2
- exports: 4
- importance: 25
- tags: (none)
- exportedSymbols: getAPIProvider, getAPIProviderForStatsig, isFirstPartyAnthropicBaseUrl, APIProvider
- functions: getAPIProvider, getAPIProviderForStatsig, isFirstPartyAnthropicBaseUrl

## src/utils/model/validateModel.ts

- lines: 160
- imports: 6
- exports: 1
- importance: 37
- tags: auth
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: validateModel
- functions: validateModel, handleValidationError, get3PFallbackSuggestion

## src/utils/modelCost.ts

- lines: 232
- imports: 7
- exports: 14
- importance: 64
- tags: auth, query-loop, tools
- exportedSymbols: getOpus46CostTier, getModelCosts, calculateUSDCost, calculateCostFromTokens, formatModelPricing, getModelPricingString, COST_TIER_3_15, COST_TIER_15_75, COST_TIER_5_25, COST_TIER_30_150, COST_HAIKU_35, COST_HAIKU_45, MODEL_COSTS, ModelCosts
- functions: getOpus46CostTier, tokensToUSDCost, getModelCosts, trackUnknownModelCost, calculateUSDCost, calculateCostFromTokens, formatPrice, formatModelPricing, getModelPricingString

## src/utils/modifiers.ts

- lines: 37
- imports: 0
- exports: 3
- importance: 21
- tags: (none)
- exportedSymbols: prewarmModifiers, isModifierPressed, ModifierKey
- functions: prewarmModifiers, isModifierPressed

## src/utils/mtls.ts

- lines: 180
- imports: 8
- exports: 8
- importance: 41
- tags: remote
- exportedSymbols: getWebSocketTLSOptions, getTLSFetchOptions, clearMTLSCache, configureGlobalMTLS, getMTLSConfig, getMTLSAgent, MTLSConfig, TLSConfig
- functions: getWebSocketTLSOptions, getTLSFetchOptions, clearMTLSCache, configureGlobalMTLS

## src/utils/nativeInstaller/download.ts

- lines: 524
- imports: 15
- exports: 9
- importance: 61
- tags: auth
- exportedSymbols: getLatestVersionFromArtifactory, getLatestVersionFromBinaryRepo, getLatestVersion, downloadVersionFromArtifactory, downloadVersionFromBinaryRepo, downloadVersion, ARTIFACTORY_REGISTRY_URL, STALL_TIMEOUT_MS, _downloadAndVerifyBinaryForTesting
- classes: StallTimeoutError
- functions: getLatestVersionFromArtifactory, getLatestVersionFromBinaryRepo, getLatestVersion, downloadVersionFromArtifactory, getStallTimeoutMs, downloadAndVerifyBinary, downloadVersionFromBinaryRepo, downloadVersion

## src/utils/nativeInstaller/index.ts

- lines: 19
- imports: 0
- exports: 0
- importance: 15
- tags: (none)
- topComment: Re-export only the functions that are actually used

## src/utils/nativeInstaller/installer.ts

- lines: 1709
- imports: 24
- exports: 12
- importance: 74
- tags: permissions, state-memory
- exportedSymbols: getPlatform, getBinaryName, removeDirectoryIfEmpty, checkInstall, installLatest, lockCurrentVersion, cleanupOldVersions, removeInstalledSymlink, cleanupShellAliases, cleanupNpmInstallations, VERSION_RETENTION_COUNT, SetupMessage
- functions: getPlatform, getBinaryName, getBaseDirectories, isPossibleClaudeBinary, getVersionPaths, tryWithVersionLock, atomicMoveToInstallPath, installVersionFromPackage, installVersionFromBinary, installVersion, performVersionUpdate, versionIsAvailable, updateLatest, removeDirectoryIfEmpty, updateSymlink, checkInstall, installLatest, installLatestImpl, getVersionFromSymlink, getLockFilePathFromVersionPath, lockCurrentVersion, logLockAcquisitionError, forceRemoveLock, cleanupOldVersions, isNpmSymlink, removeInstalledSymlink, cleanupShellAliases, manualRemoveNpmPackage, tryRemove, attemptNpmUninstall, cleanupNpmInstallations

## src/utils/nativeInstaller/packageManagers.ts

- lines: 337
- imports: 5
- exports: 11
- importance: 42
- tags: tools
- exportedSymbols: detectMise, detectAsdf, detectHomebrew, detectWinget, getOsRelease, detectPacman, detectDeb, detectRpm, detectApk, getPackageManager, PackageManager
- functions: isDistroFamily, detectMise, detectAsdf, detectHomebrew, detectWinget, to

## src/utils/nativeInstaller/pidLock.ts

- lines: 434
- imports: 9
- exports: 11
- importance: 47
- tags: (none)
- exportedSymbols: isPidBasedLockingEnabled, isProcessRunning, readLockContent, isLockActive, tryAcquireLock, acquireProcessLifetimeLock, withLock, getAllLockInfo, cleanupStaleLocks, VersionLockContent, LockInfo
- functions: isPidBasedLockingEnabled, isProcessRunning, isClaudeProcess, readLockContent, isLockActive, writeLockFile, if, tryAcquireLock, return, acquireProcessLifetimeLock, withLock, getAllLockInfo, cleanupStaleLocks

## src/utils/notebook.ts

- lines: 225
- imports: 7
- exports: 3
- importance: 40
- tags: query-loop, tools
- exportedSymbols: readNotebook, mapNotebookCellsToToolResult, parseCellId
- functions: isLargeOutputs, processOutputText, extractImage, processOutput, processCell, cellContentToToolResult, cellOutputToToolResult, getToolResultFromCell, readNotebook, mapNotebookCellsToToolResult, parseCellId

## src/utils/objectGroupBy.ts

- lines: 19
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: objectGroupBy
- functions: objectGroupBy

## src/utils/pasteStore.ts

- lines: 105
- imports: 6
- exports: 4
- importance: 30
- tags: state-memory
- exportedSymbols: hashPastedText, storePastedText, retrievePastedText, cleanupOldPastes
- functions: getPasteStoreDir, hashPastedText, getPastePath, storePastedText, retrievePastedText, cleanupOldPastes

## src/utils/path.ts

- lines: 156
- imports: 6
- exports: 5
- importance: 44
- tags: auth, tools, state-memory
- exportedSymbols: expandPath, toRelativePath, getDirectoryForPath, containsPathTraversal, normalizePathForConfigKey
- functions: always, expandPath, toRelativePath, getDirectoryForPath, containsPathTraversal, normalizePathForConfigKey

## src/utils/pdf.ts

- lines: 301
- imports: 9
- exports: 8
- importance: 43
- tags: tools, state-memory
- exportedSymbols: readPDF, getPDFPageCount, resetPdftoppmCache, isPdftoppmAvailable, extractPDFPages, PDFError, PDFResult, PDFExtractPagesResult
- functions: readPDF, getPDFPageCount, resetPdftoppmCache, isPdftoppmAvailable, extractPDFPages

## src/utils/pdfUtils.ts

- lines: 71
- imports: 1
- exports: 4
- importance: 24
- tags: (none)
- exportedSymbols: parsePDFPageRange, isPDFSupported, isPDFExtension, DOCUMENT_EXTENSIONS
- functions: parsePDFPageRange, isPDFSupported, isPDFExtension

## src/utils/peerAddress.ts

- lines: 22
- imports: 0
- exports: 1
- importance: 17
- tags: bridge, tools, state-memory
- exportedSymbols: parseAddress
- functions: parseAddress

## src/utils/permissions/autoModeState.ts

- lines: 40
- imports: 0
- exports: 7
- importance: 39
- tags: permissions, state-memory
- topComment: Auto mode state functions — lives in its own module so callers can
- exportedSymbols: setAutoModeActive, isAutoModeActive, setAutoModeFlagCli, getAutoModeFlagCli, setAutoModeCircuitBroken, isAutoModeCircuitBroken, _resetForTesting
- functions: setAutoModeActive, isAutoModeActive, setAutoModeFlagCli, getAutoModeFlagCli, setAutoModeCircuitBroken, isAutoModeCircuitBroken, _resetForTesting

## src/utils/permissions/bashClassifier.ts

- lines: 62
- imports: 0
- exports: 11
- importance: 43
- tags: permissions, state-memory
- topComment: Stub for external builds - classifier permissions feature is ANT-ONLY
- exportedSymbols: extractPromptDescription, createPromptRuleContent, isClassifierPermissionsEnabled, getBashPromptDenyDescriptions, getBashPromptAskDescriptions, getBashPromptAllowDescriptions, classifyBashCommand, generateGenericDescription, PROMPT_PREFIX, ClassifierResult, ClassifierBehavior
- functions: extractPromptDescription, createPromptRuleContent, isClassifierPermissionsEnabled, getBashPromptDenyDescriptions, getBashPromptAskDescriptions, getBashPromptAllowDescriptions, classifyBashCommand, generateGenericDescription

## src/utils/permissions/bypassPermissionsKillswitch.ts

- lines: 156
- imports: 6
- exports: 6
- importance: 44
- tags: permissions, bridge, tools, state-memory
- exportedSymbols: checkAndDisableBypassPermissionsIfNeeded, resetBypassPermissionsCheck, useKickOffCheckAndDisableBypassPermissionsIfNeeded, checkAndDisableAutoModeIfNeeded, resetAutoModeGateCheck, useKickOffCheckAndDisableAutoModeIfNeeded
- functions: checkAndDisableBypassPermissionsIfNeeded, resetBypassPermissionsCheck, useKickOffCheckAndDisableBypassPermissionsIfNeeded, checkAndDisableAutoModeIfNeeded, resetAutoModeGateCheck, useKickOffCheckAndDisableAutoModeIfNeeded

## src/utils/permissions/classifierDecision.ts

- lines: 99
- imports: 22
- exports: 1
- importance: 38
- tags: permissions, mcp, tools
- exportedSymbols: isAutoModeAllowlistedTool
- functions: isAutoModeAllowlistedTool

## src/utils/permissions/classifierShared.ts

- lines: 40
- imports: 2
- exports: 2
- importance: 41
- tags: permissions, query-loop, tools
- exportedSymbols: extractToolUseBlock, parseClassifierResponse
- functions: extractToolUseBlock, parseClassifierResponse

## src/utils/permissions/dangerousPatterns.ts

- lines: 81
- imports: 0
- exports: 2
- importance: 30
- tags: permissions, tools
- exportedSymbols: CROSS_PLATFORM_CODE_EXEC, DANGEROUS_BASH_PATTERNS

## src/utils/permissions/denialTracking.ts

- lines: 46
- imports: 0
- exports: 6
- importance: 37
- tags: permissions
- exportedSymbols: createDenialTrackingState, recordDenial, recordSuccess, shouldFallbackToPrompting, DENIAL_LIMITS, DenialTrackingState
- functions: createDenialTrackingState, recordDenial, recordSuccess, shouldFallbackToPrompting

## src/utils/permissions/filesystem.ts

- lines: 1778
- imports: 31
- exports: 29
- importance: 75
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: normalizeCaseForComparison, getClaudeSkillScope, relativePath, toPosixPath, isClaudeSettingsPath, getSessionMemoryDir, getSessionMemoryPath, isScratchpadEnabled, getClaudeTempDirName, getProjectTempDir, getScratchpadDir, ensureScratchpadDir, checkPathSafetyForAutoEdit, allWorkingDirectories, pathInAllowedWorkingPath, pathInWorkingPath, normalizePatternsToPath, getFileReadIgnorePatterns, matchingRuleForInput, checkReadPermissionForTool, checkWritePermissionForTool, generateSuggestions, checkEditableInternalPath, checkReadableInternalPath, DANGEROUS_FILES, DANGEROUS_DIRECTORIES, getClaudeTempDir, getBundledSkillsRoot, getResolvedWorkingDirPaths
- functions: normalizeCaseForComparison, getClaudeSkillScope, relativePath, toPosixPath, getSettingsPaths, isClaudeSettingsPath, isClaudeConfigFilePath, isSessionPlanFile, getSessionMemoryDir, getSessionMemoryPath, isSessionMemoryPath, isProjectDirPath, isScratchpadEnabled, getClaudeTempDirName, getClaudeTempDir, getBundledSkillsRoot, getProjectTempDir, getScratchpadDir, ensureScratchpadDir, isScratchpadPath, isDangerousFilePathToAutoEdit, hasSuspiciousWindowsPathPattern, performs, checks, checkPathSafetyForAutoEdit, allWorkingDirectories, pathInAllowedWorkingPath, pathInWorkingPath, rootPathForSource, prependDirSep, normalizePatternToPath, normalizePatternsToPath, getFileReadIgnorePatterns, patternWithRoot, getPatternsByRoot, matchingRuleForInput, checkReadPermissionForTool, checkWritePermissionForTool, generateSuggestions, checkEditableInternalPath

## src/utils/permissions/getNextPermissionMode.ts

- lines: 102
- imports: 5
- exports: 2
- importance: 35
- tags: permissions, tools, state-memory
- exportedSymbols: getNextPermissionMode, cyclePermissionMode
- functions: canCycleToAuto, getNextPermissionMode, cyclePermissionMode

## src/utils/permissions/pathValidation.ts

- lines: 486
- imports: 11
- exports: 11
- importance: 59
- tags: permissions, tools, state-memory
- exportedSymbols: formatDirectoryList, getGlobBaseDirectory, expandTilde, isPathInSandboxWriteAllowlist, isPathAllowed, validateGlobPattern, isDangerousRemovalPath, validatePath, FileOperationType, PathCheckResult, ResolvedPathCheckResult
- functions: formatDirectoryList, getGlobBaseDirectory, expandTilde, isPathInSandboxWriteAllowlist, isPathAllowed, validateGlobPattern, isDangerousRemovalPath, validatePath

## src/utils/permissions/permissionExplainer.ts

- lines: 251
- imports: 12
- exports: 4
- importance: 56
- tags: permissions, query-loop, tools
- exportedSymbols: isPermissionExplainerEnabled, generatePermissionExplanation, RiskLevel, PermissionExplanation
- functions: formatToolInput, extractConversationContext, isPermissionExplainerEnabled, generatePermissionExplanation

## src/utils/permissions/PermissionMode.ts

- lines: 142
- imports: 5
- exports: 10
- importance: 49
- tags: permissions, state-memory
- exportedSymbols: isExternalPermissionMode, toExternalPermissionMode, permissionModeFromString, permissionModeTitle, isDefaultMode, permissionModeShortTitle, permissionModeSymbol, getModeColor, permissionModeSchema, externalPermissionModeSchema
- functions: isExternalPermissionMode, getModeConfig, toExternalPermissionMode, permissionModeFromString, permissionModeTitle, isDefaultMode, permissionModeShortTitle, permissionModeSymbol, getModeColor

## src/utils/permissions/PermissionPromptToolResultSchema.ts

- lines: 128
- imports: 7
- exports: 5
- importance: 53
- tags: permissions, mcp, query-loop, tools
- exportedSymbols: permissionPromptToolResultToPermissionDecision, inputSchema, outputSchema, Input, Output
- functions: permissionPromptToolResultToPermissionDecision

## src/utils/permissions/PermissionResult.ts

- lines: 36
- imports: 1
- exports: 1
- importance: 28
- tags: permissions
- topComment: Types extracted to src/types/permissions.ts to break import cycles
- exportedSymbols: getRuleBehaviorDescription
- functions: to, getRuleBehaviorDescription

## src/utils/permissions/PermissionRule.ts

- lines: 41
- imports: 3
- exports: 2
- importance: 32
- tags: permissions, tools
- exportedSymbols: permissionBehaviorSchema, permissionRuleValueSchema

## src/utils/permissions/permissionRuleParser.ts

- lines: 199
- imports: 5
- exports: 6
- importance: 44
- tags: permissions, tools
- exportedSymbols: normalizeLegacyToolName, getLegacyToolNames, escapeRuleContent, unescapeRuleContent, permissionRuleValueFromString, permissionRuleValueToString
- functions: normalizeLegacyToolName, getLegacyToolNames, escapeRuleContent, unescapeRuleContent, permissionRuleValueFromString, permissionRuleValueToString, findFirstUnescapedChar, findLastUnescapedChar

## src/utils/permissions/permissions.ts

- lines: 1487
- imports: 37
- exports: 17
- importance: 93
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: permissionRuleSourceDisplayString, getAllowRules, createPermissionRequestMessage, getDenyRules, getAskRules, toolAlwaysAllowedRule, getDenyRuleForTool, getAskRuleForTool, getDenyRuleForAgent, filterDeniedAgents, getRuleByContentsForTool, getRuleByContentsForToolName, checkRuleBasedPermissions, deletePermissionRule, applyPermissionRulesToPermissionContext, syncPermissionRulesFromDisk, hasPermissionsToUseTool
- functions: permissionRuleSourceDisplayString, getAllowRules, createPermissionRequestMessage, getDenyRules, getAskRules, toolMatchesRule, toolAlwaysAllowedRule, getDenyRuleForTool, getAskRuleForTool, getDenyRuleForAgent, filterDeniedAgents, getRuleByContentsForTool, export, getRuleByContentsForToolName, runPermissionRequestHooksForHeadlessAgent, persistDenialState, handleDenialLimitExceeded, checkRuleBasedPermissions, hasPermissionsToUseToolInner, deletePermissionRule, convertRulesToUpdates, applyPermissionRulesToPermissionContext, syncPermissionRulesFromDisk, getUpdatedInputOrFallback

## src/utils/permissions/permissionSetup.ts

- lines: 1533
- imports: 30
- exports: 35
- importance: 72
- tags: permissions, tools, state-memory
- exportedSymbols: isDangerousBashPermission, isDangerousPowerShellPermission, isDangerousTaskPermission, findDangerousClassifierPermissions, isOverlyBroadBashAllowRule, isOverlyBroadPowerShellAllowRule, findOverlyBroadBashPermissions, findOverlyBroadPowerShellPermissions, removeDangerousPermissions, stripDangerousPermissionsForAutoMode, restoreDangerousPermissions, transitionPermissionMode, parseBaseToolsFromCLI, initialPermissionModeFromCLI, parseToolListFromCLI, initializeToolPermissionContext, getAutoModeUnavailableNotification, verifyAutoModeGateAccess, shouldDisableBypassPermissions, isAutoModeGateEnabled, getAutoModeUnavailableReason, getAutoModeEnabledState, getAutoModeEnabledStateIfCached, hasAutoModeOptInAnySource, isBypassPermissionsModeDisabled, createDisabledBypassPermissionsContext, checkAndDisableBypassPermissions, isDefaultPermissionModeAuto, shouldPlanUseAutoMode, prepareContextForPlanMode, transitionPlanAutoMode, DangerousPermissionInfo, AutoModeGateCheckResult, AutoModeUnavailableReason, AutoModeEnabledState
- functions: isDangerousBashPermission, isDangerousPowerShellPermission, isDangerousTaskPermission, formatPermissionSource, isDangerousClassifierPermission, findDangerousClassifierPermissions, isOverlyBroadBashAllowRule, isOverlyBroadPowerShellAllowRule, findOverlyBroadBashPermissions, findOverlyBroadPowerShellPermissions, isPermissionUpdateDestination, removeDangerousPermissions, stripDangerousPermissionsForAutoMode, restoreDangerousPermissions, transitionPermissionMode, parseBaseToolsFromCLI, isSymlinkTo, initialPermissionModeFromCLI, parseToolListFromCLI, initializeToolPermissionContext, getAutoModeUnavailableNotification, verifyAutoModeGateAccess, that, shouldDisableBypassPermissions, isAutoModeDisabledBySettings, isAutoModeGateEnabled, getAutoModeUnavailableReason, parseAutoModeEnabledState, getAutoModeEnabledState, getAutoModeEnabledStateIfCached, hasAutoModeOptInAnySource, isBypassPermissionsModeDisabled, createDisabledBypassPermissionsContext, checkAndDisableBypassPermissions, isDefaultPermissionModeAuto, shouldPlanUseAutoMode, prepareContextForPlanMode, transitionPlanAutoMode

## src/utils/permissions/permissionsLoader.ts

- lines: 297
- imports: 9
- exports: 7
- importance: 51
- tags: permissions
- exportedSymbols: shouldAllowManagedPermissionRulesOnly, shouldShowAlwaysAllowOptions, loadAllPermissionRulesFromDisk, getPermissionRulesForSource, deletePermissionRuleFromSettings, addPermissionRulesToSettings, PermissionRuleFromEditableSettings
- functions: shouldAllowManagedPermissionRulesOnly, shouldShowAlwaysAllowOptions, getSettingsForSourceLenient_FOR_EDITING_ONLY_NOT_FOR_READING, settingsJsonToRules, loadAllPermissionRulesFromDisk, getPermissionRulesForSource, deletePermissionRuleFromSettings, getEmptyPermissionSettingsJson, addPermissionRulesToSettings

## src/utils/permissions/PermissionUpdate.ts

- lines: 390
- imports: 12
- exports: 8
- importance: 55
- tags: permissions, tools, state-memory
- exportedSymbols: extractRules, hasRules, applyPermissionUpdate, applyPermissionUpdates, supportsPersistence, persistPermissionUpdate, persistPermissionUpdates, createReadRuleSuggestion
- functions: extractRules, hasRules, applyPermissionUpdate, applyPermissionUpdates, supportsPersistence, persistPermissionUpdate, persistPermissionUpdates, createReadRuleSuggestion

## src/utils/permissions/PermissionUpdateSchema.ts

- lines: 79
- imports: 5
- exports: 2
- importance: 34
- tags: permissions, state-memory
- exportedSymbols: permissionUpdateDestinationSchema, permissionUpdateSchema

## src/utils/permissions/shadowedRuleDetection.ts

- lines: 235
- imports: 4
- exports: 5
- importance: 41
- tags: permissions, tools, commands, state-memory
- exportedSymbols: isSharedSettingSource, detectUnreachableRules, ShadowType, UnreachableRule, DetectUnreachableRulesOptions
- functions: isSharedSettingSource, formatSource, generateFixSuggestion, isAllowRuleShadowedByAskRule, isAllowRuleShadowedByDenyRule, detectUnreachableRules

## src/utils/permissions/shellRuleMatching.ts

- lines: 229
- imports: 1
- exports: 7
- importance: 42
- tags: permissions, tools
- exportedSymbols: permissionRuleExtractPrefix, hasWildcards, matchWildcardPattern, parsePermissionRule, suggestionForExactCommand, suggestionForPrefix, ShellPermissionRule
- functions: permissionRuleExtractPrefix, hasWildcards, matchWildcardPattern, parsePermissionRule, suggestionForExactCommand, suggestionForPrefix

## src/utils/permissions/yoloClassifier.ts

- lines: 1496
- imports: 30
- exports: 12
- importance: 93
- tags: auth, permissions, query-loop, tools, state-memory, cost-budget
- exportedSymbols: getDefaultExternalAutoModeRules, buildDefaultExternalSystemPrompt, getAutoModeClassifierErrorDumpPath, getAutoModeClassifierTranscript, buildTranscriptEntries, buildTranscriptForClassifier, buildYoloSystemPrompt, classifyYoloAction, formatActionForClassifier, YOLO_CLASSIFIER_TOOL_NAME, AutoModeRules, TranscriptEntry
- functions: txtRequire, isUsingExternalPermissions, getDefaultExternalAutoModeRules, extractTaggedBullets, buildDefaultExternalSystemPrompt, getAutoModeDumpDir, maybeDumpAutoMode, getAutoModeClassifierErrorDumpPath, getAutoModeClassifierTranscript, dumpErrorPrompts, buildTranscriptEntries, buildToolLookup, toCompactBlock, toCompact, buildTranscriptForClassifier, buildClaudeMdMessage, buildYoloSystemPrompt, stripThinking, parseXmlBlock, parseXmlReason, parseXmlThinking, extractUsage, extractRequestId, combineUsage, replaceOutputFormatWithXml, getClassifierThinkingConfig, classifyYoloActionXml, classifyYoloAction, getClassifierModel, resolveTwoStageClassifier, isTwoStageClassifierEnabled, isJsonlTranscriptEnabled, logAutoModeOutcome, detectPromptTooLong, getTwoStageMode, formatActionForClassifier

## src/utils/planModeV2.ts

- lines: 96
- imports: 3
- exports: 5
- importance: 29
- tags: tools, state-memory
- exportedSymbols: getPlanModeV2AgentCount, getPlanModeV2ExploreAgentCount, isPlanModeInterviewPhaseEnabled, getPewterLedgerVariant, PewterLedgerVariant
- functions: getPlanModeV2AgentCount, getPlanModeV2ExploreAgentCount, isPlanModeInterviewPhaseEnabled, getPewterLedgerVariant

## src/utils/plans.ts

- lines: 398
- imports: 18
- exports: 10
- importance: 67
- tags: permissions, query-loop, tools, state-memory
- exportedSymbols: getPlanSlug, setPlanSlug, clearPlanSlug, clearAllPlanSlugs, getPlanFilePath, getPlan, copyPlanForResume, copyPlanForFork, persistFileSnapshotIfRemote, getPlansDirectory
- functions: getPlanSlug, setPlanSlug, clearPlanSlug, clearAllPlanSlugs, getPlansDirectory, getPlanFilePath, getPlan, getSlugFromLog, copyPlanForResume, copyPlanForFork, recoverPlanFromMessages, findFileSnapshotEntry, persistFileSnapshotIfRemote

## src/utils/platform.ts

- lines: 151
- imports: 5
- exports: 7
- importance: 35
- tags: (none)
- exportedSymbols: detectVcs, SUPPORTED_PLATFORMS, getPlatform, getWslVersion, getLinuxDistroInfo, Platform, LinuxDistroInfo
- functions: detectVcs

## src/utils/plugins/addDirPluginSettings.ts

- lines: 72
- imports: 5
- exports: 2
- importance: 24
- tags: (none)
- exportedSymbols: getAddDirEnabledPlugins, getAddDirExtraMarketplaces
- functions: getAddDirEnabledPlugins, getAddDirExtraMarketplaces

## src/utils/plugins/cacheUtils.ts

- lines: 197
- imports: 18
- exports: 4
- importance: 35
- tags: mcp, tools
- exportedSymbols: clearAllPluginCaches, clearAllCaches, markPluginVersionOrphaned, cleanupOrphanedPluginVersionsInBackground
- functions: clearAllPluginCaches, clearAllCaches, markPluginVersionOrphaned, cleanupOrphanedPluginVersionsInBackground, getOrphanedAtPath, removeOrphanedAtMarker, getInstalledVersionPaths, processOrphanedPluginVersion, removeIfEmpty, readSubdirs

## src/utils/plugins/dependencyResolver.ts

- lines: 306
- imports: 5
- exports: 9
- importance: 41
- tags: mcp, state-memory
- exportedSymbols: qualifyDependency, resolveDependencyClosure, verifyAndDemote, findReverseDependents, getEnabledPluginIdsForScope, formatDependencyCountSuffix, formatReverseDependentsSuffix, DependencyLookupResult, ResolutionResult
- functions: qualifyDependency, resolveDependencyClosure, walk, verifyAndDemote, findReverseDependents, getEnabledPluginIdsForScope, formatDependencyCountSuffix, formatReverseDependentsSuffix

## src/utils/plugins/fetchTelemetry.ts

- lines: 136
- imports: 2
- exports: 4
- importance: 36
- tags: permissions, mcp
- exportedSymbols: logPluginFetch, classifyFetchError, PluginFetchSource, PluginFetchOutcome
- functions: extractHost, isOfficialRepo, logPluginFetch, classifyFetchError

## src/utils/plugins/gitAvailability.ts

- lines: 70
- imports: 2
- exports: 3
- importance: 23
- tags: state-memory
- exportedSymbols: markGitUnavailable, clearGitAvailabilityCache, checkGitAvailable
- functions: isCommandAvailable, markGitUnavailable, clearGitAvailabilityCache

## src/utils/plugins/headlessPluginInstall.ts

- lines: 175
- imports: 12
- exports: 1
- importance: 29
- tags: mcp, state-memory
- exportedSymbols: installPluginsForHeadless
- functions: installPluginsForHeadless

## src/utils/plugins/hintRecommendation.ts

- lines: 165
- imports: 9
- exports: 6
- importance: 38
- tags: tools, state-memory
- exportedSymbols: maybeRecordPluginHint, _resetHintRecommendationForTesting, resolvePluginHint, markHintPluginShown, disableHintRecommendations, PluginHintRecommendation
- functions: maybeRecordPluginHint, _resetHintRecommendationForTesting, resolvePluginHint, markHintPluginShown, disableHintRecommendations

## src/utils/plugins/installCounts.ts

- lines: 293
- imports: 11
- exports: 2
- importance: 32
- tags: (none)
- exportedSymbols: getInstallCounts, formatInstallCount
- functions: getInstallCountsCachePath, loadInstallCountsCache, saveInstallCountsCache, fetchInstallCountsFromGitHub, getInstallCounts, formatInstallCount

## src/utils/plugins/installedPluginsManager.ts

- lines: 1269
- imports: 16
- exports: 25
- importance: 58
- tags: state-memory
- exportedSymbols: getInstalledPluginsFilePath, getInstalledPluginsV2FilePath, clearInstalledPluginsCache, migrateToSinglePluginFile, resetMigrationState, loadInstalledPluginsV2, addPluginInstallation, removePluginInstallation, getInMemoryInstalledPlugins, loadInstalledPluginsFromDisk, updateInstallationPathOnDisk, hasPendingUpdates, getPendingUpdateCount, getPendingUpdatesDetails, resetInMemoryState, initializeVersionedPlugins, removeAllPluginsForMarketplace, isInstallationRelevantToCurrentProject, isPluginInstalled, isPluginGloballyInstalled, addInstalledPlugin, removeInstalledPlugin, deletePluginCache, migrateFromEnabledPlugins, PersistableScope
- functions: getInstalledPluginsFilePath, getInstalledPluginsV2FilePath, clearInstalledPluginsCache, migrateToSinglePluginFile, removes, cleanupLegacyCache, resetMigrationState, readInstalledPluginsFileRaw, migrateV1ToV2, loadInstalledPluginsV2, saveInstalledPluginsV2, addPluginInstallation, removePluginInstallation, getInMemoryInstalledPlugins, loadInstalledPluginsFromDisk, updateInstallationPathOnDisk, hasPendingUpdates, getPendingUpdateCount, getPendingUpdatesDetails, resetInMemoryState, initializeVersionedPlugins, removeAllPluginsForMarketplace, isInstallationRelevantToCurrentProject, isPluginInstalled, isPluginGloballyInstalled, addInstalledPlugin, only, removeInstalledPlugin, deletePluginCache, getGitCommitSha, getPluginVersionFromManifest, migrateFromEnabledPlugins

## src/utils/plugins/loadPluginAgents.ts

- lines: 349
- imports: 19
- exports: 2
- importance: 43
- tags: permissions, mcp, tools
- exportedSymbols: clearPluginAgentCache, loadPluginAgents
- functions: loadAgentsFromDirectory, loadAgentFromFile, clearPluginAgentCache

## src/utils/plugins/loadPluginCommands.ts

- lines: 947
- imports: 19
- exports: 4
- importance: 54
- tags: permissions, tools, state-memory
- exportedSymbols: clearPluginCommandCache, clearPluginSkillsCache, getPluginCommands, getPluginSkills
- functions: isSkillFile, getCommandNameFromFile, collectMarkdownFiles, transformPluginSkillFiles, loadCommandsFromDirectory, createPluginCommand, clearPluginCommandCache, loadSkillsFromDirectory, clearPluginSkillsCache

## src/utils/plugins/loadPluginHooks.ts

- lines: 288
- imports: 10
- exports: 6
- importance: 50
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: clearPluginHookCache, pruneRemovedPluginHooks, resetHotReloadState, getPluginAffectingSettingsSnapshot, setupPluginHookHotReload, loadPluginHooks
- functions: convertPluginHooksToMatchers, clearPluginHookCache, pruneRemovedPluginHooks, resetHotReloadState, getPluginAffectingSettingsSnapshot, setupPluginHookHotReload

## src/utils/plugins/loadPluginOutputStyles.ts

- lines: 179
- imports: 10
- exports: 2
- importance: 31
- tags: (none)
- exportedSymbols: clearPluginOutputStyleCache, loadPluginOutputStyles
- functions: loadOutputStylesFromDirectory, loadOutputStyleFromFile, clearPluginOutputStyleCache

## src/utils/plugins/lspPluginIntegration.ts

- lines: 388
- imports: 13
- exports: 5
- importance: 39
- tags: mcp
- exportedSymbols: loadPluginLspServers, resolvePluginLspEnvironment, addPluginScopeToLspServers, getPluginLspServers, extractLspServersFromPlugins
- functions: validatePathWithinPlugin, loadPluginLspServers, loadLspServersFromManifest, resolvePluginLspEnvironment, addPluginScopeToLspServers, is, getPluginLspServers, extractLspServersFromPlugins

## src/utils/plugins/lspRecommendation.ts

- lines: 375
- imports: 7
- exports: 6
- importance: 38
- tags: (none)
- exportedSymbols: getMatchingLspPlugins, addToNeverSuggest, incrementIgnoredCount, isLspRecommendationsDisabled, resetIgnoredCount, LspPluginRecommendation
- functions: isOfficialMarketplace, extractLspInfoFromManifest, isRecord, extractFromServerConfigRecord, getLspPluginsFromMarketplaces, getMatchingLspPlugins, addToNeverSuggest, incrementIgnoredCount, isLspRecommendationsDisabled, resetIgnoredCount

## src/utils/plugins/managedPlugins.ts

- lines: 28
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: getManagedPluginNames
- functions: getManagedPluginNames

## src/utils/plugins/marketplaceHelpers.ts

- lines: 593
- imports: 8
- exports: 15
- importance: 48
- tags: (none)
- exportedSymbols: formatFailureDetails, getMarketplaceSourceDisplay, createPluginId, loadMarketplacesWithGracefulDegradation, formatMarketplaceLoadingErrors, getStrictKnownMarketplaces, getBlockedMarketplaces, getPluginTrustMessage, extractHostFromSource, getHostPatternsFromAllowlist, isSourceInBlocklist, isSourceAllowedByPolicy, formatSourceForDisplay, detectEmptyMarketplaceReason, EmptyMarketplaceReason
- functions: formatFailureDetails, getMarketplaceSourceDisplay, createPluginId, loadMarketplacesWithGracefulDegradation, formatMarketplaceLoadingErrors, formatFailureNames, formatFailureErrors, getStrictKnownMarketplaces, getBlockedMarketplaces, getPluginTrustMessage, areSourcesEqual, extractHostFromSource, doesSourceMatchHostPattern, doesSourceMatchPathPattern, getHostPatternsFromAllowlist, extractGitHubRepoFromGitUrl, blockedConstraintMatches, areSourcesEquivalentForBlocklist, isSourceInBlocklist, isSourceAllowedByPolicy, formatSourceForDisplay, detectEmptyMarketplaceReason

## src/utils/plugins/marketplaceManager.ts

- lines: 2644
- imports: 27
- exports: 25
- importance: 95
- tags: auth, permissions
- exportedSymbols: getMarketplacesCacheDir, clearMarketplacesCache, getDeclaredMarketplaces, getMarketplaceDeclaringSource, saveMarketplaceToSettings, loadKnownMarketplacesConfig, loadKnownMarketplacesConfigSafe, saveKnownMarketplacesConfig, registerSeedMarketplaces, gitPull, gitClone, reconcileSparseCheckout, addMarketplaceSource, removeMarketplaceSource, getMarketplaceCacheOnly, getPluginByIdCacheOnly, getPluginById, refreshAllMarketplaces, refreshMarketplace, setMarketplaceAutoUpdate, getMarketplace, _test, KnownMarketplacesConfig, DeclaredMarketplace, MarketplaceProgressCallback
- functions: instead, getKnownMarketplacesFile, instead, getMarketplacesCacheDir, to, clearMarketplacesCache, getDeclaredMarketplaces, getMarketplaceDeclaringSource, saveMarketplaceToSettings, loadKnownMarketplacesConfig, loadKnownMarketplacesConfigSafe, already, saveKnownMarketplacesConfig, registerSeedMarketplaces, readSeedKnownMarketplaces, findSeedMarketplaceLocation, seedDirFor, getPluginGitTimeoutMs, gitPull, gitSubmoduleUpdate, enhanceGitPullErrorMessages, isGitHubSshLikelyConfigured, isAuthenticationError, extractSshHost, gitClone, safeCallProgress, reconcileSparseCheckout, cacheMarketplaceFromGit, redactHeaders, redactUrlCredentials, cacheMarketplaceFromUrl, getCachePathForSource, parseFileWithSchema, loadAndCacheMarketplace, addMarketplaceSource, removeMarketplaceSource, readCachedMarketplace, getMarketplaceCacheOnly, getPluginByIdCacheOnly, getPluginById

## src/utils/plugins/mcpbHandler.ts

- lines: 969
- imports: 17
- exports: 12
- importance: 77
- tags: auth, permissions, mcp, cost-budget
- exportedSymbols: isMcpbSource, loadMcpServerUserConfig, saveMcpServerUserConfig, validateUserConfig, checkMcpbChanged, loadMcpbFile, UserConfigValues, UserConfigSchema, McpbLoadResult, McpbNeedsConfigResult, McpbCacheMetadata, ProgressCallback
- functions: isMcpbSource, isUrl, generateContentHash, getMcpbCacheDir, getMetadataPath, serverSecretsKey, loadMcpServerUserConfig, saveMcpServerUserConfig, validateUserConfig, generateMcpConfig, loadCacheMetadata, saveCacheMetadata, downloadMcpb, extractMcpbContents, checkMcpbChanged, loadMcpbFile

## src/utils/plugins/mcpPluginIntegration.ts

- lines: 635
- imports: 11
- exports: 7
- importance: 46
- tags: mcp
- exportedSymbols: loadPluginMcpServers, getUnconfiguredChannels, addPluginScopeToServers, extractMcpServersFromPlugins, resolvePluginMcpEnvironment, getPluginMcpServers, UnconfiguredChannel
- functions: loadMcpServersFromMcpb, loads, loadPluginMcpServers, loadMcpServersFromFile, getUnconfiguredChannels, loadChannelUserConfig, addPluginScopeToServers, extractMcpServersFromPlugins, buildMcpUserConfig, resolvePluginMcpEnvironment, is, getPluginMcpServers, runs

## src/utils/plugins/officialMarketplace.ts

- lines: 26
- imports: 1
- exports: 2
- importance: 20
- tags: (none)
- exportedSymbols: OFFICIAL_MARKETPLACE_SOURCE, OFFICIAL_MARKETPLACE_NAME

## src/utils/plugins/officialMarketplaceGcs.ts

- lines: 217
- imports: 9
- exports: 2
- importance: 40
- tags: permissions, tools
- exportedSymbols: fetchOfficialMarketplaceFromGcs, classifyGcsError
- functions: fetchOfficialMarketplaceFromGcs, does, so, classifyGcsError

## src/utils/plugins/officialMarketplaceStartupCheck.ts

- lines: 440
- imports: 13
- exports: 5
- importance: 40
- tags: state-memory
- exportedSymbols: isOfficialMarketplaceAutoInstallDisabled, checkAndInstallOfficialMarketplace, RETRY_CONFIG, OfficialMarketplaceSkipReason, OfficialMarketplaceCheckResult
- functions: isOfficialMarketplaceAutoInstallDisabled, calculateNextRetryDelay, shouldRetryInstallation, is, checkAndInstallOfficialMarketplace

## src/utils/plugins/orphanedPluginFilter.ts

- lines: 115
- imports: 3
- exports: 2
- importance: 23
- tags: tools, state-memory
- exportedSymbols: getGlobExclusionsForPluginCache, clearPluginCacheExclusions
- functions: getGlobExclusionsForPluginCache, clearPluginCacheExclusions, pathsOverlap, normalizeForCompare

## src/utils/plugins/parseMarketplaceInput.ts

- lines: 163
- imports: 5
- exports: 1
- importance: 24
- tags: (none)
- exportedSymbols: parseMarketplaceInput
- functions: parseMarketplaceInput

## src/utils/plugins/performStartupChecks.tsx

- lines: 70
- imports: 6
- exports: 1
- importance: 23
- tags: mcp
- exportedSymbols: performStartupChecks
- functions: starts, is, performStartupChecks

## src/utils/plugins/pluginAutoupdate.ts

- lines: 285
- imports: 9
- exports: 5
- importance: 37
- tags: (none)
- exportedSymbols: onPluginsAutoUpdated, getAutoUpdatedPluginNames, updatePluginsForMarketplaces, autoUpdateMarketplacesAndPluginsInBackground, PluginAutoUpdateCallback
- functions: onPluginsAutoUpdated, getAutoUpdatedPluginNames, getAutoUpdateEnabledMarketplaces, updatePlugin, updatePluginsForMarketplaces, updatePlugins, runs, autoUpdateMarketplacesAndPluginsInBackground

## src/utils/plugins/pluginBlocklist.ts

- lines: 128
- imports: 7
- exports: 2
- importance: 27
- tags: (none)
- exportedSymbols: detectDelistedPlugins, detectAndUninstallDelistedPlugins
- functions: detectDelistedPlugins, detectAndUninstallDelistedPlugins

## src/utils/plugins/pluginDirectories.ts

- lines: 179
- imports: 9
- exports: 6
- importance: 48
- tags: permissions, mcp, state-memory
- exportedSymbols: getPluginsDirectory, getPluginSeedDirs, pluginDataDirPath, getPluginDataDir, getPluginDataDirSize, deletePluginDataDir
- classes: as
- functions: getPluginsDirectoryName, getPluginsDirectory, getPluginSeedDirs, sanitizePluginId, pluginDataDirPath, getPluginDataDir, getPluginDataDirSize, deletePluginDataDir

## src/utils/plugins/pluginFlagging.ts

- lines: 209
- imports: 8
- exports: 6
- importance: 37
- tags: (none)
- exportedSymbols: loadFlaggedPlugins, getFlaggedPlugins, addFlaggedPlugin, markFlaggedPluginsSeen, removeFlaggedPlugin, FlaggedPlugin
- functions: getFlaggedPluginsPath, parsePluginsData, readFromDisk, writeToDisk, loadFlaggedPlugins, getFlaggedPlugins, addFlaggedPlugin, markFlaggedPluginsSeen, removeFlaggedPlugin

## src/utils/plugins/pluginIdentifier.ts

- lines: 124
- imports: 2
- exports: 9
- importance: 36
- tags: state-memory
- exportedSymbols: parsePluginIdentifier, buildPluginId, isOfficialMarketplaceName, scopeToSettingSource, settingSourceToScope, SETTING_SOURCE_TO_SCOPE, ExtendedPluginScope, PersistablePluginScope, ParsedPluginIdentifier
- functions: parsePluginIdentifier, buildPluginId, isOfficialMarketplaceName, scopeToSettingSource, settingSourceToScope

## src/utils/plugins/pluginInstallationHelpers.ts

- lines: 596
- imports: 21
- exports: 12
- importance: 50
- tags: mcp
- exportedSymbols: getCurrentTimestamp, validatePathWithinBase, cacheAndRegisterPlugin, registerPluginInstallation, parsePluginId, formatResolutionError, installResolvedPlugin, installPluginFromMarketplace, PluginInstallationInfo, InstallCoreResult, InstallPluginResult, InstallPluginParams
- functions: getCurrentTimestamp, validatePathWithinBase, combines, cacheAndRegisterPlugin, registerPluginInstallation, parsePluginId, formatResolutionError, installResolvedPlugin, installPluginFromMarketplace

## src/utils/plugins/pluginLoader.ts

- lines: 3303
- imports: 34
- exports: 21
- importance: 73
- tags: mcp, tools, commands, state-memory
- exportedSymbols: getPluginCachePath, getVersionedCachePathIn, getVersionedCachePath, getVersionedZipCachePath, probeSeedCacheAnyVersion, getLegacyCachePath, resolvePluginPath, copyDir, copyPluginToVersionedCache, installFromNpm, gitClone, installFromGitSubdir, generateTemporaryCacheNameForPlugin, cachePlugin, loadPluginManifest, createPluginFromPath, mergePluginSources, clearPluginCache, cachePluginSettings, loadAllPlugins, loadAllPluginsCacheOnly
- functions: getPluginCachePath, getVersionedCachePathIn, getVersionedCachePath, getVersionedZipCachePath, probeSeedCache, probeSeedCacheAnyVersion, getLegacyCachePath, resolvePluginPath, copyDir, copyPluginToVersionedCache, validateGitUrl, installFromNpm, gitClone, installFromGit, installFromGitHub, resolveGitSubdirUrl, installFromGitSubdir, installFromLocal, generateTemporaryCacheNameForPlugin, cachePlugin, loadPluginManifest, if, loadPluginHooks, validatePluginPaths, that, is, createPluginFromPath, parsePluginSettings, loadPluginSettings, mergeHooksSettings, loadPluginsFromMarketplaces, loadPluginFromMarketplaceEntryCacheOnly, loadPluginFromMarketplaceEntry, finishLoadingPluginFromPath, loadSessionOnlyPlugins, mergePluginSources, that, is, assemblePluginLoadResult, clearPluginCache

## src/utils/plugins/pluginOptionsStorage.ts

- lines: 401
- imports: 8
- exports: 11
- importance: 46
- tags: mcp, tools, state-memory
- exportedSymbols: getPluginStorageId, clearPluginOptionsCache, savePluginOptions, deletePluginOptions, getUnconfiguredOptions, substitutePluginVariables, substituteUserConfigVariables, substituteUserConfigInContent, loadPluginOptions, PluginOptionValues, PluginOptionSchema
- functions: getPluginStorageId, clearPluginOptionsCache, savePluginOptions, deletePluginOptions, getUnconfiguredOptions, substitutePluginVariables, substituteUserConfigVariables, substituteUserConfigInContent

## src/utils/plugins/pluginPolicy.ts

- lines: 21
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: isPluginBlockedByPolicy
- functions: isPluginBlockedByPolicy

## src/utils/plugins/pluginStartupCheck.ts

- lines: 342
- imports: 12
- exports: 8
- importance: 45
- tags: state-memory
- exportedSymbols: checkEnabledPlugins, getPluginEditableScopes, isPersistableScope, settingSourceToScope, getInstalledPlugins, findMissingPlugins, installSelectedPlugins, PluginInstallResult
- functions: checkEnabledPlugins, getPluginEditableScopes, isPersistableScope, settingSourceToScope, getInstalledPlugins, findMissingPlugins, installSelectedPlugins

## src/utils/plugins/pluginVersioning.ts

- lines: 158
- imports: 4
- exports: 4
- importance: 28
- tags: (none)
- exportedSymbols: calculatePluginVersion, getGitCommitSha, getVersionFromPath, isVersionedPath
- functions: calculatePluginVersion, getGitCommitSha, getVersionFromPath, isVersionedPath

## src/utils/plugins/reconciler.ts

- lines: 266
- imports: 10
- exports: 6
- importance: 40
- tags: state-memory
- exportedSymbols: diffMarketplaces, reconcileMarketplaces, MarketplaceDiff, ReconcileOptions, ReconcileProgressEvent, ReconcileResult
- functions: diffMarketplaces, reconcileMarketplaces, normalizeSource

## src/utils/plugins/refresh.ts

- lines: 216
- imports: 17
- exports: 2
- importance: 31
- tags: mcp, tools, state-memory
- exportedSymbols: refreshActivePlugins, RefreshActivePluginsResult
- functions: refreshActivePlugins, mergePluginErrors, errorKey

## src/utils/plugins/schemas.ts

- lines: 1682
- imports: 4
- exports: 45
- importance: 70
- tags: auth, mcp, tools, commands, state-memory
- exportedSymbols: isMarketplaceAutoUpdate, isBlockedOfficialName, validateOfficialNameSource, isLocalPluginSource, isLocalMarketplaceSource, ALLOWED_OFFICIAL_MARKETPLACE_NAMES, BLOCKED_OFFICIAL_NAME_PATTERN, OFFICIAL_GITHUB_ORG, PluginAuthorSchema, PluginHooksSchema, CommandMetadataSchema, LspServerConfigSchema, PluginManifestSchema, MarketplaceSourceSchema, gitSha, PluginSourceSchema, PluginMarketplaceEntrySchema, PluginMarketplaceSchema, PluginIdSchema, DependencyRefSchema, SettingsPluginEntrySchema, InstalledPluginSchema, InstalledPluginsFileSchemaV1, PluginScopeSchema, PluginInstallationEntrySchema, InstalledPluginsFileSchemaV2, InstalledPluginsFileSchema, KnownMarketplaceSchema, KnownMarketplacesFileSchema, CommandMetadata, MarketplaceSource, PluginAuthor, PluginSource, PluginManifest, PluginManifestChannel, PluginMarketplace, PluginMarketplaceEntry, PluginId, InstalledPlugin, InstalledPluginsFileV1
- functions: isMarketplaceAutoUpdate, isBlockedOfficialName, validateOfficialNameSource, provides, isLocalPluginSource, isLocalMarketplaceSource

## src/utils/plugins/validatePlugin.ts

- lines: 904
- imports: 9
- exports: 7
- importance: 59
- tags: permissions, tools
- exportedSymbols: validatePluginManifest, validateMarketplaceManifest, validatePluginContents, validateManifest, ValidationResult, ValidationError, ValidationWarning
- functions: detectManifestType, formatZodErrors, checkPathTraversal, marketplaceSourceHint, validatePluginManifest, validateMarketplaceManifest, validateComponentFile, validateHooksJson, collectMarkdown, validatePluginContents, validateManifest

## src/utils/plugins/walkPluginMarkdown.ts

- lines: 70
- imports: 3
- exports: 1
- importance: 20
- tags: (none)
- exportedSymbols: walkPluginMarkdown
- functions: walkPluginMarkdown, scan

## src/utils/plugins/zipCache.ts

- lines: 407
- imports: 10
- exports: 15
- importance: 58
- tags: permissions, state-memory
- exportedSymbols: isPluginZipCacheEnabled, getPluginZipCachePath, getZipCacheKnownMarketplacesPath, getZipCacheInstalledPluginsPath, getZipCacheMarketplacesDir, getZipCachePluginsDir, getSessionPluginCachePath, cleanupSessionPluginCache, resetSessionPluginCache, atomicWriteToZipCache, createZipFromDirectory, extractZipToDirectory, convertDirectoryToZipInPlace, getMarketplaceJsonRelativePath, isMarketplaceSourceSupportedByZipCache
- functions: isPluginZipCacheEnabled, getPluginZipCachePath, getZipCacheKnownMarketplacesPath, getZipCacheInstalledPluginsPath, getZipCacheMarketplacesDir, getZipCachePluginsDir, getSessionPluginCachePath, cleanupSessionPluginCache, resetSessionPluginCache, atomicWriteToZipCache, createZipFromDirectory, collectFilesForZip, extractZipToDirectory, convertDirectoryToZipInPlace, getMarketplaceJsonRelativePath, isMarketplaceSourceSupportedByZipCache

## src/utils/plugins/zipCacheAdapters.ts

- lines: 165
- imports: 7
- exports: 5
- importance: 34
- tags: state-memory
- exportedSymbols: readZipCacheKnownMarketplaces, writeZipCacheKnownMarketplaces, readMarketplaceJson, saveMarketplaceJsonToZipCache, syncMarketplacesToZipCache
- functions: readZipCacheKnownMarketplaces, writeZipCacheKnownMarketplaces, readMarketplaceJson, saveMarketplaceJsonToZipCache, readMarketplaceJsonContent, syncMarketplacesToZipCache

## src/utils/powershell/dangerousCmdlets.ts

- lines: 186
- imports: 2
- exports: 8
- importance: 45
- tags: permissions, state-memory
- exportedSymbols: FILEPATH_EXECUTION_CMDLETS, DANGEROUS_SCRIPT_BLOCK_CMDLETS, MODULE_LOADING_CMDLETS, NETWORK_CMDLETS, ALIAS_HIJACK_CMDLETS, WMI_CIM_CMDLETS, ARG_GATED_CMDLETS, NEVER_SUGGEST
- functions: aliasesOf

## src/utils/powershell/parser.ts

- lines: 1805
- imports: 5
- exports: 34
- importance: 82
- tags: auth, permissions, tools, state-memory, cost-budget
- exportedSymbols: mapStatementType, mapElementType, classifyCommandName, stripModulePrefix, transformCommandAst, transformExpressionElement, transformRedirection, transformStatement, getAllCommandNames, getAllCommands, getAllRedirections, getVariablesByScope, hasCommandNamed, hasDirectoryChange, isSingleCommand, commandHasArg, isPowerShellParameter, commandHasArgAbbreviation, getPipelineSegments, isNullRedirectionTarget, getFileRedirections, deriveSecurityFlags, PARSE_SCRIPT_BODY, WINDOWS_MAX_COMMAND_LENGTH, MAX_COMMAND_LENGTH, COMMON_ALIASES, PS_TOKENIZER_DASH_CHARS, CommandElementChild, ParsedCommandElement, ParsedPowerShellCommand, RawCommandElement, RawRedirection, RawPipelineElement, RawStatement
- functions: getParseTimeoutMs, Get, Get, Get, Process, makeInvalidResult, toUtf16LeBase64, buildParseScript, ensureArray, mapStatementType, mapElementType, classifyCommandName, stripModulePrefix, transformCommandAst, transformExpressionElement, transformRedirection, transformStatement, transformRawOutput, parsePowerShellCommandImpl, getAllCommandNames, getAllCommands, getAllRedirections, getVariablesByScope, hasCommandNamed, hasDirectoryChange, isSingleCommand, commandHasArg, isPowerShellParameter, commandHasArgAbbreviation, getPipelineSegments, isNullRedirectionTarget, getFileRedirections, walks, deriveSecurityFlags, checkElements, exports

## src/utils/powershell/staticPrefix.ts

- lines: 317
- imports: 5
- exports: 2
- importance: 37
- tags: permissions, tools
- exportedSymbols: getCommandPrefixStatic, getCompoundCommandPrefixesStatic
- functions: extractPrefixFromElement, getCommandPrefixStatic, getCompoundCommandPrefixesStatic, wordAlignedLCP

## src/utils/preflightChecks.tsx

- lines: 151
- imports: 11
- exports: 2
- importance: 42
- tags: auth
- exportedSymbols: PreflightStep, PreflightCheckResult
- functions: checkEndpoints, PreflightStep, run, _temp

## src/utils/privacyLevel.ts

- lines: 56
- imports: 0
- exports: 4
- importance: 23
- tags: (none)
- exportedSymbols: getPrivacyLevel, isEssentialTrafficOnly, isTelemetryDisabled, getEssentialTrafficOnlyReason
- functions: getPrivacyLevel, isEssentialTrafficOnly, isTelemetryDisabled, getEssentialTrafficOnlyReason

## src/utils/process.ts

- lines: 69
- imports: 0
- exports: 5
- importance: 25
- tags: (none)
- exportedSymbols: registerProcessOutputErrorHandlers, writeToStdout, writeToStderr, exitWithError, peekForStdinData
- functions: handleEPIPE, registerProcessOutputErrorHandlers, writeOut, writeToStdout, writeToStderr, exitWithError, peekForStdinData

## src/utils/processUserInput/processBashCommand.tsx

- lines: 140
- imports: 16
- exports: 1
- importance: 28
- tags: tools
- exportedSymbols: processBashCommand
- functions: processBashCommand

## src/utils/processUserInput/processSlashCommand.tsx

- lines: 922
- imports: 48
- exports: 4
- importance: 66
- tags: auth, permissions, mcp, tools, commands, state-memory, cost-budget
- exportedSymbols: looksLikeCommand, processSlashCommand, formatSkillLoadingMetadata, processPromptSlashCommand
- functions: executeForkedSlashCommand, looksLikeCommand, processSlashCommand, getMessagesForSlashCommand, formatCommandInput, formatSkillLoadingMetadata, formatSlashCommandLoadingMetadata, formatCommandLoadingMetadata, processPromptSlashCommand, getMessagesForPromptSlashCommand

## src/utils/processUserInput/processTextPrompt.ts

- lines: 101
- imports: 10
- exports: 1
- importance: 38
- tags: permissions, state-memory
- exportedSymbols: processTextPrompt
- functions: processTextPrompt

## src/utils/processUserInput/processUserInput.ts

- lines: 606
- imports: 25
- exports: 3
- importance: 48
- tags: permissions, bridge, tools, commands, state-memory
- exportedSymbols: processUserInput, ProcessUserInputContext, ProcessUserInputBaseResult
- functions: processUserInput, applyTruncation, processUserInputBase, addImageMetadataMessage

## src/utils/profilerBase.ts

- lines: 47
- imports: 2
- exports: 3
- importance: 23
- tags: (none)
- exportedSymbols: getPerformance, formatMs, formatTimelineLine
- functions: getPerformance, formatMs, formatTimelineLine

## src/utils/promptCategory.ts

- lines: 50
- imports: 3
- exports: 2
- importance: 22
- tags: (none)
- exportedSymbols: getQuerySourceForAgent, getQuerySourceForREPL
- functions: getQuerySourceForAgent, getQuerySourceForREPL

## src/utils/promptEditor.ts

- lines: 189
- imports: 9
- exports: 3
- importance: 32
- tags: (none)
- exportedSymbols: editFileInEditor, editPromptInEditor, EditorResult
- functions: isGuiEditor, editFileInEditor, recollapsePastedContent, editPromptInEditor

## src/utils/promptShellExecution.ts

- lines: 184
- imports: 10
- exports: 1
- importance: 39
- tags: permissions, tools
- exportedSymbols: executeShellCommandsInPrompt
- functions: executeShellCommandsInPrompt, formatBashOutput, formatBashError

## src/utils/proxy.ts

- lines: 427
- imports: 10
- exports: 14
- importance: 48
- tags: remote, mcp
- topComment: @aws-sdk/credential-provider-node and @smithy/node-http-handler are imported
- exportedSymbols: disableKeepAlive, _resetKeepAliveForTesting, getAddressFamily, getProxyUrl, getNoProxy, shouldBypassProxy, createAxiosInstance, getWebSocketProxyAgent, getWebSocketProxyUrl, getProxyFetchOptions, configureGlobalAgents, getAWSClientProxyConfig, clearProxyCache, getProxyAgent
- functions: disableKeepAlive, _resetKeepAliveForTesting, getAddressFamily, getProxyUrl, getNoProxy, shouldBypassProxy, createHttpsProxyAgent, createAxiosInstance, getWebSocketProxyAgent, getWebSocketProxyUrl, getProxyFetchOptions, configureGlobalAgents, getAWSClientProxyConfig, clearProxyCache

## src/utils/queryContext.ts

- lines: 180
- imports: 14
- exports: 2
- importance: 51
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: fetchSystemPromptParts, buildSideQuestionFallbackParams
- functions: fetchSystemPromptParts, buildSideQuestionFallbackParams

## src/utils/QueryGuard.ts

- lines: 122
- imports: 1
- exports: 1
- importance: 29
- tags: query-loop
- exportedSymbols: QueryGuard
- classes: QueryGuard

## src/utils/queryHelpers.ts

- lines: 553
- imports: 25
- exports: 4
- importance: 71
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: isResultSuccessful, extractReadFilesFromMessages, extractBashToolsFromMessages, PermissionPromptTool
- functions: isResultSuccessful, to, extractReadFilesFromMessages, extractBashToolsFromMessages, extractCliName

## src/utils/queryProfiler.ts

- lines: 302
- imports: 3
- exports: 4
- importance: 51
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: startQueryProfile, queryCheckpoint, endQueryProfile, logQueryProfileReport
- functions: startQueryProfile, queryCheckpoint, endQueryProfile, getSlowWarning, getQueryProfileReport, getPhaseSummary, logQueryProfileReport

## src/utils/queueProcessor.ts

- lines: 96
- imports: 2
- exports: 2
- importance: 22
- tags: commands
- exportedSymbols: processQueueIfReady, hasQueuedCommands
- functions: isSlashCommand, again, processQueueIfReady, hasQueuedCommands

## src/utils/readEditContext.ts

- lines: 228
- imports: 2
- exports: 7
- importance: 33
- tags: tools
- exportedSymbols: readEditContext, openForScan, scanForContext, readCapped, CHUNK_SIZE, MAX_SCAN_BYTES, EditContext
- functions: readEditContext, openForScan, scanForContext, readCapped, indexOfWithin, countNewlines, normalizeCRLF, sliceContext

## src/utils/readFileInRange.ts

- lines: 384
- imports: 3
- exports: 3
- importance: 28
- tags: tools, cost-budget
- topComment: ---------------------------------------------------------------------------
- exportedSymbols: readFileInRange, FileTooLargeError, ReadFileRangeResult
- classes: FileTooLargeError
- functions: readFileInRange, readFileInRangeFast, tryPush, streamOnOpen, streamOnData, streamOnEnd, readFileInRangeStreaming

## src/utils/releaseNotes.ts

- lines: 361
- imports: 11
- exports: 11
- importance: 47
- tags: state-memory
- exportedSymbols: _resetChangelogCacheForTesting, migrateChangelogFromConfig, fetchAndStoreChangelog, getStoredChangelog, getStoredChangelogFromMemory, parseChangelog, getRecentReleaseNotes, getAllReleaseNotes, checkForReleaseNotes, checkForReleaseNotesSync, CHANGELOG_URL
- functions: getChangelogCachePath, _resetChangelogCacheForTesting, migrateChangelogFromConfig, fetchAndStoreChangelog, getStoredChangelog, getStoredChangelogFromMemory, parseChangelog, getRecentReleaseNotes, getAllReleaseNotes, checkForReleaseNotes, checkForReleaseNotesSync

## src/utils/renderOptions.ts

- lines: 78
- imports: 5
- exports: 1
- importance: 22
- tags: mcp
- exportedSymbols: getBaseRenderOptions
- functions: getStdinOverride, getBaseRenderOptions

## src/utils/ripgrep.ts

- lines: 680
- imports: 15
- exports: 6
- importance: 55
- tags: permissions
- exportedSymbols: ripgrepCommand, ripGrepStream, ripGrep, getRipgrepStatus, RipgrepTimeoutError, countFilesRoundedRg
- classes: for, RipgrepTimeoutError
- functions: ripgrepCommand, isEagainError, ripGrepRaw, ripGrepFileCount, ripGrepStream, ripGrep, getRipgrepStatus, codesignRipgrepIfNecessary

## src/utils/sandbox/sandbox-adapter.ts

- lines: 986
- imports: 23
- exports: 7
- importance: 61
- tags: permissions, bridge, tools, state-memory
- exportedSymbols: resolvePathPatternForSandbox, resolveSandboxFilesystemPath, shouldAllowManagedSandboxDomainsOnly, convertToSandboxRuntimeConfig, addToExcludedCommands, SandboxManager, ISandboxManager
- functions: permissionRuleValueFromString, permissionRuleExtractPrefix, only, resolvePathPatternForSandbox, resolveSandboxFilesystemPath, shouldAllowManagedSandboxDomainsOnly, shouldAllowManagedReadPathsOnly, convertToSandboxRuntimeConfig, scrubBareGitRepoFiles, detectWorktreeMainRepoPath, getSandboxEnabledSetting, isAutoAllowBashIfSandboxedEnabled, areUnsandboxedCommandsAllowed, isSandboxRequired, isPlatformInEnabledList, isSandboxingEnabled, getSandboxUnavailableReason, getLinuxGlobPatternWarnings, areSandboxSettingsLockedByPolicy, setSandboxSettings, getExcludedCommands, wrapWithSandbox, initialize, refreshConfig, reset, that, addToExcludedCommands

## src/utils/sandbox/sandbox-ui-utils.ts

- lines: 13
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: removeSandboxViolationTags
- functions: removeSandboxViolationTags

## src/utils/sanitization.ts

- lines: 92
- imports: 0
- exports: 6
- importance: 28
- tags: mcp
- exportedSymbols: partiallySanitizeUnicode, recursivelySanitizeUnicode, recursivelySanitizeUnicode, recursivelySanitizeUnicode, recursivelySanitizeUnicode, recursivelySanitizeUnicode
- functions: partiallySanitizeUnicode, recursivelySanitizeUnicode, recursivelySanitizeUnicode, recursivelySanitizeUnicode, recursivelySanitizeUnicode, recursivelySanitizeUnicode

## src/utils/screenshotClipboard.ts

- lines: 122
- imports: 7
- exports: 1
- importance: 25
- tags: (none)
- exportedSymbols: copyAnsiToClipboard
- classes: PNGf
- functions: copyAnsiToClipboard, copyPngToClipboard

## src/utils/sdkEventQueue.ts

- lines: 135
- imports: 4
- exports: 4
- importance: 50
- tags: auth, bridge, query-loop, tools, state-memory
- exportedSymbols: enqueueSdkEvent, drainSdkEvents, emitTaskTerminatedSdk, SdkEvent
- functions: enqueueSdkEvent, drainSdkEvents, emitTaskTerminatedSdk

## src/utils/secureStorage/fallbackStorage.ts

- lines: 71
- imports: 1
- exports: 1
- importance: 30
- tags: auth
- exportedSymbols: createFallbackStorage
- functions: createFallbackStorage

## src/utils/secureStorage/index.ts

- lines: 18
- imports: 4
- exports: 1
- importance: 21
- tags: (none)
- exportedSymbols: getSecureStorage
- functions: getSecureStorage

## src/utils/secureStorage/keychainPrefetch.ts

- lines: 117
- imports: 3
- exports: 4
- importance: 39
- tags: auth
- exportedSymbols: startKeychainPrefetch, ensureKeychainPrefetchCompleted, getLegacyApiKeyPrefetchResult, clearLegacyApiKeyPrefetch
- functions: spawnSecurity, startKeychainPrefetch, ensureKeychainPrefetchCompleted, getLegacyApiKeyPrefetchResult, clearLegacyApiKeyPrefetch

## src/utils/secureStorage/macOsKeychainHelpers.ts

- lines: 112
- imports: 5
- exports: 7
- importance: 47
- tags: auth, mcp
- exportedSymbols: getMacOsKeychainStorageServiceName, getUsername, clearKeychainCache, primeKeychainCacheFromPrefetch, CREDENTIALS_SERVICE_SUFFIX, KEYCHAIN_CACHE_TTL_MS, keychainCacheState
- functions: getMacOsKeychainStorageServiceName, getUsername, clearKeychainCache, primeKeychainCacheFromPrefetch

## src/utils/secureStorage/macOsKeychainStorage.ts

- lines: 232
- imports: 7
- exports: 2
- importance: 28
- tags: state-memory
- exportedSymbols: isMacOsKeychainLocked, macOsKeychainStorage
- functions: doReadAsync, isMacOsKeychainLocked

## src/utils/secureStorage/plainTextStorage.ts

- lines: 85
- imports: 7
- exports: 1
- importance: 25
- tags: (none)
- exportedSymbols: plainTextStorage
- functions: getStoragePath

## src/utils/semanticBoolean.ts

- lines: 30
- imports: 1
- exports: 1
- importance: 18
- tags: tools
- exportedSymbols: semanticBoolean
- functions: semanticBoolean

## src/utils/semanticNumber.ts

- lines: 37
- imports: 1
- exports: 1
- importance: 18
- tags: tools
- exportedSymbols: semanticNumber
- functions: semanticNumber

## src/utils/semver.ts

- lines: 60
- imports: 0
- exports: 6
- importance: 27
- tags: (none)
- exportedSymbols: gt, gte, lt, lte, satisfies, order
- functions: getNpmSemver, gt, gte, lt, lte, satisfies, order

## src/utils/sequential.ts

- lines: 57
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: sequential
- functions: are, to, that, sequential, processQueue

## src/utils/sessionActivity.ts

- lines: 134
- imports: 3
- exports: 7
- importance: 33
- tags: tools, state-memory
- exportedSymbols: registerSessionActivityCallback, unregisterSessionActivityCallback, sendSessionActivitySignal, isSessionActivityTrackingActive, startSessionActivity, stopSessionActivity, SessionActivityReason
- functions: startHeartbeatTimer, startIdleTimer, clearIdleTimer, registerSessionActivityCallback, unregisterSessionActivityCallback, sendSessionActivitySignal, isSessionActivityTrackingActive, startSessionActivity, stopSessionActivity

## src/utils/sessionEnvironment.ts

- lines: 167
- imports: 7
- exports: 5
- importance: 34
- tags: state-memory
- exportedSymbols: getSessionEnvDirPath, getHookEnvFilePath, clearCwdEnvFiles, invalidateSessionEnvCache, getSessionEnvironmentScript
- functions: getSessionEnvDirPath, getHookEnvFilePath, clearCwdEnvFiles, invalidateSessionEnvCache, getSessionEnvironmentScript, sortHookEnvFiles

## src/utils/sessionEnvVars.ts

- lines: 23
- imports: 0
- exports: 4
- importance: 23
- tags: state-memory
- exportedSymbols: getSessionEnvVars, setSessionEnvVar, deleteSessionEnvVar, clearSessionEnvVars
- functions: getSessionEnvVars, setSessionEnvVar, deleteSessionEnvVar, clearSessionEnvVars

## src/utils/sessionFileAccessHooks.ts

- lines: 251
- imports: 17
- exports: 2
- importance: 32
- tags: tools, state-memory
- exportedSymbols: isMemoryFileAccess, registerSessionFileAccessHooks
- functions: getFilePathFromInput, getSessionFileTypeFromInput, isMemoryFileAccess, handleSessionFileAccess, registerSessionFileAccessHooks

## src/utils/sessionIngressAuth.ts

- lines: 141
- imports: 5
- exports: 3
- importance: 39
- tags: auth, bridge, remote, state-memory
- exportedSymbols: getSessionIngressAuthToken, getSessionIngressAuthHeaders, updateSessionIngressAuthToken
- functions: getTokenFromFileDescriptor, getSessionIngressAuthToken, getSessionIngressAuthHeaders, updateSessionIngressAuthToken

## src/utils/sessionRestore.ts

- lines: 552
- imports: 31
- exports: 9
- importance: 59
- tags: query-loop, tools, commands, state-memory
- exportedSymbols: restoreSessionStateFromLog, computeRestoredAttributionState, computeStandaloneAgentContext, restoreAgentFromSession, refreshAgentDefinitionsForModeSwitch, restoreWorktreeForResume, exitRestoredWorktree, processResumedConversation, ProcessedResume
- functions: extractTodosFromTranscript, restoreSessionStateFromLog, computeRestoredAttributionState, computeStandaloneAgentContext, restoreAgentFromSession, refreshAgentDefinitionsForModeSwitch, restoreWorktreeForResume, exitRestoredWorktree, processResumedConversation

## src/utils/sessionStart.ts

- lines: 233
- imports: 11
- exports: 3
- importance: 43
- tags: permissions, tools, state-memory
- exportedSymbols: takeInitialUserMessage, processSessionStartHooks, processSetupHooks
- functions: takeInitialUserMessage, processSessionStartHooks, is, processSetupHooks

## src/utils/sessionState.ts

- lines: 151
- imports: 3
- exports: 10
- importance: 57
- tags: permissions, bridge, query-loop, tools, commands, state-memory
- exportedSymbols: setSessionStateChangedListener, setSessionMetadataChangedListener, setPermissionModeChangedListener, getSessionState, notifySessionStateChanged, notifySessionMetadataChanged, notifyPermissionModeChanged, SessionState, RequiresActionDetails, SessionExternalMetadata
- functions: setSessionStateChangedListener, setSessionMetadataChangedListener, setPermissionModeChangedListener, getSessionState, notifySessionStateChanged, notifySessionMetadataChanged, notifyPermissionModeChanged

## src/utils/sessionStorage.ts

- lines: 5106
- imports: 42
- exports: 94
- importance: 95
- tags: auth, bridge, mcp, query-loop, tools, commands, state-memory, cost-budget
- exportedSymbols: isTranscriptMessage, isChainParticipant, isEphemeralToolProgress, getProjectsDir, getTranscriptPath, getTranscriptPathForSession, setAgentTranscriptSubdir, clearAgentTranscriptSubdir, getAgentTranscriptPath, writeAgentMetadata, readAgentMetadata, writeRemoteAgentMetadata, readRemoteAgentMetadata, deleteRemoteAgentMetadata, listRemoteAgentMetadata, sessionIdExists, getNodeEnv, getUserType, isCustomTitleEnabled, resetProjectFlushStateForTesting, resetProjectForTesting, setSessionFileForTesting, setInternalEventWriter, setInternalEventReader, setRemoteIngressUrlForTesting, recordTranscript, recordSidechainTranscript, recordQueueOperation, removeTranscriptMessage, recordFileHistorySnapshot, recordAttributionSnapshot, recordContentReplacement, resetSessionFilePointer, adoptResumedSessionFile, recordContextCollapseCommit, recordContextCollapseSnapshot, flushSessionStorage, hydrateRemoteSession, hydrateFromCCRv2InternalEvents, getFirstMeaningfulUserMessageTextContent
- classes: Project, of
- functions: isTranscriptMessage, isChainParticipant, isLegacyProgressEntry, isEphemeralToolProgress, getProjectsDir, getTranscriptPath, getTranscriptPathForSession, just, setAgentTranscriptSubdir, clearAgentTranscriptSubdir, getAgentTranscriptPath, getAgentMetadataPath, writeAgentMetadata, readAgentMetadata, getRemoteAgentsDir, getRemoteAgentMetadataPath, writeRemoteAgentMetadata, readRemoteAgentMetadata, deleteRemoteAgentMetadata, listRemoteAgentMetadata, sessionIdExists, getNodeEnv, getUserType, getEntrypoint, isCustomTitleEnabled, getProject, resetProjectFlushStateForTesting, resetProjectForTesting, setSessionFileForTesting, setInternalEventWriter, setInternalEventReader, setRemoteIngressUrlForTesting, recordTranscript, recordSidechainTranscript, recordQueueOperation, removeTranscriptMessage, recordFileHistorySnapshot, recordAttributionSnapshot, recordContentReplacement, resetSessionFilePointer

## src/utils/sessionStoragePortable.ts

- lines: 794
- imports: 6
- exports: 18
- importance: 48
- tags: tools, state-memory
- exportedSymbols: validateUuid, unescapeJsonString, extractJsonStringField, extractLastJsonStringField, extractFirstPromptFromHead, readHeadAndTail, readSessionLite, sanitizePath, getProjectsDir, getProjectDir, canonicalizePath, findProjectDir, resolveSessionFilePath, readTranscriptForLoad, LITE_READ_BUF_SIZE, MAX_SANITIZED_LENGTH, SKIP_PRECOMPACT_THRESHOLD, LiteSessionFile
- functions: validateUuid, unescapeJsonString, extractJsonStringField, extractLastJsonStringField, extractFirstPromptFromHead, readHeadAndTail, readSessionLite, simpleHash, sanitizePath, getProjectsDir, getProjectDir, canonicalizePath, falls, findProjectDir, resolveSessionFilePath, compactBoundaryMarker, parseBoundaryLine, sinkWrite, hasPrefix, processStraddle, scanChunkLines, captureSnap, captureCarry, finalizeOutput, readTranscriptForLoad

## src/utils/sessionTitle.ts

- lines: 130
- imports: 10
- exports: 2
- importance: 42
- tags: auth, mcp, tools, state-memory
- exportedSymbols: extractConversationText, generateSessionTitle
- functions: extractConversationText, generateSessionTitle

## src/utils/sessionUrl.ts

- lines: 65
- imports: 2
- exports: 2
- importance: 21
- tags: state-memory
- exportedSymbols: parseSessionIdentifier, ParsedSessionUrl
- functions: parseSessionIdentifier

## src/utils/set.ts

- lines: 54
- imports: 0
- exports: 4
- importance: 23
- tags: (none)
- exportedSymbols: difference, intersects, every, union
- functions: difference, intersects, every, union

## src/utils/settings/allErrors.ts

- lines: 33
- imports: 3
- exports: 1
- importance: 20
- tags: mcp
- exportedSymbols: getSettingsWithAllErrors
- functions: getSettingsWithAllErrors

## src/utils/settings/applySettingsChange.ts

- lines: 93
- imports: 8
- exports: 1
- importance: 36
- tags: permissions, tools, state-memory
- exportedSymbols: applySettingsChange
- functions: reset, applySettingsChange

## src/utils/settings/changeDetector.ts

- lines: 489
- imports: 16
- exports: 6
- importance: 53
- tags: permissions, state-memory
- exportedSymbols: initialize, dispose, notifyChange, resetForTesting, subscribe, settingsChangeDetector
- functions: initialize, dispose, getWatchTargets, settingSourceToConfigChangeSource, handleChange, handleAdd, handleDelete, getSourceForPath, startMdmPoll, fanOut, notifyChange, resetForTesting

## src/utils/settings/constants.ts

- lines: 203
- imports: 1
- exports: 12
- importance: 46
- tags: permissions, state-memory
- exportedSymbols: getSettingSourceName, getSourceDisplayName, getSettingSourceDisplayNameLowercase, getSettingSourceDisplayNameCapitalized, parseSettingSourcesFlag, getEnabledSettingSources, isSettingSourceEnabled, SETTING_SOURCES, SOURCES, CLAUDE_CODE_SETTINGS_SCHEMA_URL, SettingSource, EditableSettingSource
- functions: getSettingSourceName, getSourceDisplayName, getSettingSourceDisplayNameLowercase, getSettingSourceDisplayNameCapitalized, parseSettingSourcesFlag, getEnabledSettingSources, isSettingSourceEnabled

## src/utils/settings/internalWrites.ts

- lines: 38
- imports: 0
- exports: 3
- importance: 21
- tags: (none)
- exportedSymbols: markInternalWrite, consumeInternalWrite, clearInternalWrites
- functions: markInternalWrite, consumeInternalWrite, clearInternalWrites

## src/utils/settings/managedPath.ts

- lines: 35
- imports: 3
- exports: 2
- importance: 22
- tags: (none)
- exportedSymbols: getManagedFilePath, getManagedSettingsDropInDir

## src/utils/settings/mdm/constants.ts

- lines: 82
- imports: 2
- exports: 8
- importance: 34
- tags: (none)
- exportedSymbols: getMacOSPlistPaths, MACOS_PREFERENCE_DOMAIN, WINDOWS_REGISTRY_KEY_PATH_HKLM, WINDOWS_REGISTRY_KEY_PATH_HKCU, WINDOWS_REGISTRY_VALUE_NAME, PLUTIL_PATH, PLUTIL_ARGS_PREFIX, MDM_SUBPROCESS_TIMEOUT_MS
- functions: getMacOSPlistPaths

## src/utils/settings/mdm/rawRead.ts

- lines: 131
- imports: 3
- exports: 4
- importance: 27
- tags: (none)
- exportedSymbols: fireRawRead, startMdmRawRead, getMdmRawReadPromise, RawReadResult
- functions: execFilePromise, fireRawRead, startMdmRawRead, getMdmRawReadPromise

## src/utils/settings/mdm/settings.ts

- lines: 317
- imports: 12
- exports: 9
- importance: 56
- tags: permissions, state-memory
- exportedSymbols: startMdmSettingsLoad, ensureMdmSettingsLoaded, getMdmSettings, getHkcuSettings, clearMdmSettingsCache, setMdmSettingsCache, refreshMdmSettings, parseCommandOutputAsSettings, parseRegQueryStdout
- functions: startMdmSettingsLoad, ensureMdmSettingsLoaded, getMdmSettings, getHkcuSettings, clearMdmSettingsCache, setMdmSettingsCache, refreshMdmSettings, parseCommandOutputAsSettings, parseRegQueryStdout, consumeRawReadResult, hasManagedSettingsFile

## src/utils/settings/permissionValidation.ts

- lines: 263
- imports: 6
- exports: 2
- importance: 38
- tags: permissions, mcp, tools
- exportedSymbols: validatePermissionRule, PermissionRuleSchema
- functions: isEscaped, countUnescapedChar, hasUnescapedEmptyParens, validatePermissionRule

## src/utils/settings/pluginOnlyPolicy.ts

- lines: 61
- imports: 2
- exports: 3
- importance: 23
- tags: mcp
- exportedSymbols: isRestrictedToPluginOnly, isSourceAdminTrusted, CustomizationSurface
- functions: isRestrictedToPluginOnly, isSourceAdminTrusted

## src/utils/settings/schemaOutput.ts

- lines: 9
- imports: 3
- exports: 1
- importance: 20
- tags: (none)
- exportedSymbols: generateSettingsJSONSchema
- functions: generateSettingsJSONSchema

## src/utils/settings/settings.ts

- lines: 1016
- imports: 27
- exports: 21
- importance: 65
- tags: permissions, tools, state-memory
- exportedSymbols: loadManagedFileSettings, getManagedFileSettingsPresence, parseSettingsFile, getSettingsRootPathForSource, getSettingsFilePathForSource, getRelativeSettingsFilePathForSource, getSettingsForSource, getPolicySettingsOrigin, updateSettingsForSource, settingsMergeCustomizer, getManagedSettingsKeysForLogging, getInitialSettings, getSettingsWithSources, getSettingsWithErrors, hasSkipDangerousModePermissionPrompt, hasAutoModeOptIn, getUseAutoModeDuringPlan, getAutoModeConfig, rawSettingsContainsKey, getSettings_DEPRECATED, SettingsWithSources
- functions: getManagedSettingsFilePath, loadManagedFileSettings, getManagedFileSettingsPresence, handleFileSystemError, parseSettingsFile, parseSettingsFileUncached, getSettingsRootPathForSource, getUserSettingsFilePath, getSettingsFilePathForSource, getRelativeSettingsFilePathForSource, getSettingsForSource, getSettingsForSourceUncached, getPolicySettingsOrigin, updateSettingsForSource, for, mergeArrays, for, settingsMergeCustomizer, getManagedSettingsKeysForLogging, loadSettingsFromDisk, returns, getInitialSettings, getSettingsWithSources, now, getSettingsWithErrors, hasSkipDangerousModePermissionPrompt, hasAutoModeOptIn, getUseAutoModeDuringPlan, getAutoModeConfig, rawSettingsContainsKey

## src/utils/settings/settingsCache.ts

- lines: 81
- imports: 3
- exports: 10
- importance: 37
- tags: state-memory
- exportedSymbols: getSessionSettingsCache, setSessionSettingsCache, getCachedSettingsForSource, setCachedSettingsForSource, getCachedParsedFile, setCachedParsedFile, resetSettingsCache, getPluginSettingsBase, setPluginSettingsBase, clearPluginSettingsBase
- functions: getSessionSettingsCache, setSessionSettingsCache, getCachedSettingsForSource, setCachedSettingsForSource, getCachedParsedFile, setCachedParsedFile, resetSettingsCache, getPluginSettingsBase, setPluginSettingsBase, clearPluginSettingsBase

## src/utils/settings/toolValidationConfig.ts

- lines: 104
- imports: 0
- exports: 5
- importance: 36
- tags: permissions, tools
- exportedSymbols: isFilePatternTool, isBashPrefixTool, getCustomValidation, TOOL_VALIDATION_CONFIG, ToolValidationConfig
- functions: isFilePatternTool, isBashPrefixTool, getCustomValidation

## src/utils/settings/types.ts

- lines: 1149
- imports: 11
- exports: 17
- importance: 79
- tags: auth, permissions, mcp, tools, state-memory
- exportedSymbols: isMcpServerNameEntry, isMcpServerCommandEntry, isMcpServerUrlEntry, EnvironmentVariablesSchema, PermissionsSchema, ExtraKnownMarketplaceSchema, AllowedMcpServerEntrySchema, DeniedMcpServerEntrySchema, CUSTOMIZATION_SURFACES, SettingsSchema, PluginHookMatcher, SkillHookMatcher, AllowedMcpServerEntry, DeniedMcpServerEntry, SettingsJson, UserConfigValues, PluginConfig
- functions: isMcpServerNameEntry, isMcpServerCommandEntry, isMcpServerUrlEntry

## src/utils/settings/validateEditTool.ts

- lines: 46
- imports: 3
- exports: 1
- importance: 30
- tags: permissions, tools
- exportedSymbols: validateInputForSettingsFileEdit
- functions: validateInputForSettingsFileEdit

## src/utils/settings/validation.ts

- lines: 266
- imports: 9
- exports: 6
- importance: 49
- tags: permissions, mcp
- exportedSymbols: formatZodError, validateSettingsFileContent, filterInvalidPermissionRules, FieldPath, ValidationError, SettingsWithErrors
- functions: isInvalidTypeIssue, isInvalidValueIssue, isUnrecognizedKeysIssue, isTooSmallIssue, getReceivedType, extractReceivedFromMessage, formatZodError, validateSettingsFileContent, filterInvalidPermissionRules

## src/utils/settings/validationTips.ts

- lines: 165
- imports: 1
- exports: 3
- importance: 46
- tags: auth, permissions, tools, state-memory
- exportedSymbols: getValidationTip, ValidationTip, TipContext
- functions: getValidationTip

## src/utils/Shell.ts

- lines: 475
- imports: 30
- exports: 7
- importance: 54
- tags: permissions, tools, state-memory
- exportedSymbols: findSuitableShell, exec, setCwd, getShellConfig, getPsProvider, ShellConfig, ExecOptions
- functions: isExecutable, findSuitableShell, getShellConfigImpl, exec, setCwd

## src/utils/shell/bashProvider.ts

- lines: 256
- imports: 17
- exports: 1
- importance: 30
- tags: tools, state-memory
- exportedSymbols: createBashShellProvider
- functions: getDisableExtglobCommand, createBashShellProvider

## src/utils/shell/outputLimits.ts

- lines: 15
- imports: 1
- exports: 3
- importance: 22
- tags: (none)
- exportedSymbols: getMaxOutputLength, BASH_MAX_OUTPUT_UPPER_LIMIT, BASH_MAX_OUTPUT_DEFAULT
- functions: getMaxOutputLength

## src/utils/shell/powershellDetection.ts

- lines: 108
- imports: 3
- exports: 5
- importance: 29
- tags: tools
- exportedSymbols: findPowerShell, getCachedPowerShellPath, getPowerShellEdition, resetPowerShellCache, PowerShellEdition
- functions: probePath, findPowerShell, getCachedPowerShellPath, getPowerShellEdition, resetPowerShellCache

## src/utils/shell/powershellProvider.ts

- lines: 124
- imports: 5
- exports: 2
- importance: 25
- tags: tools, state-memory
- exportedSymbols: buildPowerShellArgs, createPowerShellProvider
- functions: buildPowerShellArgs, encodePowerShellCommand, createPowerShellProvider

## src/utils/shell/prefix.ts

- lines: 368
- imports: 9
- exports: 5
- importance: 48
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: createCommandPrefixExtractor, createSubcommandPrefixExtractor, CommandPrefixResult, CommandSubcommandPrefixResult, PrefixExtractorConfig
- functions: that, creates, that, createCommandPrefixExtractor, to, that, createSubcommandPrefixExtractor, getCommandPrefixImpl, getCommandSubcommandPrefixImpl

## src/utils/shell/readOnlyCommandValidation.ts

- lines: 1894
- imports: 1
- exports: 12
- importance: 79
- tags: auth, permissions, tools
- exportedSymbols: containsVulnerableUncPath, validateFlagArgument, validateFlags, GIT_READ_ONLY_COMMANDS, GH_READ_ONLY_COMMANDS, DOCKER_READ_ONLY_COMMANDS, RIPGREP_READ_ONLY_COMMANDS, PYRIGHT_READ_ONLY_COMMANDS, EXTERNAL_READONLY_COMMANDS, FLAG_PATTERN, FlagArgType, ExternalCommandConfig
- functions: ghIsDangerousCallback, detects, containsVulnerableUncPath, validateFlagArgument, validateFlags

## src/utils/shell/resolveDefaultShell.ts

- lines: 15
- imports: 1
- exports: 1
- importance: 18
- tags: (none)
- exportedSymbols: resolveDefaultShell
- functions: resolveDefaultShell

## src/utils/shell/shellProvider.ts

- lines: 34
- imports: 0
- exports: 4
- importance: 23
- tags: state-memory
- exportedSymbols: SHELL_TYPES, DEFAULT_HOOK_SHELL, ShellType, ShellProvider

## src/utils/shell/shellToolUtils.ts

- lines: 23
- imports: 4
- exports: 2
- importance: 33
- tags: permissions, tools
- exportedSymbols: isPowerShellToolEnabled, SHELL_TOOL_NAMES
- functions: isPowerShellToolEnabled

## src/utils/shell/specPrefix.ts

- lines: 242
- imports: 1
- exports: 2
- importance: 23
- tags: tools
- exportedSymbols: buildPrefix, DEPTH_RULES
- functions: isKnownSubcommand, flagTakesArg, findFirstSubcommand, buildPrefix, calculateDepth, shouldStopAtArg

## src/utils/ShellCommand.ts

- lines: 466
- imports: 8
- exports: 5
- importance: 38
- tags: (none)
- exportedSymbols: wrapSpawn, createAbortedCommand, createFailedCommand, ExecResult, ShellCommand
- classes: StreamWrapper, ShellCommandImpl, AbortedShellCommand
- functions: prependStderr, wrapSpawn, createAbortedCommand, createFailedCommand

## src/utils/shellConfig.ts

- lines: 168
- imports: 5
- exports: 7
- importance: 36
- tags: (none)
- exportedSymbols: getShellConfigPaths, filterClaudeAliases, readFileLines, writeFileLines, findClaudeAlias, findValidClaudeAlias, CLAUDE_ALIAS_REGEX
- functions: getShellConfigPaths, filterClaudeAliases, readFileLines, writeFileLines, findClaudeAlias, findValidClaudeAlias

## src/utils/sideQuery.ts

- lines: 223
- imports: 13
- exports: 2
- importance: 53
- tags: auth, permissions, tools, state-memory, cost-budget
- exportedSymbols: sideQuery, SideQueryOptions
- functions: extractFirstUserMessageText, sideQuery

## src/utils/sideQuestion.ts

- lines: 156
- imports: 5
- exports: 3
- importance: 37
- tags: query-loop, tools
- exportedSymbols: findBtwTriggerPositions, runSideQuestion, SideQuestionResult
- functions: findBtwTriggerPositions, runSideQuestion, extractSideQuestionResponse

## src/utils/signal.ts

- lines: 44
- imports: 0
- exports: 3
- importance: 21
- tags: (none)
- exportedSymbols: createSignal, subscribe, Signal
- functions: subscribe, notify, createSignal

## src/utils/sinks.ts

- lines: 17
- imports: 2
- exports: 1
- importance: 19
- tags: bridge
- exportedSymbols: initSinks
- functions: initSinks

## src/utils/skills/skillChangeDetector.ts

- lines: 312
- imports: 12
- exports: 5
- importance: 48
- tags: permissions, state-memory
- exportedSymbols: initialize, dispose, resetForTesting, subscribe, skillChangeDetector
- functions: initialize, dispose, getWatchablePaths, handleChange, scheduleReload, resetForTesting

## src/utils/slashCommandParsing.ts

- lines: 61
- imports: 0
- exports: 2
- importance: 19
- tags: mcp, tools, commands
- exportedSymbols: parseSlashCommand, ParsedSlashCommand
- functions: parseSlashCommand

## src/utils/sleep.ts

- lines: 85
- imports: 0
- exports: 2
- importance: 20
- tags: (none)
- exportedSymbols: sleep, withTimeout
- functions: sleep, onAbort, rejectWithTimeout, withTimeout

## src/utils/sliceAnsi.ts

- lines: 92
- imports: 2
- exports: 1
- importance: 32
- tags: auth
- exportedSymbols: default
- functions: isEndCode, filterStartCodes, sliceAnsi

## src/utils/slowOperations.ts

- lines: 287
- imports: 6
- exports: 9
- importance: 42
- tags: (none)
- exportedSymbols: callerFrame, jsonStringify, jsonStringify, jsonStringify, clone, cloneDeep, writeFileSync_DEPRECATED, slowLogging, jsonParse
- classes: AntSlowLogger
- functions: callerFrame, buildDescription, slowLoggingAnt, slowLoggingExternal, jsonStringify, jsonStringify, jsonStringify, clone, cloneDeep, writeFileSync_DEPRECATED

## src/utils/standaloneAgent.ts

- lines: 24
- imports: 2
- exports: 1
- importance: 19
- tags: state-memory
- exportedSymbols: getStandaloneAgentName
- functions: getStandaloneAgentName

## src/utils/startupProfiler.ts

- lines: 195
- imports: 8
- exports: 5
- importance: 35
- tags: state-memory
- exportedSymbols: profileCheckpoint, profileReport, isDetailedProfilingEnabled, getStartupPerfLogPath, logStartupPerf
- functions: profileCheckpoint, getReport, profileReport, isDetailedProfilingEnabled, getStartupPerfLogPath, logStartupPerf

## src/utils/staticRender.tsx

- lines: 116
- imports: 6
- exports: 2
- importance: 26
- tags: (none)
- exportedSymbols: renderToAnsiString, renderToString
- functions: RenderOnceAndExit, extractFirstFrame, renderToAnsiString, renderToString

## src/utils/stats.ts

- lines: 1062
- imports: 14
- exports: 9
- importance: 78
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: aggregateClaudeCodeStats, aggregateClaudeCodeStatsForRange, readSessionStartDate, DailyActivity, DailyModelTokens, StreakInfo, SessionStats, ClaudeCodeStats, StatsDateRange
- functions: processSessionFiles, getAllSessionFiles, cacheToStats, aggregateClaudeCodeStats, aggregateClaudeCodeStatsForRange, processedStatsToClaudeCodeStats, getNextDay, calculateStreaks, extractShotCountFromMessages, readSessionStartDate, getEmptyStats

## src/utils/statsCache.ts

- lines: 435
- imports: 12
- exports: 11
- importance: 60
- tags: auth, tools, state-memory
- exportedSymbols: withStatsCacheLock, getStatsCachePath, loadStatsCache, saveStatsCache, mergeCacheWithNewStats, toDateString, getTodayDateString, getYesterdayDateString, isDateBefore, STATS_CACHE_VERSION, PersistedStatsCache
- functions: while, withStatsCacheLock, getStatsCachePath, getEmptyCache, migrateStatsCache, loadStatsCache, saveStatsCache, mergeCacheWithNewStats, toDateString, getTodayDateString, getYesterdayDateString, isDateBefore

## src/utils/status.tsx

- lines: 362
- imports: 22
- exports: 12
- importance: 69
- tags: auth, permissions, mcp
- exportedSymbols: buildSandboxProperties, buildIDEProperties, buildMcpProperties, buildMemoryDiagnostics, buildSettingSourcesProperties, buildInstallationDiagnostics, buildInstallationHealthDiagnostics, buildAccountProperties, buildAPIProviderProperties, getModelDisplayLabel, Property, Diagnostic
- functions: buildSandboxProperties, buildIDEProperties, buildMcpProperties, buildMemoryDiagnostics, buildSettingSourcesProperties, buildInstallationDiagnostics, buildInstallationHealthDiagnostics, buildAccountProperties, buildAPIProviderProperties, getModelDisplayLabel

## src/utils/statusNoticeDefinitions.tsx

- lines: 198
- imports: 13
- exports: 5
- importance: 49
- tags: auth, tools
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: getActiveNotices, statusNoticeDefinitions, StatusNoticeType, StatusNoticeContext, StatusNoticeDefinition
- functions: getActiveNotices

## src/utils/statusNoticeHelpers.ts

- lines: 21
- imports: 2
- exports: 2
- importance: 33
- tags: auth, tools
- exportedSymbols: getAgentDescriptionsTotalTokens, AGENT_DESCRIPTIONS_THRESHOLD
- functions: getAgentDescriptionsTotalTokens

## src/utils/stream.ts

- lines: 77
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: Stream
- classes: Stream

## src/utils/streamJsonStdoutGuard.ts

- lines: 124
- imports: 2
- exports: 3
- importance: 24
- tags: (none)
- exportedSymbols: installStreamJsonStdoutGuard, _resetStreamJsonStdoutGuardForTesting, STDOUT_GUARD_MARKER
- functions: isJsonLine, installStreamJsonStdoutGuard, _resetStreamJsonStdoutGuardForTesting

## src/utils/streamlinedTransform.ts

- lines: 202
- imports: 15
- exports: 2
- importance: 51
- tags: permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: createStreamlinedTransformer, shouldIncludeInStreamlined
- functions: categorizeToolName, createEmptyToolCounts, getToolSummaryText, accumulateToolUses, createStreamlinedTransformer, transformToStreamlined, shouldIncludeInStreamlined

## src/utils/stringUtils.ts

- lines: 236
- imports: 0
- exports: 10
- importance: 35
- tags: (none)
- exportedSymbols: escapeRegExp, capitalize, plural, firstLineOf, countCharInString, normalizeFullWidthDigits, normalizeFullWidthSpace, safeJoinLines, truncateToLines, EndTruncatingAccumulator
- classes: EndTruncatingAccumulator
- functions: escapeRegExp, capitalize, plural, firstLineOf, countCharInString, normalizeFullWidthDigits, normalizeFullWidthSpace, safeJoinLines, truncateToLines

## src/utils/subprocessEnv.ts

- lines: 100
- imports: 1
- exports: 2
- importance: 33
- tags: auth, mcp, tools, state-memory
- exportedSymbols: registerUpstreamProxyEnvFn, subprocessEnv
- functions: after, registerUpstreamProxyEnvFn, subprocessEnv

## src/utils/suggestions/commandSuggestions.ts

- lines: 568
- imports: 4
- exports: 9
- importance: 56
- tags: auth, commands, state-memory
- exportedSymbols: findMidInputSlashCommand, getBestCommandMatch, isCommandInput, hasCommandArgs, formatCommand, generateCommandSuggestions, applyCommandSuggestion, findSlashCommandPositions, MidInputSlashCommand
- functions: getCommandFuse, isCommandMetadata, findMidInputSlashCommand, getBestCommandMatch, isCommandInput, hasCommandArgs, formatCommand, getCommandId, findMatchedAlias, createCommandSuggestionItem, generateCommandSuggestions, applyCommandSuggestion, at, cleanWord, findSlashCommandPositions

## src/utils/suggestions/directoryCompletion.ts

- lines: 264
- imports: 7
- exports: 12
- importance: 55
- tags: auth
- exportedSymbols: parsePartialPath, scanDirectory, getDirectoryCompletions, clearDirectoryCache, isPathLikeToken, scanDirectoryForPaths, getPathCompletions, clearPathCache, DirectoryEntry, PathEntry, CompletionOptions, PathCompletionOptions
- functions: parsePartialPath, scanDirectory, to, getDirectoryCompletions, clearDirectoryCache, isPathLikeToken, scanDirectoryForPaths, getPathCompletions, clearPathCache

## src/utils/suggestions/shellHistoryCompletion.ts

- lines: 120
- imports: 2
- exports: 4
- importance: 26
- tags: (none)
- exportedSymbols: clearShellHistoryCache, prependToShellHistoryCache, getShellHistoryCompletion, ShellHistoryMatch
- functions: getShellHistoryCommands, clearShellHistoryCache, prependToShellHistoryCache, getShellHistoryCompletion

## src/utils/suggestions/skillUsageTracking.ts

- lines: 56
- imports: 1
- exports: 2
- importance: 20
- tags: (none)
- exportedSymbols: recordSkillUsage, getSkillUsageScore
- functions: recordSkillUsage, getSkillUsageScore

## src/utils/suggestions/slackChannelSuggestions.ts

- lines: 210
- imports: 7
- exports: 6
- importance: 48
- tags: auth, mcp, tools
- exportedSymbols: hasSlackMcpServer, getKnownChannelsVersion, findSlackChannelPositions, getSlackChannelSuggestions, clearSlackChannelCache, subscribeKnownChannels
- functions: findSlackClient, fetchChannels, unwrapResults, parseChannels, hasSlackMcpServer, getKnownChannelsVersion, findSlackChannelPositions, mcpQueryFor, findReusableCacheEntry, getSlackChannelSuggestions, clearSlackChannelCache

## src/utils/swarm/backends/detection.ts

- lines: 129
- imports: 3
- exports: 8
- importance: 35
- tags: tools, state-memory
- exportedSymbols: isInsideTmuxSync, isInsideTmux, getLeaderPaneId, isTmuxAvailable, isInITerm2, isIt2CliAvailable, resetDetectionCache, IT2_COMMAND
- functions: isInsideTmuxSync, isInsideTmux, getLeaderPaneId, isTmuxAvailable, isInITerm2, isIt2CliAvailable, resetDetectionCache

## src/utils/swarm/backends/InProcessBackend.ts

- lines: 340
- imports: 9
- exports: 2
- importance: 42
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: createInProcessBackend, InProcessBackend
- classes: InProcessBackend
- functions: const, to, createInProcessBackend

## src/utils/swarm/backends/it2Setup.ts

- lines: 246
- imports: 5
- exports: 11
- importance: 41
- tags: tools, state-memory
- exportedSymbols: detectPythonPackageManager, isIt2CliAvailable, installIt2, verifyIt2Setup, getPythonApiInstructions, markIt2SetupComplete, setPreferTmuxOverIterm2, getPreferTmuxOverIterm2, PythonPackageManager, It2InstallResult, It2VerifyResult
- functions: detectPythonPackageManager, isIt2CliAvailable, installIt2, verifyIt2Setup, getPythonApiInstructions, markIt2SetupComplete, setPreferTmuxOverIterm2, getPreferTmuxOverIterm2

## src/utils/swarm/backends/ITermBackend.ts

- lines: 371
- imports: 6
- exports: 1
- importance: 27
- tags: tools, state-memory
- exportedSymbols: ITermBackend
- classes: ITermBackend
- functions: that, acquirePaneCreationLock, runIt2, parseSplitOutput, getLeaderSessionId

## src/utils/swarm/backends/PaneBackendExecutor.ts

- lines: 355
- imports: 12
- exports: 2
- importance: 43
- tags: permissions, tools, state-memory
- exportedSymbols: createPaneBackendExecutor, PaneBackendExecutor
- classes: PaneBackendExecutor
- functions: createPaneBackendExecutor

## src/utils/swarm/backends/registry.ts

- lines: 465
- imports: 9
- exports: 13
- importance: 47
- tags: state-memory
- exportedSymbols: ensureBackendsRegistered, registerTmuxBackend, registerITermBackend, detectAndGetBackend, getBackendByType, getCachedBackend, getCachedDetectionResult, markInProcessFallback, isInProcessEnabled, getResolvedTeammateMode, getInProcessBackend, getTeammateExecutor, resetBackendDetection
- classes: with, with
- functions: ensureBackendsRegistered, registerTmuxBackend, registerITermBackend, createTmuxBackend, createITermBackend, detectAndGetBackend, getTmuxInstallInstructions, getBackendByType, getCachedBackend, getCachedDetectionResult, markInProcessFallback, getTeammateMode, isInProcessEnabled, getResolvedTeammateMode, getInProcessBackend, getTeammateExecutor, getPaneBackendExecutor, resetBackendDetection

## src/utils/swarm/backends/teammateModeSnapshot.ts

- lines: 88
- imports: 3
- exports: 6
- importance: 31
- tags: state-memory
- exportedSymbols: setCliTeammateModeOverride, getCliTeammateModeOverride, clearCliTeammateModeOverride, captureTeammateModeSnapshot, getTeammateModeFromSnapshot, TeammateMode
- functions: setCliTeammateModeOverride, getCliTeammateModeOverride, clearCliTeammateModeOverride, captureTeammateModeSnapshot, getTeammateModeFromSnapshot

## src/utils/swarm/backends/TmuxBackend.ts

- lines: 765
- imports: 10
- exports: 1
- importance: 36
- tags: tools, state-memory
- exportedSymbols: TmuxBackend
- classes: TmuxBackend
- functions: waitForPaneShellReady, that, acquirePaneCreationLock, getTmuxColorName, runTmuxInUserSession, runTmuxInSwarm

## src/utils/swarm/backends/types.ts

- lines: 312
- imports: 1
- exports: 12
- importance: 47
- tags: permissions, tools, state-memory
- exportedSymbols: isPaneBackend, BackendType, PaneBackendType, PaneId, CreatePaneResult, PaneBackend, BackendDetectionResult, TeammateIdentity, TeammateSpawnConfig, TeammateSpawnResult, TeammateMessage, TeammateExecutor
- functions: isPaneBackend

## src/utils/swarm/constants.ts

- lines: 34
- imports: 0
- exports: 9
- importance: 33
- tags: state-memory
- exportedSymbols: getSwarmSocketName, TEAM_LEAD_NAME, SWARM_SESSION_NAME, SWARM_VIEW_WINDOW_NAME, TMUX_COMMAND, HIDDEN_SESSION_NAME, TEAMMATE_COMMAND_ENV_VAR, TEAMMATE_COLOR_ENV_VAR, PLAN_MODE_REQUIRED_ENV_VAR
- functions: getSwarmSocketName

## src/utils/swarm/inProcessRunner.ts

- lines: 1553
- imports: 57
- exports: 4
- importance: 84
- tags: auth, permissions, bridge, mcp, query-loop, tools, state-memory
- exportedSymbols: runInProcessTeammate, startInProcessTeammate, InProcessRunnerConfig, InProcessRunnerResult
- functions: for, createInProcessCanUseTool, cleanup, formatAsTeammateMessage, updateTaskState, sendMessageToLeader, sendIdleNotification, findAvailableTask, formatTaskAsPrompt, tryClaimNextTask, waitForNextPromptOrShutdown, runInProcessTeammate, startInProcessTeammate

## src/utils/swarm/It2SetupPrompt.tsx

- lines: 380
- imports: 9
- exports: 1
- importance: 40
- tags: permissions, tools, state-memory
- exportedSymbols: It2SetupPrompt
- functions: It2SetupPrompt, handleInstall, handleUseTmux, renderInitialPrompt, renderInstalling, renderInstallFailed, renderApiInstructions, renderVerifying, renderSuccess, renderFailed, _temp

## src/utils/swarm/leaderPermissionBridge.ts

- lines: 55
- imports: 2
- exports: 8
- importance: 43
- tags: permissions, bridge, tools
- exportedSymbols: registerLeaderToolUseConfirmQueue, getLeaderToolUseConfirmQueue, unregisterLeaderToolUseConfirmQueue, registerLeaderSetToolPermissionContext, getLeaderSetToolPermissionContext, unregisterLeaderSetToolPermissionContext, SetToolUseConfirmQueueFn, SetToolPermissionContextFn
- functions: registerLeaderToolUseConfirmQueue, getLeaderToolUseConfirmQueue, unregisterLeaderToolUseConfirmQueue, registerLeaderSetToolPermissionContext, getLeaderSetToolPermissionContext, unregisterLeaderSetToolPermissionContext

## src/utils/swarm/permissionSync.ts

- lines: 929
- imports: 13
- exports: 24
- importance: 74
- tags: permissions, query-loop, tools
- exportedSymbols: getPermissionDir, generateRequestId, createPermissionRequest, writePermissionRequest, readPendingPermissions, readResolvedPermission, resolvePermission, cleanupOldResolutions, pollForResponse, removeWorkerResponse, isTeamLeader, isSwarmWorker, deleteResolvedPermission, getLeaderName, sendPermissionRequestViaMailbox, sendPermissionResponseViaMailbox, generateSandboxRequestId, sendSandboxPermissionRequestViaMailbox, sendSandboxPermissionResponseViaMailbox, SwarmPermissionRequestSchema, submitPermissionRequest, SwarmPermissionRequest, PermissionResolution, PermissionResponse
- functions: getPermissionDir, getPendingDir, getResolvedDir, ensurePermissionDirsAsync, getPendingRequestPath, getResolvedRequestPath, generateRequestId, createPermissionRequest, writePermissionRequest, readPendingPermissions, readResolvedPermission, resolvePermission, cleanupOldResolutions, pollForResponse, removeWorkerResponse, isTeamLeader, isSwarmWorker, deleteResolvedPermission, getLeaderName, sendPermissionRequestViaMailbox, sendPermissionResponseViaMailbox, generateSandboxRequestId, sendSandboxPermissionRequestViaMailbox, sendSandboxPermissionResponseViaMailbox

## src/utils/swarm/reconnection.ts

- lines: 120
- imports: 5
- exports: 2
- importance: 25
- tags: state-memory
- exportedSymbols: computeInitialTeamContext, initializeTeammateContextFromSession
- functions: computeInitialTeamContext, initializeTeammateContextFromSession

## src/utils/swarm/spawnInProcess.ts

- lines: 329
- imports: 17
- exports: 5
- importance: 61
- tags: auth, permissions, tools, state-memory
- exportedSymbols: spawnInProcessTeammate, killInProcessTeammate, SpawnContext, InProcessSpawnConfig, InProcessSpawnOutput
- functions: spawnInProcessTeammate, killInProcessTeammate

## src/utils/swarm/spawnUtils.ts

- lines: 147
- imports: 6
- exports: 3
- importance: 50
- tags: auth, permissions, state-memory
- exportedSymbols: getTeammateCommand, buildInheritedCliFlags, buildInheritedEnvVars
- functions: getTeammateCommand, buildInheritedCliFlags, buildInheritedEnvVars

## src/utils/swarm/teamHelpers.ts

- lines: 684
- imports: 17
- exports: 27
- importance: 61
- tags: permissions, tools, state-memory
- exportedSymbols: sanitizeName, sanitizeAgentName, getTeamDir, getTeamFilePath, readTeamFile, readTeamFileAsync, writeTeamFileAsync, removeTeammateFromTeamFile, addHiddenPaneId, removeHiddenPaneId, removeMemberFromTeam, removeMemberByAgentId, setMemberMode, syncTeammateMode, setMultipleMemberModes, setMemberActive, registerTeamForSessionCleanup, unregisterTeamForSessionCleanup, cleanupSessionTeams, cleanupTeamDirectories, inputSchema, SpawnTeamOutput, CleanupOutput, TeamAllowedPath, TeamFile, Input, Output
- functions: sanitizeName, sanitizeAgentName, getTeamDir, getTeamFilePath, readTeamFile, readTeamFileAsync, writeTeamFile, writeTeamFileAsync, removeTeammateFromTeamFile, addHiddenPaneId, removeHiddenPaneId, removeMemberFromTeam, removeMemberByAgentId, setMemberMode, syncTeammateMode, setMultipleMemberModes, setMemberActive, destroyWorktree, registerTeamForSessionCleanup, unregisterTeamForSessionCleanup, cleanupSessionTeams, killOrphanedTeammatePanes, cleanupTeamDirectories

## src/utils/swarm/teammateInit.ts

- lines: 130
- imports: 8
- exports: 1
- importance: 36
- tags: permissions, tools, state-memory
- exportedSymbols: initializeTeammateHooks
- functions: initializeTeammateHooks

## src/utils/swarm/teammateLayoutManager.ts

- lines: 108
- imports: 4
- exports: 7
- importance: 34
- tags: tools, state-memory
- exportedSymbols: assignTeammateColor, getTeammateColor, clearTeammateColors, isInsideTmux, createTeammatePaneInSwarmView, enablePaneBorderStatus, sendCommandToPane
- functions: getBackend, assignTeammateColor, getTeammateColor, clearTeammateColors, isInsideTmux, createTeammatePaneInSwarmView, enablePaneBorderStatus, sendCommandToPane

## src/utils/swarm/teammateModel.ts

- lines: 11
- imports: 2
- exports: 1
- importance: 19
- tags: (none)
- exportedSymbols: getHardcodedTeammateModelFallback
- functions: getHardcodedTeammateModelFallback

## src/utils/swarm/teammatePromptAddendum.ts

- lines: 19
- imports: 0
- exports: 1
- importance: 17
- tags: tools
- exportedSymbols: TEAMMATE_SYSTEM_PROMPT_ADDENDUM

## src/utils/systemDirectories.ts

- lines: 75
- imports: 4
- exports: 2
- importance: 23
- tags: (none)
- exportedSymbols: getSystemDirectories, SystemDirectories
- functions: getSystemDirectories

## src/utils/systemPrompt.ts

- lines: 124
- imports: 7
- exports: 1
- importance: 25
- tags: tools
- exportedSymbols: buildEffectiveSystemPrompt
- functions: isProactiveActive_SAFE_TO_CALL_ANYWHERE, buildEffectiveSystemPrompt

## src/utils/systemPromptType.ts

- lines: 15
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- exportedSymbols: asSystemPrompt, SystemPrompt
- functions: asSystemPrompt

## src/utils/systemTheme.ts

- lines: 120
- imports: 1
- exports: 5
- importance: 27
- tags: (none)
- exportedSymbols: getSystemThemeName, setCachedSystemTheme, resolveThemeSetting, themeFromOscColor, SystemTheme
- functions: getSystemThemeName, setCachedSystemTheme, resolveThemeSetting, themeFromOscColor, parseOscRgb, hexComponent, detectFromColorFgBg

## src/utils/taggedId.ts

- lines: 55
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: toTaggedId
- functions: base58Encode, uuidToBigInt, toTaggedId

## src/utils/task/diskOutput.ts

- lines: 452
- imports: 8
- exports: 16
- importance: 56
- tags: permissions, state-memory
- exportedSymbols: getTaskOutputDir, _resetTaskOutputDirForTest, getTaskOutputPath, _clearOutputsForTest, appendTaskOutput, flushTaskOutput, evictTaskOutput, getTaskOutputDelta, getTaskOutput, getTaskOutputSize, cleanupTaskOutput, initTaskOutput, initTaskOutputAsSymlink, DiskTaskOutput, MAX_TASK_OUTPUT_BYTES, MAX_TASK_OUTPUT_BYTES_DISPLAY
- classes: DiskTaskOutput
- functions: getTaskOutputDir, _resetTaskOutputDirForTest, ensureOutputDir, getTaskOutputPath, track, _clearOutputsForTest, getOrCreateOutput, appendTaskOutput, flushTaskOutput, evictTaskOutput, getTaskOutputDelta, getTaskOutput, getTaskOutputSize, cleanupTaskOutput, initTaskOutput, initTaskOutputAsSymlink

## src/utils/task/framework.ts

- lines: 309
- imports: 7
- exports: 11
- importance: 53
- tags: query-loop, tools, state-memory
- exportedSymbols: updateTaskState, registerTask, evictTerminalTask, getRunningTasks, generateTaskAttachments, applyTaskOffsetsAndEvictions, pollTasks, POLL_INTERVAL_MS, STOPPED_DISPLAY_MS, PANEL_GRACE_MS, TaskAttachment
- functions: for, updateTaskState, registerTask, evictTerminalTask, getRunningTasks, generateTaskAttachments, applyTaskOffsetsAndEvictions, pollTasks, enqueueTaskNotification, getStatusText

## src/utils/task/outputFormatting.ts

- lines: 39
- imports: 2
- exports: 4
- importance: 25
- tags: (none)
- exportedSymbols: getMaxTaskOutputLength, formatTaskOutput, TASK_MAX_OUTPUT_UPPER_LIMIT, TASK_MAX_OUTPUT_DEFAULT
- functions: getMaxTaskOutputLength, formatTaskOutput

## src/utils/task/sdkProgress.ts

- lines: 37
- imports: 2
- exports: 1
- importance: 41
- tags: auth, query-loop, tools
- exportedSymbols: emitTaskProgress
- functions: emitTaskProgress

## src/utils/task/TaskOutput.ts

- lines: 391
- imports: 7
- exports: 1
- importance: 28
- tags: tools, state-memory
- exportedSymbols: TaskOutput
- classes: TaskOutput

## src/utils/tasks.ts

- lines: 863
- imports: 15
- exports: 31
- importance: 53
- tags: tools, state-memory, cost-budget
- exportedSymbols: setLeaderTeamName, clearLeaderTeamName, notifyTasksUpdated, isTodoV2Enabled, resetTaskList, getTaskListId, sanitizePathComponent, getTasksDir, getTaskPath, ensureTasksDir, createTask, getTask, updateTask, deleteTask, listTasks, blockTask, claimTask, getAgentStatuses, unassignTeammateTasks, onTasksUpdated, TASK_STATUSES, TaskStatusSchema, TaskSchema, DEFAULT_TASKS_MODE_TASK_LIST_ID, TaskStatus, Task, ClaimTaskResult, ClaimTaskOptions, TeamMember, AgentStatus, UnassignTasksResult
- functions: setLeaderTeamName, clearLeaderTeamName, notifyTasksUpdated, getHighWaterMarkPath, readHighWaterMark, writeHighWaterMark, isTodoV2Enabled, resetTaskList, getTaskListId, sanitizePathComponent, getTasksDir, getTaskPath, ensureTasksDir, findHighestTaskIdFromFiles, findHighestTaskId, createTask, getTask, updateTaskUnsafe, updateTask, deleteTask, listTasks, blockTask, getTaskListLockPath, ensureTaskListLockFile, claimTask, claimTaskWithBusyCheck, sanitizeName, readTeamMembers, getAgentStatuses, unassignTeammateTasks

## src/utils/teamDiscovery.ts

- lines: 82
- imports: 2
- exports: 3
- importance: 34
- tags: permissions, state-memory
- exportedSymbols: getTeammateStatuses, TeamSummary, TeammateStatus
- functions: getTeammateStatuses

## src/utils/teammate.ts

- lines: 293
- imports: 3
- exports: 14
- importance: 39
- tags: state-memory
- topComment: Re-export in-process teammate utilities from teammateContext.ts
- exportedSymbols: getParentSessionId, setDynamicTeamContext, clearDynamicTeamContext, getDynamicTeamContext, getAgentId, getAgentName, getTeamName, isTeammate, getTeammateColor, isPlanModeRequired, isTeamLead, hasActiveInProcessTeammates, hasWorkingInProcessTeammates, waitForTeammatesToBecomeIdle
- functions: getParentSessionId, setDynamicTeamContext, clearDynamicTeamContext, getDynamicTeamContext, getAgentId, getAgentName, getTeamName, isTeammate, getTeammateColor, isPlanModeRequired, isTeamLead, hasActiveInProcessTeammates, hasWorkingInProcessTeammates, waitForTeammatesToBecomeIdle

## src/utils/teammateContext.ts

- lines: 97
- imports: 1
- exports: 5
- importance: 27
- tags: state-memory
- exportedSymbols: getTeammateContext, runWithTeammateContext, isInProcessTeammate, createTeammateContext, TeammateContext
- functions: getTeammateContext, with, to, runWithTeammateContext, isInProcessTeammate, createTeammateContext

## src/utils/teammateMailbox.ts

- lines: 1184
- imports: 20
- exports: 54
- importance: 77
- tags: permissions, query-loop, tools, state-memory
- exportedSymbols: getInboxPath, readMailbox, readUnreadMessages, writeToMailbox, markMessageAsReadByIndex, markMessagesAsRead, clearMailbox, formatTeammateMessages, createIdleNotification, isIdleNotification, createPermissionRequestMessage, createPermissionResponseMessage, isPermissionRequest, isPermissionResponse, createSandboxPermissionRequestMessage, createSandboxPermissionResponseMessage, isSandboxPermissionRequest, isSandboxPermissionResponse, createShutdownRequestMessage, createShutdownApprovedMessage, createShutdownRejectedMessage, sendShutdownRequestToMailbox, isShutdownRequest, isPlanApprovalRequest, isShutdownApproved, isShutdownRejected, isPlanApprovalResponse, isTaskAssignment, isTeamPermissionUpdate, createModeSetRequestMessage, isModeSetRequest, isStructuredProtocolMessage, markMessagesAsReadByPredicate, getLastPeerDmSummary, PlanApprovalRequestMessageSchema, PlanApprovalResponseMessageSchema, ShutdownRequestMessageSchema, ShutdownApprovedMessageSchema, ShutdownRejectedMessageSchema, ModeSetRequestMessageSchema
- functions: getInboxPath, ensureInboxDir, readMailbox, readUnreadMessages, writeToMailbox, markMessageAsReadByIndex, markMessagesAsRead, clearMailbox, formatTeammateMessages, createIdleNotification, isIdleNotification, createPermissionRequestMessage, createPermissionResponseMessage, isPermissionRequest, isPermissionResponse, createSandboxPermissionRequestMessage, createSandboxPermissionResponseMessage, isSandboxPermissionRequest, isSandboxPermissionResponse, createShutdownRequestMessage, createShutdownApprovedMessage, createShutdownRejectedMessage, sendShutdownRequestToMailbox, isShutdownRequest, isPlanApprovalRequest, isShutdownApproved, isShutdownRejected, isPlanApprovalResponse, isTaskAssignment, isTeamPermissionUpdate, createModeSetRequestMessage, isModeSetRequest, isStructuredProtocolMessage, markMessagesAsReadByPredicate, getLastPeerDmSummary

## src/utils/teamMemoryOps.ts

- lines: 89
- imports: 3
- exports: 3
- importance: 25
- tags: tools
- exportedSymbols: isTeamMemorySearch, isTeamMemoryWriteOrEdit, appendTeamMemorySummaryParts
- functions: isTeamMemorySearch, isTeamMemoryWriteOrEdit, appendTeamMemorySummaryParts

## src/utils/telemetry/betaSessionTracing.ts

- lines: 492
- imports: 9
- exports: 9
- importance: 58
- tags: query-loop, tools, state-memory
- exportedSymbols: clearBetaTracingState, isBetaTracingEnabled, truncateContent, addBetaInteractionAttributes, addBetaLLMRequestAttributes, addBetaLLMResponseAttributes, addBetaToolInputAttributes, addBetaToolResultAttributes, LLMRequestNewContext
- functions: clearBetaTracingState, isBetaTracingEnabled, truncateContent, shortHash, hashSystemPrompt, hashMessage, extractSystemReminderContent, formatMessagesForContext, addBetaInteractionAttributes, addBetaLLMRequestAttributes, addBetaLLMResponseAttributes, addBetaToolInputAttributes, addBetaToolResultAttributes

## src/utils/telemetry/bigqueryExporter.ts

- lines: 253
- imports: 14
- exports: 1
- importance: 30
- tags: state-memory
- exportedSymbols: BigQueryMetricsExporter
- classes: BigQueryMetricsExporter

## src/utils/telemetry/events.ts

- lines: 76
- imports: 5
- exports: 2
- importance: 24
- tags: state-memory
- exportedSymbols: redactIfDisabled, logOTelEvent
- functions: isUserPromptLoggingEnabled, redactIfDisabled, logOTelEvent

## src/utils/telemetry/instrumentation.ts

- lines: 826
- imports: 26
- exports: 5
- importance: 45
- tags: state-memory
- exportedSymbols: bootstrapTelemetry, parseExporterTypes, isTelemetryEnabled, initializeTelemetry, flushTelemetry
- classes: TelemetryTimeoutError
- functions: telemetryTimeout, bootstrapTelemetry, parseExporterTypes, getOtlpReaders, getOtlpLogExporters, getOtlpTraceExporters, isTelemetryEnabled, getBigQueryExportingReader, isBigQueryMetricsEnabled, initializeBetaTracing, initializeTelemetry, flushTelemetry, parseOtelHeadersEnvVar, getOTLPExporterConfig, for, that

## src/utils/telemetry/logger.ts

- lines: 27
- imports: 3
- exports: 1
- importance: 20
- tags: (none)
- exportedSymbols: ClaudeCodeDiagLogger
- classes: ClaudeCodeDiagLogger

## src/utils/telemetry/perfettoTracing.ts

- lines: 1121
- imports: 12
- exports: 22
- importance: 69
- tags: auth, tools, state-memory
- exportedSymbols: initializePerfettoTracing, isPerfettoTracingEnabled, registerAgent, unregisterAgent, startLLMRequestPerfettoSpan, endLLMRequestPerfettoSpan, startToolPerfettoSpan, endToolPerfettoSpan, startUserInputPerfettoSpan, endUserInputPerfettoSpan, emitPerfettoInstant, emitPerfettoCounter, startInteractionPerfettoSpan, endInteractionPerfettoSpan, getPerfettoEvents, resetPerfettoTracer, triggerPeriodicWriteForTesting, evictStaleSpansForTesting, evictOldestEventsForTesting, MAX_EVENTS_FOR_TESTING, TraceEventPhase, TraceEvent
- functions: stringToNumericHash, getProcessIdForAgent, getCurrentAgentInfo, getTimestamp, generateSpanId, evictStaleSpans, buildTraceDocument, evictOldestEvents, initializePerfettoTracing, emitProcessMetadata, isPerfettoTracingEnabled, registerAgent, unregisterAgent, startLLMRequestPerfettoSpan, endLLMRequestPerfettoSpan, startToolPerfettoSpan, endToolPerfettoSpan, startUserInputPerfettoSpan, endUserInputPerfettoSpan, emitPerfettoInstant, emitPerfettoCounter, startInteractionPerfettoSpan, endInteractionPerfettoSpan, stopWriteInterval, closeOpenSpans, periodicWrite, writePerfettoTrace, writePerfettoTraceSync, getPerfettoEvents, resetPerfettoTracer, triggerPeriodicWriteForTesting, evictStaleSpansForTesting, evictOldestEventsForTesting

## src/utils/telemetry/pluginTelemetry.ts

- lines: 290
- imports: 5
- exports: 14
- importance: 51
- tags: permissions, mcp, tools, state-memory
- exportedSymbols: hashPluginId, getTelemetryPluginScope, getEnabledVia, buildPluginTelemetryFields, buildPluginCommandTelemetryFields, logPluginsEnabledForSession, classifyPluginCommandError, logPluginLoadErrors, TelemetryPluginScope, EnabledVia, InvocationTrigger, SkillExecutionContext, InstallSource, PluginCommandErrorCategory
- functions: hashPluginId, getTelemetryPluginScope, getEnabledVia, buildPluginTelemetryFields, buildPluginCommandTelemetryFields, logPluginsEnabledForSession, classifyPluginCommandError, logPluginLoadErrors

## src/utils/telemetry/sessionTracing.ts

- lines: 928
- imports: 9
- exports: 16
- importance: 75
- tags: auth, permissions, tools, state-memory
- exportedSymbols: isEnhancedTelemetryEnabled, startInteractionSpan, endInteractionSpan, startLLMRequestSpan, endLLMRequestSpan, startToolSpan, startToolBlockedOnUserSpan, endToolBlockedOnUserSpan, startToolExecutionSpan, endToolExecutionSpan, endToolSpan, addToolContentEvent, getCurrentSpan, executeInSpan, startHookSpan, endHookSpan
- functions: retrieves, getSpanId, ensureCleanupInterval, isEnhancedTelemetryEnabled, isAnyTracingEnabled, getTracer, createSpanAttributes, startInteractionSpan, endInteractionSpan, startLLMRequestSpan, endLLMRequestSpan, startToolSpan, startToolBlockedOnUserSpan, endToolBlockedOnUserSpan, startToolExecutionSpan, endToolExecutionSpan, endToolSpan, isToolContentLoggingEnabled, addToolContentEvent, getCurrentSpan, executeInSpan, startHookSpan, endHookSpan

## src/utils/telemetry/skillLoadedEvent.ts

- lines: 40
- imports: 3
- exports: 1
- importance: 32
- tags: auth, tools, state-memory, cost-budget
- exportedSymbols: logSkillsLoaded
- functions: logSkillsLoaded

## src/utils/telemetryAttributes.ts

- lines: 72
- imports: 7
- exports: 1
- importance: 36
- tags: auth, state-memory
- exportedSymbols: getTelemetryAttributes
- functions: shouldIncludeAttribute, getTelemetryAttributes

## src/utils/teleport.tsx

- lines: 1226
- imports: 42
- exports: 15
- importance: 90
- tags: auth, permissions, bridge, mcp, query-loop, tools, state-memory
- exportedSymbols: validateGitState, processMessagesForTeleportResume, checkOutTeleportedSessionBranch, validateSessionRepository, teleportResumeCodeSession, teleportToRemoteWithErrorHandling, teleportFromSessionsAPI, pollRemoteSessionEvents, teleportToRemote, archiveRemoteSession, TeleportResult, TeleportProgressStep, TeleportProgressCallback, RepoValidationResult, PollRemoteSessionResponse
- functions: createTeleportResumeSystemMessage, createTeleportResumeUserMessage, generateTitleAndBranch, validateGitState, fetchFromOrigin, ensureUpstreamIsSet, checkoutBranch, getCurrentBranch, processMessagesForTeleportResume, checkOutTeleportedSessionBranch, validateSessionRepository, teleportResumeCodeSession, to, handleTeleportPrerequisites, teleportToRemoteWithErrorHandling, teleportFromSessionsAPI, pollRemoteSessionEvents, teleportToRemote, archiveRemoteSession

## src/utils/teleport/api.ts

- lines: 467
- imports: 13
- exports: 23
- importance: 70
- tags: auth, query-loop, tools, state-memory
- exportedSymbols: isTransientNetworkError, axiosGetWithRetry, prepareApiRequest, fetchCodeSessionsFromSessionsAPI, getOAuthHeaders, fetchSession, getBranchFromSession, sendEventToRemoteSession, updateSessionTitle, CCR_BYOC_BETA, CodeSessionSchema, SessionStatus, GitSource, KnowledgeBaseSource, SessionContextSource, OutcomeGitInfo, GitRepositoryOutcome, Outcome, SessionContext, SessionResource, ListSessionsResponse, CodeSession, RemoteMessageContent
- functions: isTransientNetworkError, axiosGetWithRetry, prepareApiRequest, fetchCodeSessionsFromSessionsAPI, const, getOAuthHeaders, fetchSession, getBranchFromSession, sendEventToRemoteSession, updateSessionTitle

## src/utils/teleport/environments.ts

- lines: 121
- imports: 7
- exports: 6
- importance: 47
- tags: auth, bridge, state-memory
- exportedSymbols: fetchEnvironments, createDefaultCloudEnvironment, EnvironmentKind, EnvironmentState, EnvironmentResource, EnvironmentListResponse
- functions: fetchEnvironments, createDefaultCloudEnvironment

## src/utils/teleport/environmentSelection.ts

- lines: 78
- imports: 3
- exports: 2
- importance: 22
- tags: bridge
- exportedSymbols: getEnvironmentSelectionInfo, EnvironmentSelectionInfo
- functions: getEnvironmentSelectionInfo

## src/utils/teleport/gitBundle.ts

- lines: 293
- imports: 9
- exports: 2
- importance: 31
- tags: state-memory
- exportedSymbols: createAndUploadGitBundle, BundleUploadResult
- functions: _bundleWithFallback, createAndUploadGitBundle

## src/utils/tempfile.ts

- lines: 32
- imports: 3
- exports: 1
- importance: 20
- tags: tools
- exportedSymbols: generateTempFilePath
- functions: generateTempFilePath

## src/utils/terminal.ts

- lines: 132
- imports: 4
- exports: 2
- importance: 24
- tags: tools
- exportedSymbols: renderTruncatedContent, isOutputLineTruncated
- functions: wrapText, renderTruncatedContent, isOutputLineTruncated

## src/utils/terminalPanel.ts

- lines: 192
- imports: 6
- exports: 2
- importance: 27
- tags: state-memory
- exportedSymbols: getTerminalPanelSocket, getTerminalPanel
- classes: TerminalPanel
- functions: getTerminalPanelSocket, getTerminalPanel

## src/utils/textHighlighting.ts

- lines: 167
- imports: 2
- exports: 3
- importance: 37
- tags: auth
- exportedSymbols: segmentTextByHighlights, TextHighlight, TextSegment
- classes: HighlightSegmenter
- functions: segmentTextByHighlights, reduceCodes

## src/utils/theme.ts

- lines: 640
- imports: 2
- exports: 7
- importance: 49
- tags: permissions
- exportedSymbols: getTheme, themeColorToAnsi, THEME_NAMES, THEME_SETTINGS, Theme, ThemeName, ThemeSetting
- functions: getTheme, themeColorToAnsi

## src/utils/thinking.ts

- lines: 163
- imports: 7
- exports: 8
- importance: 52
- tags: auth, cost-budget
- topComment: biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
- exportedSymbols: isUltrathinkEnabled, hasUltrathinkKeyword, findThinkingTriggerPositions, getRainbowColor, modelSupportsThinking, modelSupportsAdaptiveThinking, shouldEnableThinkingByDefault, ThinkingConfig
- functions: isUltrathinkEnabled, hasUltrathinkKeyword, findThinkingTriggerPositions, getRainbowColor, modelSupportsThinking, modelSupportsAdaptiveThinking, shouldEnableThinkingByDefault

## src/utils/timeouts.ts

- lines: 40
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- topComment: Constants for timeout values
- exportedSymbols: getDefaultBashTimeoutMs, getMaxBashTimeoutMs
- functions: getDefaultBashTimeoutMs, getMaxBashTimeoutMs

## src/utils/tmuxSocket.ts

- lines: 428
- imports: 7
- exports: 11
- importance: 45
- tags: tools, state-memory
- exportedSymbols: getClaudeSocketName, getClaudeSocketPath, setClaudeSocketInfo, isSocketInitialized, getClaudeTmuxEnv, checkTmuxAvailable, isTmuxAvailable, markTmuxToolUsed, hasTmuxToolBeenUsed, ensureSocketInitialized, resetSocketState
- functions: execTmux, getClaudeSocketName, getClaudeSocketPath, setClaudeSocketInfo, isSocketInitialized, getClaudeTmuxEnv, checkTmuxAvailable, isTmuxAvailable, markTmuxToolUsed, hasTmuxToolBeenUsed, returns, ensureSocketInitialized, killTmuxServer, doInitialize, resetSocketState

## src/utils/todo/types.ts

- lines: 19
- imports: 2
- exports: 4
- importance: 25
- tags: (none)
- exportedSymbols: TodoItemSchema, TodoListSchema, TodoItem, TodoList

## src/utils/tokenBudget.ts

- lines: 74
- imports: 0
- exports: 3
- importance: 33
- tags: auth, cost-budget
- topComment: Shorthand (+500k) anchored to start/end to avoid false positives in natural language.
- exportedSymbols: parseTokenBudget, findTokenBudgetPositions, getBudgetContinuationMessage
- functions: parseBudgetMatch, parseTokenBudget, findTokenBudgetPositions, getBudgetContinuationMessage

## src/utils/tokens.ts

- lines: 262
- imports: 5
- exports: 9
- importance: 63
- tags: auth, query-loop, tools, state-memory, cost-budget
- exportedSymbols: getTokenUsage, getTokenCountFromUsage, tokenCountFromLastAPIResponse, finalContextTokensFromLastResponse, messageTokenCountFromLastAPIResponse, getCurrentUsage, doesMostRecentAssistantMessageExceed200k, getAssistantMessageContentLength, tokenCountWithEstimation
- functions: getTokenUsage, getAssistantMessageId, getTokenCountFromUsage, tokenCountFromLastAPIResponse, finalContextTokensFromLastResponse, is, messageTokenCountFromLastAPIResponse, getCurrentUsage, doesMostRecentAssistantMessageExceed200k, getAssistantMessageContentLength, for, tokenCountWithEstimation

## src/utils/toolErrors.ts

- lines: 133
- imports: 3
- exports: 3
- importance: 35
- tags: query-loop, tools
- exportedSymbols: formatError, getErrorParts, formatZodValidationError
- functions: formatError, getErrorParts, formatValidationPath, formatZodValidationError

## src/utils/toolPool.ts

- lines: 80
- imports: 6
- exports: 3
- importance: 38
- tags: permissions, mcp, tools
- exportedSymbols: isPrActivitySubscriptionTool, applyCoordinatorToolFilter, mergeAndFilterTools
- functions: isPrActivitySubscriptionTool, applyCoordinatorToolFilter, that, inside, mergeAndFilterTools

## src/utils/toolResultStorage.ts

- lines: 1041
- imports: 15
- exports: 29
- importance: 88
- tags: auth, permissions, mcp, query-loop, tools, state-memory, cost-budget
- exportedSymbols: getPersistenceThreshold, getToolResultsDir, getToolResultPath, ensureToolResultsDir, persistToolResult, buildLargeToolResultMessage, processToolResultBlock, processPreMappedToolResultBlock, isToolResultContentEmpty, generatePreview, isPersistError, createContentReplacementState, cloneContentReplacementState, getPerMessageBudgetLimit, provisionContentReplacementState, enforceToolResultBudget, applyToolResultBudget, reconstructContentReplacementState, reconstructForSubagentResume, TOOL_RESULTS_SUBDIR, PERSISTED_OUTPUT_TAG, PERSISTED_OUTPUT_CLOSING_TAG, TOOL_RESULT_CLEARED_MESSAGE, PREVIEW_SIZE_BYTES, PersistedToolResult, PersistToolResultError, ContentReplacementState, ContentReplacementRecord, ToolResultReplacementRecord
- functions: getPersistenceThreshold, getSessionDir, getToolResultsDir, getToolResultPath, ensureToolResultsDir, persistToolResult, buildLargeToolResultMessage, processToolResultBlock, processPreMappedToolResultBlock, isToolResultContentEmpty, maybePersistLargeToolResult, generatePreview, isPersistError, createContentReplacementState, cloneContentReplacementState, getPerMessageBudgetLimit, provisionContentReplacementState, isContentAlreadyCompacted, hasImageBlock, contentSize, buildToolNameMap, collectCandidatesFromMessage, collectCandidatesByMessage, partitionByPriorDecision, selectFreshToReplace, replaceToolResultContents, buildReplacement, enforceToolResultBudget, applyToolResultBudget, reconstructContentReplacementState, reconstructForSubagentResume, getFileSystemErrorMessage

## src/utils/toolSchemaCache.ts

- lines: 27
- imports: 1
- exports: 2
- importance: 32
- tags: auth, bridge, mcp, tools, state-memory
- exportedSymbols: getToolSchemaCache, clearToolSchemaCache
- functions: getToolSchemaCache, clearToolSchemaCache

## src/utils/toolSearch.ts

- lines: 757
- imports: 17
- exports: 13
- importance: 84
- tags: auth, permissions, mcp, query-loop, tools, state-memory
- exportedSymbols: getAutoToolSearchCharThreshold, getToolSearchMode, modelSupportsToolReference, isToolSearchEnabledOptimistic, isToolSearchToolAvailable, isToolSearchEnabled, isToolReferenceBlock, extractDiscoveredToolNames, isDeferredToolsDeltaEnabled, getDeferredToolsDelta, ToolSearchMode, DeferredToolsDelta, DeferredToolsDeltaScanContext
- functions: parseAutoPercentage, isAutoToolSearchMode, getAutoToolSearchPercentage, getAutoToolSearchTokenThreshold, getAutoToolSearchCharThreshold, getToolSearchMode, getUnsupportedToolReferencePatterns, modelSupportsToolReference, isToolSearchEnabledOptimistic, and, isToolSearchToolAvailable, calculateDeferredToolDescriptionChars, isToolSearchEnabled, logModeDecision, isToolReferenceBlock, isToolReferenceWithName, isToolResultBlockWithContent, scans, extractDiscoveredToolNames, isDeferredToolsDeltaEnabled, getDeferredToolsDelta, checkAutoThreshold

## src/utils/transcriptSearch.ts

- lines: 203
- imports: 2
- exports: 3
- importance: 35
- tags: query-loop, tools, state-memory
- exportedSymbols: renderableSearchText, toolUseSearchText, toolResultSearchText
- functions: renderableSearchText, computeSearchText, toolUseSearchText, toolResultSearchText

## src/utils/treeify.ts

- lines: 171
- imports: 3
- exports: 3
- importance: 26
- tags: (none)
- exportedSymbols: treeify, TreeNode, TreeifyOptions
- functions: treeify, colorize, growBranch

## src/utils/truncate.ts

- lines: 180
- imports: 2
- exports: 6
- importance: 31
- tags: (none)
- topComment: Width-aware truncation/wrapping — needs ink/stringWidth (not leaf-safe).
- exportedSymbols: truncatePathMiddle, truncateToWidth, truncateStartToWidth, truncateToWidthNoEllipsis, truncate, wrapText
- functions: truncatePathMiddle, truncateToWidth, truncateStartToWidth, truncateToWidthNoEllipsis, truncate, wrapText

## src/utils/ultraplan/ccrSession.ts

- lines: 350
- imports: 7
- exports: 8
- importance: 62
- tags: permissions, query-loop, tools, state-memory
- topComment: CCR session polling for /ultraplan. Waits for an approved ExitPlanMode
- exportedSymbols: pollForApprovedExitPlanMode, UltraplanPollError, ExitPlanModeScanner, ULTRAPLAN_TELEPORT_SENTINEL, PollFailReason, ScanResult, UltraplanPhase, PollResult
- classes: UltraplanPollError, ExitPlanModeScanner
- functions: pollForApprovedExitPlanMode, contentToText, extractTeleportPlan, extractApprovedPlan

## src/utils/ultraplan/keyword.ts

- lines: 128
- imports: 0
- exports: 5
- importance: 26
- tags: commands
- exportedSymbols: findUltraplanTriggerPositions, findUltrareviewTriggerPositions, hasUltraplanKeyword, hasUltrareviewKeyword, replaceUltraplanKeyword
- functions: findKeywordTriggerPositions, findUltraplanTriggerPositions, findUltrareviewTriggerPositions, hasUltraplanKeyword, hasUltrareviewKeyword, replaceUltraplanKeyword

## src/utils/unaryLogging.ts

- lines: 40
- imports: 1
- exports: 2
- importance: 30
- tags: query-loop, tools
- exportedSymbols: logUnaryEvent, CompletionType
- functions: logUnaryEvent

## src/utils/undercover.ts

- lines: 90
- imports: 3
- exports: 3
- importance: 25
- tags: tools
- exportedSymbols: isUndercover, getUndercoverInstructions, shouldShowUndercoverAutoNotice
- functions: in, isUndercover, getUndercoverInstructions, shouldShowUndercoverAutoNotice

## src/utils/user.ts

- lines: 195
- imports: 8
- exports: 7
- importance: 51
- tags: auth, state-memory
- exportedSymbols: initUser, resetUserCache, getUserForGrowthBook, getCoreUserData, getGitEmail, GitHubActionsMetadata, CoreUserData
- functions: initUser, resetUserCache, getUserForGrowthBook, getEmail, getEmailAsync

## src/utils/userAgent.ts

- lines: 11
- imports: 0
- exports: 1
- importance: 17
- tags: bridge
- exportedSymbols: getClaudeCodeUserAgent
- functions: getClaudeCodeUserAgent

## src/utils/userPromptKeywords.ts

- lines: 28
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- exportedSymbols: matchesNegativeKeyword, matchesKeepGoingKeyword
- functions: matchesNegativeKeyword, matchesKeepGoingKeyword

## src/utils/uuid.ts

- lines: 28
- imports: 2
- exports: 2
- importance: 21
- tags: (none)
- exportedSymbols: validateUuid, createAgentId
- functions: validateUuid, createAgentId

## src/utils/warningHandler.ts

- lines: 122
- imports: 5
- exports: 3
- importance: 27
- tags: (none)
- exportedSymbols: resetWarningHandler, initializeWarningHandler, MAX_WARNING_KEYS
- functions: isRunningFromBuildDirectory, isInternalWarning, resetWarningHandler, initializeWarningHandler

## src/utils/which.ts

- lines: 83
- imports: 2
- exports: 2
- importance: 22
- tags: (none)
- exportedSymbols: which, whichSync
- functions: whichNodeAsync, whichNodeSync

## src/utils/windowsPaths.ts

- lines: 174
- imports: 8
- exports: 4
- importance: 33
- tags: tools
- exportedSymbols: setShellIfWindows, findGitBashPath, windowsPathToPosixPath, posixPathToWindowsPath
- functions: checkPathExists, findExecutable, setShellIfWindows

## src/utils/withResolvers.ts

- lines: 14
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: withResolvers
- functions: withResolvers

## src/utils/words.ts

- lines: 801
- imports: 1
- exports: 2
- importance: 42
- tags: auth
- exportedSymbols: generateWordSlug, generateShortWordSlug
- functions: randomInt, pickRandom, generateWordSlug, generateShortWordSlug

## src/utils/workloadContext.ts

- lines: 58
- imports: 1
- exports: 4
- importance: 24
- tags: tools
- exportedSymbols: getWorkload, runWithWorkload, WORKLOAD_CRON, Workload
- functions: getWorkload, runWithWorkload

## src/utils/worktree.ts

- lines: 1520
- imports: 20
- exports: 20
- importance: 72
- tags: permissions, bridge, tools, state-memory
- exportedSymbols: validateWorktreeSlug, getCurrentWorktreeSession, restoreWorktreeSession, generateTmuxSessionName, worktreeBranchName, copyWorktreeIncludeFiles, parsePRReference, isTmuxAvailable, getTmuxInstallInstructions, createTmuxSessionForWorktree, killTmuxSession, createWorktreeForSession, keepWorktree, cleanupWorktree, createAgentWorktree, removeAgentWorktree, cleanupStaleAgentWorktrees, hasWorktreeChanges, execIntoTmuxWorktree, WorktreeSession
- functions: validateWorktreeSlug, to, mkdirRecursive, symlinkDirectories, getCurrentWorktreeSession, restoreWorktreeSession, generateTmuxSessionName, worktreesDir, flattenSlug, worktreeBranchName, worktreePathFor, getOrCreateWorktree, copyWorktreeIncludeFiles, performPostCreationSetup, parsePRReference, isTmuxAvailable, getTmuxInstallInstructions, createTmuxSessionForWorktree, killTmuxSession, createWorktreeForSession, keepWorktree, cleanupWorktree, createAgentWorktree, removeAgentWorktree, cleanupStaleAgentWorktrees, hasWorktreeChanges, execIntoTmuxWorktree

## src/utils/worktreeModeEnabled.ts

- lines: 12
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: isWorktreeModeEnabled
- functions: isWorktreeModeEnabled

## src/utils/xdg.ts

- lines: 66
- imports: 2
- exports: 4
- importance: 25
- tags: (none)
- exportedSymbols: getXDGStateHome, getXDGCacheHome, getXDGDataHome, getUserBinDir
- functions: resolveOptions, getXDGStateHome, getXDGCacheHome, getXDGDataHome, getUserBinDir

## src/utils/xml.ts

- lines: 17
- imports: 0
- exports: 2
- importance: 19
- tags: (none)
- exportedSymbols: escapeXml, escapeXmlAttr
- functions: escapeXml, escapeXmlAttr

## src/utils/yaml.ts

- lines: 16
- imports: 0
- exports: 1
- importance: 17
- tags: (none)
- exportedSymbols: parseYaml
- functions: parseYaml

## src/utils/zodToJsonSchema.ts

- lines: 24
- imports: 1
- exports: 2
- importance: 20
- tags: tools, state-memory
- exportedSymbols: zodToJsonSchema, JsonSchema7Type
- functions: zodToJsonSchema

## src/vim/motions.ts

- lines: 83
- imports: 1
- exports: 3
- importance: 8
- tags: (none)
- exportedSymbols: resolveMotion, isInclusiveMotion, isLinewiseMotion
- functions: resolveMotion, applySingleMotion, isInclusiveMotion, isLinewiseMotion

## src/vim/operators.ts

- lines: 557
- imports: 6
- exports: 14
- importance: 30
- tags: (none)
- exportedSymbols: executeOperatorMotion, executeOperatorFind, executeOperatorTextObj, executeLineOp, executeX, executeReplace, executeToggleCase, executeJoin, executePaste, executeIndent, executeOpenLine, executeOperatorG, executeOperatorGg, OperatorContext
- functions: executeOperatorMotion, executeOperatorFind, executeOperatorTextObj, executeLineOp, executeX, executeReplace, executeToggleCase, executeJoin, executePaste, executeIndent, executeOpenLine, getLineStartOffset, getOperatorRange, getOperatorRangeForFind, applyOperator, executeOperatorG, executeOperatorGg

## src/vim/textObjects.ts

- lines: 187
- imports: 2
- exports: 2
- importance: 8
- tags: (none)
- exportedSymbols: findTextObject, TextObjectRange
- functions: findTextObject, findWordObject, findQuoteObject, findBracketObject

## src/vim/transitions.ts

- lines: 491
- imports: 3
- exports: 3
- importance: 15
- tags: (none)
- exportedSymbols: transition, TransitionContext, TransitionResult
- functions: transition, handleNormalInput, handleOperatorInput, fromIdle, fromCount, fromOperator, fromOperatorCount, fromOperatorFind, fromOperatorTextObj, fromFind, fromG, fromOperatorG, fromReplace, fromIndent, executeRepeatFind

## src/vim/types.ts

- lines: 200
- imports: 0
- exports: 17
- importance: 20
- tags: (none)
- topComment: ============================================================================
- exportedSymbols: isOperatorKey, isTextObjScopeKey, createInitialVimState, createInitialPersistentState, OPERATORS, SIMPLE_MOTIONS, FIND_KEYS, TEXT_OBJ_SCOPES, TEXT_OBJ_TYPES, MAX_VIM_COUNT, Operator, FindType, TextObjScope, VimState, CommandState, PersistentState, RecordedChange
- functions: isOperatorKey, isTextObjScopeKey, createInitialVimState, createInitialPersistentState

## src/voice/voiceModeEnabled.ts

- lines: 55
- imports: 3
- exports: 3
- importance: 21
- tags: auth, tools
- exportedSymbols: isVoiceGrowthBookEnabled, hasVoiceAuth, isVoiceModeEnabled
- functions: isVoiceGrowthBookEnabled, hasVoiceAuth, isVoiceModeEnabled
