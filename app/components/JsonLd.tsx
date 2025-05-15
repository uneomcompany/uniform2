type BlogPostJsonLdProps = {
  title: string
  description: string
  publishDate: string
  author: {
    name: string
    role: string
  }
  images: string[]
  url: string
}

export default function BlogPostJsonLd({
  title,
  description,
  publishDate,
  author,
  images,
  url
}: BlogPostJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: images,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'Saudi Transport Uniforms',
      logo: {
        '@type': 'ImageObject',
        url: '/images/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 