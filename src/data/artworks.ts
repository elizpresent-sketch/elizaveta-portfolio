// ─────────────────────────────────────────────────────────────
// ARTWORK DATA — Elizaveta Zhuravleva
// Image file numbers are the canonical source of truth.
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
export const artworks: Artwork[] = [
  {
    id: "painting-01",
    title: "To the Sun",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    price: "£3,200",
    image: "/images/painting-01.png",
    slug: "to-the-sun",
    description:
      "A vertical surge of colour cuts through darkness, as if the canvas were moving toward light. The work suggests a passage between two states: the dense gravity of what keeps us earthbound and the bright pull of exposure, clarity and transcendence.",
    gallery: [
      "/images/painting-01-gallery/painting-01-detail-01.png",
      "/images/painting-01-gallery/painting-01-detail-02.png",
      "/images/painting-01-gallery/painting-01-detail-03.png",
      "/images/painting-01-gallery/painting-01-detail-04.png",
      "/images/painting-01-gallery/painting-01-detail-05.png",
    ],
  },
  {
    id: "painting-02",
    title: "Artist's Fate",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,800",
    image: "/images/painting-02.png",
    slug: "artists-fate",
    description:
      "Artist's Fate moves from structure into lift-off. Warm yellows open possibility, measured reds sharpen focus, and ocean blues hold the composition in tension. The painting reads as a daily signal for ambition, courage and movement.",
    gallery: [
      "/images/painting-02-gallery/painting-02-detail-01.png",
      "/images/painting-02-gallery/painting-02-detail-02.png",
      "/images/painting-02-gallery/painting-02-detail-03.png",
      "/images/painting-02-gallery/painting-02-detail-04.png",
      "/images/painting-02-gallery/painting-02-detail-05.png",
    ],
  },
  {
    id: "painting-03",
    title: "Boundless",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,200",
    image: "/images/painting-03.png",
    slug: "boundless",
    description:
      "Boundless expands through colour, transparency and sweeping movement. The surface feels open yet unstable, as if the painting is pushing past its own edges. It explores freedom as a physical and emotional condition: a refusal to stay contained.",
    gallery: [
      "/images/painting-03-gallery/painting-03-detail-01.png",
      "/images/painting-03-gallery/painting-03-detail-02.png",
      "/images/painting-03-gallery/painting-03-detail-03.png",
      "/images/painting-03-gallery/painting-03-detail-04.png",
      "/images/painting-03-gallery/painting-03-detail-05.png",
      "/images/painting-03-gallery/painting-03-detail-06.png",
    ],
  },
  {
    id: "painting-04",
    title: "Meditation",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "150 × 120 cm",
    status: "available",
    statusLabel: "Available",
    price: "£1,800",
    image: "/images/painting-04.png",
    slug: "meditation",
    description:
      "Meditation holds the body in a quieter field of energy. Colour, gesture and space are restrained but still active, creating a surface that feels suspended rather than still. The work approaches meditation not as silence, but as concentrated presence.",
    gallery: [
      "/images/painting-04-gallery/painting-04-detail-01.png",
      "/images/painting-04-gallery/painting-04-detail-02.png",
    ],
  },
  {
    id: "painting-05",
    title: "Multi U",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "130 × 170 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,400",
    image: "/images/painting-05.png",
    slug: "multi-u",
    description:
      "The title Multi U points to the idea of the multiverse: not one fixed reality, but many parallel versions branching through choice, accident and encounter. The central ring reads as an opening in space-time, while colour fields, fragments and traces suggest different possible worlds coexisting in one fragile membrane.",
    gallery: [
      "/images/painting-05-gallery/painting-05-detail-01.png",
      "/images/painting-05-gallery/painting-05-detail-02.png",
      "/images/painting-05-gallery/painting-05-detail-03.png",
      "/images/painting-05-gallery/painting-05-detail-04.png",
      "/images/painting-05-gallery/painting-05-detail-05.png",
      "/images/painting-05-gallery/painting-05-detail-06.png",
    ],
  },
  {
    id: "painting-06",
    title: "Current Joy",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "150 × 150 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,000",
    image: "/images/painting-06.png",
    slug: "current-joy",
    description:
      "Current Joy is bright, immediate and charged with movement. Its lighter field holds flashes of colour, soft collisions and open gestures that suggest emotional release. The work feels like a temporary state of clarity: joy caught while still moving.",
    // gallery: add painting-06-gallery when folder is ready
  },
  {
    id: "painting-07",
    title: "Holy Mary",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "130 × 110 cm",
    status: "available",
    statusLabel: "Available",
    price: "£2,400",
    image: "/images/painting-07.png",
    slug: "holy-mary",
    description:
      "Holy Mary brings together sacred atmosphere, fractured colour and symbolic white forms. The painting feels devotional but unstable, moving between protection, rupture and apparition. It explores holiness as something intense, imperfect and embodied.",
    // gallery: add painting-07-gallery when folder is ready
  },
];

// ── INSTALLED WORKS ────────────────────────────────────────────
export const installedWorks: Artwork[] = [];

// ── AVAILABLE WORKS ───────────────────────────────────────────
export const availableWorks = artworks.filter((a) => a.status === "available");
