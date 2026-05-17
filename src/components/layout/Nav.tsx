// ─────────────────────────────────────────────────────────────
// Nav — persistent top navigation
// Transparent on hero images, ground-raised when scrolled
// ─────────────────────────────────────────────────────────────

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface NavProps {
  mode?: "dark" | "gallery";
}

export function Nav({ mode = "dark" }: NavProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isGallery = mode === "gallery";
  const bg = scrolled
    ? isGallery
      ? "bg-[var(--color-gallery-ground)] border-b border-[var(--color-gallery-hairline)]"
      : "bg-[var(--color-ground-raised)]"
    : "bg-transparent";

  const textCol = isGallery ? "text-[var(--color-gallery-text)]" : "text-[var(--color-text-primary)]";
  const textSec = isGallery ? "text-[var(--color-gallery-mid)]" : "text-[var(--color-text-secondary)]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}
        style={{ height: "72px" }}
      >
        <div className="container-site h-full flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className={`type-label ${textCol} nav-link-underline tracking-widest`}>
            {/* EDIT: This is the nav wordmark */}
            Elizaveta Zhuravleva
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`type-label nav-link-underline transition-colors duration-200 ${
                    active ? textCol : textSec
                  } hover:${textCol}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden ${textCol} p-2`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="type-label">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-40 ${
            isGallery ? "bg-[var(--color-gallery-ground)]" : "bg-[var(--color-ground)]"
          } flex flex-col justify-center px-8`}
        >
          <div className="space-y-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`type-display-sm ${textCol} block`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              href="/contact"
              className="btn-ghost-dark"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
