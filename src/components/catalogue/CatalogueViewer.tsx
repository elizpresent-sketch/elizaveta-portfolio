// ─────────────────────────────────────────────────────────────
// CatalogueViewer — full-bleed iframe wrapper around the static
// flipbook (public/catalogue/index.html). The flipbook manages its
// own full-viewport layout (fixed positioning, hidden overflow),
// so it's isolated in an iframe rather than merged into the site's
// global styles. A back link overlays the top-left corner.
// ─────────────────────────────────────────────────────────────

"use client";

import Link from "next/link";
import { useEffect } from "react";

export function CatalogueViewer() {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "#100f0e" }}>
      <Link
        href="/"
        style={{
          position: "fixed",
          top: 18,
          left: 18,
          zIndex: 20,
          fontFamily: "var(--font-ui), sans-serif",
          fontSize: 11,
          letterSpacing: "0.18em",
          color: "rgba(240,237,230,0.55)",
          textDecoration: "none",
        }}
      >
        ← ELIZ.WORLD
      </Link>
      <iframe
        src="/catalogue/index.html"
        title="ELIZ — The Art Catalogue 2022–2025"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
