"use client";

// ─────────────────────────────────────────────────────────────
// CampaignImageViewer — compact horizontal viewer + thumbnail strip
// Used by: /projects/experimental-music-campaign
//
// Layout:
//   ┌──────────────────────────────────────────────┐
//   │  ←   selected image (object-contain)      →  │  360px desktop / 300px mobile
//   └──────────────────────────────────────────────┘
//       [ th ][ th ][ th ][ th ][ th ][ th ]         centered thumbnails
//
// No fill. No object-cover. No cropping.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";

interface CampaignImageViewerProps {
  images: string[];
}

export function CampaignImageViewer({ images }: CampaignImageViewerProps) {
  const [selected, setSelected] = useState(0);

  const prev = () => setSelected((i) => (i - 1 + images.length) % images.length);
  const next = () => setSelected((i) => (i + 1) % images.length);

  return (
    <>
      <style>{`
        /* Main image frame — compact, not a second hero */
        .civ-main { height: 360px; }
        @media (max-width: 768px) { .civ-main { height: 300px; } }

        /* Arrows — subtle circles, do not compete with the image */
        .civ-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.30);
          border: 1px solid rgba(255, 255, 255, 0.10);
          color: rgba(255, 255, 255, 0.60);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 13px;
          line-height: 1;
          transition: background 180ms ease, border-color 180ms ease, color 180ms ease;
          z-index: 2;
        }
        .civ-arrow:hover {
          background: rgba(0, 0, 0, 0.60);
          border-color: rgba(255, 255, 255, 0.34);
          color: rgba(255, 255, 255, 0.90);
        }

        /* Thumbnails — 80×56px, opacity distinguishes active */
        .civ-thumb {
          flex-shrink: 0;
          width: 80px;
          height: 56px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(0, 0, 0, 0.40);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          opacity: 0.40;
          transition: border-color 180ms ease, opacity 180ms ease;
        }
        .civ-thumb:hover {
          border-color: rgba(255, 255, 255, 0.26);
          opacity: 0.68;
        }
        .civ-thumb.active {
          border-color: rgba(255, 255, 255, 0.60);
          opacity: 1;
        }
      `}</style>

      {/* ── MAIN IMAGE FRAME ───────────────────────────────── */}
      <div
        className="civ-main relative w-full flex items-center justify-center overflow-hidden"
        style={{
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[selected]}
          alt=""
          className="max-w-full max-h-full w-auto h-auto object-contain block"
        />

        <button
          className="civ-arrow"
          style={{ left: "12px" }}
          onClick={prev}
          aria-label="Previous image"
        >
          ←
        </button>

        <button
          className="civ-arrow"
          style={{ right: "12px" }}
          onClick={next}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {/* ── THUMBNAIL STRIP ────────────────────────────────── */}
      {/* justify-center centres the row when thumbnails don't overflow */}
      <div className="flex justify-center gap-3 mt-6 pb-1 overflow-x-auto">
        {images.map((src, i) => (
          <button
            key={src}
            className={`civ-thumb${i === selected ? " active" : ""}`}
            onClick={() => setSelected(i)}
            aria-label={`View image ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="max-w-full max-h-full w-auto h-auto object-contain block"
            />
          </button>
        ))}
      </div>
    </>
  );
}
