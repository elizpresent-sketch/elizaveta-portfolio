// ─────────────────────────────────────────────────────────────
// ProjectHero — poster image + YouTube link
// Clean editorial presentation; no YouTube branding on page.
// ─────────────────────────────────────────────────────────────

import Image from "next/image";

interface ProjectHeroProps {
  image: string;
  alt: string;
  youtubeUrl: string;
}

export function ProjectHero({ image, alt, youtubeUrl }: ProjectHeroProps) {
  return (
    <div>
      {/* Poster image */}
      <div className="card-img-wrap relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, calc(100vw - 80px)"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(11,11,10,0.48) 0%, rgba(11,11,10,0.08) 55%, transparent 100%)" }}
        />
      </div>

      {/* YouTube link — right-aligned, small, editorial */}
      <div className="flex justify-end mt-3">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-text-link"
          style={{ fontSize: "10px", letterSpacing: "0.16em", color: "rgba(240,237,230,0.42)" }}
        >
          VIEW ON YOUTUBE ↗
        </a>
      </div>
    </div>
  );
}
