# Spec: Configure and Test the Linear MCP Connection

## Goal
Verify that the `index.js` adapter correctly bridges Gemini Stdio to Linear SSE using the `mcp-remote` proxy and secures the connection via environment-variable-based authentication.

## Acceptance Criteria
1.  **Environment Validation:** The script must explicitly check for `LINEAR_API_KEY` and exit with code 1 and a helpful message if it's missing.
2.  **Process Spawning:** The script must correctly resolve the local `mcp-remote` binary.
3.  **Header Injection:** The script must pass the `Authorization: Bearer <key>` header to `mcp-remote` via the `--header` flag.
4.  **Stdio Integrity:** Stdio must be correctly inherited so that Gemini can communicate with the underlying proxy.

## Implementation Details
- Testing will use Node.js built-in `test` runner or a simple script to verify process behavior.
- We will mock/spy on `child_process.spawn` to verify arguments without necessarily hitting the real Linear API in unit tests.
