# Hi, I'm Matt 👋

Product & design leader with 20+ years shipping digital products from concept to
launch — UX, full-stack development, and AI-accelerated delivery. Austin, TX.

🌐 **[mattmccloskey.com](https://mattmccloskey.com)** · 📫 mattmccloskey@gmail.com

Currently building: **ShrinkNotes** (encrypted psychotherapy SaaS), **Sovereign
Goods** (apparel), **Strength + Curiosity** (writing), **Shores of Ignorance**
(podcast), and **Good Morning** (poetry).

---

## This repo

Source for **mattmccloskey.com** — built with [Astro](https://astro.build) and
deployed to **Cloudflare Pages**.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # serve the production build
```

### Deploy to Cloudflare Pages

**Git integration (recommended):** connect this repo in the Cloudflare dashboard
(Workers & Pages → Create → Pages → Connect to Git) with build command
`npm run build` and output directory `dist`, then add `mattmccloskey.com` as a
custom domain.

**Direct upload:** `npm run build && npx wrangler pages deploy dist`
(`wrangler.jsonc` sets `pages_build_output_dir: dist`).

### Structure

```
src/
  layouts/Base.astro        # head/SEO, header, footer, scroll-reveal JS
  components/               # Header, Footer, ProjectCard, PortfolioProject
  pages/index.astro         # home / personal brand landing
  pages/portfolio.astro     # scrolling, responsive rebuild of the PDF
  data/projects.ts          # independent projects (edit to add one)
  assets/portfolio/*.webp   # screenshots exported from the 2026 PDF
  styles/global.css         # design tokens + base styles
public/                     # downloadable PDFs, favicon
```

### Before launch — confirm

- `og.jpg` social-share image in `public/` (referenced by `Base.astro`).
- URLs flagged `verify: true` in `src/data/projects.ts` (Substack, podcast).
- LinkedIn URL in `Header.astro` / `Footer.astro`.
