import Image from 'next/image'
import Link from 'next/link'

interface AuthorBioProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  linkedin?: string;
  twitter?: string;
}

export default function AuthorBio({
  name,
  role,
  bio,
  imageSrc,
  linkedin,
  twitter
}: AuthorBioProps) {
  return (
    <div className="border-t border-gray-200 pt-8 mb-12">
      <h3 className="text-xl font-bold mb-4">About the Author</h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        <div className="mr-4 mb-4 sm:mb-0">
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image 
              src={imageSrc} 
              alt={`Photo of ${name}`} 
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600 mb-2">{role}</p>
          <p className="text-sm mb-3">{bio}</p>
          
          {(linkedin || twitter) && (
            <div className="flex space-x-3">
              {linkedin && (
                <Link 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              )}
              
              {twitter && (
                <Link 
                  href={twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 