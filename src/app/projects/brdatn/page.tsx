// ─────────────────────────────────────────────────────────────
// BRDÄTN — /projects/brdatn
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "BRDÄTN — Elizaveta Zhuravleva",
  description: "A live performance work conceived and directed as a time-based event. Performance · 2024.",
};

const VIDEO_ID = "Q2iR_FMRO_E";
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&playsinline=1&controls=0`;
const YOUTUBE_URL = `https://youtu.be/${VIDEO_ID}`;

const meta = [
  { label: "Role",     value: "Concept · Live Direction · Performance" },
  { label: "Location", value: "London" },
  { label: "Year",     value: "2024" },
  { label: "Format",   value: "Live Performance" },
];

const responsibilities = [
  "Developed the concept and full performance structure from initial idea to live execution",
  "Directed all choreography, visual composition and pacing in real time",
  "Styling, visual language and material selection across the work",
  "Coordinated performers, assistants and filming crew",
  "Managed all communications, logistics and scheduling",
  "Performed as the central figure within the work",
];

export default function BrdatnPage() {
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
            Performance · 2024
          </p>
          <h1 className="type-page-title text-[var(--color-text-primary)]">BRDÄTN</h1>
          <p className="type-body text-[var(--color-text-secondary)] mt-3">
            Concept · Live Direction · Performance
          </p>
        </div>
      </section>

      {/* ── VIDEO + METADATA ─────────────────────────────────── */}
      <section className="pb-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Video — 8 columns */}
            <div className="lg:col-span-8">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16/9", background: "#000" }}
              >
                <iframe
                  src={YOUTUBE_EMBED}
                  title="BRDÄTN"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
              <div className="mt-4">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                >
                  VIEW ON YOUTUBE →
                </a>
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
              BRDÄTN is a live performance work conceived and directed by me as a time-based event.
              The project was developed as a controlled live action, with choreography, visual language,
              and pacing shaped in real time for both audience and camera.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              I led the full creative and production process — developing the concept, directing the
              performance, styling and visual composition, coordinating performers, and managing
              communication with assistants and the filming crew. I also performed as the central
              figure within the work.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              The performance was executed live, with video documentation serving as its archival
              and presentational form.
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

      <div className="divider container-site" />

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <p className="type-label text-[var(--color-text-secondary)] mb-10">Images</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "/images/brdatn-gallery-01.png",
              "/images/brdatn-gallery-02.png",
              "/images/brdatn-gallery-03.png",
            ].map((src, i) => (
              <div key={i} className="card-img-wrap relative" style={{ aspectRatio: "3/2" }}>
                <Image
                  src={src}
                  alt={`BRDÄTN — ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ─────────────────────────────────────── */}
      <section className="border-t border-[var(--color-hairline)]">
        <div className="container-site py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="type-label text-[var(--color-text-secondary)] mb-2">Next Project</p>
              <h3 className="type-section-title text-[var(--color-text-primary)]">Fluid Energy</h3>
            </div>
            <Link href="/projects/fluid-energy" className="btn-ghost-dark">View Project →</Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
