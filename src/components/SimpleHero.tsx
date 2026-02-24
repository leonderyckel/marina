'use client';

// Using standard img tag instead of Next.js Image
import { useState } from 'react';
import { siteConfig } from '@/data/simpleData';

const SimpleHero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-8xl mb-4">🏡</div>
              <p className="text-2xl">Marina Da Gama House</p>
            </div>
          </div>
        ) : (
          <img
            src="https://res.cloudinary.com/df42ozttq/image/upload/v1771692293/DSC_1833_v5ont5.jpg"
            alt="Vue marina depuis la maison avec piscine et terrasse"
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge étoiles */}
        <div className="mb-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="mr-3">⭐⭐⭐⭐⭐</span>
            <span className="font-semibold">5.0 • 50+ avis</span>
            <span className="ml-3">🏆</span>
          </div>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {siteConfig.title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
          {siteConfig.subtitle}
        </p>
        
        {/* Points forts */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {siteConfig.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="mr-2">{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </div>
        
        {/* Boutons d'action */}
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
            href="#maison-exterieur"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/30 flex items-center justify-center"
          >
            <span className="mr-2">📸</span>
            Découvrir la maison
          </a>
        </div>

        {/* Message d'urgence */}
        <div className="mt-8">
          <div className="inline-block bg-orange-500/20 backdrop-blur-sm text-orange-100 px-4 py-2 rounded-lg text-sm animate-pulse">
            🔥 28 personnes ont consulté cette propriété aujourd'hui
          </div>
        </div>
      </div>
      
      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;