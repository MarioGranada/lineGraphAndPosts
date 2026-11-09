# Line Graph and Posts

A two-view React challenge: a CSV-driven line chart and a posts explorer backed by JSONPlaceholder. The `develop` branch contains the implementation; `master` holds the Create React App scaffold.

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
| Framework | React 16 (Create React App 3) |
| Routing | React Router 5 |
| Charts | ApexCharts + react-apexcharts |
| Tables | react-bootstrap-table-next |
| Data | Axios + JSONPlaceholder |
| Styling | SCSS via node-sass + Material UI 4 |

## Project structure

```text
lineGraphAndPosts/          # master = scaffold; develop = implementation
├── src/
│   ├── containers/
│   │   ├── LineGraphContainer/  # CSV upload and chart
│   │   └── PostsContainer/      # Posts table and comments
│   ├── shared/
│   │   ├── components/
│   │   │   ├── DataTable/
│   │   │   └── hoc/Layout/      # Layout, NavBar, Footer
│   │   └── services/PostsAPI/   # JSONPlaceholder client
│   ├── App.js
│   └── index.js
├── public/
└── package.json
```

## Getting started

### Requirements

- Node.js 14 recommended; `node-sass` 4 does not build on modern Node versions.
- Yarn 1.x (a `yarn.lock` is committed).
- Internet access for the JSONPlaceholder API.

### 1. Install dependencies

```bash
git checkout develop
yarn install
```

### 2. Run locally

**Start the development server**

```bash
yarn start
```

Open http://localhost:3000.

If Node 17+ reports an OpenSSL error, use Node 16 or `NODE_OPTIONS=--openssl-legacy-provider`.

### Available scripts

| Command | Description |
| --- | --- |
| `yarn start` | Start CRA on port 3000. |
| `yarn build` | Create a production build. |
| `yarn test` | Run the CRA test runner. |
| `yarn eject` | Eject CRA configuration (irreversible). |

## How it works

`App.js` defines two routes inside a shared `Layout`: `/` renders `LineGraphContainer`, `/posts` renders `PostsContainer`.

`LineGraphContainer` parses the uploaded CSV into an array of row objects, derives the headers, and builds an ApexCharts series from the selected X and Y columns.

`PostsContainer` loads all posts, then uses the selected user id and post id to fetch filtered posts and comments through `shared/services/PostsAPI`.

`shared/components/hoc/Layout` provides the navigation and footer shared by both views.

## Deployment

- Target: GitHub Actions builds the `develop` branch and publishes `build/` to GitHub Pages. Configure the repository `homepage` first.
- The app is fully client-side; no backend or database is required.
- JSONPlaceholder is a public demo API; do not depend on it for production data.

## Notes and limitations

- The implementation is on `develop`, not `master`. Check out `develop` before running the app.
- `node-sass` 4 is the main toolchain constraint; modern Node needs a workaround or a Sass migration.
- The posts view has a small state bug on the develop branch: clearing the selected post resets `postsByUserState` instead of `commentsState`. Verify before extending it.

---

**Author:** Mario Granada
