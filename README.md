# Drew Wan — Portfolio

Personal portfolio for Andrew (Drew) Wan. Single-page React app with routed detail
pages, built with Vite and Tailwind CSS and deployed to Hostinger.

Live at **drewwan.com**.

---

## Tech stack

| | |
|---|---|
| Framework | React 19 + React Router 7 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 3 (+ `@tailwindcss/typography`) |
| Package manager | npm |
| Hosting | Hostinger (static, Apache) |
| CI/CD | GitHub Actions → FTP deploy |

---

## Getting started

Requires **Node.js 22+** and npm.

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:5173>.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-free production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally to sanity-check it |
| `npm run lint` | Run ESLint across the project |

There is no TypeScript in this project, so there is no separate type-check step;
`npm run lint` is the static-analysis gate. There is no test suite yet.

---

## Production build

```bash
npm run build
```

**Output directory: `dist/`.** That folder is what gets deployed — its *contents*
go into Hostinger's `public_html`, not the folder itself.

The build copies everything in `public/` to the root of `dist/`, including
`public/.htaccess`, which supplies the SPA fallback, compression, caching, and
MIME rules Hostinger needs.

Vite's `base` is left at the default `/`, so the site must be served from a
domain root (or subdomain root), not from a subdirectory. If it ever needs to
live under a path, set `base` in `vite.config.js` to match.

---

## Deploying to Hostinger

### Automatic (preferred)

`.github/workflows/deploy-hostinger.yml` builds and FTP-deploys `dist/` on every
push to `main`, and can also be triggered manually from the Actions tab.

Add these repository secrets under
**Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Example |
|---|---|
| `HOSTINGER_HOST` | `ftp.drewwan.com` |
| `HOSTINGER_USERNAME` | your Hostinger FTP user |
| `HOSTINGER_PASSWORD` | your Hostinger FTP password |
| `HOSTINGER_PORT` | `21` (FTP) or `990` (FTPS) |
| `HOSTINGER_TARGET_DIR` | `/public_html` |

> Never commit Hostinger credentials, tokens, or `.env` files. They belong in
> GitHub Actions secrets only.

### Manual fallback

```bash
npm run build
```

Then upload the **contents** of `dist/` into `public_html` over SFTP/FTP,
including the dot-file `.htaccess` (many FTP clients hide it by default — make
sure hidden files are visible).

### Hostinger notes

- **Case sensitivity.** Hostinger's Linux filesystem is case-sensitive while
  macOS is not, so a path that works locally can 404 in production. Asset paths
  in `src/` are kept byte-for-byte identical to the filenames in `public/`.
- **Deep links.** `/projects/neural-decoding` and friends only resolve because
  of the rewrite rule in `.htaccess`. If refreshing a nested route starts
  returning 404, check that `.htaccess` actually made it onto the server.
- **Cache.** `index.html` is sent with `no-cache` so a new deploy is picked up
  right away; fingerprinted `assets/*.js|css` are cached for a year.

---

## Project structure

```
src/
├── components/
│   ├── layout/          Header, Footer, Layout
│   ├── home/            Homepage sections (Hero, About, Projects, …)
│   └── common/          Button, Section, PageHeader, EntityCard,
│                        EntityDetail, PdfPreview, Icon, ThemeToggle
├── pages/               Home, Projects, ProjectDetail, Hobbies,
│                        HobbyDetail, Fiji, NotFound
├── data/                projects.js, hobbies.js, skills.js, experience.js
├── hooks/               useReveal, useScrollSpy, useScrollToHash, useTheme
├── context/             ThemeContext
└── index.css            Design tokens, base styles, utilities

public/
├── .htaccess            SPA fallback + caching + MIME
└── assets/
    ├── Logo/            Brand marks
    ├── Profile/         Portraits (originals + web-sized derivatives)
    ├── Resume/          Résumé PDFs
    └── Projects/        Per-project media, thumbnails, and papers
```

### Design system

Colors, spacing, and typography are driven by CSS custom properties declared in
`src/index.css` (`:root` for light, `.dark` for dark) and surfaced to Tailwind
through `tailwind.config.js`. To retheme the site, change the token values in
one place rather than editing utility classes.

Type pairing: **Inter** for UI and prose, **JetBrains Mono** for labels, metadata,
and tech tags. Both are loaded from Google Fonts in `index.html`.

Motion is opt-in through the `useReveal` hook and the `.reveal` class, and the
whole system is disabled under `prefers-reduced-motion: reduce`.

---

## Adding content

### A new project

Add an entry to `src/data/projects.js`:

```javascript
{
  id: 12,
  slug: 'project-slug',              // becomes /projects/project-slug
  title: 'Project Title',
  excerpt: 'One or two sentences for the card and detail hero.',
  thumbnail: '/assets/Projects/Folder/thumbnail-1280.jpg',
  thumbnailAlt: 'Describe the image for screen readers',
  featured: true,                    // show it on the homepage grid
  category: 'Web Development',       // also drives the /projects filter
  date: '2026',                      // optional
  context: 'UCLA ECE C143A',         // optional secondary label
  collaborators: ['Name'],           // optional
  techStack: ['React', 'Vite'],
  liveUrl: 'https://…',              // optional
  githubUrl: 'https://…',            // optional
  youtubeId: 'video_id',             // optional
  highlights: [                      // optional "key outcomes" cards
    { label: 'Metric', value: '10.2×', detail: 'What it means.' },
  ],
  pdfEmbeds: [                       // optional inline PDF previews
    { label: 'Paper title', description: 'Course', href: '/assets/…/paper.pdf' },
  ],
  resourceLinks: [                   // optional buttons in the detail hero
    { label: 'Final report (PDF)', href: '/assets/…/paper.pdf' },
  ],
  description: `<p>HTML body content.</p>`,
}
```

### The Fiji page

`src/pages/Fiji.jsx` currently renders an intentional "still in progress" state.
The `plannedSections` array at the top of the file is the scaffolding: replace a
placeholder card with real content (photos, reflections, trip details) as it
becomes available.

### Images

Large source images should get a web-sized derivative before being referenced.
The gallery and card thumbnails point at those derivatives, not the originals:

```bash
sips -s format jpeg -s formatOptions 72 --resampleHeightWidthMax 1400 input.jpg --out output.jpg
```

---

## Accessibility & performance notes

- Semantic landmarks (`header` / `nav` / `main` / `footer`), a skip link, and a
  single global `:focus-visible` treatment.
- All decorative graphics are `aria-hidden`; content images carry real alt text.
- The mobile nav is `hidden` when closed (so it stays out of the tab order) and
  closes on Escape, returning focus to its toggle button.
- Photography is served from downscaled derivatives in
  `public/assets/Projects/Photography/<collection>/web/`; the full-resolution
  originals stay alongside them but are not shipped to the browser.
