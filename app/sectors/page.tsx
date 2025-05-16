import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImagePlaceholder from '../components/ImagePlaceholder';
import SafeImage from '../components/SafeImage';

export const metadata = {
  canonical: 'https://abjdeat.com/sectors',
  title: 'Industry Sectors - Uniform Solutions | Saudi Uniform',
  description: 'Specialized uniform solutions for various industry sectors in Saudi Arabia. Discover professional uniforms tailored for your specific industry needs.',
};

export default function SectorsPage() {
  const sectors = [
    {
      name: "Transport Sector",
      image: "/images/transport_sector/transport_thumbnail.jpg",
      href: "/sectors/transport",
      description: "Professional uniforms for transport companies, drivers, and service staff. Comfortable and durable attire that meets safety standards.",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-100"
    },
    {
      name: "Aviation Sector",
      image: "/images/aviation_sector/aviation_thumbnail.jpg",
      href: "/sectors/aviation",
      description: "Elegant and functional uniforms for airline staff and ground personnel. High-quality attire that reflects the prestige of the aviation industry.",
      color: "from-sky-500 to-sky-700",
      bgColor: "bg-sky-100"
    },
    {
      name: "Banking & Finance",
      image: "/images/banking_finance_sector/banking_thumbnail.jpg",
      href: "/sectors/banking-finance",
      description: "Professional attire for bank employees and financial institutions. Formal uniforms that instill trust and confidence in customers.",
      color: "from-emerald-500 to-emerald-700",
      bgColor: "bg-emerald-100"
    },
    {
      name: "Industrial Sector",
      image: "/images/industrial_sector/industrial_thumbnail.jpg",
      href: "/sectors/industrial",
      description: "Durable workwear and safety equipment for industrial environments. Protective clothing that ensures safety and comfort for workers.",
      color: "from-amber-500 to-amber-700",
      bgColor: "bg-amber-100"
    },
    {
      name: "Restaurants Sector",
      image: "/images/restaurants_sector/restaurants_thumbnail.jpg",
      href: "/sectors/restaurants",
      description: "Stylish and practical uniforms for restaurant staff and culinary teams. Functional attire that enhances the dining experience.",
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-100"
    },
    {
      name: "Retail Sector",
      image: "/images/retail_sector/retail_thumbnail.jpg",
      href: "/sectors/retail",
      description: "Brand-enhancing uniforms for retail staff that improve customer experience. Distinctive attire that reinforces your store's identity.",
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px]">
          <SafeImage 
            src="/images/sectors/sectors_hero.jpg"
            alt="Industry sectors uniform solutions"
            fallbackPaths={[
              "/images/fallback/sectors.jpg", 
              "/images/hero-uniform.jpg",
              "/images/fallback-image.jpg"
            ]}
            fill
            className="object-cover"
            placeholderText="Industry Sectors"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry Sectors</h1>
                <p className="text-xl">Specialized uniform solutions tailored to the unique requirements of different industries across Saudi Arabia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Sectors</span>
          </div>
        </div>
      </div>

      {/* Sectors Cards - New Style Based on Screenshot */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Uniform Solutions for Every Industry</h2>
          <p className="text-center max-w-4xl mx-auto mb-12">
            At Saudi Uniform Solutions, we understand that different industries have unique uniform requirements. Our specialized uniform solutions are designed to meet the specific needs of various sectors, combining functionality, comfort, and professional appearance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-md border border-gray-100`}>
                <div className={`${sector.bgColor} p-6 text-center`}>
                  <h3 className="text-xl font-bold mb-2">{sector.name}</h3>
                  <p className="text-xs text-gray-600">Uniform professionals</p>
                </div>
                <div className="relative h-48">
                  <SafeImage
                    src={sector.image}
                    alt={sector.name}
                    fallbackPaths={[
                      `/images/${sector.name.toLowerCase().replace(' sector', '')}_sector/${sector.name.toLowerCase().replace(' sector', '')}_thumbnail.jpg`,
                      `/images/sectors/${sector.name.toLowerCase().replace(' sector', '')}_thumbnail.jpg`,
                      "/images/fallback-image.jpg"
                    ]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm min-h-[80px]">
                    {sector.description.split('.')[0] + '.'}
                  </p>
                  <Link href={sector.href} className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
                    Explore {sector.name.replace(' Sector', '')} 
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Sector-Specific Uniforms</h2>
            <p className="text-gray-700">Our industry-specialized uniform solutions offer unique advantages for businesses across various sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Our design team has in-depth knowledge of different sectors, ensuring uniforms that meet industry-specific requirements and standards.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Functional Design",
                description: "Each uniform is designed with the specific functional needs of your industry in mind, enhancing comfort and productivity.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                )
              },
              {
                title: "Brand Integration",
                description: "We incorporate your brand identity into the uniform design, creating a cohesive look that reinforces your company's image.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              },
              {
                title: "Quality Materials",
                description: "We select fabrics and materials that meet the specific demands of each industry, ensuring durability and performance.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Customization Options",
                description: "Our uniforms can be customized to suit the specific needs of different roles and positions within your organization.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )
              },
              {
                title: "Comprehensive Service",
                description: "From design and manufacturing to delivery and maintenance, we provide a complete uniform solution for your industry.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find Your Industry?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">We provide uniform solutions for many more industries beyond those listed. Contact us to discuss your specific requirements.</p>
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