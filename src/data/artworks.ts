// ─────────────────────────────────────────────────────────────
// ARTWORK DATA — Elizaveta Zhuravleva
// All primary images use the *-transparent.png variants.
// Meditation removed — file was mismatched; will be restored
// once a correct transparent export is available.
// ─────────────────────────────────────────────────────────────

export type ArtworkStatus = "available" | "sold" | "installed" | "nfs";

export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  status: ArtworkStatus;
  statusLabel: string;
  image: string;
  price?: string;
  series?: string;
  location?: string;
  edition?: string;
  notes?: string;
  // Individual page fields
  slug?: string;        // e.g. "to-the-sun" → /art-paintings/to-the-sun
  description?: string; // 2–4 sentences about the work
  gallery?: string[];   // detail images; detail-01 = main image repeated first
}

// ── SELECTED WORKS ─────────────────────────────────────────────
// Order matches the user-approved display list (May 2026).
export const artworks: Artwork[] = [
  // 1 ─────────────────────────────────────────────────────────
  {
    id: "painting-01",
    title: "To the Sun",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    price: "£3,200",
    image: "/images/painting-to-the-sun-transparent.webp",
    slug: "to-the-sun",
    description:
      "A vertical surge of colour cuts through darkness, as if the canvas were moving toward light. The work suggests a passage between two states: the dense gravity of what keeps us earthbound and the bright pull of exposure, clarity and transcendence.",
    gallery: [
      "/images/painting-01-gallery/painting-01-detail-01.webp",
      "/images/painting-01-gallery/painting-01-detail-02.webp",
      "/images/painting-01-gallery/painting-01-detail-03.webp",
      "/images/painting-01-gallery/painting-01-detail-04.webp",
      "/images/painting-01-gallery/painting-01-detail-05.webp",
    ],
  },
  // 2 ─────────────────────────────────────────────────────────
  {
    id: "painting-02",
    title: "Artist's Fate",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,800",
    image: "/images/painting-artists-fate-transparent.webp",
    slug: "artists-fate",
    description:
      "Artist's Fate moves from structure into lift-off. Warm yellows open possibility, measured reds sharpen focus, and ocean blues hold the composition in tension. The painting reads as a daily signal for ambition, courage and movement.",
    gallery: [
      "/images/painting-02-gallery/painting-02-detail-01.webp",
      "/images/painting-02-gallery/painting-02-detail-02.webp",
      "/images/painting-02-gallery/painting-02-detail-03.webp",
      "/images/painting-02-gallery/painting-02-detail-04.webp",
      "/images/painting-02-gallery/painting-02-detail-05.webp",
    ],
  },
  // 3 ─────────────────────────────────────────────────────────
  {
    id: "painting-03",
    title: "Boundless",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,200",
    image: "/images/painting-boundless-transparent.webp",
    slug: "boundless",
    description:
      "Boundless expands through colour, transparency and sweeping movement. The surface feels open yet unstable, as if the painting is pushing past its own edges. It explores freedom as a physical and emotional condition: a refusal to stay contained.",
    gallery: [
      "/images/painting-03-gallery/painting-03-detail-01.webp",
      "/images/painting-03-gallery/painting-03-detail-02.webp",
      "/images/painting-03-gallery/painting-03-detail-03.webp",
      "/images/painting-03-gallery/painting-03-detail-04.webp",
      "/images/painting-03-gallery/painting-03-detail-05.webp",
      "/images/painting-03-gallery/painting-03-detail-06.webp",
    ],
  },
  // 4 ─────────────────────────────────────────────────────────
  {
    id: "painting-05",
    title: "Multi U",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "130 × 170 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,400",
    image: "/images/painting-multi-u-transparent.webp",
    slug: "multi-u",
    description:
      "The title Multi U points to the idea of the multiverse: not one fixed reality, but many parallel versions branching through choice, accident and encounter. The central ring reads as an opening in space-time, while colour fields, fragments and traces suggest different possible worlds coexisting in one fragile membrane.",
    gallery: [
      "/images/painting-05-gallery/painting-05-detail-01.webp",
      "/images/painting-05-gallery/painting-05-detail-02.webp",
      "/images/painting-05-gallery/painting-05-detail-03.webp",
      "/images/painting-05-gallery/painting-05-detail-04.webp",
      "/images/painting-05-gallery/painting-05-detail-05.webp",
      "/images/painting-05-gallery/painting-05-detail-06.webp",
    ],
  },
  // 5 ─────────────────────────────────────────────────────────
  {
    id: "painting-08",
    title: "Energy Explosion",
    year: "2024",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    image: "/images/painting-energy-explosion-transparent.webp",
    slug: "energy-explosion",
    description:
      "Energy Explosion channels pure force into image — colour colliding outward from a compressed centre, paint applied with velocity and pressure. The work captures the moment of release: the instant energy stops being held and begins to move through the world.",
  },
  // 6 ─────────────────────────────────────────────────────────
  {
    id: "painting-09",
    title: "Calm",
    year: "2024",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    image: "/images/painting-calm-transparent.webp",
    slug: "calm",
    description:
      "Calm holds a field of restrained colour in suspension. Movement is present but settled — the canvas breathes rather than surges. The work explores stillness not as absence but as gathered clarity, the moment after resolution when everything is present and nothing needs to change.",
  },
  // 7 ─────────────────────────────────────────────────────────
  {
    id: "painting-07",
    title: "Holy Mary",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "130 × 110 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,400",
    image: "/images/painting-holy-mary-transparent.webp",
    slug: "holy-mary",
    description:
      "Holy Mary brings together sacred atmosphere, fractured colour and symbolic white forms. The painting feels devotional but unstable, moving between protection, rupture and apparition. It explores holiness as something intense, imperfect and embodied.",
  },
  // 8 ─────────────────────────────────────────────────────────
  {
    id: "painting-06",
    title: "Current Joy",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "150 × 150 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,000",
    image: "/images/painting-current-joy-transparent.webp",
    slug: "current-joy",
    description:
      "Current Joy is bright, immediate and charged with movement. Its lighter field holds flashes of colour, soft collisions and open gestures that suggest emotional release. The work feels like a temporary state of clarity: joy caught while still moving.",
  },
  // 9 ─────────────────────────────────────────────────────────
  // No slug yet — detail page will be added when gallery images are ready.
  {
    id: "painting-bermuda-triangle",
    title: "Bermuda Triangle",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "150 × 140 cm",
    status: "available",
    statusLabel: "Available",
    image: "/images/bermuda-triangle-transparent.webp",
  },
  // 10 ────────────────────────────────────────────────────────
  // No slug yet — detail page will be added when gallery images are ready.
  {
    id: "painting-the-beginning-of-us",
    title: "The Beginning of Us",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "190 × 122 cm",
    status: "available",
    statusLabel: "Available",
    image: "/images/the-beginning-of-us-transparent.webp",
  },
];

// ── INSTALLED WORKS ────────────────────────────────────────────
export const installedWorks: Artwork[] = [];

// ── AVAILABLE WORKS ───────────────────────────────────────────
export const availableWorks = artworks.filter((a) => a.status === "available");
