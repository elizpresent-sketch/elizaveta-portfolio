// ─────────────────────────────────────────────────────────────
// Root Layout — applies to all pages except gallery mode override
// FONT SETUP: Replace Google Fonts imports with next/font/local
// once Editorial New and Suisse Int'l are licensed and self-hosted
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import "@/styles/globals.css";
// REPLACE: Once licensed fonts are available, uncomment and use:
// import localFont from "next/font/local";
// const editorialNew = localFont({ src: "../fonts/EditorialNew-Light.woff2", variable: "--font-display" });
// const suisseIntl = localFont({ src: "../fonts/SuisseIntl-Regular.woff2", variable: "--font-ui" });

// Instrument Serif — editorial serif, used selectively for closing / intimate moments
// DM Sans — clean modern sans for UI, labels, metadata, body
// Syne — sharp contemporary display grotesque for identity / wordmark / section headings
//         (designed for Synesthésie cultural centre; distinctive geometric character)
import { Instrument_Serif, DM_Sans, Syne } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ui",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sharp",
  display: "swap",
});

export const metadata: Metadata = {
  // EDIT: Update title and description as needed
  title: "Elizaveta Zhuravleva — Creative Producer / Art Director / Visual Artist",
  description:
    "London-based creative producer, art director and visual artist working across live experience, performance, visual direction and painting.",
  // EDIT: Add your domain here once deployed
  metadataBase: new URL("https://elizaveta.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    // REPLACE: add a real OG image at public/og-image.jpg
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
