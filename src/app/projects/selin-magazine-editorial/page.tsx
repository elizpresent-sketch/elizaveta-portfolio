// ─────────────────────────────────────────────────────────────
// SELIN MAGAZINE EDITORIAL — /projects/selin-magazine-editorial
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Selin Magazine Editorial — Elizaveta Zhuravleva",
  description:
    "Published editorial image series for Selin Magazine Issue 61, Vol. 16. Art direction, styling and visual atmosphere — London, 2025.",
};

const meta = [
  { label: "Role",        value: "Art Director · Stylist" },
  { label: "Publication", value: "Selin Magazine, Issue 61, Vol. 16" },
  { label: "Location",    value: "London" },
  { label: "Year",        value: "2025" },
  { label: "Format",      value: "Published Editorial / Magazine Feature" },
];

const responsibilities = [
  "Developed the visual and emotional direction for the editorial",
  "Worked on styling and image atmosphere",
  "Built a dark, ritual-like visual world through costume, setting and symbolic details",
  "Supported the narrative direction of the shoot for publication",
  "Contributed to the final editorial presentation for Selin Magazine",
];

// ── Editorial gallery — all landscape (≈3:2), shown full-width ─
// Plain <img> with height:auto so each spread renders at its
// natural magazine proportion. No forced containers, no black bars.
const editorialImages = [
  { src: "/images/mag1.png",  alt: "Selin Magazine Editorial — spread 01" },
  { src: "/images/mag2.PNG",  alt: "Selin Magazine Editorial — spread 02" },
  { src: "/images/mag3.PNG",  alt: "Selin Magazine Editorial — spread 03" },
  { src: "/images/mag4.PNG",  alt: "Selin Magazine Editorial — spread 04" },
];

export default function SelinMagazineEditorialPage() {
  return (
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)]">
      <Nav mode="dark" />

      {/* ── TITLE ────────────────────────────────────────────── */}
      <section className="pt-32 pb-10">
        <div className="container-site">
          <p
            className="type-label mb-4"
            style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.18em" }}
          >
            Art Direction / Styling / Editorial · 2025
          </p>
          <h1
            className="type-page-title text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(34px,4.4vw,64px)", lineHeight: 0.96, letterSpacing: "0.08em", maxWidth: "820px" }}
          >
            Selin Magazine Editorial
          </h1>
          <p className="type-body text-[var(--color-text-secondary)] mt-3">
            Published editorial image series for Selin Magazine Issue 61, Vol.&nbsp;16.
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE + METADATA ─────────────────────────────── */}
      {/* mag1.png is landscape (4096×2730, ≈3:2). Container uses the
          same ratio so object-contain fills it perfectly — no bars,
          no cropping, consistent with the user instruction.         */}
      <section className="pb-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Hero image — 8 columns, natural 3:2 ratio */}
            <div className="lg:col-span-8">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "3/2" }}
              >
                <Image
                  src="/images/mag1.png"
                  alt="Selin Magazine Editorial — cover image"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>

            {/* Metadata sidebar — 3 columns */}
            <div className="lg:col-span-3 lg:col-start-10 space-y-5 lg:pt-1">
              {meta.map(({ label, value }) => (
                <div key={label} className="border-t border-[var(--color-hairline)] pt-4">
                  <p className="type-micro text-[var(--color-text-tertiary)] mb-1">{label}</p>
                  <p className="type-body text-[var(--color-text-secondary)]">{value}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div className="divider container-site" style={{ marginTop: "64px" }} />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site max-w-3xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-6">Overview</p>
          <div className="space-y-5">
            <p className="type-body text-[var(--color-text-secondary)]">
              This editorial project was developed as a published fashion image series for Selin
              Magazine Issue 61, Vol. 16. The work brought together art direction, styling,
              atmosphere and narrative image-making to create a visual story around texture,
              attachment and emotional transformation.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              The shoot used dark natural settings, white garments, red thread, sculptural styling
              and symbolic objects to create a world that feels intimate, ritualistic and slightly
              haunted. My role focused on shaping the visual direction, styling language and
              emotional atmosphere of the series.
            </p>
          </div>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── WHAT I DID ───────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site max-w-3xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-6">What I did</p>
          <ul className="space-y-1">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-4 py-3 border-b border-[var(--color-hairline)]">
                <span className="type-caption text-[var(--color-text-tertiary)] mt-1 shrink-0">—</span>
                <span className="type-body text-[var(--color-text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── EDITORIAL IMAGES ─────────────────────────────────────
          All four images are landscape (≈3:2). Plain <img> with
          width:100% height:auto shows each spread at its natural
          magazine proportion. 2-col desktop / 1-col mobile.
          No forced-height containers, no black bars, no cropping.   */}
      <section className="container-site pt-28 pb-36">
        <p
          className="type-micro mb-10"
          style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.18em" }}
        >
          Editorial Images
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {editorialImages.map((img) => (
            <figure key={img.src} className="w-full m-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="block w-full h-auto"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ── BACK TO ART DIRECTION ────────────────────────────── */}
      <section className="border-t border-[var(--color-hairline)]">
        <div className="container-site py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="type-label text-[var(--color-text-secondary)] mb-2">Art Direction</p>
              <h3 className="type-section-title text-[var(--color-text-primary)]">
                Back to Image Work
              </h3>
            </div>
            <Link href="/art-direction" className="btn-ghost-dark">
              View All →
            </Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
