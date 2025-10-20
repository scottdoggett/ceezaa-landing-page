# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Ceezaa landing page built with Next.js 15.5.6, React 19, and Tailwind CSS 4. It uses TypeScript and follows the Next.js App Router architecture.

## Development Commands

### Running the application
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm start            # Start production server
```

### Code quality
```bash
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.6 with App Router
- **React**: v19.1.0
- **TypeScript**: Configured with strict mode enabled
- **Styling**: Tailwind CSS 4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono via next/font/google

### Project Structure
```
src/
  app/              # Next.js App Router directory
    layout.tsx      # Root layout with font configuration and metadata
    page.tsx        # Home page component
    globals.css     # Global styles and Tailwind imports
```

### Path Aliases
The project uses `@/*` as an alias for `./src/*` (configured in tsconfig.json).

### Styling Configuration
- Tailwind CSS 4 is configured through PostCSS (`postcss.config.mjs`)
- Global CSS variables for theming are defined in `src/app/globals.css`
- Uses inline `@theme` directive for custom Tailwind theme tokens
- Dark mode is handled via `prefers-color-scheme` media query
- Font variables (`--font-geist-sans`, `--font-geist-mono`) are injected by the root layout

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler
- Path alias: `@/*` maps to `./src/*`

### ESLint Configuration
- Extends Next.js core-web-vitals and TypeScript presets
- Uses flat config format (eslint.config.mjs)
- Ignores: node_modules, .next, out, build, next-env.d.ts
