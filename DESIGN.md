# DESIGN.md — Elizaveta Zhuravleva Portfolio
*Design System v1.0*

---

## Overview

This design system treats the portfolio as a **private view** — the kind of document a gallerist or creative director might leave on a table. It is cinematic without being theatrical, editorial without being cold. The visual language draws from European arts publishing and contemporary gallery catalogues: heavy negative space, large type set at uncomfortable scale, photography that is never decorative.

The site runs in two modes:

**Dark / Main site** — near-black ground, cream text, photographic. Used across Home, Work, Live/Production, Art Direction, About and Contact. The atmosphere is that of a darkened theatre before curtain: quiet, expectant, charged.

**Light / Gallery mode** — warm ivory ground, charcoal text, large clean images. Used exclusively for Art / Paintings. The atmosphere is a private view at a mid-size gallery: unhurried, serious, unhyped.

---

## Color

### Palette Tokens

```
/* Dark mode (main site) */
--color-ground:        #0B0B0A        /* near-black ground — slightly warm, not pure #000 */
--color-ground-raised: #141412        /* subtle lifted surface for cards, nav bg */
--color-ground-mid:    #1E1D1B        /* dividers, hover states on dark */

--color-text-primary:  #F0EDE6        /* warm cream — primary text on dark */
--color-text-secondary:#A89F94        /* muted sand — captions, metadata, secondary labels */
--color-text-tertiary: #5C5750        /* very muted — fine print, dividers-as-text */

--color-accent:        #D4C4A8        /* warm gold-cream — used sparingly for hover underlines and active states only */

--color-hairline:      rgba(240,237,230,0.08)   /* subtle rule on dark */
--color-scrim:         rgba(11,11,10,0.55)       /* photographic overlay for full-bleed images */

/* Light / gallery mode (Art / Paintings only) */
--color-gallery-ground:   #F5F0E8    /* warm ivory — gallery background */
--color-gallery-raised:   #EDE8DF    /* slightly darker for dividers and card surfaces */
--color-gallery-text:     #1A1916    /* deep charcoal — primary text */
--color-gallery-mid:      #6B6560    /* warm grey — secondary text, captions */
--color-gallery-hairline: rgba(26,25,22,0.12)  /* rule on light */
--color-gallery-accent:   #7A6E5F    /* warm mid-tone — hover, selected state */
```

### Color Principles

- **Monochrome, not colourless.** Warmth is carried by the slight amber temperature of `--color-ground` and `--color-gallery-ground`. This gives depth without breaking the achromatic palette.
- **No accent colour for actions.** CTAs are differentiated by weight, size and underline — not by colour. A single warm `--color-accent` appears only on hover underlines and active nav links.
- **Photography carries chromatic weight.** All colour expression is delegated to images. Never compete with the work.
- **Gallery mode is a genuine switch.** Not a tinted overlay — a full palette replacement. Feels like entering a different room.

---

## Typography

### Typefaces

**Display / Heading:** `"Editorial New"` (Pangram Pangram) — a contemporary editorial serif with unexpected high-contrast strokes. Thin, slightly italicised in display use. Brings a printed-magazine quality without feeling retro.

**Body / UI:** `"Suisse Int'l"` (Swiss Typefaces) — a refined Swiss grotesque, warmer and quieter than Helvetica. For labels, captions, nav, metadata.

**Fallback stack:**
```css
font-family-display: "Editorial New", "Playfair Display", Georgia, serif;
font-family-ui:      "Suisse Int'l", "Helvetica Neue", "Helvetica", Arial, sans-serif;
```

*If neither typeface is licensed: use `"Cormorant Garamond"` at display and `"DM Sans"` for UI. These are free and tonally close.*

---

### Typographic Scale

| Token | Size | Weight | Leading | Tracking | Use |
|---|---|---|---|---|---|
| `type-display-xl` | 80–120px fluid | 300 (Light) | 0.95 | -0.04em | Homepage name lockup |
| `type-display` | 56px | 300 (Light) | 1.0 | -0.03em | Page-level headlines (italic variant for emphasis) |
| `type-display-sm` | 40px | 300 | 1.05 | -0.02em | Section openers, project titles |
| `type-heading` | 28px | 400 | 1.1 | -0.01em | Sub-section titles, card headings |
| `type-subheading` | 20px | 400 | 1.2 | 0 | Lead paragraphs, intro copy |
| `type-body` | 16px | 400 | 1.6 | 0 | Standard body copy, descriptions |
| `type-label` | 13px | 500 | 1.4 | 0.06em | Navigation, tags, eyebrows (uppercase) |
| `type-caption` | 12px | 400 | 1.5 | 0.04em | Artwork details, metadata, fine print |
| `type-micro` | 11px | 500 | 1.4 | 0.08em | Footer column headers, legal (uppercase) |

