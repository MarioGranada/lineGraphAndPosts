# AGENTS.md — Line Graph and Posts

Compact guide for future OpenCode sessions. It records only the facts an agent is likely to miss or get wrong.

## Quickstart

| Command | Description |
| --- | --- |
| `yarn install` | Install dependencies. |
| `yarn dev` | Start the app at http://localhost:3000/lineGraphAndPosts/. |
| `yarn test` | Run Vitest once. |
| `yarn build` | Production build to `dist/`. |

## Requirements

- Node.js 22.12+ (or 20.19+).
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

- `master` is the implementation (develop was merged in 2026-11). Pushes to `master` deploy to GitHub Pages.
- Run `yarn lint`, `yarn test` and `yarn build` before finishing a change.
- Tests mock `react-apexcharts` (jsdom has no ResizeObserver/SVG layout) and the posts API.

## Conventions and gotchas

- React 16.14 uses the classic JSX runtime (`vite.config.mjs`); keep `import React` in JSX files.
- `react-bootstrap-table-next` needs the `events` package in the browser — do not remove it.
- The CSV parser uses `dynamicTyping`, so numeric columns are parsed as numbers.
- `package.json` `resolutions` pin patched `underscore`, `path-to-regexp`, `@babel/runtime`.
- Chart axes require both an X and a Y selection before drawing.
- JSONPlaceholder requests fail offline and the UI does not retry.

## Memory

- Read `MEMORY.md` first to understand the current status and decisions.
- Before changing behaviour, read `constitution.md` and keep the change aligned with it.
- After a task, update `MEMORY.md` with status, decisions, and mistakes to avoid. Keep it short.
- If a rule becomes permanent, move it into this file instead of leaving it in memory.
- Never store secrets, tokens, or personal data in `MEMORY.md`.
