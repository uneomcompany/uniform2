"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackPaths?: string[];
  placeholderText?: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  onClick?: () => void;
}

export default function SafeImage({ 
  src, 
  alt,
  fallbackPaths = [],
  placeholderText,
  width = 400,
  height = 300,
  className = "",
  fill = false,
  priority = false,
  onClick
}: SafeImageProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [error, setError] = useState(false);
  
  // Create an array with the original source and all fallback paths
  const allPaths = [src, ...fallbackPaths, '/images/placeholder.jpg'];
  
  // Current source to try
  const currentSrc = error || currentSrcIndex >= allPaths.length - 1 
    ? '/images/placeholder.jpg' 
    : allPaths[currentSrcIndex];

  if (fill) {
    return (
      <Image
        src={currentSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
} 