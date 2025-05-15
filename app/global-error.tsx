'use client'

import { useEffect } from 'react'
import './globals.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet" 
        />
      </head>
      <body className="bg-gray-50">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <div className="text-center max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Something Went Wrong</h1>
            <p className="text-gray-600 mb-8">
              We apologize for the inconvenience. A critical application error has occurred. Our team has been notified and is working on fixing the issue.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => reset()}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Try Again
              </button>
              <a 
                href="/"
                className="block w-full bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Return to Home
              </a>
            </div>
            {error.digest && (
              <p className="mt-6 text-xs text-gray-500">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  )
} 