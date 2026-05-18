# HANDOVER — Elizaveta Zhuravleva Portfolio
**Last updated:** May 2026  
**Project folder:** `04_final_site`  
**Stack:** Next.js 14.2.5 · TypeScript 5 · Tailwind CSS 3.4 · Google Fonts via `next/font/google`

---

## 0. Critical Constraints (Read First)

1. **Only edit `src/app/page.tsx` for homepage work.** Do not touch Nav, Footer, `globals.css`, `layout.tsx`, data files, or inner-page routes unless explicitly asked.
2. **The homepage is mostly approved.** Do not redesign, reorder, or restructure any section unless the user specifically asks. Treat the homepage as locked.
3. **After every edit run:** `npx tsc --noEmit` — zero output = zero errors. This is the only verification step needed (do not use `next build`).
4. **Inline style tag must use `dangerouslySetInnerHTML`** — see §7. Never revert to `<style>{...}</style>`.

---

## 1. Project Overview

A cinematic, premium dark portfolio for Elizaveta Zhuravleva — creative producer, art director and visual artist based in London. Aesthetic direction: **dark graphite-blue, editorial, not warm/beige/SaaS**. Think fashion archive meets art institution.

---

## 2. File Structure

```
04_final_site/
├── public/
│   ├── images/               ← all static images (§6)
│   └── videos/               ← video assets (§6)
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Root layout, fonts, metadata — DO NOT EDIT
│   │   ├── page.tsx          ← HOMEPAGE — primary working file
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── work/page.tsx
│   │   ├── live-production/page.tsx
│   │   ├── art-direction/page.tsx
│   │   ├── art-paintings/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── projects/
│   │   │   ├── wake-up/page.tsx
│   │   │   ├── burning-house/page.tsx
│   │   │   ├── brdatn/page.tsx
│   │   │   ├── eclipse-obverse/page.tsx
│   │   │   ├── fluid-energy/page.tsx
│   │   │   └── psi-el/page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx       ← DO NOT EDIT
│   │   │   └── Footer.tsx    ← DO NOT EDIT
│   │   └── ui/
│   │       ├── ArtworkCard.tsx
│   │       ├── PaintingViewer.tsx
│   │       ├── PlaceholderImage.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectHero.tsx
│   │       ├── SectionHeader.tsx
│   │       └── VideoEmbed.tsx
│   ├── data/
│   │   ├── projects.ts       ← project data — edit for content only
│   │   └── artworks.ts       ← painting data — edit for content only
│   └── styles/
│       └── globals.css       ← design tokens, utility classes — DO NOT EDIT
```

---

## 3. Stack Details

| Layer | Detail |
|---|---|
| Framework | Next.js 14.2.5, App Router |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + `globals.css` + inline `<style dangerouslySetInnerHTML>` in page.tsx |
| Fonts | `next/font/google`: Instrument Serif → `--font-display`, DM Sans → `--font-ui`, Syne → `--font-sharp` |
| Images | `next/image` with `fill` (parent needs `position: relative` + explicit `minHeight`) |

**Font note:** The spec calls for Editorial New + Suisse Int'l (licensed). Google Fonts are the current free fallbacks. Swap via `next/font/local` when licensed fonts arrive — update `--font-display` and `--font-ui` in `layout.tsx`.

---

## 4. Homepage Structure (`src/app/page.tsx`)

The file opens with `"use client"` (required for expandable availability rows). All sections are in a single file in this fixed order.

### Inline definitions (top of file, before the component)

- **`C`** — colour token object. All colours used in `style` props are taken from here. Do not add raw colour literals — extend `C` if needed.
- **`TX_FOG`, `TX_DARK`, `TX_LIGHT`** — `React.CSSProperties` texture helpers, spread onto section `style` props.
- **`OUTER`** — `"max(40px, calc((100vw - 1360px) / 2))"` — outer band text margin (matches `container-site` on wide viewports).
- **`INNER`** — `"52px"` — inner column gap for band text.
- **`Label`** — inline sub-component: small uppercase tracking label.
- **`Rule`** — inline sub-component: section rule with label, line, and number. Pass `dark` prop for light text on dark bg; omit `dark` for dark text on light bg.
- **`GridCard`** — inline sub-component: selected project card (image + footer metadata + hover filter).

