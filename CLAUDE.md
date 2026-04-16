# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format with Prettier
npm run format:check # Check formatting without modifying
```

No test suite is configured yet.

## Architecture

**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS 4 + React 19

**Routing:** App Router with file-based routing under `app/`. Currently a single-page app (`app/page.tsx` = `/`).

**Component split:**

- Server Components by default (Hero, ActionButton, layout)
- Client Components use `"use client"` directive (Navbar, MobileMenu, Countdown, PromptBox)

**Key directories:**

- `app/` — layouts, pages, and global styles
- `components/` — UI components, organized by feature (`navbar/`, `hero/`)
- `constants/index.ts` — site-wide constants: nav links, pain points, prompt phrases, countdown target date
- `lib/utils.ts` — `cn()` classname helper, `getTimeLeft()` countdown logic
- `public/icons/`, `public/images/` — static assets

**Styling:** Tailwind CSS 4 via `@tailwindcss/postcss`. Theme tokens (colors, fonts) are defined as CSS variables in `app/globals.css` under `@theme inline`. Custom utility classes (`flex-center`, `col-center`, `text-md`, `shadow-soft-card`) are also defined there. Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`.

**Fonts:** Roboto (headings) and Inter Tight (body) loaded via Next.js Google Fonts in `app/layout.tsx`.

**Path alias:** `@/*` resolves to the repo root (e.g. `@/components/...`, `@/lib/utils`).

**Import conventions:**

- Use `./` for same-folder siblings; use `@/` for anything crossing a folder boundary (never `../`).
- Group imports with a blank line between external packages (`react`, `next/*`, third-party) and internal (`@/...`, `./...`).
