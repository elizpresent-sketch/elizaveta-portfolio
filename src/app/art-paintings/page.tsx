// ─────────────────────────────────────────────────────────────
// ART / PAINTINGS PAGE — Dark atmospheric viewing-room
// ─────────────────────────────────────────────────────────────

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ArtworkCard } from "@/components/ui/ArtworkCard";
import { artworks } from "@/data/artworks";

export const metadata = {
  title: "Selected Works — Elizaveta Zhuravleva",
  description: "Selected paintings by Elizaveta Zhuravleva. Acrylic on canvas. London, 2022–present.",
};

export default function ArtPaintingsPage() {
  return (
    <>
      {/* ── FIXED ATMOSPHERIC BACKGROUND ─────────────────────── */}
      {/*
        Multiple soft colour fields, positioned around the page edges and
        between sections so they breathe behind the works.
        All at very low opacity — atmosphere, not decoration.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: [
            // Warm amber — top-right corner
            "radial-gradient(ellipse 52% 36% at 92% 6%,  rgba(110, 44, 12,  0.14) 0%, transparent 65%)",
            // Warm dark-red — right edge mid
            "radial-gradient(ellipse 28% 40% at 98% 52%, rgba(80,  16, 12,  0.09) 0%, transparent 55%)",
            // Warm amber — bottom-right
            "radial-gradient(ellipse 35% 30% at 88% 96%, rgba(90,  42, 8,   0.09) 0%, transparent 55%)",
            // Warm dark — bottom-left (no blue)
            "radial-gradient(ellipse 40% 35% at 5%  90%, rgba(55,  24, 8,   0.08) 0%, transparent 60%)",
            // Near-black warm base
            "#0B0B0A",
          ].join(", "),
        }}
      />

      {/* ── Mobile card caption sizing ─────────────────────── */}
      <style>{`
        @media (max-width: 767px) {
          /* Tighter captions in 2-col mobile painting grid */
          .artwork-caption-title  { font-size: 11px !important; }
          .artwork-caption-detail { font-size: 9px !important; }
        }
      `}</style>

      <main style={{ position: "relative", zIndex: 1, minHeight: "100vh", color: "rgba(240,237,230,0.88)" }}>
        <Nav mode="dark" />

        {/* ── PAGE HEADER ────────────────────────────────────── */}
        <section className="pt-40 pb-12">
          <div className="container-site">
            <p
              className="type-label mb-4"
              style={{ color: "rgba(240,237,230,0.35)", letterSpacing: "0.20em" }}
            >
              Art / Paintings
            </p>
            <h1 className="type-page-title" style={{ color: "rgba(240,237,230,0.92)" }}>
              Selected Works
            </h1>
            <p
              className="type-subheading mt-4 max-w-xl"
              style={{ color: "rgba(240,237,230,0.36)" }}
            >
              Acrylic on canvas. London, 2022–present.
            </p>
            <div className="mt-8">
              <a
                href="/catalogue"
                className="btn-ghost-dark"
                style={{ borderColor: "rgba(240,237,230,0.4)", color: "rgba(240,237,230,0.9)" }}
              >
                View Full Catalogue →
              </a>
            </div>
          </div>
        </section>

        <div
          className="divider container-site"
          style={{ background: "rgba(240,237,230,0.07)" }}
        />

        {/* ── WORKS GRID ─────────────────────────────────────── */}
        <section style={{ paddingTop: "56px", paddingBottom: "96px" }}>
          <div className="container-site">
            {/* 2-col on mobile, 2-col tablet, 3-col desktop */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-16">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────── */}
        <section
          className="section-gap border-t"
          style={{ borderColor: "rgba(240,237,230,0.07)" }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p
                  className="type-label mb-4"
                  style={{ color: "rgba(240,237,230,0.35)", letterSpacing: "0.20em" }}
                >
                  Contact
                </p>
                <h2 className="type-section-title" style={{ color: "rgba(240,237,230,0.90)" }}>
                  Enquiries Welcome
                </h2>
                <p className="type-body mt-6 max-w-md" style={{ color: "rgba(240,237,230,0.46)" }}>
                  For enquiries regarding works, exhibitions or commissions, please get in touch directly.
                </p>
                <div className="mt-8">
                  <a
                    href="mailto:elizpresent@gmail.com?subject=Artwork Enquiry"
                    className="btn-ghost-dark"
                  >
                    elizpresent@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer mode="dark" />
      </main>
    </>
  );
}
