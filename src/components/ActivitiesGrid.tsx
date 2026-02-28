'use client';

import { pointsOfInterest } from '@/data/simpleData';
import { useLanguage } from '@/contexts/LanguageContext';

const ActivitiesGrid = () => {
  const { t } = useLanguage();

  // Grouper par type
  const groupedActivities = {
    beach: pointsOfInterest.filter(p => p.type === 'beach'),
    village: pointsOfInterest.filter(p => p.type === 'village'),
    wine: pointsOfInterest.filter(p => p.type === 'wine'),
    wildlife: pointsOfInterest.filter(p => p.type === 'wildlife'),
    nature: pointsOfInterest.filter(p => p.type === 'nature')
  };

  const generateMapLink = (coordinates: number[], name: string) => {
    const [lat, lng] = coordinates;
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(name)}`;
  };

  const categoryConfig = {
    beach: { title: '🏖️ Beaches & Water Sports', color: 'bg-blue-50', textColor: 'text-blue-600' },
    village: { title: '🎨 Villages & Culture', color: 'bg-green-50', textColor: 'text-green-600' },
    wine: { title: '🍷 Wineries & Gastronomy', color: 'bg-purple-50', textColor: 'text-purple-600' },
    wildlife: { title: '🐧 Wildlife & Nature', color: 'bg-orange-50', textColor: 'text-orange-600' },
    nature: { title: '🏔️ Nature & Landscapes', color: 'bg-emerald-50', textColor: 'text-emerald-600' }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🗺️ Activities & Points of Interest Around Marina Da Gama
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedActivities).map(([category, activities]) => {
          if (activities.length === 0) return null;
          
          const config = categoryConfig[category as keyof typeof categoryConfig];
          
          return (
            <div key={category} className={`${config.color} rounded-xl p-6`}>
              <h4 className={`font-bold text-lg mb-4 ${config.textColor}`}>
                {config.title}
              </h4>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-white/70 rounded-lg p-3 hover:bg-white/90 transition-all duration-200 cursor-pointer transform hover:scale-102"
                    onClick={() => window.open(generateMapLink(activity.coordinates, activity.name), '_blank')}
                  >
                    <span className="text-2xl mr-3">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{activity.name}</p>
                      <p className="text-xs text-gray-600">{activity.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {activity.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
        <h4 className="font-bold text-lg text-indigo-900 mb-4 text-center">
          🚗 How to Get There
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center bg-white/70 rounded-lg p-4">
            <div className="text-3xl mb-2">✈️</div>
            <p className="font-semibold text-sm">From the Airport</p>
            <p className="text-xs text-gray-600">45 min via M3</p>
          </div>
          <div className="text-center bg-white/70 rounded-lg p-4">
            <div className="text-3xl mb-2">🏙️</div>
            <p className="font-semibold text-sm">From City Center</p>
            <p className="text-xs text-gray-600">40 min via M3/N2</p>
          </div>
          <div className="text-center bg-white/70 rounded-lg p-4">
            <div className="text-3xl mb-2">🅿️</div>
            <p className="font-semibold text-sm">Private Parking</p>
            <p className="text-xs text-gray-600">Included & Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesGrid;