"use client";
// ─────────────────────────────────────────────────────────────
// PaintingViewer — Saatchi-style 3-column layout
// Thumbnails | Main image | Info panel
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import Image from "next/image";
import { Artwork } from "@/data/artworks";

interface Props {
  artwork: Artwork;
  gallery: string[];
}

export function PaintingViewer({ artwork, gallery }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      {/* ── DESKTOP: 3-column ──────────────────────────────── */}
      <div
        className="hidden lg:grid"
        style={{ gridTemplateColumns: "80px 1fr 300px", gap: "40px", alignItems: "start" }}
      >
        {/* Left — thumbnail column */}
        <div className="flex flex-col gap-2">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              aria-label={`View ${artwork.title} — image ${i + 1}`}
              className="relative overflow-hidden transition-all duration-200 focus:outline-none"
              style={{
                width: "80px",
                height: "80px",
                flexShrink: 0,
                border: `1px solid ${
                  i === selected
                    ? "rgba(240,237,230,0.55)"
                    : "rgba(240,237,230,0.1)"
                }`,
                opacity: i === selected ? 1 : 0.45,
                background: "rgba(240,237,230,0.02)",
              }}
            >
              <Image
                src={src}
                alt={`${artwork.title} — view ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        {/* Centre — main image, fits in viewport */}
        <div
          className="flex items-start justify-center"
          style={{ height: "72vh" }}
        >
          <div
            className="relative w-full h-full"
            style={{ maxWidth: "600px" }}
          >
            <Image
              src={gallery[selected]}
              alt={artwork.title}
              fill
              className="object-contain"
              sizes="(max-width: 1400px) 50vw, 600px"
              priority={selected === 0}
            />
          </div>
        </div>

        {/* Right — info panel */}
        <div className="space-y-7 pt-1">
          {/* Title + year */}
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

          {/* Medium + dimensions */}
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

          {/* Description */}
          {artwork.description && (
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid rgba(240,237,230,0.07)",
              }}
            >
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
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.85,
                  color: "rgba(240,237,230,0.50)",
                }}
              >
                {artwork.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── MOBILE: stacked ────────────────────────────────── */}
      <div className="lg:hidden space-y-8">

        {/* Main image */}
        <div className="relative w-full" style={{ height: "60vw", minHeight: "280px" }}>
          <Image
            src={gallery[selected]}
            alt={artwork.title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Thumbnail row — horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              aria-label={`View ${artwork.title} — image ${i + 1}`}
              className="relative overflow-hidden shrink-0 focus:outline-none"
              style={{
                width: "64px",
                height: "64px",
                border: `1px solid ${
                  i === selected
                    ? "rgba(240,237,230,0.55)"
                    : "rgba(240,237,230,0.1)"
                }`,
                opacity: i === selected ? 1 : 0.45,
              }}
            >
              <Image
                src={src}
                alt={`${artwork.title} — view ${i + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="space-y-5 pt-2">
          <div>
            <h1
              style={{
                fontSize: "22px",
                fontStyle: "italic",
                color: "rgba(240,237,230,0.92)",
                lineHeight: 1.3,
              }}
            >
              {artwork.title}
            </h1>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                color: "rgba(240,237,230,0.32)",
                marginTop: "8px",
                textTransform: "uppercase",
              }}
            >
              {artwork.year}
            </p>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.52)" }}>
            {artwork.medium} · {artwork.dimensions}
          </p>
          {artwork.description && (
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.85,
                color: "rgba(240,237,230,0.50)",
                paddingTop: "12px",
                borderTop: "1px solid rgba(240,237,230,0.07)",
              }}
            >
              {artwork.description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
