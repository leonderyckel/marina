'use client';

import Image from 'next/image';
import { useState } from 'react';
import { propertyData, siteConfig } from '@/data/propertyData';
import PlaceholderImage from './PlaceholderImage';
import EnhancedCTA from './EnhancedCTA';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {imageError ? (
          <PlaceholderImage 
            width={1920} 
            height={1080} 
            text="Marina Da Gama - Background View" 
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src="/images/worship/background.jpg"
            alt="Marina Da Gama background view"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Social proof badge */}
        <div className="mb-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            <span className="mr-2">⭐⭐⭐⭐⭐</span>
            5.0 Rating • 50+ Happy Guests
            <span className="ml-2">🏆</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {propertyData.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
          {propertyData.subtitle}
        </p>
        
        {/* Key selling points */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm">
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            🚣 Kayaks inclus
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            🏄‍♂️ Surf à 3min
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            🌊 Vue marina
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-2xl flex items-center justify-center"
          >
            <span className="mr-2">🏡</span>
            Réserver maintenant
            <span className="ml-2">→</span>
          </a>
          <a
            href="#waterfront-home"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/30 flex items-center justify-center"
          >
            <span className="mr-2">📸</span>
            Voir les photos
          </a>
        </div>

        {/* Urgency message */}
        {siteConfig.bookingUrgency.enabled && (
          <div className="mt-6 text-sm bg-orange-500/20 backdrop-blur-sm text-orange-100 px-4 py-2 rounded-lg inline-block animate-pulse">
            🔥 {siteConfig.bookingUrgency.viewersToday} people viewed this property today
          </div>
        )}
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;