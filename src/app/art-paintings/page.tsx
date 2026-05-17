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
            "radial-gradient(ellipse 55% 38% at 92% 6%,  rgba(130, 52, 14,  0.18) 0%, transparent 65%)",
            // Deep blue — bottom-left
            "radial-gradient(ellipse 48% 52% at 4%  94%, rgba(14,  28,  90,  0.16) 0%, transparent 62%)",
            // Muted violet — top-left bleed
            "radial-gradient(ellipse 38% 40% at 2%  10%, rgba(72,  18,  68,  0.11) 0%, transparent 58%)",
            // Dark red — right edge, mid
            "radial-gradient(ellipse 28% 42% at 98% 52%, rgba(100, 18,  18,  0.10) 0%, transparent 55%)",
            // Warm amber pool — bottom-right
            "radial-gradient(ellipse 35% 30% at 88% 96%, rgba(110, 55,  10,  0.10) 0%, transparent 55%)",
            // Near-black base
            "#0B0B0A",
          ].join(", "),
        }}
      />

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
            <h1 className="type-display" style={{ color: "rgba(240,237,230,0.92)" }}>
              Selected Works
            </h1>
            <p
              className="type-subheading italic mt-4 max-w-xl"
              style={{ color: "rgba(240,237,230,0.36)" }}
            >
              Acrylic on canvas. London, 2022–present.
            </p>
          </div>
        </section>

        <div
          className="divider container-site"
          style={{ background: "rgba(240,237,230,0.07)" }}
        />

        {/* ── WORKS GRID ─────────────────────────────────────── */}
        <section style={{ paddingTop: "56px", paddingBottom: "96px" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
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
                <h2 className="type-display-sm" style={{ color: "rgba(240,237,230,0.90)" }}>
                  Enquiries welcome
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
