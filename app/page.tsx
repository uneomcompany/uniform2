import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HomeSlider from './components/HomeSlider'
import SectorIcon from './components/SectorIcon'

export const metadata = {
  canonical: 'https://abjdeat.com',
  title: 'Abjdeat - Saudi Arabia\'s Premier Uniform Provider',
  description: 'Professional uniform solutions for all sectors in Saudi Arabia including transport, aviation, banking, industrial, restaurant, and retail industries.'
};

export default function Home() {
  const sectors = [
    {
      name: "Transport Sector",
      image: "/images/sectors/transport_thumbnail.jpg",
      href: "/sectors/transport",
      description: "Professional uniforms for transport companies, drivers, and service staff"
    },
    {
      name: "Aviation Sector",
      image: "/images/sectors/aviation_thumbnail.jpg",
      href: "/sectors/aviation",
      description: "Elegant and functional uniforms for airline staff and ground personnel"
    },
    {
      name: "Banking & Finance",
      image: "/images/sectors/banking_finance_thumbnail.jpg",
      href: "/sectors/banking-finance",
      description: "Professional attire for bank employees and financial institutions"
    },
    {
      name: "Industrial Sector",
      image: "/images/sectors/industrial_thumbnail.jpg",
      href: "/sectors/industrial",
      description: "Durable workwear and safety equipment for industrial environments"
    },
    {
      name: "Restaurants Sector",
      image: "/images/sectors/restaurants_thumbnail.jpg",
      href: "/sectors/restaurants",
      description: "Stylish and practical uniforms for restaurant staff and culinary teams"
    },
    {
      name: "Retail Sector",
      image: "/images/sectors/retail_thumbnail.jpg",
      href: "/sectors/retail",
      description: "Brand-enhancing uniforms for retail staff that improve customer experience"
    }
  ];

  const slides = [
    {
      image: "/images/transport_sector/custom_transport_uniforms.jpeg",
      title: "Professional Uniforms for Saudi Companies",
      description: "Comprehensive uniform solutions for all sectors in Saudi Arabia with world-class quality standards",
    },
    {
      image: "/images/transport_sector/bus_driver_uniforms.jpg",
      title: "Transport Sector Specialists",
      description: "Tailored uniforms designed for comfort, safety, and professional appearance for all transport staff",
    },
    {
      image: "/images/industrial_sector/safety_wear.jpeg",
      title: "Safety & Compliance Focused",
      description: "Durable workwear that meets all Saudi safety regulations while maintaining professional appearance",
    },
    {
      image: "/images/banking_finance_sector/banking_uniforms.jpg",
      title: "Elevate Your Corporate Image",
      description: "Premium corporate attire that reflects your brand values and enhances customer trust",
    }
  ];

  return (
    <div className="home-page pt-0">
      {/* Hero Slider Section */}
      <HomeSlider slides={slides} />

      {/* Intro Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Saudi Arabia's Premier Uniform Provider</h2>
            <p className="text-lg text-gray-700 mb-8">
              With over a decade of experience, Saudi Uniform delivers exceptional quality workwear and corporate attire 
              tailored to the specific needs of businesses across the Kingdom. Our commitment to excellence, attention to 
              detail, and understanding of industry requirements has made us the trusted uniform partner for leading 
              organizations throughout Saudi Arabia.
            </p>
            <div className="flex justify-center">
              <Link href="/about" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sectors */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services for Various Sectors</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                  <div className={`card hover:shadow-lg transition-shadow p-6 text-center ${borderClass}`}>
                    <div className={`${bgClass} p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4`}>
                      <SectorIcon 
                        sector={sector.name} 
                        className={`w-12 h-12 ${textColorClass}`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{sector.name}</h3>
                    <p className="text-gray-600 mb-4">{sector.description}</p>
                    <span className={`${textColorClass} font-medium inline-flex items-center group-hover:underline`}>
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/sectors" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors inline-flex items-center">
              View All Sectors
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16 py-16 bg-gray-50 -mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Saudi Uniform?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Designs",
                description: "Tailored uniforms designed to match your brand identity and specific requirements",
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                )
              },
              {
                title: "Quality Materials",
                description: "Premium fabrics that are comfortable, durable, and suitable for Saudi Arabia's climate",
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              },
              {
                title: "Compliance Focused",
                description: "All uniforms meet Saudi safety regulations and industry-specific standards",
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              },
              {
                title: "Nationwide Service",
                description: "Serving businesses across Saudi Arabia with reliable delivery and support",
                icon: (
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 bg-primary text-white py-16 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Team's Appearance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your uniform requirements and discover how we can help your organization make a lasting impression.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-quote" className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium">
              Request a Quote
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-primary transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 