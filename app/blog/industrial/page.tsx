import Link from 'next/link'
import Image from 'next/image'
import BlogPostCard from '../../components/BlogPostCard'

export const metadata = {
  canonical: 'https://abjdeat.com/blog/industrial',
  title: 'Industrial Sector Uniforms - Blog | Saudi Uniform',
  description: 'Explore articles about durable workwear and safety equipment for factories, construction, and technical fields in Saudi Arabia.',
}

// Industrial sector posts
const industrialPosts = [
  {
    title: 'Safety First, Style Second: 2025\'s Top Industrial Uniforms for Saudi Arabia',
    imageSrc: '/images/industrial_sector/industrial_uniforms.jpeg',
    url: '/blog/top-industrial-uniforms-2025'
  },
  {
    title: 'High-Visibility & Protective Workwear: Essential Uniforms for KSA Industrial Sites',
    imageSrc: '/images/industrial_sector/high_visibility_clothin.jpeg',
    url: '/blog/high-visibility-protective-workwear'
  },
  {
    title: 'Choosing Durable and Flame-Resistant Uniforms for Saudi Oil & Gas Workers (2025)',
    imageSrc: '/images/industrial_sector/fire_resistant_uniforms.jpeg',
    url: '/blog/flame-resistant-oil-gas-uniforms'
  },
  {
    title: 'The Importance of Fit and Comfort in Industrial Uniforms for KSA Workforce Productivity',
    imageSrc: '/images/industrial_sector/durable_work_clothing.jpeg',
    url: '/blog/comfortable-industrial-uniforms'
  },
  {
    title: 'Custom Industrial Uniforms: Meeting Specific Safety Standards in Saudi Arabia',
    imageSrc: '/images/industrial_sector/custom_workwear_tailoring.jpeg',
    url: '/blog/custom-industrial-safety-uniforms'
  },
  {
    title: 'Uniform Solutions for Manufacturing Plants and Factories in KSA (2025 Trends)',
    imageSrc: '/images/industrial_sector/manufacturing_sector_uniforms.jpeg',
    url: '/blog/manufacturing-plant-uniform-solutions'
  },
  {
    title: 'Innovations in Industrial Workwear: Smart Fabrics and Integrated Tech for Saudi Arabia',
    imageSrc: '/images/industrial_sector/specification_compliant_workwear.jpeg',
    url: '/blog/smart-fabric-industrial-workwear'
  },
  {
    title: 'Meeting Saudi Labor Law Requirements for Protective Industrial Uniforms',
    imageSrc: '/images/industrial_sector/protective_clothing.jpeg',
    url: '/blog/labor-law-protective-uniforms'
  },
  {
    title: 'A Comprehensive Guide to PPE and Uniform Integration for KSA Industrial Safety',
    imageSrc: '/images/industrial_sector/safety_helmets.jpg',
    url: '/blog/ppe-uniform-integration-guide'
  },
  {
    title: 'Branding on the Factory Floor: Professionalizing Your Saudi Industrial Team with Uniforms',
    imageSrc: '/images/industrial_sector/logo_embroidery.jpeg',
    url: '/blog/factory-floor-branding-uniforms'
  },
  {
    title: 'Sourcing Heavy-Duty Industrial Uniforms in Saudi Arabia: What to Look For (2025)',
    imageSrc: '/images/industrial_sector/heavy_duty_industrial_fabrics.jpeg',
    url: '/blog/sourcing-heavy-duty-uniforms'
  },
  {
    title: 'Uniforms for Construction and Engineering Projects in Saudi Arabia\'s Giga-Projects (2025 Focus)',
    imageSrc: '/images/industrial_sector/engineer_wear.jpeg',
    url: '/blog/construction-engineering-uniforms'
  },
  {
    title: 'Sustainability in Action: Eco-Friendly and Recyclable Industrial Uniforms for KSA',
    imageSrc: '/images/industrial_sector/canvas_denim_workwear.jpeg',
    url: '/blog/eco-friendly-industrial-uniforms'
  },
  {
    title: 'Specialized Uniforms for Mining and Heavy Industry Sectors in Saudi Arabia',
    imageSrc: '/images/industrial_sector/oil_gas_worker_uniforms.jpeg',
    url: '/blog/mining-heavy-industry-uniforms'
  },
  {
    title: 'The Future of Industrial Uniforms: Enhanced Protection and Comfort for KSA (2025)',
    imageSrc: '/images/industrial_sector/industrial_uniform_design.jpg',
    url: '/blog/future-industrial-uniform-innovations'
  }
];

export default function IndustrialCategoryPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Industrial Sector</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[400px]">
          <Image 
            src="/images/industrial_sector/industrial_thumbnail.jpg" 
            alt="Industrial Sector Uniforms Blog - Articles and Insights" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Sector Uniforms</h1>
                <p className="text-xl mb-8">Articles and guides about specialized uniform solutions for the industrial sector in Saudi Arabia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Industrial Uniform Expertise</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover comprehensive insights about industrial sector uniforms, from safety workwear to technical staff uniforms and enhancing safety and productivity in Saudi Arabia's industrial workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Industrial Uniform Articles</h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore our collection of articles about industrial sector uniforms for Saudi factories, construction sites, and technical operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industrialPosts.map((post, index) => (
              <BlogPostCard 
                key={index}
                title={post.title}
                imageSrc={post.imageSrc}
                url={post.url}
                category="Industrial"
                categoryColor="bg-orange-600"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Topics</h2>
            <p className="text-gray-700">Explore these important aspects of industrial sector uniforms</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg bg-orange-50">
                <h3 className="text-xl font-bold mb-2">Safety Workwear</h3>
                <p className="text-gray-700 mb-4">Protective uniforms designed to meet safety standards for industrial environments</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-orange-50">
                <h3 className="text-xl font-bold mb-2">Heat & Flame Resistant Clothing</h3>
                <p className="text-gray-700 mb-4">Specialized uniforms for oil, gas, and high-temperature industrial environments</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-orange-50">
                <h3 className="text-xl font-bold mb-2">High-Visibility Wear</h3>
                <p className="text-gray-700 mb-4">Enhanced visibility uniforms for construction, roadwork, and low-light industrial settings</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-orange-50">
                <h3 className="text-xl font-bold mb-2">Durable Workwear</h3>
                <p className="text-gray-700 mb-4">Long-lasting and comfortable uniforms designed for demanding industrial conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8">
              Be the first to receive new articles about industrial sector uniforms and exclusive offers.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold transition duration-300 hover:bg-gray-100"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 