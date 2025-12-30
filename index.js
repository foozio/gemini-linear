#!/usr/bin/env node

/**
 * Gemini-Linear MCP Adapter
 * 
 * This script acts as a local bridge to the Linear MCP server.
 * It reads the LINEAR_API_KEY from the environment and establishes
 * a secure SSE connection to Linear, forwarding the protocol to Stdio.
 */

const { spawn } = require('child_process');
const path = require('path');

// 1. Validate Environment
const apiKey = process.env.LINEAR_API_KEY;

if (!apiKey) {
  console.error('\x1b[31mError: LINEAR_API_KEY environment variable is not set.\x1b[0m');
  console.error('Please obtain a personal API key from Linear Settings > API.');
  console.error('Usage: LINEAR_API_KEY=lin_... node index.js');
  process.exit(1);
}

// 2. Configure Linear MCP Endpoint
const LINEAR_MCP_URL = 'https://mcp.linear.app/sse';

// 3. Resolve the mcp-remote executable
// We use npx to ensure we use the local version or fetch if missing (though we depend on it)
// Alternatively, look for the local bin to avoid npx overhead
const mcpRemoteBin = path.resolve(__dirname, 'node_modules', '.bin', 'mcp-remote');

// 4. Construct Arguments
// We pass the API Key via the Authorization header.
// Note: We use the header flag supported by mcp-remote.
const args = [
  LINEAR_MCP_URL,
  '--header',
  `Authorization: Bearer ${apiKey}`
];

// 5. Spawn the Bridge Process
const child = spawn(mcpRemoteBin, args, {
  stdio: 'inherit', // Connect stdin/stdout/stderr to this process
  env: process.env  // Inherit environment
});

child.on('error', (err) => {
  console.error('Failed to start mcp-remote:', err);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});
