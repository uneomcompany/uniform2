import { Metadata } from 'next'
import BlogHeader from '../../components/BlogHeader'
import AuthorBio from '../../components/AuthorBio'
import RelatedArticles from '../../components/RelatedArticles'
import ShareButtons from '../../components/ShareButtons'
import TableOfContents from '../../components/TableOfContents'
import JsonLd from '../../components/JsonLd'
import OptimizedImage from '../../components/OptimizedImage'

export const metadata: Metadata = {
  title: 'Strategic Guide to Transport Fleet Uniform Sourcing in Saudi Arabia (2025)',
  description: 'Comprehensive guide to sourcing high-quality uniforms for transport fleets in Saudi Arabia, focusing on durability, cost-effectiveness, and supplier relationships.',
  openGraph: {
    title: 'Strategic Guide to Transport Fleet Uniform Sourcing in Saudi Arabia (2025)',
    description: 'Comprehensive guide to sourcing high-quality uniforms for transport fleets in Saudi Arabia, focusing on durability, cost-effectiveness, and supplier relationships.',
    type: 'article',
    publishedTime: '2025-05-18',
    authors: ['Mohammed Al-Qahtani'],
    images: [
      {
        url: '/images/transport_sector/transport_fleet_uniform_solutions.jpeg',
        width: 1200,
        height: 630,
        alt: 'Transport fleet workers wearing professionally sourced uniforms'
      }
    ]
  }
}

export default function ArticlePage() {
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "sourcing-strategy", title: "Strategic Sourcing Approach" },
    { id: "supplier-selection", title: "Supplier Selection Criteria" },
    { id: "quality-standards", title: "Quality Standards and Specifications" },
    { id: "cost-optimization", title: "Cost Optimization Methods" },
    { id: "conclusion", title: "Conclusion" }
  ]

  const relatedArticles = [
    {
      title: "Custom Logistics Uniform Design: Balancing Function and Brand Identity",
      url: "/blog/custom-logistics-uniform-design",
      category: "Transport",
      categoryColor: "bg-blue-600"
    },
    {
      title: "Transport Uniforms: Enhancing Safety and Security Standards",
      url: "/blog/transport-uniforms-safety-security",
      category: "Transport",
      categoryColor: "bg-blue-600"
    },
    {
      title: "Durable Weather-Appropriate Uniforms for Transport Sector",
      url: "/blog/durable-weather-appropriate-uniforms",
      category: "Transport",
      categoryColor: "bg-blue-600"
    }
  ]

  return (
    <main className="bg-white">
      <JsonLd
        title={metadata.title as string}
        description={metadata.description as string}
        publishDate="2025-05-18"
        author={{
          name: "Mohammed Al-Qahtani",
          role: "Transport Fleet Manager"
        }}
        images={['/images/transport_sector/transport_fleet_uniform_solutions.jpeg']}
        url="http://abjdeat.com/blog/transport-fleet-uniform-sourcing"
      />

      <BlogHeader 
        title="Strategic Guide to Transport Fleet Uniform Sourcing in Saudi Arabia (2025)"
        category="Transport"
        categoryColor="bg-blue-600"
        publishDate="May 18, 2025"
        readingTime="14 min read"
        imageSrc="/images/transport_sector/transport_fleet_uniform_solutions.jpeg"
        imageAlt="Transport fleet workers wearing professionally sourced uniforms"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-3/4">
            <section id="introduction" className="mb-12">
              <p className="text-lg leading-relaxed mb-6">
                In Saudi Arabia's expanding transport sector, effective uniform sourcing strategies have become crucial for fleet operations. This comprehensive guide explores best practices for sourcing high-quality uniforms that meet both operational requirements and budget constraints.
              </p>
            </section>

            <div className="mb-12">
              <OptimizedImage 
                src="/images/transport_sector/transport_uniform_supply_management.jpeg"
                alt="Professional uniform supply management for transport fleets"
                priority
                className="rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">Strategic uniform sourcing ensures consistent quality and supply for transport fleets</p>
            </div>

            {/* Author Bio */}
            <AuthorBio 
              name="Mohammed Al-Qahtani"
              role="Transport Fleet Manager"
              bio="Mohammed has extensive experience in transport fleet management and uniform sourcing strategies across Saudi Arabia's leading transportation companies."
              imageSrc="/images/author/mohammed_alqahtani.jpg"
              linkedin="https://linkedin.com/in/mohammed-alqahtani"
              twitter="https://twitter.com/alqahtani_m"
            />

            {/* Share Buttons */}
            <ShareButtons 
              url="/blog/transport-fleet-uniform-sourcing"
              title="Strategic Guide to Transport Fleet Uniform Sourcing in Saudi Arabia (2025)"
            />
          </div>

          <aside className="md:w-1/4">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                <RelatedArticles articles={relatedArticles} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
} 