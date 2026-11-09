# Line Graph and Posts — Working Memory

_Last updated: 2026-11-02_

## Current status

- `master` contains the CRA scaffold; `develop` contains the CSV chart and posts explorer.
- ApexCharts, CSV reader, posts table, and JSONPlaceholder client are implemented on `develop`.
- No deployment workflow or meaningful tests yet.

## Key decisions

- Kept the implementation on `develop`, following the original branch workflow.
- Used JSONPlaceholder so the posts view needs no backend.

## Known limitations and follow-ups

- node-sass 4 constrains the Node version.
- Comments reset bug in `PostsContainer`.
- No caching, retries, or empty-state polish.

## Mistakes to avoid

- Do not evaluate the project from `master`.
- Do not assume the CSV parser coerces numbers; the option is misspelled.
- Do not add API keys — JSONPlaceholder needs none.

## Next steps

- Fix the comments reset bug.
- Add a Pages workflow.
- Migrate from node-sass to Dart Sass and consider Vite.

---

Keep this file under ~60 lines. Summarise or delete notes that no longer add value.
