# Plan: Configure and Test the Linear MCP Connection

Verify the secure bridge functionality by implementing a basic connectivity test that confirms the `index.js` adapter can successfully authenticate and communicate with the Linear MCP server.

## Phase 1: Validation and Error Handling
- [ ] Task: Create a test suite to verify `index.js` behavior
- [ ] Task: Write Tests: Verify `index.js` fails when `LINEAR_API_KEY` is missing
- [ ] Task: Write Tests: Verify `index.js` spawns `mcp-remote` with correct `Authorization` header when key is present
- [ ] Task: Conductor - User Manual Verification 'Validation and Error Handling' (Protocol in workflow.md)

## Phase 2: Live Connectivity Verification
- [ ] Task: Manual Test: Run the adapter with a valid (temporary) API key and verify `mcp-remote` initializes
- [ ] Task: Conductor - User Manual Verification 'Live Connectivity Verification' (Protocol in workflow.md)
