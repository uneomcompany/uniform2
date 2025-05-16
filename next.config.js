/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
    path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gregarious-sawine-ed40c7.netlify.app',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://gregarious-sawine-ed40c7.netlify.app',
    NEXT_PUBLIC_DOMAIN: 'gregarious-sawine-ed40c7.netlify.app',
  }
}

module.exports = nextConfig 