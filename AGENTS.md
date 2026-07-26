# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

Personal brand website for Matt McCloskey (**mattmccloskey.com**) — a static
marketing site showcasing his resume, an interactive portfolio, and independent
projects. Built with Astro and deployed to Cloudflare Pages. Three pages only:
home (`/`), portfolio (`/portfolio`), resume (`/resume`).

> Note: this is the special `mattmccloskey/mattmccloskey` GitHub **profile** repo —
> `README.md` renders on the GitHub profile. Keep it human/profile-friendly; put
> agent/build detail here, not there.

## Tech Stack

- **Astro `^7`** (static output, no SSR adapter) — `.astro` components + islands.
- **Language:** TypeScript (strict), plain CSS (no Tailwind/preprocessor).
- **Package manager:** **npm** (`package-lock.json` is committed). Node ≥ 20 (developed on 24).
- **Fonts:** self-hosted via `@fontsource/oswald` (display) + `@fontsource/inter` (body).
- **Images:** `astro:assets` `<Image>` + `sharp` for optimization.
- **Hosting:** Cloudflare Pages (static `dist/`). Large PDFs live on Cloudflare R2.
- No test runner, linter, or formatter is configured. Do not assume one exists.

## Repository Structure

```
src/
  pages/            # one file per route: index / portfolio / resume (.astro)
  layouts/Base.astro# HTML shell: <head>/SEO/OG, GA tag, Header, Footer, scroll-reveal JS
  components/        # Header, Footer, ProjectCard, PortfolioProject, SocialLinks
  data/             # typed content (edit these to change site content — see below)
    projects.ts     #   home "independent projects" cards
    resume.ts       #   resume page content (summary, experience, skills, ventures)
    site.ts         #   download URLs (resume + portfolio PDFs, hosted on R2)
    social.ts       #   personal social links
  styles/global.css # design tokens (CSS custom properties) + base styles
  assets/
    logos/          # project logos (SVG) + music-avatar.webp
    portfolio/      # pre-optimized WebP screenshots used by /portfolio
    headshot.jpeg
public/             # served as-is: favicon.svg, og.jpg (NO PDFs — see Guardrails)
astro.config.mjs    # site URL + image config
wrangler.jsonc      # Cloudflare Pages config (pages_build_output_dir: dist)
```

## Development Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:4321
npm run build        # static build → dist/ (also the de-facto typecheck; see Verification)
npm run preview      # serve the production build locally
```

Deploy (Cloudflare Pages): connect the repo (build `npm run build`, output `dist`),
or `npm run build && npx wrangler pages deploy dist`. `wrangler` is not a local
dependency — use `npx wrangler` or a global install.

## Conventions

- **Content lives in `src/data/*.ts`, not in markup.** Add/edit a project, resume
  entry, or download link by editing the typed array there — the pages map over it.
- **Styling:** scoped `<style>` blocks inside each `.astro` component. Global tokens
  (colors, fonts, spacing, radii, shadows) are CSS custom properties in
  `src/styles/global.css` — use `var(--…)`, do not hardcode brand values.
  Signature blue is `--blue` (`#499ed7`); each project has its own `accent`/`ink`.
- **Typography:** display/headings use `var(--font-display)` (Oswald, uppercase,
  letter-spaced); body uses `var(--font-body)` (Inter).
- **Naming:** components `PascalCase.astro`; data files `kebab`/`lower` `.ts`;
  CSS classes are BEM-ish (`.pcard__cta`, `.cv-role__title`).
- **Images:** import from `src/assets/**` and render with `astro:assets` `<Image>`
  (or `<img src={logo.src}>` for inline SVG logos). Don't reference by public URL.
- **Contact email is `hello@mattmccloskey.com`** everywhere (not the old gmail).
- **Text:** write "Resume" (no accents), matching the rest of the site.
- **Commits:** short imperative subject (e.g. "Add Hostmade to independent projects").
  Only commit/push when asked. Branch first if on `main` unless told otherwise.

## Architecture Notes

- **`Base.astro` is the single shared shell.** It imports fonts + `global.css`,
  sets SEO/OG tags, includes the Google Analytics (`gtag.js`) snippet as
  `is:inline`, and holds the scroll-reveal + sticky-header scripts. All pages wrap
  their content in `<Base>`.
- **Scroll reveal:** add `data-reveal` to any element; an `IntersectionObserver`
  in `Base.astro` toggles `.is-in`. Stagger with `style="--reveal-delay:Nms"`.
  Respect `prefers-reduced-motion` (already handled in CSS).
- **`ProjectCard.astro` uses the stretched-link pattern** (`.pcard__stretch::after`
  covers the card) so the whole card is clickable while social icons stay
  independently clickable. Do NOT wrap the whole card in an `<a>` — nested anchors
  break it.
- **CSS grid children set `min-width: 0`** (and long words use `overflow-wrap`) to
  prevent horizontal overflow from unbreakable display type. Keep this when editing
  grids/hero.
- **PDF download URLs are centralized in `src/data/site.ts`** and point at
  `files.mattmccloskey.com` (Cloudflare R2). The PDFs are intentionally NOT in the
  repo. Change the host/keys there, not in individual pages.
- **Home projects grid is a 3×3** where cards 1 and 4 span two columns
  (`:nth-child` rules in `index.astro`); adding/removing a project may require
  revisiting those span rules and the mobile resets.

## Common Tasks

- **Add a home project:** append an entry to `projects` in `src/data/projects.ts`
  (name, kicker, tagline, description, url, cta, `accent`/`ink` colors, optional
  `logo`, `socials`, `status`). Put a logo in `src/assets/logos/` and import it.
- **Edit the resume:** update `src/data/resume.ts` (summary/highlights/skills/
  experience/ventures). The downloadable PDF is separate (on R2) — flag when they
  diverge.
- **Change a download link:** edit `src/data/site.ts`.
- **Add a portfolio case study:** add WebP(s) to `src/assets/portfolio/`, import in
  `src/pages/portfolio.astro`, and add a `PortfolioProject` entry.

## Guardrails / Do Not

- **Never commit large binaries (PDFs, raw exports).** The repo is PDF-free by
  design; portfolio/resume PDFs live on R2. A gitignored `*.pdf` at the repo root
  is an upload artifact — leave it untracked.
- **Never commit secrets** — no API tokens, Cloudflare account/zone IDs, or `.env`.
  `wrangler.jsonc` must stay ID-free (Pages resolves account via auth). This repo
  is **public**.
- **Do not edit generated/ignored paths:** `dist/`, `node_modules/`, `.astro/`.
- **Do not add heavy dependencies or a CSS framework** (Tailwind, UI kits) — the
  site is intentionally dependency-light with hand-written CSS.
- **Do not hardcode brand colors/fonts** — use the tokens in `global.css`.
- **Do not push or deploy unless explicitly asked.**
- Assets under `src/assets/portfolio/` are real client work on a public repo —
  don't add confidential material without the owner's OK.

## Verification

There are no tests. To confirm a change is complete:

1. **`npm run build` must succeed** — it is the de-facto typecheck and will fail on
   TypeScript/import/Astro errors. (`astro check` is not installed; `npm run build`
   is the gate.)
2. **`npm run preview`** and load the affected page(s); check desktop and a narrow
   (~390–500px) width for layout/overflow — grids and hero type are the usual
   suspects.
3. If you touched content in `src/data/*.ts`, confirm it renders on the right page
   (home / portfolio / resume) and that links resolve.
4. "Done" = build passes, the page renders correctly at mobile + desktop widths,
   and no horizontal scroll appears.
