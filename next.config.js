/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Output as static files for production
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Enable compression for better performance
  compress: true,
};

module.exports = nextConfig;