### Sections (in order)

| Order | Section | Status | Background treatment |
|---|---|---|---|
| — | `<Nav mode="dark" />` | **Frozen** | — |
| 01 | Hero | **Frozen** | `C.bgSoft` + `TX_FOG` + full-bleed `hero-ai-twin.mp4` |
| — | Select a Path | **Frozen** | `C.bgMid` + `TX_DARK`, 4-card grid |
| 02 | Fields of Work | **Approved** | `C.light` + `TX_LIGHT`, light section |
| 03 | Selected Projects | **Approved** | `C.light` + `TX_LIGHT` + light fog video |
| 04 | Availability | **Approved** | `C.light` + `TX_LIGHT`, expandable rows |
| 05 | Contact | **Approved** | `C.bgSoft` + dark fog video + blue glow |
| — | `<Footer mode="dark" />` | **Frozen** | — |

---

## 5. Section-by-Section Design Decisions

### 01 — Hero (Frozen)
- Full-bleed `hero-ai-twin.mp4` via `.hero-bg-video` class.
- `.hero-overlay` dual-gradient: left-heavy for text legibility + bottom vignette.
- Two atmospheric glow divs (blue top-right, silver lower-left) animated with `breathe` keyframe.
- SVG film grain overlay at `opacity: 0.032`.
- Left-aligned: h1 name, role label, description, two CTA buttons (`btn-hero-primary` + `btn-hero-ghost`).

### Select a Path (Frozen)
- 4 `.dir-card` cards (CSS class) in a `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` grid.
- Cards link to: `/live-production`, `/art-direction`, `/work`, `/art-paintings`.

### 02 — Fields of Work (Approved)
Three full-width two-column editorial bands on a light background.

**Image layout rules:**
- Image columns use `<Link href="...">` with `display: "block"` — entire image area is clickable.
- Parent: `position: relative; minHeight: clamp(...)` — required for `next/image fill`.
- All bands: `objectFit: "cover"`.
- Band 01 (image right): `minHeight: clamp(400px, 54vh, 640px)`, `objectPosition: "50% 20%"` (tighter performer crop).
- Band 02 (image left): `minHeight: clamp(380px, 50vh, 580px)`, `objectPosition: "center center"`.
- Band 03 (image right): `minHeight: clamp(400px, 54vh, 640px)`, `objectPosition: "center center"`.

**Edge-fade gradients — direction is from the outer viewport edge inward:**
- Band 01 & 03 (image on right): `linear-gradient(to left, ...)` — fades from right edge.
- Band 02 (image on left): `linear-gradient(to right, ...)` — fades from left edge.
- Gradient value: `rgba(14,18,28,0.26) 0%, rgba(14,18,28,0.06) 32%, transparent 58%`.

**Image hover:** `.field-img-wrap:hover .field-img` → `scale(1.02)` + filter lift.

**CTA buttons:** Translucent tinted glass bars (`.field-cta` + category modifier class):
- `.field-cta-live` — deep navy tint (visible at rest, not just on hover)
- `.field-cta-art` — deep forest green tint
- `.field-cta-paint` — deep violet tint
- All share: `backdrop-filter: blur(12px)`, `::after` horizontal light-sweep on hover, deepened gradient + lifted border on hover, arrow `translateX(6px)` on hover.

**Mobile fixes:**
- `.field-band-text` overrides padding to `20px` at `<1023px` (matches `container-site` mobile padding).
- `.field-band-img` removes `borderLeft`/`borderRight` at `<1023px`.

