# Portfolio Website — Claude Handover Summary
**Project:** Elizaveta Zhuravleva personal portfolio
**Stack:** Next.js 14.2.5, App Router, TypeScript, Tailwind CSS
**Workspace:** `/Users/elizavetazhuravleva/Downloads/UNI/MP/ELIZAVETA_WEBSITE/04_final_site`
**Date:** May 2026

---

## 1. Current Project Status

### Pages that exist
| Route | Status |
|---|---|
| `/` | ✅ Built, final — do not touch |
| `/work` | ✅ Built, recently refined |
| `/live-production` | ✅ Built, typography aligned |
| `/art-direction` | ✅ Built, recently refined |
| `/art-paintings` | ✅ Built, recently refined |
| `/art-paintings/[slug]` | ✅ Dynamic, all 8 slugs have pages |
| `/projects/wake-up` | ✅ Built, hero video, edition layout done |
| `/projects/burning-house` | ✅ Built, gallery crop fixed |
| `/projects/brdatn` | ✅ Built, typography aligned |
| `/projects/fluid-energy` | ✅ Built, image crop fixed |
| `/projects/psi-el` | ✅ Built, typography aligned |
| `/projects/eclipse-obverse` | ✅ Built, credits, typography aligned |
| `/projects/experimental-music-campaign` | ⚠️ Entry exists in data but **no dedicated page** yet |
| Spatial / Digital / 3D | ⚠️ Placeholder cards on Work page only — no category page, no project pages |

### Recently completed
- Global typography pass: all internal pages now use Syne 700 (`type-page-title`, `type-section-title`) instead of old Cormorant Garamond serif headings
- Art Direction page: light fog background, unified 2×2 project grid, 16:9 cover images, no raw iframes
- Work page: dark/light section structure, category nav with `id` anchors, strong "choose a field" field-selector block (01–04 bordered boxes)
- Paintings: all 8 artworks now use `*-transparent.png` RGBA files; cream frames completely removed; Meditation removed; Energy Explosion deduplication fixed
- Live Production page: Fluid Energy card `objectPosition: "center top"` applied
- Burning House gallery: `scale(1.05)` crop applied to hide white edges

### Known unresolved issues
- **Multi U and Calm appear to have white canvas areas** — confirmed by pixel analysis to be the actual painted gesso of those artworks, not a CSS bug. The transparent PNGs have correct alpha=0 outer borders but opaque white canvas inside. Fix requires re-export with tighter masking; no code change can resolve it.
- **Experimental Music Campaign** has a cover image and data entry but no `/projects/experimental-music-campaign/page.tsx` yet.
- **Spatial / Digital / 3D section** exists on Work page as placeholder cards only — no real assets, no category page, no project pages.
- **Meditation** was removed from the painting array because `painting-04.png` was a wrongly-named duplicate of Energy Explosion (same image, confirmed by pixel comparison). A correct Meditation transparent export should be added when available.
- **Lightbox** for paintings was explicitly deferred — flagged as a separate task.

---

## 2. Visual System

### Overall aesthetic
Dark, cinematic, gallery-like. Homepage and Work page use video backgrounds. Internal project pages use a warm near-black `#0B0B0A` / `#080707` atmospheric dark ground. Art Direction page is a rare exception — light fog, editorial. Paintings page is dark atmospheric. The aesthetic references fine art galleries and editorial fashion publications.

### Colour palette

**Dark sections (most pages):**
- Ground: `#080707` / `#0B0B0A` / `#141210`
- Primary text: `rgba(240, 237, 230, 0.92)` — warm cream white
- Secondary text: `rgba(210, 210, 206, 0.70)` — neutral grey (CW palette, not sandy beige)
- Tertiary text: `rgba(188, 188, 184, 0.44)`
- Hairline borders: `rgba(240, 237, 230, 0.07)`

**CSS variable names (dark default):**
```
--color-ground:          #0B0B0A
--color-text-primary:    rgba(240,237,230,0.92)
--color-text-secondary:  rgba(210,210,206,0.70)
--color-text-tertiary:   rgba(188,188,184,0.44)
--color-hairline:        rgba(240,237,230,0.07)
```

