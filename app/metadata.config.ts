import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('http://abjdeat.com'),
  title: {
    default: 'Saudi Transport Uniforms & Workwear Solutions',
    template: '%s | Saudi Transport Uniforms'
  },
  description: 'Leading provider of high-quality transport uniforms and workwear solutions in Saudi Arabia. Discover durable, weather-appropriate, and safety-compliant uniforms for your transport fleet.',
  keywords: ['transport uniforms', 'saudi arabia workwear', 'fleet uniforms', 'logistics uniforms', 'driver uniforms', 'transport safety wear'],
  authors: [{ name: 'Your Company Name' }],
  creator: 'Your Company Name',
  publisher: 'Your Company Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Saudi Transport Uniforms',
    images: [{
      url: '/images/transport_sector/transport_thumbnail.jpg',
      width: 1200,
      height: 630,
      alt: 'Saudi Transport Uniforms'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/transport_sector/transport_thumbnail.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here
    google: 'your-google-verification-code',
  },
}

export type BlogPostMetadata = {
  title: string
  description: string
  publishDate: string
  author: {
    name: string
    role: string
    image: string
  }
  category: string
  tags: string[]
  readingTime: string
  featuredImage: {
    src: string
    alt: string
  }
} 