"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [sectorsOpen, setSectorsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 font-bold text-xl">
              Saudi Uniform
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <div className="relative">
                <button 
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 flex items-center"
                  onClick={() => setSectorsOpen(!sectorsOpen)}
                >
                  Sectors
                  <svg 
                    className={`ml-1 h-5 w-5 transform ${sectorsOpen ? 'rotate-180' : ''} transition-transform duration-200`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {sectorsOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <Link href="/sectors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        All Sectors
                      </Link>
                      <Link href="/sectors/transport" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Transport Sector
                      </Link>
                      <Link href="/sectors/aviation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Aviation Sector
                      </Link>
                      <Link href="/sectors/banking-finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Banking & Finance
                      </Link>
                      <Link href="/sectors/industrial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Industrial Sector
                      </Link>
                      <Link href="/sectors/restaurants" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Restaurants Sector
                      </Link>
                      <Link href="/sectors/retail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Retail Sector
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/blog" className="px-3 py-2 text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <Link 
              href="/request-quote" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 