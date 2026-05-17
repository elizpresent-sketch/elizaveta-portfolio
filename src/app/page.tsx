// ─────────────────────────────────────────────────────────────
// HOME PAGE — sharp cultural portfolio
// Syne for identity/headings · DM Sans for body/labels
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { allProjects } from "@/data/projects";

const wakeUp       = allProjects.find((p) => p.slug === "wake-up")!;
const burningHouse = allProjects.find((p) => p.slug === "burning-house")!;
const brdatn       = allProjects.find((p) => p.slug === "brdatn")!;

const availableFor = [
  "Creative production",
  "Art direction",
  "Live event development",
  "Visual research",
  "Spatial atmosphere",
  "Artist collaborations",
  "Project support",
];

// ── Design tokens ─────────────────────────────────────────────
const C = {
  // Surfaces
  hero:        "#08090E",    // deep graphite-blue
  dark:        "#0C0D15",    // selected projects
  cta:         "#08090E",    // contact (bookend with hero)
  body:        "#EEEEF5",    // cool off-white body
  bodyAlt:     "#E6E7F0",    // slightly deeper alternate panels

  // Text — dark surfaces
  dPri:  "rgba(232,234,252,0.96)",
  dSec:  "rgba(185,188,228,0.58)",
  dTer:  "rgba(148,151,210,0.30)",
  dMut:  "rgba(118,122,196,0.16)",

  // Text — light surfaces
  lPri:  "#0E0F18",
  lMid:  "#343648",
  lSec:  "#595B76",
  lTer:  "#8A8C9E",

  // Rules
  lR:    "rgba(14,15,24,0.07)",
  lRM:   "rgba(14,15,24,0.12)",
  dR:    "rgba(185,188,228,0.07)",
  dRM:   "rgba(185,188,228,0.10)",

  // Practice accent lines — solid, definite
  a1:    "#3D52B2",    // indigo — Live
  a2:    "#6E48B8",    // violet — Image
  a3:    "#2878A4",    // teal — Paintings
};

// ── Small inline label ────────────────────────────────────────
function Label({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: "9px",
        letterSpacing: "0.26em",
        textTransform: "uppercase" as const,
        fontWeight: 500,
        color: color ?? C.lSec,
      }}
    >
      {children}
    </span>
  );
}

// ── Section rule: LABEL ────────── NUM ────────────────────────
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
        borderTop: `1px solid ${dark ? C.dRM : C.lRM}`,
        paddingTop: "18px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <Label color={dark ? C.dTer : C.lSec}>{label}</Label>
      <div style={{ flex: 1, height: "1px", background: dark ? C.dR : C.lR }} />
      <Label color={dark ? C.dTer : C.lTer}>{num}</Label>
    </div>
  );
}