**Light sections (Art Direction page, Work page Art Direction section):**
- Background: `#EDF0F4` / `#EDE8E0` with fog video at low opacity
- Override class `.page-light` swaps CSS variables to dark graphite:
```css
.page-light {
  --color-text-primary:   rgba(18, 15, 12, 0.92);
  --color-text-secondary: rgba(40, 36, 30, 0.58);
  --color-text-tertiary:  rgba(60, 54, 46, 0.38);
  --color-hairline:       rgba(18, 15, 12, 0.10);
}
```
- Work page light sections use `.work-light-section` (scoped inline `<style>`) for the same effect without a global class

**CW neutral palette (dark section text, not sandy):**
```js
const CW = {
  pri:   "rgba(232, 232, 230, 0.96)",
  sec:   "rgba(210, 210, 206, 0.70)",
  ter:   "rgba(188, 188, 184, 0.44)",
  faint: "rgba(175, 175, 172, 0.28)",
}
```

**Painting section surface:** Transparent PNGs sit directly on the dark atmospheric background — no container background, no frame, no mat. The `object-contain` rule preserves artwork proportions.

**Atmospheric backgrounds for painting pages (warm amber only — no blue/violet):**
```
rgba(110, 44, 12, 0.14) — amber top-right
rgba(80,  16, 12, 0.09) — dark-red right-mid
rgba(90,  42, 8,  0.09) — amber bottom-right
rgba(55,  24, 8,  0.08) — warm bottom-left
#0B0B0A                  — near-black base
```

### Font system

Three font variables defined in `layout.tsx` / `globals.css`:
```
var(--font-sharp)   = Syne (700 weight used for headings)
var(--font-display) = Cormorant Garamond (italic, used on homepage only)
var(--font-ui)      = DM Sans (body, labels, captions, meta)
```

**Type utility classes (defined in `src/styles/globals.css`):**
| Class | Description |
|---|---|
| `.type-display-xl` | Cormorant Garamond, clamp(64px,11vw,160px), weight 300 — homepage hero only |
| `.type-display` | Cormorant Garamond, clamp(36px,4vw,56px), weight 300 |
| `.type-display-sm` | Cormorant Garamond, clamp(28px,3.5vw,40px), weight 300 |
| `.type-page-title` | **Syne 700**, clamp(36px,5vw,72px), uppercase, 0.04em — all internal page h1s |
| `.type-category-title` | **Syne 700**, clamp(26px,3.6vw,50px), uppercase, 0.04em — SectionHeader default |
| `.type-section-title` | **Syne 700**, clamp(20px,2.8vw,32px), uppercase, 0.05em — sub-headings, Next Project |
| `.type-heading` | DM Sans 500, 22px — changed from Cormorant Garamond |
| `.type-subheading` | DM Sans 400, 20px |
| `.type-body` | 16px, weight 400, line-height 1.6 |
| `.type-label` | 13px, weight 500, tracking 0.06em, uppercase |
| `.type-caption` | 12px, weight 400, line-height 1.5, tracking 0.04em |
| `.type-micro` | 11px, weight 500, tracking 0.08em, uppercase |

**Rule: Do not use `type-display` on internal pages.** The serif is reserved for the homepage. All internal page titles use `type-page-title` (Syne 700 uppercase).

### Layout utilities
```
.container-site  = max-width 1440px, padding 0 40px
.section-gap     = padding 120px top/bottom
.section-gap-sm  = 72px
.divider         = thin horizontal rule, uses --color-hairline
```

---

## 3. Page-by-Page Summary

### Homepage `/`
- **Do not touch.** Final. Uses Cormorant Garamond serif headlines, full-bleed video hero, `type-display-xl` main heading.
- Has a "Select a Path" block that was the design reference for the Work page field navigation.
- Nav is `mode="gallery"` (dark text on scroll) on homepage.

### Work page `/work`
Large single-page scroll with distinct sections stacked vertically:

