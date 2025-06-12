import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Authors Database
const authors = [
  {
    slug: 'سامي_الهلالي',
    name: 'سامي الهلالي',
    title: 'Senior Uniform Consultant & Industry Expert',
    bio: 'Leading uniform consultant in Saudi Arabia with over 15 years of experience specializing in corporate and industrial uniform solutions.',
    image: "/images/author/placeholder.jpg",
    expertise: [
      'Corporate Uniform Design',
      'Industrial Safety Standards', 
      'Saudi Market Analysis',
      'Sustainable Materials',
      'Quality Control Systems',
      'Client Consultation'
    ],
    experience: '15+ years',
    clients: '200+ Saudi companies',
    certifications: [
      'Certified Uniform Consultant (CUC)',
      'Safety Equipment Professional (SEP)',
      'Saudi Standards Organization Certified',
      'International Textile Institute Member',
      'Occupational Safety Specialist',
      'Corporate Branding Consultant'
    ],
    achievements: [
      'Successfully outfitted 50+ major Saudi corporations',
      'Developed innovative flame-resistant fabric solutions',
      'Led digital transformation in uniform procurement',
      'Established quality standards for Saudi uniform industry',
      'Trained 100+ professionals in uniform best practices',
      'Published research on sustainable uniform materials'
    ],
    services: [
      {
        title: 'Corporate Uniform Consultation',
        description: 'Complete uniform program design and implementation',
        duration: '2-4 weeks',
        price: 'Starting from 15,000 SAR'
      },
      {
        title: 'Industrial Safety Assessment',
        description: 'Comprehensive safety uniform evaluation and recommendations',
        duration: '1-2 weeks', 
        price: 'Starting from 8,000 SAR'
      },
      {
        title: 'Quality Control Auditing',
        description: 'Third-party quality assessment and compliance verification',
        duration: '3-5 days',
        price: 'Starting from 5,000 SAR'
      }
    ],
    contact: {
      email: 'sami.alhilali@saudiuniform.com',
      phone: '+966 50 123 4567',
      linkedin: 'linkedin.com/in/sami-alhilali',
      location: 'Riyadh, Saudi Arabia'
    },
    languages: ['Arabic', 'English'],
    availability: 'Available for consultation',
    testimonials: [
      {
        client: 'Saudi Airlines',
        text: 'Sami transformed our entire uniform program with innovative solutions.',
        rating: 5
      },
      {
        client: 'SABIC',
        text: 'Outstanding expertise in industrial safety uniforms.',
        rating: 5
      }
    ]
  },
  {
    slug: encodeURIComponent('سامي_الهلالي'),
    name: 'سامي الهلالي',
    title: 'Senior Uniform Consultant & Industry Expert',
    bio: 'Leading uniform consultant in Saudi Arabia with over 15 years of experience specializing in corporate and industrial uniform solutions.',
    image: "/images/author/placeholder.jpg",
    expertise: [
      'Corporate Uniform Design',
      'Industrial Safety Standards', 
      'Saudi Market Analysis',
      'Sustainable Materials',
      'Quality Control Systems',
      'Client Consultation'
    ],
    experience: '15+ years',
    clients: '200+ Saudi companies',
    certifications: [
      'Certified Uniform Consultant (CUC)',
      'Safety Equipment Professional (SEP)',
      'Saudi Standards Organization Certified',
      'International Textile Institute Member',
      'Occupational Safety Specialist',
      'Corporate Branding Consultant'
    ],
    achievements: [
      'Successfully outfitted 50+ major Saudi corporations',
      'Developed innovative flame-resistant fabric solutions',
      'Led digital transformation in uniform procurement',
      'Established quality standards for Saudi uniform industry',
      'Trained 100+ professionals in uniform best practices',
      'Published research on sustainable uniform materials'
    ],
    services: [
      {
        title: 'Corporate Uniform Consultation',
        description: 'Complete uniform program design and implementation',
        duration: '2-4 weeks',
        price: 'Starting from 15,000 SAR'
      },
      {
        title: 'Industrial Safety Assessment',
        description: 'Comprehensive safety uniform evaluation and recommendations',
        duration: '1-2 weeks', 
        price: 'Starting from 8,000 SAR'
      },
      {
        title: 'Quality Control Auditing',
        description: 'Third-party quality assessment and compliance verification',
        duration: '3-5 days',
        price: 'Starting from 5,000 SAR'
      }
    ],
    contact: {
      email: 'sami.alhilali@saudiuniform.com',
      phone: '+966 50 123 4567',
      linkedin: 'linkedin.com/in/sami-alhilali',
      location: 'Riyadh, Saudi Arabia'
    },
    languages: ['Arabic', 'English'],
    availability: 'Available for consultation',
    testimonials: [
      {
        client: 'Saudi Airlines',
        text: 'Sami transformed our entire uniform program with innovative solutions.',
        rating: 5
      },
      {
        client: 'SABIC',
        text: 'Outstanding expertise in industrial safety uniforms.',
        rating: 5
      }
    ]
  },
  {
    slug: 'عبدالله_الخالدي',
    name: 'عبدالله الخالدي',
    title: 'Industrial Safety Specialist',
    bio: 'Expert in industrial safety uniforms and protective workwear for high-risk environments.',
    image: "/images/author/placeholder.jpg",
    expertise: [
      'Industrial Safety Standards',
      'Protective Workwear',
      'Flame-Resistant Materials',
      'Chemical Resistance',
      'High-Visibility Uniforms',
      'PPE Integration'
    ],
    experience: '12+ years',
    clients: '150+ industrial companies',
    certifications: [
      'Industrial Safety Specialist',
      'Protective Equipment Certified',
      'Saudi Safety Standards Expert'
    ]
  },
  {
    slug: encodeURIComponent('عبدالله_الخالدي'),
    name: 'عبدالله الخالدي',
    title: 'Industrial Safety Specialist',
    bio: 'Expert in industrial safety uniforms and protective workwear for high-risk environments.',
    image: "/images/author/placeholder.jpg",
    expertise: [
      'Industrial Safety Standards',
      'Protective Workwear',
      'Flame-Resistant Materials',
      'Chemical Resistance',
      'High-Visibility Uniforms',
      'PPE Integration'
    ],
    experience: '12+ years',
    clients: '150+ industrial companies',
    certifications: [
      'Industrial Safety Specialist',
      'Protective Equipment Certified',
      'Saudi Safety Standards Expert'
    ]
  },
  {
    slug: 'محمد_الصالح',
    name: 'محمد الصالح',
    title: 'Uniform Design Expert',
    bio: 'Creative designer specializing in modern uniform aesthetics and corporate branding solutions.',
    image: "/images/author/placeholder.jpg",
    expertise: [
      'Uniform Design',
      'Corporate Branding',
      'Fashion Technology',
      'Color Psychology',
      'Brand Identity',
      'Custom Solutions'
    ],
    experience: '10+ years',
    clients: '100+ brands',
    certifications: [
      'Certified Fashion Designer',
      'Brand Identity Specialist',
      'Textile Design Expert'
    ]
  },
  {
    slug: encodeURIComponent('محمد_الصالح'),
    name: 'محمد الصالح',
    title: 'Uniform Design Expert',
    bio: 'Creative designer specializing in modern uniform aesthetics and corporate branding solutions.',
    image: "/images/author/placeholder.jpg",
    expertise: [
      'Uniform Design',
      'Corporate Branding',
      'Fashion Technology',
      'Color Psychology',
      'Brand Identity',
      'Custom Solutions'
    ],
    experience: '10+ years',
    clients: '100+ brands',
    certifications: [
      'Certified Fashion Designer',
      'Brand Identity Specialist',
      'Textile Design Expert'
    ]
  }
];

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
  const author = authors.find(a => a.slug === decodedSlug)
  
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
  const author = authors.find(a => a.slug === decodedSlug)
  
  if (!author) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 relative">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/author/placeholder.jpg'
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{author.clients || 'N/A'}</div>
                  <div className="text-xs text-gray-600">Companies Served</div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{author.name}</h1>
              
              <p className="text-xl text-blue-100 mb-4">{author.title}</p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{author.experience}</div>
                  <div className="text-sm opacity-80">Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{author.clients || 'N/A'}</div>
                  <div className="text-sm opacity-80">Workers Impacted</div>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${author.contact?.email || 'info@saudiuniform.com'}?subject=Consultation Request&body=Hello ${author.name}, I would like to discuss uniform consultation services for our organization.`}
                  className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Send Email
                </a>
                <a 
                  href={`https://wa.me/${(author.contact?.phone || '+966501234567').replace(/[^0-9]/g, '')}?text=Hello, I would like to connect regarding uniform solutions`}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
                <a 
                  href={author.contact?.linkedin ? `https://${author.contact.linkedin}` : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Biography */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About {author.name}</h2>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">{author.bio}</p>
            </div>
            <div className="space-y-6">
              {/* Expertise */}
              {author.expertise && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {author.certifications && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Certifications</h3>
                  <ul className="space-y-2">
                    {author.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Achievements */}
          {author.achievements && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Achievements</h2>
              <div className="space-y-6">
                {author.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                    <div className="flex items-start">
                      <div className="bg-yellow-400 rounded-full p-2 mr-4 mt-1">
                        <svg className="w-6 h-6 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Consultation Services */}
      {author.services && author.services.length > 0 && (
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Professional Consultation Services</h2>
              <p className="text-yellow-100 text-lg">Get expert guidance from {author.name}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {author.services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Duration: {service.duration}</div>
                      <div className="text-lg font-bold text-orange-600">{service.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a 
                href={`mailto:${author.contact?.email || 'info@saudiuniform.com'}?subject=Consultation Services Inquiry&body=Hello ${author.name}, I would like to get more information about the available consultation services.`}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Get Consultation Quote
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Uniform Program?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with {author.name} for expert consultation and innovative uniform solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`mailto:${author.contact?.email || 'info@saudiuniform.com'}?subject=Professional Consultation Request&body=Hello ${author.name}, I would like to get professional consultation for uniform solutions for our organization.`}
              className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Send Professional Email
            </a>
            <a 
              href={`https://wa.me/${(author.contact?.phone || '+966501234567').replace(/[^0-9]/g, '')}?text=Hello, I need professional consultation for uniform solutions`}
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Consultation
            </a>
            <a 
              href={`tel:${author.contact?.phone || '+966501234567'}`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              {author.contact?.phone || '+966 50 123 4567'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 