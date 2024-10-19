/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // إزالة استخدام `standalone` حيث أنه ليس ضروري لواجهة أمامية فقط
  output: 'export', // يجعل Next.js يقوم بتصدير ملفات ثابتة فقط بعد البناء

  images: {
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

  // لا داعي لإعدادات الخادم الداخلي
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },

  eslint: {
    dirs: ['pages', 'components', 'lib'],
  },

  // تعطيل صفحات الخادم الديناميكي وجعل التطبيق يعمل كواجهة أمامية فقط
  trailingSlash: true, // إضافة شريط مائل لكل الروابط (يفيد مع بعض خوادم الويب)
};

module.exports = nextConfig;
