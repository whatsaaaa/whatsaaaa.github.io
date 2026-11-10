---
title: form-builder
description: Describe forms in JSON and get validated Formisch forms out, built on typed Valibot schemas.
status: active
tags: [TypeScript, Valibot, Formisch, Vue, React]
links:
  - label: Documentation
    url: https://whatsaaaa.github.io/form-builder/
  - label: Source on GitHub
    url: https://github.com/whatsaaaa/form-builder
  - label: '@whatsaaaa/form-builder-schema on npm'
    url: https://www.npmjs.com/package/@whatsaaaa/form-builder-schema
featured: true
date: 2026-10-27
---

form-builder turns a JSON form definition into a [Valibot](https://valibot.dev) schema that [Formisch](https://formisch.dev) understands, with the fields, validation, layout and conditions it describes. It is meant for forms that do not belong in source code: forms stored in a database, served by an API or put together in a visual editor.

## Packages

- [`@whatsaaaa/form-builder-schema`](https://www.npmjs.com/package/@whatsaaaa/form-builder-schema) builds Formisch-ready Valibot schemas from JSON definitions. It is the framework-agnostic core.
- [`@whatsaaaa/form-builder-affects`](https://www.npmjs.com/package/@whatsaaaa/form-builder-affects) shows, hides and clears fields, sections and steps by conditions.
- [`@whatsaaaa/form-builder-vue`](https://www.npmjs.com/package/@whatsaaaa/form-builder-vue) renders definitions with Formisch and your own Vue components.
- [`@whatsaaaa/form-builder-react`](https://www.npmjs.com/package/@whatsaaaa/form-builder-react) renders definitions with Formisch and your own React components.

## Status

The packages are pre-1.0, so the API and the JSON format can change between releases. A code generator that turns definitions into typed TypeScript and a visual builder are planned.
