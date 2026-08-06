/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images directly instead of through Vercel's runtime optimizer.
    // Source images are pre-compressed (max 2400px long edge), so no
    // on-the-fly resizing is needed. This keeps Image Optimization
    // cache writes at zero on the Hobby plan.
    unoptimized: true,
    // Add external domains here if needed later
    domains: [],
  },
};

module.exports = nextConfig;
