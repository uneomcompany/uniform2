import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Saudi Uniform Blog - Professional Uniform Experts Since 2010',
  description: 'Learn about Saudi Uniform, the leading uniform provider in Saudi Arabia since 2010. Discover our journey, expertise, and commitment to quality uniforms across all sectors.',
  keywords: 'Saudi uniform company, uniform experts Saudi Arabia, professional uniforms KSA, about Saudi Uniform, uniform provider Riyadh',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="text-primary font-medium">About Us</li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="bg-primary rounded-xl overflow-hidden mb-12">
        <div className="relative h-96">
          <div className="absolute inset-0 bg-primary/90"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
                Saudi Arabia's Premier Uniform Solutions Provider Since 2010
              </h1>
              <p className="text-white text-xl max-w-2xl">
                Crafting excellence in professional attire for diverse sectors across the Kingdom of Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Established in 2010 in the heart of Riyadh, Saudi Uniform emerged from a vision to transform the uniform landscape in Saudi Arabia. What began as a modest family-owned business with a small workshop and a team of five skilled tailors has evolved into the Kingdom's most respected name in professional attire.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, envisioning a company that would blend traditional Saudi craftsmanship with modern design principles, set out to create uniforms that would not only meet international standards but also respect the unique cultural and climatic requirements of the region.
            </p>
            <p className="text-gray-700 mb-4">
              Over the past 15 years, we've expanded our operations to serve all major cities in Saudi Arabia, including Jeddah, Dammam, and Mecca. Our journey has been guided by unwavering commitment to quality, continuous innovation, and deep understanding of the specific needs of Saudi enterprises.
            </p>
            <p className="text-gray-700">
              Today, with state-of-the-art production facilities and a team of over 200 dedicated professionals, we're proud to serve thousands of organizations across healthcare, hospitality, aviation, banking, retail, and industrial sectors throughout the Kingdom and beyond.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/author/رائد_المهيدب.jpg"
              alt="Saudi Uniform journey"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>

      {/* Our Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            To provide high-quality, comfortable, and professionally designed uniforms that meet the specific requirements of Saudi Arabian businesses and comply with local regulations and climate conditions.
          </p>
          <p className="text-gray-700">
            We are committed to delivering exceptional value through innovative design, sustainable practices, and unparalleled customer service, ensuring that every uniform we produce enhances the professional image and operational efficiency of our clients.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
          <p className="text-gray-700 mb-4">
            To be the leading uniform provider in the Middle East, recognized for our commitment to excellence, innovation, and sustainable practices in uniform design and manufacturing.
          </p>
          <p className="text-gray-700">
            By 2030, we aim to expand our reach across the GCC and MENA regions, establishing Saudi Uniform as a global benchmark for quality workwear that respects cultural values while embracing technological advancements in fabric development and production processes.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for perfection in every stitch, pursuing continuous improvement in our designs, materials, and processes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace creativity and forward-thinking approaches to solve challenges and enhance our products.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We conduct our business with honesty, transparency, and ethical standards that earn our clients' trust.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We're committed to environmentally conscious practices in our materials, production, and overall operations.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Saudi Uniform</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Materials</h3>
            <p className="text-gray-600 mb-3">
              We source only the highest quality fabrics specifically suited for Saudi Arabia's climate, ensuring comfort, durability, and professional appearance in all conditions.
            </p>
            <p className="text-gray-600">
              Our materials undergo rigorous testing for colorfastness, shrinkage resistance, and durability against frequent washing—essential qualities for uniforms in professional environments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Bespoke Design</h3>
            <p className="text-gray-600 mb-3">
              Our expert designers create custom uniforms that perfectly align with your brand identity while meeting industry standards and cultural considerations.
            </p>
            <p className="text-gray-600">
              Each design begins with a comprehensive consultation to understand your specific requirements, corporate culture, and practical needs, resulting in uniforms that are as unique as your organization.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Seamless Service</h3>
            <p className="text-gray-600 mb-3">
              With our integrated production facilities in Saudi Arabia, we ensure quick turnaround times, efficient delivery, and responsive after-sales support for all clients.
            </p>
            <p className="text-gray-600">
              Our dedicated account managers provide personalized service throughout the entire process, from initial design to delivery and beyond, ensuring a hassle-free experience even for complex uniform programs.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Faris Al-Najdi",
              position: "Founder & CEO",
              image: "/images/author/فارس_النجدي.png",
              bio: "With over 25 years in the textile industry, Faris brings unparalleled expertise to Saudi Uniform, guiding our strategic vision and expansion across the region."
            },
            {
              name: "Suha Al-Yami",
              position: "Design Director",
              image: "/images/author/سهى_اليامي.jpg",
              bio: "A graduate of London College of Fashion with 15 years of experience, Suha leads our innovative design department, blending traditional elements with contemporary trends."
            },
            {
              name: "Raed Al-Muhaydib",
              position: "Operations Manager",
              image: "/images/author/رائد_المهيدب.jpg",
              bio: "Raed ensures our production meets the highest standards with maximum efficiency, overseeing our state-of-the-art facilities and optimizing our manufacturing processes."
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sami Al-Hilali",
              position: "Supply Chain Director",
              image: "/images/author/سامي_الهلالي.jpg",
              bio: "Sami oversees our global supply chain, ensuring sustainable sourcing of premium materials while maintaining efficient inventory management."
            },
            {
              name: "Rana Al-Fifi",
              position: "Customer Relations Manager",
              image: "/images/author/رنا_الفيفي.jpg",
              bio: "With her exceptional interpersonal skills, Rana leads our customer relations team, ensuring that every client receives personalized attention and support."
            },
            {
              name: "Jawad Al-Hazmi",
              position: "Quality Assurance Director",
              image: "/images/author/جواد_الحازمي.jpg",
              bio: "Jawad implements rigorous quality control measures across all production stages, maintaining our reputation for excellence and consistency."
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Our Achievements */}
      <div className="mb-16 bg-primary/5 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-xl font-medium mb-2">Years of Excellence</p>
            <p className="text-gray-600">Pioneering uniform solutions in Saudi Arabia since 2010</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-xl font-medium mb-2">Corporate Clients</p>
            <p className="text-gray-600">Trusted by leading businesses across all sectors</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <p className="text-xl font-medium mb-2">Team Members</p>
            <p className="text-gray-600">Dedicated professionals committed to excellence</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">12</div>
            <p className="text-xl font-medium mb-2">Industry Awards</p>
            <p className="text-gray-600">Recognition for design innovation and quality</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary rounded-xl p-10 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Elevate Your Team's Appearance?</h2>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your uniform needs and discover how we can help create a professional image that perfectly represents your organization's values and standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Request a Consultation
          </Link>
          <Link
            href="/blog"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Explore Our Blog
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "Saudi Uniform has been our trusted partner for over 7 years. Their attention to detail and understanding of our corporate identity has made them invaluable to our operations. The durability of their uniforms has significantly reduced our replacement costs.",
              author: "Ahmed Al-Qasim",
              position: "Head of Corporate Services",
              company: "Saudi Airlines",
              image: "/images/author/أحمد_القاسم.jpg"
            },
            {
              quote: "Working with Saudi Uniform has simplified our uniform management process significantly. Their durable products, responsive customer service, and ability to accommodate our diverse staff needs make them stand out in the industry.",
              author: "Janan Al-Suwailem",
              position: "Operations Director",
              company: "Ritz-Carlton Riyadh",
              image: "/images/author/جنان_السويلم.jpg"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mr-5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <svg className="h-8 w-8 text-primary/20 mb-3" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-primary">{testimonial.position}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}