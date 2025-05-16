import Link from 'next/link'
import Image from 'next/image'
import SafeImage from '../../components/SafeImage'

export const metadata = {
  canonical: 'https://abjdeat.com/sectors/restaurants',
  title: 'Restaurant Sector - Uniform Solutions | Saudi Uniform',
  description: 'Specialized uniform solutions for restaurants and food service businesses in Saudi Arabia. Stylish and practical uniforms for all restaurant staff, from kitchen to customer service.',
}

export default function RestaurantsSectorPage() {
  // Product categories
  const products = [
    {
      name: "Chef Uniforms",
      image: "/images/restaurants_sector/chef_wear.jpeg",
      description: "Professional chef coats, pants, and hats that combine style with functionality for kitchen staff",
      features: [
        "Heat-resistant fabrics",
        "Stain-resistant treatment", 
        "Breathable design for hot kitchens",
        "Multiple pocket options"
      ]
    },
    {
      name: "Kitchen Staff Attire",
      image: "/images/restaurants_sector/kitchen_staff_uniforms.jpeg",
      description: "Practical and comfortable uniforms for sous chefs, line cooks, and kitchen assistants",
      features: [
        "Durable materials",
        "Easy to clean",
        "Heat protection features",
        "Comfortable for long shifts"
      ]
    },
    {
      name: "Waiter & Waitress Uniforms",
      image: "/images/restaurants_sector/waiter_uniforms.jpeg",
      description: "Elegant and practical uniforms for front-of-house staff that enhance restaurant ambiance",
      features: [
        "Sophisticated design",
        "Stain-resistant fabrics",
        "Comfortable for service activities",
        "Customizable to match restaurant theme"
      ]
    },
    {
      name: "Host & Hostess Attire",
      image: "/images/restaurants_sector/restaurant_host_wear.jpg",
      description: "Stylish uniforms for hosts and hostesses that make a great first impression on guests",
      features: [
        "Elegant appearance",
        "Brand-aligned designs",
        "Comfortable for extended wear",
        "Professional and welcoming look"
      ]
    },
    {
      name: "Bar Staff Uniforms",
      image: "/images/restaurants_sector/barista_wear.jpeg",
      description: "Functional and stylish uniforms for bartenders and bar staff that facilitate efficient service",
      features: [
        "Spill-resistant fabrics",
        "Practical pocket placement",
        "Modern stylish designs",
        "Easy care and maintenance"
      ]
    },
    {
      name: "Restaurant Accessories",
      image: "/images/restaurants_sector/restaurant_aprons.jpeg",
      description: "Essential accessories including aprons, ties, service cloths, and other items to complete the professional look",
      features: [
        "Coordinated with main uniforms",
        "Functional designs",
        "Enhances professional appearance",
        "Customizable with restaurant logo"
      ]
    }
  ];

  // Benefits of specialized restaurant uniforms
  const benefits = [
    {
      title: "Enhanced Customer Experience",
      description: "Professional uniforms create a positive impression on diners and enhance the overall dining experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Strengthened Brand Identity",
      description: "Custom uniforms that reflect your restaurant's theme, cuisine, and brand personality to create a cohesive experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: "Practical Functionality",
      description: "Role-specific designs that address practical needs of different restaurant positions, enhancing staff efficiency",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Staff Professionalism",
      description: "Quality uniforms that instill pride and professionalism in your staff, improving service quality and team cohesion",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/sectors" className="hover:text-blue-600">Sectors</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Restaurants</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[500px]">
          <SafeImage 
            src="/images/restaurants_sector/restaurant_uniforms.jpg" 
            alt="Restaurant staff in professional uniforms" 
            fallbackPaths={[
              "/images/restaurants_sector/restaurant_attire.jpg",
              "/images/restaurants_sector/restaurants_thumbnail.jpg",
              "/images/fallback-image.jpg"
            ]}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Restaurant Sector Uniforms</h1>
                <p className="text-xl mb-8">Stylish, practical, and comfortable uniforms that enhance your restaurant's atmosphere and staff performance.</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
                    Explore Products
                  </Link>
                  <Link href="/request-quote" className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-medium transition">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Specialized Uniforms for Restaurants in Saudi Arabia</h2>
              <p className="text-gray-700 mb-4">
                In the competitive world of restaurants and hospitality, staff appearance plays a crucial role in shaping guest perceptions and reinforcing your brand identity. At Saudi Uniform Solutions, we understand the unique requirements of food service establishments across the Kingdom.
              </p>
              <p className="text-gray-700 mb-4">
                Our restaurant uniforms blend style, comfort, and functionality to meet the diverse needs of all staff positions—from kitchen personnel to front-of-house teams. Each uniform is designed to enhance your restaurant's ambiance while providing practical features that support staff in their specific roles.
              </p>
              <p className="text-gray-700">
                From fine dining establishments to casual eateries, we deliver tailored uniform solutions that help restaurants create memorable dining experiences while ensuring staff comfort during long service hours.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years of Restaurant Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
                <div className="text-gray-600">Restaurants Trust Us</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">8,000+</div>
                <div className="text-gray-600">Food Service Staff Equipped</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Restaurant Uniforms</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Customized designs that reflect your restaurant's concept and cuisine</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Specialized fabrics that withstand food service environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Role-specific features for kitchen, service, and host staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Comfortable designs for long service shifts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Stain-resistant and easy-care fabrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Coordinated accessories to complete your staff's look</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <SafeImage 
              src="/images/restaurants_sector/chef_wear.jpeg" 
              alt="Professional chef uniforms" 
              fallbackPaths={[
                "/images/restaurants_sector/chef_jackets.jpeg",
                "/images/restaurants_sector/restaurants_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/restaurants_sector/waiter_uniforms.jpeg" 
              alt="Elegant waiter and waitress uniforms" 
              fallbackPaths={[
                "/images/restaurants_sector/waiter_vests.jpeg",
                "/images/restaurants_sector/restaurants_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/restaurants_sector/restaurant_host_wear.jpg" 
              alt="Stylish host and hostess attire" 
              fallbackPaths={[
                "/images/restaurants_sector/restaurant_service_wear.jpeg",
                "/images/restaurants_sector/restaurants_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/restaurants_sector/restaurant_aprons.jpeg" 
              alt="Restaurant uniform accessories" 
              fallbackPaths={[
                "/images/restaurants_sector/restaurant_uniform_accessories.jpeg",
                "/images/restaurants_sector/restaurants_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Restaurant Uniform Solutions</h2>
            <p className="text-gray-700 mb-6">Discover our comprehensive range of restaurant uniforms, designed to meet the specific needs of different roles within the food service industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fallbackPaths={[
                      "/images/restaurants_sector/restaurants_thumbnail.jpg",
                      "/images/fallback-image.jpg"
                    ]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Restaurant Uniforms</h2>
            <p className="text-gray-700">Our restaurant uniforms deliver multiple advantages for food service establishments, enhancing both guest experience and staff performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="relative h-64 w-full md:w-64">
                  <SafeImage
                    src="/images/restaurants_sector/restaurant_supervisor_uniforms.jpeg"
                    alt="Restaurant client testimonial"
                    fallbackPaths={[
                      "/images/restaurants_sector/restaurant_chain_uniforms.jpg",
                      "/images/restaurants_sector/restaurants_thumbnail.jpg",
                      "/images/fallback-image.jpg"
                    ]}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="italic text-gray-700 mb-4">
                  "Saudi Uniform Solutions transformed our restaurant's image with their exceptional uniform program. Our chef and kitchen staff appreciate the durable, comfortable uniforms that withstand the heat and pace of a busy kitchen. The waitstaff uniforms perfectly match our restaurant's concept and have become part of our brand identity. Guests frequently compliment our staff's professional appearance."
                </blockquote>
                <div className="font-medium text-gray-900">Faisal Al-Nasser</div>
                <div className="text-gray-600">Owner, Oasis Fine Dining Restaurant, Riyadh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">Find answers to common questions about our restaurant uniform solutions.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Can you create custom designs that match our restaurant's theme?</h3>
              <p className="text-gray-700">Absolutely. We specialize in creating custom uniform designs that align perfectly with your restaurant's concept, cuisine type, and brand identity. Our design team works closely with you to understand your vision and develop uniforms that complement your interior design, menu style, and overall atmosphere. We can incorporate your color scheme, logo, and unique design elements to create a cohesive look.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What makes restaurant uniforms different from regular workwear?</h3>
              <p className="text-gray-700">Restaurant uniforms are specifically designed to meet the unique challenges of food service environments. They feature specialized fabrics that resist stains, odors, and heat, while remaining comfortable during long service shifts. Different roles require specific functional features—kitchen staff need heat resistance and safety features, waitstaff need ease of movement and spill resistance, and front-of-house staff need a polished appearance that enhances your restaurant's ambiance.</p>
                  </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you ensure kitchen uniforms are food-safe and comply with regulations?</h3>
              <p className="text-gray-700">All our kitchen uniforms comply with Saudi food safety regulations and international standards. We use food-safe fabrics and treatments that withstand high-temperature washing required in food service environments. Our chef coats and kitchen uniforms feature designs that minimize contamination risks, with proper closures, protective elements, and fabrics that don't shed fibers. We stay current with all regulatory requirements for food service apparel.</p>
                </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What is the typical turnaround time for restaurant uniform orders?</h3>
              <p className="text-gray-700">Typical delivery time for restaurant uniform orders is 3-4 weeks from design approval. This timeline varies based on order quantity, customization requirements, and specific design elements. For new restaurant openings, we recommend starting the uniform process at least 6-8 weeks before your opening date. We offer expedited services for urgent needs and can provide a detailed timeline during consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Restaurant's Image?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free consultation and discover how Saudi Uniform Solutions can enhance your restaurant's professional appearance and staff performance.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="inline-block bg-white text-blue-700 py-3 px-8 rounded-lg font-bold transition duration-300 hover:bg-gray-100">
              Contact Us
            </Link>
            <Link href="/request-quote" className="inline-block bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold transition duration-300 hover:bg-white hover:text-blue-700">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 