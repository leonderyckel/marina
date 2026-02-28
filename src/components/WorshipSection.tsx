'use client';

import { useState } from 'react';
import ImprovedPhotoGallery from './ImprovedPhotoGallery';
import { useLanguage } from '@/contexts/LanguageContext';

const WorshipSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">⛪</div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              {t('worshipPlaces') || 'Places of Worship'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('worshipDescription') || 'Discover the beautiful religious sites around Muizenberg'}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-center text-lg text-purple-900 mb-8">
              {t('worshipContent') || 'Visit the diverse religious communities in our area - Anglican churches, Catholic churches, Protestant churches, and the local synagogue.'}
            </p>

            {/* Button to view photos */}
            <div className="text-center">
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center mx-auto"
              >
                <span className="mr-2">📸</span>
                {t('viewPhotos') || 'View Photos'}
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <ImprovedPhotoGallery
        folder="worship"
        title={t('worshipPlaces') || 'Places of Worship'}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};

export default WorshipSection;