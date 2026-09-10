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
  title: "Creative Technology / Immersive Web — Elizaveta Zhuravleva",
  description:
    "Creative technology, immersive web, digital systems and interactive visual environments designed and built by Elizaveta Zhuravleva.",
};

// ── Real projects ─────────────────────────────────────────────
type DigitalProject = {
  id: string;
  label: string;
  status: string;
  title: string;
  desc: string;
  year: string;
  image: string;
  href?: string;
  external?: boolean;
};

const realProjects: DigitalProject[] = [
  {
    id: "horsvue-immersive",
    label: "Immersive Web / Art Direction / WebGL",
    status: "Self-initiated · Designed & built independently",
    title: "HORS-VUE — Immersive",
    desc: "A film-led fragrance world with an interactive scent-field sequence, custom motion and real-time spatial graphics.",
    year: "2026",
    image: "/images/digital-worlds/horsvue-immersive.jpg",
    href: "https://hors-vue-advanced.vercel.app",
    external: true,
  },
  {
    id: "horsvue-commerce",
    label: "Web Design / Commerce / Brand System",
    status: "Self-initiated · Designed & built independently",
    title: "HORS-VUE — Commerce",
    desc: "A linked commerce-style fragrance site spanning product discovery, notes, prices, narrative and cart flows.",
    year: "2026",
    image: "/images/digital-worlds/horsvue-commerce.jpg",
    href: "https://hors-vue.vercel.app",
    external: true,
  },
  {
    id: "halation",
    label: "Creative Technology / Interactive Data World",
    status: "Self-initiated · Designed & built independently",
    title: "HALATION",
    desc: "An interactive cosmic index in which signals, data and spatial motion form a navigable digital field.",
    year: "2026",
    image: "/images/digital-worlds/halation.jpg",
    href: "https://halation-cosmos.vercel.app",
    external: true,
  },
  {
    id:    "elizium-ai",
    label: "Web Design / Creative Technology",
    title: "ELIZIUM AI",
    desc:  "Website design and visual system for an AI-powered immersive entertainment platform.",
    year:  "2026",
    image: "/images/webdesign-1-1.webp",
    href:  "/projects/elizium-ai",
    status: "Independent concept and build",
    external: false,
  },
  {
    id: "meraki-spa",
    label: "Web Design / Information Architecture",
    status: "Commissioned & released",
    title: "Meraki Spa",
    desc: "A six-page service website covering treatments, prices, gallery, gift cards, contact and Fresha booking routes.",
    year: "2026",
    image: "/images/digital-worlds/meraki.png",
    // The commissioned build is evidenced here, but no public case-study link
    // is exposed until the new ELIZ Studio archive is deployed.
  },
  {
    id: "vesta",
    label: "Web Design / Spatial Brand World",
    status: "Self-initiated concept build",
    title: "VESTA Interior Studio",
    desc: "An editorial digital environment translating material warmth and quiet interior spaces into a complete studio website.",
    year: "2026",
    image: "/images/digital-worlds/vesta.jpg",
    href: "https://vesta-site-beta.vercel.app",
    external: true,
  },
  {
    id: "atom-sequence",
    label: "Interactive Product World",
    status: "Self-initiated concept build",
    title: "Atom Sequence",
    desc: "An object-led archive exploring product presentation through interaction, sequencing and restrained speculative imagery.",
    year: "2025",
    image: "/images/digital-worlds/atom-sequence.webp",
    href: "https://elizstudio.uk/work/atom-sequence",
    external: true,
  },
  {
    id: "nocte",
    label: "Product World / Creative Web",
    status: "Self-initiated concept build",
    title: "NOCTE",
    desc: "A cinematic lighting-world website developed through art direction, product narrative and atmospheric interface design.",
    year: "2025",
    image: "/images/digital-worlds/nocte.webp",
    href: "https://elizstudio.uk/work/nocte",
    external: true,
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
            backgroundImage:    "url('/images/hf_20260515_203910_7a798689-0349-448c-a91d-223845e84995.webp')",
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
              eyebrow="Creative Technology / Digital"
              headline="Immersive Web & Digital Worlds"
              lead="Interactive websites, product worlds and spatial interfaces — conceived, art-directed and built independently."
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
                <a
                  key={p.id}
                  href={p.href}
                  className={`block group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${p.href ? "cursor-pointer" : "cursor-default"}`}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noreferrer" : undefined}
                  aria-label={p.href ? `View ${p.title}` : undefined}
                >
                  <div
                    className="card-img-wrap relative overflow-hidden"
                    style={{ aspectRatio: "3/2", background: "#050507" }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-[filter,transform] duration-700 group-hover:scale-[1.015] group-hover:brightness-[1.06] motion-reduce:transition-none"
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
                    <p className="type-caption mt-2" style={{ color: "var(--color-gallery-text)" }}>
                      {p.status}
                    </p>
                    <p
                      className="type-body mt-2"
                      style={{ color: "var(--color-gallery-mid)", opacity: 0.78 }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </a>
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
