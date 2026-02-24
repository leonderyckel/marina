'use client';

import { useState } from 'react';
import ImprovedPhotoGallery from './ImprovedPhotoGallery';
import EnhancedLocation from './EnhancedLocation';

interface SimpleSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  folder: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  showMap?: boolean;
  layout?: 'default' | 'alternating' | 'feature';
}

const SimpleSection = ({
  id,
  title,
  subtitle,
  icon,
  folder,
  description,
  backgroundColor,
  textColor,
  showMap = false,
  layout = 'default'
}: SimpleSectionProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Feature layout for special sections
  if (layout === 'feature') {
    return (
      <>
        <section id={id} className={`py-20 ${backgroundColor} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div>
                <div className="text-8xl mb-6">{icon}</div>
                <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6`}>
                  {title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {subtitle}
                </p>
                <p className={`text-lg ${textColor} mb-8 leading-relaxed`}>
                  {description}
                </p>
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-xl text-lg"
                >
                  <span className="mr-3">📸</span>
                  Explore Photos
                  <span className="ml-3">→</span>
                </button>
              </div>
              
              {/* Feature content */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
                {showMap ? (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      🗺️ Location & Points of Interest
                    </h3>
                    <EnhancedLocation />
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">{icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Experience</h3>
                    <p className="text-gray-600">Discover what makes this location special</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ImprovedPhotoGallery
          folder={folder}
          title={title}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
        />
      </>
    );
  }

  // Alternating layout
  if (layout === 'alternating') {
    return (
      <>
        <section id={id} className={`py-16 ${backgroundColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content side */}
              <div className="order-2 lg:order-1">
                <div className="text-6xl mb-6">{icon}</div>
                <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
                  {title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {subtitle}
                </p>
                <p className={`text-lg ${textColor} mb-8`}>
                  {description}
                </p>
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center"
                >
                  <span className="mr-2">📸</span>
                  View Photos
                  <span className="ml-2">→</span>
                </button>
              </div>
              
              {/* Visual side */}
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex items-center justify-center">
                  {showMap ? (
                    <div className="w-full">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        🗺️ Location & Points of Interest
                      </h3>
                      <EnhancedLocation />
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-8xl mb-4 opacity-20">{icon}</div>
                      <h3 className="text-xl font-bold text-gray-400">Preview Content</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ImprovedPhotoGallery
          folder={folder}
          title={title}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
        />
      </>
    );
  }

  // Default layout
  return (
    <>
      <section id={id} className={`py-16 ${backgroundColor}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{icon}</div>
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className={`text-center text-lg ${textColor} mb-8`}>
              {description}
            </p>

            {/* Button to view photos */}
            <div className="text-center mb-8">
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center mx-auto"
              >
                <span className="mr-2">📸</span>
                View Photos
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Map if requested */}
            {showMap && (
              <div className="mt-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    🗺️ Location & Points of Interest
                  </h3>
                  <EnhancedLocation />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <ImprovedPhotoGallery
        folder={folder}
        title={title}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};

export default SimpleSection;