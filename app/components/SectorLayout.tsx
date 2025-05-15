import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';

interface SectorLayoutProps {
  sectorName: string;
  sectorPath: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  introduction: ReactNode;
  stats: Array<{ value: string; label: string }>;
  features: Array<string>;
  showcaseImages: Array<{ src: string; alt: string }>;
  products: Array<{
    name: string;
    image: string;
    description: string;
    features: Array<string>;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: ReactNode;
  }>;
  testimonial: {
    quote: string;
    author: string;
    position: string;
    image: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSectors: Array<{
    title: string;
    image: string;
    href: string;
  }>;
}

export default function SectorLayout({
  sectorName,
  sectorPath,
  heroImage,
  heroTitle,
  heroDescription,
  introduction,
  stats,
  features,
  showcaseImages,
  products,
  benefits,
  testimonial,
  faqs,
  relatedSectors
}: SectorLayoutProps) {
  // Fallback for images that might not exist
  const renderImage = (src: string, alt: string, fill: boolean = false, className: string = "") => {
    try {
      return (
        <Image 
          src={src} 
          alt={alt} 
          fill={fill}
          width={fill ? undefined : 300}
          height={fill ? undefined : 200}
          className={`object-cover ${className}`}
        />
      );
    } catch (error) {
      return <ImagePlaceholder text={alt} className={`${fill ? "absolute inset-0" : ""} ${className}`} />;
    }
  };

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
            <span className="text-gray-900">{sectorName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[500px]">
          {renderImage(heroImage, `${sectorName} sector uniforms`, true, "object-cover")}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle}</h1>
                <p className="text-xl mb-8">{heroDescription}</p>
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
              <h2 className="text-3xl font-bold mb-6">Specialized Uniforms for {sectorName} in Saudi Arabia</h2>
              {introduction}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our {sectorName} Uniforms</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden h-48">
                {renderImage(image.src, image.alt, false, "w-full h-48")}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Specialized {sectorName} Uniform Products</h2>
            <p className="text-gray-700">Discover our comprehensive range of {sectorPath} uniforms, designed to meet the specific needs of different roles within the industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  {renderImage(product.image, product.name, true)}
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
            <h2 className="text-3xl font-bold mb-4">Benefits of Specialized {sectorName} Uniforms</h2>
            <p className="text-gray-700">Our {sectorPath} uniforms deliver multiple advantages, enhancing both staff experience and customer perceptions.</p>
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
                  {renderImage(testimonial.image, `${sectorName} client testimonial`, true)}
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
                  {testimonial.quote}
                </blockquote>
                <cite className="block font-medium text-gray-900">
                  {testimonial.author}
                  <span className="text-gray-600 font-normal ml-2">{testimonial.position}</span>
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
            <p className="text-gray-700">Find answers to common questions about our {sectorPath} uniform solutions.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
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
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your {sectorName} Team's Image?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free consultation and discover how Saudi Uniform Solutions can transform your staff's professional appearance.</p>
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
            {relatedSectors.map((sector, index) => (
              <Link key={index} href={sector.href} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  {renderImage(sector.image, sector.title, true, "transition duration-300 group-hover:scale-105")}
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