# Vishal Kashyap — Portfolio

Personal developer portfolio for Vishal Kashyap, Full Stack Developer. This package contains the complete project exactly as it currently exists in the Canvas preview.

## Tech stack (as currently built)

Plain **HTML5, CSS3 (custom properties, Grid, Flexbox), and vanilla JavaScript** — no framework, no bundler, no build step. It was designed and iterated on as a static site so it could render instantly as a live preview.

> **Note:** Earlier in the design process, React / Next.js / TypeScript / Tailwind CSS / Framer Motion were discussed as the eventual target stack. The version currently in Canvas — and therefore what's packaged here — is the hand-built static implementation, not that framework version. If you want the actual componentized Next.js/TypeScript codebase (`Navbar`, `Hero`, `ProjectCard`, etc. as real React components), that's a separate build — just ask and it can be scaffolded as a follow-up.

## Project structure

```
vishal-kashyap-portfolio/
├── index.html                  Main HTML document
├── assets/
│   ├── css/
│   │   └── styles.css          All styles (design tokens, layout, components, responsive rules)
│   ├── js/
│   │   └── main.js             All interactivity (nav, project/skill filters, live GitHub
│   │                           activity graph, live clock, theme toggle)
│   └── images/
│       ├── nlp-resume-scoring-preview.jpg   Real screenshot of the NLP project
│       └── pollify-preview.jpg              Real screenshot of Pollify
├── package.json
├── .gitignore
└── README.md                   This file
```

---

## 1. How to install dependencies

There's exactly one optional dev dependency: a tiny local static file server (`serve`), used only for local development — nothing in the site itself depends on Node or npm at runtime.

```bash
npm install
```

You can skip this entirely if you just want to open the file directly — see Option B below.

## 2. How to run locally

**Option A — with the dev server (recommended):**

```bash
npm run dev
```

Then open **http://localhost:3000**. Serving over `http://` (rather than `file://`) avoids CORS quirks some browsers apply to `fetch()` calls made from local files, which matters for the live GitHub activity widget (see below).

**Option B — zero install:**

Just double-click `index.html`, or open it directly in a browser. Everything renders the same way; the only risk is the live GitHub activity graph occasionally failing to fetch from a `file://` page in stricter browsers. If that happens, it falls back gracefully to a plain link to the GitHub profile — it never shows fake data.

## 3. How to build for production

There is no compilation or bundling step — this project *is* the production build already.

```bash
npm run build
```

This just prints a reminder of that. To deploy:

- **Vercel / Netlify** — point the project at this folder. No build command needed; output directory is `.` (the project root).
- **GitHub Pages** — push this folder to a repository and enable Pages on the root branch/folder.
- **Any static host / S3 / Cloudflare Pages / etc.** — upload the contents of this folder as-is.

## 4. Required environment variables

**None.** There are no API keys, secrets, or `.env` files anywhere in this project. The two external calls the page makes at runtime (see below) are both free, public, keyless, client-side `fetch()` calls — nothing to configure.

## 5. External assets, fonts, and icons used

| What | Source | Notes |
|---|---|---|
| Fonts — IBM Plex Sans, IBM Plex Mono, IBM Plex Serif | Google Fonts CDN (linked in `index.html <head>`) | Requires internet access on first load; not bundled locally |
| Tech-stack logos (React, Next.js, Python, etc.) | `https://skillicons.dev` | Fetched live, one `<img>` per technology; no install or key needed. If the service is ever unreachable, the icon just won't render — the text label still shows. |
| GitHub activity calendar | `https://github-contributions-api.jogruber.de` | Fetched client-side in `main.js` for the username `Vishal795-knightrider`. Real, live data — not hardcoded. If the fetch fails for any reason, the section shows a plain fallback link to the real GitHub profile rather than placeholder numbers. |
| Project preview screenshots | `assets/images/*.jpg` | Real screenshots of the two live projects, compressed to JPEG. Not sourced from any external CDN — bundled locally in this package. |
| Resonology AI preview | None — pure CSS/inline SVG | No public screenshot exists yet for this in-progress project, so this preview is an original abstract mockup, clearly labeled "Concept Preview" rather than a real screenshot. |
| UI icons (mail, GitHub mark, external-link arrow, etc.) | Hand-written inline SVG in `index.html` | No icon font or icon library dependency (no Font Awesome, no Lucide, etc.) |

### A note on the two live-data widgets

Both the tech-stack icons and the GitHub activity graph call third-party public APIs **from the visitor's browser**, on every page load. That's fine for a personal portfolio's traffic level. If this ever moves to a framework with server-side rendering, it'd be worth caching the GitHub activity response (e.g., revalidate once a day) instead of hitting the API on every single visit.

---

## Browser support

Built and tested against evergreen Chromium/Firefox/Safari. Uses standard modern CSS (custom properties, `aspect-ratio`, CSS Grid) and standard `fetch`/`async`-`await` JavaScript — no polyfills included, so very old browsers (IE11, etc.) are not supported.