### Typographic Principles

- **Display is thin.** Weight 300 (Light) at large scale. This gives the site its lean, editorial quality — it does not shout.
- **Selective italic.** The display serif's italic is used for role descriptions, the site strapline and artwork titles. It is an accent, not a default.
- **Uppercase is structural only.** Used for `type-label` and `type-micro` — eyebrows, nav items, footer headings. Never body copy. Never headlines.
- **Type scale is generous.** The name on the homepage should feel monumental. Type should be slightly uncomfortable in its scale — the way an editorial headline fills a magazine page.
- **Body copy left-aligned everywhere.** No centred paragraphs.

---

## Layout

### Grid

- **Container max-width:** 1440px, centred.
- **Content column:** 1280px inner reading zone with 80px gutters at desktop.
- **Base grid:** 12 columns, 24px gutters.
- **Body text column:** 7 of 12 columns on desktop for comfortable line length (~65ch).
- **Section spacing vertical rhythm:** 120px between major sections on desktop, 72px on mobile.

### Spacing Scale

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-6:   24px
--space-8:   32px
--space-12:  48px
--space-16:  64px
--space-24:  96px
--space-32:  128px
--space-section: 120px
```

### Layout Principles

- **Full-bleed photography.** Hero images extend edge-to-edge. No border-radius on page-edge images. The page boundary is the image boundary.
- **Generous whitespace.** Sections breathe. The absence of content is as considered as the presence of it.
- **Occasional grid breaks.** A project image that bleeds into the margin. A headline that starts at the column edge and runs wide. These moments of discipline-breaking are deliberate.
- **No card shadows.** Surfaces are differentiated by tone and hairline rules only.

---

## Components

### Navigation

**`nav-bar`**
- Background: transparent over hero images, `--color-ground-raised` when scrolled.
- Height: 64px.
- Left: name wordmark in `type-label` uppercase — `ELIZAVETA ZHURAVLEVA`.
- Right: nav links in `type-label`, text `--color-text-secondary`, hover state `--color-accent` underline (1px, offset 2px).
- Mobile: hamburger overlay. Menu takes full screen dark ground, large `type-display-sm` nav items.
- No active indicator beyond underline.

**`nav-link`**
- `type-label`, uppercase, letter-spacing 0.06em.
- Hover: animated underline from left, `--color-accent`, 1px.

---

### Hero — Main Site (Dark)

**`hero-full`**
- Full viewport height on homepage, 75vh on inner pages.
- Full-bleed photographic image with `--color-scrim` overlay.
- Content zone: bottom-left aligned (not centred). Name at `type-display-xl`, role at `type-subheading` in `--color-text-secondary`, strapline below in `type-body`.
- CTA: ghost pill (see buttons) — bottom-left, margin above.
- No rounded corners on full-bleed heroes.

---

### Buttons

**`btn-ghost-dark`** — primary CTA on dark surfaces
- Border: 1px solid `--color-text-primary`, rounded-full (9999px).
- Text: `--color-text-primary`, `type-label`, uppercase, letter-spacing 0.08em.
- Padding: 12px 28px.
- Hover: background fills to `--color-text-primary`, text flips to `--color-ground`.
- Transition: 200ms ease.

**`btn-ghost-light`** — CTA on gallery (light) surfaces
- Same structure but border/text uses `--color-gallery-text`, hover fills `--color-gallery-text`, text flips to `--color-gallery-ground`.

**`btn-text-link`** — inline actions, "View project →"
- No border or background. `type-label` uppercase. Underline on hover, `--color-accent`, 1px.

**No solid-fill primary buttons.** All actions are ghost or text. This keeps the visual weight clean and non-corporate.

---

### Project Cards

**`card-project`** — grid cards on Work and section pages
- No border, no shadow, no rounding.
- Image: 3:2 ratio, full-width of card, `overflow: hidden`. Hover: image scales 1.03 over 400ms ease.
- Below image: `type-label` uppercase category tag in `--color-text-secondary`, then `type-heading` project title in `--color-text-primary`, then `type-caption` year and location.
- No card background — sits directly on page ground.
- 3-column grid desktop, 2-column tablet, 1-column mobile.

**`card-project-feature`** — large lead card (e.g. WAKE UP on Live page)
- 2/3 page width image (8 of 12 columns), tall 9:16 or 4:5 ratio.
- Title overlays bottom of image in `type-display-sm`, `--color-text-primary`, with subtle scrim gradient.
- No box or card — the image *is* the card.

---

### Artwork Cards — Gallery Mode (Light)

**`card-artwork`**
- Background: `--color-gallery-ground`. No shadow, no border.
- Image: variable aspect ratio (portrait preferred, respects actual artwork proportions). Full width of card.
- Below image: `type-caption` artwork title (italic) + year, medium, dimensions on separate lines. Text `--color-gallery-text`.
- Status pill: `AVAILABLE` / `SOLD` / `INSTALLED` in `type-micro` uppercase, `--color-gallery-mid`, 1px border `--color-gallery-hairline`, rounded-full. Pill only — no colour fill to distinguish status.
- Enquire link: `btn-text-link` style, `--color-gallery-accent` underline.
- Grid: 3-column desktop, 2-column tablet, 1-column mobile.

**`artwork-detail-panel`**
- Opened as an inline expansion or separate page.
- Large image left (7 columns), artwork metadata right (5 columns).
- Metadata: title, year, medium, dimensions, edition (if applicable), status, private enquiry CTA.
- Minimal. No price displayed publicly. No add-to-cart. No shop language.

---

### Section Anatomy

Every major section follows a two-part opener:

1. **Eyebrow** — `type-label` uppercase, `--color-text-secondary` (or `--color-gallery-mid`), no bullet, no icon.
2. **Headline** — `type-display` or `type-display-sm`, thin weight.

Optionally followed by a lead paragraph in `type-subheading`.

This lockup is the site's structural signature. It appears at the start of every named section. Consistent. Never decorated.

---

### Dividers

**`divider-hairline`**
- 1px rule, `--color-hairline`. Full content width.
- Used between section content blocks (not between sections — those use spacing alone).
- No decorative variants. No dashed, no thick, no coloured.

---

### Photography Treatment

- **Full-bleed heroes:** edge-to-edge, no rounding, `--color-scrim` overlay.
- **Contained project images:** no rounding on direct project images. `overflow: hidden` on their containers.
- **Gallery artwork images:** no rounding. Clean white/cream implicit frame from page background.
- **Aspect ratios:** heroes 16:9 or full viewport. Project cards 3:2. Artwork cards: natural proportions (not forced).
- **Loading:** `--color-ground-raised` placeholder on dark, `--color-gallery-raised` on light. Fade in on load.
- **No filters.** No duotone. No grain effect applied to images. Photography is served clean.

---

### Footer

**`footer`**
- Background: `--color-ground` (same as page — no tonal shift needed; it ends with a hairline).
- Top hairline rule.
- Left: name + brief descriptor in `type-caption`.
- Right: nav links, social links.
- Bottom strip: copyright in `type-micro`, location `London`, contact email.
- Light mode footer (gallery pages): `--color-gallery-ground`, matching text palette.

---

## Page-Specific Notes

### Home
- Name in `type-display-xl`, weight 300, potentially fluid (clamp 64px → 120px).
- Role descriptor in `type-subheading` italic serif, `--color-text-secondary`.
- Strapline in `type-body`.
- Three pathway cards: image-led, 1:1 or 4:5 portrait ratio, title overlay at bottom with `--color-scrim` gradient. Grid: 3-column desktop, stacked mobile.
- Selected work: 3-column project card grid.
- "Available for" section: simple list in `type-body`, left column descriptor, right column value. No boxes.

### WAKE UP Project Page (`/projects/wake-up`)
- Full-bleed hero, 100vh.
- Role + location + date: `type-label` uppercase in `--color-text-secondary`.
- Sections: Overview, What I did, Editions (01, 02, 03 as sub-sections), Gallery (masonry or uniform grid), Press/Links, Outcome.
- Edition headings: `type-heading`. Edition gallery images: variable aspect ratio, generous spacing.
- Press links: simple `type-body` list with external arrow indicator.
- Next project CTA: full-width dark strip with project name and ghost pill.

### Art / Paintings
- **Full palette switch to gallery mode.**
- Page opens with clean `type-display` title "Art / Paintings" on `--color-gallery-ground`. No hero photograph.
- Sections: Selected Works, Available Works, Installed Works, Commissions.
- Artwork grid (see `card-artwork`).
- Commissions block: short paragraph in `type-body`, single enquiry CTA (`btn-ghost-light`).
- No basket, no price, no e-commerce signals.

### About
- Split layout desktop: bio text left (7 col), portrait image right (5 col).
- Bio in `type-body`, `--color-text-primary`. Clear, direct, hiring-facing.
- Education, availability and collaboration interests as a structured but un-boxed list.
- No company founder language.

### Contact
- Minimal. `type-display-sm` headline. Email as large clickable `type-heading` link.
- Social + LinkedIn as `type-label` text links.
- Location: London.
- CV: ghost pill download button.
- Enquiry type selector: simple inline text toggles (not a dropdown).

---

## Mode Switching — Dark ↔ Gallery

The gallery mode is triggered by the `/art-paintings` route. It is not a user toggle — it is a page-level design decision. Implementation:

```css
/* Default: dark */
:root {
  --bg: var(--color-ground);
  --text: var(--color-text-primary);
  --text-secondary: var(--color-text-secondary);
  --hairline: var(--color-hairline);
  ...
}

