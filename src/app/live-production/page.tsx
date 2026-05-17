// ─────────────────────────────────────────────────────────────
// LIVE / PRODUCTION PAGE
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { liveProjects } from "@/data/projects";

const wakeUp = liveProjects.find((p) => p.slug === "wake-up")!;

// ── WAKE UP EDITION PREVIEWS ───────────────────────────────────
const wakeUpEditions = [
  {
    label: "WAKE UP 01",
    location: "London · 2025",
    description:
      "Independent live platform bringing together performance, music, fashion, visual art and spatial atmosphere.",
  },
  {
    label: "WAKE UP 02 — MORPHOSIS",
    location: "London · 2025",
    description:
      "An edition focused on transformation, shifting identities, biotech, body, performance and image.",
  },
  {
    label: "WAKE UP 03",
    location: "London · 2025",
    description:
      "A seven-day exhibition and performance programme developed with Artworks East, including performances, workshops and live events.",
  },
];

// ── LIVE & PERFORMANCE WORKS GRID ─────────────────────────────
// image: null = image file not yet provided (renders clean dark frame)
// href: null  = no dedicated project page yet (card is not a link)
const performanceWorks = [
  {
    slug: "burning-house",
    title: "Burning House",
    category: "Performance / Short Film",
    year: "2024",
    role: "Producer · Live Director · Art Director · Performer",
    description:
      "A performance-led work conceived as a live action and directed for film — exploring domesticity, destruction, exposure and transformation through fire, water, body and painted surface.",
    image: "/images/burning-house-01.png" as string | null,
    href: "/projects/burning-house" as string | null,
  },
  {
    slug: "brdatn",
    title: "BRDÄTN",
    category: "Live Performance",
    year: "2024",
    role: "Concept · Live Direction · Performance",
    description:
      "A live performance work developed as a controlled time-based event. Choreography, visual language and pacing shaped in real time for both audience and camera.",
    image: "/images/brdatn-01.png" as string | null,
    href: "/projects/brdatn" as string | null,
  },
  {
    slug: "fluid-energy",
    title: "Fluid Energy",
    category: "Performance / Short Film",
    year: "2024",
    role: "Producer · Live Director · Art Director · Performer",
    description:
      "A durational performance exploring physical constraint, vulnerability and the transformation of the body into an instrument of mark-making through suspension, binding and repetitive gesture.",
    image: "/images/fluid-energy-01.png" as string | null,
    href: "/projects/fluid-energy" as string | null,
  },
  {
    slug: "psi-el",
    title: "Ψ(E_l)",
    category: "Performance · Concept",
    year: "2024",
    role: "Concept · Performance · Visual Direction",
    description:
      "A performance concept exploring affection, uncontrollable infatuation, beauty, suffering and metaphysical sensation through body, movement, pearls, flowers, spherical structures and paint.",
    image: "/images/psi-el-01.png" as string | null,
    href: "/projects/psi-el" as string | null,
  },
  {
    slug: "eclipse-obverse",
    title: "Eclipse Obverse",
    category: "Short Film · Performance",
    year: "2024",
    role: "Co-Direction · Artist · MUA · Styling",
    description:
      "A short film and performance-led visual work shaped as a self-exploration journey, moving between body, image, atmosphere and cosmic interiority.",
    credits: [
      "Direction / Creative / VFX & Editing / Soundtrack — @hqeivy",
      "Co-Direction / Artist / MUA / Styling — @elizpresent",
      "DP — @no_photograph_bhsy",
      "Assistant — Shanghui Song",
    ],
    image: "/images/eclipse-obverse-01.png" as string | null,
    href: "/projects/eclipse-obverse" as string | null,
  },
] satisfies {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  credits?: string[];
  image: string | null;
  href: string | null;
}[];

