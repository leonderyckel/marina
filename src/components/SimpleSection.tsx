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
  showMap = false
}: SimpleSectionProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <section id={id} className={`py-16 ${backgroundColor}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de section */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{icon}</div>
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Contenu */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className={`text-center text-lg ${textColor} mb-8`}>
              {description}
            </p>

            {/* Bouton pour voir les photos */}
            <div className="text-center mb-8">
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center mx-auto"
              >
                <span className="mr-2">📸</span>
                Voir les photos
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Carte si demandée */}
            {showMap && (
              <div className="mt-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    🗺️ Localisation & Points d'Intérêt
                  </h3>
                  <EnhancedLocation />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Galerie de photos */}
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