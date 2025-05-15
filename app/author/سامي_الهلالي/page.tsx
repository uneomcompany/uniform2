import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sami Al-Hilali | Uniform Blog Author',
  description: 'Sami Al-Hilali is an expert in transport uniform design and supply across Saudi Arabia with over 12 years of experience.',
}

// Author information
const author = {
  name: "Sami Al-Hilali",
  arabicName: "سامي الهلالي",
  role: "Senior Uniform Consultant",
  bio: "Sami Al-Hilali has over 12 years of experience in uniform design and supply for the transport sector across Saudi Arabia. He specializes in combining practicality with brand alignment for major transport companies in Riyadh, Jeddah, and Dammam. With expertise in fabric selection for the Saudi climate and cultural considerations, Sami has helped numerous companies develop uniform programs that enhance employee comfort while maintaining professional appearances.",
  expertise: ["Transport Uniforms", "Fabric Technology", "Corporate Branding", "Saudi Market"],
  education: "Bachelor's in Textile Design and Business, King Saud University",
  image: "/public/images/author/سامي_الهلالي.jpg",
}

// Author's articles
const articles = [
  {
    title: "Guide to Choosing the Best Transport Uniforms in Saudi Arabia",
    slug: "guide-to-choosing-best-transport-uniforms-saudi-arabia",
    excerpt: "Discover the essential factors to consider when selecting high-quality transport uniforms for your Saudi Arabian business. Learn about suitable fabrics, design elements, and practical features.",
    category: "transport-sector",
    categoryName: "Transport Sector",
    image: "/public/images/transport_sector/best_transport_uniforms.jpeg",
    date: "2023-12-10",
  },
  {
    title: "Transport Uniform Fabrics for Hot Climates",
    slug: "transport-uniform-fabrics-hot-climates",
    excerpt: "An in-depth look at the best fabrics for transport uniforms in Saudi Arabia's challenging climate. Maximize comfort and durability for your staff.",
    category: "uniform-design-customization",
    categoryName: "Uniform Design & Customization",
    image: "/public/images/transport_sector/transport_uniform_fabrics.jpeg",
    date: "2023-11-05",
  },
  {
    title: "Comparing Transport Uniform Suppliers in Riyadh",
    slug: "comparing-transport-uniform-suppliers-riyadh",
    excerpt: "A comprehensive comparison of the top uniform suppliers for transport companies in Riyadh, looking at quality, pricing, and customization options.",
    category: "buying-guides",
    categoryName: "Buying Guides",
    image: "/public/images/transport_sector/transport_uniforms_riyadh.jpeg",
    date: "2023-10-12",
  },
  {
    title: "Creating a Cohesive Uniform Program for Your Fleet",
    slug: "creating-cohesive-uniform-program-fleet",
    excerpt: "Learn how to develop a unified uniform strategy across different roles in your transport business, from drivers to supervisors.",
    category: "uniform-design-customization",
    categoryName: "Uniform Design & Customization",
    image: "/public/images/transport_sector/transport_fleet_uniform_solutions.jpeg",
    date: "2023-09-20",
  },
]

// Helper function to format date
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export default function AuthorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span>Authors</span>
        <span className="mx-2">/</span>
        <span>{author.name}</span>
      </div>

      {/* Author Profile Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <div className="relative h-80 md:h-full">
                <Image 
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6 md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
              <p className="text-primary font-semibold mb-4">{author.role}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">About</h2>
                <p className="text-gray-700">{author.bio}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((skill, index) => (
                    <span key={index} className="bg-lightgray px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3">Education</h2>
                <p className="text-gray-700">{author.education}</p>
              </div>
              
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-primary hover:text-primary-dark">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-primary-dark">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-primary-dark">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author's Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Articles by {author.name}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="card">
              <div className="relative h-48">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <Link href={`/blog/${article.category}`} className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {article.categoryName}
                </Link>
                <h3 className="text-xl font-bold mt-2 mb-3">
                  <Link href={`/blog/${article.category}/${article.slug}`} className="hover:text-primary">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <p className="text-xs text-gray-500">{formatDate(article.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-12 bg-primary text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need Expert Uniform Consultation?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact Sami Al-Hilali for professional advice on transport sector uniforms tailored for the Saudi Arabian market.
        </p>
        <a href="mailto:sami@uniformblog.com" className="btn-secondary inline-block">
          Get in Touch
        </a>
      </section>
    </div>
  )
} 