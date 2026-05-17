// ─────────────────────────────────────────────────────────────
// PROJECT DATA — Elizaveta Zhuravleva
// EDIT THIS FILE to update project text, images and links
// ─────────────────────────────────────────────────────────────

export type ProjectCategory = "live" | "art-direction" | "paintings";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  location: string;
  role: string;
  shortDescription: string;
  fullDescription?: string;
  coverImage: string;
  images?: string[];
  tags?: string[];
  featured?: boolean;
  link?: string;
  // ── VIDEO ─────────────────────────────────────────────────────
  mediaType?: "image" | "video";
  videoUrl?: string;
  videoProvider?: "youtube" | "vimeo";
  videoEmbedUrl?: string;
  posterImage?: string;
  // ── ROUTING ───────────────────────────────────────────────────
  // Set to true when a dedicated /projects/[slug] page exists
  hasProjectPage?: boolean;
  // Set to true to hide from all rendered page lists until ready
  hidden?: boolean;
}

// ── LIVE / PRODUCTION PROJECTS ────────────────────────────────
export const liveProjects: Project[] = [
  {
    slug: "wake-up",
    title: "WAKE UP",
    category: "live",
    categoryLabel: "Live / Production",
    year: "2024–present",
    location: "London",
    role: "Founder / Creative Producer / Art Director",
    // EDIT: Update short description as needed
    shortDescription:
      "An independent live platform bringing together performance, music, fashion, visual art and spatial atmosphere.",
    fullDescription:
      "WAKE UP is an independent live platform I founded in London in 2024. Each edition is a curated collision of performance, music, fashion, visual art and atmosphere — conceived as a total environment rather than a conventional event. I oversee the creative direction, talent curation, spatial production and visual identity across every edition.",
    coverImage: "/images/wake-up-01.png",
    images: [
      "/images/wake-up-01.png",
      "/images/wake-up-02.jpg",
      "/images/wake-up-03.jpg",
    ],
    tags: ["Live", "Production", "Art Direction", "Fashion", "Performance"],
    featured: true,
    // ── VIDEO ──────────────────────────────────────────────────
    mediaType: "video",
    videoProvider: "youtube",
    videoUrl: "https://youtu.be/G7jIwAtj0p8?si=HfrGJrF0LH1XJ6UK",
    videoEmbedUrl: "https://www.youtube.com/embed/G7jIwAtj0p8",
    // posterImage: "/images/wake-up-poster.jpg",  // REPLACE: add a still if different from coverImage
  },
  // ADD MORE live projects here following the same structure
];

// ── ART DIRECTION / IMAGE PROJECTS ───────────────────────────
export const artDirectionProjects: Project[] = [
  {
    slug: "burning-house",
    title: "Burning House",
    category: "art-direction",
    categoryLabel: "Performance / Short Film",
    year: "2024",
    location: "London",
    role: "Producer · Live Director · Art Director · Performer",
    shortDescription:
      "A performance-led work conceived as a live action and directed for film — exploring domesticity, destruction, exposure and transformation.",
    coverImage: "/images/burning-house-01.png",
    images: ["/images/burning-house-01.png"],
    tags: ["Performance", "Film", "Art Direction"],
    featured: true,
    hasProjectPage: true,
    mediaType: "video",
    videoProvider: "youtube",
    videoUrl: "https://youtu.be/UCBlzexWNPk?si=OTENtYQe4GPMtDNL",
    videoEmbedUrl: "https://www.youtube.com/embed/UCBlzexWNPk",
  },
  {
    slug: "brdatn",
    title: "BRDÄTN",
    category: "art-direction",
    categoryLabel: "Performance",
    year: "2024",
    location: "London",
    role: "Concept · Live Direction · Performance",
    shortDescription:
      "A live performance work conceived and directed as a time-based event — choreography, visual language and pacing shaped in real time for both audience and camera.",
    coverImage: "/images/brdatn-01.png",
    images: ["/images/brdatn-01.png"],
    tags: ["Performance", "Live Direction", "Visual"],
    featured: true,
    hasProjectPage: true,
    mediaType: "video",
    videoProvider: "youtube",
    videoUrl: "https://youtu.be/Q2iR_FMRO_E",
    videoEmbedUrl: "https://www.youtube.com/embed/Q2iR_FMRO_E",
  },
  {
    slug: "fluid-energy",
    title: "Fluid Energy",
    category: "art-direction",
    categoryLabel: "Performance / Short Film",
    year: "2024",
    location: "London",
    role: "Producer · Live Director · Art Director · Performer",
    shortDescription:
      "A durational performance exploring physical constraint, vulnerability and the transformation of the body into an instrument of mark-making.",
    coverImage: "/images/fluid-energy-01.png",
    images: ["/images/fluid-energy-01.png"],
    tags: ["Performance", "Film", "Body"],
    featured: true,
    hasProjectPage: true,
    mediaType: "video",
    videoProvider: "youtube",
    videoUrl: "https://youtu.be/J_o-CgrRPwg?si=1ohCaNco9j_E7ZZC",
    videoEmbedUrl: "https://www.youtube.com/embed/J_o-CgrRPwg",
  },
  {
    slug: "experimental-music-campaign",
    title: "Experimental Music Campaign",
    category: "art-direction",
    categoryLabel: "Visual Campaign · Music / Performance",
    year: "2024",
    location: "London",
    role: "Visual Director · Art Director",
    shortDescription:
      "A visual campaign and image-making project developed for an experimental music context, combining performance, atmosphere, body, styling and visual direction.",
    coverImage: "/images/brdatn-01.png", // REPLACE: add real campaign cover image
    tags: ["Campaign", "Music", "Visual Direction"],
    featured: false,
    hasProjectPage: false,
    hidden: true, // hidden until real images and copy are provided
  },
];

