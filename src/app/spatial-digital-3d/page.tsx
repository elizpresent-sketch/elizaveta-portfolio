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
  video?: string;
  href?: string;
  external?: boolean;
};

const realProjects: DigitalProject[] = [
  {
    id: "horsvue-immersive",
    label: "Immersive Web / Art Direction / WebGL",
    status: "Independent concept, design & build",
    title: "HORS-VUE — Immersive",
    desc: "A film-led fragrance world with an interactive scent-field sequence, custom motion and real-time spatial graphics.",
    year: "2026",
    image: "/images/digital-worlds/horsvue-immersive.jpg",
    video: "/video/digital-worlds/horsvue-immersive.mp4",
    href: "https://hors-vue-advanced.vercel.app",
    external: true,
  },
  {
    id: "horsvue-commerce",
    label: "Web Design / Commerce / Brand System",
    status: "Independent concept, design & build",
    title: "HORS-VUE — Commerce",
    desc: "A linked commerce-style fragrance site spanning product discovery, notes, prices, narrative and cart flows.",
    year: "2026",
    image: "/images/digital-worlds/horsvue-commerce.jpg",
    video: "/video/digital-worlds/horsvue-commerce.mp4",
    href: "https://hors-vue.vercel.app",
    external: true,
  },
  {
    id: "halation",
    label: "Creative Technology / Interactive Data World",
    status: "Independent concept, design & build",
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
      {/* ── FIXED BACKGROUND — dark digital exhibition field ── */}
      <div
        aria-hidden="true"
        style={{
          position:   "fixed",
          inset:      0,
          zIndex:     0,
          pointerEvents: "none",
          background: "#0A0B0D",
        }}
      >
        {/* A low-contrast spatial trace keeps depth without clouding the work. */}
        <div
          style={{
            position:           "absolute",
            inset:              0,
            backgroundImage:    "url('/images/hf_20260515_203910_7a798689-0349-448c-a91d-223845e84995.webp')",
            backgroundSize:     "cover",
            backgroundPosition: "center",
            opacity:            0.025,
            filter:             "invert(1) contrast(1.1)",
          }}
        />
      </div>

      <main
        style={{
          position:   "relative",
          zIndex:     1,
          minHeight:  "100vh",
          color:      "var(--color-gallery-text)",
          // Local gallery palette: the rest of the personal site remains unchanged.
          ["--color-gallery-ground" as string]: "#0A0B0D",
          ["--color-gallery-text" as string]: "#F3F0E9",
          ["--color-gallery-mid" as string]: "#9DA5AE",
          ["--color-gallery-hairline" as string]: "#2A3038",
        }}
      >
        <Nav mode="gallery" />

        {/* ── PAGE HEADER ──────────────────────────────────────── */}
        <section className="pt-40 pb-20">
          <div className="container-site">
            <SectionHeader
              eyebrow="Creative Technology / Digital"
              headline="Immersive Web & Digital Worlds"
              lead="Interactive websites, product worlds and spatial interfaces — conceived, art-directed and built independently. Full digital environments, shown at their native scale."
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
        <section style={{ paddingTop: "64px", paddingBottom: "112px" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-20 lg:gap-y-24">

              {/* ── Real projects — full visual weight ─────────── */}
              {realProjects.map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  className={`block group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8BA7C7] ${p.href ? "cursor-pointer" : "cursor-default"}`}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noreferrer" : undefined}
                  aria-label={p.href ? `View ${p.title}` : undefined}
                >
                  <div
                    className="card-img-wrap relative overflow-hidden border border-[#2A3038] bg-[#12151A]"
                    style={{ aspectRatio: "960/554" }}
                  >
                    {p.video ? (
                      <video
                        className="h-full w-full object-cover transition-[filter,transform] duration-700 group-hover:scale-[1.008] group-hover:brightness-110 motion-reduce:hidden"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={p.image}
                        aria-label={`${p.title} website preview`}
                      >
                        <source src={p.video} type="video/mp4" />
                      </video>
                    ) : null}
                    <Image
                      src={p.image}
                      alt={`${p.title} desktop website view`}
                      fill
                      className={`${p.video ? "hidden motion-reduce:block" : "block"} object-cover transition-[filter,transform] duration-700 group-hover:scale-[1.008] group-hover:brightness-110 motion-reduce:transition-none`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {p.video ? (
                      <span className="pointer-events-none absolute bottom-3 right-3 border border-white/20 bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                        Live preview
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4 border-t border-[#2A3038] pt-4">
                    <p
                      className="type-label mb-2"
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
                    <p className="type-caption mt-2" style={{ color: "var(--color-gallery-text)", opacity: 0.82 }}>
                      {p.status}
                    </p>
                    <p
                      className="type-body mt-2 max-w-[62ch]"
                      style={{ color: "var(--color-gallery-mid)", opacity: 0.92, lineHeight: 1.45 }}
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
