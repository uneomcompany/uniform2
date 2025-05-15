import Link from 'next/link'
import Image from 'next/image'
import BlogPostCard from '../../components/BlogPostCard'

export const metadata = {
  title: 'Banking & Finance Sector Uniforms - Blog | Saudi Uniform',
  description: 'Explore articles about elegant and professional uniforms for banks, financial institutions, and administrative offices in Saudi Arabia.',
}

// Banking & Finance sector posts
const bankingPosts = [
    {
    title: 'Projecting Trust & Professionalism: 2025 Uniform Styles for Saudi Banks',
    imageSrc: '/images/banking_finance_sector/bank_uniforms.jpg',
    url: '/blog/bank-uniform-styles-2025'
  },
  {
    title: 'The Evolution of Banker Attire: Modern Uniform Solutions for KSA Finance Sector (2025)',
    imageSrc: '/images/banking_finance_sector/banking_uniforms.jpg',
    url: '/blog/modern-banking-uniform-solutions'
    },
    {
    title: 'Dressing for Success: How Uniforms Impact Customer Perception in Saudi Banks',
    imageSrc: '/images/banking_finance_sector/banking_attire.jpeg',
    url: '/blog/bank-uniforms-customer-perception'
  },
  {
    title: 'Choosing the Right Fabrics for Comfortable and Professional Banking Uniforms in KSA\'s Climate',
    imageSrc: '/images/banking_finance_sector/premium_uniform_fabrics.jpeg',
    url: '/blog/banking-uniform-fabrics-ksa'
    },
    {
    title: 'Custom Corporate Wear: Tailoring Uniforms for Saudi Financial Institutions',
    imageSrc: '/images/banking_finance_sector/custom_bank_uniforms.jpg',
    url: '/blog/custom-financial-institution-uniforms'
  },
  {
    title: 'Uniform Guidelines for Tellers, Customer Service, and Management in Saudi Banks',
    imageSrc: '/images/banking_finance_sector/customer_service_uniforms.jpg',
    url: '/blog/bank-uniform-guidelines'
  },
  {
    title: 'The ROI of High-Quality Uniforms for Employee Morale in KSA Banking',
    imageSrc: '/images/banking_finance_sector/bank_confidence_boosting_attire.jpeg',
    url: '/blog/banking-uniforms-employee-morale'
  },
    {
    title: 'Balancing Tradition and Modernity in Saudi Banking Uniform Design (2025)',
    imageSrc: '/images/banking_finance_sector/bank_uniform_visual_identity.jpeg',
    url: '/blog/traditional-modern-banking-uniforms'
  },
  {
    title: 'Subtle Branding: Incorporating Bank Logos Elegantly into KSA Uniforms',
    imageSrc: '/images/banking_finance_sector/bank_employee_uniforms.jpg',
    url: '/blog/subtle-bank-logo-branding'
    },
    {
    title: 'Uniform Solutions for Islamic Finance Institutions in Saudi Arabia (2025)',
    imageSrc: '/images/banking_finance_sector/financial_institution_uniforms.jpeg',
    url: '/blog/islamic-finance-uniform-solutions'
  },
  {
    title: 'A Guide to Selecting Uniform Suppliers for the Saudi Banking & Finance Sector',
    imageSrc: '/images/banking_finance_sector/banking_attire_supply.jpg',
    url: '/blog/banking-uniform-suppliers-guide'
    },
    {
    title: 'Ensuring a Cohesive Brand Image Across All Branches with Uniform Standards in KSA',
    imageSrc: '/images/banking_finance_sector/branch_uniform_supply_management.jpg',
    url: '/blog/cohesive-bank-branch-uniforms'
    },
    {
    title: 'The Future of Financial Workwear: Smart & Sustainable Options for Saudi Banks (2025)',
    imageSrc: '/images/banking_finance_sector/financial_uniforms.jpg',
    url: '/blog/future-financial-workwear'
    },
    {
    title: 'Uniforms as a Tool for Enhancing Security and Identification in KSA Banks',
    imageSrc: '/images/banking_finance_sector/bank_manager_uniforms.jpeg',
    url: '/blog/bank-uniforms-security-identification'
    },
    {
    title: 'Beyond the Suit: Accessory and Detail Trends for Saudi Banking Uniforms in 2025',
    imageSrc: '/images/banking_finance_sector/formal_blazers.jpeg',
    url: '/blog/banking-uniform-accessories-trends'
  }
];

export default function BankingFinanceCategoryPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Banking & Finance Sector</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        <div className="relative h-[400px]">
          <Image 
            src="/images/banking_finance_sector/banking_thumbnail.jpg" 
            alt="Banking & Finance Sector Uniforms Blog - Articles and Insights" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Banking & Finance Sector Uniforms</h1>
                <p className="text-xl mb-8">Articles and guides about specialized uniform solutions for the banking and finance sector in Saudi Arabia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Banking & Finance Uniform Expertise</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover comprehensive insights about banking sector uniforms, from teller attire to management dress codes and enhancing your professional image in Saudi Arabia's financial industry.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Banking & Finance Uniform Articles</h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore our collection of articles about banking and finance sector uniforms for Saudi financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bankingPosts.map((post, index) => (
              <BlogPostCard 
                key={index}
                title={post.title}
                imageSrc={post.imageSrc}
                url={post.url}
                category="Banking & Finance"
                categoryColor="bg-emerald-600"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Topics</h2>
            <p className="text-gray-700">Explore these important aspects of banking and finance sector uniforms</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg bg-emerald-50">
                <h3 className="text-xl font-bold mb-2">Professional Banking Attire</h3>
                <p className="text-gray-700 mb-4">Elegant and formal uniforms that convey trust and professionalism for customer-facing staff</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-emerald-50">
                <h3 className="text-xl font-bold mb-2">Executive & Management Uniforms</h3>
                <p className="text-gray-700 mb-4">Distinguished and refined uniforms for senior banking and financial management roles</p>
              </div>
              
              <div className="p-6 border rounded-lg bg-emerald-50">
                <h3 className="text-xl font-bold mb-2">Branch Identity & Branding</h3>
                <p className="text-gray-700 mb-4">Creating consistent visual identity through uniforms across multiple bank locations</p>
                </div>
              
              <div className="p-6 border rounded-lg bg-emerald-50">
                <h3 className="text-xl font-bold mb-2">Corporate Wear Standards</h3>
                <p className="text-gray-700 mb-4">Establishing and implementing uniform policies for financial institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8">
              Be the first to receive new articles about banking and finance sector uniforms and exclusive offers.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold transition duration-300 hover:bg-gray-100"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 