import Link from 'next/link'
import Image from 'next/image'
import BlogPostCard from '../../components/BlogPostCard'

export const metadata = {
  canonical: 'https://abjdeat.com/blog/transport',
  title: 'Transport Sector Uniforms - Blog | Saudi Uniform',
  description: 'Explore articles about professional uniforms for drivers and transport operators that enhance safety and corporate image in Saudi Arabia.',
}

// Transport sector posts from postmap.md
const transportPosts = [
  {
    title: 'On the Move with Style: 2025 Uniform Trends for Saudi Arabia\'s Transport Sector',
    imageSrc: '/images/transport_sector/transport_uniforms.png',
    url: '/blog/transport-uniform-trends-2025',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Uniforms for Public Transport Staff (Bus, Metro) in KSA: Comfort and Authority (2025)',
    imageSrc: '/images/transport_sector/bus_driver_uniforms.jpg',
    url: '/blog/public-transport-staff-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Professional Attire for Taxi and Ride-Hailing Drivers in Saudi Arabia: Building Trust',
    imageSrc: '/images/transport_sector/drivers_attire.jpeg',
    url: '/blog/taxi-ridehailing-driver-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Logistics & Delivery Driver Uniforms in KSA: Practicality, Visibility, and Branding',
    imageSrc: '/images/transport_sector/delivery_uniforms.jpg',
    url: '/blog/logistics-delivery-driver-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Uniform Requirements for Train & Rail Operators in Saudi Arabia (2025 Standards)',
    imageSrc: '/images/transport_sector/transport_company_uniforms.jpeg',
    url: '/blog/train-rail-operator-uniform-standards',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'High-Visibility Uniforms for Road Maintenance and Transport Infrastructure Crews in KSA',
    imageSrc: '/images/transport_sector/reflective_vest.jpeg',
    url: '/blog/high-visibility-transport-crew-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Choosing Durable and Weather-Appropriate Uniforms for Saudi Transport Workers',
    imageSrc: '/images/transport_sector/weather_resistant_driver_uniforms.jpeg',
    url: '/blog/durable-weather-appropriate-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'The Role of Uniforms in Enhancing Safety and Security in the KSA Transport Network',
    imageSrc: '/images/transport_sector/transport_uniform_accessories.jpeg',
    url: '/blog/transport-uniforms-safety-security',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Custom Uniform Design for Saudi Logistics Companies: Reflecting Brand Identity',
    imageSrc: '/images/transport_sector/custom_transport_uniforms.jpeg',
    url: '/blog/custom-logistics-uniform-design',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Sourcing Uniforms for Large-Scale Transport Fleets in Saudi Arabia (2025 Guide)',
    imageSrc: '/images/transport_sector/transport_fleet_uniform_solutions.jpeg',
    url: '/blog/transport-fleet-uniform-sourcing',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Integrating Technology: Smart Features in Uniforms for KSA Transport Professionals (2025)',
    imageSrc: '/images/transport_sector/driver_uniform_design.jpeg',
    url: '/blog/smart-transport-uniform-features',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Uniforms for Maritime and Port Workers in Saudi Arabia: Specific Needs',
    imageSrc: '/images/transport_sector/heavy_transport_driver_attire.jpeg',
    url: '/blog/maritime-port-worker-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Sustainability in Motion: Eco-Friendly Uniform Options for the KSA Transport Sector',
    imageSrc: '/images/transport_sector/transport_uniform_fabrics.jpeg',
    url: '/blog/eco-friendly-transport-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'Ensuring a Professional Image for Customer-Facing Roles in Saudi Transport Hubs',
    imageSrc: '/images/transport_sector/transport_station_staff_clothing.jpeg',
    url: '/blog/customer-facing-transport-uniforms',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  },
  {
    title: 'The Future of Transport Workwear: Innovations for Efficiency and Safety in KSA (2025)',
    imageSrc: '/images/transport_sector/transport_supervisor_uniforms.jpeg',
    url: '/blog/future-transport-workwear-innovations',
    category: 'Transport',
    categoryColor: 'bg-blue-600'
  }
];

export default function TransportCategoryPage() {
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
            <span className="text-gray-900">Transport Sector</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[400px]">
          <Image 
            src="/images/category_name/transport_hero.jpg" 
            alt="Transport Sector Uniforms Blog - Articles and Insights" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Transport Sector Uniforms</h1>
                <p className="text-xl mb-8">Articles and guides about specialized uniform solutions for the transport sector in Saudi Arabia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Transport Uniform Expertise</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover comprehensive insights about transport sector uniforms, from selecting durable fabrics to meeting safety standards and enhancing your professional image in Saudi Arabia's transport industry.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Transport Sector Articles</h2>
            <p className="text-gray-700">Explore our comprehensive collection of articles about transport uniforms in Saudi Arabia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {transportPosts.map((post, index) => (
              <BlogPostCard 
                key={index}
                title={post.title}
                imageSrc={post.imageSrc}
                url={post.url}
                category={post.category}
                categoryColor={post.categoryColor}
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
            <p className="text-gray-700">Explore these important aspects of transport sector uniforms</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg bg-blue-50">
                <h3 className="text-xl font-bold mb-2">Driver Uniforms</h3>
                <p className="text-gray-700 mb-4">Comfortable and professional attire for bus drivers, taxi operators, and transport staff</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-blue-50">
                <h3 className="text-xl font-bold mb-2">Safety Standards</h3>
                <p className="text-gray-700 mb-4">Meeting regulatory requirements and safety protocols in transport workwear</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-blue-50">
                <h3 className="text-xl font-bold mb-2">Durable Fabrics</h3>
                <p className="text-gray-700 mb-4">Weather-appropriate and long-lasting materials for transport sector uniforms</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-blue-50">
                <h3 className="text-xl font-bold mb-2">Corporate Identity</h3>
                <p className="text-gray-700 mb-4">Maintaining brand consistency across your transport fleet with uniform solutions</p>
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
              Be the first to receive new articles about transport sector uniforms and exclusive offers.
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