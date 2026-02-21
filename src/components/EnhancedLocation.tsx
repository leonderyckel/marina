'use client';

import { siteConfig, pointsOfInterest } from '@/data/simpleData';

const EnhancedLocation = () => {
  const [lat, lng] = siteConfig.coordinates;
  
  // URL de carte améliorée avec marqueurs multiples
  const enhancedMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8!2d18.454!3d-34.092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcb5b2a3b4c5d6e%3A0x7f8g9h0i1j2k3l4!2sMarina%20Da%20Gama%2C%20Muizenberg!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza`;

  const attractionsByCategory = {
    beach: pointsOfInterest.filter(p => p.type === 'beach'),
    activities: pointsOfInterest.filter(p => ['village', 'nature'].includes(p.type)),
    wine: pointsOfInterest.filter(p => p.type === 'wine'),
    wildlife: pointsOfInterest.filter(p => p.type === 'wildlife'),
    other: pointsOfInterest.filter(p => !['beach', 'village', 'nature', 'wine', 'wildlife'].includes(p.type))
  };

  const categoryInfo = {
    beach: { title: '🏖️ Plages & Surf', color: 'text-blue-600', bg: 'bg-blue-50' },
    activities: { title: '🎨 Attractions', color: 'text-green-600', bg: 'bg-green-50' },
    wine: { title: '🍷 Vignobles', color: 'text-purple-600', bg: 'bg-purple-50' },
    wildlife: { title: '🐧 Nature & Animaux', color: 'text-orange-600', bg: 'bg-orange-50' },
    other: { title: '🚠 Sites Emblématiques', color: 'text-red-600', bg: 'bg-red-50' }
  };

  return (
    <div>
      {/* Carte principale */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-[16/10] relative">
            <iframe
              src={enhancedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Marina Da Gama et points d'intérêt"
            />
          </div>
          
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                📍 Marina Da Gama, Muizenberg
              </h3>
              <p className="text-gray-600 mb-4">Position stratégique au cœur des attractions du Cap</p>
              
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

      {/* Points d'intérêt organisés par catégorie */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(attractionsByCategory).map(([category, attractions]) => {
          if (attractions.length === 0) return null;
          
          const info = categoryInfo[category as keyof typeof categoryInfo];
          
          return (
            <div key={category} className={`${info.bg} rounded-xl p-6`}>
              <h4 className={`font-bold text-lg mb-4 ${info.color}`}>
                {info.title}
              </h4>
              <div className="space-y-3">
                {attractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white/70 rounded-lg p-3 hover:bg-white/90 transition-all duration-200 cursor-pointer transform hover:scale-102"
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${attraction.coordinates[0]},${attraction.coordinates[1]}`, '_blank')}
                  >
                    <span className="text-2xl mr-3">{attraction.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{attraction.name}</p>
                      <p className="text-xs text-gray-600">{attraction.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {attraction.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info transport */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
        <h4 className="font-bold text-lg text-indigo-900 mb-4 text-center">
          🚗 Comment arriver
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center bg-white/70 rounded-lg p-4">
            <div className="text-3xl mb-2">✈️</div>
            <p className="font-semibold text-sm">Depuis l'Aéroport</p>
            <p className="text-xs text-gray-600">45 min via M3</p>
          </div>
          <div className="text-center bg-white/70 rounded-lg p-4">
            <div className="text-3xl mb-2">🏙️</div>
            <p className="font-semibold text-sm">Depuis le Centre-Ville</p>
            <p className="text-xs text-gray-600">40 min via M3/N2</p>
          </div>
          <div className="text-center bg-white/70 rounded-lg p-4">
            <div className="text-3xl mb-2">🅿️</div>
            <p className="font-semibold text-sm">Parking Privé</p>
            <p className="text-xs text-gray-600">Inclus & sécurisé</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLocation;