"use client";
// ─────────────────────────────────────────────────────────────
// HOME PAGE — unified editorial system
// Cinematic artist portfolio · premium production archive
// "use client" required for expandable availability rows
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

// ── Static data ───────────────────────────────────────────────
const directionCards = [
  {
    num:   "01",
    title: "LIVE / PRODUCTION / EVENTS",
    desc:  "Performance, event direction and spatial atmosphere.",
    href:  "/live-production",
  },
  {
    num:   "02",
    title: "IMAGE / CAMPAIGNS / DIRECTION",
    desc:  "Art direction, fashion image-making and visual research.",
    href:  "/art-direction",
  },
  {
    num:   "03",
    title: "SPATIAL / DIGITAL / 3D",
    desc:  "Web, 3D studies, spatial thinking and immersive systems.",
    href:  "/spatial-digital-3d",
  },
  {
    num:   "04",
    title: "PAINTINGS / ARTWORKS",
    desc:  "Large-scale painting, abstract works and visual materiality.",
    href:  "/art-paintings",
  },
];

const selectedProjects = [
  {
    title:         "WAKE UP 01",
    categoryLabel: "Live / Production",
    year:          "2025",
    location:      "London",
    href:          "/projects/wake-up",
    image:         "/images/wake-up-01.webp",
    imagePosition: "center center",
  },
  {
    title:         "WAKE UP 02",
    categoryLabel: "Live / Production",
    year:          "2025",
    location:      "London",
    href:          "/projects/wake-up",
    image:         "/images/wake-up-02-gallery-02.webp",
    imagePosition: "center center",
  },
  {
    title:         "WAKE UP 03",
    categoryLabel: "Live / Production",
    year:          "2025",
    location:      "Artworks East · London",
    href:          "/projects/wake-up",
    image:         "/images/wake-up-03-gallery-01.webp",
    imagePosition: "center center",
  },
];

const availabilityItems = [
  {
    label: "Creative production",
    desc:  "End-to-end development of live events, performances and cultural projects from first concept through to delivery.",
  },
  {
    label: "Art direction",
    desc:  "Visual concept, aesthetic strategy and on-set direction across editorial, campaign and image-world projects.",
  },
  {
    label: "Live event development",
    desc:  "Spatial, performative and programmatic development of events, installations and experiential environments.",
  },
  {
    label: "Visual research",
    desc:  "Research-led image and concept development for cultural, fashion and artistic contexts.",
  },
  {
    label: "Spatial atmosphere",
    desc:  "Curation of sensory environments combining lighting, sound, material and body to create atmosphere.",
  },
  {
    label: "Artist collaborations",
    desc:  "Creative partnership with artists, musicians and performers across interdisciplinary projects.",
  },
  {
    label: "Project support",
    desc:  "Flexible production, coordination and creative support for ongoing or time-sensitive projects.",
  },
];

// ── Design tokens ─────────────────────────────────────────────
const C = {
  bg:       "#06080D",
  bgSoft:   "#080A10",
  bgMid:    "#0B101A",

  // Light section background — clean cool off-white
  light:    "#E8ECEA",
  lightAlt: "#DFE6E4",

  // Dark surface text
  wPri:   "#ECEFF2",
  wMid:   "rgba(236,239,242,0.72)",
  wMut:   "rgba(236,239,242,0.50)",
  wTer:   "rgba(236,239,242,0.30)",
  wFaint: "rgba(236,239,242,0.16)",

  // Light surface text — cool, not warm
  tPri:   "#111315",
  tMid:   "rgba(17,19,21,0.78)",
  tMut:   "rgba(17,19,21,0.62)",
  tFaint: "rgba(17,19,21,0.38)",

  // Hairlines
  hDark:   "rgba(236,239,242,0.09)",
  hDarkM:  "rgba(236,239,242,0.15)",
  hLight:  "rgba(17,19,21,0.09)",
  hLightM: "rgba(17,19,21,0.12)",

  // Atmospheric glows
  gBlue:  "rgba(75,105,170,0.30)",
  gSilv:  "rgba(200,210,230,0.16)",
};

// ── Layout constants ──────────────────────────────────────────
const OUTER = "max(40px, calc((100vw - 1360px) / 2))";
const INNER = "52px";
const VPAD  = "clamp(32px, 4vh, 56px)";

// ── Texture helpers ───────────────────────────────────────────
const TX_FOG: React.CSSProperties = {
  backgroundImage:     "url('/images/bg-hero-fog.webp')",
  backgroundSize:      "cover",
  backgroundPosition:  "center",
  backgroundBlendMode: "soft-light",
};
const TX_DARK: React.CSSProperties = {
  backgroundImage:     "url('/images/bg-dark-glow.webp')",
  backgroundSize:      "cover",
  backgroundPosition:  "center",
  backgroundBlendMode: "screen",
};
const TX_LIGHT: React.CSSProperties = {
  backgroundImage:     "url('/images/bg-light-texture.webp')",
  backgroundSize:      "cover",
  backgroundPosition:  "center",
  backgroundBlendMode: "multiply",
};

// ── Image frame — minimal border, no fill, no shadow ─────────
const FRAME: React.CSSProperties = {
  background: "transparent",
  border:     "1px solid rgba(17,19,21,0.12)",
  overflow:   "hidden",
};

// ── Label ─────────────────────────────────────────────────────
function Label({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        fontFamily:    "var(--font-ui)",
        fontSize:      "9px",
        letterSpacing: "0.26em",
        textTransform: "uppercase" as const,
        fontWeight:    500,
        color:         color ?? C.tMut,
      }}
    >
      {children}
    </span>
  );
}

// ── Section rule ──────────────────────────────────────────────
function Rule({
  label,
  num,
  dark,
}: {
  label: string;
  num: string;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        borderTop:  `1px solid ${dark ? C.hDarkM : C.hLightM}`,
        paddingTop: "14px",
        display:    "flex",
        alignItems: "center",
        gap:        "12px",
      }}
    >
      <Label color={dark ? C.wTer : C.tFaint}>{label}</Label>
      <div style={{ flex: 1, height: "1px", background: dark ? C.hDark : C.hLight }} />
      <Label color={dark ? C.wFaint : C.tFaint}>{num}</Label>
    </div>
  );
}

// ── Grid card (Selected Projects) ─────────────────────────────
function GridCard({
  title,
  categoryLabel,
  year,
  location,
  href,
  image,
  imagePosition = "center center",
}: {
  title: string;
  categoryLabel: string;
  year: string;
  location: string;
  href: string;
  image: string;
  imagePosition?: string;
}) {
  return (
    <Link
      href={href}
      className="group block"
      style={{
        background:     "rgba(8,14,22,0.90)",
        border:         "1px solid rgba(210,225,242,0.16)",
        borderRadius:   "2px",
        overflow:       "hidden",
        textDecoration: "none",
      }}
    >
      {/* Image at top — full width */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={image}
          alt={title}
          fill
          className="card-img object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(8,14,22,0.50) 0%, transparent 55%)",
          }}
        />
      </div>
      {/* Card footer — metadata + title */}
      <div
        style={{
          padding:      "14px 16px 18px",
          background:   "rgba(6,10,18,0.92)",
          borderTop:    "1px solid rgba(210,225,242,0.10)",
        }}
      >
        <div
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "baseline",
            gap:            "8px",
            marginBottom:   "7px",
          }}
        >
          <p
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "9px",
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              fontWeight:    500,
              color:         "rgba(195,212,230,0.70)",
            }}
          >
            {categoryLabel}
          </p>
          <p
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "9px",
              letterSpacing: "0.10em",
              color:         "rgba(180,200,220,0.52)",
              whiteSpace:    "nowrap",
            }}
          >
            {year}
          </p>
        </div>
        <h3
          style={{
            fontFamily:    "var(--font-sharp)",
            fontSize:      "clamp(13px, 1.2vw, 16px)",
            fontWeight:    600,
            letterSpacing: "-0.01em",
            lineHeight:    1.15,
            color:         "rgba(232,238,248,0.94)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily:    "var(--font-ui)",
            fontSize:      "9px",
            letterSpacing: "0.08em",
            color:         "rgba(170,192,214,0.52)",
            marginTop:     "5px",
          }}
        >
          {location}
        </p>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────
