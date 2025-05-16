"use client"

import { useState, useEffect } from 'react'

interface ShareButtonsProps {
  title: string;
  url?: string; // Make URL optional
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [fullUrl, setFullUrl] = useState<string>("");
  
  useEffect(() => {
    // Get the full URL including domain when component mounts
    if (typeof window !== 'undefined') {
      // If URL is not provided, use the current page URL
      const baseUrl = window.location.origin;
      const currentPath = url || window.location.pathname;
      setFullUrl(`${baseUrl}${currentPath}`);
    }
  }, [url]);

  const shareLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'bg-[#1DA1F2] hover:bg-[#0c85d0]'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: 'bg-[#0077B5] hover:bg-[#005885]'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      ),
      color: 'bg-[#1877F2] hover:bg-[#0c5ccc]'
    },
    {
      name: 'Email',
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${fullUrl}`)}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6l8 5.333L20 6v2.7z"/>
        </svg>
      ),
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ];

  return (
    <div className="mt-8 mb-12">
      <h3 className="text-lg font-bold mb-4">Share this article</h3>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 py-2 rounded-full text-white ${link.color} transition-colors`}
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
            <span className="ml-2">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
} 