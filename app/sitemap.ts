import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://abjdeat.com'
  
  // Blog posts - Transport Sector
  const transportBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/transport-fleet-uniform-sourcing`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/custom-logistics-uniform-design`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/transport-uniforms-safety-security`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/durable-weather-appropriate-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/maritime-port-worker-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/taxi-ridehailing-driver-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/train-rail-operator-uniform-standards`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/logistics-delivery-driver-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts - Retail Sector
  const retailBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/retail-uniform-suppliers-guide`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/tiered-retail-uniform-strategies`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/retail-name-badges-customer-service`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/seasonal-retail-uniform-promotions`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ecommerce-fulfillment-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/future-retail-uniform-innovations`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/retail-uniforms-employee-performance`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/sustainable-retail-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts - Aviation Sector
  const aviationBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/pilot-flight-crew-uniforms-ksa`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ground-staff-uniforms-brand-identity`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/vip-aviation-uniform-requirements`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/unified-aviation-uniform-strategies`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts - Banking & Finance Sector
  const bankingBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/traditional-modern-banking-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/islamic-finance-uniform-solutions`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/bank-uniforms-customer-perception`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/banking-uniform-suppliers-guide`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts - Restaurant Sector
  const restaurantBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/chef-uniforms-professionalism-hygiene`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/waitstaff-uniforms-customer-experience`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/restaurant-uniform-color-ambiance`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/sustainable-restaurant-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts - Industrial Sector
  const industrialBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/high-visibility-protective-workwear`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/flame-resistant-oil-gas-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/manufacturing-plant-uniform-solutions`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/construction-engineering-uniforms`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  return [
    ...corePages, 
    ...transportBlogPosts, 
    ...retailBlogPosts, 
    ...aviationBlogPosts, 
    ...bankingBlogPosts, 
    ...restaurantBlogPosts, 
    ...industrialBlogPosts
  ]
} 