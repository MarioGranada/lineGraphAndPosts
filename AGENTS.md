# AGENTS.md — Line Graph and Posts

Compact guide for future OpenCode sessions. It records only the facts an agent is likely to miss or get wrong.

## Quickstart

| Command | Description |
| --- | --- |
| `git checkout develop` | Switch to the implementation branch. |
| `yarn install` | Install dependencies. |
| `yarn start` | Start the app at http://localhost:3000. |

## Requirements

- Node.js 14 recommended; `node-sass` 4 does not build on modern Node versions.
- Yarn 1.x (a `yarn.lock` is committed).
- Internet access for the JSONPlaceholder API.

## Environment

- No environment variables are used. The JSONPlaceholder base URL is hardcoded in the posts service.

## Architecture

- `src/containers/LineGraphContainer/` — CSV parsing and chart state.
- `src/containers/PostsContainer/` — posts table, user filter, comments.
- `src/shared/services/PostsAPI/` — JSONPlaceholder client.
- `src/shared/components/hoc/Layout/` — layout, nav, footer.
- `src/shared/components/DataTable/` — reusable table wrapper.

## Commands and build order

- Work on `develop`; `master` is only the scaffold.
- Run `yarn build` to verify the production bundle.
- `yarn test` exists but has no meaningful coverage on the scaffold.

## Conventions and gotchas

- node-sass 4 is incompatible with current Node; do not upgrade Node casually.
- The CSV parser uses `dynamicTypiing` (typo in source) — do not assume numeric coercion is enabled.
- Chart axes require both an X and a Y selection before drawing.
- JSONPlaceholder requests fail offline and the UI does not retry.

## Memory

- Read `MEMORY.md` first to understand the current status and decisions.
- Before changing behaviour, read `constitution.md` and keep the change aligned with it.
- After a task, update `MEMORY.md` with status, decisions, and mistakes to avoid. Keep it short.
- If a rule becomes permanent, move it into this file instead of leaving it in memory.
- Never store secrets, tokens, or personal data in `MEMORY.md`.
