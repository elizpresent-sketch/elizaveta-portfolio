// ─────────────────────────────────────────────────────────────
// ECLIPSE OBVERSE — /projects/eclipse-obverse
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Eclipse Obverse — Elizaveta Zhuravleva",
  description:
    "A short film and performance-led visual work shaped as a self-exploration journey, moving between body, image, atmosphere and cosmic interiority. Short Film / Performance · 2024.",
};

const meta = [
  { label: "Role",     value: "Co-Direction · Artist · MUA · Styling" },
  { label: "Location", value: "London" },
  { label: "Year",     value: "2024" },
  { label: "Format",   value: "Short Film / Performance" },
];

const credits = [
  { label: "Direction / Creative / VFX & Editing / Soundtrack", value: "@hqeivy" },
  { label: "Co-Direction / Artist / MUA / Styling", value: "@elizpresent" },
  { label: "DP", value: "@no_photograph_bhsy" },
  { label: "Assistant", value: "Shanghui Song" },
];

const responsibilities = [
  "Co-directed the visual and conceptual development of the work",
  "Developed the performance concept and live actions within the film",
  "Full make-up artistry — body and face as painted surface throughout",
  "Styling and visual language — costume, object selection, atmosphere",
  "Collaborated on spatial composition, choreography and pacing",
];

export default function EclipseObversePage() {
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
            Short Film / Performance · 2024
          </p>
          <h1 className="type-display text-[var(--color-text-primary)]">Eclipse Obverse</h1>
          <p className="type-body text-[var(--color-text-secondary)] mt-3">
            Co-Direction · Artist · MUA · Styling
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE + METADATA ─────────────────────────────── */}
      <section className="pb-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Hero image — 8 columns */}
            <div className="lg:col-span-8">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "3/2" }}
              >
                <Image
                  src="/images/eclipse-obverse-01.png"
                  alt="Eclipse Obverse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
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
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,237,230,0.68)" }}>
              Eclipse Obverse is a short film and performance-led visual work shaped as a
              self-exploration journey, moving between body, image, atmosphere and cosmic
              interiority. The work was developed collaboratively, with direction, creative
              vision, VFX, editing and original soundtrack by Hqeivy.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,237,230,0.68)" }}>
              My role encompassed co-direction, performance, make-up artistry and styling —
              the body becoming a painted, material surface within the film's visual and
              atmospheric world. The work explores states of concealment and revelation,
              shadow and reflection, inner and outer as simultaneously present conditions.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,237,230,0.68)" }}>
              Eclipse Obverse exists as both document and work — the film recording a live
              performed action while transforming it into a cinematic object with its own
              temporal and sensory logic.
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
                <span style={{ fontSize: "15px", lineHeight: 1.6, color: "rgba(240,237,230,0.62)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── CREDITS ──────────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site max-w-3xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-6">Credits</p>
          <ul className="space-y-1">
            {credits.map(({ label, value }) => (
              <li key={label} className="flex gap-4 py-3 border-b border-[var(--color-hairline)]">
                <span style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(240,237,230,0.38)", minWidth: "220px", flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(240,237,230,0.62)" }}>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── BACK LINK ────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-hairline)]">
        <div className="container-site py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="type-label text-[var(--color-text-secondary)] mb-2">Back to</p>
              <h3 className="type-display-sm text-[var(--color-text-primary)]">Live / Production</h3>
            </div>
            <Link href="/live-production" className="btn-ghost-dark">← All Live Works</Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
