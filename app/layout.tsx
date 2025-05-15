import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saudi Uniform Solutions',
  description: 'Professional uniform solutions for various sectors in Saudi Arabia',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gregarious-sawine-ed40c7.netlify.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <body className={inter.className}>
        <Header />
        <div className="pt-24">
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
        <footer className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl mb-4">Saudi Uniform</h3>
                <p className="text-sm">Your trusted source for uniform solutions in Saudi Arabia.</p>
              </div>
              <div>
                <h4 className="font-heading font-bold mb-4">Sectors</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/sectors/transport" className="hover:text-secondary">Transport Sector</Link></li>
                  <li><Link href="/sectors/aviation" className="hover:text-secondary">Aviation Sector</Link></li>
                  <li><Link href="/sectors/banking-finance" className="hover:text-secondary">Banking & Finance</Link></li>
                  <li><Link href="/sectors/industrial" className="hover:text-secondary">Industrial Sector</Link></li>
                  <li><Link href="/sectors/restaurants" className="hover:text-secondary">Restaurants Sector</Link></li>
                  <li><Link href="/sectors/retail" className="hover:text-secondary">Retail Sector</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-bold mb-4">Contact</h4>
                <p className="text-sm">Email: info@saudiuniform.com</p>
                <p className="text-sm">Phone: +966 XX XXX XXXX</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-white hover:text-secondary">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-secondary">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-center">
              <p>&copy; {new Date().getFullYear()} Saudi Uniform. All rights reserved.</p>
              <div className="mt-4 flex justify-center space-x-6">
                <Link href="/terms" className="hover:text-secondary">Terms of Service</Link>
                <Link href="/privacy" className="hover:text-secondary">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 