"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function NotFound() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleImageError = (event: Event) => {
      const target = event.target as HTMLImageElement;
      if (target.getAttribute('alt') === 'Page not found') {
        target.style.display = 'none';
      }
    };

    window.addEventListener('error', handleImageError, { capture: true });
    
    return () => {
      window.removeEventListener('error', handleImageError, { capture: true });
    };
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <div ref={imageRef} className="mb-8 relative w-64 h-64 mx-auto">
          <Image 
            src="/images/not-found.svg" 
            alt="Page not found"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          We're sorry, but the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4 mb-8">
          <p className="text-gray-600">You might want to check out these sections instead:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/sectors" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Uniform Sectors
            </Link>
            <Link href="/sectors/transport" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Transport Uniforms
            </Link>
            <Link href="/sectors/banking-finance" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Banking Uniforms
            </Link>
            <Link href="/sectors/industrial" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Industrial Workwear
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium">
            Return to Home
          </Link>
          <Link href="/contact" className="bg-white text-primary border border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
} 