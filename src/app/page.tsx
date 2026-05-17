// ─────────────────────────────────────────────────────────────
// HOME PAGE
// Syne 800 hero name — sharp, architectural, confident
// Full-width editorial practice bands — no container collision
// Three equal project cards — clean, reliable hierarchy
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
  hero: "#08090E",   // deep graphite-blue
  dark: "#0C0D15",   // projects section
  cta:  "#08090E",   // contact bookend

  // Single warm light surface — no alternating background noise
  body: "#F0EDE7",

  // Text — dark surfaces
  dPri: "rgba(232,234,252,0.96)",
  dSec: "rgba(185,188,228,0.72)",
  dTer: "rgba(148,151,210,0.30)",
  dMut: "rgba(118,122,196,0.16)",

  // Text — light surfaces (warm neutrals)
  lPri: "#0F0E0B",
  lMid: "#302D28",
  lSec: "#5C5750",
  lTer: "#8A8680",

  // Rules
  lR:  "rgba(15,14,11,0.07)",
  lRM: "rgba(15,14,11,0.12)",
  dR:  "rgba(185,188,228,0.07)",
  dRM: "rgba(185,188,228,0.10)",

  // Practice accent — single warm neutral
  accent: "rgba(15,14,11,0.18)",
};

// ── Practice band layout constants ────────────────────────────
// BAND_OUTER_PAD aligns text column with the site container at every viewport width.
// container-site: max-width 1440px, padding 0 40px → content width = 1360px.
// At ≤1440px: max(40px, ...)  → 40px  (matches container padding exactly)
// At 1920px:  max(40px, 280px) → 280px (keeps text aligned with container centre)
const OUTER = "max(40px, calc((100vw - 1360px) / 2))";
const INNER = "64px";   // between text column edge and image
const VPAD  = "clamp(72px, 9vh, 112px)";

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

