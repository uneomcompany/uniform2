import Image from 'next/image'
import { useState } from 'react'

type OptimizedImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 500,
  priority = false,
  className = ''
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className={`overflow-hidden ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          ${className}
        `}
        onLoadingComplete={() => setLoading(false)}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
      />
    </div>
  )
} 