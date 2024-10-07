/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  output: 'standalone',  // لتقليل الملفات الغير مستخدمة
};

module.exports = nextConfig;
