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
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/wake-up-hero.jpeg"
            alt="WAKE UP"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(11,11,10,0.92) 0%, rgba(11,11,10,0.2) 60%, transparent 100%)" }}
          />
        </div>
        <div className="relative z-10 container-site pb-20 md:pb-32">
          <p className="type-label text-[var(--color-text-secondary)] mb-4">
            Founder / Creative Producer / Art Director · London · 2024–present
          </p>
          <h1 className="type-display-xl text-[var(--color-text-primary)]">WAKE UP</h1>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="section-gap">
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
            </div>
          </div>
        </div>
      </section>

      <div className="divider container-site" />

      {/* ── WHAT I DID ────────────────────────────────────────── */}
      <section className="section-gap">
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
                  <span
                    className="shrink-0"
                    style={{ fontSize: "13px", letterSpacing: "0.12em", color: "rgba(240,237,230,0.85)" }}
                  >
                    {edition.subtitle ? `${edition.title} — ${edition.subtitle}` : edition.title}
                  </span>
                  <span
                    style={{ fontSize: "11px", letterSpacing: "0.06em", color: "rgba(240,237,230,0.35)" }}
                  >
                    {edition.location} · {edition.date}
                  </span>
                </div>
                <span
                  className="shrink-0 transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                  style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(240,237,230,0.7)" }}
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
          <div className="space-y-40">
            {wakeUpEditions.map((edition) => (
              <div key={edition.number} id={edition.id} style={{ scrollMarginTop: "100px" }}>

                {/* ── Edition heading ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                  <div className="md:col-span-4">
                    <p
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        color: "rgba(240,237,230,0.3)",
                        textTransform: "uppercase",
                        marginBottom: "14px",
                      }}
                    >
                      Edition {edition.number}
                    </p>
                    <h3 className="type-display-sm text-[var(--color-text-primary)]">
                      {edition.title}
                      {edition.subtitle && (
                        <span className="block italic text-[var(--color-text-secondary)] mt-1">
                          — {edition.subtitle}
                        </span>
                      )}
                    </h3>
                    <p className="type-label text-[var(--color-text-tertiary)] mt-4">
                      {edition.location} · {edition.date}
                    </p>
                  </div>
                  <div className="md:col-span-6 md:col-start-7 flex items-end">
                    <p className="type-body text-[var(--color-text-secondary)]">
                      {edition.description}
                    </p>
                  </div>
                </div>

                {/* ── Media ── */}
                {edition.videoEmbedUrl ? (
                  /* Normal YouTube embed — no autoplay, real preview thumbnail + play button */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-9">
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
                        <div className="mt-4">
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
                    </div>
                  </div>
                ) : (
                  /* WU03 — cinematic still image, no YouTube link */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-9">
                      <div
                        className="card-img-wrap relative overflow-hidden"
                        style={{ aspectRatio: "21/9" }}
                      >
                        <Image
                          src={edition.image}
                          alt={edition.title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: "center 40%" }}
                          sizes="(max-width: 1024px) 100vw, 75vw"
                        />
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(11,11,10,0.55) 100%)" }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Gallery ── */}
                {edition.gallery.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
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
                <span
                  className="shrink-0"
                  style={{ fontSize: "11px", letterSpacing: "0.14em", color: "rgba(240,237,230,0.45)", textTransform: "uppercase", minWidth: "160px" }}
                >
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
                <span
                  className="shrink-0"
                  style={{ fontSize: "11px", letterSpacing: "0.14em", color: "rgba(240,237,230,0.45)", textTransform: "uppercase", minWidth: "160px" }}
                >
                  {item.publication}
                </span>
                <span style={{ fontSize: "14px", color: "rgba(240,237,230,0.3)" }}>
                  {item.title}
                  <span
                    style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(240,237,230,0.2)", marginLeft: "12px", textTransform: "uppercase" }}
                  >
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
              <h3 className="type-display-sm text-[var(--color-text-primary)]">Burning House</h3>
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
