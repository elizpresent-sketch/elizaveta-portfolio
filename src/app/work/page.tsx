// ─────────────────────────────────────────────────────────────
// WORK PAGE — selected overview of all projects
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { liveProjects, artDirectionProjects } from "@/data/projects";
import { artworks } from "@/data/artworks";

// ── ELIZIUM AI — first real Spatial / Digital / 3D entry ─────
const eliziumAI = {
  id:    "elizium-ai",
  label: "Web Design / Creative Technology",
  title: "ELIZIUM AI",
  desc:  "Website design and visual system for an AI-powered immersive entertainment platform.",
  year:  "2026",
  image: "/images/webdesign-1-1.png",
  href:  "/projects/elizium-ai",
};

const paintingPreview = artworks.slice(0, 3);

// ── Spatial / Digital / 3D — placeholder entries removed ─────
// Only real projects with assets are shown. Placeholders will be
// added back as proper entries when content is ready.
const spatialPlaceholders: { id: string; label: string; title: string; desc: string; year: string }[] = [];

const wakeUpEditionNotes = [
  { label: "WAKE UP 01", meta: "London",        href: "/projects/wake-up#edition-01" },
  { label: "WAKE UP 02", meta: "MORPHOSIS",     href: "/projects/wake-up#edition-02" },
  { label: "WAKE UP 03", meta: "Artworks East", href: "/projects/wake-up#edition-03" },
];

// ── Neutral-white hierarchy — crisp against warm graphite ─────
const CW = {
  pri:   "rgba(232, 232, 230, 0.96)",   // near-white, no blue push
  sec:   "rgba(210, 210, 206, 0.70)",   // cool mid-grey, neutral
  ter:   "rgba(188, 188, 184, 0.44)",   // muted, clearly legible
  faint: "rgba(175, 175, 172, 0.28)",   // faint label tint
};

// ── Dark-section headings (WAKE UP zone) ──────────────────────
const EYEBROW: React.CSSProperties = {
  fontFamily:    "var(--font-ui)",
  fontSize:      "11px",
  fontWeight:    500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color:         CW.ter,
  marginBottom:  "10px",
};

const SECTION_HEAD: React.CSSProperties = {
  fontFamily:    "var(--font-sharp)",
  fontSize:      "clamp(18px, 2vw, 26px)",
  fontWeight:    700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color:         CW.pri,
  lineHeight:    1.0,
};

// ── Light-section headings (Art Direction + Paintings) ─────────
const EYEBROW_LIGHT: React.CSSProperties = {
  fontFamily:    "var(--font-ui)",
  fontSize:      "11px",
  fontWeight:    500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color:         "rgba(38, 34, 30, 0.48)",
  marginBottom:  "10px",
};

const SECTION_HEAD_LIGHT: React.CSSProperties = {
  fontFamily:    "var(--font-sharp)",
  fontSize:      "clamp(18px, 2vw, 26px)",
  fontWeight:    700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color:         "rgba(18, 15, 12, 0.92)",
  lineHeight:    1.0,
};

