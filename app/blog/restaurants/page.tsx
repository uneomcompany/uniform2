import Link from 'next/link'
import Image from 'next/image'
import BlogPostCard from '../../components/BlogPostCard'

export const metadata = {
  canonical: 'https://abjdeat.com/blog/restaurants',
  title: 'Restaurants Sector Uniforms - Blog | Saudi Uniform',
  description: 'Explore articles about elegant and practical uniforms for all restaurant workers, from kitchen to customer service in Saudi Arabia.',
}

// Restaurants sector posts
const restaurantsPosts = [
  {
    title: 'Dishing Out Style: 2025 Restaurant Uniform Trends for Saudi Arabia',
    imageSrc: '/images/restaurants_sector/restaurant_uniforms.jpg',
    url: '/blog/restaurant-uniform-trends-2025'
  },
  {
    title: 'From Fine Dining to Fast Casual: Choosing the Right Uniforms for Your KSA Eatery',
    imageSrc: '/images/restaurants_sector/restaurant_service_wear.jpeg',
    url: '/blog/restaurant-uniform-categories'
  },
  {
    title: 'Chef Uniforms in Saudi Arabia: Balancing Professionalism, Comfort, and Hygiene (2025)',
    imageSrc: '/images/restaurants_sector/chef_jackets.jpeg',
    url: '/blog/chef-uniforms-professionalism-hygiene'
  },
  {
    title: 'Waitstaff Uniforms That Enhance Customer Experience in Saudi Restaurants',
    imageSrc: '/images/restaurants_sector/waiter_uniforms.jpeg',
    url: '/blog/waitstaff-uniforms-customer-experience'
  },
  {
    title: 'The Impact of Uniform Color and Style on Restaurant Ambiance in KSA',
    imageSrc: '/images/restaurants_sector/restaurant_identity_uniforms.jpeg',
    url: '/blog/restaurant-uniform-color-ambiance'
  },
  {
    title: 'Aprons, Headwear, and Accessories: Completing Your Saudi Restaurant Uniform Look',
    imageSrc: '/images/restaurants_sector/chef_hats.jpeg',
    url: '/blog/restaurant-uniform-accessories'
  },
  {
    title: 'Custom Uniform Design to Reflect Your KSA Restaurant\'s Brand and Theme',
    imageSrc: '/images/restaurants_sector/restaurant_logo_embroidery.jpeg',
    url: '/blog/custom-restaurant-uniform-design'
  },
  {
    title: 'Choosing Stain-Resistant and Easy-to-Clean Fabrics for KSA Food Service Uniforms',
    imageSrc: '/images/restaurants_sector/stain_resistant_uniforms.jpeg',
    url: '/blog/stain-resistant-restaurant-fabrics'
  },
  {
    title: 'Uniforms for Outdoor Dining and Cafe Staff in Saudi Arabia\'s Climate (2025)',
    imageSrc: '/images/restaurants_sector/cafe_uniforms.jpeg',
    url: '/blog/outdoor-dining-cafe-uniforms'
  },
  {
    title: 'Sourcing High-Quality Restaurant Uniforms in Riyadh, Jeddah & Dammam (2025 Guide)',
    imageSrc: '/images/restaurants_sector/restaurant_uniforms_riyadh.jpeg',
    url: '/blog/restaurant-uniforms-sourcing-guide'
  },
  {
    title: 'The ROI of Investing in Stylish Uniforms for Staff Morale in Saudi Restaurants',
    imageSrc: '/images/restaurants_sector/restaurant_service_wear_supplier.jpeg',
    url: '/blog/restaurant-uniforms-staff-morale'
  },
  {
    title: 'Balancing Modern Trends with Cultural Sensitivities in KSA Restaurant Uniforms',
    imageSrc: '/images/restaurants_sector/modern_restaurant_wear.jpg',
    url: '/blog/modern-cultural-restaurant-uniforms'
  },
  {
    title: 'Uniforms for Delivery Drivers: Branding Your KSA Restaurant on the Go (2025)',
    imageSrc: '/images/restaurants_sector/delivery_staff_uniforms.jpeg',
    url: '/blog/restaurant-delivery-driver-uniforms'
  },
  {
    title: 'Sustainable and Ethical Uniform Choices for Eco-Conscious Saudi Restaurants',
    imageSrc: '/images/restaurants_sector/restaurant_uniform_fabrics.jpeg',
    url: '/blog/sustainable-restaurant-uniforms'
  },
  {
    title: 'The Future of Restaurant Attire: Tech-Infused and Adaptable Uniforms for KSA (2025)',
    imageSrc: '/images/restaurants_sector/restaurant_uniform_design.jpg',
    url: '/blog/future-restaurant-uniform-technology'
  }
];

export default function RestaurantsCategoryPage() {
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
            <span className="text-gray-900">Restaurants Sector</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[400px]">
          <Image 
            src="/images/restaurants_sector/restaurants_thumbnail.jpg" 
            alt="Restaurants Sector Uniforms Blog - Articles and Insights" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Restaurants Sector Uniforms</h1>
                <p className="text-xl mb-8">Articles and guides about specialized uniform solutions for the restaurants and hospitality sector in Saudi Arabia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Restaurant Uniform Expertise</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover comprehensive insights about restaurant sector uniforms, from chef attire to waitstaff uniforms and enhancing your professional image in Saudi Arabia's hospitality industry.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Restaurant Uniform Articles</h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore our collection of articles about restaurant sector uniforms for Saudi food service establishments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {restaurantsPosts.map((post, index) => (
              <BlogPostCard 
                key={index}
                title={post.title}
                imageSrc={post.imageSrc}
                url={post.url}
                category="Restaurants"
                categoryColor="bg-red-600"
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
            <p className="text-gray-700">Explore these important aspects of restaurant sector uniforms</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg bg-red-50">
                <h3 className="text-xl font-bold mb-2">Chef Uniforms</h3>
                <p className="text-gray-700 mb-4">Professional and comfortable chef jackets, pants, and hats for kitchen staff</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-red-50">
                <h3 className="text-xl font-bold mb-2">Waitstaff Attire</h3>
                <p className="text-gray-700 mb-4">Elegant and practical uniforms for servers, hosts, and customer-facing staff</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-red-50">
                <h3 className="text-xl font-bold mb-2">Stain-Resistant Fabrics</h3>
                <p className="text-gray-700 mb-4">Specialized materials designed to withstand the demands of food service environments</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-red-50">
                <h3 className="text-xl font-bold mb-2">Restaurant Branding</h3>
                <p className="text-gray-700 mb-4">Incorporating your restaurant's identity and style into staff uniforms</p>
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
              Be the first to receive new articles about restaurant sector uniforms and exclusive offers.
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