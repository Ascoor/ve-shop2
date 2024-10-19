/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Output as static files
  output: 'export',

  images: {
    unoptimized: true, // Disable image optimization since this is a static export
  },

  compress: true,
};

module.exports = nextConfig;
