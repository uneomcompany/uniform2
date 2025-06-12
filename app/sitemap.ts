import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://abjdeat.com'
  
  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/author`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sectors`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectors/transport`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectors/aviation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectors/banking-finance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectors/industrial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectors/restaurants`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sectors/retail`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industry-insights`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/request-quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Blog posts - Transport Sector
  const transportBlogPosts: MetadataRoute.Sitemap = [
    'transport-fleet-uniform-sourcing',
    'custom-logistics-uniform-design',
    'transport-uniforms-safety-security',
    'durable-weather-appropriate-uniforms',
    'maritime-port-worker-uniforms',
    'taxi-ridehailing-driver-uniforms',
    'train-rail-operator-uniform-standards',
    'logistics-delivery-driver-uniforms',
    'smart-transport-uniform-features',
    'customer-facing-transport-uniforms',
    'future-transport-workwear-innovations',
    'eco-friendly-transport-uniforms',
    'transport-uniform-materials',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2024-12-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts - Buying Guides
  const buyingGuidesBlogPosts: MetadataRoute.Sitemap = [
    'buying-guides/how-to-choose-reliable-uniform-supplier-saudi-arabia',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2024-12-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts - Retail Sector
  const retailBlogPosts: MetadataRoute.Sitemap = [
    'retail-uniform-suppliers-guide',
    'tiered-retail-uniform-strategies',
    'retail-name-badges-customer-service',
    'seasonal-retail-uniform-promotions',
    'ecommerce-fulfillment-uniforms',
    'future-retail-uniform-innovations',
    'retail-uniforms-employee-performance',
    'sustainable-retail-uniforms',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2024-12-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts - Aviation Sector
  const aviationBlogPosts: MetadataRoute.Sitemap = [
    'pilot-flight-crew-uniforms-ksa',
    'ground-staff-uniforms-brand-identity',
    'vip-aviation-uniform-requirements',
    'unified-aviation-uniform-strategies',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2024-12-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts - Banking & Finance Sector
  const bankingBlogPosts: MetadataRoute.Sitemap = [
    'traditional-modern-banking-uniforms',
    'islamic-finance-uniform-solutions',
    'bank-uniforms-customer-perception',
    'banking-uniform-suppliers-guide',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2024-12-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts - Restaurant Sector
  const restaurantBlogPosts: MetadataRoute.Sitemap = [
    'chef-uniforms-professionalism-hygiene',
    'waitstaff-uniforms-customer-experience',
    'restaurant-uniform-color-ambiance',
    'sustainable-restaurant-uniforms',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2024-12-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts - Industrial Sector
  const industrialBlogPosts: MetadataRoute.Sitemap = [
    'high-visibility-protective-workwear',
    'flame-resistant-oil-gas-uniforms',
    'manufacturing-plant-uniform-solutions',
    'construction-engineering-uniforms',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2024-12-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Author pages
  const authorSlugs = [
    'سامي_الهلالي',
    encodeURIComponent('سامي_الهلالي'),
    'sami-alhilali',
    'عبدالله_الخالدي',
    encodeURIComponent('عبدالله_الخالدي'),
    'محمد_الصالح',
    encodeURIComponent('محمد_الصالح'),
  ]
  
  const authorPages: MetadataRoute.Sitemap = authorSlugs.map(slug => ({
    url: `${baseUrl}/author/${slug}`,
    lastModified: new Date('2024-12-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...corePages,
    ...transportBlogPosts,
    ...buyingGuidesBlogPosts,
    ...retailBlogPosts,
    ...aviationBlogPosts,
    ...bankingBlogPosts,
    ...restaurantBlogPosts,
    ...industrialBlogPosts,
    ...authorPages,
  ]
} 