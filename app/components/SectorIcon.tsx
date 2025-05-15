"use client"

import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { FaBus, FaPlane, FaIndustry, FaUtensils, FaStore, FaUniversity } from 'react-icons/fa';

interface SectorIconProps {
  sector: string;
  className?: string;
  size?: number;
}

export default function SectorIcon({ 
  sector,
  className = "",
  size = 40
}: SectorIconProps) {
  // Map sector names to react-icons
  const getIconForSector = (sectorName: string): IconType => {
    const name = sectorName.toLowerCase();
    
    if (name.includes('transport')) return FaBus;
    if (name.includes('aviation')) return FaPlane;
    if (name.includes('industrial')) return FaIndustry;
    if (name.includes('restaurant')) return FaUtensils;
    if (name.includes('retail')) return FaStore;
    if (name.includes('bank') || name.includes('finance')) return FaUniversity;
    
    // Default icon if no match
    return FaStore;
  };

  const IconComponent = getIconForSector(sector);
  const iconColor = getSectorColor(sector);

  function getSectorColor(sectorName: string): string {
    const name = sectorName.toLowerCase();
    
    if (name.includes('transport')) return "#3B82F6"; // blue-500
    if (name.includes('aviation')) return "#0EA5E9"; // sky-500
    if (name.includes('industrial')) return "#F59E0B"; // amber-500
    if (name.includes('restaurant')) return "#EF4444"; // red-500
    if (name.includes('retail')) return "#8B5CF6"; // purple-500
    if (name.includes('bank') || name.includes('finance')) return "#10B981"; // emerald-500
    
    // Default color
    return "#6B7280"; // gray-500
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <IconComponent size={size} color={iconColor} />
    </div>
  );
} 