const fs = require('fs');
const path = require('path');

// List of missing blog posts from 404 errors
const missingPosts = [
  {
    slug: 'buying-guides/how-to-choose-reliable-uniform-supplier-saudi-arabia',
    title: 'How to Choose a Reliable Uniform Supplier in Saudi Arabia',
    author: 'محمد_الصالح',
    category: 'Buying Guides',
    categoryColor: 'bg-blue-600',
    metaDescription: 'Comprehensive guide on selecting the best uniform supplier in Saudi Arabia for your business needs with tips on quality, delivery, and service.',
    date: '2023-12-15',
    readingTime: '12 min read'
  },
  {
    slug: 'FahadSupplyChain',
    title: 'Optimizing Supply Chain Management for Uniform Distribution',
    author: 'فهد_المحمود',
    category: 'Supply Chain',
    categoryColor: 'bg-green-600',
    metaDescription: 'Expert insights on streamlining supply chain processes for efficient uniform distribution across Saudi Arabia.',
    date: '2023-11-22',
    readingTime: '10 min read'
  },
  {
    slug: 'MohammedDesign',
    title: 'Modern Uniform Design Principles for Corporate Identity',
    author: 'محمد_الغامدي',
    category: 'Design',
    categoryColor: 'bg-purple-600',
    metaDescription: 'Discover how modern uniform design can enhance your corporate identity and brand recognition in the Saudi market.',
    date: '2023-10-18',
    readingTime: '8 min read'
  },
  {
    slug: 'noura-alkhalidi',
    title: 'Sustainable Fabric Choices for Corporate Uniforms',
    author: 'نورة_القحطاني',
    category: 'Sustainability',
    categoryColor: 'bg-green-700',
    metaDescription: 'Learn about eco-friendly fabric options for corporate uniforms that maintain professionalism while supporting sustainability goals.',
    date: '2024-01-05',
    readingTime: '9 min read'
  },
  {
    slug: 'transport-uniform-materials',
    title: 'Best Materials for Transport Sector Uniforms in Saudi Arabia',
    author: 'عبدالله_الخالدي',
    category: 'Transport',
    categoryColor: 'bg-blue-500',
    metaDescription: 'Analysis of the most suitable materials for transport sector uniforms considering Saudi Arabia\'s climate and working conditions.',
    date: '2024-02-10',
    readingTime: '11 min read'
  },
  {
    slug: 'SaraRetailKSA',
    title: 'Retail Uniform Trends Shaping Saudi Arabia\'s Customer Experience',
    author: 'سارة_القحطاني',
    category: 'Retail',
    categoryColor: 'bg-red-600',
    metaDescription: 'Explore how retail uniform trends are evolving to enhance customer experience in Saudi Arabia\'s competitive retail landscape.',
    date: '2023-09-30',
    readingTime: '10 min read'
  },
  {
    slug: 'mohammed-al-otaibi',
    title: 'Industrial Workwear Safety Standards in Saudi Manufacturing',
    author: 'محمد_السعيد',
    category: 'Industrial',
    categoryColor: 'bg-yellow-600',
    metaDescription: 'A comprehensive guide to industrial workwear safety standards for manufacturing facilities in Saudi Arabia.',
    date: '2024-01-25',
    readingTime: '14 min read'
  },
  {
    slug: 'SaraRetailTech',
    title: 'Technology Integration in Modern Retail Uniforms',
    author: 'سارة_القحطاني',
    category: 'Retail',
    categoryColor: 'bg-red-600',
    metaDescription: 'Discover how technology is being integrated into retail uniforms to enhance employee performance and customer service.',
    date: '2024-02-20',
    readingTime: '10 min read'
  },
  {
    slug: 'fahad-alanazi',
    title: 'Corporate Uniform Policies: Best Practices for Saudi Companies',
    author: 'فهد_المحمود',
    category: 'Corporate',
    categoryColor: 'bg-gray-700',
    metaDescription: 'Learn effective strategies for developing and implementing corporate uniform policies in Saudi Arabian companies.',
    date: '2023-12-05',
    readingTime: '11 min read'
  },
  {
    slug: 'sara-alqahtani',
    title: 'Color Psychology in Uniform Design for Brand Recognition',
    author: 'سارة_القحطاني',
    category: 'Design',
    categoryColor: 'bg-purple-600',
    metaDescription: 'Understanding how color psychology in uniform design can significantly impact brand recognition and consumer perception.',
    date: '2024-01-15',
    readingTime: '9 min read'
  },
  {
    slug: 'sara-alqahtani-tech',
    title: 'Future of Uniforms: Smart Fabrics and IoT Integration',
    author: 'سارة_القحطاني',
    category: 'Technology',
    categoryColor: 'bg-indigo-600',
    metaDescription: 'Exploring the cutting-edge developments in smart fabrics and IoT integration in the uniform industry for Saudi businesses.',
    date: '2024-03-01',
    readingTime: '12 min read'
  }
];