### 03 — Selected Projects (Approved)
- **Light section** — background `C.light`, `TX_LIGHT`.
- `bg-selected-projects-light-fog-loop.mp4` at `opacity: 0.92` — near-full opacity, fog texture is clearly visible.
- Pale overlay `rgba(232,236,234,0.55)` at `z-index: 1` keeps it airy.
- Content at `z-index: 2`.
- `Rule` used **without** `dark` prop (dark text on light bg).
- Three `GridCard` components: dark graphite cards with hover colour filter on images.
- "All work →" link: right-aligned on desktop, below grid on mobile.

### 04 — Availability (Approved)
- Light section. `useState openRows` powers expandable row descriptions.
- Left column: intro text + `btn-light-cta` to `/contact`.
- Right column: 7 items from `availabilityItems` array. Each row has `expandIn` animation on open.

### 05 — Contact (Approved)
- Dark section. `bg-fog-loop.mp4` at `opacity: 0.8`. Poster: `bg-dark-glow.png`.
- Dark overlay `rgba(5,8,14,0.28)` at `z-index: 1` — kept intentionally light so fog reads.
- Atmospheric blue glow radial gradient at `z-index: 2`, animated with `breathe`.
- Content at `z-index: 10` (Tailwind `z-10`), centered.
- `btn-hero-ghost` CTA linking to `/contact`.

---

## 6. Assets

### Videos (`public/videos/`)
| File | Used in |
|---|---|
| `hero-ai-twin.mp4` | Hero — full-bleed background |
| `bg-fog-loop.mp4` | Contact section — dark atmospheric fog. Poster: `bg-dark-glow.png` |
| `bg-selected-projects-light-fog-loop.mp4` | Selected Projects — pale cool fog. Poster: `bg-light-texture.png` |

### Images used on homepage (`public/images/`)
| File | Section / role |
|---|---|
| `bg-hero-fog.png` | TX_FOG texture (hero bg blend) |
| `bg-dark-glow.png` | TX_DARK texture + Contact video poster |
| `bg-light-texture.png` | TX_LIGHT texture + Selected Projects video poster |
| `wake-up-01-gallery-03.png` | Fields of Work — Band 01 (Live/Production) |
| `experimental-music-campaign-01.png` | Fields of Work — Band 02 (Art Direction) |
| `pathway-paintings-diptych.jpg` | Fields of Work — Band 03 (Paintings) |
| `wake-up-01.png` | Selected Projects — card 1 |
| `wake-up-02-gallery-02.png` | Selected Projects — card 2 |
| `wake-up-03-gallery-01.png` | Selected Projects — card 3 |

### Other images (inner pages only, not homepage)
`portrait.png` · `painting-01.png` through `painting-07.png` · `painting-0X-gallery/` folders · all `brdatn-*`, `burning-house-*`, `eclipse-obverse-*`, `fluid-energy-*`, `psi-el-*` · `pathway-art-direction.png` · `pathway-live.png` · `pathway-paintings.JPG` · `wake-up-hero.jpeg` · `wake-up-0X-gallery-0X.png/.jpeg`

---

## 7. Inline `<style>` Tag — Hydration Fix

The homepage style block uses `dangerouslySetInnerHTML`, not JSX children:

```tsx
// CORRECT — prevents Next.js hydration mismatch
<style dangerouslySetInnerHTML={{ __html: `
  @keyframes breathe { ... }
  .dir-card { ... }
  ...
` }} />

// WRONG — causes "Text content does not match server-rendered HTML" error
<style>{` ... `}</style>
```

**Never revert this.** The `{` children `}` pattern causes a hydration error in Next.js 14 App Router because React serialises the CSS as a text node on the server but reconciles it differently on the client.

---

## 8. `globals.css` — Key Utility Classes

