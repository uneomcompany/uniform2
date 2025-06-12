"use client"

import Image from 'next/image'

interface StaticImageFixProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function StaticImageFix({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className = "",
  priority = false 
}: StaticImageFixProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
} 