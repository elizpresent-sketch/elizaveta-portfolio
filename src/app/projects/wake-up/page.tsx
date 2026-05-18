// ─────────────────────────────────────────────────────────────
// WAKE UP PROJECT PAGE — /projects/wake-up
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { wakeUpEditions, wakeUpPress } from "@/data/projects";

export const metadata = {
  title: "WAKE UP — Elizaveta Zhuravleva",
  description:
    "An independent live platform bringing together performance, music, fashion, visual art and spatial atmosphere. London, 2024–present.",
};

export default function WakeUpPage() {
  return (
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)]">
      <Nav mode="dark" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end" style={{ background: "#080707" }}>
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.78 }}
          >
            <source src="/videos/wakeupheroinstead.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(8,7,7,0.95) 0%, rgba(8,7,7,0.30) 55%, transparent 100%)" }}
          />
        </div>
        <div className="relative z-10 container-site pb-20 md:pb-32">
          <p className="type-label text-[var(--color-text-secondary)] mb-4">
            Founder / Creative Producer / Art Director · London · 2024–present
          </p>
          <h1
            style={{
              fontFamily:    "var(--font-sharp)",
              fontSize:      "clamp(52px, 8vw, 108px)",
              fontWeight:    700,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color:         "var(--color-text-primary)",
              lineHeight:    1.0,
            }}
          >
            WAKE UP
          </h1>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="type-label text-[var(--color-text-secondary)] mb-6">Overview</p>
              <p className="type-subheading text-[var(--color-text-primary)]">
                WAKE UP is an independent live platform bringing together performance,
                music, fashion, visual art and spatial atmosphere.
              </p>
              <p className="type-body text-[var(--color-text-secondary)] mt-6">
                Each edition is conceived as a total environment — not a conventional
                event but a curated collision of disciplines, people and energy. The
                platform operates outside institutional frameworks and is driven by
                direct collaboration with artists, performers, designers and makers.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 space-y-6">
              {[
                { label: "Role",     value: "Founder / Creative Producer / Art Director" },
                { label: "Location", value: "London" },
                { label: "Period",   value: "2024–present" },
                { label: "Format",   value: "Live platform / Recurring editions" },
              ].map(({ label, value }) => (
                <div key={label} className="border-t border-[var(--color-hairline)] pt-4">
                  <p className="type-micro text-[var(--color-text-tertiary)] mb-1">{label}</p>
                  <p className="type-body text-[var(--color-text-secondary)]">{value}</p>
                </div>
              ))}

              {/* External links — Website + Instagram */}
              <div className="border-t border-[var(--color-hairline)] pt-4 flex gap-3 flex-wrap">
                <a
                  href="https://www.wakeupevent.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wakeup-ext-link"
                >
                  {/* External link icon */}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Website
                </a>
                <a
                  href="https://www.instagram.com/wakeup001101/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wakeup-ext-link"
                >
                  {/* Instagram icon */}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Instagram
                </a>
              </div>
              <style>{`
                .wakeup-ext-link {
                  display: inline-flex;
                  align-items: center;
                  gap: 5px;
                  font-size: 9px;
                  letter-spacing: 0.14em;
                  text-transform: uppercase;
                  color: rgba(240,237,230,0.46);
                  border: 1px solid rgba(240,237,230,0.14);
                  padding: 6px 12px;
                  text-decoration: none;
                  transition: color 180ms ease, border-color 180ms ease;
                }
                .wakeup-ext-link:hover {
                  color: rgba(240,237,230,0.86);
                  border-color: rgba(240,237,230,0.34);
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── WHAT I DID ────────────────────────────────────────── */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container-site max-w-3xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-6">What I did</p>
          <ul className="space-y-4">
            {[
              "Founded and continues to develop the platform from concept through to live execution",
              "Creative direction and art direction across all editions — spatial design, visual identity, programme",
              "Talent curation — performers, musicians, visual artists, designers",
              "Production management — venue, technical, scheduling, vendor coordination",
              "Visual documentation direction and post-production oversight",
              "Press and public communications strategy",
            ].map((item) => (
              <li key={item} className="flex gap-4 py-3 border-b border-[var(--color-hairline)]">
                <span className="type-caption text-[var(--color-text-tertiary)] mt-1 shrink-0">—</span>
                <span className="type-body text-[var(--color-text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── EDITION NAVIGATION ───────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <p className="type-label text-[var(--color-text-secondary)] mb-10">Editions</p>

          <div className="border-t border-[var(--color-hairline)]">
            {wakeUpEditions.map((edition) => (
              <a
                key={edition.id}
                href={`#${edition.id}`}
                className="group flex items-baseline justify-between gap-6 py-5 border-b border-[var(--color-hairline)] transition-colors hover:border-[rgba(240,237,230,0.18)]"
              >
                <div className="flex items-baseline gap-8 min-w-0">
                  <span className="type-label shrink-0 text-[var(--color-text-primary)]" style={{ opacity: 0.85 }}>
                    {edition.subtitle ? `${edition.title} — ${edition.subtitle}` : edition.title}
                  </span>
                  <span className="type-caption text-[var(--color-text-tertiary)]">
                    {edition.location} · {edition.date}
                  </span>
                </div>
                <span
                  className="type-micro shrink-0 transition-opacity duration-300 opacity-40 group-hover:opacity-100 text-[var(--color-text-secondary)]"
                >
                  VIEW →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── EDITIONS — DETAIL SECTIONS ───────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <div className="space-y-24">
            {wakeUpEditions.map((edition) => (
              <div key={edition.number} id={edition.id} style={{ scrollMarginTop: "100px" }}>

                {/* ── Single grid: left = heading + media, right = description ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                  {/* Left column — title, location/date, video/image, YouTube button */}
                  <div className="lg:col-span-7">
                    <p className="type-micro text-[var(--color-text-tertiary)] mb-3">
                      Edition {edition.number}
                    </p>
                    <h3 className="type-section-title text-[var(--color-text-primary)]">
                      {edition.title}
                      {edition.subtitle && (
                        <span className="block text-[var(--color-text-secondary)] mt-2" style={{ letterSpacing: "0.06em" }}>
                          — {edition.subtitle}
                        </span>
                      )}
                    </h3>
                    <p className="type-label text-[var(--color-text-tertiary)] mt-3 mb-8">
                      {edition.location} · {edition.date}
                    </p>

                    {edition.videoEmbedUrl ? (
                      <>
                        <div
                          className="relative w-full overflow-hidden"
                          style={{ aspectRatio: "16/9", background: "#000" }}
                        >
                          <iframe
                            src={edition.videoEmbedUrl}
                            title={edition.title}
                            allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                          />
                        </div>
                        {edition.youtubeUrl && (
                          <div className="mt-6">
                            <a
                              href={edition.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-ghost-dark"
                            >
                              VIEW ON YOUTUBE →
                            </a>
                          </div>
                        )}
                      </>
                    ) : (
                      <div
                        className="card-img-wrap relative overflow-hidden"
                        style={{ aspectRatio: "16/9" }}
                      >
                        <Image
                          src={edition.image}
                          alt={edition.title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: "center 40%" }}
                          sizes="(max-width: 1024px) 100vw, 58vw"
                        />
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(11,11,10,0.55) 100%)" }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Right column — description, aligned beside video */}
                  <div className="lg:col-span-4 lg:col-start-9" style={{ paddingTop: "4.5rem" }}>
                    <p className="type-body text-[var(--color-text-secondary)]">
                      {edition.description}
                    </p>
                  </div>

                </div>

                {/* ── Gallery ── */}
                {edition.gallery.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                    {edition.gallery.map((imgPath, i) => (
                      <div key={i} className="card-img-wrap relative" style={{ aspectRatio: "3/2" }}>
                        <Image
                          src={imgPath}
                          alt={`${edition.title} — ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── PRESS / LINKS ─────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site max-w-2xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-8">Press / Links</p>
          {wakeUpPress.map((item) =>
            item.url ? (
              <a
                key={item.publication}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-8 py-4 border-b border-[var(--color-hairline)] group"
              >
                <span className="type-micro shrink-0 text-[var(--color-text-tertiary)]" style={{ minWidth: "160px" }}>
                  {item.publication}
                </span>
                <span className="type-body text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                  {item.title} ↗
                </span>
              </a>
            ) : (
              <div
                key={item.publication}
                className="flex items-baseline gap-8 py-4 border-b border-[var(--color-hairline)]"
              >
                <span className="type-micro shrink-0 text-[var(--color-text-tertiary)]" style={{ minWidth: "160px" }}>
                  {item.publication}
                </span>
                <span className="type-body text-[var(--color-text-tertiary)]">
                  {item.title}
                  <span className="type-micro text-[var(--color-text-tertiary)]" style={{ opacity: 0.5, marginLeft: "12px" }}>
                    link pending
                  </span>
                </span>
              </div>
            )
          )}
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── OUTCOME ──────────────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site max-w-3xl">
          <p className="type-label text-[var(--color-text-secondary)] mb-6">Outcome</p>
          <p className="type-subheading text-[var(--color-text-primary)]">
            Three editions delivered. A growing audience and collaborator network
            across London&apos;s performance, fashion and arts communities.
          </p>
          <p className="type-body text-[var(--color-text-secondary)] mt-6">
            WAKE UP has established itself as a platform with a distinct point of view —
            one that consistently brings high-level creative talent together in a format
            that feels genuinely independent and atmospherically considered.
          </p>
        </div>
      </section>

      {/* ── NEXT PROJECT CTA ─────────────────────────────────── */}
      <section className="border-t border-[var(--color-hairline)]">
        <div className="container-site py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="type-label text-[var(--color-text-secondary)] mb-2">Next Project</p>
              <h3 className="type-section-title text-[var(--color-text-primary)]">Burning House</h3>
            </div>
            <Link href="/projects/burning-house" className="btn-ghost-dark">
              View Project →
            </Link>
          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
