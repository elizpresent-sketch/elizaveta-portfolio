// ─────────────────────────────────────────────────────────────
// EXPERIMENTAL MUSIC CAMPAIGN — /projects/experimental-music-campaign
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CampaignImageViewer } from "@/components/ui/CampaignImageViewer";

export const metadata = {
  title: "Experimental Music Campaign — Elizaveta Zhuravleva",
  description:
    "Visual campaign direction for an experimental music project — dark organic image-world built around body, material, sound and atmosphere. 2025.",
};

const meta = [
  { label: "Role",     value: "Art Direction · Image-Making · Visual Direction" },
  { label: "Location", value: "London" },
  { label: "Year",     value: "2025" },
  { label: "Format",   value: "Music Campaign · Editorial Image Work" },
];

const responsibilities = [
  "Developed the visual concept and campaign atmosphere",
  "Directed the image language around body, material and sound",
  "Chose and shaped the setting, staging and composition",
  "Worked with organic textures, reflective fragments and sculptural elements",
  "Photographed and edited the final campaign image",
  "Created a visual direction suitable for experimental music promotion",
];

// ── Gallery — controlled 3×2 archive grid ────────────────────
// Fixed-height frames with object-contain keep every image fully
// visible regardless of portrait/landscape orientation. No masonry,
// no auto-height floating, no cropping.
const campaignImages = [
  "/images/IMG_4725.webp",
  "/images/IMG_4716.webp",
  "/images/IMG_4719.webp",
  "/images/IMG_4733.webp",
  "/images/IMG_4726.webp",
  "/images/IMG_4728.webp",
];

export default function ExperimentalMusicCampaignPage() {
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
            Music / Campaign / Image-Making · 2025
          </p>
          {/* Slightly tighter than the global type-page-title (clamp 36→72px)
              so it feels balanced alongside the metadata sidebar. */}
          <h1
            className="type-page-title text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(34px,4.4vw,64px)", lineHeight: 0.96, letterSpacing: "0.08em", maxWidth: "980px" }}
          >
            Experimental Music Campaign
          </h1>
          <p className="type-body text-[var(--color-text-secondary)] mt-3">
            Art Direction · Image-Making · Visual Direction
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE + METADATA ─────────────────────────────── */}
      <section className="pb-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Cover image — 8 columns, 16:9, object-cover for the designed hero crop */}
            <div className="lg:col-span-8">
              <div
                className="card-img-wrap relative w-full overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src="/images/experimental-music-campaign-01.webp"
                  alt="Experimental Music Campaign — cover"
                  fill
                  className="object-cover"
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

      {/* ── IMAGES — horizontal viewer with thumbnail strip ──────
          CampaignImageViewer is a "use client" component:
          one large selected image + prev/next arrows + thumb strip.
          The page itself stays a server component.                  */}
      {/* ── IMAGES — aligned to the same column as the hero image ─
          The viewer sits inside lg:col-span-8, matching the left edge
          and width of the hero image exactly. No independent centering. */}
      <section className="container-site pt-36 pb-32">
        <p
          className="type-micro mb-12"
          style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.18em" }}
        >
          Images
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <CampaignImageViewer images={campaignImages} />
          </div>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site max-w-3xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-6">Overview</p>
          <div className="space-y-5">
            <p className="type-body text-[var(--color-text-secondary)]">
              This visual campaign was developed for an experimental music duo, building a dark
              organic image-world around body, material, sound and atmosphere.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              The project combined art direction, location thinking, set and staging, photography
              and editing. Instead of presenting the musicians through a clean promotional portrait,
              the image treats the body as part of a sculptural environment — partially hidden,
              transformed and absorbed into moss, reflective fragments, bone-like forms and shadow.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              The result is a campaign language that feels intimate, ritual-like and cinematic,
              positioning the band through atmosphere rather than conventional music promotion.
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
