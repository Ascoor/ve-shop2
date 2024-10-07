/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,          // يساعد في اكتشاف الأخطاء
  swcMinify: true,                // تفعيل التصغير باستخدام SWC لتحسين الأداء
  poweredByHeader: false,         // إخفاء ترويسة "X-Powered-By" لزيادة الأمان
  compress: true,                 // ضغط المحتوى لتسريع التحميل
  images: {
    // domains: ['example.com'],     // السماح بالصور من نطاقات محددة
    formats: ['image/webp'],      // دعم صيغ الصور المحدثة
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
