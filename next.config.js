/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Output as static files for production (Static HTML Export)
  output: 'export',

  // Disable Next.js built-in image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },

  // Enable Gzip compression for better performance
  compress: true,
};

module.exports = nextConfig;
