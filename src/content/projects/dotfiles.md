---
title: dotfiles
description: My macOS setup, written down as code. One repo, a few commands, and a fresh Mac looks exactly like my last one.
status: active
tags: [Nix, nix-darwin, home-manager, macOS]
links:
  - label: Source on GitHub
    url: https://github.com/whatsaaaa/dotfiles
featured: true
date: 2026-10-22
---

This repo configures a whole Mac declaratively with [nix-darwin](https://github.com/nix-darwin/nix-darwin) and [home-manager](https://github.com/nix-community/home-manager): system settings, apps, CLI tools, shell, editor, terminal, and AI agent configs.

It is public so you can read it, steal ideas, or fork it. It is a personal config, not a framework, so feature requests and pull requests are not accepted.

## What is inside

- macOS preferences, and Homebrew apps and tools declared in `configuration.nix`
- zsh with a [starship](https://starship.rs) prompt
- Neovim with [lazy.nvim](https://github.com/folke/lazy.nvim) and WezTerm, both in rose-pine moon
- One `AGENTS.md` shared by Claude, Codex and opencode
- The .NET 10 SDK through Nix
