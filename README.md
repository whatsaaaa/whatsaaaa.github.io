<img src=".github/assets/readme-header.svg" alt="whatsaaaa" width="100%">

# whatsaaaa.github.io

Personal landing page for projects, tools and ideas, served at <https://whatsaaaa.github.io/>. Built with [Astro](https://astro.build).

## Development

Requires Node.js and pnpm at the versions set by `engines` and `packageManager` in `package.json`.

```sh
pnpm install
pnpm dev       # local dev server at http://localhost:4321
pnpm check     # type-check .astro and .ts files
pnpm lint      # ESLint
pnpm format    # Prettier
pnpm build     # static build into dist/
pnpm preview   # serve the build locally
```

## Adding a project

Add a Markdown file to `src/content/projects/`. The file name becomes the URL (`src/content/projects/my-tool.md` is served at `/projects/my-tool/`). The frontmatter is validated against the schema in `src/content.config.ts`:

```md
---
title: my-tool
description: One sentence on what it does.
status: active # active | experimental | planned | archived
tags: [TypeScript]
links:
  - label: Source on GitHub
    url: https://github.com/whatsaaaa/my-tool
featured: true # shown on the home page
date: 2026-11-10
---

Longer description in Markdown.
```

Ideas work the same way in `src/content/ideas/`, with `title`, `description` and `date`.

Other repositories publish their own GitHub Pages sites under this domain, such as <https://whatsaaaa.github.io/form-builder/>. Do not add pages at those paths.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages through the [deploy workflow](.github/workflows/deploy.yml). It can also be run by hand from the Actions tab. Pull requests run the [CI workflow](.github/workflows/ci.yml): format check, lint, `astro check` and a build.
