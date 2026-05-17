// ─────────────────────────────────────────────────────────────
// WORK PAGE — selected overview of all projects
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { liveProjects, artDirectionProjects } from "@/data/projects";
import { artworks } from "@/data/artworks";

const paintingPreview = artworks.slice(0, 3);

const wakeUpEditionNotes = [
  { label: "WAKE UP 01", meta: "London" },
  { label: "WAKE UP 02", meta: "MORPHOSIS" },
  { label: "WAKE UP 03", meta: "Artworks East" },
];

export default function WorkPage() {
  return (
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)]">
      <Nav mode="dark" />

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="pt-40 pb-16">
        <div className="container-site">
          <SectionHeader
            eyebrow="Work"
            headline="Selected Projects"
            lead="Live experience, creative production, art direction, image-making and painting."
            mode="dark"
          />
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── LIVE / PRODUCTION ─────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader eyebrow="Live / Production" headline="WAKE UP" mode="dark" />
            <Link href="/live-production" className="btn-text-link text-[var(--color-text-secondary)] hidden md:block">
              View all →
            </Link>
          </div>

          {/* WAKE UP feature card */}
          {liveProjects.filter((p) => p.featured).map((project) => (
            <div key={project.slug}>
              <div className="mb-6">
                <ProjectCard project={project} size="feature" />
              </div>

              {/* Project framing — platform description */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
                <div className="md:col-span-7">
                  <p className="type-body text-[var(--color-text-secondary)]">
                    Independent live platform bringing together performance, music,
                    fashion, visual art and spatial atmosphere across multiple editions.
                  </p>
                  <p className="type-caption text-[var(--color-text-tertiary)] mt-2">
                    London · 2024–present
                  </p>
                </div>
                {/* Edition notes */}
                <div className="md:col-span-4 md:col-start-9">
                  <div className="space-y-2">
                    {wakeUpEditionNotes.map((e) => (
                      <div
                        key={e.label}
                        className="flex items-baseline gap-3 py-2 border-b border-[var(--color-hairline)]"
                      >
                        <span className="type-micro text-[var(--color-text-tertiary)] shrink-0">—</span>
                        <span className="type-caption text-[var(--color-text-secondary)]">{e.label}</span>
                        <span className="type-micro text-[var(--color-text-tertiary)] ml-auto">{e.meta}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" style={{ margin: "0 40px" }} />

      {/* ── ART DIRECTION / IMAGE ─────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader eyebrow="Category" headline="Art Direction / Image" mode="dark" />
            <Link href="/art-direction" className="btn-text-link text-[var(--color-text-secondary)] hidden md:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artDirectionProjects.filter((p) => !p.hidden).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: "0 40px" }} />

      {/* ── PAINTINGS ─────────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader eyebrow="Category" headline="Paintings / Works" mode="dark" />
            <Link href="/art-paintings" className="btn-text-link text-[var(--color-text-secondary)] hidden md:block">
              View more →
            </Link>
          </div>

          {/* 3-painting preview grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paintingPreview.map((artwork) => (
              <Link key={artwork.id} href="/art-paintings" className="block group">
                <div className="card-img-wrap relative" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ backgroundColor: "#0e0d0b" }}
                  />
                </div>
                <div className="mt-4 space-y-0.5">
                  <p
                    className="italic"
                    style={{ fontSize: "13px", color: "rgba(240,237,230,0.82)" }}
                  >
                    {artwork.title}, {artwork.year}
                  </p>
                  <p style={{ fontSize: "11px", color: "rgba(240,237,230,0.42)" }}>
                    {artwork.medium}
                  </p>
                  <p style={{ fontSize: "11px", color: "rgba(240,237,230,0.42)" }}>
                    {artwork.dimensions}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/art-paintings"
              className="btn-text-link text-[var(--color-text-secondary)]"
            >
              View more →
            </Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
