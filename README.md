# Elizaveta Zhuravleva — Portfolio Website

Personal portfolio website built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

---

## Running locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Where to replace images

All placeholder images are in `public/images/`. The site renders labelled grey boxes until you drop in real photos.

| File | Used on | Notes |
|---|---|---|
| `wake-up-01.jpg` | Live page, WAKE UP hero, Work page | Landscape, atmospheric, 16:9 |
| `wake-up-02.jpg` | WAKE UP Edition 02 | Any ratio |
| `wake-up-03.jpg` | WAKE UP Edition 03 | Any ratio |
| `brdatn-01.jpg` | Art Direction page | Portrait or landscape |
| `burning-house-01.jpg` | Art Direction page | Portrait or landscape |
| `fluid-energy-01.jpg` | Art Direction page | Portrait or landscape |
| `painting-01.jpg` | Art / Paintings page | Clean neutral background, portrait |
| `portrait.jpg` | About page | 3:4 portrait ratio |
| `homepage-hero.jpg` | Homepage full-bleed | 16:9, minimum 1800px wide |

**To switch from PlaceholderImage to real images:**
Each component file has a comment like:
```tsx
{/* REPLACE: swap PlaceholderImage with Next.js <Image> once real images exist */}
{/* Example:
  <Image src="/images/wake-up-01.jpg" alt="WAKE UP" fill className="object-cover" sizes="..." />
*/}
```

Remove the `<PlaceholderImage>` and uncomment the `<Image>` block.

---

## Where to edit project text

**Project data:** `src/data/projects.ts`
- Edit titles, descriptions, roles, years, locations
- Add new projects by copying the existing object structure
- Update `wakeUpEditions` and `wakeUpPress` for the WAKE UP project page

**Artwork data:** `src/data/artworks.ts`
- Add paintings with title, year, medium, dimensions, status
- Update `installedWorks` for the installed works section

**Page copy:**
- Homepage: `src/app/page.tsx` — edit strapline, available-for list, CTA
- About: `src/app/about/page.tsx` — edit all bio paragraphs
- WAKE UP: `src/app/projects/wake-up/page.tsx` — edit all copy
- Contact: `src/app/contact/page.tsx` — edit email, social links

**Global details (email, social):**
- Search for `hello@elizaveta.com` and replace with real email
- Search for `instagram.com/` and `linkedin.com/in/` and add real handles

---

## Deploying to Vercel

### First time

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click Deploy
5. Done. Your site is live.

### Custom domain

In Vercel dashboard → Project → Settings → Domains → Add your domain.
Update `metadataBase` in `src/app/layout.tsx` to match your real domain.

### Subsequent deploys

Push to GitHub → Vercel auto-deploys on every commit to `main`.

---

## Image folders to prepare

Create and organise these folders before final launch:

```
public/
  images/
    wake-up/          — WAKE UP event photography (10–20 images)
    art-direction/    — Art direction project images (per project)
    paintings/        — Artwork photographs (clean, neutral bg)
    portrait/         — Your portrait (1–2 clean versions)
    homepage/         — Hero and pathway card images
  cv/
    elizaveta-zhuravleva-cv.pdf
```

**Image specs:**
- Hero images: minimum 1800px wide, JPG quality 85
- Cards: minimum 1200px wide
- Artworks: minimum 1200px on longest side, clean neutral background
- Portrait: minimum 800px wide, 3:4 ratio

---

## Font upgrade

The site currently uses free Google Fonts fallbacks:
- Cormorant Garamond (display) — close to Editorial New feel
- DM Sans (UI) — close to Suisse Int'l

When you have licensed fonts, replace in `src/app/layout.tsx`:
```tsx
// Remove the Google Fonts imports
// Add:
import localFont from "next/font/local";
const editorialNew = localFont({
  src: [
    { path: "../fonts/EditorialNew-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/EditorialNew-LightItalic.woff2", weight: "300", style: "italic" },
  ],
  variable: "--font-display",
});
const suisseIntl = localFont({
  src: [
    { path: "../fonts/SuisseIntl-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/SuisseIntl-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-ui",
});
```

Drop font files in `src/fonts/`.

---

## Design system reference

See `DESIGN.md` in the project root for the full design system.
