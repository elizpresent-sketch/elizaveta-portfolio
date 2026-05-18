// ─────────────────────────────────────────────────────────────
// ART DIRECTION / IMAGE PAGE
// One unified editorial project grid, 2-col desktop / 1-col mobile.
// Cover-image thumbnails for video projects (with play badge) so all
// cards sit at the same 16:9 ratio without raw iframe controls.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { artDirectionProjects } from "@/data/projects";

// All visible projects — featured first, then non-featured
const allVisible = artDirectionProjects.filter((p) => !p.hidden);
const orderedProjects = [
  ...allVisible.filter((p) => p.featured),
  ...allVisible.filter((p) => !p.featured),
];

function projectHref(slug: string, hasProjectPage?: boolean): string {
  if (hasProjectPage) return `/projects/${slug}`;
  return "#";
}

export default function ArtDirectionPage() {
  return (
    <>
      {/* ── Fixed light fog video background — toned down ──── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
          background: "#F2F3F6",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.38,          /* reduced from 0.72 — fog is a hint, not weather */
          }}
        >
          <source src="/videos/bg-selected-projects-light-fog-loop.mp4" type="video/mp4" />
        </video>
        {/* Warm off-white veil — reduces cloudiness, improves readability */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(244, 243, 241, 0.70)" }} />
      </div>

      {/* ── Page-scoped styles ──────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Project CTA — visible dark graphite link with underline */
        .ad-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-ui);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: rgba(18, 15, 12, 0.68);
          border-bottom: 1px solid rgba(18, 15, 12, 0.22);
          padding-bottom: 3px;
          text-decoration: none;
          transition: color 200ms ease, border-color 200ms ease;
          margin-top: 18px;
        }
        .ad-cta:hover {
          color: rgba(18, 15, 12, 0.95);
          border-bottom-color: rgba(18, 15, 12, 0.50);
        }
        .ad-arrow {
          display: inline-block;
          transition: transform 200ms ease;
        }
        .ad-cta:hover .ad-arrow { transform: translateX(4px); }

        /* Play badge — centred over video-project thumbnails */
        .ad-play-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          transition: transform 280ms ease, background 200ms ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
        }
        .ad-card:hover .ad-play-badge {
          transform: translate(-50%, -50%) scale(1.10);
          background: rgba(255, 255, 255, 1);
        }
        .ad-play-icon {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 8px 0 8px 15px;
          border-color: transparent transparent transparent rgba(18, 15, 12, 0.85);
          margin-left: 3px;
        }

        /* Card link wrapper — keeps hover state coordinated */
        .ad-card { display: block; text-decoration: none; }
      ` }} />

      <main
        className="page-light"
        style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}
      >
        <Nav mode="gallery" />

        {/* ── PAGE HEADER ──────────────────────────────────── */}
        <section className="pt-40 pb-10">
          <div className="container-site">
            <SectionHeader
              eyebrow="Art Direction / Image"
              headline="Visual Direction & Image-Making"
              lead="Performance-led, editorial, campaign and spatial image work."
              mode="gallery"
            />
          </div>
        </section>

        <div className="divider container-site" />

        {/* ── SELECTED IMAGE WORK ─────────────────────────── */}
        <section style={{ paddingTop: "56px", paddingBottom: "96px" }}>
          <div className="container-site">
            <p
              className="type-label text-[var(--color-text-secondary)] mb-10"
              style={{ letterSpacing: "0.16em" }}
            >
              Selected Image Work
            </p>

            {/* Unified 2-col grid — all projects, same card structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {orderedProjects.map((project) => {
                const href = projectHref(project.slug, project.hasProjectPage);
                const isVideo = !!project.videoEmbedUrl;
                const isClickable = project.hasProjectPage;

                return (
                  <div key={project.slug} className="flex flex-col">

                    {/* ── Media: 16:9 cover image (+ play badge if video) ── */}
                    {isClickable ? (
                      <Link href={href} className="ad-card block">
                        <div
                          className="card-img-wrap relative overflow-hidden"
                          style={{ aspectRatio: "16/9" }}
                        >
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          {/* Play badge — video projects only */}
                          {isVideo && (
                            <div className="ad-play-badge">
                              <div className="ad-play-icon" />
                            </div>
                          )}
                        </div>
                      </Link>
                    ) : (
                      /* No project page — non-clickable image */
                      <div
                        className="card-img-wrap relative overflow-hidden"
                        style={{ aspectRatio: "16/9" }}
                      >
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}

                    {/* ── Card text ── */}
                    <div className="mt-5 flex flex-col flex-1">
                      {/* Category label */}
                      <p className="type-micro text-[var(--color-text-tertiary)] mb-2">
                        {project.categoryLabel}
                      </p>

                      {/* Title */}
                      <h3
                        className="type-heading text-[var(--color-text-primary)]"
                        style={{ marginBottom: "6px" }}
                      >
                        {project.title}
                      </h3>

                      {/* Meta: year · location */}
                      <p className="type-caption text-[var(--color-text-secondary)]">
                        {project.year} · {project.location}
                      </p>

                      {/* Short description — hidden on mobile to reduce vertical bulk */}
                      <p
                        className="hidden md:block type-body text-[var(--color-text-secondary)] mt-4"
                        style={{ maxWidth: "480px" }}
                      >
                        {project.shortDescription}
                      </p>

                      {/* CTA — only for projects with a dedicated page */}
                      {project.hasProjectPage && (
                        <Link href={href} className="ad-cta" style={{ alignSelf: "flex-start" }}>
                          View Project <span className="ad-arrow">→</span>
                        </Link>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider container-site" />

        {/* ── SCOPE OF PRACTICE ─────────────────────────────── */}
        <section className="section-gap">
          <div className="container-site max-w-2xl">
            <p className="type-label text-[var(--color-text-secondary)] mb-6">Scope of Practice</p>
            <ul className="space-y-1">
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

        <Footer mode="gallery" />
      </main>
    </>
  );
}