// ── Section rule ──────────────────────────────────────────────
function Rule({ label, num, dark }: { label: string; num: string; dark?: boolean }) {
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

// ── Project card (dark section) ───────────────────────────────
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
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(8,9,16,0.26) 0%, transparent 48%)",
          }}
        />
      </div>

      <div style={{ paddingTop: "16px", paddingBottom: "4px" }}>
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "10px",
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
            fontSize: "clamp(16px, 1.6vw, 22px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
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
        <div className="flex items-center gap-2.5 mt-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
          <div style={{ width: "14px", height: "1px", background: "rgba(185,188,228,0.45)" }} />
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "10px",
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
          50%       { opacity: 0.80; }
        }
      `}</style>

      <Nav mode="dark" />

      {/* ══════════════════════════════════════════════════════
          01 · HERO
          Syne 800 — sharp, architectural, confident.
          Single restrained atmospheric glow. Film grain.
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
        {/* One restrained atmospheric glow — not blobby */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 78% 12%, rgba(36,50,148,0.22) 0%, transparent 60%)",
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

        {/* Main content */}
        <div
          className="relative z-10 flex-1 flex flex-col justify-center container-site"
          style={{ paddingTop: "72px" }}
        >
          {/* Name — Syne 800, tight, architectural */}
          <h1
            style={{
              fontFamily: "var(--font-sharp)",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 0.88,
              color: C.dPri,
            }}
          >
            Elizaveta<br />Zhuravleva
          </h1>

          {/* Role strip */}
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: C.dSec,
              marginTop: "28px",
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
              color: "rgba(178,181,225,0.60)",
              maxWidth: "440px",
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

        {/* Bottom strip */}
        <div className="relative z-10 container-site" style={{ paddingBottom: "36px" }}>
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
          02 · PRACTICE — full-width editorial bands
          Grid sits outside container-site so the image column
          reaches the viewport edge. Text column padding is
          computed to stay aligned with the site container.
          No overlap, no collage stacking, no broken crops.
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: C.body, borderTop: `1px solid ${C.lRM}` }}>

        {/* Section header — inside container for alignment */}
        <div className="container-site" style={{ paddingTop: "40px" }}>
          <Rule label="Practice" num="02" />
        </div>

        {/* ── Band 01 · Live — text left, image right ── */}
        <div style={{ borderTop: `1px solid ${C.lR}`, marginTop: "28px" }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ minHeight: "clamp(480px, 65vh, 740px)", alignItems: "stretch" }}
          >
            {/* Text */}
            <div
              className="flex flex-col justify-center order-2 lg:order-1"
              style={{ padding: `${VPAD} ${INNER} ${VPAD} ${OUTER}` }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                <div style={{ width: "22px", height: "1px", background: C.accent }} />
                <Label>01 — Live</Label>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-sharp)",
                  fontSize: "clamp(26px, 2.8vw, 42px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: C.lPri,
                  marginBottom: "18px",
                }}
              >
                Live / Production /<br />Experience
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "15px",
                  lineHeight: 1.72,
                  color: C.lSec,
                  maxWidth: "340px",
                  marginBottom: "28px",
                }}
              >
                Events, shows, performance direction and spatial atmosphere
                shaped through body, sound, image, audience and space.
              </p>
              <Link href="/live-production" className="btn-light-cta">
                View projects →
              </Link>
            </div>

            {/* Image — fills full column height, no extra padding */}
            <div
              className="relative overflow-hidden order-1 lg:order-2"
              style={{ minHeight: "clamp(320px, 50vh, 740px)" }}
            >
              <Image
                src="/images/pathway-live.png"
                alt="Live performance and production"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* ── Band 02 · Art Direction — image left, text right ── */}
        <div style={{ borderTop: `1px solid ${C.lR}` }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ minHeight: "clamp(480px, 65vh, 740px)", alignItems: "stretch" }}
          >
            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{ minHeight: "clamp(320px, 50vh, 740px)" }}
            >
              <Image
                src="/images/experimental-music-campaign-01.png"
                alt="Art direction and image work"
                fill
                className="object-cover"
                style={{ objectPosition: "center center" }}
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div
              className="flex flex-col justify-center"
              style={{ padding: `${VPAD} ${OUTER} ${VPAD} ${INNER}` }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                <div style={{ width: "22px", height: "1px", background: C.accent }} />
                <Label>02 — Image</Label>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-sharp)",
                  fontSize: "clamp(26px, 2.8vw, 42px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: C.lPri,
                  marginBottom: "18px",
                }}
              >
                Art Direction /<br />Image
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "15px",
                  lineHeight: 1.72,
                  color: C.lSec,
                  maxWidth: "340px",
                  marginBottom: "28px",
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

        {/* ── Band 03 · Paintings — text left, image right ── */}
        <div style={{ borderTop: `1px solid ${C.lR}` }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ minHeight: "clamp(480px, 65vh, 740px)", alignItems: "stretch" }}
          >
            {/* Text */}
            <div
              className="flex flex-col justify-center order-2 lg:order-1"
              style={{ padding: `${VPAD} ${INNER} ${VPAD} ${OUTER}` }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                <div style={{ width: "22px", height: "1px", background: C.accent }} />
                <Label>03 — Visual Art</Label>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-sharp)",
                  fontSize: "clamp(26px, 2.8vw, 42px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: C.lPri,
                  marginBottom: "18px",
                }}
              >
                Paintings /<br />Works
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "15px",
                  lineHeight: 1.72,
                  color: C.lSec,
                  maxWidth: "340px",
                  marginBottom: "28px",
                }}
              >
                Selected paintings and works on canvas exploring gesture,
                scale, pressure, colour and emotional atmosphere.
              </p>
              <Link href="/art-paintings" className="btn-light-cta">
                View works →
              </Link>
            </div>

            {/* Image */}
            <div
              className="relative overflow-hidden order-1 lg:order-2"
              style={{ minHeight: "clamp(320px, 50vh, 740px)" }}
            >
              <Image
                src="/images/pathway-paintings.JPG"
                alt="Paintings and works"
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 · SELECTED PROJECTS
          Three equal cards — clean, reliable, no broken grid.
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: C.dark,
          paddingTop: "80px",
          paddingBottom: "96px",
          borderTop: `1px solid rgba(14,15,24,0.18)`,
        }}
      >
        <div className="container-site">
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
                }}
              >
                All work →
              </Link>
            </div>
          </div>

          {/* Three equal cards — 3/2 ratio, consistent, clean */}
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
          04 · AVAILABILITY
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
            <div>
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
          05 · CONTACT CTA — dark bookend
          Syne 600 — consistent with the rest of the system.
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

          <h2
            style={{
              fontFamily: "var(--font-sharp)",
              fontSize: "clamp(32px, 4.5vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: C.dPri,
              lineHeight: 1.0,
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
