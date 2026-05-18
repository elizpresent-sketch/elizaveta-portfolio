// ─────────────────────────────────────────────────────────────
// ELIZIUM AI — /projects/elizium-ai
// Web design, visual direction and platform presentation.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "ELIZIUM AI — Elizaveta Zhuravleva",
  description:
    "Website design and visual system for ELIZIUM AI — a cinematic creative-technology platform concept for AI-powered immersive live entertainment. London, 2026.",
};

const meta = [
  {
    label: "Role",
    value: "Website Design · Visual Direction · Image Creation · Copywriting · Front-End Styling",
  },
  { label: "Location", value: "London" },
  { label: "Year",     value: "2026" },
  { label: "Format",   value: "Web Design / Creative Technology / Visual System" },
];

const responsibilities = [
  "Designed the full website structure and page flow",
  "Developed the visual language and cinematic interface direction",
  "Created and directed the AI image world and atmospheric visual assets",
  "Wrote and refined the platform copy across the site",
  "Built CSS styling, motion details and interaction rhythm",
  "Positioned the project as a scalable AI-human immersive entertainment platform",
];

// ── Website screenshots — object-contain, 2-col editorial grid ─
const galleryImages = [
  { src: "/images/webdesign-1-2.png", alt: "ELIZIUM AI — website screen 02" },
  { src: "/images/webdesign-1-3.png", alt: "ELIZIUM AI — website screen 03" },
  { src: "/images/webdesign-1-4.png", alt: "ELIZIUM AI — website screen 04" },
  { src: "/images/webdesign-1-5.png", alt: "ELIZIUM AI — website screen 05" },
  { src: "/images/webdesign-1-6.png", alt: "ELIZIUM AI — website screen 06" },
];

export default function EliziumAIPage() {
  return (
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)]">
      <Nav mode="dark" />

      {/* ── TITLE ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-10">
        <div className="container-site">
          <p
            className="type-label mb-4"
            style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.18em" }}
          >
            Web Design / Creative Technology / 2026
          </p>
          <h1
            className="type-page-title text-[var(--color-text-primary)]"
            style={{
              fontSize:      "clamp(34px, 4.4vw, 64px)",
              lineHeight:    0.96,
              letterSpacing: "0.08em",
              maxWidth:      "820px",
            }}
          >
            ELIZIUM AI
          </h1>
          <p className="type-body text-[var(--color-text-secondary)] mt-3">
            Website design and visual system for an AI-powered immersive entertainment platform.
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE + METADATA ─────────────────────────────── */}
      <section className="pb-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Hero image — 8 columns, 16:9 */}
            <div className="lg:col-span-8">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16/9", background: "#050507" }}
              >
                <Image
                  src="/images/webdesign-1-1.png"
                  alt="ELIZIUM AI — website hero"
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

              {/* External link */}
              <div className="border-t border-[var(--color-hairline)] pt-4">
                <a
                  href="https://elisyum-ai-platform.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                  style={{ fontSize: "11px", letterSpacing: "0.14em", padding: "9px 20px" }}
                >
                  VISIT WEBSITE ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider container-site" style={{ marginTop: "64px" }} />

      {/* ── OVERVIEW ──────────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site max-w-3xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-6">Overview</p>
          <div className="space-y-5">
            <p className="type-body text-[var(--color-text-secondary)]">
              ELIZIUM AI is a creative-technology website concept for an AI-powered immersive
              entertainment platform. The site frames the project as a future-facing cultural
              platform rather than a single event, using cinematic visual direction, controlled
              language and atmospheric interaction to communicate credibility, scale and emotional
              intensity.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              The platform positions AI not as spectacle but as infrastructure — a system enabling
              AI-human performance, immersive storytelling, audience experiences and premium live
              entertainment. The visual language operates in dark graphite, silver-blue and black:
              future-facing without cheap sci-fi, premium without cold distance.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              I developed the website&apos;s visual system, image world, written language, page
              structure, animations and front-end styling. The goal was to create a digital
              presence that feels serious, premium and platform-led — positioning ELIZIUM AI as
              an emerging AI-human immersive experience with London as its launch point.
            </p>
          </div>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── WHAT I DID ────────────────────────────────────────── */}
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

      {/* ── WEBSITE SCREENS ───────────────────────────────────────
          Screenshots rendered with object-contain inside a dark
          frame so no UI detail is clipped or cropped.             */}
      <section className="container-site pt-24 pb-32">
        <p
          className="type-micro mb-10"
          style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.18em" }}
        >
          Website Screens
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((img) => (
            <figure
              key={img.src}
              className="m-0 overflow-hidden"
              style={{ background: "#050507" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="block w-full h-auto"
                style={{ display: "block" }}
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ── BACK NAV ──────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-hairline)]">
        <div className="container-site py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="type-label text-[var(--color-text-secondary)] mb-2">
                Spatial / Digital / 3D
              </p>
              <h3 className="type-section-title text-[var(--color-text-primary)]">
                Back to Work
              </h3>
            </div>
            <Link href="/work#spatial" className="btn-ghost-dark">
              View All →
            </Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
