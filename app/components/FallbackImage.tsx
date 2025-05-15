"use client"

import React from 'react';
import { ImageProps } from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';

type FallbackImageProps = {
  width?: number;
  height?: number;
  alt: string;
  className?: string;
}

export default function FallbackImage({ 
  width = 800, 
  height = 600, 
  alt, 
  className 
}: FallbackImageProps) {
  const colors: Record<string, string> = {
    'transport': 'bg-blue-600',
    'aviation': 'bg-sky-600',
    'banking': 'bg-emerald-600',
    'finance': 'bg-emerald-600',
    'industrial': 'bg-amber-600',
    'restaurants': 'bg-red-600',
    'retail': 'bg-purple-600',
    'default': 'bg-gray-600'
  };

  // Try to determine the appropriate color based on the alt text
  const getColorClass = () => {
    const lowerAlt = alt.toLowerCase();
    for (const [key, value] of Object.entries(colors)) {
      if (lowerAlt.includes(key)) {
        return value;
      }
    }
    return colors.default;
  };

  return (
    <ImagePlaceholder 
      text={alt}
      className={className || `relative w-[${width}px] h-[${height}px]`}
      bgClass={getColorClass()}
    />
  );
} 