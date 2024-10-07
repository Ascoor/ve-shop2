/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',                          // تحديد المسار الأساسي إذا كان هناك مسار فرعي
  assetPrefix: '/public/',                // تعيين مسار الملفات الثابتة
};

module.exports = nextConfig;
