import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FaDownload, 
  FaFileAlt, 
  FaCalculator, 
  FaRuler, 
  FaIndustry, 
  FaGraduationCap,
  FaBook,
  FaVideo,
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaCertificate,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaFileContract,
  FaLightbulb,
  FaUsers,
  FaRegClock,
  FaCheckCircle
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Uniform Resources Hub | Saudi Uniform Solutions - Comprehensive Tools & Guides',
  description: 'Access comprehensive uniform resources including sizing guides, industry standards, cost calculators, compliance documents, and expert tools for Saudi Arabian businesses.',
  keywords: [
    'uniform resources Saudi Arabia',
    'uniform sizing guide KSA', 
    'uniform industry standards',
    'uniform cost calculator',
    'uniform compliance guide',
    'workwear resources',
    'uniform procurement tools',
    'Saudi uniform regulations',
    'uniform quality standards',
    'uniform specification templates'
  ],
  openGraph: {
    title: 'Uniform Resources Hub | Saudi Uniform Solutions',
    description: 'Comprehensive uniform resources, tools, and guides for Saudi Arabian businesses',
    url: 'https://saudiuniformsolutions.com/resources',
    siteName: 'Saudi Uniform Solutions',
    images: [
      {
        url: '/images/resources-hub-saudi-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'Uniform Resources Hub Saudi Arabia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Resources Hub | Saudi Uniform Solutions',
    description: 'Comprehensive uniform resources, tools, and guides for Saudi Arabian businesses',
    images: ['/images/resources-hub-saudi-uniforms.jpg'],
  },
  alternates: {
    canonical: 'https://saudiuniformsolutions.com/resources',
  },
};

const resourceCategories = [
  {
    id: 'sizing-guides',
    title: 'Sizing & Measurement Guides',
    description: 'Comprehensive sizing charts and measurement guides for all uniform types',
    icon: FaRuler,
    color: 'bg-blue-500',
    resources: [
      {
        title: 'Standard Sizing Information',
        description: 'Basic sizing guidelines for uniform selection',
        type: 'Information Guide',
        downloadSize: 'View Online',
        downloadUrl: '/about#sizing-info'
      },
      {
        title: 'Measurement Guidelines',
        description: 'How to take accurate measurements for uniform fitting',
        type: 'Guide',
        downloadSize: 'View Online',
        downloadUrl: '/blog/sizing-measurement-guide'
      },
      {
        title: 'Size Chart Reference',
        description: 'Standard size chart for different uniform categories',
        type: 'Reference',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      }
    ]
  },
  {
    id: 'industry-standards',
    title: 'Industry Standards & Compliance',
    description: 'Saudi and international standards for uniform quality and safety',
    icon: FaShieldAlt,
    color: 'bg-green-500',
    resources: [
      {
        title: 'Saudi Uniform Standards',
        description: 'Overview of local uniform standards and requirements',
        type: 'Information',
        downloadSize: 'View Online',
        downloadUrl: '/sectors'
      },
      {
        title: 'Quality Guidelines',
        description: 'Quality standards for professional uniforms',
        type: 'Guidelines',
        downloadSize: 'View Online',
        downloadUrl: '/about#quality'
      },
      {
        title: 'Safety Requirements',
        description: 'Safety standards for industrial and protective uniforms',
        type: 'Safety Guide',
        downloadSize: 'View Online',
        downloadUrl: '/sectors/industrial'
      }
    ]
  },
  {
    id: 'cost-information',
    title: 'Cost Information & Planning',
    description: 'Information about uniform costs and budget planning',
    icon: FaCalculator,
    color: 'bg-purple-500',
    resources: [
      {
        title: 'Cost Estimation Guide',
        description: 'Understanding uniform costs and pricing factors',
        type: 'Information Guide',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      },
      {
        title: 'Budget Planning Tips',
        description: 'How to plan and budget for uniform programs',
        type: 'Planning Guide',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      },
      {
        title: 'Get Custom Quote',
        description: 'Request personalized pricing for your uniform needs',
        type: 'Quote Request',
        downloadSize: 'Online Form',
        downloadUrl: '/contact'
      }
    ]
  },
  {
    id: 'procurement-guides',
    title: 'Procurement & Specification Guides',
    description: 'Guidelines for uniform procurement and specifications',
    icon: FaFileContract,
    color: 'bg-orange-500',
    resources: [
      {
        title: 'Procurement Guidelines',
        description: 'Best practices for uniform procurement',
        type: 'Guide',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      },
      {
        title: 'Specification Requirements',
        description: 'How to specify uniform requirements clearly',
        type: 'Guidelines',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      },
      {
        title: 'Quality Assurance',
        description: 'Ensuring quality in uniform delivery',
        type: 'QA Guide',
        downloadSize: 'View Online',
        downloadUrl: '/about#quality'
      }
    ]
  },
  {
    id: 'design-customization',
    title: 'Design & Customization Information',
    description: 'Information about uniform design and customization options',
    icon: FaLightbulb,
    color: 'bg-red-500',
    resources: [
      {
        title: 'Design Options',
        description: 'Available design and customization options',
        type: 'Design Info',
        downloadSize: 'View Online',
        downloadUrl: '/sectors'
      },
      {
        title: 'Branding Guidelines',
        description: 'How to incorporate your brand into uniforms',
        type: 'Branding Guide',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      },
      {
        title: 'Custom Design Service',
        description: 'Professional custom design consultation',
        type: 'Service Info',
        downloadSize: 'Contact Us',
        downloadUrl: '/contact'
      }
    ]
  },
  {
    id: 'care-maintenance',
    title: 'Care & Maintenance Guides',
    description: 'Information on proper uniform care and maintenance',
    icon: FaGraduationCap,
    color: 'bg-indigo-500',
    resources: [
      {
        title: 'Uniform Care Instructions',
        description: 'Proper care and maintenance of professional uniforms',
        type: 'Care Guide',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      },
      {
        title: 'Maintenance Tips',
        description: 'Extending the life of your uniforms',
        type: 'Tips & Tricks',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      },
      {
        title: 'Professional Cleaning',
        description: 'Information about professional uniform cleaning services',
        type: 'Service Info',
        downloadSize: 'View Online',
        downloadUrl: '/contact'
      }
    ]
  }
];

const quickTools = [
  {
    title: 'Size Guide',
    description: 'Find the right size for your uniform needs',
    icon: FaRuler,
    url: '/contact',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    title: 'Get Quote',
    description: 'Request a personalized quote for your uniforms',
    icon: FaCalculator,
    url: '/contact',
    color: 'bg-green-100 text-green-700'
  },
  {
    title: 'Design Consultation',
    description: 'Discuss custom design options with our experts',
    icon: FaLightbulb,
    url: '/contact',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    title: 'Quality Information',
    description: 'Learn about our quality standards and compliance',
    icon: FaShieldAlt,
    url: '/about',
    color: 'bg-red-100 text-red-700'
  }
];

const supportResources = [
  {
    title: 'Technical Support',
    description: 'Get technical assistance for uniform specifications',
    contact: '+966 11 234 5678',
    email: 'technical@saudiuniformsolutions.com',
    hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    icon: FaTools
  },
  {
    title: 'Design Consultation',
    description: 'Professional design consultation for custom uniforms',
    contact: '+966 11 234 5679',
    email: 'design@saudiuniformsolutions.com',
    hours: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
    icon: FaUsers
  },
  {
    title: 'Emergency Support',
    description: '24/7 support for urgent uniform requirements',
    contact: '+966 50 123 4567',
    email: 'emergency@saudiuniformsolutions.com',
    hours: '24/7 Emergency Hotline',
    icon: FaPhone
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Uniform Resources Hub
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Your comprehensive resource center for uniform procurement, design, compliance, 
              and management in Saudi Arabia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#resource-categories" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Resources
              </Link>
              <Link 
                href="#quick-tools" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Quick Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Resource Documents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Interactive Tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Standards & Guidelines</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tools Section */}
      <section id="quick-tools" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Access Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instantly access our most popular tools for uniform selection, sizing, and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTools.map((tool, index) => (
              <Link 
                key={index}
                href={tool.url}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className={`w-16 h-16 ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="resource-categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our extensive collection of uniform resources, from technical specifications 
              to design templates and compliance guides
            </p>
          </div>

          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={category.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mr-6`}>
                    <category.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-lg text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <FaFileAlt className="text-2xl text-gray-400 mt-1" />
                        <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{resource.downloadSize}</span>
                        <Link 
                          href={resource.downloadUrl}
                          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                          <FaDownload className="mr-2" />
                          Access
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Support & Consultation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of uniform experts is ready to assist you with any questions or specialized requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportResources.map((support, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <support.icon className="text-xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{support.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{support.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhone className="text-blue-400 mr-3" />
                    <span>{support.contact}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-blue-400 mr-3" />
                    <span>{support.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FaRegClock className="text-blue-400 mr-3" />
                    <span>{support.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Additional Resources?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our experts can create custom resources 
            tailored to your specific uniform requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Request Custom Resource
            </Link>
            <Link 
              href="/request-quote" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 