"use client"

import React, { useState } from 'react'

interface StaticImageFixProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  fallbackSrc?: string
}

export default function StaticImageFix({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  onClick,
  fallbackSrc = '/images/fallback-image.jpg'
}: StaticImageFixProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }
  
  // Ensure src starts with a slash if it's a relative path
  const formattedSrc = imgSrc.startsWith('http') || imgSrc.startsWith('/') 
    ? imgSrc 
    : `/${imgSrc}`

  const imgStyle = {
    width: width,
    height: height,
    objectFit: 'cover' as 'cover',
    ...style
  }

  return (
    <img 
      src={formattedSrc}
      alt={alt}
      className={className}
      style={imgStyle}
      onError={handleError}
      onClick={onClick}
    />
  )
} 