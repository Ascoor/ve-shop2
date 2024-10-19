/** @type {import('next').NextConfig} */
const nextConfig = {
  // تفعيل الوضع الصارم في React لعرض الأخطاء والتحذيرات
  reactStrictMode: true,
  
  // استخدام محرك التحسين SWC لضغط الشيفرة لتحسين الأداء
  swcMinify: true,

  // إعداد لنشر المشروع كـ standalone
  output: 'standalone',

  // إعدادات الصور
  images: {
    // السماح بجلب الصور من مضيف خارجي محدد
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 've-shop.co',
        port: '', // عدم تحديد منفذ يعني استخدام المنفذ الافتراضي (443 للـ https)
        pathname: '/**', // السماح بجلب أي صورة من هذا النطاق
      },
    ],
    // الأحجام المسموحة للأجهزة المختلفة
    deviceSizes: [640, 750, 1080, 1200, 1920],
    // الأحجام المحددة للصور التي يمكن استخدامها
    imageSizes: [16, 32, 48, 64, 96],
    // التنسيقات المسموح بها للصور
    formats: ['image/avif', 'image/webp'],
  },

  // تفعيل الضغط لتحسين أداء التحميل
  compress: true,

  // تخصيص إعدادات Webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // في حال كان التطبيق يعمل على المتصفح (client-side)، استخدام Sentry Browser
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },

  // إعدادات ESLint لتحديد المجلدات التي سيتم فحصها للتأكد من خلوها من الأخطاء
  eslint: {
    dirs: ['pages', 'components', 'lib'], // يمكنك إضافة أي مجلدات أخرى تحتاج إلى فحصها
  },

  // إعدادات الترجمة الدولية (i18n) إذا كنت تحتاج إلى دعم متعدد اللغات
  i18n: {
    locales: ['en', 'ar'], // اللغات المدعومة (الإنجليزية والعربية)
    defaultLocale: 'en', // اللغة الافتراضية (الإنجليزية)
  },
};

module.exports = nextConfig;
