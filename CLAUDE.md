# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Salonul Universitar is a static website for a Romanian student cultural circle in Bucharest. It's a single-page site built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no package manager.

**Live site**: https://salonuluniversitar.com

## Development

There is no build step, test suite, or linter. To develop locally, serve the files with any static server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deployment

**GitHub repo**: https://github.com/erik803/salonul-universitar — only push when the user explicitly asks.

Push to `main` → GitHub Pages deploys automatically. The custom domain is configured via the `CNAME` file. No CI/CD pipeline exists beyond GitHub Pages.

## Architecture

This is a zero-dependency static site. The entire app lives in three files:

- **`index.html`** — Single-page structure with all sections (hero, about, pillars, methodology, team, contact, footer). Romanian language (`lang="ro"`).
- **`css/styles.css`** (~1500 lines) — All styling, theming, responsive breakpoints, and animations. Uses CSS custom properties extensively for the theme system.
- **`js/main.js`** (~200 lines) — Loading screen, mobile nav toggle, dark mode toggle with localStorage, scroll animations via IntersectionObserver, email copy-to-clipboard, image lazy-load fade-in.

Assets live in `assets/logo/` (favicon + dual theme logos) and `assets/team/` (member photos as PNGs).

## Key Patterns

**Dark mode**: Default is dark. Two logo files swap based on theme (`logo-light.png` / `logo-white.png`). Preference stored in `localStorage` under key `darkMode` (`"enabled"` / `"disabled"`).

**Theme system**: CSS custom properties defined on `:root` (light) and `body.dark-mode` (dark). Colors, fonts, spacing are all variable-driven. Key font stack: Playfair Display (headings), Courier Prime (body), Caveat (handwriting accents).

**Responsive breakpoints**: 769px+ (desktop), 768px and below (tablet), 480px and below (mobile). Text justification is desktop-only to avoid awkward wrapping on mobile.

**Navigation**: Anchor-based (`#home`, `#despre`, `#echipa`, `#contact`) with smooth scroll and 80px offset for the fixed navbar. Mobile hamburger menu locks body scroll when open.

**Scroll animations**: `.pillar-card` elements get `.reveal` class via IntersectionObserver at 20% threshold.

**Loading screen**: Full overlay hidden on `window.load` with a 3-second fallback timeout.

## SEO Files

- `robots.txt` — allows all, disallows `.git` and `.claude`
- `sitemap.xml` — 4 URLs with priority weighting
- Full Open Graph and Twitter Card meta tags in `index.html`
