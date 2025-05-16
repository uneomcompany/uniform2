import Link from 'next/link'
import Image from 'next/image'
import SafeImage from '../../components/SafeImage'

export const metadata = {
  canonical: 'https://abjdeat.com/sectors/retail',
  title: 'Retail Sector - Uniform Solutions | Saudi Uniform',
  description: 'Specialized uniform solutions for retail businesses in Saudi Arabia. Professional and comfortable uniforms for retail staff that enhance brand identity and customer experience.',
}

export default function RetailSectorPage() {
  // Product categories
  const products = [
    {
      name: "Sales Associate Uniforms",
      image: "/images/retail_sector/sales_uniforms.jpg",
      description: "Professional and comfortable attire for sales staff that represents your brand and enhances customer service",
      features: [
        "Brand-aligned designs",
        "Comfortable for long shifts", 
        "Durable fabrics",
        "Various style options"
      ]
    },
    {
      name: "Cashier & Front Desk Attire",
      image: "/images/retail_sector/cashier_uniforms.jpg",
      description: "Smart, recognizable uniforms for customer-facing staff at payment and service points",
      features: [
        "Professional appearance",
        "Recognition factor for customers",
        "Comfortable seated design",
        "Storage solutions for tools"
      ]
    },
    {
      name: "Store Manager Uniforms",
      image: "/images/retail_sector/supervisor_uniforms.jpg",
      description: "Distinguished uniforms that help customers identify management personnel while maintaining brand cohesion",
      features: [
        "Premium design elements",
        "Consistent with brand style",
        "Distinguished from staff uniforms",
        "Professional business appearance"
      ]
    },
    {
      name: "Visual Merchandiser Attire",
      image: "/images/retail_sector/store_uniform_design.jpeg",
      description: "Practical and stylish uniforms for staff who arrange product displays and maintain store aesthetics",
      features: [
        "Freedom of movement",
        "Practical for physical work",
        "Stain-resistant fabrics",
        "Multiple pocket options"
      ]
    },
    {
      name: "Security Personnel Uniforms",
      image: "/images/retail_sector/mall_worker_clothing.jpg",
      description: "Professional, authoritative uniforms for retail security staff that balance visibility with brand integration",
      features: [
        "Recognizable security elements",
        "Durable construction",
        "Comfortable for extended wear",
        "Multiple tool attachments"
      ]
    },
    {
      name: "Retail Accessories",
      image: "/images/retail_sector/employee_name_badges.jpg",
      description: "Name badges, branded scarves, ties, aprons, and other accessories to complete your retail staff's professional look",
      features: [
        "Customizable with logos",
        "Brand color options",
        "Professional finishing touches",
        "Practical designs"
      ]
    }
  ];

  // Benefits of specialized retail uniforms
  const benefits = [
    {
      title: "Enhanced Brand Identity",
      description: "Uniforms that reinforce your retail brand's visual identity, creating a cohesive and memorable shopping experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: "Improved Customer Experience",
      description: "Easily identifiable staff uniforms that help customers quickly find assistance, enhancing the shopping experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Professional Appearance",
      description: "Well-designed uniforms that create a professional atmosphere and build customer trust in your retail business",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Staff Unity & Morale",
      description: "Quality uniforms that create team cohesion and pride while eliminating dress code confusion among retail staff",
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
            <span className="text-gray-900">Retail</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[500px]">
          <SafeImage 
            src="/images/retail_sector/retail_uniforms.jpg" 
            alt="Retail staff in professional uniforms" 
            fallbackPaths={[
              "/images/retail_sector/store_uniforms.jpg",
              "/images/retail_sector/retail_thumbnail.jpg",
              "/images/fallback-image.jpg"
            ]}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Retail Sector Uniforms</h1>
                <p className="text-xl mb-8">Professional uniforms that strengthen your brand identity and enhance the shopping experience.</p>
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
              <h2 className="text-3xl font-bold mb-6">Specialized Uniforms for Retail Businesses in Saudi Arabia</h2>
              <p className="text-gray-700 mb-4">
                In today's competitive retail landscape, a cohesive staff appearance is essential for creating a memorable brand experience. At Saudi Uniform Solutions, we specialize in developing retail uniforms that strengthen your brand identity while ensuring staff comfort during long shifts on the sales floor.
              </p>
              <p className="text-gray-700 mb-4">
                Our retail uniform solutions are designed with both practicality and style in mind, catering to different roles within your store—from sales associates and cashiers to managers and merchandisers. Each uniform element works together to create a professional, branded environment that builds customer trust and enhances the shopping experience.
              </p>
              <p className="text-gray-700">
                We work with retail businesses of all sizes across Saudi Arabia, from boutique stores to large department stores and retail chains, delivering uniform programs that support your brand's unique position in the market.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
                <div className="text-gray-600">Years Serving Retail</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
                <div className="text-gray-600">Retail Clients</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
                <div className="text-gray-600">Retail Staff Equipped</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Retail Uniforms</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Brand-aligned designs that reinforce your visual identity</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Comfortable fabrics for long shifts on the sales floor</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Role-differentiated designs for various store positions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Durable construction that withstands retail environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Seasonal options to adapt to changing collections</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Custom accessories that complete your brand's look</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <SafeImage 
              src="/images/retail_sector/sales_uniforms.jpg"
              alt="Professional retail staff uniforms"
              fallbackPaths={[
                "/images/retail_sector/staff_uniforms.jpeg",
                "/images/retail_sector/retail_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/retail_sector/supervisor_uniforms.jpg"
              alt="Store manager professional attire"
              fallbackPaths={[
                "/images/retail_sector/customer_service_uniforms.jpg",
                "/images/retail_sector/retail_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/retail_sector/cashier_uniforms.jpg"
              alt="Cashier uniforms and workwear"
              fallbackPaths={[
                "/images/retail_sector/supermarket_uniforms.jpg",
                "/images/retail_sector/retail_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/retail_sector/employee_name_badges.jpg"
              alt="Retail brand uniform solutions"
              fallbackPaths={[
                "/images/retail_sector/store_logo_caps.jpeg",
                "/images/retail_sector/retail_thumbnail.jpg",
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
            <h2 className="text-3xl font-bold mb-4">Our Retail Uniform Solutions</h2>
            <p className="text-gray-700 mb-6">Discover our comprehensive range of retail uniforms, designed to meet the specific needs of different roles within the retail environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fallbackPaths={[
                      "/images/retail_sector/retail_thumbnail.jpg",
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
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Retail Uniforms</h2>
            <p className="text-gray-700">Our retail uniforms deliver multiple advantages for your business, enhancing both customer experience and staff performance.</p>
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
                    src="/images/retail_sector/retail_showroom_uniforms.jpg"
                    alt="Retail client testimonial"
                    fallbackPaths={[
                      "/images/retail_sector/retail_uniforms_jeddah.jpg",
                      "/images/retail_sector/retail_thumbnail.jpg",
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
                  "Implementing a uniform program with Saudi Uniform Solutions has been transformative for our retail brand. Our staff are immediately recognizable to customers, and the uniforms perfectly reflect our brand's style and quality standards. The durability of the garments has been impressive, even with daily wear, and our staff appreciate the comfort during long shifts. The professional look has definitely increased customer confidence in our team."
                </blockquote>
                <div className="font-medium text-gray-900">Sarah Al-Otaibi</div>
                <div className="text-gray-600">Operations Director, Elegance Fashion Stores, Jeddah</div>
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
            <p className="text-gray-700">Find answers to common questions about our retail uniform solutions.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How can uniforms help strengthen our retail brand?</h3>
              <p className="text-gray-700">Retail uniforms serve as wearable brand ambassadors in your store environment. They visually reinforce your brand identity through consistent colors, styling, and logo placement. When customers encounter staff in branded uniforms, it creates a cohesive experience that strengthens brand recognition and professionalism. Uniforms also help distinguish your staff from customers, making it easier for shoppers to find assistance when needed, which enhances the overall customer experience.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Can we update our retail uniforms seasonally to match our merchandise?</h3>
              <p className="text-gray-700">Absolutely. Many of our retail clients implement seasonal uniform variations to align with their merchandise collections and campaigns. We can create a core uniform program with seasonal elements that can be rotated—such as different colored shirts, scarves, ties, or accessories—allowing your staff appearance to evolve alongside your merchandise. This approach maintains brand consistency while reflecting seasonal changes, and it's also cost-effective compared to completely replacing uniforms.</p>
                  </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you balance brand aesthetics with practical needs for retail staff?</h3>
              <p className="text-gray-700">Our design process carefully considers both brand aesthetics and practical functionality. We start by understanding your brand identity and retail environment, then incorporate practical features needed for different staff roles. For example, we might include stretch fabrics for ease of movement, stain-resistant treatments for high-traffic environments, strategically placed pockets for tools and devices, and fabrics that maintain a crisp appearance throughout long shifts. The result is a uniform that looks great while supporting the practical needs of retail work.</p>
                </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What is the process for implementing a uniform program across multiple store locations?</h3>
              <p className="text-gray-700">For multi-location retailers, we implement a structured rollout process: First, we work with your team to develop the uniform design and specifications that meet needs across all locations. Once approved, we create a detailed sizing process—either through on-site fitting sessions or a digital sizing system. We then establish a distribution plan, either shipping directly to individual stores or to a central location. For ongoing management, we set up a user-friendly reordering system for new employees and replacements. Throughout the process, we provide dedicated support to ensure a smooth implementation across your entire retail network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Retail Brand?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free consultation and discover how Saudi Uniform Solutions can enhance your retail staff's professional appearance and your brand identity.</p>
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