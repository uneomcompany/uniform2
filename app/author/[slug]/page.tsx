import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Authors Database
const authors = {
  'سامي_الهلالي': {
    name: "Sami Al-Hilali",
    arabicName: "Sami Abdullah Al-Hilali",
    title: "Leading Transport Uniform Expert in Saudi Arabia",
    role: "Senior Uniform Consultant & Industry Specialist",
    company: "Saudi Uniform Solutions Company",
    location: "Riyadh, Kingdom of Saudi Arabia",
    experience: "15+ Years Experience",
    establishedYear: "2009",
    clientsServed: "200+",
    workersImpacted: "50,000+",
    bio: "Sami Al-Hilali is a renowned expert in designing and implementing transport uniform solutions across Saudi Arabia and the Gulf region. With over 15 years of specialized experience, he has revolutionized uniform standards for major transport companies, logistics operators, and government transport departments. His expertise encompasses climate-adaptive fabric technologies, ergonomic design principles, and Saudi safety regulation compliance.",
    detailedBackground: "Sami's professional journey began in 2009 with the Saudi Transport Authority, where he identified critical gaps in uniform performance under harsh climate conditions. This experience drove him to pursue advanced studies in fabric technologies and establish himself as the region's leading authority in transport-specific workwear solutions.",
    image: "/images/author/سامي_الهلالي.jpg",
    socialMedia: {
      linkedin: "https://linkedin.com/in/sami-alhilali-uniform-expert",
      twitter: "https://twitter.com/SamiUniformKSA",
      email: "sami.alhilali@saudiuniformsolutions.com",
      phone: "+966 50 123 4567",
      whatsapp: "+966 50 123 4567",
      website: "https://sami-alhilali-expert.com"
    },
    achievements: [
      {
        title: "Designed Uniform Systems for 200+ Transport Companies",
        year: "2009-2024",
        description: "Led the development and implementation of comprehensive uniform programs for over 200 transport companies across the Kingdom"
      },
      {
        title: "Reduced Heat-Related Incidents by 40%",
        year: "2020-2023",
        description: "Through innovative cooling fabrics and climate-adaptive design solutions"
      },
      {
        title: "Developed Industry-First Moisture-Wicking Technology",
        year: "2021",
        description: "Patented fabric technology specifically designed for Saudi Arabia's harsh climate conditions"
      },
      {
        title: "Leading Transport Uniform Standards Committee for Vision 2030",
        year: "2022-Present",
        description: "Chairing the national committee for establishing unified standards for the transport sector"
      },
      {
        title: "Published 25+ Scientific Research Papers on Workwear Technologies",
        year: "2015-2024",
        description: "Research papers published in peer-reviewed international scientific journals"
      },
      {
        title: "Transportation Industry Innovation Excellence Award 2023",
        year: "2023",
        description: "Recognition for exceptional contributions to uniform technology development"
      }
    ],
    consultationServices: [
      {
        service: "Strategic Uniform Planning",
        description: "Design and implementation of comprehensive uniform program strategies",
        duration: "2-4 weeks",
        price: "Starting from SAR 25,000"
      },
      {
        service: "Supplier Selection & Negotiation",
        description: "Expert guidance in supplier evaluation and contract management",
        duration: "1-3 weeks",
        price: "Starting from SAR 15,000"
      },
      {
        service: "Performance & Cost Optimization",
        description: "Analysis and optimization of existing programs for cost reduction",
        duration: "2-6 weeks",
        price: "Starting from SAR 20,000"
      },
      {
        service: "Training & Capacity Building",
        description: "Training internal teams on uniform program management",
        duration: "1-2 weeks",
        price: "Starting from SAR 12,000"
      }
    ]
  },
  'sami-alhilali': {
    name: "Sami Al-Hilali",
    arabicName: "Sami Abdullah Al-Hilali",
    title: "Leading Transport Uniform Expert in Saudi Arabia",
    role: "Senior Uniform Consultant & Industry Specialist",
    company: "Saudi Uniform Solutions Company",
    location: "Riyadh, Kingdom of Saudi Arabia",
    experience: "15+ Years Experience",
    establishedYear: "2009",
    clientsServed: "200+",
    workersImpacted: "50,000+",
    bio: "Sami Al-Hilali is a renowned expert in designing and implementing transport uniform solutions across Saudi Arabia and the Gulf region. With over 15 years of specialized experience, he has revolutionized uniform standards for major transport companies, logistics operators, and government transport departments. His expertise encompasses climate-adaptive fabric technologies, ergonomic design principles, and Saudi safety regulation compliance.",
    detailedBackground: "Sami's professional journey began in 2009 with the Saudi Transport Authority, where he identified critical gaps in uniform performance under harsh climate conditions. This experience drove him to pursue advanced studies in fabric technologies and establish himself as the region's leading authority in transport-specific workwear solutions.",
    image: "/images/author/سامي_الهلالي.jpg",
    socialMedia: {
      linkedin: "https://linkedin.com/in/sami-alhilali-uniform-expert",
      twitter: "https://twitter.com/SamiUniformKSA",
      email: "sami.alhilali@saudiuniformsolutions.com",
      phone: "+966 50 123 4567",
      whatsapp: "+966 50 123 4567",
      website: "https://sami-alhilali-expert.com"
    },
    achievements: [
      {
        title: "Designed Uniform Systems for 200+ Transport Companies",
        year: "2009-2024",
        description: "Led the development and implementation of comprehensive uniform programs for over 200 transport companies across the Kingdom"
      },
      {
        title: "Reduced Heat-Related Incidents by 40%",
        year: "2020-2023",
        description: "Through innovative cooling fabrics and climate-adaptive design solutions"
      },
      {
        title: "Developed Industry-First Moisture-Wicking Technology",
        year: "2021",
        description: "Patented fabric technology specifically designed for Saudi Arabia's harsh climate conditions"
      },
      {
        title: "Leading Transport Uniform Standards Committee for Vision 2030",
        year: "2022-Present",
        description: "Chairing the national committee for establishing unified standards for the transport sector"
      },
      {
        title: "Published 25+ Scientific Research Papers on Workwear Technologies",
        year: "2015-2024",
        description: "Research papers published in peer-reviewed international scientific journals"
      },
      {
        title: "Transportation Industry Innovation Excellence Award 2023",
        year: "2023",
        description: "Recognition for exceptional contributions to uniform technology development"
      }
    ],
    consultationServices: [
      {
        service: "Strategic Uniform Planning",
        description: "Design and implementation of comprehensive uniform program strategies",
        duration: "2-4 weeks",
        price: "Starting from SAR 25,000"
      },
      {
        service: "Supplier Selection & Negotiation",
        description: "Expert guidance in supplier evaluation and contract management",
        duration: "1-3 weeks",
        price: "Starting from SAR 15,000"
      },
      {
        service: "Performance & Cost Optimization",
        description: "Analysis and optimization of existing programs for cost reduction",
        duration: "2-6 weeks",
        price: "Starting from SAR 20,000"
      },
      {
        service: "Training & Capacity Building",
        description: "Training internal teams on uniform program management",
        duration: "1-2 weeks",
        price: "Starting from SAR 12,000"
      }
    ]
  },
  'عبدالله_الخالدي': {
    name: "Abdullah Al-Khalidi",
    arabicName: "Abdullah Mohammed Al-Khalidi",
    title: "Aviation & Tourism Uniform Expert",
    role: "Senior Aviation Uniform Consultant & Industry Expert",
    company: "Al-Khalidi Consulting Group",
    location: "Jeddah, Kingdom of Saudi Arabia",
    experience: "12+ Years Experience",
    establishedYear: "2012",
    clientsServed: "150+",
    workersImpacted: "35,000+",
    bio: "Abdullah Al-Khalidi is a distinguished expert in aviation and tourism uniform design in Saudi Arabia. Specialized in innovative uniform solutions for pilots, flight crews, and airport personnel.",
    detailedBackground: "Abdullah began his professional career with Saudi Airlines in 2012, developing expertise in advanced fabric technologies and elegant uniform design.",
    image: "/images/author/عبدالله_الخالدي.jpg",
    socialMedia: {
      linkedin: "https://linkedin.com/in/abdullah-alkhalidi",
      twitter: "https://twitter.com/AbdullahUniform",
      email: "abdullah@alkhalidi-consulting.com",
      phone: "+966 55 987 6543",
      whatsapp: "+966 55 987 6543",
      website: "https://alkhalidi-consulting.com"
    },
    achievements: [
      {
        title: "Designed Aviation Uniforms for 50+ Airlines",
        year: "2012-2024",
        description: "Created comprehensive uniform programs for major aviation companies across the region"
      },
      {
        title: "Enhanced Brand Identity for Tourism Sector",
        year: "2018-2023",
        description: "Developed uniform standards that improved brand recognition by 60%"
      }
    ],
    consultationServices: [
      {
        service: "Aviation Uniform Design",
        description: "Specialized uniform solutions for airlines and aviation companies",
        duration: "3-5 weeks",
        price: "Starting from SAR 30,000"
      },
      {
        service: "Tourism Industry Uniforms",
        description: "Professional uniform programs for hotels and tourism companies",
        duration: "2-4 weeks",
        price: "Starting from SAR 20,000"
      }
    ]
  },
  'محمد_الصالح': {
    name: "Mohammed Al-Saleh",
    arabicName: "Mohammed Abdulrahman Al-Saleh",
    title: "Banking & Finance Uniform Expert",
    role: "Senior Banking Uniform Consultant",
    company: "Banking Expertise Consulting House",
    location: "Riyadh, Kingdom of Saudi Arabia",
    experience: "10+ Years Experience",
    establishedYear: "2014",
    clientsServed: "100+",
    workersImpacted: "25,000+",
    bio: "Mohammed Al-Saleh is a leading expert in designing and developing uniforms for banking and financial institutions in Saudi Arabia. Specialized in elegant and professional solutions that reflect the image of financial institutions.",
    detailedBackground: "Mohammed launched his career in banking uniforms in 2014, becoming a certified expert in developing professional elegance standards for the Saudi banking sector.",
    image: "/images/author/محمد_الصالح.jpg",
    socialMedia: {
      linkedin: "https://linkedin.com/in/mohammed-alsaleh",
      twitter: "https://twitter.com/MohammedBanking",
      email: "mohammed@banking-expertise.com",
      phone: "+966 50 456 7890",
      whatsapp: "+966 50 456 7890",
      website: "https://banking-expertise.com"
    },
    achievements: [
      {
        title: "Transformed Banking Sector Uniforms",
        year: "2014-2024",
        description: "Modernized uniform standards for 100+ banking institutions across Saudi Arabia"
      },
      {
        title: "Enhanced Customer Trust through Professional Image",
        year: "2017-2023",
        description: "Studies showed 45% improvement in customer confidence through refined uniform designs"
      }
    ],
    consultationServices: [
      {
        service: "Banking Uniform Strategy",
        description: "Comprehensive uniform programs for financial institutions",
        duration: "2-3 weeks",
        price: "Starting from SAR 18,000"
      },
      {
        service: "Professional Image Consulting",
        description: "Expert guidance on corporate image and uniform standards",
        duration: "1-2 weeks",
        price: "Starting from SAR 12,000"
      }
    ]
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'سامي_الهلالي' },
    { slug: encodeURIComponent('سامي_الهلالي') },
    { slug: 'sami-alhilali' },
    { slug: 'عبدالله_الخالدي' },
    { slug: encodeURIComponent('عبدالله_الخالدي') },
    { slug: 'محمد_الصالح' },
    { slug: encodeURIComponent('محمد_الصالح') },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug)
  const author = authors[decodedSlug as keyof typeof authors]
  
  if (!author) {
    return {
      title: 'Author Not Found',
      description: 'This author was not found'
    }
  }

  return {
    title: `${author.name} | Leading Uniform Expert in Saudi Arabia | Professional Consultant`,
    description: `${author.name} - Leading uniform expert in Saudi Arabia with ${author.experience}. Specialized in climate-adaptive design, fabric technologies, and advanced industrial solutions.`,
    keywords: `${author.name}, uniform expert, Saudi Arabia consultant, uniform designer, industry specialist`,
    robots: 'index, follow',
    openGraph: {
      title: `${author.name} | Leading Uniform Expert`,
      description: `Distinguished uniform consultant with ${author.experience} in Saudi Arabia`,
      type: 'profile',
      locale: 'en_US',
      images: [
        {
          url: author.image,
          width: 1200,
          height: 630,
          alt: `${author.name} - Uniform Expert`
        }
      ]
    },
    alternates: {
      canonical: `https://abjdeat.com/author/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@SamiUniformKSA',
      creator: '@SamiUniformKSA',
      title: `${author.name} | Uniform Expert`,
      description: `Distinguished uniform consultant with ${author.experience} in Saudi Arabia`,
      images: [author.image]
    }
  }
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug)
  const author = authors[decodedSlug as keyof typeof authors]
  
  if (!author) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/patterns/geometric-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-blue-200 mb-8">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <Link href="/author" className="hover:text-white transition-colors">
              Authors
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{author.name}</span>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Author Image */}
            <div className="md:col-span-4">
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{author.clientsServed}</div>
                    <div className="text-xs text-gray-600">Companies Served</div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{author.experience}</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Info */}
            <div className="md:col-span-8 text-white">
              <div className="flex items-center mb-4">
                <h1 className="text-4xl md:text-5xl font-bold mr-4">{author.name}</h1>
                <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Certified Expert
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-4">{author.title}</p>
              <p className="text-lg text-blue-200 mb-6">{author.role}</p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">120,000+</div>
                  <div className="text-sm opacity-80">Total Views</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm opacity-80">Articles Published</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{author.workersImpacted}</div>
                  <div className="text-sm opacity-80">Workers Impacted</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-80">Years Experience</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${author.socialMedia.email}?subject=Consultation Request&body=Hello ${author.name}, I would like to discuss uniform consultation services for our organization.`}
                  className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Book Consultation
                </a>
                <a 
                  href={`https://wa.me/${author.socialMedia.whatsapp.replace(/[^0-9]/g, '')}?text=Hello, I would like to connect regarding uniform solutions`}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                  </svg>
                  WhatsApp
                </a>
                <a 
                  href={author.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Expert</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">{author.bio}</p>
                <p className="text-gray-700 leading-relaxed">{author.detailedBackground}</p>
              </div>
              <div className="space-y-6">
                {/* Achievements */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {author.achievements.slice(0, 3).map((achievement, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-3">
                        <h4 className="font-semibold text-green-800 text-sm">{achievement.title}</h4>
                        <p className="text-green-700 text-xs">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Services */}
        {author.consultationServices.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Professional Consultation Services</h2>
                <p className="text-yellow-100 text-lg">Customized solutions for your organization's uniform needs</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {author.consultationServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{service.service}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-semibold text-gray-700">{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Price:</span>
                          <span className="font-bold text-green-600">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a 
                  href={`mailto:${author.socialMedia.email}?subject=Consultation Services Inquiry&body=Hello ${author.name}, I would like to get more information about the available consultation services.`}
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Book Your Consultation Now
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative p-12 text-center">
            <div className="absolute inset-0 bg-[url('/images/patterns/geometric-pattern.svg')] opacity-10"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">Need Professional Consultation?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Connect with {author.name}, the leading uniform expert in Saudi Arabia, and get customized solutions for your organization
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={`mailto:${author.socialMedia.email}?subject=Professional Consultation Request&body=Hello ${author.name}, I would like to get professional consultation for uniform solutions for our organization.`}
                  className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Start Your Consultation Now
                </a>
                <a 
                  href={`https://wa.me/${author.socialMedia.whatsapp.replace(/[^0-9]/g, '')}?text=Hello, I need professional consultation for uniform solutions`}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                  </svg>
                  Instant WhatsApp
                </a>
                <a 
                  href={`tel:${author.socialMedia.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  {author.socialMedia.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 