export default function WorkPage() {
  return (
    <main
      className="text-[var(--color-text-primary)]"
      style={{
        overflowX: "hidden",
        background: "#141210", // warm charcoal fallback; sections own their surface
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Light-section CSS variable scope ─────────────────────
           Overrides --color-text-primary / secondary so ProjectCard
           text (which uses those variables) reads as dark graphite
           on pale backgrounds — without touching the component file. */
        .work-light-section {
          --color-text-primary:   rgba(18, 15, 12, 0.92);
          --color-text-secondary: rgba(40, 36, 30, 0.58);
        }
        /* CTA view links — dark sections */
        .work-cta {
          color: rgba(222, 220, 216, 0.80);
          border-bottom-color: rgba(222, 220, 216, 0.24);
        }
        .work-cta:hover {
          color: rgba(232, 230, 226, 0.98);
          border-bottom-color: rgba(222, 220, 216, 0.60);
        }
        /* CTA view links — light sections */
        .work-cta-light {
          color: rgba(30, 26, 22, 0.52);
          border-bottom-color: rgba(30, 26, 22, 0.16);
        }
        .work-cta-light:hover {
          color: rgba(14, 11, 8, 0.90);
          border-bottom-color: rgba(30, 26, 22, 0.44);
        }
        .work-arrow {
          display: inline-block;
          transition: transform 220ms ease;
        }
        .work-cta:hover .work-arrow,
        .work-cta-light:hover .work-arrow {
          transform: translateX(4px);
        }
        /* ── Field navigation — choose a field ──────────────────── */
        .work-field-nav {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 44px;
        }
        @media (max-width: 1024px) {
          .work-field-nav { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .work-field-nav { grid-template-columns: 1fr; }
        }
        .work-field-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px 22px 18px;
          border: 1px solid rgba(220, 218, 214, 0.13);
          text-decoration: none;
          min-height: 90px;
          transition: border-color 240ms ease, background 240ms ease;
        }
        .work-field-item:hover {
          border-color: rgba(232, 230, 226, 0.40);
          background: rgba(232, 230, 226, 0.04);
        }
        .work-field-index {
          display: block;
          font-family: var(--font-ui);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.16em;
          color: rgba(210, 208, 204, 0.26);
          margin-bottom: 9px;
        }
        .work-field-label {
          display: block;
          font-family: var(--font-sharp);
          font-size: clamp(11px, 1.05vw, 13px);
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: rgba(228, 226, 222, 0.88);
          line-height: 1.25;
        }
        .work-field-arrow {
          display: block;
          margin-top: 14px;
          font-size: 13px;
          color: rgba(210, 208, 204, 0.28);
          transition: transform 200ms ease, color 200ms ease;
        }
        .work-field-item:hover .work-field-arrow {
          transform: translateY(4px);
          color: rgba(222, 220, 216, 0.60);
        }
        /* Edition link rows — neutral white, editorial */
        .work-edition-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(220, 218, 214, 0.14);
          text-decoration: none;
          transition: border-color 220ms ease;
        }
        .work-edition-row:hover {
          background: transparent;
          border-bottom-color: rgba(230, 228, 224, 0.40);
        }
        .work-edition-label {
          font-family: var(--font-ui);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(228, 226, 222, 0.92);
          flex: 1;
          transition: color 200ms ease;
        }
        .work-edition-row:hover .work-edition-label {
          color: rgba(238, 236, 232, 1.0);
        }
        .work-edition-meta {
          font-family: var(--font-ui);
          font-size: 10px;
          letter-spacing: 0.07em;
          color: rgba(205, 202, 198, 0.52);
          flex-shrink: 0;
          transition: color 200ms ease;
        }
        .work-edition-row:hover .work-edition-meta {
          color: rgba(215, 212, 208, 0.76);
        }
        .work-edition-arrow {
          font-size: 13px;
          color: rgba(218, 215, 210, 0.68);
          flex-shrink: 0;
          display: inline-block;
          transition: transform 200ms ease, color 200ms ease;
        }
        .work-edition-row:hover .work-edition-arrow {
          transform: translateX(5px);
          color: rgba(238, 236, 232, 1.0);
        }
        /* Paintings preview — smaller captions on mobile 2-col grid */
        @media (max-width: 767px) {
          .work-painting-caption-title { font-size: 11px !important; font-style: italic; }
          .work-painting-caption-meta  { font-size: 9px !important; }
        }
      ` }} />
      <Nav mode="dark" />

      {/* ── DARK ZONE: PAGE HEADER + WAKE UP — video bg ─────────── */}
      <div style={{ position: "relative", overflow: "hidden", background: "#080707" }}>

        {/* Organic fog loop — low opacity, atmospheric only */}
        <video
          autoPlay loop muted playsInline
          style={{
            position:  "absolute",
            inset:     0,
            width:     "100%",
            height:    "100%",
            objectFit: "cover",
            opacity:   0.22,
            zIndex:    0,
          }}
        >
          <source src="/videos/video-output-B0B21B74-F66F-49B2-9F2B-124AE7D8C523-1.mp4" type="video/mp4" />
        </video>

        {/* Minimal dark overlay — readability without blocking the atmosphere */}
        <div style={{
          position:   "absolute",
          inset:      0,
          background: "rgba(5, 5, 6, 0.28)",
          zIndex:     1,
        }} />

        {/* Content — above video and overlay */}
        <div style={{ position: "relative", zIndex: 2 }}>

          {/* ── PAGE HEADER ───────────────────────────────────────── */}
          <section className="pt-40 pb-8">
            <div className="container-site">
              <p style={EYEBROW}>Work</p>
              <h1
                style={{
                  fontFamily:    "var(--font-sharp)",
                  fontSize:      "clamp(28px, 3.5vw, 44px)",
                  fontWeight:    700,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  color:         CW.pri,
                  lineHeight:    1.0,
                }}
              >
                Selected Projects
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize:   "clamp(13px, 1.1vw, 15px)",
                  lineHeight: 1.72,
                  color:      CW.sec,
                  maxWidth:   "480px",
                  marginTop:  "18px",
                }}
              >
                Live experience, creative production, art direction, image-making and painting.
              </p>
            </div>

            {/* ── FIELD NAVIGATION — choose a field ──────────────── */}
            <div className="container-site">
              <nav className="work-field-nav" aria-label="Jump to section">
                {([
                  { index: "01", label: "Live / Production",      href: "#live" },
                  { index: "02", label: "Art Direction / Image",   href: "#art-direction" },
                  { index: "03", label: "Spatial / Digital / 3D", href: "/spatial-digital-3d" },
                  { index: "04", label: "Paintings / Works",       href: "#paintings" },
                ] as const).map(({ index, label, href }) => (
                  <a key={href} href={href} className="work-field-item">
                    <div>
                      <span className="work-field-index">{index}</span>
                      <span className="work-field-label">{label}</span>
                    </div>
                    <span className="work-field-arrow">↓</span>
                  </a>
                ))}
              </nav>
            </div>
          </section>

          <div className="divider container-site" />

          {/* ── LIVE / PRODUCTION — WAKE UP ─────────────────────── */}
          <section id="live" style={{ paddingTop: "56px", paddingBottom: "120px", scrollMarginTop: "100px" }}>
            <div className="container-site">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p style={EYEBROW}>Live / Production</p>
                  <h2 style={SECTION_HEAD}>WAKE UP</h2>
                </div>
                <Link href="/live-production" className="btn-editorial work-cta hidden md:block">
                  View all <span className="work-arrow">→</span>
                </Link>
              </div>

              {/* WAKE UP feature card */}
              {liveProjects.filter((p) => p.featured).map((project) => (
                <div key={project.slug}>
                  <div className="mb-6">
                    <ProjectCard project={project} size="feature" />
                  </div>

                  {/* Platform description + editions — all in left column */}
                  <div className="mt-6" style={{ maxWidth: "540px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize:   "15px",
                        lineHeight: 1.65,
                        color:      CW.sec,
                      }}
                    >
                      Independent live platform bringing together performance, music,
                      fashion, visual art and spatial atmosphere across multiple editions.
                    </p>
                    <p
                      style={{
                        fontFamily:    "var(--font-ui)",
                        fontSize:      "12px",
                        letterSpacing: "0.04em",
                        color:         CW.ter,
                        marginTop:     "8px",
                      }}
                    >
                      London · 2024–present
                    </p>

                    {/* Edition rows — under description, full width of this column */}
                    <div style={{ marginTop: "40px" }}>
                      <p
                        style={{
                          fontFamily:    "var(--font-ui)",
                          fontSize:      "9px",
                          letterSpacing: "0.20em",
                          textTransform: "uppercase",
                          color:         CW.faint,
                          marginBottom:  "6px",
                        }}
                      >
                        Editions
                      </p>
                      {/* Top border on container gives first row its top edge */}
                      <div style={{ borderTop: "1px solid rgba(220, 218, 214, 0.12)" }}>
                        {wakeUpEditionNotes.map((e) => (
                          <Link key={e.label} href={e.href} className="work-edition-row">
                            <span className="work-edition-label">{e.label}</span>
                            <span className="work-edition-meta">{e.meta}</span>
                            <span className="work-edition-arrow">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
        {/* end content layer */}
      </div>
      {/* ── end dark zone ────────────────────────────────────────── */}

      {/* ── ART DIRECTION / IMAGE — light fog video ──────────────── */}
      {/* work-light-section scopes --color-text-* to dark graphite so card
          titles/captions remain readable over the pale misty background.    */}
      <section
        id="art-direction"
        className="section-gap work-light-section"
        style={{ position: "relative", overflow: "hidden", background: "#EDF0F4", scrollMarginTop: "100px" }}
      >
        {/* Misty fog loop video */}
        <video
          autoPlay loop muted playsInline
          style={{
            position:  "absolute",
            inset:     0,
            width:     "100%",
            height:    "100%",
            objectFit: "cover",
            opacity:   0.75,
            zIndex:    0,
          }}
        >
          <source src="/videos/bg-selected-projects-light-fog-loop.mp4" type="video/mp4" />
        </video>

        {/* Soft white veil — keeps section pale and misty, gives cards a surface */}
        <div style={{
          position:   "absolute",
          inset:      0,
          background: "rgba(237, 241, 246, 0.32)",
          zIndex:     1,
        }} />

        {/* Content above video */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="container-site">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p style={EYEBROW_LIGHT}>Art Direction</p>
                <h2 style={SECTION_HEAD_LIGHT}>Art Direction / Image</h2>
              </div>
              <Link href="/art-direction" className="btn-editorial work-cta-light hidden md:block">
                View all <span className="work-arrow">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artDirectionProjects.filter((p) => !p.hidden).map((project) => (
                <ProjectCard key={project.slug} project={project} lightMode={true} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPATIAL / DIGITAL / 3D ───────────────────────────────── */}
      {/* TODO: swap spatialPlaceholders for real Project entries when assets exist */}
      <section
        id="spatial"
        className="section-gap work-light-section"
        style={{ position: "relative", overflow: "hidden", background: "#ECEEF2", scrollMarginTop: "100px" }}
      >
        {/* Spatial atmosphere image — barely-there architectural layer */}
        <div
          style={{
            position:           "absolute",
            inset:              0,
            backgroundImage:    "url('/images/hf_20260515_203910_7a798689-0349-448c-a91d-223845e84995.png')",
            backgroundSize:     "cover",
            backgroundPosition: "center",
            opacity:            0.09,
            zIndex:             0,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="container-site">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p style={EYEBROW_LIGHT}>Spatial / Digital</p>
                <h2 style={SECTION_HEAD_LIGHT}>Spatial / Digital / 3D</h2>
              </div>
              <Link href="/spatial-digital-3d" className="btn-editorial work-cta-light hidden md:block">
                View all <span className="work-arrow">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* ── ELIZIUM AI — real card with image + link ── */}
              <Link href={eliziumAI.href} className="block group cursor-pointer">
                <div
                  className="card-img-wrap relative overflow-hidden"
                  style={{ aspectRatio: "3/2", background: "#050507" }}
                >
                  <Image
                    src={eliziumAI.image}
                    alt={eliziumAI.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:brightness-[1.06]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="type-label text-[var(--color-text-secondary)] mb-1">
                    {eliziumAI.label}
                  </p>
                  <h3 className="type-heading text-[var(--color-text-primary)]">
                    {eliziumAI.title}
                  </h3>
                  <p className="type-caption text-[var(--color-text-secondary)] mt-1">
                    {eliziumAI.year} · London
                  </p>
                  <p
                    className="type-body text-[var(--color-text-secondary)] mt-2"
                    style={{ opacity: 0.7 }}
                  >
                    {eliziumAI.desc}
                  </p>
                </div>
              </Link>

              {/* ── Remaining placeholders ─────────────────── */}
              {spatialPlaceholders.map((p) => (
                <div key={p.id} className="group">
                  <div
                    className="card-img-wrap relative"
                    style={{
                      aspectRatio: "3/2",
                      background: "rgba(155, 162, 178, 0.18)",
                      border: "1px solid rgba(155, 162, 178, 0.16)",
                    }}
                  />
                  <div className="mt-4 space-y-1">
                    <p className="type-label text-[var(--color-text-secondary)] mb-1">
                      {p.label}
                    </p>
                    <h3 className="type-heading text-[var(--color-text-primary)]">
                      {p.title}
                    </h3>
                    <p className="type-caption text-[var(--color-text-secondary)] mt-1">
                      {p.year} · London
                    </p>
                    <p
                      className="type-body text-[var(--color-text-secondary)] mt-2"
                      style={{ opacity: 0.7 }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Background contrast between light Spatial and dark Paintings is the separator */}

      {/* ── PAINTINGS / WORKS — dark cinematic, fog video ────────── */}
      <section
        id="paintings"
        className="section-gap"
        style={{ position: "relative", overflow: "hidden", background: "#0A0908", scrollMarginTop: "100px" }}
      >
        {/* Low-opacity fog loop — stays behind paintings */}
        <video
          autoPlay loop muted playsInline
          style={{
            position:  "absolute",
            inset:     0,
            width:     "100%",
            height:    "100%",
            objectFit: "cover",
            opacity:   0.22,
            zIndex:    0,
          }}
        >
          <source src="/videos/bg-fog-loop.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay — paintings stay strong against the fog */}
        <div style={{
          position:   "absolute",
          inset:      0,
          background: "rgba(6, 5, 4, 0.52)",
          zIndex:     1,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="container-site">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p style={EYEBROW}>Paintings</p>
                <h2 style={SECTION_HEAD}>Paintings / Works</h2>
              </div>
              <Link href="/art-paintings" className="btn-editorial work-cta hidden md:block">
                View more <span className="work-arrow">→</span>
              </Link>
            </div>

            {/* 3-painting preview grid — 2-col on mobile, 3-col desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {paintingPreview.map((artwork) => (
                <Link key={artwork.id} href="/art-paintings" className="block group">
                  {/* Transparent PNGs sit on the dark section surface — no frame */}
                  <div
                    className="relative overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-2"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-contain transition-all duration-700 group-hover:brightness-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="mt-3 md:mt-4 space-y-0.5">
                    <p
                      className="work-painting-caption-title italic"
                      style={{ fontSize: "13px", color: "rgba(222, 218, 212, 0.88)" }}
                    >
                      {artwork.title}, {artwork.year}
                    </p>
                    <p className="work-painting-caption-meta" style={{ fontSize: "11px", color: "rgba(185, 182, 178, 0.52)" }}>
                      {artwork.medium}
                    </p>
                    <p className="work-painting-caption-meta" style={{ fontSize: "11px", color: "rgba(185, 182, 178, 0.52)" }}>
                      {artwork.dimensions}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/art-paintings" className="btn-editorial work-cta">
                View more <span className="work-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer sits on the same near-black as Paintings — feels like one zone */}
      <div style={{ background: "#0A0908" }}>
        <Footer mode="dark" />
      </div>
    </main>
  );
}
