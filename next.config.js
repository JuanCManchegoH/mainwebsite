/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
};

module.exports = nextConfig;
