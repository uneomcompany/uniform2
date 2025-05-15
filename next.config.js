/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Making sure our images are optimized
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Remote patterns for image sources
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Allow us to use /public in image paths
  async rewrites() {
    return [
      {
        source: '/public/:path*',
        destination: '/:path*',
      },
    ];
  },
}

module.exports = nextConfig 