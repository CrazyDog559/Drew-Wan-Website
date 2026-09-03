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

Take all of these from **hPanel → Files → FTP Accounts → FTP Details**.

| Secret | Value | Notes |
|---|---|---|
| `HOSTINGER_HOST` | the **FTP IP** | See the warning below — do **not** use the domain |
| `HOSTINGER_USERNAME` | the **FTP Username** | Looks like `uXXXXXXXXX`, not your hPanel login |
| `HOSTINGER_PASSWORD` | the FTP password | Not your hPanel password |
| `HOSTINGER_PORT` | `21` | Defaults to `21` if unset. **Hostinger has no listener on 990** |
| `HOSTINGER_TARGET_DIR` | `public_html` | Matches hPanel's *File Upload Path*. Defaults to `public_html` if unset |

> **Use the FTP IP, not the domain name.** `drewwan.com` resolves to Hostinger's
> CDN edge (`*.cdn.hstgr.net`), which does not run an FTP server, and
> `ftp.drewwan.com` has no DNS record at all. Pointing `HOSTINGER_HOST` at either
> makes the deploy hang and fail with `AggregateError [ETIMEDOUT]`. The **FTP IP**
> field in hPanel is the only address that answers on port 21. Re-check it after
> any Hostinger account or plan migration, since the IP can change.

There is also one optional repository **variable** (Settings → Secrets and
variables → Actions → *Variables* tab — not a secret, because being able to read
it while debugging matters):

| Variable | Values | Default |
|---|---|---|
| `HOSTINGER_PROTOCOL` | `ftp` or `ftps` | `ftp` |

`ftps` upgrades to explicit TLS on the same port 21 so the password isn't sent
in the clear. Worth trying once a deploy succeeds — but note that connecting by
**IP** means the server's TLS certificate won't match the address, which can
fail validation. Test it with a dry run before relying on it, and fall back to
`ftp` if it errors.

> Never commit Hostinger credentials, tokens, or `.env` files. They belong in
> GitHub Actions secrets and variables only.

### Testing the connection without deploying

The workflow accepts a **dry run**: Actions → *Deploy To Hostinger* → *Run
workflow* → tick **dry_run** (and optionally set **log_level** to `verbose`).
It connects, authenticates, and diffs the file list, but uploads nothing — so
it's safe to run repeatedly while sorting out credentials.

### Troubleshooting `AggregateError [ETIMEDOUT]`

If the deploy step fails in about a second with `ETIMEDOUT` on the *control
socket*, the TCP connection never completed. In order of likelihood:

1. **Wrong host.** By far the most common cause. Read the IPv4 addresses out of
   the error and compare them with the **FTP IP** in hPanel. If they differ,
   `HOSTINGER_HOST` is pointing at the website/CDN rather than the FTP server.
2. **Wrong port.** Hostinger serves FTP and explicit FTPS on **21**. If
   `HOSTINGER_PORT` is set to `990` or `22`, nothing is listening and it will
   always time out. Delete the secret to fall back to `21`.
3. **FTP disabled or IP-restricted.** hPanel → *Files* → *FTP Accounts* has an
   allowlist. GitHub-hosted runners use a large, changing IP range, so an
   allowlist will block them. Either clear the restriction or deploy from a
   fixed IP.
4. **Node's Happy Eyeballs timeout.** Actions now run on Node 24, which aborts
   each connection attempt after 250 ms by default. The workflow already raises
   this to 5 s via `NODE_OPTIONS`; if you ever see a sub-second `ETIMEDOUT`
   listing several IPv4 and IPv6 addresses, that setting has gone missing.

`ENETUNREACH` on the IPv6 addresses in that error is normal and not the problem
— GitHub runners have no IPv6 connectivity, so those attempts always fail.

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
- **CDN.** The domain is served through Hostinger's CDN (`*.cdn.hstgr.net`),
  which caches in front of the origin. If a deploy succeeds but the old site is
  still showing, purge the cache in hPanel before assuming the upload failed.

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
  status: 'In progress',             // optional; badges the card instead of date
  ctaLabel: 'What’s coming',        // optional; overrides "Case study"
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

Fiji is a project entry like any other — it appears in `src/data/projects.js`
and shows up in the grid — but it lives at `/projects/fiji` and is rendered by
`src/pages/Fiji.jsx` instead of the shared detail template, because it is still
an intentional "still in progress" state. `App.jsx` routes the static
`projects/fiji` segment ahead of `projects/:slug` to make that work, and `/fiji`
redirects there for older links.

The `plannedSections` array at the top of `Fiji.jsx` is the scaffolding: replace
a placeholder card with real content (photos, reflections, trip details) as it
becomes available. Once there is enough to run through the normal template,
delete the `projects/fiji` route and the page, and give the data entry a
`description` — nothing else needs to change.

The `status` field on a project (`'In progress'` here) renders a pulsing badge on
its card in place of the date, so a placeholder always reads as deliberate.

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