/* Gallery override — applied via a .mode-gallery class on <html> or <body> */
.mode-gallery {
  --bg: var(--color-gallery-ground);
  --text: var(--color-gallery-text);
  --text-secondary: var(--color-gallery-mid);
  --hairline: var(--color-gallery-hairline);
  ...
}
```

Nav and footer remap their colours through the same semantic tokens. No hardcoded colours in components — always reference semantic tokens.

---

## Responsive

| Breakpoint | Width | Key Behaviour |
|---|---|---|
| `2xl` | 1440px+ | Full editorial layout. |
| `xl` | 1280px | Default desktop. All multi-column layouts. |
| `lg` | 1024px | 3-col → 2-col for project grids. |
| `md` | 768px | Nav collapses. 2-col → 1-col for artwork grid. |
| `sm` | 640px | Single column. Hero type scales down via clamp(). |
| `xs` | 375px | Mobile baseline. Full-bleed images preserved. |

- Hero name (`type-display-xl`) uses `clamp(48px, 8vw, 120px)`.
- Section spacing: `clamp(64px, 8vw, 120px)`.
- Touch targets: all interactive elements minimum 44px.

---

## Do's and Don'ts

### Do
- Keep type weight consistently thin (300) at display scale. Do not go bold for impact — scale does that work.
- Delegate colour expression entirely to photography.
- Use the eyebrow + headline lockup to open every named section.
- Let artwork images set their own aspect ratios. Never crop a painting to fit a grid.
- Make the gallery mode feel genuinely different — not just lighter.
- Use ellipses and long form text sparingly. Less copy, more space.

### Don't
- Don't introduce any colour outside the defined palette — no blue links, no green status indicators, no coloured tags.
- Don't add shadows, glows or blur effects to any surface.
- Don't use the word "shop", "buy", "price" or "add to cart" anywhere near the Paintings section.
- Don't use stock-looking layouts — no symmetrical three-column feature + icon grids.
- Don't centre body copy. Left-align everything.
- Don't use bold weight for headlines. Weight 300 is the display standard.
- Don't mix border-radius conventions — full-pill for buttons only, no rounding on images or cards.

---

## Implementation Notes (Next.js / Tailwind)

- CSS custom properties defined in `globals.css`. Tailwind configured to reference them via `extend.colors`.
- Gallery mode applied as a class on `<body>` from the layout component, driven by route detection.
- Project data: flat JSON or TypeScript objects per project. No CMS in v1.
- Image component: Next.js `<Image>` with `sizes` prop, `placeholder="blur"`, and a custom `blurDataURL` matching the ground colour.
- Fonts: self-hosted via `next/font/local` for Editorial New and Suisse Int'l, or Google Fonts equivalents.
- No animation library in v1 — CSS transitions only (`transition: all 200ms ease` as a utility class).
- Component file structure: `/components/ui/` for primitives (Button, Divider, Eyebrow), `/components/layout/` for Nav and Footer, `/components/sections/` for page-level blocks.

---

*End of DESIGN.md v1.0*
