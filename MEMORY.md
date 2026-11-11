# Line Graph and Posts — Working Memory

_Last updated: 2026-11-12_

## Current status

- `develop` merged into the Vite-migrated `master` (2026-11): CSV chart and posts explorer on Vite 8 + Vitest.
- GitHub Pages workflow deploys `master`; 2 route tests; `yarn audit` clean.

## Key decisions

- Stayed on React 16 / MUI 4 / Bootstrap 4; upgraded axios to 1.x and pinned patched transitive deps.
- Used JSONPlaceholder so the posts view needs no backend.

## Known limitations and follow-ups

- Bundle is ~1 MB because of ApexCharts; route-level code splitting would help.
- No caching, retries, or empty-state polish.

## Mistakes to avoid

- Do not remove the `events` dependency (needed by react-bootstrap-table-next in the browser).
- Do not add API keys — JSONPlaceholder needs none.

## Next steps

- Lazy-load ApexCharts to shrink the bundle.
- Add empty/error states for the posts API.

---

Keep this file under ~60 lines. Summarise or delete notes that no longer add value.
