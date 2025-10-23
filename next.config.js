/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  reactStrictMode: true,

  output: 'export',
  basePath: '/chartix-v2.0', 
  assetPrefix: '/chartix-v2.0/',
};

module.exports = nextConfig;
