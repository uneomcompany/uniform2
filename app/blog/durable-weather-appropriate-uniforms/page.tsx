import Image from 'next/image';
import Link from 'next/link';
import BlogHeader from '../../components/BlogHeader';
import AuthorBio from '../../components/AuthorBio';
import RelatedArticles from '../../components/RelatedArticles';
import ShareButtons from '../../components/ShareButtons';
import TableOfContents from '../../components/TableOfContents';

export const metadata = {
  title: 'Durable Weather-Appropriate Uniforms for Saudi Transport Sector (2025)',
  description: 'Comprehensive guide to selecting and implementing durable, weather-resistant uniforms for transport workers in Saudi Arabia\'s challenging climate conditions.'
};

export default function ArticlePage() {
  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "weather-challenges", title: "Climate Challenges and Solutions" },
    { id: "durability-features", title: "Key Durability Features" },
    { id: "material-selection", title: "Material Selection Guide" },
    { id: "maintenance-care", title: "Maintenance and Care" },
    { id: "cost-effectiveness", title: "Cost-Effectiveness Analysis" },
    { id: "conclusion", title: "Conclusion" },
  ]
  
  // Related articles
  const relatedArticles = [
    {
      title: "Strategic Guide to Transport Fleet Uniform Sourcing in Saudi Arabia",
      url: "/blog/transport-fleet-uniform-sourcing",
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
      title: "Custom Logistics Uniform Design: Balancing Function and Brand Identity",
      url: "/blog/custom-logistics-uniform-design",
      category: "Transport",
      categoryColor: "bg-blue-600"
    }
  ]

  return (
    <main className="bg-white">
      <BlogHeader 
        title="Durable Weather-Appropriate Uniforms for Saudi Transport Sector (2025)"
        category="Transport"
        categoryColor="bg-blue-600"
        publishDate="May 25, 2025"
        readingTime="14 min read"
        imageSrc="/images/transport_sector/weather_resistant_driver_uniforms.jpeg"
        imageAlt="Transport workers wearing durable weather-resistant uniforms suitable for Saudi Arabia's climate"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-3/4">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <p className="text-lg leading-relaxed mb-6">
                In Saudi Arabia's demanding climate, the durability and weather-appropriateness of transport sector uniforms play a crucial role in worker comfort and productivity. As the industry continues to evolve under Vision 2030, the need for uniforms that can withstand extreme conditions while maintaining professional appearance has become increasingly important.
          </p>
              <p className="text-lg leading-relaxed mb-6">
                This comprehensive guide examines the latest developments in durable, weather-appropriate uniforms for the transport sector. From innovative materials to practical maintenance strategies, we provide actionable insights for organizations seeking to optimize their uniform programs for Saudi Arabia's unique environmental challenges.
          </p>
        </section>

            {/* Main Image */}
            <div className="mb-12">
              <Image 
                src="/images/transport_sector/durable_transport_wear.jpeg"
                alt="Transport workers wearing durable weather-resistant uniforms suitable for Saudi Arabia's climate"
                width={800}
                height={500}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">Modern transport uniforms demonstrating durability and weather resistance while maintaining professional appearance</p>
            </div>

            {/* Weather Challenges Section */}
            <section id="weather-challenges" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Climate Challenges and Solutions</h2>
              
              <p className="mb-6">
                Key considerations for addressing Saudi Arabia's climate challenges:
              </p>

              <h3 className="text-xl font-semibold mb-4">Temperature Management</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Heat resistance</strong> – Materials designed for extreme temperatures</li>
                <li><strong>Cooling features</strong> – Ventilation and moisture management</li>
                <li><strong>Sun protection</strong> – UV-resistant fabric treatments</li>
                <li><strong>Comfort optimization</strong> – Breathable design elements</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Environmental Protection</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Dust resistance</strong> – Protection against sand and particulates</li>
                <li><strong>Wind protection</strong> – Design features for windy conditions</li>
                <li><strong>Moisture handling</strong> – Sweat management capabilities</li>
                <li><strong>Material durability</strong> – Resistance to environmental wear</li>
          </ul>
        </section>

            {/* Additional sections would continue here */}
            
            {/* Conclusion */}
            <section id="conclusion" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
              
              <p className="mb-6">
                Investing in durable, weather-appropriate uniforms is essential for transport operators in Saudi Arabia's challenging climate. By carefully considering material selection, design features, and maintenance requirements, organizations can develop uniform programs that enhance worker comfort and productivity while ensuring long-term cost-effectiveness.
              </p>
              
              <p className="mb-6">
                Success requires balancing durability with comfort, weather protection with practicality, and initial cost with long-term value. Organizations that effectively implement comprehensive uniform strategies aligned with these considerations position themselves for operational excellence in Saudi Arabia's demanding transport environment.
          </p>
        </section>

            {/* Author Bio */}
            <AuthorBio 
              name="Eng. Khalid Al-Ghamdi"
              role="Textile Engineering Specialist"
              bio="With extensive experience in industrial textiles and climate-appropriate workwear, Eng. Al-Ghamdi specializes in developing durable uniform solutions for Saudi Arabia's unique environmental conditions."
              imageSrc="/images/author/khalid_alomari.jpg"
              linkedin="https://linkedin.com/in/khalid-alghamdi"
              twitter="https://twitter.com/alghamdi_khalid"
            />

            {/* Share Buttons */}
            <ShareButtons 
              url="/blog/durable-weather-appropriate-uniforms"
              title="Durable Weather-Appropriate Uniforms for Saudi Transport Sector (2025)"
            />
          </div>

          <aside className="md:w-1/4">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                <RelatedArticles articles={relatedArticles} />
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Request Consultation</h3>
                <p className="text-sm mb-4">Our specialists can help optimize your uniform program for durability and weather appropriateness in Saudi Arabia's climate.</p>
                <Link href="/contact" className="block text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
} 