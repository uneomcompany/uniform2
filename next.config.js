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
  },
  // Skip generation of problematic pages during build
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    // Start with the default path map
    const pathMap = { ...defaultPathMap };
    
    // Remove blog paths that cause build errors
    Object.keys(pathMap).forEach(path => {
      if (path.startsWith('/blog/') && path !== '/blog' && path !== '/blog/[slug]') {
        delete pathMap[path];
      }
    });
    
    return pathMap;
  }
};

module.exports = nextConfig; 