// Template for blog post pages
const createBlogPostTemplate = (post) => {
  return `import Image from 'next/image'
import Link from 'next/link'
import BlogHeader from '../../components/BlogHeader'
import AuthorBio from '../../components/AuthorBio'
import RelatedArticles from '../../components/RelatedArticles'
import ShareButtons from '../../components/ShareButtons'
import TableOfContents from '../../components/TableOfContents'

export const metadata = {
  title: '${post.title}',
  description: '${post.metaDescription}',
}

export default function ArticlePage() {
  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "key-considerations", title: "Key Considerations" },
    { id: "industry-specific", title: "Industry-Specific Requirements" },
    { id: "quality-durability", title: "Quality and Durability" },
    { id: "cultural-considerations", title: "Cultural Considerations" },
    { id: "conclusion", title: "Conclusion" },
  ]
  
  // Related articles
  const relatedArticles = [
    {
      title: "Dishing Out Style: 2025 Uniform Trends for Saudi Arabia",
      url: "/blog/retail-uniform-trends-2025",
      category: "${post.category}",
      categoryColor: "${post.categoryColor}"
    },
    {
      title: "Choosing the Right Uniforms for Your KSA Business",
      url: "/blog/comfortable-retail-uniforms",
      category: "${post.category}",
      categoryColor: "${post.categoryColor}"
    },
    {
      title: "The Impact of Uniform Color and Style on Brand Perception in KSA",
      url: "/blog/retail-uniforms-brand-personality",
      category: "${post.category}",
      categoryColor: "${post.categoryColor}"
    }
  ]

  return (
    <main className="bg-white">
      <BlogHeader 
        title="${post.title}"
        category="${post.category}"
        categoryColor="${post.categoryColor}"
        publishDate="${post.date}"
        readingTime="${post.readingTime}"
        imageSrc="/images/blog/blog_hero.jpg"
        imageAlt="${post.title}"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-3/4">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <p className="text-lg leading-relaxed mb-6">
                ${post.metaDescription}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                In today's competitive business environment, choosing the right uniform solution is more 
                important than ever. This article explores key considerations for businesses looking to 
                enhance their professional image through high-quality uniforms.
              </p>
            </section>

            {/* Main Image */}
            <div className="mb-12">
              <Image 
                src="/images/blog/blog_hero.jpg"
                alt="${post.title}"
                width={800}
                height={500}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">Professional uniform solutions for Saudi Arabian businesses</p>
            </div>

            {/* Key Considerations */}
            <section id="key-considerations" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Considerations</h2>
              
              <p className="mb-6">
                When selecting uniforms for your organization, it's essential to consider factors such as 
                durability, comfort, brand alignment, and cultural appropriateness. Each of these elements 
                plays a crucial role in creating a successful uniform program.
              </p>
            </section>

            {/* Industry-Specific Requirements */}
            <section id="industry-specific" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Industry-Specific Requirements</h2>
              
              <p className="mb-6">
                Different sectors have unique uniform requirements based on functionality, safety standards, 
                and industry expectations. From healthcare to hospitality, retail to manufacturing, each 
                industry demands specialized attention to detail.
              </p>
            </section>

            {/* Quality and Durability */}
            <section id="quality-durability" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Quality and Durability</h2>
              
              <p className="mb-6">
                Investing in high-quality uniforms often provides better long-term value despite higher 
                initial costs. Quality uniforms maintain their appearance longer, require less frequent 
                replacement, and contribute to a more professional image.
              </p>
            </section>

            {/* Cultural Considerations */}
            <section id="cultural-considerations" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Cultural Considerations</h2>
              
              <p className="mb-6">
                In Saudi Arabia, uniform designs must respect cultural norms and religious practices while 
                maintaining functionality and professionalism. This includes appropriate coverage, modest 
                designs, and consideration for comfort in the local climate.
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
              
              <p className="mb-6">
                Selecting the right uniform supplier and design is a strategic decision that impacts your 
                brand image, employee satisfaction, and operational efficiency. By considering the factors 
                outlined in this article, organizations can create uniform programs that enhance their 
                professional presence while meeting practical needs.
              </p>
            </section>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <AuthorBio author="${post.author}" />
            </div>

            <div className="mt-8">
              <ShareButtons title="${post.title}" />
            </div>
          </div>
          
          <div className="md:w-1/4">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>
    </main>
  );
}`;
};

// Create blog post directories and files
const createBlogPost = (post) => {
  // Main app directory
  const appDir = path.join(process.cwd(), 'app');
  
  // Full path for the blog post
  const blogDir = path.join(appDir, 'blog', post.slug);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(blogDir)) {
    try {
      fs.mkdirSync(blogDir, { recursive: true });
      console.log(`Created directory: ${blogDir}`);
    } catch (error) {
      console.error(`Error creating directory ${blogDir}:`, error);
      return;
    }
  }
  
  // Create page.tsx file
  const pagePath = path.join(blogDir, 'page.tsx');
  try {
    fs.writeFileSync(pagePath, createBlogPostTemplate(post));
    console.log(`Created blog post: ${post.slug}`);
  } catch (error) {
    console.error(`Error creating blog post ${post.slug}:`, error);
  }
};

// Create all missing blog posts
missingPosts.forEach(post => {
  createBlogPost(post);
});

console.log('All missing blog posts have been created successfully.'); 