/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // إعداد لنشر المشروع كـ static export
  output: 'export',  // تصدير ملفات ثابتة

  images: {
    formats: ["image/jpg", "image/webp", "svg"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 've-shop.co',
        port: '', 
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ['image/avif', 'image/webp'],
  },

  compress: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },

  eslint: {
    dirs: ['pages', 'components', 'lib'],
  },

  // إعدادات الترجمة الدولية
  i18n: {
    locales: ['en', 'ar'], 
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
