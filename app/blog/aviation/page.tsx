import Link from 'next/link'
import Image from 'next/image'
import BlogPostCard from '../../components/BlogPostCard'

export const metadata = {
  canonical: 'https://abjdeat.com/blog/aviation',
  title: 'Aviation Sector Uniforms - Blog | Saudi Uniform',
  description: 'Explore articles about luxury uniforms for flight crews, airport staff, and ground services in Saudi Arabia.',
}

// Aviation sector posts
const aviationPosts = [
  {
    title: 'Elevating Sky-High Standards: 2025 Uniform Trends for Saudi Aviation Professionals',
    imageSrc: '/images/aviation_sector/aviation_uniforms.jpg',
    url: '/blog/aviation-uniform-trends-2025'
  },
  {
    title: 'Beyond the Cabin Crew: Comprehensive Uniform Solutions for Saudi Airports in 2025',
    imageSrc: '/images/aviation_sector/air_crew_attire.jpg',
    url: '/blog/comprehensive-aviation-uniform-solutions'
  },
  {
    title: 'Safety, Style, and Comfort: Designing Pilot & Flight Crew Uniforms for KSA Airlines (2025)',
    imageSrc: '/images/aviation_sector/pilot_uniforms.jpg',
    url: '/blog/pilot-flight-crew-uniforms-ksa'
  },
  {
    title: 'The Importance of Ground Staff Uniforms for Brand Identity at Saudi Airports',
    imageSrc: '/images/aviation_sector/ground_crew_uniforms.jpeg',
    url: '/blog/ground-staff-uniforms-brand-identity'
  },
  {
    title: 'Choosing Durable and Functional Uniforms for Aviation Maintenance Crews in KSA',
    imageSrc: '/images/aviation_sector/aircraft_technician_wear.jpeg',
    url: '/blog/aviation-maintenance-crew-uniforms'
  },
  {
    title: 'Global Best Practices in Aviation Uniforms: What Saudi Carriers Can Learn (2025)',
    imageSrc: '/images/aviation_sector/international_standard_aviation_wear.jpg',
    url: '/blog/aviation-uniform-best-practices'
  },
  {
    title: 'The Psychological Impact of Professional Aviation Uniforms on Passenger Trust in KSA',
    imageSrc: '/images/aviation_sector/aviation_uniform_visual_identity.jpeg',
    url: '/blog/aviation-uniforms-passenger-trust'
  },
  {
    title: 'Integrating Technology: Smart Uniforms for Enhanced Efficiency in Saudi Aviation (2025)',
    imageSrc: '/images/aviation_sector/aviation_industry_uniforms.jpeg',
    url: '/blog/smart-aviation-uniforms'
  },
  {
    title: 'Uniform Requirements for Private Jet & VIP Aviation Services in Saudi Arabia',
    imageSrc: '/images/aviation_sector/corporate_aviation_attire.jpg',
    url: '/blog/vip-aviation-uniform-requirements'
  },
  {
    title: 'Sourcing Guide: Finding Top Aviation Uniform Suppliers in Saudi Arabia (2025)',
    imageSrc: '/images/aviation_sector/airline_uniform_suppliers.jpeg',
    url: '/blog/aviation-uniform-suppliers-ksa'
  },
  {
    title: 'Customizing Aviation Uniforms to Reflect Saudi Airline Branding and Heritage',
    imageSrc: '/images/aviation_sector/aviation_logo_embroidery.jpeg',
    url: '/blog/customizing-aviation-uniforms-branding'
  },
  {
    title: 'From Pilots to Porters: Unified Uniform Strategies for Saudi Aviation Hubs',
    imageSrc: '/images/aviation_sector/complete_aviation_uniform_solutions.jpg',
    url: '/blog/unified-aviation-uniform-strategies'
  },
  {
    title: 'Sustainability in the Skies: Eco-Friendly Uniform Options for Saudi Airlines (2025)',
    imageSrc: '/images/aviation_sector/aviation_workwear.jpeg',
    url: '/blog/eco-friendly-aviation-uniforms'
  },
  {
    title: 'Ensuring Compliance: Meeting GACA and International Standards for Aviation Uniforms in KSA',
    imageSrc: '/images/aviation_sector/aviation_clothing.jpg',
    url: '/blog/aviation-uniform-compliance'
  },
  {
    title: 'The Future of Aviation Workwear: Innovations for the Saudi Market in 2025',
    imageSrc: '/images/aviation_sector/aviation_uniform_design.jpeg',
    url: '/blog/future-aviation-workwear-innovations'
  }
];

export default function AviationCategoryPage() {
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
            <span className="text-gray-900">Aviation Sector</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[400px]">
          <Image 
            src="/images/aviation_sector/aviation_thumbnail.jpg" 
            alt="Aviation Sector Uniforms Blog - Articles and Insights" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Aviation Sector Uniforms</h1>
                <p className="text-xl mb-8">Articles and guides about specialized uniform solutions for the aviation sector in Saudi Arabia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Aviation Uniform Expertise</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover comprehensive insights about aviation sector uniforms, from cabin crew attire to ground staff uniforms and enhancing your professional image in Saudi Arabia's aviation industry.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Aviation Uniform Articles</h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore our collection of articles about aviation sector uniforms for Saudi Airlines and airports.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aviationPosts.map((post, index) => (
              <BlogPostCard 
                key={index}
                title={post.title}
                imageSrc={post.imageSrc}
                url={post.url}
                category="Aviation"
                categoryColor="bg-sky-600"
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
            <p className="text-gray-700">Explore these important aspects of aviation sector uniforms</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg bg-sky-50">
                <h3 className="text-xl font-bold mb-2">Cabin Crew Uniforms</h3>
                <p className="text-gray-700 mb-4">Elegant and professional attire for flight attendants that represent airline branding</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-sky-50">
                <h3 className="text-xl font-bold mb-2">Pilot Uniforms</h3>
                <p className="text-gray-700 mb-4">Authoritative and formal uniforms for pilots and co-pilots that inspire passenger confidence</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-sky-50">
                <h3 className="text-xl font-bold mb-2">Ground Staff Attire</h3>
                <p className="text-gray-700 mb-4">Functional and branded uniforms for airport ground crew and customer service personnel</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-sky-50">
                <h3 className="text-xl font-bold mb-2">Maintenance Crew Workwear</h3>
                <p className="text-gray-700 mb-4">Durable and practical uniforms for aircraft maintenance technicians meeting safety standards</p>
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
              Be the first to receive new articles about aviation sector uniforms and exclusive offers.
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