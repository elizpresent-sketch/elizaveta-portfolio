// ─────────────────────────────────────────────────────────────
// SPATIAL / DIGITAL / 3D PAGE — /spatial-digital-3d
// Dedicated category page — mirrors /live-production and /art-direction
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Spatial / Digital / 3D — Elizaveta Zhuravleva",
  description:
    "Web design, digital systems, 3D studies, spatial thinking and immersive visual environments. London.",
};

// ── Real projects ─────────────────────────────────────────────
const realProjects = [
  {
    id:    "elizium-ai",
    label: "Web Design / Creative Technology",
    title: "ELIZIUM AI",
    desc:  "Website design and visual system for an AI-powered immersive entertainment platform.",
    year:  "2026",
    image: "/images/webdesign-1-1.png",
    href:  "/projects/elizium-ai",
  },
];

// ── Placeholder entries removed ───────────────────────────────
// Only real projects with assets are shown in the grid.
// Add entries here when new project pages and images are ready.
const placeholders: { id: string; label: string; title: string; year: string; desc: string }[] = [];

export default function SpatialDigital3DPage() {
  return (
    <>
      {/* ── FIXED BACKGROUND — pale spatial, architectural image ── */}
      <div
        aria-hidden="true"
        style={{
          position:   "fixed",
          inset:      0,
          zIndex:     0,
          pointerEvents: "none",
          background: "#ECEEF2",
        }}
      >
        {/* Architectural / spatial image — barely there, structural layer */}
        <div
          style={{
            position:           "absolute",
            inset:              0,
            backgroundImage:    "url('/images/hf_20260515_203910_7a798689-0349-448c-a91d-223845e84995.png')",
            backgroundSize:     "cover",
            backgroundPosition: "center",
            opacity:            0.07,
          }}
        />
      </div>

      <main
        style={{
          position:   "relative",
          zIndex:     1,
          minHeight:  "100vh",
          color:      "var(--color-gallery-text)",
        }}
      >
        <Nav mode="gallery" />

        {/* ── PAGE HEADER ──────────────────────────────────────── */}
        <section className="pt-40 pb-16">
          <div className="container-site">
            <SectionHeader
              eyebrow="Spatial / Digital"
              headline="Spatial / Digital / 3D"
              lead="Web design, digital systems, 3D studies, spatial thinking and immersive visual environments."
              mode="gallery"
              size="page"
            />
          </div>
        </section>

        <div
          className="divider container-site"
          style={{ background: "var(--color-gallery-hairline)" }}
        />

        {/* ── PROJECTS GRID ────────────────────────────────────── */}
        <section style={{ paddingTop: "56px", paddingBottom: "96px" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">

              {/* ── Real projects — full visual weight ─────────── */}
              {realProjects.map((p) => (
                <Link key={p.id} href={p.href} className="block group cursor-pointer">
                  <div
                    className="card-img-wrap relative overflow-hidden"
                    style={{ aspectRatio: "3/2", background: "#050507" }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:brightness-[1.06]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    <p
                      className="type-label mb-1"
                      style={{ color: "var(--color-gallery-mid)" }}
                    >
                      {p.label}
                    </p>
                    <h3
                      className="type-heading"
                      style={{ color: "var(--color-gallery-text)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="type-caption mt-1"
                      style={{ color: "var(--color-gallery-mid)" }}
                    >
                      {p.year} · London
                    </p>
                    <p
                      className="type-body mt-2"
                      style={{ color: "var(--color-gallery-mid)", opacity: 0.78 }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </Link>
              ))}

              {/* ── Placeholders — intentionally quieter ──────── */}
              {placeholders.map((p) => (
                <div key={p.id} className="group" style={{ opacity: 0.46 }}>
                  <div
                    className="card-img-wrap relative"
                    style={{
                      aspectRatio: "3/2",
                      background: "rgba(155, 162, 178, 0.18)",
                      border: "1px solid rgba(155, 162, 178, 0.22)",
                    }}
                  />
                  <div className="mt-4 space-y-1">
                    <p
                      className="type-label mb-1"
                      style={{ color: "var(--color-gallery-mid)" }}
                    >
                      {p.label}
                    </p>
                    <h3
                      className="type-heading"
                      style={{ color: "var(--color-gallery-text)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="type-caption mt-1"
                      style={{ color: "var(--color-gallery-mid)" }}
                    >
                      {p.year} · London
                    </p>
                    <p
                      className="type-body mt-2"
                      style={{ color: "var(--color-gallery-mid)" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <Footer mode="gallery" />
      </main>
    </>
  );
}
