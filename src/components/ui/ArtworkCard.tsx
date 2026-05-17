// ─────────────────────────────────────────────────────────────
// ArtworkCard — dark atmospheric presentation
// Paintings sit naturally on the page. Subtle hover lift.
// No commerce elements.
// Links to individual painting page when artwork.slug is set.
// ─────────────────────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { Artwork } from "@/data/artworks";

interface ArtworkCardProps {
  artwork: Artwork;
  onEnquire?: (artwork: Artwork) => void;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  const inner = (
    <>
      {/* Image — no overflow clip, transparent bg, subtle hover lift + glow */}
      <div
        className="relative transition-transform duration-700 ease-out group-hover:-translate-y-1.5"
        style={{ aspectRatio: "3/4" }}
      >
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-contain transition-all duration-700 group-hover:brightness-105 group-hover:drop-shadow-[0_16px_48px_rgba(255,220,160,0.08)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Catalogue caption */}
      <div
        className="mt-4 space-y-1 transition-opacity duration-500 group-hover:opacity-100"
        style={{ opacity: 0.85 }}
      >
        <p style={{ fontSize: "13px", fontStyle: "italic", letterSpacing: "0.01em", color: "rgba(240,237,230,0.88)", lineHeight: 1.4 }}>
          {artwork.title}, {artwork.year}
        </p>
        <p style={{ fontSize: "11px", letterSpacing: "0.04em", color: "rgba(240,237,230,0.42)", lineHeight: 1.5 }}>
          {artwork.medium}
        </p>
        <p style={{ fontSize: "11px", letterSpacing: "0.04em", color: "rgba(240,237,230,0.42)", lineHeight: 1.5 }}>
          {artwork.dimensions}
        </p>
        {artwork.slug && (
          <p
            className="transition-opacity duration-300 group-hover:opacity-100"
            style={{ fontSize: "10px", letterSpacing: "0.16em", color: "rgba(240,237,230,0.4)", opacity: 0, paddingTop: "4px" }}
          >
            VIEW WORK →
          </p>
        )}
      </div>
    </>
  );

  if (artwork.slug) {
    return (
      <Link href={`/art-paintings/${artwork.slug}`} className="block group cursor-pointer">
        {inner}
      </Link>
    );
  }

  return (
    <div className="group cursor-default">
      {inner}
    </div>
  );
}
