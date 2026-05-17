// ─────────────────────────────────────────────────────────────
// ART DIRECTION / IMAGE PAGE
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { artDirectionProjects } from "@/data/projects";

function projectHref(slug: string, hasProjectPage?: boolean): string {
  if (hasProjectPage) return `/projects/${slug}`;
  return "/art-direction";
}

const visible  = artDirectionProjects.filter((p) => !p.hidden);
const featured = visible.filter((p) => p.featured);
const others   = visible.filter((p) => !p.featured);

export default function ArtDirectionPage() {
  return (
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)]">
      <Nav mode="dark" />

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="pt-40 pb-16">
        <div className="container-site">
          <SectionHeader
            eyebrow="Art Direction / Image"
            headline="Visual Direction & Image-Making"
            lead="Performance-led, editorial, campaign and spatial image work."
            mode="dark"
          />
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {featured.map((project) => {
              const href = projectHref(project.slug, project.hasProjectPage);
              return (
                <div key={project.slug} className="group">
                  {/* Video — not wrapped in Link so iframe remains interactive */}
                  {project.videoEmbedUrl ? (
                    <VideoEmbed embedUrl={project.videoEmbedUrl} title={project.title} />
                  ) : (
                    <Link href={href} className="block">
                      <div className="card-img-wrap relative" style={{ aspectRatio: "4/5" }}>
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                  )}

                  {/* Text — always links to project page */}
                  <Link href={href} className="block mt-5">
                    <p className="type-label text-[var(--color-text-secondary)] mb-1">
                      {project.categoryLabel}
                    </p>
                    <h3 className="type-heading text-[var(--color-text-primary)]">
                      {project.title}
                    </h3>
                    <p className="type-caption text-[var(--color-text-secondary)] mt-1">
                      {project.role} · {project.year}
                    </p>
                    <p className="type-body text-[var(--color-text-secondary)] mt-3 max-w-md">
                      {project.shortDescription}
                    </p>
                    {project.hasProjectPage && (
                      <p
                        className="mt-4"
                        style={{ fontSize: "10px", letterSpacing: "0.16em", color: "rgba(240,237,230,0.45)" }}
                      >
                        VIEW PROJECT →
                      </p>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL PROJECTS ───────────────────────────────── */}
      {others.length > 0 && (
        <>
          <div className="divider" style={{ margin: "0 40px" }} />
          <section className="section-gap">
            <div className="container-site">
              <p className="type-label text-[var(--color-text-secondary)] mb-12">Selected Work</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {others.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── SCOPE OF PRACTICE ─────────────────────────────────── */}
      <section className="section-gap border-t border-[var(--color-hairline)]">
        <div className="container-site max-w-2xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-6">Scope of Practice</p>
          <ul className="space-y-4">
            {[
              "Performance-led image-making and live direction",
              "Editorial and campaign visual direction",
              "Fashion and portrait art direction",
              "Set direction and spatial atmosphere",
              "Campaign concept development",
              "Visual identity for events and cultural projects",
            ].map((item) => (
              <li key={item} className="flex gap-4 py-3 border-b border-[var(--color-hairline)]">
                <span className="type-caption text-[var(--color-text-tertiary)] mt-1 shrink-0">—</span>
                <span className="type-body text-[var(--color-text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
