// ─────────────────────────────────────────────────────────────
// INDIVIDUAL PAINTING PAGE — /art-paintings/[slug]
// With gallery  → PaintingViewer (thumbnails + main + info)
// Without gallery → simple two-column (image + info)
// ─────────────────────────────────────────────────────────────

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PaintingViewer } from "@/components/ui/PaintingViewer";
import { artworks } from "@/data/artworks";

export function generateStaticParams() {
  return artworks
    .filter((a) => a.slug)
    .map((a) => ({ slug: a.slug! }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artwork = artworks.find((a) => a.slug === params.slug);
  if (!artwork) return {};
  return {
    title: `${artwork.title} — Elizaveta Zhuravleva`,
    description: `${artwork.title}, ${artwork.year}. ${artwork.medium}, ${artwork.dimensions}.`,
  };
}

// ── Atmospheric background (matches /art-paintings index) ─────
function AtmosphericBg() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: [
          "radial-gradient(ellipse 52% 36% at 92% 6%,  rgba(110, 44, 12,  0.14) 0%, transparent 65%)",
          "radial-gradient(ellipse 28% 40% at 98% 52%, rgba(80,  16, 12,  0.09) 0%, transparent 55%)",
          "radial-gradient(ellipse 35% 30% at 88% 96%, rgba(90,  42, 8,   0.09) 0%, transparent 55%)",
          "radial-gradient(ellipse 40% 35% at 5%  90%, rgba(55,  24, 8,   0.08) 0%, transparent 60%)",
          "#0B0B0A",
        ].join(", "),
      }}
    />
  );
}

// ── Info panel — shared between both layouts ──────────────────
function InfoPanel({ artwork }: { artwork: (typeof artworks)[0] }) {
  return (
    <div className="space-y-7 pt-1">
      <div>
        <h1
          style={{
            fontSize: "24px",
            fontStyle: "italic",
            color: "rgba(240,237,230,0.92)",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          {artwork.title}
        </h1>
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.1em",
            color: "rgba(240,237,230,0.32)",
            marginTop: "10px",
            textTransform: "uppercase",
          }}
        >
          {artwork.year}
        </p>
      </div>

      <div className="space-y-4">
        {[
          { label: "Medium",     value: artwork.medium },
          { label: "Dimensions", value: artwork.dimensions },
        ].map(({ label, value }) => (
          <div key={label}>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.16em",
                color: "rgba(240,237,230,0.26)",
                textTransform: "uppercase",
                marginBottom: "5px",
              }}
            >
              {label}
            </p>
            <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.62)", lineHeight: 1.5 }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {artwork.description && (
        <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(240,237,230,0.07)" }}>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.16em",
              color: "rgba(240,237,230,0.26)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            About this work
          </p>
          <p style={{ fontSize: "13px", lineHeight: 1.85, color: "rgba(240,237,230,0.50)" }}>
            {artwork.description}
          </p>
        </div>
      )}

      {/* ── ENQUIRY CTA ──────────────────────────────────────── */}
      <div style={{ paddingTop: "28px", borderTop: "1px solid rgba(240,237,230,0.07)", marginTop: "28px" }}>
        <a
          href={`mailto:elizpresent@gmail.com?subject=${encodeURIComponent(`Artwork enquiry — ${artwork.title}`)}&body=${encodeURIComponent(`Hi Elizaveta,\n\nI am interested in "${artwork.title}".\n\n`)}`}
          className="artwork-enquiry-btn"
        >
          Enquire about this artwork
        </a>
      </div>
    </div>
  );
}

export default function PaintingPage({ params }: { params: { slug: string } }) {
  const artwork = artworks.find((a) => a.slug === params.slug);
  if (!artwork) notFound();

  const hasGallery = !!artwork.gallery?.length;

  // Adjacent navigable paintings
  const navigable = artworks.filter((a) => a.slug);
  const idx = navigable.findIndex((a) => a.slug === params.slug);
  const prev = navigable[idx - 1] ?? null;
  const next = navigable[idx + 1] ?? null;

  return (
    <>
      <style>{`
        .artwork-enquiry-btn {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,230,0.60);
          border: 1px solid rgba(240,237,230,0.18);
          padding: 9px 18px;
          transition: border-color 200ms ease, color 200ms ease;
          text-decoration: none;
        }
        .artwork-enquiry-btn:hover {
          border-color: rgba(240,237,230,0.42);
          color: rgba(240,237,230,0.90);
        }
      `}</style>
      <AtmosphericBg />

      <main style={{ position: "relative", zIndex: 1, minHeight: "100vh", color: "rgba(240,237,230,0.88)" }}>
        <Nav mode="dark" />

        {/* ── BREADCRUMB ─────────────────────────────────── */}
        <section className="pt-32 pb-10">
          <div className="container-site">
            <Link
              href="/art-paintings"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "rgba(240,237,230,0.32)",
                textTransform: "uppercase",
              }}
              className="transition-opacity hover:opacity-80"
            >
              ← Art / Paintings
            </Link>
          </div>
        </section>

        {/* ── VIEWER ─────────────────────────────────────── */}
        <section style={{ paddingBottom: "80px" }}>
          <div className="container-site">
            {hasGallery ? (
              /* Saatchi-style: thumbnails | main image | info */
              <PaintingViewer artwork={artwork} gallery={artwork.gallery!} />
            ) : (
              /* Simple layout: main image | info — no gallery yet */
              <>
                {/* Desktop */}
                <div
                  className="hidden lg:grid gap-16 items-start"
                  style={{ gridTemplateColumns: "1fr 300px" }}
                >
                  <div style={{ height: "72vh", position: "relative" }}>
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1400px) 65vw, 900px"
                      priority
                    />
                  </div>
                  <InfoPanel artwork={artwork} />
                </div>

                {/* Mobile */}
                <div className="lg:hidden space-y-8">
                  <div className="relative w-full" style={{ height: "70vw", minHeight: "280px" }}>
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <InfoPanel artwork={artwork} />
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── PREV / NEXT NAVIGATION ─────────────────────── */}
        <section style={{ borderTop: "1px solid rgba(240,237,230,0.07)" }}>
          <div className="container-site py-14">
            <div className="flex items-center justify-between gap-8">

              <div>
                {prev ? (
                  <Link href={`/art-paintings/${prev.slug}`} className="group transition-opacity hover:opacity-80">
                    <p style={{ fontSize: "9px", letterSpacing: "0.14em", color: "rgba(240,237,230,0.28)", textTransform: "uppercase", marginBottom: "6px" }}>
                      ← Previous
                    </p>
                    <p style={{ fontSize: "16px", fontStyle: "italic", color: "rgba(240,237,230,0.72)" }}>
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <Link
                    href="/art-paintings"
                    style={{ fontSize: "11px", letterSpacing: "0.14em", color: "rgba(240,237,230,0.32)", textTransform: "uppercase" }}
                    className="transition-opacity hover:opacity-80"
                  >
                    ← All Works
                  </Link>
                )}
              </div>

              <div className="text-right">
                {next && (
                  <Link href={`/art-paintings/${next.slug}`} className="group transition-opacity hover:opacity-80">
                    <p style={{ fontSize: "9px", letterSpacing: "0.14em", color: "rgba(240,237,230,0.28)", textTransform: "uppercase", marginBottom: "6px" }}>
                      Next →
                    </p>
                    <p style={{ fontSize: "16px", fontStyle: "italic", color: "rgba(240,237,230,0.72)" }}>
                      {next.title}
                    </p>
                  </Link>
                )}
              </div>

            </div>
          </div>
        </section>

        <Footer mode="dark" />
      </main>
    </>
  );
}
