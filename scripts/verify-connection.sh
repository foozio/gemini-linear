#!/bin/bash
if [ -z "$LINEAR_API_KEY" ]; then
  echo "Error: LINEAR_API_KEY is not set."
  echo "Usage: LINEAR_API_KEY=lin_... ./scripts/verify-connection.sh"
  exit 1
fi

echo "Starting adapter with provided key..."
node index.js
