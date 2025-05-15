import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://abjdeat.com'
  
  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/transport-fleet-uniform-sourcing`,
      lastModified: new Date('2025-05-18'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/custom-logistics-uniform-design`,
      lastModified: new Date('2025-05-20'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/transport-uniforms-safety-security`,
      lastModified: new Date('2025-05-22'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/durable-weather-appropriate-uniforms`,
      lastModified: new Date('2025-05-25'),
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

  return [...corePages, ...blogPosts]
} 