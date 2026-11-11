# Line Graph and Posts

A two-view React challenge: a CSV-driven line chart and a posts explorer backed by JSONPlaceholder.

**Live demo:** https://mariogranada.github.io/lineGraphAndPosts/

The line graph view lets a user load a CSV, choose the X and Y columns, and render an ApexCharts line chart. The posts view lists posts and lets the user drill into posts by user and comments by post.

## Features

- CSV upload and parsing with `react-csv-reader`.
- Selectable X and Y axes from the CSV headers.
- Line chart rendering with ApexCharts.
- Posts table with user and post drill-down.
- Comments lookup for a selected post.
- Shared layout with navigation and footer.
- React Router routes for `/` and `/posts`.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 16 + Vite 8 |
| Routing | React Router 5 |
| Charts | ApexCharts + react-apexcharts |
| Tables | react-bootstrap-table-next |
| Data | Axios 1 + JSONPlaceholder |
| Styling | SCSS via Sass (dart-sass) + Bootstrap 4 CSS + Material UI 4 |
| Testing | Vitest + React Testing Library |

## Project structure

```text
lineGraphAndPosts/
├── src/
│   ├── containers/
│   │   ├── LineGraphContainer/  # CSV upload and chart
│   │   └── PostsContainer/      # Posts table and comments
│   ├── shared/
│   │   ├── components/
│   │   │   ├── DataTable/
│   │   │   └── hoc/Layout/      # Layout, NavBar, Footer
│   │   └── services/PostsAPI/   # JSONPlaceholder client
│   ├── App.jsx
│   └── index.jsx
├── public/
├── index.html               # Vite entry
├── vite.config.mjs
└── package.json
```

## Getting started

### Requirements

- Node.js 22.12+ (or 20.19+).
- Yarn 1.x (a `yarn.lock` is committed).
- Internet access for the JSONPlaceholder API.

### 1. Install dependencies

```bash
yarn install
```

### 2. Run locally

**Start the development server**

```bash
yarn dev
```

Open http://localhost:3000/lineGraphAndPosts/.

### Available scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the Vite dev server on port 3000. |
| `yarn build` | Create a production build in `dist/`. |
| `yarn preview` | Serve the production build locally. |
| `yarn test` | Run the Vitest suite once (`yarn test:watch` to watch). |
| `yarn lint` | Run ESLint. |

## How it works

`App.jsx` defines two routes inside a shared `Layout`: `/` renders `LineGraphContainer`, `/posts` renders `PostsContainer`.

`LineGraphContainer` parses the uploaded CSV into an array of row objects, derives the headers, and builds an ApexCharts series from the selected X and Y columns.

`PostsContainer` loads all posts, then uses the selected user id and post id to fetch filtered posts and comments through `shared/services/PostsAPI`.

`shared/components/hoc/Layout` provides the navigation and footer shared by both views.

## Deployment

- GitHub Actions (`.github/workflows/deploy.yml`) runs tests, builds with `base: '/lineGraphAndPosts/'`, copies `index.html` to `404.html` for deep links, and publishes `dist/` to `gh-pages` on every push to `master`.
- The app is fully client-side; no backend or database is required.
- JSONPlaceholder is a public demo API; do not depend on it for production data.

## Notes and limitations

- `develop` was merged into `master` (2026-11); `master` is now the implementation.
- `react-bootstrap-table-next` imports Node's `events` module; the `events` package provides it in the browser (webpack 4 used to polyfill it).
- Security overrides live in `package.json` `resolutions` (`underscore`, `path-to-regexp`, `@babel/runtime`).
- The bundle is ~1 MB (ApexCharts); Vite warns about chunk size but it is not an error.

---

**Author:** Mario Granada
