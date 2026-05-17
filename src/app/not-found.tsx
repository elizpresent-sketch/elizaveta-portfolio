// ─────────────────────────────────────────────────────────────
// 404 NOT FOUND PAGE
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)] min-h-screen flex flex-col">
      <Nav mode="dark" />
      <div className="flex-1 flex items-center justify-center">
        <div className="container-site text-center">
          <p className="type-label text-[var(--color-text-secondary)] mb-4">404</p>
          <h1 className="type-display text-[var(--color-text-primary)]">Page not found</h1>
          <p className="type-body text-[var(--color-text-secondary)] mt-4">
            This page doesn&apos;t exist or has moved.
          </p>
          <div className="mt-8">
            <Link href="/" className="btn-ghost-dark">
              Back to home
            </Link>
          </div>
        </div>
      </div>
      <Footer mode="dark" />
    </main>
  );
}
