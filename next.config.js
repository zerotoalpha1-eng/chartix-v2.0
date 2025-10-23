/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/chartix-v2.0',
  assetPrefix: '/chartix-v2.0',
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  reactStrictMode: true,
};
module.exports = nextConfig;