// ── Homepage project card ─────────────────────────────────────
function ProjectCard({
  project,
  href,
  imagePosition = "center center",
}: {
  project: Project;
  href: string;
  imagePosition?: string;
}) {
  return (
    <Link href={href} className="group block">
      {/* Image — 3:2 landscape, minimal overlay */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "3/2" }}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        {/* Barely-there base overlay — preserves image clarity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(8,9,16,0.22) 0%, transparent 45%)",
          }}
        />
      </div>

      {/* Text below — clean, readable */}
      <div style={{ paddingTop: "16px", paddingBottom: "4px" }}>
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "9px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: C.dTer,
            marginBottom: "8px",
          }}
        >
          {project.categoryLabel}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-sharp)",
            fontSize: "clamp(17px, 1.6vw, 22px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.12,
            color: C.dPri,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: C.dTer,
            marginTop: "6px",
          }}
        >
          {project.year}&nbsp;·&nbsp;{project.location}
        </p>
        <div
          className="flex items-center gap-2.5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div style={{ width: "14px", height: "1px", background: "rgba(185,188,228,0.45)" }} />
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(185,188,228,0.45)",
            }}
          >
            View Project
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>

      <style>{`
        @keyframes subtle-glow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.78; }
        }
      `}</style>

      <Nav mode="dark" />

      {/* ══════════════════════════════════════════════════════
          01 · HERO — 100vh flex column, bottom-anchored strip
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          height: "100svh",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          background: C.hero,
        }}
      >
        {/* Static atmospheric depth — no animation blobs */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 85% 50% at 80% 5%,  rgba(36,50,148,0.26) 0%, transparent 55%)",
              "radial-gradient(ellipse 60% 45% at 5%  92%, rgba(52,34,108,0.18) 0%, transparent 55%)",
              "radial-gradient(ellipse 50% 55% at 45% 45%, rgba(18,24,72,0.12)  0%, transparent 60%)",
            ].join(", "),
            animation: "subtle-glow 28s ease-in-out infinite",
          }}
        />

        {/* Film grain */}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.042 }}
        >
          <filter id="g">
            <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#g)" />
        </svg>

        {/* ── Main content — flex-1, vertically centred ── */}
        <div
          className="relative z-10 flex-1 flex flex-col justify-center container-site"
          style={{ paddingTop: "72px" }}
        >
          {/* Initials mark */}
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "9px",
              letterSpacing: "0.46em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: C.dMut,
              marginBottom: "40px",
            }}
          >
            E · Z
          </p>

          {/* Name — Syne 700, tight, architectural */}
          <h1
            style={{
              fontFamily: "var(--font-sharp)",
              fontSize: "clamp(48px, 8.5vw, 128px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 0.93,
              color: C.dPri,
            }}
          >
            Elizaveta<br />Zhuravleva
          </h1>

          {/* Role strip */}
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "10px",
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: C.dSec,
              marginTop: "32px",
            }}
          >
            Creative Producer&nbsp;&nbsp;·&nbsp;&nbsp;Art Director&nbsp;&nbsp;·&nbsp;&nbsp;Visual Artist
          </p>

          {/* Statement */}
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "clamp(13px, 1.2vw, 16px)",
              lineHeight: 1.76,
              color: "rgba(178,181,225,0.50)",
              maxWidth: "380px",
              marginTop: "24px",
            }}
          >
            A London-based practice working across live experience,
            art direction, performance, visual research, fashion
            image-making and contemporary painting.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4" style={{ marginTop: "44px" }}>
            <Link href="/work" className="btn-hero-primary">View Work</Link>
            <Link href="/contact" className="btn-hero-ghost">Contact</Link>
          </div>
        </div>

        {/* ── Bottom anchor strip — fills dead space, adds context ── */}
        <div
          className="relative z-10 container-site"
          style={{ paddingBottom: "28px" }}
        >
          <div
            style={{
              borderTop: `1px solid ${C.dR}`,
              paddingTop: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "9px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: C.dMut,
              }}
            >
              London · 2022–Present
            </span>
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "9px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: C.dMut,
              }}
            >
              Available for selected projects
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DISCIPLINE BAR — dark index strip
          Direct cut from hero (no gradient bridge)
      ══════════════════════════════════════════════════════ */}
      <div
        style={{
          background: "#0D0E16",
          borderTop: `1px solid ${C.dR}`,
          borderBottom: `1px solid ${C.dR}`,
        }}
      >
        <div className="container-site" style={{ paddingTop: "12px", paddingBottom: "12px" }}>
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-1"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "9px",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span style={{ color: C.dSec }}>Practice</span>
            <span aria-hidden style={{ color: C.dMut }}>·</span>
            <span style={{ color: "rgba(172,175,222,0.36)" }}>Live / Image / Painting</span>
            <span aria-hidden style={{ color: C.dMut }}>·</span>
            <span style={{ color: "rgba(172,175,222,0.36)" }}>London</span>
            <span aria-hidden style={{ color: C.dMut }}>·</span>
            <span style={{ color: "rgba(172,175,222,0.36)" }}>2022–Present</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          02 · PRACTICE — three editorial bands
          Clean cut transition from dark bar to light body.
          items-stretch: image fills same height as text column.
          columnGap 0: image directly adjacent to text, no gap.
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: C.body,
          borderTop: `1px solid ${C.lRM}`,
        }}
      >
        {/* Section header */}
        <div className="container-site" style={{ paddingTop: "24px", paddingBottom: "0" }}>
          <Rule label="Practice" num="02" />
        </div>

        {/* ── Band 01 — Live ── */}
        <div style={{ borderTop: `1px solid ${C.lR}`, marginTop: "28px" }}>
          <div className="container-site">
            {/*
              items-stretch: both columns share the text-driven height.
              Image has no aspect-ratio — it fills the column height via fill+cover.
              minHeight on image ensures mobile is never collapsed.
            */}
            <div
              className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] items-stretch"
              style={{ columnGap: 0 }}
            >
              {/* Text column */}
              <div
                className="flex flex-col justify-center order-2 lg:order-1"
                style={{ padding: "44px 40px 44px 0" }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                  <div style={{ width: "22px", height: "1px", background: C.a1 }} />
                  <Label>01 — Live</Label>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-sharp)",
                    fontSize: "clamp(24px, 2.8vw, 40px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    color: C.lPri,
                    marginBottom: "16px",
                  }}
                >
                  Live / Production /<br />Experience
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "14px",
                    lineHeight: 1.72,
                    color: C.lSec,
                    maxWidth: "310px",
                    marginBottom: "24px",
                  }}
                >
                  Events, shows, performance direction and spatial atmosphere
                  shaped through body, sound, image, audience and space.
                </p>
                <Link href="/live-production" className="btn-light-cta">
                  View projects →
                </Link>
              </div>

              {/* Image column — fills text height via stretch + fill */}
              <div
                className="relative overflow-hidden order-1 lg:order-2"
                style={{ minHeight: "280px" }}
              >
                <Image
                  src="/images/pathway-live.png"
                  alt="Live performance and production"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: "center center" }}
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "inset -1px 0 0 0 rgba(14,15,24,0.06)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Band 02 — Art Direction ── */}
        <div style={{ borderTop: `1px solid ${C.lR}`, background: C.bodyAlt }}>
          <div className="container-site">
            <div
              className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] items-stretch"
              style={{ columnGap: 0 }}
            >
              {/* Image column — left side */}
              <div
                className="relative overflow-hidden"
                style={{ minHeight: "280px" }}
              >
                <Image
                  src="/images/experimental-music-campaign-01.png"
                  alt="Art direction and image work"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: "center center" }}
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "inset 1px 0 0 0 rgba(14,15,24,0.06)" }} />
              </div>

              {/* Text column — right side */}
              <div
                className="flex flex-col justify-center"
                style={{ padding: "44px 0 44px 40px" }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                  <div style={{ width: "22px", height: "1px", background: C.a2 }} />
                  <Label>02 — Image</Label>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-sharp)",
                    fontSize: "clamp(24px, 2.8vw, 40px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    color: C.lPri,
                    marginBottom: "16px",
                  }}
                >
                  Art Direction /<br />Image
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "14px",
                    lineHeight: 1.72,
                    color: C.lSec,
                    maxWidth: "310px",
                    marginBottom: "24px",
                  }}
                >
                  Editorial, campaigns, visual identity, styling, content and
                  image-world development across fashion, culture and visual research.
                </p>
                <Link href="/art-direction" className="btn-light-cta">
                  View work →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Band 03 — Paintings ── */}
        <div style={{ borderTop: `1px solid ${C.lR}` }}>
          <div className="container-site">
            <div
              className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] items-stretch"
              style={{ columnGap: 0 }}
            >
              {/* Text column */}
              <div
                className="flex flex-col justify-center order-2 lg:order-1"
                style={{ padding: "44px 40px 44px 0" }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                  <div style={{ width: "22px", height: "1px", background: C.a3 }} />
                  <Label>03 — Visual Art</Label>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-sharp)",
                    fontSize: "clamp(24px, 2.8vw, 40px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    color: C.lPri,
                    marginBottom: "16px",
                  }}
                >
                  Paintings /<br />Works
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "14px",
                    lineHeight: 1.72,
                    color: C.lSec,
                    maxWidth: "310px",
                    marginBottom: "24px",
                  }}
                >
                  Selected paintings and works on canvas exploring gesture,
                  scale, pressure, colour and emotional atmosphere.
                </p>
                <Link href="/art-paintings" className="btn-light-cta">
                  View works →
                </Link>
              </div>

              {/* Image column */}
              <div
                className="relative overflow-hidden order-1 lg:order-2"
                style={{ minHeight: "280px" }}
              >
                <Image
                  src="/images/pathway-paintings.JPG"
                  alt="Paintings and works"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: "center center" }}
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "inset -1px 0 0 0 rgba(14,15,24,0.06)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 · SELECTED PROJECTS — clean dark section
          Direct cut from light body (no gradient bridge).
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: C.dark,
          paddingTop: "56px",
          paddingBottom: "80px",
          borderTop: `1px solid rgba(14,15,24,0.18)`,
        }}
      >
        <div className="container-site">
          {/* Section rule */}
          <div style={{ marginBottom: "48px" }}>
            <Rule label="Selected Work" num="03" dark />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-sharp)",
                  fontSize: "clamp(22px, 2.4vw, 34px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: C.dPri,
                  lineHeight: 1.05,
                }}
              >
                Selected Projects
              </h2>
              <Link
                href="/work"
                className="hidden md:inline-flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: C.dTer,
                  textDecoration: "none",
                  borderBottom: `1px solid ${C.dR}`,
                  paddingBottom: "2px",
                  whiteSpace: "nowrap",
                  marginBottom: "3px",
                  transition: "color 200ms, border-color 200ms",
                }}
              >
                All work →
              </Link>
            </div>
          </div>

          {/* Three equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
            <ProjectCard
              project={wakeUp}
              href="/projects/wake-up"
              imagePosition="center top"
            />
            <ProjectCard
              project={burningHouse}
              href="/projects/burning-house"
              imagePosition="center center"
            />
            <ProjectCard
              project={brdatn}
              href="/projects/brdatn"
              imagePosition="center center"
            />
          </div>

          {/* Mobile all-work link */}
          <div className="mt-8 md:hidden">
            <Link
              href="/work"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: C.dTer,
                textDecoration: "none",
                borderBottom: `1px solid ${C.dR}`,
                paddingBottom: "2px",
              }}
            >
              All work →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 · AVAILABLE FOR — compact, elegant
          Direct cut from dark section.
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: C.body,
          paddingTop: "56px",
          paddingBottom: "72px",
          borderTop: `1px solid ${C.lRM}`,
        }}
      >
        <div className="container-site">
          <div style={{ marginBottom: "36px" }}>
            <Rule label="Availability" num="04" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 items-start">
            {/* Left — title + description */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-sharp)",
                  fontSize: "clamp(22px, 2.4vw, 34px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: C.lPri,
                  lineHeight: 1.08,
                  marginBottom: "16px",
                }}
              >
                Available For
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "14px",
                  lineHeight: 1.72,
                  color: C.lSec,
                  maxWidth: "320px",
                  marginBottom: "24px",
                }}
              >
                Selected freelance, contract and collaborative projects across
                creative production, art direction, live experience and visual research.
              </p>
              <Link href="/contact" className="btn-light-cta">Get in touch →</Link>
            </div>

            {/* Right — indexed list */}
            <div>
              {availableFor.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                  style={{
                    borderBottom: `1px solid ${C.lR}`,
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "9px",
                      letterSpacing: "0.14em",
                      color: C.lTer,
                      fontWeight: 500,
                      flexShrink: 0,
                      width: "20px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sharp)",
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "-0.005em",
                      color: C.lMid,
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 · CONTACT CTA — dark bookend (same ground as hero)
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: C.cta,
          paddingTop: "100px",
          paddingBottom: "100px",
          borderTop: `1px solid rgba(14,15,24,0.22)`,
        }}
      >
        <div className="container-site" style={{ textAlign: "center" }}>
          <Label color={C.dMut}>05 · Contact</Label>

          {/* Instrument Serif for the closing line — warmth, invitation */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 4vw, 58px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: C.dPri,
              lineHeight: 1.05,
              marginTop: "24px",
            }}
          >
            Let&apos;s create something.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "10px",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: C.dTer,
              marginTop: "18px",
            }}
          >
            elizpresent@gmail.com
          </p>

          <div style={{ marginTop: "40px" }}>
            <Link href="/contact" className="btn-hero-ghost">Contact →</Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
