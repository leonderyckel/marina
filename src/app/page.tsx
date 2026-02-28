'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import SimpleHero from '@/components/SimpleHero';
import SimpleSection from '@/components/SimpleSection';
import SimpleMap from '@/components/SimpleMap';
import ImprovedPhotoGallery from '@/components/ImprovedPhotoGallery';
import BirdingExperiences from '@/components/BirdingExperiences';
import BookingBanner from '@/components/BookingBanner';
import CustomIcon from '@/components/CustomIcon';
import { sections } from '@/data/simpleData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [activeGallery, setActiveGallery] = useState<{ folder: string; title: string } | null>(null);
  return (
    <Layout>
      <SimpleHero />
      
      {/* Carte simple en haut */}
      <SimpleMap />

      {/* House and Bedrooms side by side */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.filter(s => s.id === 'house-exterior' || s.id === 'bedrooms').map((section) => (
              <div key={section.id} className={`${section.backgroundColor} rounded-2xl p-8`}>
                <div className="text-center mb-8">
                  <div className="mb-4 flex justify-center">
                    <CustomIcon type={section.icon} size={64} className="text-gray-700" />
                  </div>
                  <h2 className={`text-3xl font-bold ${section.textColor} mb-4`}>
                    {t(section.titleKey)}
                  </h2>
                  <p className="text-gray-600 mb-4">{t(section.subtitleKey)}</p>
                  <p className={`${section.textColor} mb-6`}>{t(section.descriptionKey)}</p>
                  <button
                    onClick={() => setActiveGallery({ folder: section.folder, title: t(section.titleKey) })}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    <span className="mr-2">📸</span>
                    {t('viewPhotos')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities section */}
      {sections.filter(s => s.id === 'activities').map((section) => (
        <SimpleSection
          key={section.id}
          id={section.id}
          title={t(section.titleKey)}
          subtitle={t(section.subtitleKey)}
          icon={section.icon}
          folder={section.folder}
          description={t(section.descriptionKey)}
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          showMap={false}
          layout='default'
        />
      ))}
      
      {/* Birding Experiences */}
      <BirdingExperiences />
      
      <BookingBanner />

      {/* Photo Gallery Modal */}
      {activeGallery && (
        <ImprovedPhotoGallery
          folder={activeGallery.folder}
          title={activeGallery.title}
          isOpen={true}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </Layout>
  );
}
