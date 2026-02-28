'use client';

import { siteConfig } from '@/data/simpleData';
import { useLanguage } from '@/contexts/LanguageContext';

const SimpleMap = () => {
  const { t } = useLanguage();
  const [lat, lng] = siteConfig.coordinates;
  
  // URL pour Google Maps avec l'adresse exacte
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcb5a8c5e4b3f2d%3A0x9e8f7a6b5c4d3e2f!2s4%20de%20Lille%20Square%2C%20Muizenberg%2C%20Cape%20Town%2C%207945!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza`;

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">📍</div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('location')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4 de Lille Square, Muizenberg
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-[16/10] relative">
            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="4 de Lille Square, Muizenberg"
            />
          </div>
          
          {/* Address and navigation links */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                📍 4 de Lille Square, Muizenberg
              </h3>
              <p className="text-gray-600 mb-4">
                {t('locationDescription')}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm font-medium transform hover:scale-105"
                >
                  📱 Google Maps
                </a>
                <a 
                  href={`https://maps.apple.com/?q=${lat},${lng}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200 text-sm font-medium transform hover:scale-105"
                >
                  🍎 Apple Maps
                </a>
                <a 
                  href={`https://waze.com/ul?q=${lat},${lng}&navigate=yes`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all duration-200 text-sm font-medium transform hover:scale-105"
                >
                  🚗 Waze
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleMap;