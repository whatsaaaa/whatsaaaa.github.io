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
  - label: Package on npm
    url: https://www.npmjs.com/package/@whatsaaaa/form-builder-schema
featured: true
date: 2026-10-27
---

form-builder turns a JSON form definition into a [Valibot](https://valibot.dev) schema that [Formisch](https://formisch.dev) understands, with the fields, validation, layout and conditions it describes. It is meant for forms that do not belong in source code: forms stored in a database, served by an API or put together in a visual editor.

The core is framework-agnostic and works with Formisch's own package for Vue, React, Preact, Solid, Svelte, Qwik and Angular. Headless adapters for Vue and React render the fields with your own components.

## Packages

- [`@whatsaaaa/form-builder-schema`](https://www.npmjs.com/package/@whatsaaaa/form-builder-schema) builds Formisch-ready Valibot schemas from JSON definitions. It is the core.
- [`@whatsaaaa/form-builder-affects`](https://www.npmjs.com/package/@whatsaaaa/form-builder-affects) adds conditions that show, hide and clear fields, sections and steps.
- [`@whatsaaaa/form-builder-vue`](https://www.npmjs.com/package/@whatsaaaa/form-builder-vue) renders definitions with Formisch and your own Vue components.
- [`@whatsaaaa/form-builder-react`](https://www.npmjs.com/package/@whatsaaaa/form-builder-react) renders definitions with Formisch and your own React components.

## Status

1.0 is in release candidates on the `rc` dist-tag, while a plain install still gives 0.x. From 1.0 the schema, Vue and React packages follow semantic versioning, and the affects package stays before 1.0 for now. A CLI that turns definitions into typed TypeScript and a visual builder that writes definitions are planned.
