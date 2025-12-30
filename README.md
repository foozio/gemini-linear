# Gemini Linear Extension

This extension integrates the [Linear MCP Server](https://linear.app/docs/mcp) with the Gemini CLI.

## Architecture

This project implements a secure bridge pattern:

`Gemini CLI (Stdio)` <-> `Local Adapter (index.js)` <-> `mcp-remote (Proxy)` <-> `Linear MCP (SSE)`

This architecture ensures:
1.  **Security**: API keys are injected via environment variables and never written to disk or config files.
2.  **Compatibility**: Converts the remote SSE stream to the local Stdio protocol expected by Gemini.

## Prerequisites

*   Node.js v18+
*   A Linear Account
*   A Linear Personal API Key (Settings > Account > API > Personal API keys)

## Setup

1.  Clone/Download this extension.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set your API Key:
    ```bash
    export LINEAR_API_KEY=lin_...
    ```

## Usage in Gemini

To use this extension, configure your Gemini MCP settings to run the `index.js` file.

**Command:** `node`
**Args:** `/absolute/path/to/gemini-linear/index.js`
**Environment:** `LINEAR_API_KEY=...`

## Troubleshooting

*   **Auth Errors**: Ensure your API Key is valid and starts with `lin_`.
*   **Connection Errors**: Ensure you have internet access to `mcp.linear.app`.
