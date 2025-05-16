"use client"

import React, { useState, useRef, useEffect } from 'react';
import StaticImageFix from './StaticImageFix';
import FallbackImage from './FallbackImage';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackPaths?: string[];
  placeholderText?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  priority?: boolean;
  onClick?: () => void;
}

export default function SafeImage({ 
  src, 
  alt,
  fallbackPaths = [],
  placeholderText,
  width,
  height,
  className,
  fill,
  style,
  priority,
  onClick
}: SafeImageProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [error, setError] = useState(false);
  
  // Create an array with the original source and all fallback paths
  const allPaths = [src, ...fallbackPaths];
  
  // Current source to try
  const currentSrc = currentSrcIndex < allPaths.length ? allPaths[currentSrcIndex] : null;
  
  const handleError = () => {
    if (currentSrcIndex < allPaths.length - 1) {
      setCurrentSrcIndex(prev => prev + 1);
    } else {
      setError(true);
    }
  };

  if (error || !currentSrc) {
    return (
      <FallbackImage 
        alt={placeholderText || alt}
        width={typeof width === 'number' ? width : 800}
        height={typeof height === 'number' ? height : 600}
        className={typeof className === 'string' ? className : 'relative h-64'} 
      />
    );
  }

  // Prepare styles for the fill property
  const imageStyle: React.CSSProperties = fill ? {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    ...(style || {})
  } : (style || {});

  return (
    <StaticImageFix
      src={currentSrc}
      alt={alt}
      width={fill ? '100%' : width}
      height={fill ? '100%' : height}
      className={className}
      style={imageStyle}
      onClick={onClick}
      fallbackSrc={fallbackPaths[fallbackPaths.length - 1] || '/images/fallback-image.jpg'}
    />
  );
} 