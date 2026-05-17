import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Dark / Main site ──────────────────────────────
        ground:          "var(--color-ground)",
        "ground-raised": "var(--color-ground-raised)",
        "ground-mid":    "var(--color-ground-mid)",
        "text-primary":  "var(--color-text-primary)",
        "text-secondary":"var(--color-text-secondary)",
        "text-tertiary": "var(--color-text-tertiary)",
        accent:          "var(--color-accent)",
        hairline:        "var(--color-hairline)",
        // ── Gallery / Light mode ──────────────────────────
        "gallery-ground":  "var(--color-gallery-ground)",
        "gallery-raised":  "var(--color-gallery-raised)",
        "gallery-text":    "var(--color-gallery-text)",
        "gallery-mid":     "var(--color-gallery-mid)",
        "gallery-hairline":"var(--color-gallery-hairline)",
        "gallery-accent":  "var(--color-gallery-accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        ui:      ["var(--font-ui)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        // Display scale
        "display-xl": ["clamp(48px,8vw,120px)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "300" }],
        "display":    ["56px",  { lineHeight: "1.0",  letterSpacing: "-0.03em", fontWeight: "300" }],
        "display-sm": ["40px",  { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "300" }],
        "heading":    ["28px",  { lineHeight: "1.1",  letterSpacing: "-0.01em", fontWeight: "400" }],
        "subheading": ["20px",  { lineHeight: "1.2",  letterSpacing: "0",       fontWeight: "400" }],
        // Body scale
        "body":       ["16px",  { lineHeight: "1.6",  letterSpacing: "0",       fontWeight: "400" }],
        "label":      ["13px",  { lineHeight: "1.4",  letterSpacing: "0.06em",  fontWeight: "500" }],
        "caption":    ["12px",  { lineHeight: "1.5",  letterSpacing: "0.04em",  fontWeight: "400" }],
        "micro":      ["11px",  { lineHeight: "1.4",  letterSpacing: "0.08em",  fontWeight: "500" }],
      },
      spacing: {
        "section":    "120px",
        "section-sm": "72px",
      },
      maxWidth: {
        "site": "1440px",
        "content": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