export default function Home() {
  const [openRows, setOpenRows] = useState<Record<number, boolean>>({});
  const toggleRow = (i: number) =>
    setOpenRows((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes breathe {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.58; }
        }
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-3px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* Direction path cards */
        .dir-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 190px;
          background: rgba(5,8,13,0.72);
          border: 1px solid rgba(210,225,240,0.14);
          border-radius: 2px;
          padding: 28px;
          text-decoration: none;
          transition: border-color 220ms ease, background 220ms ease;
        }
        .dir-card:hover {
          border-color: rgba(210,225,240,0.32);
          background: rgba(10,16,25,0.86);
        }
        /* Selected project card images */
        .card-img {
          filter: grayscale(8%) saturate(72%) brightness(0.82) contrast(1.05);
          transition: filter 600ms ease;
        }
        .group:hover .card-img {
          filter: grayscale(0%) saturate(100%) brightness(1) contrast(1);
        }
        /* Fields of Work images — subtle colour integration */
        .field-img {
          filter: saturate(82%) contrast(0.96) brightness(0.92);
          transition: filter 450ms ease, transform 600ms ease;
        }
        .field-img-wrap:hover .field-img {
          filter: saturate(100%) contrast(1) brightness(1);
          transform: scale(1.02);
        }
        /* Hero video — full background */
        .hero-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 0;
        }
        /* Hero media wrapper — desktop: absolute full-bleed fill */
        .hero-media-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        /* Hero content wrapper — desktop: centered in section flex flow */
        .hero-content-wrap {
          position: relative;
          z-index: 10;
          padding-top: 72px;
        }
        /* Hero overlay — left-heavy gradient for text legibility on desktop */
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(90deg, rgba(3,5,8,0.92) 0%, rgba(3,5,8,0.72) 32%, rgba(3,5,8,0.38) 62%, rgba(3,5,8,0.58) 100%),
            linear-gradient(180deg, rgba(3,5,8,0.40) 0%, rgba(3,5,8,0.08) 45%, rgba(3,5,8,0.72) 100%);
        }
        @media (max-width: 768px) {
          /* Mobile hero: stacked — video block at top, content block below */
          .hero-section-mobile {
            height: auto !important;
            min-height: unset !important;
            justify-content: flex-start !important;
            padding-top: 72px; /* clear fixed nav */
          }
          /* Decorative glows not needed in stacked layout */
          .hero-glow-blue, .hero-glow-silv { display: none; }
          /* Media block — 44vh keeps it compact, text appears directly below */
          .hero-media-wrap {
            position: relative !important;
            inset: auto !important;
            width: 100%;
            height: 44vh;
            min-height: 220px;
            flex-shrink: 0;
          }
          /* Mobile hero portrait framing — shifts media so face is centred. */
          .hero-bg-video {
            object-fit: cover !important;
            object-position: 90% center !important;
          }
          /* Softer overlay on mobile — face should read clearly */
          .hero-overlay {
            background:
              linear-gradient(180deg, rgba(3,5,8,0.14) 0%, rgba(3,5,8,0.52) 100%) !important;
          }
          /* Content block: dark surface below the video */
          .hero-content-wrap {
            position: relative !important;
            padding: 36px 24px 60px !important;
            background: #080A10;
            width: 100%;
          }
        }
        /* All work link */
        .all-work-link {
          color: rgba(220,232,245,0.80);
          transition: color 200ms ease;
          text-decoration: none;
        }
        .all-work-link:hover {
          color: rgba(255,255,255,1);
        }
        /* Fog loop background video — dark atmospheric sections */
        .fog-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          opacity: 0.55;
          z-index: 0;
          pointer-events: none;
        }
        /* Fields of Work — mobile: preserve 2-col editorial layout */
        @media (max-width: 1023px) {
          /* Keep the side-by-side image/text rhythm — not a stacked single col */
          .field-band-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .field-band-img {
            border-left: none !important;
            border-right: none !important;
            min-height: 200px !important;
            max-height: 260px !important;
            background: #DFE6E4 !important; /* light fallback, won't show with object-cover */
          }
          /* Strong fill — image covers the frame, no blank letterboxing */
          .field-band-img img {
            object-fit: cover !important;
            object-position: center center !important;
          }
          .field-band-img .field-edge-fade {
            display: none !important;
          }
          /* Compact text column */
          .field-band-text {
            padding: 20px 14px !important;
          }
          /* Description copy hidden on mobile — too dense in narrow column */
          .field-band-desc {
            display: none !important;
          }
          /* CTA pill — compact, full-width in narrow text column */
          .field-cta {
            min-width: unset !important;
            width: 100% !important;
            padding: 9px 8px !important;
            font-size: 9px !important;
            justify-content: center !important;
            gap: 4px !important;
            margin-top: 10px !important;
          }
          /* Practice rule + subtitle — removed on mobile for cleaner index feel */
          .field-practice-rule { display: none !important; }
          .field-section-subtitle { display: none !important; }
          /* Section header padding — tighter without the rule */
          .fields-section-head { padding-top: 44px !important; padding-bottom: 8px !important; }
          /* Paintings band — hairline close at bottom for visual balance */
          .field-band-03 { border-bottom: 1px solid rgba(17,19,21,0.09) !important; }
        }
        /* Fields of Work — translucent tinted glass CTA bars */
        .field-cta {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-width: 158px;
          padding: 11px 20px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(200,214,228,0.20);
          font-family: var(--font-ui);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(236,240,246,0.95);
          text-decoration: none;
          transition: background 320ms ease, border-color 320ms ease;
        }
        /* Horizontal light sweep on hover */
        .field-cta::after {
          content: '';
          position: absolute;
          top: 0;
          left: -110%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.07) 50%,
            transparent 100%
          );
          transition: left 500ms ease;
          pointer-events: none;
        }
        .field-cta:hover::after { left: 110%; }
        /* Category default — tinted mist (visible at rest) */
        .field-cta-live {
          background: linear-gradient(135deg, rgba(10,22,72,0.50) 0%, rgba(6,16,56,0.64) 100%);
          border-color: rgba(80,110,220,0.22);
        }
        .field-cta-art {
          background: linear-gradient(135deg, rgba(16,48,20,0.50) 0%, rgba(10,38,14,0.64) 100%);
          border-color: rgba(72,158,82,0.22);
        }
        .field-cta-paint {
          background: linear-gradient(135deg, rgba(46,14,70,0.50) 0%, rgba(34,8,54,0.64) 100%);
          border-color: rgba(138,76,198,0.22);
        }
        /* Hover — deepen tint, lift border */
        .field-cta-live:hover {
          background: linear-gradient(135deg, rgba(10,26,88,0.68) 0%, rgba(6,20,72,0.80) 100%);
          border-color: rgba(80,110,220,0.36);
        }
        .field-cta-art:hover {
          background: linear-gradient(135deg, rgba(16,56,22,0.68) 0%, rgba(10,46,16,0.80) 100%);
          border-color: rgba(72,158,82,0.36);
        }
        .field-cta-paint:hover {
          background: linear-gradient(135deg, rgba(54,16,80,0.68) 0%, rgba(42,10,64,0.80) 100%);
          border-color: rgba(138,76,198,0.36);
        }
        .field-cta-arrow {
          display: inline-block;
          transition: transform 240ms ease;
        }
        .field-cta:hover .field-cta-arrow {
          transform: translateX(6px);
        }
        /* Selected Projects — full-width CTA bar */
        .proj-cta-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          height: 60px;
          margin-top: 32px;
          background: rgba(195,208,222,0.14);
          border: 1px solid rgba(17,19,21,0.11);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          text-decoration: none;
          transition: background 280ms ease, border-color 280ms ease;
        }
        .proj-cta-bar:hover {
          background: rgba(175,192,210,0.24);
          border-color: rgba(17,19,21,0.20);
        }
        .proj-cta-bar-arrow {
          display: inline-block;
          transition: transform 240ms ease;
        }
        .proj-cta-bar:hover .proj-cta-bar-arrow {
          transform: translateX(5px);
        }
      ` }} />

      <Nav mode="dark" />

      {/* ══════════════════════════════════════════════════════
          01 · HERO — left-aligned, cinematic
      ══════════════════════════════════════════════════════ */}
      <section
        className="hero-section-mobile"
        style={{
          height:         "100svh",
          minHeight:      "600px",
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "center",
          position:       "relative",
          overflow:       "hidden",
          background:     C.bgSoft,
          ...TX_FOG,
        }}
      >
        {/* Blue glow — top-right (desktop atmosphere, hidden on mobile) */}
        <div
          aria-hidden="true"
          className="hero-glow-blue absolute pointer-events-none"
          style={{
            top:        "-15%",
            right:      "-10%",
            width:      "72%",
            height:     "72%",
            background: `radial-gradient(ellipse at center, ${C.gBlue} 0%, transparent 65%)`,
            filter:     "blur(52px)",
            animation:  "breathe 28s ease-in-out infinite",
          }}
        />
        {/* Silver glow — lower-left (desktop atmosphere, hidden on mobile) */}
        <div
          aria-hidden="true"
          className="hero-glow-silv absolute pointer-events-none"
          style={{
            bottom:     "14%",
            left:       "6%",
            width:      "44%",
            height:     "40%",
            background: `radial-gradient(ellipse at center, ${C.gSilv} 0%, transparent 68%)`,
            filter:     "blur(56px)",
            animation:  "breathe 38s ease-in-out infinite reverse",
          }}
        />
        {/* Film grain */}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.032, zIndex: 2 }}
        >
          <filter id="g">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#g)" />
        </svg>

        {/* ── Media wrap — desktop: absolute full-bleed fill
                         mobile: block at top of stacked layout ── */}
        <div className="hero-media-wrap">
          <video
            className="hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-ai-twin.mp4" type="video/mp4" />
          </video>
          {/* Overlay — scoped inside media wrap so on mobile it only covers the video block */}
          <div aria-hidden="true" className="hero-overlay pointer-events-none" />
        </div>

        {/* ── Content wrap — desktop: centered flex child over video
                           mobile: dark block below the video ── */}
        <div className="hero-content-wrap container-site">
          <h1
            style={{
              fontFamily:    "var(--font-sharp)",
              fontSize:      "clamp(44px, 7.5vw, 102px)",
              fontWeight:    800,
              letterSpacing: "-0.03em",
              lineHeight:    0.88,
              color:         C.wPri,
            }}
          >
            Elizaveta
            <br />
            Zhuravleva
          </h1>

          <p
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "9px",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              fontWeight:    500,
              color:         C.wMut,
              marginTop:     "28px",
            }}
          >
            Creative Producer&nbsp;&nbsp;·&nbsp;&nbsp;Art Director&nbsp;&nbsp;·&nbsp;&nbsp;Visual Artist
          </p>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize:   "clamp(13px, 1.1vw, 15px)",
              lineHeight: 1.76,
              color:      C.wTer,
              maxWidth:   "400px",
              marginTop:  "16px",
            }}
          >
            A London-based practice working across live experience,
            art direction, performance, visual research, fashion
            image-making and contemporary painting.
          </p>

          <div className="flex flex-wrap gap-4" style={{ marginTop: "38px" }}>
            <Link href="/work" className="btn-hero-primary">View Work</Link>
            <Link href="/contact" className="btn-hero-ghost">Contact</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SELECT A PATH — centered, dark, 4 editorial cards
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background:    C.bgMid,
          paddingTop:    "110px",
          paddingBottom: "110px",
          ...TX_DARK,
        }}
      >
        <div className="container-site">
          {/* Section title — centered */}
          <h2
            style={{
              fontFamily:    "var(--font-sharp)",
              fontSize:      "clamp(28px, 4vw, 56px)",
              fontWeight:    700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:         "rgba(236,242,246,0.92)",
              textAlign:     "center",
              marginBottom:  "16px",
            }}
          >
            Select a Path
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize:   "14px",
              lineHeight: 1.7,
              color:      "rgba(210,222,232,0.58)",
              textAlign:  "center",
              maxWidth:   "340px",
              margin:     "0 auto 48px",
            }}
          >
            Choose the field most relevant to the collaboration,
            commission or role.
          </p>

          {/* Cards — 4 col desktop, 2×2 tablet, stacked mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {directionCards.map((card) => (
              <Link key={card.num} href={card.href} className="dir-card">
                <div>
                  <p
                    style={{
                      fontFamily:    "var(--font-ui)",
                      fontSize:      "9px",
                      letterSpacing: "0.22em",
                      color:         C.wFaint,
                      marginBottom:  "14px",
                    }}
                  >
                    {card.num}
                  </p>
                  <p
                    style={{
                      fontFamily:    "var(--font-sharp)",
                      fontSize:      "clamp(12px, 1.1vw, 14px)",
                      fontWeight:    600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      lineHeight:    1.25,
                      color:         C.wMid,
                      marginBottom:  "12px",
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize:   "12px",
                      lineHeight: 1.65,
                      color:      C.wTer,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily:    "var(--font-ui)",
                    fontSize:      "9px",
                    letterSpacing: "0.18em",
                    color:         C.wFaint,
                    marginTop:     "20px",
                  }}
                >
                  View →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 · PRACTICE — Fields of Work
          Cool off-white. Three airy editorial rows.
          Photos: cover. Diptych: contain, fully visible.
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: C.light,
          borderTop:  `1px solid ${C.hLightM}`,
          ...TX_LIGHT,
        }}
      >
        {/* Section header */}
        <div className="fields-section-head container-site" style={{ paddingTop: "96px", paddingBottom: "12px" }}>
          {/* Practice rule — hidden on mobile, shown on desktop */}
          <div className="field-practice-rule">
            <Rule label="Practice" num="02" />
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginTop: "16px" }}>
            <h2
              style={{
                fontFamily:    "var(--font-sharp)",
                fontSize:      "clamp(18px, 2vw, 26px)",
                fontWeight:    700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color:         C.tPri,
              }}
            >
              Fields of Work
            </h2>
            {/* Subtitle hidden on mobile */}
            <p
              className="field-section-subtitle"
              style={{
                fontFamily:    "var(--font-ui)",
                fontSize:      "11px",
                lineHeight:    1.6,
                color:         C.tFaint,
                maxWidth:      "240px",
                textAlign:     "right",
                paddingBottom: "2px",
              }}
            >
              Live · Image · Painting
            </p>
          </div>
        </div>

        {/* ── Band 01 — Live / Production ── */}
        {/* Photo → object-cover fills the column edge-to-edge cleanly */}
        <div style={{ borderTop: `1px solid ${C.hLightM}`, marginTop: "40px" }}>
          <div className="field-band-grid grid grid-cols-1 lg:grid-cols-2">
            {/* Text */}
            <div
              className="field-band-text flex flex-col justify-center order-2 lg:order-1"
              style={{ padding: `clamp(48px,7vh,80px) ${INNER} clamp(48px,7vh,80px) ${OUTER}` }}
            >
              <Label color={C.tFaint}>01 — Live / Production</Label>
              <h3
                style={{
                  fontFamily:    "var(--font-sharp)",
                  fontSize:      "clamp(16px, 1.6vw, 22px)",
                  fontWeight:    600,
                  letterSpacing: "-0.02em",
                  lineHeight:    1.1,
                  color:         C.tPri,
                  marginTop:     "12px",
                  marginBottom:  "12px",
                }}
              >
                Live / Production / Experience
              </h3>
              <p className="field-band-desc" style={{ fontFamily: "var(--font-ui)", fontSize: "13px", lineHeight: 1.72, color: C.tMut, maxWidth: "280px", marginBottom: "22px" }}>
                Events, shows, performance direction and spatial atmosphere
                shaped through body, sound, image and space.
              </p>
              <Link href="/live-production" className="field-cta field-cta-live">
                View projects <span className="field-cta-arrow">→</span>
              </Link>
            </div>
            {/* Image — clickable, cover, fills the full column height */}
            <Link
              href="/live-production"
              className="field-img-wrap field-band-img order-1 lg:order-2"
              style={{
                position:   "relative",
                minHeight:  "clamp(400px, 54vh, 640px)",
                borderLeft: `1px solid ${C.hLightM}`,
                overflow:   "hidden",
                background: C.lightAlt,
                display:    "block",
              }}
            >
              <Image
                src="/images/wake-up-01-gallery-03.webp"
                alt="Live performance and production"
                fill
                className="field-img"
                style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              {/* Right-edge fade — soft dissolve from outer edge */}
              <div
                aria-hidden="true"
                className="field-edge-fade absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, rgba(14,18,28,0.26) 0%, rgba(14,18,28,0.06) 32%, transparent 58%)",
                  zIndex: 1,
                }}
              />
            </Link>
          </div>
        </div>

        {/* ── Band 02 — Art Direction ── */}
        {/* Photo → object-cover, image-left layout */}
        <div style={{ borderTop: `1px solid ${C.hLightM}` }}>
          <div className="field-band-grid grid grid-cols-1 lg:grid-cols-2">
            {/* Image — mobile: right col (order-2); desktop: left col (order-none = DOM first) */}
            <Link
              href="/art-direction"
              className="field-img-wrap field-band-img order-2 lg:order-none"
              style={{
                position:    "relative",
                minHeight:   "clamp(380px, 50vh, 580px)",
                borderRight: `1px solid ${C.hLightM}`,
                overflow:    "hidden",
                background:  C.lightAlt,
                display:     "block",
              }}
            >
              <Image
                src="/images/experimental-music-campaign-01.webp"
                alt="Art direction and image work"
                fill
                className="field-img"
                style={{ objectFit: "cover", objectPosition: "center center" }}
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              {/* Left-edge fade — soft dissolve from outer edge */}
              <div
                aria-hidden="true"
                className="field-edge-fade absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, rgba(14,18,28,0.26) 0%, rgba(14,18,28,0.06) 32%, transparent 58%)",
                  zIndex: 1,
                }}
              />
            </Link>
            {/* Text — mobile: left col (order-1); desktop: right col (order-none = DOM second) */}
            <div
              className="field-band-text flex flex-col justify-center order-1 lg:order-none"
              style={{ padding: `clamp(48px,7vh,80px) ${OUTER} clamp(48px,7vh,80px) ${INNER}` }}
            >
              <Label color={C.tFaint}>02 — Art Direction</Label>
              <h3
                style={{
                  fontFamily:    "var(--font-sharp)",
                  fontSize:      "clamp(16px, 1.6vw, 22px)",
                  fontWeight:    600,
                  letterSpacing: "-0.02em",
                  lineHeight:    1.1,
                  color:         C.tPri,
                  marginTop:     "12px",
                  marginBottom:  "12px",
                }}
              >
                Art Direction / Image
              </h3>
              <p className="field-band-desc" style={{ fontFamily: "var(--font-ui)", fontSize: "13px", lineHeight: 1.72, color: C.tMut, maxWidth: "280px", marginBottom: "22px" }}>
                Editorial, campaigns, visual identity, styling and
                image-world development across fashion, culture and
                visual research.
              </p>
              <Link href="/art-direction" className="field-cta field-cta-art">
                View work <span className="field-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Band 03 — Paintings / Works ── */}
        {/* Diptych → object-contain inside padded pale container — full artwork visible */}
        <div className="field-band-03" style={{ borderTop: `1px solid ${C.hLightM}` }}>
          <div className="field-band-grid grid grid-cols-1 lg:grid-cols-2">
            {/* Text */}
            <div
              className="field-band-text flex flex-col justify-center order-2 lg:order-1"
              style={{ padding: `clamp(48px,7vh,80px) ${INNER} clamp(48px,7vh,80px) ${OUTER}` }}
            >
              <Label color={C.tFaint}>03 — Paintings</Label>
              <h3
                style={{
                  fontFamily:    "var(--font-sharp)",
                  fontSize:      "clamp(16px, 1.6vw, 22px)",
                  fontWeight:    600,
                  letterSpacing: "-0.02em",
                  lineHeight:    1.1,
                  color:         C.tPri,
                  marginTop:     "12px",
                  marginBottom:  "12px",
                }}
              >
                Paintings / Works
              </h3>
              <p className="field-band-desc" style={{ fontFamily: "var(--font-ui)", fontSize: "13px", lineHeight: 1.72, color: C.tMut, maxWidth: "280px", marginBottom: "22px" }}>
                Selected paintings and works on canvas exploring gesture,
                scale, pressure, colour and emotional atmosphere.
              </p>
              <Link href="/art-paintings" className="field-cta field-cta-paint">
                View works <span className="field-cta-arrow">→</span>
              </Link>
            </div>
            {/* Paintings — clickable, full-bleed cover */}
            <Link
              href="/art-paintings"
              className="field-img-wrap field-band-img order-1 lg:order-2"
              style={{
                position:   "relative",
                minHeight:  "clamp(400px, 54vh, 640px)",
                background: C.lightAlt,
                borderLeft: `1px solid ${C.hLightM}`,
                overflow:   "hidden",
                display:    "block",
              }}
            >
              <Image
                src="/images/pathway-paintings-diptych.webp"
                alt="Paintings and works — diptych"
                fill
                className="field-img"
                style={{ objectFit: "cover", objectPosition: "center center" }}
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              {/* Right-edge fade — soft dissolve from outer edge */}
              <div
                aria-hidden="true"
                className="field-edge-fade absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, rgba(14,18,28,0.26) 0%, rgba(14,18,28,0.06) 32%, transparent 58%)",
                  zIndex: 1,
                }}
              />
            </Link>
          </div>
        </div>

        {/* Bottom breathing room before Selected Projects */}
        <div style={{ height: "104px" }} />
      </section>

      {/* ══════════════════════════════════════════════════════
          03 · SELECTED WORK
          Light editorial section. Dark graphite cards on top.
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background:    C.light,
          paddingTop:    "104px",
          paddingBottom: "120px",
          borderTop:     `1px solid ${C.hLightM}`,
          position:      "relative",
          overflow:      "hidden",
          ...TX_LIGHT,
        }}
      >
        {/* Light fog video — near-full opacity, visible pale fog */}
        <video
          className="fog-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg-light-texture.webp"
          style={{ opacity: 0.92 }}
        >
          <source src="/videos/bg-selected-projects-light-fog-loop.mp4" type="video/mp4" />
        </video>

        {/* Pale translucent overlay — keeps section airy and editorial */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(232,236,234,0.55)", zIndex: 1 }}
        />

        <div className="container-site relative" style={{ zIndex: 2 }}>
          {/* Header */}
          <div style={{ marginBottom: "48px" }}>
            <Rule label="Selected Work" num="03" />
            <div
              style={{
                marginTop:      "16px",
                display:        "flex",
                alignItems:     "flex-end",
                justifyContent: "space-between",
                gap:            "16px",
              }}
            >
              <h2
                style={{
                  fontFamily:    "var(--font-sharp)",
                  fontSize:      "clamp(18px, 2vw, 26px)",
                  fontWeight:    700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color:         C.tPri,
                  lineHeight:    1.0,
                }}
              >
                Selected Projects
              </h2>
            </div>
          </div>

          {/* 3-card single row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {selectedProjects.map((p) => (
              <GridCard key={p.title} {...p} />
            ))}
          </div>

          {/* Full-width CTA bar — VIEW ALL WORK */}
          <Link href="/work" className="proj-cta-bar">
            <span
              style={{
                fontFamily:    "var(--font-ui)",
                fontSize:      "10px",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight:    600,
                color:         C.tMid,
              }}
            >
              VIEW ALL WORK
            </span>
            <span
              className="proj-cta-bar-arrow"
              style={{ color: C.tMut, fontSize: "9px" }}
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 · AVAILABILITY — expandable rows
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background:    C.light,
          paddingTop:    "128px",
          paddingBottom: "128px",
          borderTop:     `1px solid ${C.hLightM}`,
          ...TX_LIGHT,
        }}
      >
        <div className="container-site">
          <div style={{ marginBottom: "48px" }}>
            <Rule label="Availability" num="04" />
            <h2
              style={{
                fontFamily:    "var(--font-sharp)",
                fontSize:      "clamp(18px, 2vw, 26px)",
                fontWeight:    700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color:         C.tPri,
                marginTop:     "16px",
              }}
            >
              Availability
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 items-start">
            {/* Left — intro */}
            <div>
              <h3
                style={{
                  fontFamily:    "var(--font-sharp)",
                  fontSize:      "clamp(16px, 1.6vw, 22px)",
                  fontWeight:    600,
                  letterSpacing: "-0.01em",
                  color:         C.tPri,
                  marginBottom:  "14px",
                  lineHeight:    1.2,
                }}
              >
                Available for selected work.
              </h3>
              <p
                style={{
                  fontFamily:   "var(--font-ui)",
                  fontSize:     "13px",
                  lineHeight:   1.74,
                  color:        C.tMut,
                  maxWidth:     "260px",
                  marginBottom: "24px",
                }}
              >
                Selected freelance, contract and collaborative projects
                across creative production, art direction and live experience.
              </p>
              <Link href="/contact" className="btn-light-cta">
                Get in touch →
              </Link>
            </div>

            {/* Right — expandable index */}
            <div>
              {availabilityItems.map((item, i) => {
                const isOpen = !!openRows[i];
                return (
                  <div
                    key={item.label}
                    style={{ borderBottom: `1px solid ${C.hLightM}` }}
                  >
                    <button
                      onClick={() => toggleRow(i)}
                      style={{
                        width:         "100%",
                        display:       "flex",
                        alignItems:    "center",
                        gap:           "14px",
                        paddingTop:    "14px",
                        paddingBottom: "14px",
                        background:    "none",
                        border:        "none",
                        cursor:        "pointer",
                        textAlign:     "left",
                      }}
                    >
                      <span
                        style={{
                          fontFamily:    "var(--font-ui)",
                          fontSize:      "9px",
                          letterSpacing: "0.14em",
                          color:         C.tFaint,
                          fontWeight:    500,
                          flexShrink:    0,
                          width:         "20px",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontFamily:    "var(--font-sharp)",
                          fontSize:      "15px",
                          fontWeight:    500,
                          letterSpacing: "-0.005em",
                          color:         C.tMid,
                          flex:          1,
                          lineHeight:    1.4,
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontSize:   "15px",
                          fontWeight: 300,
                          color:      C.tFaint,
                          flexShrink: 0,
                          lineHeight: 1,
                          transition: "color 200ms ease",
                          userSelect: "none",
                        }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <p
                        style={{
                          fontFamily:    "var(--font-ui)",
                          fontSize:      "13px",
                          lineHeight:    1.72,
                          color:         C.tMut,
                          paddingLeft:   "34px",
                          paddingBottom: "16px",
                          maxWidth:      "440px",
                          animation:     "expandIn 0.18s ease-out forwards",
                        }}
                      >
                        {item.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 · CONTACT — cinematic closing CTA
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background:    C.bgSoft,
          paddingTop:    "120px",
          paddingBottom: "120px",
          position:      "relative",
          overflow:      "hidden",
          borderTop:     `1px solid ${C.hDark}`,
        }}
      >
        {/* Fog loop video — higher opacity so the 4K texture reads clearly */}
        <video
          className="fog-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg-dark-glow.webp"
          style={{ opacity: 0.8 }}
        >
          <source src="/videos/bg-fog-loop.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay — lightened so fog atmosphere shows through */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(5,8,14,0.28)", zIndex: 1 }}
        />

        {/* Atmospheric blue glow */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top:       "-20%",
            left:      "50%",
            transform: "translateX(-50%)",
            width:     "80%",
            height:    "160%",
            background:"radial-gradient(ellipse at center, rgba(75,105,170,0.20) 0%, transparent 60%)",
            filter:    "blur(60px)",
            animation: "breathe 36s ease-in-out infinite",
            zIndex:    2,
          }}
        />

        <div className="container-site relative z-10" style={{ textAlign: "center" }}>
          <Label color={C.wTer}>05 · Contact</Label>

          <p
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "9px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color:         C.wFaint,
              marginTop:     "18px",
            }}
          >
            Production · Direction · Collaboration
          </p>

          <h2
            style={{
              fontFamily:    "var(--font-sharp)",
              fontSize:      "clamp(32px, 4.2vw, 62px)",
              fontWeight:    600,
              letterSpacing: "-0.03em",
              color:         C.wPri,
              lineHeight:    1.0,
              marginTop:     "22px",
            }}
          >
            Available for new work.
          </h2>

          <p
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "clamp(12px, 1vw, 14px)",
              lineHeight:    1.7,
              color:         C.wTer,
              maxWidth:      "380px",
              margin:        "20px auto 0",
            }}
          >
            London-based. Open to commissions, collaborations and
            project partnerships across production, image and experience.
          </p>

          <p
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color:         C.wMut,
              marginTop:     "24px",
            }}
          >
            elizpresent@gmail.com
          </p>

          <div style={{ marginTop: "36px" }}>
            <Link href="/contact" className="btn-hero-ghost">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
