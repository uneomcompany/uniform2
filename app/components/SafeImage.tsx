"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import FallbackImage from './FallbackImage';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackPaths?: string[];
  placeholderText?: string;
}

export default function SafeImage({ 
  src, 
  alt,
  fallbackPaths = [],
  placeholderText,
  width,
  height,
  className,
  ...props 
}: SafeImageProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [error, setError] = useState(false);
  const imageKey = useRef(0);
  
  // Create an array with the original source and all fallback paths
  const allPaths = [src.toString(), ...fallbackPaths];
  
  // Current source to try
  const currentSrc = currentSrcIndex < allPaths.length ? allPaths[currentSrcIndex] : null;
  
  // When currentSrcIndex changes, reset the error state
  useEffect(() => {
    if (currentSrcIndex < allPaths.length) {
      setError(false);
      // Increment key to force Image re-render
      imageKey.current += 1;
    }
  }, [currentSrcIndex, allPaths.length]);

  // This function will be used in the window.onerror event
  useEffect(() => {
    const handleImageError = (event: Event) => {
      const target = event.target as HTMLImageElement;
      // Check if this is our image that failed
      if (target.tagName === 'IMG' && target.src.includes(currentSrc?.toString() || '')) {
    // Try the next fallback path
    if (currentSrcIndex < allPaths.length - 1) {
          setCurrentSrcIndex(prev => prev + 1);
    } else {
      // If we've exhausted all fallbacks, show placeholder
      setError(true);
    }
      }
    };

    // Add global error handler for images
    window.addEventListener('error', handleImageError, { capture: true });
    
    return () => {
      window.removeEventListener('error', handleImageError, { capture: true });
    };
  }, [currentSrc, currentSrcIndex, allPaths.length]);

  if (error || !currentSrc) {
    return (
      <FallbackImage 
        alt={placeholderText || alt.toString()}
        width={typeof width === 'number' ? width : 800}
        height={typeof height === 'number' ? height : 600}
        className={typeof className === 'string' ? className : 'relative h-64'} 
      />
    );
  }

  return (
    <Image
      key={imageKey.current}
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
} 