import Link from 'next/link'
import Image from 'next/image'
import SafeImage from '../../components/SafeImage'

export const metadata = {
  canonical: 'https://abjdeat.com/sectors/transport',
  title: 'Transport Sector - Uniform Solutions | Saudi Uniform',
  description: 'Specialized uniform solutions for the transport sector in Saudi Arabia. Comfortable and professional attire for drivers and service staff that meets safety standards.',
}

export default function TransportSectorPage() {
  // Product categories
  const products = [
    {
      name: "Public Transport Driver Uniforms",
      image: "/images/transport_sector/bus_driver_uniforms.jpg",
      description: "Comfortable and durable uniforms for bus drivers and public transport operators that reflect professionalism",
      features: ["Wrinkle-resistant fabrics", "Comfortable design for long driving periods", "Available in various colors and patterns"]
    },
    {
      name: "Taxi and Limousine Driver Attire",
      image: "/images/transport_sector/chauffeur_limousine_driver_uniforms.jpeg",
      description: "Elegant and sophisticated uniforms for taxi and limousine drivers that enhance the premium customer experience",
      features: ["Luxury fabric", "Custom badges and accessories", "Sophisticated look suited for premium transport services"]
    },
    {
      name: "Transport Service Staff Clothing",
      image: "/images/transport_sector/transport_station_staff_clothing.jpeg",
      description: "Uniform attire for customer service staff at transport stations and service offices",
      features: ["Practical design", "All-day comfort", "Reflects brand identity"]
    },
    {
      name: "Maintenance Crew Uniforms",
      image: "/images/transport_sector/loading_unloading_crew_uniforms.jpeg",
      description: "Durable and practical uniforms for vehicle maintenance teams that meet technical work requirements",
      features: ["Resistant to stains and oils", "Durable for heavy use", "Equipped with multiple tool pockets"]
    },
    {
      name: "Reflective Vests and Safety Clothing",
      image: "/images/transport_sector/reflective_vest.jpeg",
      description: "Reflective vests and safety clothing to ensure worker visibility in low-light conditions",
      features: ["Complies with safety standards", "High reflectivity", "Lightweight and comfortable"]
    },
    {
      name: "Complete Uniform Sets",
      image: "/images/transport_sector/complete_transport_sector_outfit_sets.jpeg",
      description: "Comprehensive uniform sets including shirts, trousers, jackets, and accessories",
      features: ["Integrated solutions", "Cost-effective", "Unified and coordinated appearance"]
    }
  ];

  // Benefits of specialized transport uniforms
  const benefits = [
    {
      title: "Enhance Corporate Identity",
      description: "Uniforms that reflect your company's identity and help customers quickly recognize your staff",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: "Improve Employee Satisfaction",
      description: "Comfortable clothing appropriate for the nature of the work enhances job satisfaction and improves performance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Enhance Safety Standards",
      description: "Uniforms that meet safety requirements in the transport sector and provide necessary protection for workers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Suitable for Climate Conditions",
      description: "Carefully selected fabrics to suit Saudi Arabia's climate and provide comfort in all conditions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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
            <span className="text-gray-900">Transport</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[500px]">
          <SafeImage 
            src="/images/transport_sector/transport_thumbnail.jpg"
            alt="Transport sector uniforms"
            fallbackPaths={[
              "/images/sectors/transport_hero.jpg",
              "/images/transport_sector/transport_company_uniforms.jpeg",
              "/images/transport_sector/custom_transport_uniforms.jpeg",
              "/images/fallback-image.jpg"
            ]}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Transport Sector Uniforms</h1>
                <p className="text-xl mb-8">Specialized uniform solutions that combine comfort, durability, and professional appearance for all transport sector staff.</p>
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
              <h2 className="text-3xl font-bold mb-6">Specialized Uniforms for the Transport Sector in Saudi Arabia</h2>
              <p className="text-gray-700 mb-4">
                At Saudi Uniform Solutions, we provide comprehensive uniform solutions designed specifically to meet the needs of transport companies operating in Saudi Arabia.
              </p>
              <p className="text-gray-700 mb-4">
                We understand the unique challenges faced by transport sector workers, from harsh weather conditions to long working hours, which is why we offer uniforms that combine comfort, durability, and professional appearance.
              </p>
              <p className="text-gray-700">
                Our transport uniforms are designed to enhance your company's image while providing comfort and functionality for drivers, maintenance staff, and customer service personnel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years of Transport Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Transport Clients</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">3,000+</div>
                <div className="text-gray-600">Transport Staff Equipped</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Transport Uniforms</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Compliant with Saudi specifications and standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Durable fabrics that withstand daily use</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Custom designs that reflect your company's identity</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Comfortable for long working hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Safety features for enhanced visibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Climate-appropriate materials for Saudi weather</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <SafeImage 
              src="/images/transport_sector/driver_uniforms.jpeg"
              alt="Transport driver uniform"
              fallbackPaths={[
                "/images/sectors/transport_driver.jpg",
                "/images/transport_sector/drivers_attire.jpeg", 
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/transport_sector/transport_station_staff_clothing.jpeg"
              alt="Transport staff clothing"
              fallbackPaths={[
                "/images/transport_sector/transport_clothing.jpeg",
                "/images/transport_sector/transport_uniforms.png",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/transport_sector/comfortable_driving_workwear.jpeg"
              alt="Comfortable driving workwear"
              fallbackPaths={[
                "/images/sectors/transport_comfortable.jpg",
                "/images/transport_sector/bus_driver_uniforms.jpg", 
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/transport_sector/transport_fleet_uniform_solutions.jpeg"
              alt="Transport fleet uniform solutions"
              fallbackPaths={[
                "/images/sectors/transport_fleet.jpg",
                "/images/transport_sector/custom_transport_uniforms.jpeg", 
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
            <h2 className="text-3xl font-bold mb-4">Our Specialized Transport Uniform Products</h2>
            <p className="text-gray-700 mb-6">Discover our comprehensive range of transport uniforms, designed to meet the specific needs of different roles within the transport industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fallbackPaths={[
                      `/images/transport_sector/driver_uniforms.jpeg`,
                      `/images/transport_sector/transport_thumbnail.jpg`,
                      `/images/fallback-image.jpg`
                    ]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <svg className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                      Explore {product.name}
                      <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Specialized Transport Uniforms</h2>
            <p className="text-gray-700">Our transport uniforms deliver multiple advantages for transport companies, enhancing both staff experience and customer perceptions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100">
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">Find answers to common questions about our transport uniform solutions.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What makes transport uniforms different from other workwear?",
                  answer: "Transport uniforms are specifically designed to meet the unique requirements of the transport sector. They feature enhanced comfort for long periods of sitting, durable fabrics that withstand constant use, visibility elements for safety, and climate-appropriate materials. Our transport uniforms balance professional appearance with practical features for drivers and support staff."
                },
                {
                  question: "Can you add safety features to transport uniforms?",
                  answer: "Yes, we incorporate various safety features in our transport uniforms, including high-visibility elements, reflective strips, fire-resistant fabrics where required, and appropriate fit to prevent accidents. We ensure all safety elements comply with Saudi transport regulations while maintaining comfort and style."
                },
                {
                  question: "How long does it take to supply uniforms for a transport company?",
                  answer: "Typical delivery time for transport company orders is 3-5 weeks from design approval. This timeline varies based on order quantity, customization requirements, and specific design elements. We offer expedited services for urgent needs and can provide a detailed timeline during consultation."
                },
                {
                  question: "Do you provide different uniform options for different transport roles?",
                  answer: "Absolutely. We offer specialized uniform options for various transport roles including drivers, maintenance technicians, customer service staff, and management. Each uniform is designed with role-specific features while maintaining consistent branding across all positions."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Transport Team's Image?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free consultation and discover how Saudi Uniform Solutions can transform your transport staff's professional appearance.</p>
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

      {/* Related Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Other Sectors</h2>
            <p className="text-gray-700">Discover our uniform solutions for other industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Aviation Sector",
                href: "/sectors/aviation",
                description: "Professional uniforms for aviation staff and ground crew"
              },
              {
                title: "Banking & Finance",
                href: "/sectors/banking-finance",
                description: "Corporate attire for financial institutions"
              },
              {
                title: "Retail Sector",
                href: "/sectors/retail",
                description: "Stylish uniforms for retail staff and customer service"
              }
            ].map((sector, index) => (
              <Link 
                key={index} 
                href={sector.href} 
                className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.title}</h3>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 