// ── ALL PROJECTS (for Work overview page) ────────────────────
export const allProjects: Project[] = [
  ...liveProjects,
  ...artDirectionProjects,
];

// ── WAKE UP EDITIONS (for project page) ──────────────────────
export const wakeUpEditions = [
  {
    number: "01",
    id: "edition-01",
    title: "WAKE UP 01",
    subtitle: undefined as string | undefined,
    location: "London",
    date: "2025",
    description:
      "A live cultural platform bringing together performance, music, fashion, visual art and spatial atmosphere.",
    image: "/images/wake-up-01.png",
    videoEmbedUrl: "https://www.youtube.com/embed/G7jIwAtj0p8?rel=0&modestbranding=1" as string | undefined,
    youtubeUrl: "https://youtu.be/G7jIwAtj0p8" as string | undefined,
    gallery: [
      "/images/wake-up-01-gallery-01.png",
      "/images/wake-up-01-gallery-02.png",
      "/images/wake-up-01-gallery-03.png",
    ],
  },
  {
    number: "02",
    id: "edition-02",
    title: "WAKE UP 02",
    subtitle: "MORPHOSIS" as string | undefined,
    location: "London",
    date: "2025",
    description:
      "An edition focused on transformation, shifting identities, biotech, body, performance and image.",
    image: "/images/wake-up-02.jpeg",
    videoEmbedUrl: "https://www.youtube.com/embed/yfipsiLeVcA?rel=0&modestbranding=1" as string | undefined,
    youtubeUrl: "https://youtu.be/yfipsiLeVcA" as string | undefined,
    gallery: [
      "/images/wake-up-02-gallery-01.png",
      "/images/wake-up-02-gallery-02.png",
      "/images/wake-up-02-gallery-03.png",
    ],
  },
  {
    number: "03",
    id: "edition-03",
    title: "WAKE UP 03",
    subtitle: undefined as string | undefined,
    location: "Artworks East · London",
    date: "2025",
    description:
      "A seven-day exhibition and performance programme developed with Artworks East, including performances, workshops and live events.",
    image: "/images/wake-up-03.jpeg",
    videoEmbedUrl: undefined as string | undefined,
    youtubeUrl: undefined as string | undefined,
    gallery: [
      "/images/wake-up-03-gallery-01.png",
      "/images/wake-up-03-gallery-02.png",
      "/images/wake-up-03-gallery-03.png",
    ],
  },
];

// ── WAKE UP PROJECT (convenience export for project page) ────
export const wakeUpProject = liveProjects.find((p) => p.slug === "wake-up")!;

// ── WAKE UP PRESS LINKS ───────────────────────────────────────
// url: null = link not yet available (renders as non-clickable row)
export const wakeUpPress = [
  { publication: "QX Magazine",       title: "Feature / coverage", url: null as string | null },
  { publication: "La Fomon",          title: "Feature / coverage", url: null as string | null },
  { publication: "Coldblood Magazine", title: "Feature / coverage", url: null as string | null },
  { publication: "FAD Magazine",      title: "Feature / coverage", url: null as string | null },
];
