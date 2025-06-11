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

  // Optional: Specify basePath if your site is served from a subdirectory
  // Example: basePath: '/my-app',

  // Optional: Add any additional Next.js configuration here
  // Example: webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Modify webpack config here
  //   return config;
  // },

  // Optional: Customize headers for all responses
  // Example: headers: async () => {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
