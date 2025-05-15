import Image from 'next/image'
import Link from 'next/link'

interface BlogHeaderProps {
  title: string;
  category: string;
  categoryColor: string;
  publishDate: string;
  readingTime: string;
  imageSrc: string;
  imageAlt: string;
}

export default function BlogHeader({
  title,
  category,
  categoryColor,
  publishDate,
  readingTime,
  imageSrc,
  imageAlt,
}: BlogHeaderProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
      <div className="relative h-[500px]">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className={`inline-block ${categoryColor} text-white text-sm font-semibold py-1 px-3 rounded-full mb-4`}>
                {category}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
              <div className="flex items-center text-sm">
                <span>{publishDate}</span>
                <span className="mx-2">•</span>
                <span>{readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{title.length > 40 ? title.substring(0, 40) + '...' : title}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 