**Structure:**
1. **Dark zone** (video bg `video-output-B0B21B74-F66F-49B2-9F2B-124AE7D8C523-1.mp4`, opacity 0.22):
   - Page header: "SELECTED PROJECTS" + lead text
   - **Field navigation block** (bordered 4-column grid): 01 Live / Production → 02 Art Direction / Image → 03 Spatial / Digital / 3D → 04 Paintings / Works. Each links to `#live`, `#art-direction`, `#spatial`, `#paintings`
   - **`id="live"`** section: WAKE UP featured card + edition rows (WAKE UP 01/02/03)

2. **Light fog section** (`bg-selected-projects-light-fog-loop.mp4`, `.work-light-section`): Art Direction / Image grid — all non-hidden Art Direction projects via `<ProjectCard>`

3. **Light section** (`#ECEEF2`, spatial bg image at 9% opacity): Spatial / Digital / 3D — 5 placeholder cards

4. **Dark cinematic section** (`#0A0908`, `bg-fog-loop.mp4`): Paintings / Works — 3-painting preview grid from `artworks.slice(0, 3)`, links to `/art-paintings`

**CSS classes unique to this page (scoped `<style>` tag):**
`.work-light-section`, `.work-cta`, `.work-cta-light`, `.work-arrow`, `.work-field-nav`, `.work-field-item`, `.work-field-label`, `.work-field-index`, `.work-field-arrow`, `.work-edition-row`, `.work-edition-label`, `.work-edition-meta`, `.work-edition-arrow`

### Live / Production / Performance `/live-production`
- Dark page, `Nav mode="dark"`
- Header: SectionHeader eyebrow "Live / Production / Performance", headline "Live Direction · Production · Performance"
- **Featured section:** WAKE UP full-width banner image (`wake-up-01.png`, `objectPosition: "center 30%"`), title, role, description, 3-edition preview grid
- **Performance Works grid** (3-col): Burning House, BRDÄTN, Fluid Energy (`objectPosition: "center top"`), Ψ(E_l), Eclipse Obverse — all link to their project pages

### WAKE UP project `/projects/wake-up`
- Dark page with fixed video hero (`wakeupheroinstead.mp4`, opacity 0.78 on `#080707`)
- Overview + What I Did sections with tighter padding (72px)
- **Edition structure:** 3 editions (WAKE UP 01, WAKE UP 02 — MORPHOSIS, WAKE UP 03). Each edition: 12-col grid, left (title + location/date + YouTube embed + CTA), right (description, shifted down ~4.5rem)
- `type-page-title` h1, `type-section-title` edition headings
- Next Project → Burning House

### Art Direction page `/art-direction`
- **Light page** (`page-light` class, `Nav mode="gallery"`, `Footer mode="gallery"`)
- Fixed video bg: `bg-selected-projects-light-fog-loop.mp4` at opacity 0.38 on `#F2F3F6`, warm off-white veil `rgba(244,243,241,0.70)` at opacity 0.70
- Unified 2-col grid: all 4 Art Direction projects, consistent 16:9 cover images
- Play badge (white circle with ▶) for video projects; clicking goes to project page
- Projects: **Burning House**, **BRDÄTN**, **Fluid Energy**, **Experimental Music Campaign**
- Scoped CSS classes: `.ad-cta`, `.ad-arrow`, `.ad-play-badge`, `.ad-play-icon`, `.ad-card`
- Section title: "SELECTED IMAGE WORK"

### Paintings / Selected Works `/art-paintings`
- Dark atmospheric page with warm amber radial gradients (no blue/violet)
- Uses `<ArtworkCard>` component, 3-col grid
- Contact section with enquiry email at bottom
- 8 artworks currently displayed (see Data Structure section)

### Individual painting pages `/art-paintings/[slug]`
- Dark atmospheric page, same amber-only gradients
- **With gallery:** `<PaintingViewer>` — 3-column: thumbnails | main image | info panel
- **Without gallery (simple layout):** two-col grid: image (72vh height, `object-contain`) | `<InfoPanel>`
- Mobile: image (70vw height) stacked above info
- Prev/Next navigation at bottom (navigates between slugged artworks)
- No cream frames, no backgrounds on image containers — transparent PNGs sit on dark surface

