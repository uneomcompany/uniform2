/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Making sure our images are optimized
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Remote patterns for image sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gregarious-sawine-ed40c7.netlify.app',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://gregarious-sawine-ed40c7.netlify.app',
    NEXT_PUBLIC_DOMAIN: 'gregarious-sawine-ed40c7.netlify.app',
  }
}

module.exports = nextConfig 