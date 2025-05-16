import Link from 'next/link';
import Image from 'next/image';
import SafeImage from '../../components/SafeImage';

export const metadata = {
  canonical: 'https://abjdeat.com/sectors/aviation',
  title: 'Aviation Sector Uniforms - Saudi Uniform Solutions',
  description: 'Professional uniforms for airline staff, ground crew, and aviation personnel. High-quality, customizable aviation uniforms designed for Saudi Arabian airlines and airports.',
}

export default function AviationSectorPage() {
  const products = [
    {
      name: "Cabin Crew Uniforms",
      image: "/images/aviation_sector/cabin-crew-uniforms.jpg",
      description: "Stylish and functional uniforms for flight attendants that represent your airline's brand with elegance and professionalism.",
      features: [
        "Wrinkle-resistant fabrics for a polished appearance throughout long flights",
        "Comfortable fit designed for constant movement and service",
        "Distinctive styling that reinforces your airline's brand identity",
        "Fire-resistant materials adhering to aviation safety standards"
      ]
    },
    {
      name: "Pilot Uniforms",
      image: "/images/aviation_sector/pilot-uniforms.jpg", 
      description: "Professional and authoritative pilot uniforms that convey expertise and inspire passenger confidence.",
      features: [
        "Premium fabrics that maintain a professional appearance",
        "Comfortable designs for long periods in the cockpit",
        "Proper shoulder boards and rank insignias",
        "Options for both warm and cold climate operations"
      ]
    },
    {
      name: "Ground Staff Uniforms",
      image: "/images/aviation_sector/ground-staff-uniforms.jpg",
      description: "Practical and smart uniforms for check-in agents, gate staff, and customer service representatives.",
      features: [
        "Durable materials that withstand busy airport environments",
        "Distinctive styling for easy passenger recognition",
        "Comfortable for long shifts at counters and gates",
        "Weather-appropriate options for staff working in various conditions"
      ]
    },
    {
      name: "Maintenance Crew Workwear",
      image: "/images/aviation_sector/maintenance-crew-workwear.jpg",
      description: "Durable and practical workwear for aircraft maintenance teams that prioritizes safety and functionality.",
      features: [
        "High-visibility elements for safety on the tarmac",
        "Durable fabrics that withstand technical work conditions",
        "Multiple pockets for tools and equipment",
        "Reinforced seams for heavy-duty use"
      ]
    },
    {
      name: "Airport Security Uniforms",
      image: "/images/aviation_sector/security-uniforms.jpg",
      description: "Professional security uniforms that project authority while ensuring comfort during long shifts.",
      features: [
        "Durable materials suitable for security operations",
        "Tactical features to accommodate security equipment",
        "Professional appearance that commands respect",
        "Comfortable for standing and patrolling duties"
      ]
    },
    {
      name: "Aviation Accessories",
      image: "/images/aviation_sector/aviation-accessories.jpg",
      description: "Complete your aviation staff's professional appearance with coordinated accessories that enhance your brand identity.",
      features: [
        "Scarves and ties in airline brand colors",
        "Professional name badges and wings",
        "Matching bags and luggage for crew members",
        "Weather-appropriate outerwear with airline branding"
      ]
    }
  ];

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Enhancing Passenger Confidence",
      description: "Professional uniforms instill trust and confidence in passengers, reinforcing the impression of a well-managed airline."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      title: "Strong Brand Recognition",
      description: "Distinctive aviation uniforms serve as powerful brand ambassadors, creating immediate recognition and reinforcing your airline's identity."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Safety Compliance",
      description: "Our aviation uniforms meet all industry safety standards while maintaining comfort and style for your staff."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Operational Efficiency",
      description: "Functional uniform designs with appropriate features for each role help staff perform their duties more effectively."
    }
  ];

  function getProductImage(productName: string, index: number): string {
    const imageMap: Record<string, string> = {
      "Cabin Crew Uniforms": "/images/aviation_sector/air_crew_attire.jpg",
      "Pilot Uniforms": "/images/aviation_sector/pilot_uniforms.jpg",
      "Ground Staff Uniforms": "/images/aviation_sector/ground_crew_uniforms.jpeg",
      "Maintenance Crew Workwear": "/images/aviation_sector/aircraft_technician_wear.jpeg",
      "Airport Security Uniforms": "/images/aviation_sector/aviation_industry_uniforms.jpeg",
      "Aviation Accessories": "/images/aviation_sector/aviation_uniform_accessories.jpg"
    };
    
    return imageMap[productName] || `/images/aviation_sector/aviation_thumbnail.jpg`;
  }

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
            <span className="text-gray-900">Aviation</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[500px]">
          <SafeImage 
            src="/images/aviation_sector/aviation_uniforms.jpg" 
            alt="Aviation uniforms for airline staff" 
            fallbackPaths={[
              "/images/aviation_sector/airline_uniform_suppliers.jpeg",
              "/images/aviation_sector/aviation_thumbnail.jpg",
              "/images/fallback-image.jpg"
            ]}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Aviation Sector Uniforms</h1>
                <p className="text-xl mb-8">Elevate your airline's image with premium quality, distinctive uniforms that reflect the prestige of your aviation brand.</p>
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
              <h2 className="text-3xl font-bold mb-6">Specialized Uniforms for the Aviation Industry in Saudi Arabia</h2>
              <p className="text-gray-700 mb-4">
                In the competitive world of aviation, your staff's appearance plays a crucial role in shaping passenger perceptions and representing your brand. At Saudi Uniform Solutions, we understand the unique requirements of airlines and airport operators in the Kingdom.
              </p>
              <p className="text-gray-700 mb-4">
                Our aviation uniforms combine elegance, functionality, and comfort to meet the diverse needs of cabin crew, pilots, ground staff, and maintenance personnel. Every uniform is designed to enhance your brand identity while ensuring compliance with industry safety standards.
              </p>
              <p className="text-gray-700">
                From prestigious national carriers to regional airlines and airport service providers, we deliver tailored uniform solutions that help aviation businesses maintain their professional image while ensuring staff comfort during long shifts.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Aviation Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Airlines & Aviation Partners</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600">Aviation Staff Equipped</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Safety Standard Compliance</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Aviation Uniforms</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Distinctive designs that reflect your airline's identity and heritage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>High-performance fabrics that maintain appearance during long flights</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Comfort-focused features to support staff during extended shifts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Safety-compliant materials meeting aviation industry standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Comprehensive uniform programs covering all aviation roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Coordinated accessories that complete your professional image</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <SafeImage 
              src="/images/aviation_sector/airline_crew_clothing.jpeg" 
              alt="Aviation staff in professional uniforms" 
              fallbackPaths={[
                "/images/aviation_sector/air_crew_attire.jpg",
                "/images/aviation_sector/aviation_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/aviation_sector/air_crew_attire.jpg" 
              alt="Cabin crew in elegant airline uniforms" 
              fallbackPaths={[
                "/images/aviation_sector/air_crew_attire_dammam.jpeg",
                "/images/aviation_sector/aviation_clothing.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/aviation_sector/pilot_uniforms.jpg" 
              alt="Pilots in professional uniforms" 
              fallbackPaths={[
                "/images/aviation_sector/pilot_uniform_design.jpeg",
                "/images/aviation_sector/captain_uniform.jpeg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/aviation_sector/ground_crew_uniforms.jpeg" 
              alt="Ground staff in branded airline uniforms" 
              fallbackPaths={[
                "/images/aviation_sector/aircraft_technician_wear.jpeg",
                "/images/aviation_sector/air_cargo_staff_uniforms.jpeg",
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
            <h2 className="text-3xl font-bold mb-4">Our Specialized Aviation Uniform Products</h2>
            <p className="text-gray-700 mb-6">Discover our comprehensive range of aviation uniforms, designed to meet the specific needs of different roles in the airline industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative bg-blue-100 p-4 text-center">
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600">Image placeholder</p>
                </div>
                <div className="relative h-48">
                  <SafeImage
                    src={getProductImage(product.name, index)}
                    alt={product.name}
                    fallbackPaths={[
                      `/images/aviation_sector/${product.name.toLowerCase().replace(/ /g, '_')}.jpg`,
                      `/images/aviation_sector/aviation_thumbnail.jpg`,
                      "/images/fallback-image.jpg"
                    ]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Specialized Aviation Uniforms</h2>
            <p className="text-gray-700">Our aviation uniforms deliver multiple advantages for airlines and aviation businesses, enhancing both staff experience and passenger perceptions.</p>
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
            <p className="text-gray-700">Find answers to common questions about our aviation uniform solutions.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What fabrics do you use for aviation uniforms?",
                  answer: "We use high-quality, durable fabrics specifically chosen for aviation environments. These include fire-resistant polyester blends, wrinkle-resistant wool blends, and breathable cotton mixes. All our fabrics meet international aviation safety standards and are tested for comfort during long flights."
                },
                {
                  question: "Can you customize uniforms to match our airline branding?",
                  answer: "Absolutely. We offer complete customization services to ensure your uniforms reflect your airline's unique identity. This includes custom colors, logo embroidery, special buttons or accents, and design elements that align with your brand guidelines. Our design team works closely with you throughout the process."
                },
                {
                  question: "How long does it take to fulfill a large aviation uniform order?",
                  answer: "Typical delivery time for large aviation uniform orders is 6-8 weeks from design approval. However, this can vary based on the complexity of designs, quantity, and customization requirements. We offer expedited services for urgent needs and can provide a detailed timeline during the consultation phase."
                },
                {
                  question: "Do you provide uniforms for ground staff as well as flight crew?",
                  answer: "Yes, we provide comprehensive uniform solutions for all aviation roles. This includes cabin crew, pilots, ground operations, customer service representatives, baggage handlers, mechanics, and administrative staff. Each uniform is designed with the specific functions and requirements of the role in mind."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Aviation Staff's Appearance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free consultation and discover how Saudi Uniform Solutions can transform your aviation team's professional image.</p>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Other Sectors</h2>
            <p className="text-gray-700">Discover our uniform solutions for other industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transport Sector",
                image: "/images/transport_sector/transport_thumbnail.jpg",
                href: "/sectors/transport"
              },
              {
                title: "Banking & Finance",
                image: "/images/banking_finance_sector/banking_thumbnail.jpg",
                href: "/sectors/banking-finance"
              },
              {
                title: "Retail Sector",
                image: "/images/retail_sector/retail_thumbnail.jpg",
                href: "/sectors/retail"
              }
            ].map((sector, index) => (
              <Link key={index} href={sector.href} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <SafeImage
                    src={sector.image}
                    alt={sector.title}
                    fallbackPaths={[
                      "/images/transport_sector/transport_thumbnail.jpg",
                      "/images/retail_sector/retail_thumbnail.jpg",
                      "/images/restaurants_sector/restaurants_thumbnail.jpg",
                      "/images/banking_finance_sector/banking_thumbnail.jpg",
                      "/images/aviation_sector/aviation_thumbnail.jpg",
                      "/images/fallback-image.jpg"
                    ]}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-6">{sector.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 