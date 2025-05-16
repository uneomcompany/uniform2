import Link from 'next/link'
import Image from 'next/image'
import SafeImage from '../../components/SafeImage'
import FallbackImage from '../../components/FallbackImage'

export const metadata = {
  canonical: 'https://abjdeat.com/sectors/banking-finance',
  title: 'Banking & Finance Sector Uniforms | Saudi Uniform Solutions',
  description: 'High-quality, professional uniforms for banks and financial institutions in Saudi Arabia. Elevate your corporate image with our elegant uniform solutions.',
}

export default function BankingFinanceSectorPage() {
  // Product categories
  const products = [
    {
      name: "Formal Bank Staff Uniforms",
      image: "/images/banking_finance_sector/bank_employee_uniforms.jpg",
      description: "Elegant and professional uniforms for bank employees that reflect trust and professionalism",
      features: [
        "High-quality fabrics",
        "Design that enhances the institution's image", 
        "Available in various colors and patterns",
        "Comfortable for long office hours"
      ]
    },
    {
      name: "Reception Staff Uniforms",
      image: "/images/banking_finance_sector/customer_service_uniforms.jpg",
      description: "Elegant and sophisticated uniforms for reception staff in banks and financial institutions that reflect the institution's care for its customers",
      features: [
        "Elegant design",
        "All-day comfort",
        "Reflects professional corporate image",
        "Easy customer identification"
      ]
    },
    {
      name: "Executive Management Attire",
      image: "/images/banking_finance_sector/formal_wear.jpg",
      description: "High-quality formal suits and attire for executive managers befitting their status",
      features: [
        "Luxury fabrics",
        "Precision tailoring",
        "Modern design",
        "Perfect fit guarantee"
      ]
    },
    {
      name: "Bank Security Team Uniforms",
      image: "/images/banking_finance_sector/bank_uniform_visual_identity.jpeg",
      description: "Distinctive uniforms for security teams in banks and financial institutions that combine formal appearance with practical functionality",
      features: [
        "Design that conveys confidence",
        "Comfortable for long hours",
        "Durable and suitable for daily use",
        "Functional pockets and features"
      ]
    },
    {
      name: "Banking Services Staff Uniforms",
      image: "/images/banking_finance_sector/banking_uniforms.jpg",
      description: "Uniforms for banking service staff that help customers easily identify them",
      features: [
        "Reflects brand identity",
        "Comfortable for daily use",
        "Easy care",
        "Professional appearance"
      ]
    },
    {
      name: "Banking Accessories",
      image: "/images/banking_finance_sector/formal_blazers.jpeg",
      description: "Accessories that complement formal attire such as scarves, ties, badges, and pins",
      features: [
        "Elegant designs",
        "Enhances corporate identity",
        "Professional touch to the uniform",
        "Customizable with your logo"
      ]
    }
  ];

  // Benefits of specialized banking uniforms
  const benefits = [
    {
      title: "Enhance Customer Trust",
      description: "Professional uniforms enhance customer trust and reflect the credibility of the financial institution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Strengthen Corporate Identity",
      description: "Uniforms that reflect the institution's identity and help distinguish it from competitors",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: "Improve Customer Service",
      description: "Uniforms help customers easily identify staff, facilitating service delivery",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Enhance Organizational Belonging",
      description: "Uniforms enhance employees' sense of belonging to the institution and strengthen team spirit",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
            <span className="text-gray-900">Banking & Finance</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[500px]">
          <SafeImage
            src="/images/banking_finance_sector/banking_uniforms.jpg"
            alt="Banking and finance sector uniforms"
            fallbackPaths={[
              "/images/sectors/banking_finance_hero.jpg",
              "/images/banking_finance_sector/banking_thumbnail.jpg",
              "/images/banking_finance_sector/financial_sector_clothing.jpg",
              "/images/fallback-image.jpg"
            ]}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Banking & Finance Uniforms</h1>
                <p className="text-xl mb-8">Professional, elegant, and trusted uniform solutions for banks and financial institutions in Saudi Arabia.</p>
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
              <h2 className="text-3xl font-bold mb-6">Specialized Uniforms for the Financial Sector in Saudi Arabia</h2>
              <p className="text-gray-700 mb-4">
                In the trust-based world of banking and finance, your staff's appearance plays a crucial role in shaping customer perceptions and representing your brand. At Saudi Uniform Solutions, we understand the unique requirements of financial institutions in the Kingdom.
              </p>
              <p className="text-gray-700 mb-4">
                Our banking uniforms combine elegance, professionalism, and comfort to meet the diverse needs of bank tellers, customer service representatives, management, and security personnel. Every uniform is designed to enhance your brand identity while ensuring staff comfort during long hours.
              </p>
              <p className="text-gray-700">
                From prestigious national banks to financial service providers, we deliver tailored uniform solutions that help financial institutions maintain their professional image while ensuring staff confidence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Finance Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600">Financial Institutions Trust Us</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600">Banking Staff Equipped</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Banking Uniforms</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Distinctive designs that reflect your bank's identity and heritage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>High-quality fabrics that maintain appearance during long days</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Comfort-focused features to support staff during extended hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Professional appearance that inspires customer confidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Comprehensive uniform programs covering all banking roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Coordinated accessories that complete your professional image</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <SafeImage 
              src="/images/banking_finance_sector/bank_employee_uniforms.jpg"
              alt="Professional bank staff uniforms"
              fallbackPaths={[
                "/images/banking_finance_sector/bank_uniforms.jpg",
                "/images/banking_finance_sector/custom_bank_uniforms.jpg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/banking_finance_sector/formal_wear.jpg"
              alt="Banking executives in formal attire"
              fallbackPaths={[
                "/images/banking_finance_sector/business_suit.jpg",
                "/images/banking_finance_sector/bank_manager_uniforms.jpeg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/banking_finance_sector/customer_service_uniforms.jpg"
              alt="Bank reception staff uniforms"
              fallbackPaths={[
                "/images/banking_finance_sector/banking_attire.jpeg",
                "/images/banking_finance_sector/financial_institution_uniforms.jpeg",
                "/images/fallback-image.jpg"
              ]}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <SafeImage 
              src="/images/banking_finance_sector/formal_trousers.jpg"
              alt="Banking uniform accessories"
              fallbackPaths={[
                "/images/banking_finance_sector/formal_blazers.jpeg",
                "/images/banking_finance_sector/bank_shirts.jpg",
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
            <h2 className="text-3xl font-bold mb-4">Our Specialized Banking Uniform Products</h2>
            <p className="text-gray-700 mb-6">Discover our comprehensive range of banking and finance uniforms, designed to meet the specific needs of different roles within financial institutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fallbackPaths={[
                      `/images/banking_finance_sector/bank_uniforms.jpg`,
                      `/images/banking_finance_sector/banking_thumbnail.jpg`,
                      "/images/banking_finance_sector/banking_uniforms.jpg",
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Specialized Banking Uniforms</h2>
            <p className="text-gray-700">Our banking uniforms deliver multiple advantages for financial institutions, enhancing both staff experience and customer perceptions.</p>
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

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="relative h-64 w-full md:w-64">
                  <SafeImage
                    src="/images/banking_finance_sector/bank_employee_uniforms.jpg"
                    alt="Banking client testimonial"
                    fallbackPaths={[
                      "/images/banking_finance_sector/business_suit.jpg",
                      "/images/banking_finance_sector/formal_wear.jpg",
                      "/images/banking_finance_sector/bank_uniforms.jpg",
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
                  "Saudi Uniform Solutions transformed our bank's professional image. Their attention to detail, understanding of the financial sector needs, and commitment to quality have made them our trusted uniform partner for over 7 years. The uniforms not only look professional but are practical and comfortable for our staff's daily roles."
                </blockquote>
                <cite className="block font-medium text-gray-900">
                  Abdullah Al-Harbi
                  <span className="text-gray-600 font-normal ml-2">Head of Operations, Saudi National Bank</span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">Find answers to common questions about our banking uniform solutions.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What specifications should bank uniforms have?",
                  answer: "Bank uniforms should feature high-quality, wrinkle-resistant fabrics that maintain a professional appearance throughout the day. They should be comfortable for long periods of sitting or standing, reflect the bank's brand identity, and be easily distinguishable by customers. Our banking uniforms meet these specifications while providing a polished, trustworthy appearance."
                },
                {
                  question: "Can you customize uniforms to match our bank's corporate identity?",
                  answer: "Absolutely. We offer comprehensive customization services to ensure your uniforms align perfectly with your bank's brand identity. This includes custom colors matching your corporate palette, logo embroidery, branded buttons or accessories, and design elements that reflect your corporate guidelines. Our design team works closely with you throughout the process."
                },
                {
                  question: "How long does it take to supply uniforms for a large financial institution?",
                  answer: "Typical delivery time for large financial institution orders is 4-6 weeks from design approval. However, this can vary based on the complexity of designs, quantity, and customization requirements. We offer expedited services for urgent needs and can provide a detailed timeline during the consultation phase."
                },
                {
                  question: "Do you provide design services for banks starting from scratch?",
                  answer: "Yes, we offer comprehensive design services for financial institutions looking to create a uniform program from scratch. Our experienced designers will work with you to understand your brand identity, corporate culture, and specific requirements. We'll provide concept designs, fabric samples, and prototypes before proceeding to full production."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Financial Institution's Image?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free consultation and discover how Saudi Uniform Solutions can transform your banking team's professional appearance.</p>
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

      {/* Related Sectors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Other Sectors</h2>
            <p className="text-gray-700">Discover our uniform solutions for other industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aviation Sector",
                image: "/images/aviation_sector/aviation_uniforms.jpg",
                fallback: "/images/banking_finance_sector/banking_uniforms.jpg",
                href: "/sectors/aviation"
              },
              {
                title: "Transport Sector",
                image: "/images/transport_sector/transport_uniforms.png",
                fallback: "/images/banking_finance_sector/bank_clothing.jpg",
                href: "/sectors/transport"
              },
              {
                title: "Retail Sector",
                image: "/images/retail_sector/retail_uniforms.jpg",
                fallback: "/images/banking_finance_sector/customer_service_uniforms.jpg",
                href: "/sectors/retail"
              }
            ].map((sector, index) => (
              <Link key={index} href={sector.href} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <SafeImage
                    src={sector.image}
                    alt={sector.title}
                    fallbackPaths={[
                      sector.fallback,
                      "/images/banking_finance_sector/office_wear.jpg",
                      "/images/banking_finance_sector/financial_uniforms.jpg",
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