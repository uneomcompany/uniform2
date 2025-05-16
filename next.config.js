/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: false,
  images: {
    unoptimized: true,
    disableStaticImages: false,
    domains: ['gregarious-sawine-ed40c7.netlify.app', 'images.unsplash.com']
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://gregarious-sawine-ed40c7.netlify.app',
    NEXT_PUBLIC_DOMAIN: 'gregarious-sawine-ed40c7.netlify.app'
  }
};

module.exports = nextConfig; 