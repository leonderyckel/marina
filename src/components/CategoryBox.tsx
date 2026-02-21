'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Location from './Location';

interface CategoryItem {
  icon: string;
  title: string;
  description: string;
  details?: string;
}

interface CategoryPhoto {
  src: string;
  alt: string;
  description?: string;
}

interface CategoryBoxProps {
  title: string;
  subtitle: string;
  items: CategoryItem[];
  photos: CategoryPhoto[];
  backgroundColor?: string;
  textColor?: string;
  special?: boolean;
  showMap?: boolean;
}

const CategoryBox = ({ 
  title, 
  subtitle, 
  items, 
  photos, 
  backgroundColor = "bg-gray-50",
  textColor = "text-gray-800",
  special = false,
  showMap = false
}: CategoryBoxProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = () => {
    if (photos.length > 0) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(0);
  };

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className={`py-20 ${backgroundColor} relative overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className={`text-3xl md:text-5xl font-bold ${textColor} mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ${special ? 'animate-pulse' : ''}`}>
                {title}
              </h2>
              {special && (
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4 rounded-full"></div>
              )}
            </div>
            <p className={`text-lg md:text-xl opacity-90 max-w-3xl mx-auto ${textColor} leading-relaxed`}>
              {subtitle}
            </p>
          </div>
          
          <div 
            className={`${special 
              ? 'bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 shadow-2xl' 
              : 'bg-white shadow-lg'
            } rounded-2xl p-8 hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${special ? 'hover:shadow-2xl hover:border-blue-300' : 'hover:rotate-1'} ${photos.length > 0 ? 'hover:bg-blue-50' : ''}`}
            onClick={openModal}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="text-center group transform transition-all duration-300 hover:scale-105 p-4 rounded-xl hover:bg-white/60"
                >
                  <div className={`text-5xl mb-4 group-hover:animate-bounce transition-transform duration-300 ${special ? 'group-hover:scale-125' : ''}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${special ? 'text-blue-800 group-hover:text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {item.description}
                  </p>
                  {item.details && (
                    <p className={`text-sm mt-3 font-medium transition-all duration-300 ${special ? 'text-blue-700 group-hover:text-blue-600' : 'text-blue-600 group-hover:text-blue-500'} ${special ? 'bg-blue-100 px-3 py-1 rounded-full inline-block' : ''}`}>
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
            {special && showMap && (
              <div className="mt-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Our Prime Location</h3>
                  </div>
                  <Location />
                </div>
              </div>
            )}
            
            {photos.length > 0 && (
              <div className="mt-8 text-center">
                <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 ${
                  special 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200 animate-pulse'
                }`}>
                  <span className="mr-2">{special ? '🏡' : '📸'}</span>
                  {special ? 'Explore Your Home Away From Home' : `View ${photos.length} photo${photos.length > 1 ? 's' : ''}`}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {isModalOpen && photos.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          
          {photos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
              
              <button
                onClick={nextPhoto}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </>
          )}

          <div className="relative max-w-4xl max-h-full">
            <Image
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              width={1200}
              height={900}
              className="max-h-[80vh] w-auto object-contain transition-all duration-300 animate-in zoom-in"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <p className="text-center font-medium">{photos[selectedPhoto].alt}</p>
              {photos[selectedPhoto].description && (
                <p className="text-center text-sm text-gray-300 mt-1">
                  {photos[selectedPhoto].description}
                </p>
              )}
              <p className="text-center text-sm text-gray-300 mt-1">
                {selectedPhoto + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryBox;