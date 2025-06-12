"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface AuthorBioProps {
  name?: string;
  role?: string;
  bio?: string;
  imageSrc?: string;
  linkedin?: string;
  twitter?: string;
  author?: string; // Added for backward compatibility
  email?: string;
}

interface AuthorProfile {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

const authorProfiles: Record<string, AuthorProfile> = {
  'سامي_الهلالي': {
    name: 'سامي الهلالي',
    title: 'Senior Uniform Consultant',
    bio: 'Expert in Saudi uniform standards with 15+ years experience in the industry.',
    imageSrc: '/images/author/placeholder.jpg'
  },
  'عبدالله_الخالدي': {
    name: 'عبدالله الخالدي', 
    title: 'Industrial Safety Specialist',
    bio: 'Specialized in safety uniforms and protective workwear for industrial sectors.',
    imageSrc: '/images/author/placeholder.jpg'
  },
  'محمد_الصالح': {
    name: 'محمد الصالح',
    title: 'Uniform Design Expert', 
    bio: 'Creative designer with expertise in corporate uniform design and branding.',
    imageSrc: '/images/author/placeholder.jpg'
  },
  'سارة_القحطاني': {
    name: 'سارة القحطاني',
    title: 'Textile Technology Specialist',
    bio: 'Expert in fabric technology and sustainable textile solutions.',
    imageSrc: '/images/author/placeholder.jpg'
  },
  'فهد_المحمود': {
    name: 'فهد المحمود',
    title: 'Aviation Uniform Consultant',
    bio: 'Specialized in aviation industry uniforms and compliance standards.',
    imageSrc: '/images/author/placeholder.jpg'
  },
  'نورة_القحطاني': {
    name: 'نورة القحطاني',
    title: 'Fashion & Uniform Designer',
    bio: 'Creative designer focused on modern uniform aesthetics and functionality.',
    imageSrc: '/images/author/placeholder.jpg'
  },
  'خالد_العتيبي': {
    name: 'خالد العتيبي',
    title: 'Procurement Specialist',
    bio: 'Expert in uniform procurement strategies and supplier management.',
    imageSrc: '/images/author/placeholder.jpg'
  }
};

export default function AuthorBio(props: AuthorBioProps) {
  // If author ID is provided, use the default data
  const authorData = props.author ? (authorProfiles[props.author] || {}) as Partial<AuthorProfile> : {};
  
  // Fallback image for error handling
  const [imgSrc, setImgSrc] = useState(props.imageSrc || authorData.imageSrc || '/images/author/placeholder.jpg');
  
  const {
    name = authorData.name || 'Author',
    role = authorData.title || 'Specialist',
    bio = authorData.bio || 'Expert in uniform solutions for Saudi businesses.',
    linkedin,
    twitter,
    email
  } = props;

  return (
    <div className="border-t border-gray-200 pt-8 mb-12">
      <h3 className="text-xl font-bold mb-4">About the Author</h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        <div className="mr-4 mb-4 sm:mb-0">
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image 
              src={imgSrc} 
              alt={`Photo of ${name}`} 
              width={64}
              height={64}
              className="object-cover"
              onError={() => setImgSrc('/images/author/placeholder.jpg')}
              priority
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