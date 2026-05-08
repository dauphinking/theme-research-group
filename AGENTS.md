# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a Hugo-based multilingual academic website (SJTU CSC Lab). It uses Hugo v0.135.0 extended with HugoBlox/Wowchemy academic theme and Go modules. There is also a TypeScript MCP server in `mcp-server/`.

### Services

| Service | Command | URL |
|---------|---------|-----|
| Hugo dev server | `hugo server --bind 0.0.0.0 --baseURL http://localhost:1313/` | http://localhost:1313/ |
| MCP server | `cd mcp-server && npm run build && npm start` | stdio (not HTTP) |

### Key commands

- **Dev server**: `hugo server` (default port 1313, hot-reload enabled)
- **Production build**: `hugo --gc --minify`
- **Full build with search**: `hugo --gc --minify && npx pagefind --source 'public'`
- **MCP server build**: `cd mcp-server && npm run build`
- **MCP server run**: `cd mcp-server && npm start`

### Gotchas

- Hugo requires the **extended** version (for SCSS processing). Standard Hugo will fail at build time.
- The `hugo.yaml` config references `baseURL: 'https://www.csc-lab.com/'` — use `--baseURL` flag to override for local dev.
- Hugo modules are vendored in `_vendor/` so `hugo mod vendor` is not needed unless modules are updated in `go.mod`.
- The root `package.json` only contains `netlify-cms-app` — it is not a Node.js application.
- The one WARN about "found no layout file for api for kind section" is expected and non-blocking.
- Default content language is Chinese (`zh`); English is at `/en/`, French at `/fr/`.
- The JSON API outputs (used by MCP server) are generated at build time at paths like `/en/publication/index.json`.
