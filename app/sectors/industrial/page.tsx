import Link from 'next/link'
import Image from 'next/image'
import SafeImage from '../../components/SafeImage'

export const metadata = {
  title: 'Industrial Sector - Uniform Solutions | Saudi Uniform',
  description: 'Specialized uniform solutions for the industrial sector in Saudi Arabia. Durable workwear and safety equipment for factories, construction, and technical fields.',
}

export default function IndustrialSectorPage() {
  // Product categories
  const products = [
    {
      name: "Work Coveralls",
      image: "/images/industrial_sector/coveralls.jpeg",
      description: "Durable full-body coveralls designed for maximum protection and mobility in industrial environments",
      features: [
        "Durable fabric construction",
        "Multiple utility pockets",
        "High visibility features",
        "Comfortable fit for all-day wear"
      ]
    },
    {
      name: "Heavy-Duty Work Shirts",
      image: "/images/industrial_sector/work_shirts.jpeg",
      description: "Tough work shirts designed for industrial environments with reinforced seams and practical features",
      features: [
        "Reinforced stitching",
        "Breathable materials",
        "Soil-resistant finish",
        "Available in high-visibility options"
      ]
    },
    {
      name: "Industrial Work Pants",
      image: "/images/industrial_sector/work_pants.jpeg",
      description: "Functional work pants with reinforced knees, multiple pockets, and durable construction",
      features: [
        "Knee reinforcement",
        "Multiple utility pockets",
        "Heavy-duty belt loops",
        "Stain-resistant fabric"
      ]
    },
    {
      name: "Hi-Vis Safety Clothing",
      image: "/images/industrial_sector/high_visibility_clothin.jpeg",
      description: "High-visibility clothing for workers in low-light conditions or near moving machinery and vehicles",
      features: [
        "Meets Saudi safety standards",
        "Reflective strips",
        "Durable and washable",
        "Available in vests, jackets, and full uniforms"
      ]
    },
    {
      name: "Fire-Resistant Workwear",
      image: "/images/industrial_sector/fire_resistant_uniforms.jpeg",
      description: "Specially treated fire-resistant uniforms for workers in environments with heat and flame hazards",
      features: [
        "Meets international fire safety standards",
        "Self-extinguishing properties",
        "Heat-resistant materials",
        "Comfortable despite protective features"
      ]
    },
    {
      name: "Protective Equipment & Accessories",
      image: "/images/industrial_sector/safety_helmets.jpg",
      description: "Comprehensive range of safety equipment including helmets, gloves, goggles, and other protective accessories",
      features: [
        "Certified safety standards",
        "Comfortable to wear",
        "Durable materials",
        "Customizable with company logos"
      ]
    },
    {
      name: "Specialized Industry Workwear",
      image: "/images/industrial_sector/oil_gas_worker_uniforms.jpeg",
      description: "Industry-specific workwear solutions for petrochemical, mining, and other specialized sectors",
      features: [
        "Industry-specific protection",
        "Compliance with sector regulations",
        "Advanced protective features",
        "Climate-appropriate design"
      ]
    }
  ];

  // Benefits of specialized industrial uniforms
  const benefits = [
    {
      title: "Enhanced Worker Safety",
      description: "Our industrial uniforms include safety features like high-visibility elements, flame-resistant materials, and reinforced protection zones to reduce workplace incidents",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Increased Productivity",
      description: "Purpose-designed workwear with ergonomic features improves worker comfort and mobility, reducing fatigue and enhancing productivity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Durability & Cost Efficiency",
      description: "Our industrial uniforms are built to last in harsh environments, offering excellent ROI through reduced replacement frequency and maintenance costs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Compliance & Standards",
      description: "Stay compliant with Saudi Arabian workplace safety regulations with our uniforms that meet or exceed all relevant industry standards",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Professional Brand Image",
      description: "Consistent and professional uniforms that enhance your company's image and create a sense of unity among workers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
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
            <span className="text-gray-900">Industrial</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[500px]">
          <SafeImage 
            src="/images/industrial_sector/industrial_uniforms.jpeg" 
            alt="Industrial sector uniforms and workwear" 
            fallbackPaths={[
              "/images/industrial_sector/manufacturing_sector_uniforms.jpeg",
              "/images/industrial_sector/production_line_worker_uniforms.jpeg",
              "/images/industrial_sector/worker_uniforms.jpeg",
              "/images/industrial_sector/industrial_thumbnail.jpg",
              "/images/fallback-image.jpg"
            ]}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Sector Uniforms</h1>
                <p className="text-xl mb-8">Durable, safe, and practical workwear solutions designed for the challenges of industrial environments.</p>
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
              <h2 className="text-3xl font-bold mb-6">Specialized Workwear for Industrial Environments in Saudi Arabia</h2>
              <p className="text-gray-700 mb-4">
                In the demanding world of industrial operations, proper workwear isn't just about appearance—it's a critical component of workplace safety and operational efficiency. At Saudi Uniform Solutions, we understand the unique challenges faced by workers in factories, construction sites, and technical facilities across the Kingdom.
              </p>
              <p className="text-gray-700 mb-4">
                Our industrial uniforms are engineered to provide optimal protection, comfort, and durability in harsh working conditions. From high-visibility elements to flame-resistant fabrics, every feature is designed with worker safety and productivity in mind.
              </p>
              <p className="text-gray-700">
                We serve diverse industries including manufacturing, construction, petrochemical, and infrastructure development, providing tailored uniform solutions that meet stringent safety standards while enhancing your corporate identity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
                <div className="text-gray-600">Years of Industry Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">180+</div>
                <div className="text-gray-600">Industrial Clients</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25,000+</div>
                <div className="text-gray-600">Workers Equipped</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Safety Compliance</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Industrial Uniforms</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Compliant with Saudi and international safety standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Industrial-grade materials for maximum durability</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Ergonomic designs for comfort and mobility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Climate-appropriate fabrics for Saudi conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Customizable with company branding and safety information</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Comprehensive range from basic workwear to specialized PPE</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <SafeImage 
              src="/images/industrial_sector/worker_uniforms.jpeg" 
              alt="Factory worker uniforms" 
              fallbackPaths={[
                "/images/industrial_sector/factory_clothing.jpeg",
                "/images/industrial_sector/industrial_attire.jpeg",
                "/images/industrial_sector/industrial_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/industrial_sector/heavy_duty_industrial_fabrics.jpeg" 
              alt="Industrial heavy-duty fabrics" 
              fallbackPaths={[
                "/images/industrial_sector/durable_work_clothing.jpeg",
                "/images/industrial_sector/cotton_polyester_workwear.jpeg",
                "/images/industrial_sector/industrial_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/industrial_sector/industrial_supervisor_uniforms.jpg" 
              alt="Safety supervisor uniforms" 
              fallbackPaths={[
                "/images/industrial_sector/industrial_uniform_design.jpg",
                "/images/industrial_sector/engineer_wear.jpeg",
                "/images/industrial_sector/industrial_thumbnail.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/industrial_sector/safety_helmets.jpg" 
              alt="Industrial protective equipment" 
              fallbackPaths={[
                "/images/industrial_sector/safety_boots.jpg",
                "/images/industrial_sector/protective_clothing.jpeg",
                "/images/industrial_sector/industrial_thumbnail.jpg",
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
            <h2 className="text-3xl font-bold mb-4">Our Industrial Uniform Solutions</h2>
            <p className="text-gray-700 mb-6">
              From basic workwear to specialized protective clothing, we offer a comprehensive range of industrial uniform solutions tailored to your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fallbackPaths={[
                      `/images/industrial_sector/industrial_attire.jpeg`,
                      `/images/industrial_sector/workwear.jpeg`,
                      `/images/industrial_sector/industrial_thumbnail.jpg`,
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
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Industrial Uniforms</h2>
            <p className="text-gray-700">
              Our industrial uniforms offer multiple advantages for both employers and workers in demanding environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    src="/images/industrial_sector/industrial_supervisor_uniforms.jpg"
                    alt="Industrial client testimonial"
                    fallbackPaths={[
                      "/images/industrial_sector/engineer_wear.jpeg",
                      "/images/industrial_sector/technician_uniforms.jpeg",
                      "/images/industrial_sector/industrial_thumbnail.jpg",
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
                  "Saudi Uniform Solutions has been our trusted partner for industrial workwear for over 5 years. Their uniforms have significantly improved our safety record and worker satisfaction. The quality and durability of their products is exceptional, even in our demanding manufacturing environment. Their team understands industrial requirements and delivers solutions that truly work."
                </blockquote>
                <div className="font-medium text-gray-900">Mohammed Al-Harbi</div>
                <div className="text-gray-600">Operations Manager, Saudi Manufacturing Industries</div>
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
            <p className="text-gray-700">
              Find answers to common questions about our industrial uniform solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What safety standards do your industrial uniforms comply with?</h3>
              <p className="text-gray-700">Our industrial uniforms comply with all relevant Saudi safety standards as well as international standards including ISO, ANSI, and EN specifications for industrial workwear. We regularly update our designs to ensure ongoing compliance with evolving regulations.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Can you customize industrial uniforms with our company logo and specific requirements?</h3>
              <p className="text-gray-700">Yes, we offer full customization services for all our industrial uniforms. This includes company logo embroidery, worker names, department color-coding, and any specific design features you may require. We can also incorporate safety information directly into the uniform design.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you ensure your industrial uniforms are suitable for Saudi Arabia's climate?</h3>
              <p className="text-gray-700">We select materials and designs specifically adapted to Saudi Arabia's climate conditions. This includes breathable fabrics that maintain protection while reducing heat stress, moisture-wicking properties, and lightweight construction where appropriate, all while maintaining required safety standards.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What is the typical turnaround time for a large industrial uniform order?</h3>
              <p className="text-gray-700">Turnaround times depend on order size, customization requirements, and current production capacity. For standard orders, we typically deliver within 2-4 weeks. For large custom orders, the timeline may be 4-6 weeks. We also offer expedited services for urgent requirements at an additional cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Safety and Efficiency in Your Industrial Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free consultation and discover how Saudi Uniform Solutions can provide optimal workwear for your industrial team.</p>
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