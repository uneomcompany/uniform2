import React from 'react';

interface ImagePlaceholderProps {
  text: string;
  className?: string;
  bgClass?: string;
  textClass?: string;
}

/**
 * A placeholder component that renders a colored box with text
 * Used when actual images aren't available
 */
export default function ImagePlaceholder({ 
  text, 
  className = "relative h-64", 
  bgClass = "bg-gradient-to-r from-blue-500 to-blue-700",
  textClass = "text-white"
}: ImagePlaceholderProps) {
  return (
    <div className={`${className} ${bgClass} rounded-lg overflow-hidden flex items-center justify-center`}>
      <div className={`text-center px-4 ${textClass}`}>
        <p className="font-medium">{text}</p>
        <p className="text-sm opacity-75 mt-1">Image placeholder</p>
      </div>
    </div>
  );
} 