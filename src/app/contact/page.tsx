// ─────────────────────────────────────────────────────────────
// CONTACT PAGE
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
    <main className="bg-[var(--color-ground)] text-[var(--color-text-primary)]">
      <Nav mode="dark" />

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="pt-40 pb-16">
        <div className="container-site">
          <p className="type-label text-[var(--color-text-secondary)] mb-4">Contact</p>
          <h1 className="type-display text-[var(--color-text-primary)]">
            Let&apos;s create something.
          </h1>
        </div>
      </section>

      {/* ── CONTACT DETAILS ──────────────────────────────────── */}
      <section className="section-gap">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Left: contact info */}
            <div className="space-y-10">

              {/* Email */}
              <div>
                <p className="type-label text-[var(--color-text-secondary)] mb-3">Email</p>
                <a
                  href="mailto:elizpresent@gmail.com"
                  className="type-heading text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  elizpresent@gmail.com
                </a>
              </div>

              {/* Social */}
              <div>
                <p className="type-label text-[var(--color-text-secondary)] mb-3">Social</p>
                <div>
                  <a
                    href="https://www.instagram.com/elizartpath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-body text-[var(--color-text-secondary)] nav-link-underline hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    Instagram ↗
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/elizzhu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-body text-[var(--color-text-secondary)] nav-link-underline hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="type-label text-[var(--color-text-secondary)] mb-3">Location</p>
                <p className="type-body text-[var(--color-text-secondary)]">London, United Kingdom</p>
              </div>

            </div>

            {/* Right: enquiry type selector + mailto link */}
            <div>
              <p className="type-label text-[var(--color-text-secondary)] mb-6">Enquiry type</p>

              <div className="flex flex-wrap gap-3 mb-10">
                {enquiryTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`type-label rounded-full px-4 py-2 border transition-all duration-200 ${
                      selectedType === type
                        ? "bg-[var(--color-text-primary)] text-[var(--color-ground)] border-[var(--color-text-primary)]"
                        : "bg-transparent text-[var(--color-text-secondary)] border-[var(--color-hairline)] hover:border-[var(--color-text-secondary)]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <p className="type-body text-[var(--color-text-secondary)] mb-8">
                Send an email with your enquiry type in the subject line. I respond
                to all relevant enquiries within a few days.
              </p>

              <a
                href={`mailto:elizpresent@gmail.com?subject=${encodeURIComponent(selectedType + " Enquiry")}`}
                className="btn-ghost-dark"
              >
                Send {selectedType} Enquiry
              </a>

              <p className="type-caption text-[var(--color-text-tertiary)] mt-6">
                Based in London (GMT). I aim to respond within 2–3 working days.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer mode="dark" />
    </main>
  );
}
