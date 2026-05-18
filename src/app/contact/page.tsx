// ─────────────────────────────────────────────────────────────
// CONTACT PAGE — Light / inverted palette
// Heading: var(--font-sharp), uppercase, no serif
// Layout: enquiry action first, contact info below
// ─────────────────────────────────────────────────────────────

"use client";

import { useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const enquiryTypes = [
  "General",
  "Live / Production",
  "Art Direction",
  "Artwork / Commission",
  "Press",
  "Collaboration",
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("General");

  return (
    <>
      {/* ── ATMOSPHERIC VIDEO BACKGROUND — light palette ──────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Reduce fog video on mobile — barely-there on small screens */
        @media (max-width: 767px) {
          .contact-fog-video { opacity: 0.13 !important; }
        }
        /* Social link rows — clean graphic element style */
        .contact-social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid var(--color-gallery-hairline);
          text-decoration: none;
          color: var(--color-gallery-text);
          transition: opacity 200ms ease;
        }
        .contact-social-link:first-child {
          border-top: 1px solid var(--color-gallery-hairline);
          margin-top: 4px;
        }
        .contact-social-link:hover { opacity: 0.62; }
        .contact-social-name {
          font-family: var(--font-ui);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          flex: 1;
        }
        /* SVG arrow — clean graphic, no emoji */
        .contact-social-arrow {
          opacity: 0.36;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
      ` }} />

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Pale off-white base */}
        <div style={{ position: "absolute", inset: 0, background: "var(--color-gallery-ground)" }} />
        {/* Fog video — multiply blend */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="contact-fog-video"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.52,
            mixBlendMode: "multiply",
          }}
        >
          <source src="/videos/fog-updated.mp4" type="video/mp4" />
        </video>
      </div>

      <main
        style={{ position: "relative", zIndex: 1, color: "var(--color-gallery-text)" }}
      >
        <Nav mode="gallery" />

        {/* ── PAGE HEADER — compact, sharp font, no serif ──────── */}
        <section className="pt-32 pb-4">
          <div className="container-site">
            <p
              className="type-label mb-4"
              style={{ color: "var(--color-gallery-mid)" }}
            >
              Contact
            </p>
            <h1
              style={{
                fontFamily:    "var(--font-sharp)",
                fontSize:      "clamp(28px, 3.6vw, 52px)",
                fontWeight:    700,
                letterSpacing: "-0.02em",
                lineHeight:    1.0,
                textTransform: "uppercase",
                color:         "var(--color-gallery-text)",
              }}
            >
              Let&apos;s create something.
            </h1>
            <p
              className="type-body mt-4"
              style={{ color: "var(--color-gallery-mid)", maxWidth: "380px" }}
            >
              Choose an enquiry type or contact me directly.
            </p>
          </div>
        </section>

        {/* ── ENQUIRY ACTION — prioritised above contact details ── */}
        <section style={{ paddingTop: "28px", paddingBottom: "80px" }}>
          <div className="container-site">

            {/* Enquiry type label + pills */}
            <p
              className="type-label mb-4"
              style={{ color: "var(--color-gallery-mid)" }}
            >
              Enquiry type
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {enquiryTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`type-label rounded-full px-4 py-2 border transition-all duration-200 ${
                    selectedType === type
                      ? "bg-[var(--color-gallery-text)] text-[var(--color-gallery-ground)] border-[var(--color-gallery-text)]"
                      : "bg-transparent text-[var(--color-gallery-mid)] border-[var(--color-gallery-hairline)] hover:border-[var(--color-gallery-text)]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Send CTA */}
            <a
              href={`mailto:elizpresent@gmail.com?subject=${encodeURIComponent(selectedType + " Enquiry")}`}
              className="btn-ghost-light"
            >
              Send {selectedType} Enquiry
            </a>

            <p
              className="type-caption mt-5"
              style={{ color: "var(--color-gallery-mid)", opacity: 0.7 }}
            >
              Based in London (GMT). I aim to respond within 2–3 working days.
            </p>

            {/* ── Contact details — Email / Social / Location ────── */}
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14 pt-10"
              style={{ borderTop: "1px solid var(--color-gallery-hairline)" }}
            >

              {/* Email */}
              <div>
                <p
                  className="type-label mb-3"
                  style={{ color: "var(--color-gallery-mid)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:elizpresent@gmail.com"
                  className="type-heading transition-colors"
                  style={{ color: "var(--color-gallery-text)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gallery-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-gallery-text)")}
                >
                  elizpresent@gmail.com
                </a>
              </div>

              {/* Social */}
              <div>
                <p
                  className="type-label mb-3"
                  style={{ color: "var(--color-gallery-mid)" }}
                >
                  Social
                </p>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/elizartpath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  <span className="contact-social-name">Instagram</span>
                  {/* Clean SVG external-link arrow — no emoji */}
                  <svg className="contact-social-arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 9L9 2M9 2H4.5M9 2V6.5"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/elizzhu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span className="contact-social-name">LinkedIn</span>
                  <svg className="contact-social-arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 9L9 2M9 2H4.5M9 2V6.5"/>
                  </svg>
                </a>
              </div>

              {/* Location */}
              <div>
                <p
                  className="type-label mb-3"
                  style={{ color: "var(--color-gallery-mid)" }}
                >
                  Location
                </p>
                <p
                  className="type-body"
                  style={{ color: "var(--color-gallery-mid)" }}
                >
                  London, United Kingdom
                </p>
              </div>

            </div>
          </div>
        </section>

        <Footer mode="gallery" />
      </main>
    </>
  );
}
