import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industry Insights | Saudi Arabia Uniform Blog',
  description: 'Latest trends, developments, and expert insights on uniforms in various industries across Saudi Arabia.',
}

// Industry Insights articles data
const articles = [
  {
    title: "Sustainable Uniform Manufacturing: A Growing Trend in Saudi Arabia",
    slug: "sustainable-uniform-manufacturing-growing-trend-saudi-arabia",
    excerpt: "Explore how sustainable practices are transforming uniform manufacturing in Saudi Arabia, with eco-friendly materials and ethical production becoming industry standards.",
    image: "/images/sustainability_uniform_trends.jpg",
    author: "نورا_الدوسري",
    authorName: "Noura Al-Dosari",
    authorImage: "/images/author/نورا_الدوسري.jpg",
    date: "2023-12-15",
  },
  {
    title: "The Impact of Vision 2030 on Saudi Arabia's Uniform Industry",
    slug: "impact-vision-2030-saudi-arabia-uniform-industry",
    excerpt: "Analyze how Saudi Arabia's Vision 2030 initiative is reshaping the uniform industry through localization, quality improvements, and new market opportunities.",
    image: "/images/vision2030_uniform_impact.jpg",
    author: "سامي_الهلالي",
    authorName: "Sami Al-Hilali",
    authorImage: "/images/author/سامي_الهلالي.jpg",
    date: "2023-11-28",
  },
  {
    title: "Technology Integration in Modern Saudi Workwear",
    slug: "technology-integration-modern-saudi-workwear",
    excerpt: "Discover how smart textiles, RFID tracking, and other technological innovations are being incorporated into Saudi Arabian workplace uniforms.",
    image: "/images/tech_smart_uniforms.jpg",
    author: "جواد_الحازمي",
    authorName: "Jawad Al-Hazmi",
    authorImage: "/images/author/جواد_الحازمي.jpg",
    date: "2023-12-05",
  },
  {
    title: "Cultural Identity and Corporate Uniforms in Modern Saudi Arabia",
    slug: "cultural-identity-corporate-uniforms-modern-saudi-arabia",
    excerpt: "Examining the balance between traditional Saudi cultural elements and contemporary corporate design in modern Saudi workplace uniforms.",
    image: "/images/cultural_corporate_uniforms.jpg",
    author: "فارس_النجدي",
    authorName: "Faris Al-Najdi",
    authorImage: "/images/author/فارس_النجدي.png",
    date: "2023-11-10",
  },
]

export default function IndustryInsights() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Insights</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest trends, developments, and expert insights on uniforms across various industries in Saudi Arabia.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <Link href={`/blog/industry-insights/${article.slug}`}>
              <div className="relative h-60">
                <Image
                  src={article.image || '/images/placeholder.jpg'}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
                    <Image
                      src={article.authorImage || '/images/placeholder-author.jpg'}
                      alt={article.authorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{article.authorName}</p>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/contact" className="btn-primary">
          Contact Us for Industry Expertise
        </Link>
      </div>
    </div>
  )
} 