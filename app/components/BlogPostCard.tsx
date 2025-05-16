import Link from 'next/link'
import Image from 'next/image'

interface BlogPostCardProps {
  title: string
  imageSrc: string
  url: string
  category?: string
  categoryColor?: string
}

export default function BlogPostCard({ title, imageSrc, url, category, categoryColor = 'bg-blue-600' }: BlogPostCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white border border-gray-100">
      <Link href={url} className="block h-full">
        <div className="relative h-52 overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <div className={`absolute top-4 left-4 ${categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
              {category}
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
} 