| Class | Purpose |
|---|---|
| `.container-site` | Max 1440px, centered, 40px padding (20px mobile ≤768px) |
| `.btn-hero-primary` | Solid cream CTA — dark sections |
| `.btn-hero-ghost` | Outlined CTA — dark sections |
| `.btn-light-cta` | Underline text link — light sections |
| `.btn-ghost-dark` | Rounded pill button — dark mode |
| `.btn-editorial` | Thin underline text link — dark mode |
| `.section-gap` | 120px vertical padding (72px mobile) |
| `.type-label` | 13px, 500 weight, 0.06em tracking, uppercase |
| `.type-display` | clamp(36–56px), serif, weight 300 |
| `.nav-link-underline` | Animated underline on hover |
| `.divider` | 1px horizontal rule using `var(--rule)` |

---

## 9. Nav & Footer

Both accept `mode?: "dark" | "gallery"`. Use `"dark"` for all current pages.

**Nav** — fixed, `z-50`, transparent until scrolled 40px. Links: Work, About, Contact. Mobile: full-screen overlay.  
**Footer** — links: Work, Live/Production, Art Direction, Paintings, About, Contact. Bottom strip: copyright, Instagram, email.

---

## 10. Known Issues

| # | Issue | Priority |
|---|---|---|
| 1 | `wake-up-02.jpg` and `wake-up-03.jpg` referenced in `projects.ts` — actual files are `.jpeg`. Fix extensions if these paths are rendered. | Low |
| 2 | `painting-06-gallery/` and `painting-07-gallery/` directories not yet created. `artworks.ts` has `gallery` arrays commented out for these two. | Low |
| 3 | `wakeUpPress` array in `projects.ts` has 4 entries with `url: null` (press coverage placeholders). | Low |
| 4 | No OG image — `public/og-image.jpg` missing. `layout.tsx` has it commented out. Add 1200×630px before launch. | Medium |
| 5 | `metadataBase` in `layout.tsx` set to `https://elizaveta.com` — update when real domain confirmed. | Pre-launch |
| 6 | Licensed fonts (Editorial New, Suisse Int'l) not yet added. Google Font fallbacks in use. | Post-launch |
| 7 | One art-direction project set to `hidden: true` in `projects.ts` pending real images/copy. | Content |
| 8 | Contact form has no backend handler wired. Form UI exists but submits nowhere. | Medium |

---

## 11. Recommended Next Tasks (Priority Order)

1. **Inner page visual polish** — bring `/live-production`, `/art-direction`, `/work` up to homepage quality. Use the same `C`, `TX_*`, `Rule`, `Label` conventions.
2. **About page** — update real bio copy and portrait image; polish layout.
3. **Contact form backend** — wire to an email handler (Resend, Formspree, or Next.js API route).
4. **OG image** — create `public/og-image.jpg` (1200×630), uncomment in `layout.tsx`.
5. **Fix data file paths** — `wake-up-02.jpg` → `.jpeg`, `wake-up-03.jpg` → `.jpeg` in `projects.ts`.
6. **Mobile QA** — audit all inner pages on mobile; homepage is already mobile-adjusted.
7. **Domain + deployment** — update `metadataBase`, deploy to Vercel, verify video autoplay in production.
8. **Licensed fonts** — self-host Editorial New + Suisse Int'l via `next/font/local` when available.

---

## 12. Instructions for a Fresh Claude Chat

1. **Read this file first**, then read `src/app/page.tsx` and `src/styles/globals.css` before making any changes.
2. **Only edit `src/app/page.tsx`** for homepage work. Nothing else unless explicitly told.
3. **The homepage is approved.** Make only the specific change asked for. Do not refactor, reorder, or "improve" anything unprompted.
4. **Style block:** Always `<style dangerouslySetInnerHTML={{ __html: \`...\` }} />` (self-closing). Never `<style>{...}</style>`.
5. **After every edit:** run `npx tsc --noEmit` and confirm zero errors.
6. **Colours:** use the `C` object. Do not introduce new inline colour literals — add to `C` if a new value is needed.
7. **`next/image` with `fill`:** parent must have `position: relative` + explicit `minHeight`. `<Link>` wrappers need `display: "block"` (Link renders as `<a>`, which is inline by default).
8. **Do not add new pages, routes, or components** unless explicitly asked.
9. **Do not redesign inner pages to look different from their current state** without being asked.
