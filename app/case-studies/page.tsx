import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies | Saudi Arabia Uniform Blog',
  description: 'Explore real-world examples of successful uniform implementations across various industries in Saudi Arabia.',
}

// Case Studies data
const caseStudies = [
  {
    title: "How Saudi Aramco Revamped Their Workwear for Enhanced Safety and Comfort",
    slug: "saudi-aramco-workwear-revamp-safety-comfort",
    excerpt: "A detailed analysis of how Saudi Aramco improved worker safety and satisfaction through their comprehensive uniform redesign project.",
    image: "/images/industrial_sector/safety_wear.jpeg",
    industry: "Oil & Gas",
    results: "42% reduction in workplace incidents, 87% employee satisfaction",
    date: "2023-10-20",
  },
  {
    title: "NEOM's Innovative Approach to Sustainable Staff Uniforms",
    slug: "neom-innovative-approach-sustainable-staff-uniforms",
    excerpt: "Exploring how NEOM implemented eco-friendly uniforms that align with their sustainability goals while maintaining functionality and comfort.",
    image: "/images/industrial_sector/protective_clothing.jpeg",
    industry: "Urban Development",
    results: "90% sustainable materials, 30% reduced environmental impact",
    date: "2023-09-18",
  },
  {
    title: "Modernizing Hospital Staff Attire: King Faisal Specialist Hospital's Journey",
    slug: "modernizing-hospital-staff-attire-king-faisal-specialist-hospital",
    excerpt: "How King Faisal Specialist Hospital upgraded their medical uniforms to improve functionality, comfort, and patient-staff interactions.",
    image: "/images/retail_sector/retail_uniforms.jpg",
    industry: "Healthcare",
    results: "95% staff approval, improved infection control metrics",
    date: "2023-11-05",
  },
  {
    title: "Riyadh Schools Consortium: Reimagining School Uniforms for the Modern Era",
    slug: "riyadh-schools-consortium-reimagining-school-uniforms",
    excerpt: "A case study of how multiple Riyadh schools collaborated to develop uniforms that balance tradition, comfort, and contemporary design.",
    image: "/images/retail_sector/store_uniforms.jpg",
    industry: "Education",
    results: "Increased student satisfaction, reduced uniform violations by 65%",
    date: "2023-08-30",
  },
]

export default function CaseStudies() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore real-world examples of successful uniform implementations and solutions across various industries in Saudi Arabia.
        </p>
      </header>

      <div className="space-y-12">
        {caseStudies.map((study) => (
          <div key={study.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
            <Link href={`/blog/case-studies/${study.slug}`}>
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={study.image || '/images/fallback-image.jpg'}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500 ml-4">{study.date}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{study.excerpt}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Key Results:</h3>
                    <p className="text-primary font-medium">{study.results}</p>
                  </div>
                  <div className="mt-6">
                    <span className="text-primary font-medium flex items-center">
                      Read Full Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Want to see how our uniform solutions can benefit your organization?
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Us for a Consultation
        </Link>
      </div>
    </div>
  )
} 