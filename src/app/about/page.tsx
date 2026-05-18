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
      {/* ── ENTRANCE ANIMATION STYLES (scoped to this page) ──── */}
      <style>{`
        @keyframes about-title-reveal {
          from { clip-path: inset(0 100% 0 0); opacity: 0.5; }
          to   { clip-path: inset(0 0%   0 0); opacity: 1;   }
        }
        @keyframes about-label-fade {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes about-edu-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .about-label-anim {
          animation: about-label-fade 0.9s ease 0s both;
        }
        .about-title-anim {
          /* Slow, cinematic left-to-right reveal */
          animation: about-title-reveal 3.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
        .about-edu-anim {
          animation: about-edu-rise 1.8s cubic-bezier(0.16, 1, 0.3, 1) 1.0s both;
        }
      `}</style>

      <Nav mode="dark" />

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      {/*
        Title sits inside a 12-col grid so it aligns precisely with
        the left (7-col) bio-text column below. This prevents it from
        stretching awkwardly toward the portrait column.
      */}
      <section className="pt-40 pb-4">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p
                className="about-label-anim type-label mb-4"
                style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.20em" }}
              >
                About
              </p>
              <h1
                className="about-title-anim type-page-title text-[var(--color-text-primary)]"
                style={{
                  fontSize:      "clamp(32px, 4.2vw, 64px)",
                  lineHeight:    0.95,
                  letterSpacing: "0.06em",
                }}
              >
                Elizaveta Zhuravleva (Eliz)
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIO + PORTRAIT ───────────────────────────────────── */}
      <section className="pt-12 pb-32">
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
                <p className="type-body text-[var(--color-text-secondary)]">
                  Her work is driven by the idea of building emotional worlds — environments
                  where performance, light, sound, fashion, architecture and visual language
                  come together to create a physical response. Rather than treating an image
                  or event as a single outcome, she approaches each project as a constructed
                  atmosphere: something designed to be entered, felt and remembered.
                </p>
                <p className="type-body text-[var(--color-text-secondary)]">
                  She is the founder and creative producer of WAKE UP, an independent live
                  platform bringing together performance, music, fashion, visual art and
                  experimental cultural programming. Across its editions, WAKE UP has
                  developed as a space for transformation, ritual, body, identity and
                  contemporary performance.
                </p>
                <p className="type-body text-[var(--color-text-secondary)]">
                  Alongside live production, Elizaveta works with painting and visual
                  direction, exploring texture, perception, abstraction and the emotional
                  charge of material surfaces. Her practice moves between the cinematic and
                  the tactile, the staged and the instinctive, the image and the live moment.
                </p>
              </div>

              {/* Education — delayed fade/slide entrance */}
              <div className="about-edu-anim mt-10 pt-8 border-t border-[var(--color-hairline)]">
                <p
                  className="type-label mb-5"
                  style={{ color: "rgba(240,237,230,0.38)", letterSpacing: "0.18em" }}
                >
                  Education
                </p>
                <p className="type-body text-[var(--color-text-primary)]">
                  BA (Hons) Design for Art Direction
                </p>
                <p className="type-caption text-[var(--color-text-tertiary)] mt-1">
                  London College of Communication, UAL
                </p>

                <div className="mt-5">
                  <p className="type-body text-[var(--color-text-primary)]">
                    Art &amp; Design Foundation
                  </p>
                  <p className="type-caption text-[var(--color-text-tertiary)] mt-1">
                    RUFA — Rome University of Fine Arts
                  </p>
                </div>
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
