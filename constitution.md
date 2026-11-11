# Project Constitution — Line Graph and Posts

This document defines the non-negotiable foundations for this repository. Read it before adding or changing features.

## Guiding Principles

- **Simplicity first** — prefer the smallest solution that solves the problem. If a change needs a long explanation, it is probably over-engineered.
- **No hardcoded secrets or endpoints** — configuration belongs in environment variables; visual design tokens belong in styles, not in `.env` files.
- **Traceability** — every value, dependency, and route should make its origin and purpose obvious.
- **Debuggability** — fail loudly and visibly; avoid silent fallbacks that hide broken data.
- **Official patterns** — use the documented API of each framework and library before inventing a workaround.
- **Portfolio clarity** — this repository is part of a public portfolio. Code should read as clean, intentional, and easy for a reviewer to follow.

## Technology Stack Foundations

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | React 16 + Vite 8 | Vite replaced the unmaintained Create React App. |
| Routing | React Router 5 | Two top-level views with a shared layout. |
| Charts | ApexCharts + react-apexcharts | Declarative line chart from parsed CSV data. |
| Tables | react-bootstrap-table-next | Sortable/paginated posts table. |
| Data | Axios 1 + JSONPlaceholder | Public demo API for posts and comments. |
| Styling | SCSS via Sass (dart-sass) + Material UI 4 | Challenge-era styling, on a maintained Sass compiler. |

**Rule of thumb:** a new dependency must solve a concrete problem that the current stack cannot solve cleanly. Justify it in the change that introduces it.

## Core Premises

### 1. Scope

A challenge project demonstrating CSV parsing, charting, and table drill-down. Keep it client-side and focused; do not add a backend for JSONPlaceholder data.

### 2. Environment Isolation

- This project has no runtime secrets. Do not introduce `.env` files unless a real secret or environment-specific URL appears.
- If configuration is added, use environment variables and document them in the README.
- Never commit keys, tokens, database URLs, or credentials.

### 3. Architecture

- Keep API calls in `shared/services/` and chart/table state in their containers.
- Shared layout and table components belong in `shared/components/`.
- `master` is the implementation and release branch; work in feature branches merged by PR.

### 4. Data and State

- CSV data and chart selections are local component state.
- Posts and comments are fetched on demand; no caching layer exists.
- Nothing persists across reloads.

### 5. Styling and UX

- SCSS files sit next to their components; Material UI supplies form controls.
- Keep the layout responsive and the chart readable at narrow widths.
- Avoid adding a second styling system.

### 6. Quality Gates

- `yarn build` is the production gate.
- Manually test CSV upload, axis selection, chart rendering, posts loading, user filtering, and comments.
- Fix the comments-reset bug before extending the posts view.

### 7. Deployment

- Publish the `master` build (`dist/`) to GitHub Pages through Actions.
- Keep `base: '/lineGraphAndPosts/'` in `vite.config.mjs`.
- No server deployment is needed.

## What to Avoid

- Adding backend code for a public demo API.
- Upgrading React/MUI/Bootstrap majors without a migration plan.
- Assuming CSV columns are numeric without validating them.

## Checklist Before Adding Anything New

- Does this solve a real problem for this project, or am I adding scope for its own sake?
- Is every new value configuration-driven rather than hardcoded?
- Does the change follow the existing folder and naming patterns?
- Is there a clear failure path when data, the network, or the environment is unavailable?
- Have I run the available lint/build/test command and fixed what it reports?
- Did I update `README.md` and `MEMORY.md` if behaviour or setup changed?

## Philosophy Statement

This repository exists to show thoughtful front-end engineering: clear structure, readable code, and deliberate trade-offs. The goal is not to use every tool available, but to make every file explain itself. Simplicity is the feature.
