'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import SimpleHero from '@/components/SimpleHero';
import SimpleSection from '@/components/SimpleSection';
import SimpleMap from '@/components/SimpleMap';
import ImprovedPhotoGallery from '@/components/ImprovedPhotoGallery';
import BirdingExperiences from '@/components/BirdingExperiences';
import WorshipSection from '@/components/WorshipSection';
import BookingBanner from '@/components/BookingBanner';
import CustomIcon from '@/components/CustomIcon';
import PhotoMosaic from '@/components/PhotoMosaic';
import { sections } from '@/data/simpleData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, language } = useLanguage();
  const [activeGallery, setActiveGallery] = useState<{ folder: string; title: string } | null>(null);
  return (
    <Layout>
      <SimpleHero />
      
      {/* Carte simple en haut */}
      <SimpleMap />

      {/* House and Bedrooms side by side - More welcoming design */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <span className="text-2xl mr-3">🏡</span>
              <span className="font-semibold text-gray-700">
                {language === 'fr' ? 'Bienvenue dans votre Paradis de la Marina' : 'Welcome to your Marina Paradise'}
              </span>
              <span className="text-2xl ml-3">✨</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {language === 'fr' ? 'Votre Retraite Parfaite Vous Attend' : 'Your Perfect Retreat Awaits'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr' 
                ? 'Découvrez des espaces magnifiquement conçus où le confort rencontre des vues spectaculaires sur la marina, créant l\'atmosphère parfaite pour votre escapade au Cap.'
                : 'Discover beautifully designed spaces where comfort meets stunning marina views, creating the perfect atmosphere for your Cape Town getaway.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {sections.filter(s => s.id === 'house-exterior' || s.id === 'bedrooms' || s.id === 'bathrooms').map((section, index) => (
              <div key={section.id} className={`group hover:scale-[1.02] transition-all duration-300`}>
                <div className={`${section.backgroundColor} rounded-3xl p-8 shadow-2xl border border-white/60 h-full relative overflow-hidden`}>
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="text-center mb-8 relative z-10">
                    <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="bg-white/90 p-6 rounded-3xl shadow-xl border border-white/70">
                        <CustomIcon type={section.icon} size={80} className="text-blue-600" />
                      </div>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${section.textColor} mb-3`}>
                      {t(section.titleKey)}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4 font-medium">
                      {t(section.subtitleKey)}
                    </p>
                    <p className={`text-base ${section.textColor} mb-6 leading-relaxed`}>
                      {t(section.descriptionKey)}
                    </p>
                    
                    {/* Mosaïque de photos */}
                    <div className="mb-6">
                      <PhotoMosaic
                        folder={section.folder}
                        title={t(section.titleKey)}
                        onViewGallery={() => setActiveGallery({ folder: section.folder, title: t(section.titleKey) })}
                      />
                    </div>
                    
                    {/* Additional feature highlights */}
                    <div className="flex justify-center space-x-6 text-sm text-gray-600">
                      {section.id === 'house-exterior' && (
                        <>
                          <span className="flex items-center"><span className="mr-1">🌊</span>Marina Views</span>
                          <span className="flex items-center"><span className="mr-1">🏊‍♂️</span>Private Pool</span>
                          <span className="flex items-center"><span className="mr-1">🌿</span>Garden Terrace</span>
                        </>
                      )}
                      {section.id === 'bedrooms' && (
                        <>
                          <span className="flex items-center"><span className="mr-1">🛏️</span>4 Bedrooms</span>
                          <span className="flex items-center"><span className="mr-1">🌅</span>Morning Views</span>
                          <span className="flex items-center"><span className="mr-1">💤</span>Peaceful Rest</span>
                        </>
                      )}
                      {section.id === 'bathrooms' && (
                        <>
                          <span className="flex items-center"><span className="mr-1">🚿</span>2.5 Bathrooms</span>
                          <span className="flex items-center"><span className="mr-1">✨</span>Premium Fixtures</span>
                          <span className="flex items-center"><span className="mr-1">🧴</span>Modern Design</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom encouragement */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
              <span className="text-lg text-gray-600">
                {language === 'fr' 
                  ? '🌟 Prêt à vivre la magie ? '
                  : '🌟 Ready to experience the magic? '
                }
                <span className="font-semibold text-blue-600 ml-2">
                  {language === 'fr' 
                    ? 'Votre séjour parfait commence ici'
                    : 'Your perfect stay starts here'
                  }
                </span>
              </span>
            </div>
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
          description={
            <span>
              {t(section.descriptionKey).split('Be clever - book additional activities with the owner!')[0]}
              {t(section.descriptionKey).includes('Be clever - book additional activities with the owner!') && (
                <>
                  <a 
                    href="#activities-proposed-by-owner" 
                    className="text-blue-600 hover:text-blue-800 underline font-semibold cursor-pointer transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('[data-section="birding-experiences"]');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Be clever - book additional activities with the owner!
                  </a>
                </>
              )}
            </span>
          }
          backgroundColor={section.backgroundColor}
          textColor={section.textColor}
          showMap={false}
          layout='default'
        />
      ))}
      
      {/* Birding Experiences */}
      <BirdingExperiences />
      
      {/* Worship Section */}
      <WorshipSection />
      
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
