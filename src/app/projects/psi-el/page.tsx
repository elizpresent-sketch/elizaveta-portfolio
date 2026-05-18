// ─────────────────────────────────────────────────────────────
// Ψ(E_l) — /projects/psi-el
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Ψ(E_l) — Elizaveta Zhuravleva",
  description:
    "A performance concept exploring affection, uncontrollable infatuation, beauty, suffering and metaphysical sensation. Performance / Concept · 2024.",
};

const meta = [
  { label: "Role",     value: "Concept · Performance · Visual Direction" },
  { label: "Location", value: "London" },
  { label: "Year",     value: "2024" },
  { label: "Format",   value: "Performance / Concept" },
];

const responsibilities = [
  "Developed the full concept, thematic framework and visual language",
  "Performance direction and embodied execution of the work",
  "Visual direction across spatial composition, materials and atmosphere",
  "Styling, object selection and body-as-surface approach",
  "Documentation direction and archival presentation",
];

export default function PsiElPage() {
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
            Performance / Concept · 2024
          </p>
          <h1 className="type-page-title text-[var(--color-text-primary)]">Ψ(E_l)</h1>
          <p className="type-body text-[var(--color-text-secondary)] mt-3">
            Concept · Performance · Visual Direction
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
                  src="/images/psi-el-01.png"
                  alt="Ψ(E_l)"
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
            <p className="type-body text-[var(--color-text-secondary)]">
              Ψ(E_l) is a performance concept exploring affection, uncontrollable infatuation,
              beauty, suffering and metaphysical sensation. The work moves through body, movement,
              pearls, flowers, spherical structures and paint as active material and symbolic language.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              The title draws on wave function notation — Ψ as a state that holds multiple
              possibilities simultaneously, collapsed only in the moment of observation. The work
              operates in the space between inner experience and outward form: sensation made visible
              through gesture, material and presence.
            </p>
            <p className="type-body text-[var(--color-text-secondary)]">
              The performance was conceived as a controlled live action in which the body functions
              as both subject and instrument — absorbing, reflecting and generating affective states
              through a sequence of sustained, material-led gestures.
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

      {/* ── BACK LINK ────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-hairline)]">
        <div className="container-site py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="type-label text-[var(--color-text-secondary)] mb-2">Back to</p>
              <h3 className="type-section-title text-[var(--color-text-primary)]">Live / Production</h3>
            </div>
            <Link href="/live-production" className="btn-ghost-dark">← All Live Works</Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
