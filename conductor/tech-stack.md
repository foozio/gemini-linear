# Tech Stack

## Core Technologies
- **Language:** JavaScript (Node.js)
- **Runtime:** Node.js (v18 or higher recommended)
- **Package Manager:** npm

## Dependencies
- **mcp-remote:** Official bridge tool for connecting to remote MCP servers over SSE.

## Architecture & Protocols
- **Local Protocol:** Stdio (JSON-RPC) for communication with the Gemini CLI.
- **Remote Protocol:** Server-Sent Events (SSE) for communication with the Linear MCP service.
- **Authentication:** Bearer token authentication via HTTP headers.

## Development Tools
- **Built-in Modules:** `child_process` for spawning the bridge, `path` for directory resolution.
