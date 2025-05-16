const fs = require('fs');
const path = require('path');

// List of missing blog posts from 404 errors
const missingPosts = [
  {
    slug: 'buying-guides/how-to-choose-reliable-uniform-supplier-saudi-arabia',
    title: 'How to Choose a Reliable Uniform Supplier in Saudi Arabia',
    author: 'محمد_الصالح',
    category: 'Buying Guides',
    metaDescription: 'Comprehensive guide on selecting the best uniform supplier in Saudi Arabia for your business needs with tips on quality, delivery, and service.',
    date: '2023-12-15'
  },
  {
    slug: 'FahadSupplyChain',
    title: 'Optimizing Supply Chain Management for Uniform Distribution',
    author: 'فهد_المحمود',
    category: 'Supply Chain',
    metaDescription: 'Expert insights on streamlining supply chain processes for efficient uniform distribution across Saudi Arabia.',
    date: '2023-11-22'
  },
  {
    slug: 'MohammedDesign',
    title: 'Modern Uniform Design Principles for Corporate Identity',
    author: 'محمد_الغامدي',
    category: 'Design',
    metaDescription: 'Discover how modern uniform design can enhance your corporate identity and brand recognition in the Saudi market.',
    date: '2023-10-18'
  },
  {
    slug: 'noura-alkhalidi',
    title: 'Sustainable Fabric Choices for Corporate Uniforms',
    author: 'نورة_القحطاني',
    category: 'Sustainability',
    metaDescription: 'Learn about eco-friendly fabric options for corporate uniforms that maintain professionalism while supporting sustainability goals.',
    date: '2024-01-05'
  },
  {
    slug: 'transport-uniform-materials',
    title: 'Best Materials for Transport Sector Uniforms in Saudi Arabia',
    author: 'عبدالله_الخالدي',
    category: 'Transport',
    metaDescription: 'Analysis of the most suitable materials for transport sector uniforms considering Saudi Arabia\'s climate and working conditions.',
    date: '2024-02-10'
  },
  {
    slug: 'SaraRetailKSA',
    title: 'Retail Uniform Trends Shaping Saudi Arabia\'s Customer Experience',
    author: 'سارة_القحطاني',
    category: 'Retail',
    metaDescription: 'Explore how retail uniform trends are evolving to enhance customer experience in Saudi Arabia\'s competitive retail landscape.',
    date: '2023-09-30'
  },
  {
    slug: 'mohammed-al-otaibi',
    title: 'Industrial Workwear Safety Standards in Saudi Manufacturing',
    author: 'محمد_السعيد',
    category: 'Industrial',
    metaDescription: 'A comprehensive guide to industrial workwear safety standards for manufacturing facilities in Saudi Arabia.',
    date: '2024-01-25'
  },
  {
    slug: 'SaraRetailTech',
    title: 'Technology Integration in Modern Retail Uniforms',
    author: 'سارة_القحطاني',
    category: 'Retail',
    metaDescription: 'Discover how technology is being integrated into retail uniforms to enhance employee performance and customer service.',
    date: '2024-02-20'
  },
  {
    slug: 'fahad-alanazi',
    title: 'Corporate Uniform Policies: Best Practices for Saudi Companies',
    author: 'فهد_المحمود',
    category: 'Corporate',
    metaDescription: 'Learn effective strategies for developing and implementing corporate uniform policies in Saudi Arabian companies.',
    date: '2023-12-05'
  },
  {
    slug: 'sara-alqahtani',
    title: 'Color Psychology in Uniform Design for Brand Recognition',
    author: 'سارة_القحطاني',
    category: 'Design',
    metaDescription: 'Understanding how color psychology in uniform design can significantly impact brand recognition and consumer perception.',
    date: '2024-01-15'
  },
  {
    slug: 'sara-alqahtani-tech',
    title: 'Future of Uniforms: Smart Fabrics and IoT Integration',
    author: 'سارة_القحطاني',
    category: 'Technology',
    metaDescription: 'Exploring the cutting-edge developments in smart fabrics and IoT integration in the uniform industry for Saudi businesses.',
    date: '2024-03-01'
  }
];

// Template for blog post pages
const createBlogPostTemplate = (post) => {
  return `import type { Metadata } from 'next';
import BlogLayout from '@/app/components/BlogLayout';
import SafeImage from '@/app/components/SafeImage';
import AuthorInfo from '@/app/components/AuthorInfo';
import ShareButtons from '@/app/components/ShareButtons';
import RelatedPosts from '@/app/components/RelatedPosts';
import CTASection from '@/app/components/CTASection';
import StaticImageFix from '@/app/components/StaticImageFix';

export const metadata: Metadata = {
  title: '${post.title} | Uniform Supplier in KSA',
  description: '${post.metaDescription}',
  openGraph: {
    title: '${post.title} | Uniform Supplier in KSA',
    description: '${post.metaDescription}',
    type: 'article',
    publishedTime: '${post.date}T08:00:00Z',
    authors: ['Uniform KSA']
  }
};

export default function BlogPost() {
  return (
    <BlogLayout
      title="${post.title}"
      publishDate="${post.date}"
      author="${post.author}"
      category="${post.category}"
    >
      <div className="prose max-w-none">
        <p className="lead">
          ${post.metaDescription}
        </p>
        
        <figure className="my-8">
          <StaticImageFix
            src="/images/blog/blog_hero.jpg"
            alt="${post.title}"
            width={800}
            height={400}
            className="rounded-lg"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            Professional uniform solutions for Saudi Arabian businesses
          </figcaption>
        </figure>

        <h2>Introduction</h2>
        <p>
          In today's competitive business environment, choosing the right uniform solution is more 
          important than ever. This article explores key considerations for businesses looking to 
          enhance their professional image through high-quality uniforms.
        </p>

        <h2>Key Considerations</h2>
        <p>
          When selecting uniforms for your organization, it's essential to consider factors such as 
          durability, comfort, brand alignment, and cultural appropriateness. Each of these elements 
          plays a crucial role in creating a successful uniform program.
        </p>

        <h2>Industry-Specific Requirements</h2>
        <p>
          Different sectors have unique uniform requirements based on functionality, safety standards, 
          and industry expectations. From healthcare to hospitality, retail to manufacturing, each 
          industry demands specialized attention to detail.
        </p>

        <h2>Quality and Durability</h2>
        <p>
          Investing in high-quality uniforms often provides better long-term value despite higher 
          initial costs. Quality uniforms maintain their appearance longer, require less frequent 
          replacement, and contribute to a more professional image.
        </p>

        <h2>Cultural Considerations</h2>
        <p>
          In Saudi Arabia, uniform designs must respect cultural norms and religious practices while 
          maintaining functionality and professionalism. This includes appropriate coverage, modest 
          designs, and consideration for comfort in the local climate.
        </p>

        <h2>Conclusion</h2>
        <p>
          Selecting the right uniform supplier and design is a strategic decision that impacts your 
          brand image, employee satisfaction, and operational efficiency. By considering the factors 
          outlined in this article, organizations can create uniform programs that enhance their 
          professional presence while meeting practical needs.
        </p>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <AuthorInfo author="${post.author}" />
      </div>

      <div className="mt-8">
        <ShareButtons title="${post.title}" />
      </div>

      <div className="mt-12">
        <RelatedPosts currentSlug="${post.slug}" category="${post.category}" />
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </BlogLayout>
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