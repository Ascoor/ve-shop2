/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build', // قم بتغيير `distDir` إلى مسار مختلف مثل `build`
    assetPrefix: './',
};

module.exports = nextConfig;
