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
        title: 'Universal Sizing Chart',
        description: 'Complete sizing guide for all body types and measurements',
        type: 'PDF Guide',
        downloadSize: '2.1 MB',
        downloadUrl: '/downloads/universal-sizing-chart.pdf'
      },
      {
        title: 'Men\'s Uniform Sizing',
        description: 'Detailed sizing charts for men\'s workwear and formal uniforms',
        type: 'Interactive Tool',
        downloadSize: 'Online Tool',
        downloadUrl: '/tools/mens-sizing'
      },
      {
        title: 'Women\'s Uniform Sizing',
        description: 'Comprehensive sizing guide for women\'s professional uniforms',
        type: 'Interactive Tool',
        downloadSize: 'Online Tool',
        downloadUrl: '/tools/womens-sizing'
      },
      {
        title: 'Safety Gear Sizing',
        description: 'PPE and safety equipment sizing specifications',
        type: 'PDF Guide',
        downloadSize: '1.8 MB',
        downloadUrl: '/downloads/safety-gear-sizing.pdf'
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
        title: 'SASO Uniform Standards',
        description: 'Saudi Standards Organization requirements for workwear',
        type: 'Official Document',
        downloadSize: '3.4 MB',
        downloadUrl: '/downloads/saso-uniform-standards.pdf'
      },
      {
        title: 'ISO 13688 Protective Clothing',
        description: 'International standard for protective clothing requirements',
        type: 'Standard Document',
        downloadSize: '2.7 MB',
        downloadUrl: '/downloads/iso-13688-protective-clothing.pdf'
      },
      {
        title: 'Flame Resistant Standards',
        description: 'Comprehensive guide to flame-resistant uniform requirements',
        type: 'Safety Guide',
        downloadSize: '4.1 MB',
        downloadUrl: '/downloads/flame-resistant-standards.pdf'
      },
      {
        title: 'Chemical Resistance Guide',
        description: 'Chemical protection standards for industrial uniforms',
        type: 'Technical Guide',
        downloadSize: '2.9 MB',
        downloadUrl: '/downloads/chemical-resistance-guide.pdf'
      }
    ]
  },
  {
    id: 'cost-calculators',
    title: 'Cost Calculators & ROI Tools',
    description: 'Calculate uniform costs, bulk pricing, and return on investment',
    icon: FaCalculator,
    color: 'bg-purple-500',
    resources: [
      {
        title: 'Uniform Cost Calculator',
        description: 'Calculate total uniform costs including customization and accessories',
        type: 'Interactive Calculator',
        downloadSize: 'Online Tool',
        downloadUrl: '/tools/cost-calculator'
      },
      {
        title: 'Bulk Order Pricing Tool',
        description: 'Get accurate pricing for large quantity uniform orders',
        type: 'Pricing Tool',
        downloadSize: 'Online Tool',
        downloadUrl: '/tools/bulk-pricing'
      },
      {
        title: 'ROI Calculator',
        description: 'Calculate return on investment for uniform programs',
        type: 'Business Tool',
        downloadSize: 'Excel Template',
        downloadUrl: '/downloads/uniform-roi-calculator.xlsx'
      },
      {
        title: 'Budget Planning Template',
        description: 'Annual uniform budget planning and tracking spreadsheet',
        type: 'Excel Template',
        downloadSize: '156 KB',
        downloadUrl: '/downloads/uniform-budget-template.xlsx'
      }
    ]
  },
  {
    id: 'procurement-tools',
    title: 'Procurement & Specification Tools',
    description: 'Templates and tools for uniform procurement and specifications',
    icon: FaFileContract,
    color: 'bg-orange-500',
    resources: [
      {
        title: 'RFQ Template',
        description: 'Request for Quote template for uniform procurement',
        type: 'Word Template',
        downloadSize: '89 KB',
        downloadUrl: '/downloads/uniform-rfq-template.docx'
      },
      {
        title: 'Specification Sheet Template',
        description: 'Detailed uniform specification template for suppliers',
        type: 'Excel Template',
        downloadSize: '234 KB',
        downloadUrl: '/downloads/uniform-specification-template.xlsx'
      },
      {
        title: 'Quality Control Checklist',
        description: 'Comprehensive quality inspection checklist for uniform delivery',
        type: 'PDF Checklist',
        downloadSize: '567 KB',
        downloadUrl: '/downloads/quality-control-checklist.pdf'
      },
      {
        title: 'Vendor Evaluation Matrix',
        description: 'Supplier evaluation and comparison tool',
        type: 'Excel Tool',
        downloadSize: '178 KB',
        downloadUrl: '/downloads/vendor-evaluation-matrix.xlsx'
      }
    ]
  },
  {
    id: 'design-customization',
    title: 'Design & Customization Resources',
    description: 'Brand guidelines, logo templates, and customization tools',
    icon: FaLightbulb,
    color: 'bg-red-500',
    resources: [
      {
        title: 'Logo Placement Guide',
        description: 'Best practices for logo placement on uniforms',
        type: 'Design Guide',
        downloadSize: '1.2 MB',
        downloadUrl: '/downloads/logo-placement-guide.pdf'
      },
      {
        title: 'Color Matching Guide',
        description: 'Corporate color matching and brand consistency guide',
        type: 'Color Guide',
        downloadSize: '2.8 MB',
        downloadUrl: '/downloads/color-matching-guide.pdf'
      },
      {
        title: 'Embroidery Specifications',
        description: 'Technical specifications for uniform embroidery',
        type: 'Technical Guide',
        downloadSize: '1.5 MB',
        downloadUrl: '/downloads/embroidery-specifications.pdf'
      },
      {
        title: 'Design Template Kit',
        description: 'Customizable uniform design templates',
        type: 'Design Kit',
        downloadSize: '5.2 MB',
        downloadUrl: '/downloads/uniform-design-templates.zip'
      }
    ]
  },
  {
    id: 'training-materials',
    title: 'Training & Educational Materials',
    description: 'Training resources for uniform care, safety, and best practices',
    icon: FaGraduationCap,
    color: 'bg-indigo-500',
    resources: [
      {
        title: 'Uniform Care Training',
        description: 'Complete training module for proper uniform care and maintenance',
        type: 'Training Module',
        downloadSize: '3.7 MB',
        downloadUrl: '/downloads/uniform-care-training.pdf'
      },
      {
        title: 'Safety Compliance Training',
        description: 'Safety uniform compliance and proper usage training',
        type: 'Safety Course',
        downloadSize: '4.3 MB',
        downloadUrl: '/downloads/safety-compliance-training.pdf'
      },
      {
        title: 'Employee Handbook Template',
        description: 'Uniform policy and guidelines handbook template',
        type: 'Word Template',
        downloadSize: '234 KB',
        downloadUrl: '/downloads/employee-uniform-handbook.docx'
      },
      {
        title: 'Best Practices Guide',
        description: 'Industry best practices for uniform management',
        type: 'Best Practices',
        downloadSize: '2.1 MB',
        downloadUrl: '/downloads/uniform-best-practices.pdf'
      }
    ]
  }
];

const quickTools = [
  {
    title: 'Fabric Selector Tool',
    description: 'Find the perfect fabric for your industry and climate',
    icon: FaSearch,
    url: '/tools/fabric-selector',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    title: 'Size Converter',
    description: 'Convert between international sizing standards',
    icon: FaRuler,
    url: '/tools/size-converter',
    color: 'bg-green-100 text-green-700'
  },
  {
    title: 'Color Matcher',
    description: 'Match corporate colors to available uniform options',
    icon: FaLightbulb,
    url: '/tools/color-matcher',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    title: 'Compliance Checker',
    description: 'Verify uniform compliance with Saudi regulations',
    icon: FaShieldAlt,
    url: '/tools/compliance-checker',
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