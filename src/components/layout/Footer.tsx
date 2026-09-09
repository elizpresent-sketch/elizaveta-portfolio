// ─────────────────────────────────────────────────────────────
// Footer — site-wide footer
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import { FINAL_PORTFOLIO_URL } from "@/data/site";

interface FooterProps {
  mode?: "dark" | "gallery";
}

export function Footer({ mode = "dark" }: FooterProps) {
  const isGallery = mode === "gallery";
  const border = isGallery ? "border-[var(--color-gallery-hairline)]" : "border-[var(--color-hairline)]";
  const textPri = isGallery ? "text-[var(--color-gallery-text)]" : "text-[var(--color-text-primary)]";
  const textSec = isGallery ? "text-[var(--color-gallery-mid)]" : "text-[var(--color-text-secondary)]";

  return (
    <footer className={`border-t ${border} section-gap-sm`}>
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left: name + descriptor */}
          <div>
            <p className={`type-label ${textPri} mb-1`}>Elizaveta Zhuravleva</p>
            <p className={`type-caption ${textSec}`}>
              Creative Producer · Art Director · Visual Artist · London
            </p>
          </div>

          {/* Right: nav links — mirrors top navigation */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-end">
            <Link href="/work"    className={`btn-text-link ${textSec}`}>Work</Link>
            <Link href="/about"  className={`btn-text-link ${textSec}`}>About</Link>
            <Link href="/contact" className={`btn-text-link ${textSec}`}>Contact</Link>
            {FINAL_PORTFOLIO_URL && (
              <a
                href={FINAL_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-text-link ${textSec}`}
              >
                Final portfolio
              </a>
            )}
          </div>
        </div>

        {/* Bottom strip */}
        <div className={`mt-12 pt-6 border-t ${border} flex flex-col sm:flex-row justify-between gap-2`}>
          <p className={`type-micro ${textSec}`}>
            © {new Date().getFullYear()} Elizaveta Zhuravleva
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/elizartpath/"
              target="_blank"
              rel="noopener noreferrer"
              className={`type-micro ${textSec} nav-link-underline`}
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/elizzhu/"
              target="_blank"
              rel="noopener noreferrer"
              className={`type-micro ${textSec} nav-link-underline`}
            >
              LinkedIn
            </a>
            <a
              href="mailto:elizpresent@gmail.com"
              className={`type-micro ${textSec} nav-link-underline`}
            >
              elizpresent@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