### Spatial / Digital / 3D
- Exists only as 5 placeholder cards on the Work page (`spatialPlaceholders` array inline in `work/page.tsx`)
- No category page, no project pages
- Background: subtle architectural image at 9% opacity over `#ECEEF2`

### Navigation
- `<Nav>` component, `mode="dark"` (cream text) on most pages, `mode="gallery"` (dark text) on Art Direction page and homepage
- Fixed on scroll; dark mode adds dark background on scroll

### Footer
- `<Footer>` component, `mode="dark"` or `mode="gallery"` matching the page Nav

---

## 4. Assets Currently in Use

### Work page videos/images
| Asset | Path | Used in |
|---|---|---|
| Dark fog video | `/videos/video-output-B0B21B74-F66F-49B2-9F2B-124AE7D8C523-1.mp4` | Work page dark zone bg |
| Light fog video | `/videos/bg-selected-projects-light-fog-loop.mp4` | Work page Art Direction section bg |
| Paintings fog video | `/videos/bg-fog-loop.mp4` | Work page Paintings section bg |
| Spatial bg image | `/images/hf_20260515_203910_7a798689-0349-448c-a91d-223845e84995.png` | Work page Spatial section bg (9% opacity) |

### Art Direction page
| Asset | Path |
|---|---|
| Light fog video | `/videos/bg-selected-projects-light-fog-loop.mp4` |
| Burning House cover | `/images/burning-house-01.png` |
| BRDÄTN cover | `/images/brdatn-01.png` |
| Fluid Energy cover | `/images/fluid-energy-01.png` |
| Music Campaign cover | `/images/experimental-music-campaign-01.png` |

### WAKE UP project
| Asset | Path |
|---|---|
| Hero video | `/videos/wakeupheroinstead.mp4` |
| Live Production banner | `/images/wake-up-01.png` |

### Painting transparent PNGs (all RGBA, 2700×3600)
| File | Artwork | Notes |
|---|---|---|
| `painting-to-the-sun-transparent.png` | To the Sun | Renders cleanly |
| `painting-artists-fate-transparent.png` | Artist's Fate | Clean |
| `painting-boundless-transparent.png` | Boundless | Clean |
| `painting-multi-u-transparent.png` | Multi U | **White canvas gesso visible** — needs re-export with tighter mask |
| `painting-energy-explosion-transparent.png` | Energy Explosion | Clean |
| `painting-calm-transparent.png` | Calm | **Light canvas gesso visible** — needs re-export |
| `painting-holy-mary-transparent.png` | Holy Mary | Clean |
| `painting-current-joy-transparent.png` | Current Joy | Clean |

`painting-04.png` — **do not use**, confirmed same image as Energy Explosion, wrongly named.

### Gallery detail images (used in PaintingViewer)
```
/images/painting-01-gallery/painting-01-detail-01.png  (×5 images)
/images/painting-02-gallery/painting-02-detail-01.png  (×5 images)
/images/painting-03-gallery/painting-03-detail-01.png  (×6 images)
/images/painting-05-gallery/painting-05-detail-01.png  (×6 images)
```
Note: gallery detail images are not the transparent PNG variants — they may have non-transparent backgrounds.

---

## 5. Files Changed (this session chain)

