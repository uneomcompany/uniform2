import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HomeSlider from './components/HomeSlider'
import SectorIcon from './components/SectorIcon'

export const metadata = {
  canonical: 'https://abjdeat.com',
  title: 'Abjdeat - Saudi Arabia\'s Premier Uniform Provider | Professional Workwear Solutions',
  description: 'Leading uniform supplier in Saudi Arabia offering custom workwear solutions for transport, aviation, banking, industrial, restaurant, and retail sectors. Quality guaranteed, Vision 2030 aligned.'
};

export default function Home() {
  const sectors = [
    {
      name: "Transport Sector",
      image: "/images/sectors/transport_thumbnail.jpg",
      href: "/sectors/transport",
      description: "Professional uniforms for transport companies, drivers, and service staff",
      stats: "500+ Companies Served"
    },
    {
      name: "Aviation Sector",
      image: "/images/sectors/aviation_thumbnail.jpg",
      href: "/sectors/aviation",
      description: "Elegant and functional uniforms for airline staff and ground personnel",
      stats: "50+ Airlines & Airports"
    },
    {
      name: "Banking & Finance",
      image: "/images/sectors/banking_finance_thumbnail.jpg",
      href: "/sectors/banking-finance",
      description: "Professional attire for bank employees and financial institutions",
      stats: "200+ Financial Institutions"
    },
    {
      name: "Industrial Sector",
      image: "/images/sectors/industrial_thumbnail.jpg",
      href: "/sectors/industrial",
      description: "Durable workwear and safety equipment for industrial environments",
      stats: "1000+ Industrial Sites"
    },
    {
      name: "Restaurants Sector",
      image: "/images/sectors/restaurants_thumbnail.jpg",
      href: "/sectors/restaurants",
      description: "Stylish and practical uniforms for restaurant staff and culinary teams",
      stats: "800+ Restaurants"
    },
    {
      name: "Retail Sector",
      image: "/images/sectors/retail_thumbnail.jpg",
      href: "/sectors/retail",
      description: "Brand-enhancing uniforms for retail staff that improve customer experience",
      stats: "1500+ Retail Outlets"
    }
  ];

  const slides = [
    {
      image: "/images/transport_sector/custom_transport_uniforms.jpeg",
      title: "Saudi Arabia's Leading Uniform Solutions Provider",
      description: "Transforming workplaces across the Kingdom with premium uniform solutions that enhance brand identity, ensure safety compliance, and boost employee confidence",
    },
    {
      image: "/images/transport_sector/bus_driver_uniforms.jpg",
      title: "Vision 2030 Aligned Uniform Solutions",
      description: "Supporting Saudi Arabia's transformation with innovative workwear that meets international standards while respecting local culture and values",
    },
    {
      image: "/images/industrial_sector/safety_wear.jpeg",
      title: "Safety & Compliance Excellence",
      description: "Industry-leading safety workwear that exceeds SASO standards and international safety regulations, protecting your workforce while maintaining professional appearance",
    },
    {
      image: "/images/banking_finance_sector/banking_uniforms.jpg",
      title: "Elevate Your Corporate Brand",
      description: "Premium corporate attire that reflects your organization's values, builds customer trust, and creates a cohesive professional image across all touchpoints",
    }
  ];

  const companyStats = [
    { number: "15+", label: "Years of Excellence", description: "Serving Saudi businesses" },
    { number: "10,000+", label: "Companies Served", description: "Across all sectors" },
    { number: "500,000+", label: "Uniforms Delivered", description: "With quality guarantee" },
    { number: "99.8%", label: "Client Satisfaction", description: "Proven track record" }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      position: "Operations Director",
      company: "Saudi Transport Co.",
      quote: "Abjdeat has been our uniform partner for over 5 years. Their quality and service are unmatched in the Kingdom.",
      rating: 5
    },
    {
      name: "Fatima Al-Zahra",
      position: "HR Manager",
      company: "National Bank of Saudi",
      quote: "The professional appearance of our staff has significantly improved since partnering with Abjdeat. Highly recommended.",
      rating: 5
    },
    {
      name: "Mohammed Al-Otaibi",
      position: "Safety Manager",
      company: "Industrial Solutions Ltd.",
      quote: "Their safety workwear meets all our compliance requirements while keeping our workers comfortable in harsh conditions.",
      rating: 5
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management" },
    { name: "SASO Certified", description: "Saudi Standards" },
    { name: "OEKO-TEX", description: "Textile Safety" },
    { name: "CE Marking", description: "European Conformity" }
  ];

  return (
    <div>
      {/* Hero Slider Section */}
      <HomeSlider slides={slides} />

      {/* Company Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Saudi Arabia's Premier <span className="text-primary">Uniform Provider</span>
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  With over 15 years of excellence, Abjdeat has established itself as the Kingdom's most trusted uniform solutions provider. We deliver exceptional quality workwear and corporate attire tailored to the specific needs of businesses across Saudi Arabia.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Our commitment to excellence, attention to detail, and deep understanding of industry requirements has made us the preferred uniform partner for leading organizations throughout the Kingdom, supporting Saudi Arabia's Vision 2030 transformation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/request-quote" className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold inline-flex items-center">
                    Get Free Quote
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </Link>
                  <Link href="/about" className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold">
                    Learn More About Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                  <Image 
                    src="/images/transport_sector/custom_transport_uniforms.jpeg"
                    alt="Professional uniform solutions in Saudi Arabia"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Solutions for Every Sector</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From aviation to industrial, banking to retail - we provide specialized uniform solutions that meet the unique requirements of each industry while maintaining the highest standards of quality and compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              // Determine colors based on sector
              let bgClass = "bg-primary bg-opacity-10";
              let borderClass = "border-l-4 border-primary";
              let textColorClass = "text-primary";
              
              if (sector.name.includes("Transport")) {
                bgClass = "bg-blue-100";
                borderClass = "border-l-4 border-blue-500";
                textColorClass = "text-blue-600";
              } else if (sector.name.includes("Aviation")) {
                bgClass = "bg-sky-100";
                borderClass = "border-l-4 border-sky-500";
                textColorClass = "text-sky-600";
              } else if (sector.name.includes("Banking") || sector.name.includes("Finance")) {
                bgClass = "bg-emerald-100";
                borderClass = "border-l-4 border-emerald-500";
                textColorClass = "text-emerald-600";
              } else if (sector.name.includes("Industrial")) {
                bgClass = "bg-amber-100";
                borderClass = "border-l-4 border-amber-500";
                textColorClass = "text-amber-600";
              } else if (sector.name.includes("Restaurants")) {
                bgClass = "bg-red-100";
                borderClass = "border-l-4 border-red-500";
                textColorClass = "text-red-600";
              } else if (sector.name.includes("Retail")) {
                bgClass = "bg-purple-100";
                borderClass = "border-l-4 border-purple-500";
                textColorClass = "text-purple-600";
              }
              
              return (
                <Link key={index} href={sector.href} className="group">
                  <div className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center ${borderClass} group-hover:-translate-y-2`}>
                    <div className={`${bgClass} p-6 rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <SectorIcon 
                        sector={sector.name} 
                        className={`w-14 h-14 ${textColorClass}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{sector.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{sector.description}</p>
                    <div className={`${textColorClass} font-semibold text-sm mb-4`}>
                      {sector.stats}
                    </div>
                    <span className={`${textColorClass} font-semibold inline-flex items-center group-hover:underline`}>
                      Explore Solutions
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <Link href="/sectors" className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center font-semibold text-lg">
              View All Sector Solutions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Leading Companies Choose Abjdeat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and customer satisfaction has made us the preferred uniform partner for thousands of businesses across Saudi Arabia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Design Excellence",
                description: "Bespoke uniform designs that perfectly align with your brand identity, corporate values, and specific operational requirements",
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                )
              },
              {
                title: "Premium Quality Materials",
                description: "Carefully selected fabrics that are comfortable, durable, breathable, and specifically suited for Saudi Arabia's climate conditions",
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              },
              {
                title: "Compliance & Safety Focus",
                description: "All uniforms exceed SASO standards and international safety regulations, ensuring complete compliance with industry-specific requirements",
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              },
              {
                title: "Kingdom-Wide Service",
                description: "Comprehensive service network covering all regions of Saudi Arabia with reliable delivery, maintenance, and ongoing support",
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                )
              },
              {
                title: "Rapid Turnaround",
                description: "Efficient production processes and supply chain management ensuring quick delivery without compromising on quality standards",
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              },
              {
                title: "Competitive Pricing",
                description: "Transparent, competitive pricing with flexible payment terms and volume discounts for large orders and long-term partnerships",
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                )
              },
              {
                title: "Sustainability Commitment",
                description: "Eco-friendly materials and sustainable manufacturing processes supporting Saudi Arabia's environmental goals and Vision 2030",
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                )
              },
              {
                title: "24/7 Customer Support",
                description: "Dedicated customer service team providing round-the-clock support, consultation, and after-sales service throughout the Kingdom",
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"></path>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what leading companies across Saudi Arabia say about our uniform solutions and service excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-primary font-medium">{testimonial.position}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certified Excellence & Quality Assurance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is backed by international certifications and compliance with the highest industry standards.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Insights & Expert Guidance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest trends, regulations, and best practices in uniform solutions across different industries in Saudi Arabia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/transport-fleet-uniform-sourcing" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                <Image 
                  src="/images/transport_sector/transport_uniforms.png"
                  alt="Transport uniform sourcing guide"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-semibold mb-2">TRANSPORT SECTOR</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Strategic Sourcing Guide: Transport Fleet Uniforms in Saudi Arabia
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive guide to sourcing professional transport uniforms that meet safety standards...
                  </p>
                  <span className="text-primary font-semibold inline-flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/blog/banking-uniform-suppliers-guide" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                <Image 
                  src="/images/banking_finance_sector/banking_uniforms.jpg"
                  alt="Banking uniform suppliers guide"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-emerald-600 text-sm font-semibold mb-2">BANKING & FINANCE</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Banking Uniform Suppliers Guide: Professional Excellence in Saudi Arabia
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Essential guide for financial institutions seeking premium uniform solutions...
                  </p>
                  <span className="text-primary font-semibold inline-flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/blog/high-visibility-protective-workwear" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                <Image 
                  src="/images/industrial_sector/safety_wear.jpeg"
                  alt="High visibility protective workwear"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-amber-600 text-sm font-semibold mb-2">INDUSTRIAL SECTOR</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    High-Visibility Protective Workwear: Safety Standards in Saudi Arabia
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide to high-visibility workwear that meets SASO safety requirements...
                  </p>
                  <span className="text-primary font-semibold inline-flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center font-semibold">
              Explore All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Team's Professional Image?</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Join thousands of satisfied clients across Saudi Arabia who trust Abjdeat for their uniform solutions. 
            Contact us today to discuss your requirements and discover how we can help your organization make a lasting impression while ensuring compliance and comfort.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/request-quote" className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center">
              Get Free Consultation & Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors font-semibold text-lg">
              Contact Our Experts
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-lg opacity-90">Design Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Kingdom-Wide</div>
              <div className="text-lg opacity-90">Delivery Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 