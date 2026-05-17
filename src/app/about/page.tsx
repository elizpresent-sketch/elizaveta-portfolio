// ─────────────────────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)]">
      <Nav mode="dark" />

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="pt-40 pb-14">
        <div className="container-site">
          <p
            className="type-label mb-4"
            style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.20em" }}
          >
            About
          </p>
          <h1 className="type-display text-[var(--color-text-primary)]">
            Elizaveta Zhuravleva
          </h1>
        </div>
      </section>

      {/* ── BIO + PORTRAIT ───────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Bio text — 7 columns */}
            <div className="lg:col-span-7">

              <p
                className="type-subheading text-[var(--color-text-primary)]"
                style={{ lineHeight: 1.45 }}
              >
                London-based creative producer, art director and visual artist working
                across live experience, image-making, spatial atmosphere and painting.
              </p>

              <div className="mt-8 space-y-5">
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(240,237,230,0.68)" }}>
                  Her work is driven by the idea of building emotional worlds — environments
                  where performance, light, sound, fashion, architecture and visual language
                  come together to create a physical response. Rather than treating an image
                  or event as a single outcome, she approaches each project as a constructed
                  atmosphere: something designed to be entered, felt and remembered.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(240,237,230,0.68)" }}>
                  She is the founder and creative producer of WAKE UP, an independent live
                  platform bringing together performance, music, fashion, visual art and
                  experimental cultural programming. Across its editions, WAKE UP has
                  developed as a space for transformation, ritual, body, identity and
                  contemporary performance.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(240,237,230,0.68)" }}>
                  Alongside live production, Elizaveta works with painting and visual
                  direction, exploring texture, perception, abstraction and the emotional
                  charge of material surfaces. Her practice moves between the cinematic and
                  the tactile, the staged and the instinctive, the image and the live moment.
                </p>
              </div>

              {/* Education */}
              <div className="mt-10 pt-8 border-t border-[var(--color-hairline)]">
                <p
                  className="type-label mb-5"
                  style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.18em" }}
                >
                  Education
                </p>
                <p
                  style={{ fontSize: "15px", color: "rgba(240,237,230,0.88)", lineHeight: 1.5 }}
                >
                  BA (Hons) Design for Art Direction
                </p>
                <p
                  style={{ fontSize: "13px", color: "rgba(240,237,230,0.48)", marginTop: "4px", lineHeight: 1.5 }}
                >
                  London College of Communication, UAL
                </p>
              </div>

              <div className="mt-10">
                <Link href="/contact" className="btn-ghost-dark">
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Portrait — 4 columns, aligned to top of bio */}
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-1">
              <div className="card-img-wrap relative" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/portrait.png"
                  alt="Elizaveta Zhuravleva"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
