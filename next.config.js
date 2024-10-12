/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  output: 'standalone',

  images: {
    
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 've-shop.co',  // استبدل هذا بالنطاق الخاص بك
        port: '',                 // يمكنك ترك الحقل فارغًا إذا لم يكن هناك منفذ محدد
        pathname: '/**',          // أي مسار ضمن النطاق المحدد
      },
    ],
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ['image/avif', 'image/webp'],
  },

  compress: true,

  // i18n: {
  //   locales: ['ar', 'en'],
  //   defaultLocale: 'ar',
  // },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },

  eslint: {
    dirs: ['pages', 'components', 'lib'],
  },
};

module.exports = nextConfig;
