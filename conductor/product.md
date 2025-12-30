# Initial Concept
Integrate the Linear MCP Server with the Gemini CLI to allow users to manage their Linear workspace directly from the terminal using a secure bridge architecture.

# Product Guide

## Vision
To provide a seamless, secure, and idiomatic integration between Gemini's AI capabilities and Linear's project management platform, empowering developers to interact with their tasks and projects without context-switching.

## Target Users
- **Developers:** Who use Gemini CLI for coding and want to update issues or check project status without leaving the terminal.
- **Platform Engineers:** Who need a secure and standardized way to connect remote MCP servers to local AI clients.

## Core Features
- **Secure Bridge:** Implements a proxy that handles the conversion between local Stdio JSON-RPC and remote SSE (Server-Sent Events).
- **Credential Safety:** Uses environment-variable-based authentication to ensure sensitive Linear API keys are never stored in plain text configuration files.
- **Linear Tool Access:** Provides full access to Linear MCP tools for finding, creating, and updating issues, projects, and comments.

## Success Metrics
- **Reliability:** Stable connection between Gemini and Linear with minimal latency.
- **Security:** Zero leakage of API keys during the bridge process.
- **Usability:** High success rate in tool invocations for common Linear tasks.
