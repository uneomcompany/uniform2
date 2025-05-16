"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImagePlaceholder from './ImagePlaceholder'

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface HomeSliderProps {
  slides: Slide[];
}

export default function HomeSlider({ slides }: HomeSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Fallback for images that might not exist
  const renderImage = (src: string, alt: string, fill: boolean = false, className: string = "") => {
    try {
      return (
        <Image 
          src={src} 
          alt={alt} 
          fill={fill}
          width={fill ? undefined : 300}
          height={fill ? undefined : 200}
          className={`object-cover ${className}`}
        />
      );
    } catch (error) {
      return <ImagePlaceholder text={alt} className={`${fill ? "absolute inset-0" : ""} ${className}`} />;
    }
  };

  return (
    <section className="relative h-[650px] -mx-4 overflow-hidden mt-16">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="absolute inset-0">
            {renderImage(slide.image, slide.title, true)}
          </div>
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 animate-fadeIn animation-delay-200">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-400">
                  <Link href="/sectors" className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary-dark transition-all">
                    Explore Our Solutions
                  </Link>
                  <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded hover:bg-opacity-90 transition-all">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 