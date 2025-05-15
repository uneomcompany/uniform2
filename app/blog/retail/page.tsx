import Link from 'next/link'
import Image from 'next/image'
import BlogPostCard from '../../components/BlogPostCard'

export const metadata = {
  title: 'Retail Sector Uniforms - Blog | Saudi Uniform',
  description: 'Explore articles about comfortable and brand-consistent uniforms for retail employees that enhance customer experience in Saudi Arabia.',
}

// Retail sector posts
const retailPosts = [
  {
    title: 'Dressing for Sales: Top Retail Uniform Trends in Saudi Arabia for 2025',
    imageSrc: '/images/retail_sector/retail_uniforms.jpg',
    url: '/blog/retail-uniform-trends-2025'
  },
  {
    title: 'How Store Uniforms Impact Customer Engagement and Brand Loyalty in KSA',
    imageSrc: '/images/retail_sector/sales_uniforms.jpg',
    url: '/blog/retail-uniforms-customer-engagement'
  },
  {
    title: 'Choosing Retail Uniforms That Reflect Your Brand\'s Personality in the Saudi Market',
    imageSrc: '/images/retail_sector/enhancing_store_identity_with_uniforms.jpeg',
    url: '/blog/retail-uniforms-brand-personality'
  },
  {
    title: 'Comfort and Style: Uniforms for Long Shifts on the KSA Retail Floor (2025)',
    imageSrc: '/images/retail_sector/practical_comfortable_uniforms.jpeg',
    url: '/blog/comfortable-retail-uniforms'
  },
  {
    title: 'Uniform Solutions for Luxury Boutiques vs. Mass Market Retailers in Saudi Arabia',
    imageSrc: '/images/retail_sector/perfume_cosmetics_store_wear.jpg',
    url: '/blog/luxury-mass-market-retail-uniforms'
  },
  {
    title: 'The Role of Uniforms in Creating a Cohesive In-Store Experience in KSA',
    imageSrc: '/images/retail_sector/consistent_store_colors.jpeg',
    url: '/blog/cohesive-retail-experience-uniforms'
  },
  {
    title: 'Customizing Retail Uniforms: Incorporating Logos and Brand Colors Effectively (Saudi Focus)',
    imageSrc: '/images/retail_sector/store_logo_caps.jpeg',
    url: '/blog/customizing-retail-uniforms-branding'
  },
  {
    title: 'From Sales Associates to Managers: Tiered Uniform Strategies for KSA Retail Teams',
    imageSrc: '/images/retail_sector/supervisor_uniforms.jpg',
    url: '/blog/tiered-retail-uniform-strategies'
  },
  {
    title: 'Sourcing Guide: Finding Reliable Retail Uniform Suppliers in Saudi Arabia (2025)',
    imageSrc: '/images/retail_sector/best_retail_uniform_supplier.jpg',
    url: '/blog/retail-uniform-suppliers-guide'
  },
  {
    title: 'The Power of a Name Badge: Enhancing Customer Service Through Retail Uniforms in KSA',
    imageSrc: '/images/retail_sector/employee_name_badges.jpg',
    url: '/blog/retail-name-badges-customer-service'
  },
  {
    title: 'Adapting Retail Uniforms for Seasonal Promotions and Campaigns in Saudi Arabia',
    imageSrc: '/images/retail_sector/seasonal_uniforms.jpg',
    url: '/blog/seasonal-retail-uniform-promotions'
  },
  {
    title: 'Uniforms for E-commerce Fulfillment Staff: Branding Behind the Scenes in KSA (2025)',
    imageSrc: '/images/retail_sector/stockroom_staff_uniforms.jpg',
    url: '/blog/ecommerce-fulfillment-uniforms'
  },
  {
    title: 'Sustainable Retail Uniforms: Appealing to Eco-Conscious Saudi Consumers (2025)',
    imageSrc: '/images/retail_sector/custom_uniforms.jpg',
    url: '/blog/sustainable-retail-uniforms'
  },
  {
    title: 'The Impact of Uniforms on Employee Confidence and Performance in KSA Retail',
    imageSrc: '/images/retail_sector/staff_uniforms.jpeg',
    url: '/blog/retail-uniforms-employee-performance'
  },
  {
    title: 'Future of Retail Fashion: Smart Uniforms & Personalized Experiences in KSA (2025)',
    imageSrc: '/images/retail_sector/store_uniform_design.jpeg',
    url: '/blog/future-retail-uniform-innovations'
  }
];

export default function RetailCategoryPage() {
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
            <span className="text-gray-900">Retail Sector</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[400px]">
          <Image 
            src="/images/retail_sector/retail_thumbnail.jpg" 
            alt="Retail Sector Uniforms Blog - Articles and Insights" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Retail Sector Uniforms</h1>
                <p className="text-xl mb-8">Articles and guides about specialized uniform solutions for the retail sector in Saudi Arabia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Retail Uniform Expertise</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover comprehensive insights about retail sector uniforms, from sales staff attire to store management uniforms and enhancing your brand image in Saudi Arabia's competitive retail environment.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Retail Uniform Articles</h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore our collection of articles about retail sector uniforms for Saudi stores and shopping centers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {retailPosts.map((post, index) => (
              <BlogPostCard 
                key={index}
                title={post.title}
                imageSrc={post.imageSrc}
                url={post.url}
                category="Retail"
                categoryColor="bg-purple-600"
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
            <p className="text-gray-700">Explore these important aspects of retail sector uniforms</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg bg-purple-50">
                <h3 className="text-xl font-bold mb-2">Sales Associate Uniforms</h3>
                <p className="text-gray-700 mb-4">Comfortable and professional attire for frontline retail staff in various store environments</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-purple-50">
                <h3 className="text-xl font-bold mb-2">Brand Consistency</h3>
                <p className="text-gray-700 mb-4">Creating uniform designs that reinforce your brand identity and visual merchandising</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-purple-50">
                <h3 className="text-xl font-bold mb-2">Supervisor & Management Attire</h3>
                <p className="text-gray-700 mb-4">Appropriate uniforms that distinguish management staff while maintaining brand cohesion</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-purple-50">
                <h3 className="text-xl font-bold mb-2">Seasonal Considerations</h3>
                <p className="text-gray-700 mb-4">Adapting retail uniforms for different seasons and promotional periods in Saudi Arabia</p>
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
              Be the first to receive new articles about retail sector uniforms and exclusive offers.
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