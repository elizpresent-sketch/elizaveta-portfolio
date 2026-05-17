// ─────────────────────────────────────────────────────────────
// FLUID ENERGY — /projects/fluid-energy
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Fluid Energy — Elizaveta Zhuravleva",
  description:
    "A durational performance exploring physical constraint, vulnerability and the transformation of the body into an instrument of mark-making. Performance / Short Film · 2024.",
};

const VIDEO_ID = "J_o-CgrRPwg";
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&playsinline=1&controls=0`;
const YOUTUBE_URL = `https://youtu.be/${VIDEO_ID}`;

const meta = [
  { label: "Role",     value: "Producer · Live Director · Art Director · Performer" },
  { label: "Location", value: "London" },
  { label: "Year",     value: "2024" },
  { label: "Format",   value: "Performance / Short Film" },
];

const responsibilities = [
  "Conceived the performance structure, concept and material language",
  "Full production — location, crew coordination, scheduling and logistics",
  "Live direction of all actions, pacing and visual composition during execution",
  "Art direction across spatial setup, material selection and environment",
  "Performed as the central figure — body as subject and tool throughout",
  "Post-production and documentation oversight",
];

export default function FluidEnergyPage() {
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
            Performance / Short Film · 2024
          </p>
          <h1 className="type-display text-[var(--color-text-primary)]">Fluid Energy</h1>
          <p className="type-body text-[var(--color-text-secondary)] mt-3">
            Producer · Live Director · Art Director · Performer
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
                  title="Fluid Energy"
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
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,237,230,0.68)" }}>
              Fluid Energy is a durational performance exploring physical constraint, vulnerability,
              and the transformation of the body into an instrument of mark-making. The work unfolds
              through controlled actions involving suspension, binding, and repetitive gesture,
              activating the body as both subject and tool.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,237,230,0.68)" }}>
              The performance was executed live, with movement, weight, and resistance gradually
              altering both the body and the surface of the canvas. Black paint accumulated through
              contact, friction, and motion, registering traces of time, pressure, and endurance.
              Rather than representation, the work operates through direct physical inscription.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,237,230,0.68)" }}>
              Fluid Energy investigates the boundaries between control and surrender, structure and
              collapse, presence and erasure. The body functions as a moving brush, producing a
              record of lived action rather than a predetermined image.
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

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <p className="type-label text-[var(--color-text-secondary)] mb-10">Images</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "/images/fluid-energy-gallery-01.jpg",
              "/images/fluid-energy-gallery-02.jpg",
              "/images/fluid-energy-gallery-03.jpg",
            ].map((src, i) => (
              <div key={i} className="card-img-wrap relative" style={{ aspectRatio: "3/2" }}>
                <Image
                  src={src}
                  alt={`Fluid Energy — ${i + 1}`}
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
              <h3 className="type-display-sm text-[var(--color-text-primary)]">WAKE UP</h3>
            </div>
            <Link href="/projects/wake-up" className="btn-ghost-dark">View Project →</Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