```
src/styles/globals.css
  Added: type-page-title, type-category-title, type-section-title, page-light

src/components/layout/Nav.tsx             (minor mode handling)
src/components/ui/SectionHeader.tsx       (added size prop: "category" | "page")
src/components/ui/ArtworkCard.tsx         (removed dark frame → no bg, object-contain)
src/components/ui/PaintingViewer.tsx      (removed cream frames, clean containers)
src/components/ui/ProjectCard.tsx         (lightMode prop added)

src/data/artworks.ts                      (8 artworks, all transparent PNGs, Meditation removed)
src/data/projects.ts                      (experimental-music-campaign unhidden, coverImage set)

src/app/work/page.tsx                     (field nav block, section IDs, painting preview, spatial section)
src/app/art-direction/page.tsx            (full rewrite: light fog bg, unified grid, play badges)
src/app/art-paintings/page.tsx            (typography, purple bg removed → warm amber only)
src/app/art-paintings/[slug]/page.tsx     (cream frames removed, simple layout updated)
src/app/live-production/page.tsx          (typography pass, fluid energy objectPosition)

src/app/projects/wake-up/page.tsx         (hero video, edition layout, tighter spacing)
src/app/projects/burning-house/page.tsx   (typography, gallery scale crop)
src/app/projects/brdatn/page.tsx          (typography)
src/app/projects/fluid-energy/page.tsx    (typography)
src/app/projects/psi-el/page.tsx          (typography)
src/app/projects/eclipse-obverse/page.tsx (typography, credits)
```

---

## 6. Data Structure

### Projects — `src/data/projects.ts`

Two exported arrays: `liveProjects` and `artDirectionProjects`.

**Project interface (approximate):**
```ts
interface Project {
  slug: string;
  title: string;
  role: string;
  year: string;
  location: string;
  shortDescription: string;
  coverImage: string;
  images?: string[];
  categoryLabel: string;
  featured?: boolean;
  hidden?: boolean;
}
```

**Live projects** (featured first in Work page):
- `wake-up` — featured: true, links to `/projects/wake-up`
- Other live works are rendered inline in `/live-production` (not via this array)

**Art Direction projects:**
- `burning-house` — cover: `burning-house-01.png`
- `brdatn` — cover: `brdatn-01.png`
- `fluid-energy` — cover: `fluid-energy-01.png`
- `experimental-music-campaign` — cover: `experimental-music-campaign-01.png`, hidden: false — **no page yet**

### Artworks — `src/data/artworks.ts`

Single exported array `artworks: Artwork[]`. 8 entries in display order:

| # | id | title | year | dimensions | image file | slug | gallery |
|---|---|---|---|---|---|---|---|
| 1 | painting-01 | To the Sun | 2022 | 150×120 cm | painting-to-the-sun-transparent.png | to-the-sun | ✅ 5 images |
| 2 | painting-02 | Artist's Fate | 2023 | 150×120 cm | painting-artists-fate-transparent.png | artists-fate | ✅ 5 images |
| 3 | painting-03 | Boundless | 2022 | 150×120 cm | painting-boundless-transparent.png | boundless | ✅ 6 images |
| 4 | painting-05 | Multi U | 2023 | 130×170 cm | painting-multi-u-transparent.png | multi-u | ✅ 6 images |
| 5 | painting-08 | Energy Explosion | 2024 | 150×120 cm | painting-energy-explosion-transparent.png | energy-explosion | ❌ none yet |
| 6 | painting-09 | Calm | 2024 | 150×120 cm | painting-calm-transparent.png | calm | ❌ none yet |
| 7 | painting-07 | Holy Mary | 2022 | 130×110 cm | painting-holy-mary-transparent.png | holy-mary | ❌ none yet |
| 8 | painting-06 | Current Joy | 2022 | 150×150 cm | painting-current-joy-transparent.png | current-joy | ❌ none yet |

`generateStaticParams` in `/art-paintings/[slug]/page.tsx` auto-generates a page for every artwork with a slug.

### Spatial placeholders — inline in `work/page.tsx`
```ts
const spatialPlaceholders = [
  { id:"web-1", label:"Web Design / Digital System", title:"Web Design 01", year:"2025" },
  { id:"web-2", label:"Web Design / Portfolio",      title:"Web Design 02", year:"2025" },
  { id:"web-3", label:"Web Design / Digital System", title:"Web Design 03", year:"2025" },
  { id:"3d-1",  label:"Spatial / 3D Study",          title:"3D Artwork 01", year:"2025" },
  { id:"3d-2",  label:"3D Artwork / Digital Object",  title:"3D Artwork 02", year:"2025" },
]
```
These are not in `projects.ts` — replace with real entries when assets are ready.

---