export default function LiveProductionPage() {
  return (
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)]">
      <Nav mode="dark" />

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="pt-40 pb-16">
        <div className="container-site">
          <SectionHeader
            eyebrow="Live / Production / Performance"
            headline="Live Direction · Production · Performance"
            mode="dark"
          />
          <p className="type-body text-[var(--color-text-secondary)] mt-8 max-w-2xl">
            I direct and produce live works — building spatial atmospheres, staging
            performances, directing bodies and images in real time, and shaping total
            experiences from concept through to live execution. Many works exist across
            live production, art direction and performance simultaneously.
          </p>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── WAKE UP — FEATURED PROJECT ───────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <p className="type-label text-[var(--color-text-secondary)] mb-8">Featured Project</p>

          {/* Image — reduced height for MacBook viewports */}
          <Link
            href="/projects/wake-up"
            className="block group card-img-wrap relative overflow-hidden"
            style={{ aspectRatio: "21/9" }}
          >
            <Image
              src="/images/wake-up-01.png"
              alt="WAKE UP"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(11,11,10,0.85) 0%, transparent 50%)" }}
            />
          </Link>

          {/* Title + role + location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="type-display text-[var(--color-text-primary)]">WAKE UP</h2>
              <p className="type-subheading italic text-[var(--color-text-secondary)] mt-2">
                {wakeUp.role}
              </p>
              <p className="type-label text-[var(--color-text-tertiary)] mt-1">
                {wakeUp.location} · {wakeUp.year}
              </p>
            </div>
            <div>
              <p className="type-body text-[var(--color-text-secondary)]">
                {wakeUp.shortDescription}
              </p>
              <div className="mt-8">
                <Link href="/projects/wake-up" className="btn-ghost-dark">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* ── EDITION PREVIEW ──────────────────────────────── */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[var(--color-hairline)]">
            {wakeUpEditions.map((ed, i) => (
              <div
                key={i}
                className="pt-6 pb-6 pr-8"
                style={{
                  borderRight: i < wakeUpEditions.length - 1
                    ? "1px solid rgba(240,237,230,0.07)"
                    : "none",
                  paddingLeft: i > 0 ? "32px" : "0",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "rgba(240,237,230,0.45)",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  {ed.label}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: "rgba(240,237,230,0.28)",
                    marginBottom: "10px",
                  }}
                >
                  {ed.location}
                </p>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(240,237,230,0.5)" }}>
                  {ed.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: "0 40px" }} />

      {/* ── LIVE & PERFORMANCE WORKS GRID ────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <p className="type-label text-[var(--color-text-secondary)] mb-2">
            Live & Performance Works
          </p>
          <p
            className="max-w-xl mb-12"
            style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(240,237,230,0.4)" }}
          >
            Works produced, directed and performed — some appear across live production
            and art direction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {performanceWorks.map((project) => {
              const cardContent = (
                <>
                  {/* Image */}
                  {project.image ? (
                    <div className="card-img-wrap relative" style={{ aspectRatio: "3/2" }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full"
                      style={{
                        aspectRatio: "3/2",
                        background: "rgba(240,237,230,0.03)",
                        border: "1px solid rgba(240,237,230,0.06)",
                      }}
                    />
                  )}

                  {/* Text */}
                  <div className="mt-4 space-y-1">
                    <p className="type-label text-[var(--color-text-secondary)]">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="type-heading text-[var(--color-text-primary)]">
                      {project.title}
                    </h3>
                    <p className="type-caption text-[var(--color-text-secondary)] mt-1">
                      {project.role}
                    </p>
                    <p className="type-body text-[var(--color-text-secondary)] mt-3">
                      {project.description}
                    </p>
                    {project.credits && (
                      <div className="mt-3 space-y-0.5">
                        {project.credits.map((c) => (
                          <p key={c} style={{ fontSize: "11px", color: "rgba(240,237,230,0.35)", lineHeight: 1.6 }}>
                            {c}
                          </p>
                        ))}
                      </div>
                    )}
                    {project.href && (
                      <p
                        className="mt-3 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ fontSize: "10px", letterSpacing: "0.16em", color: "rgba(240,237,230,0.45)", opacity: 0.7 }}
                      >
                        VIEW PROJECT →
                      </p>
                    )}
                  </div>
                </>
              );

              return project.href ? (
                <Link key={project.slug} href={project.href} className="block group">
                  {cardContent}
                </Link>
              ) : (
                <div key={project.slug} className="group">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
