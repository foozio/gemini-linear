# Product Guidelines

## Design Philosophy
- **Security by Design:** Prioritize the safe handling of credentials. Avoid storing secrets on disk; rely on runtime environment variables.
- **Transparency:** The bridge should be a thin, transparent layer. It should not modify the data stream unless necessary for protocol translation.
- **Robustness:** Gracefully handle network failures and authentication errors with clear, actionable feedback for the user.

## Prose Style
- **Technical & Concise:** Use precise terminology (SSE, Stdio, MCP) suitable for a developer audience.
- **Instructional:** Error messages should guide the user to a solution (e.g., "Set LINEAR_API_KEY env var" instead of just "Auth failed").

## Coding Standards
- **Simplicity:** Keep the adapter logic minimal to reduce the surface area for bugs and security vulnerabilities.
- **Standard Libraries:** Prefer Node.js built-in modules (child_process, path) where possible to minimize external dependencies.
