# Plan: Configure and Test the Linear MCP Connection

Verify the secure bridge functionality by implementing a basic connectivity test that confirms the `index.js` adapter can successfully authenticate and communicate with the Linear MCP server.

## Phase 1: Validation and Error Handling [checkpoint: f2971eb]
- [x] Task: Create a test suite to verify index.js behavior [7a0617f]
- [x] Task: Write Tests: Verify index.js fails when LINEAR_API_KEY is missing [2067cb9]
- [x] Task: Write Tests: Verify index.js spawns mcp-remote with correct Authorization header when key is present [9784d5b]
- [x] Task: Conductor - User Manual Verification 'Validation and Error Handling' (Protocol in workflow.md) [f2971eb]

## Phase 2: Live Connectivity Verification
- [x] Task: Manual Test: Run the adapter with a valid (temporary) API key and verify mcp-remote initializes [2c82cec]
- [ ] Task: Conductor - User Manual Verification 'Live Connectivity Verification' (Protocol in workflow.md)