## 7. Next Task Queue

**Priority 1 — Experimental Music Campaign project page**
Create `/src/app/projects/experimental-music-campaign/page.tsx`.
Match structure of other Art Direction project pages (burning-house, brdatn). Needs: title, role, metadata sidebar, overview text, What I Did list, gallery (if images available), Next Project link. Cover image already confirmed at `/images/experimental-music-campaign-01.png`.

**Priority 2 — Spatial / Digital / 3D section**
Decision needed: does this become a category page (`/spatial`) or fold into Work? When real assets arrive:
- Move placeholder data from `spatialPlaceholders` (inline in `work/page.tsx`) into `src/data/projects.ts`
- Create category page `/spatial` matching the structure of `/live-production`
- Create individual project pages for each web/3D work

**Priority 3 — Work page project grid clarity (OBO-style reference)**
The Work page currently shows: WAKE UP as a featured card + edition rows; Art Direction as a 3-col ProjectCard grid; Spatial as placeholder cards; Paintings as a 3-painting preview. The Art Direction section may benefit from clearer category labels, more consistent card sizing, and stronger click affordance (visible CTA, not just hover state).

**Priority 4 — Painting pages for Energy Explosion, Calm, Holy Mary, Current Joy**
These 4 paintings have slugs and render via the simple layout (no gallery). Galleries can be added to `artworks.ts` when detail images are available.

**Priority 5 — Re-export Multi U and Calm**
Request tighter masking on transparent PNG exports for these two paintings. The white gesso canvas border is showing as opaque pixels within the image bounds. The code is correct; only the source image files need updating.

**Priority 6 — Meditation restoration**
Get a correct transparent PNG export for Meditation. Add back to `artworks.ts` with a new entry, correct image path, and correct metadata (year: 2023, 150×120 cm).

---

## 8. Development Notes

### Commands
```bash
# Dev server
cd /path/to/04_final_site
npm run dev

# TypeScript check (run after every editing session)
npx tsc --noEmit

# Build check
npm run build
```

### Import conventions
```ts
import { Nav }           from "@/components/layout/Nav"
import { Footer }        from "@/components/layout/Footer"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ProjectCard }   from "@/components/ui/ProjectCard"
import { ArtworkCard }   from "@/components/ui/ArtworkCard"
import { PaintingViewer } from "@/components/ui/PaintingViewer"
import { artworks }       from "@/data/artworks"
import { liveProjects, artDirectionProjects } from "@/data/projects"
```
`@/` maps to `src/`. All pages are in `src/app/`.

### Asset placement
- All images: `/public/images/` — referenced as `/images/filename.ext` in Next.js
- All videos: `/public/videos/` — referenced as `/videos/filename.mp4`

### Painting image rules
- All primary artwork images must use the `*-transparent.png` variants
- No background colour on painting containers — transparent PNGs float on the dark page
- Use `fill` + `object-contain` (never `object-cover` for artworks)
- Never add padding wrappers or cream/white frames around paintings

### Common mistakes to avoid
1. **Using Cormorant Garamond on internal pages** — serif is homepage only. All internal page titles: `type-page-title` (Syne 700, uppercase)
2. **Adding blue/violet gradients to painting page atmospheric bg** — warm amber only
3. **Using `object-cover` on painting images** — use `object-contain` always
4. **Adding background colour to painting card containers** — keep them transparent
5. **Using `margin: 0 40px` on `.divider`** — causes horizontal overflow bug; use `className="divider container-site"` instead
6. **Using `space-y-40` on dense sections** — prefer `space-y-24` or explicit `paddingTop/Bottom`
7. **Raw YouTube iframes on Art Direction page** — use cover image + play badge approach
8. **Editing `type-display` globally** — it would break the homepage. Add new classes instead

### Server component vs client component
- All pages are server components by default
- Only `PaintingViewer` uses `"use client"` (needs `useState` for selected gallery image)
- Do not add `"use client"` to pages unless absolutely necessary

### TypeScript
Always run `npx tsc --noEmit` after editing. No output = no errors. The project is currently clean.
