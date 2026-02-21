'use client';

import { propertyData } from '@/data/propertyData';

const Location = () => {
  const [lat, lng] = propertyData.location.coordinates;
  
  // URL pour Google Maps avec marqueur
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=Marina+Da+Gama,Muizenberg,Cape+Town,South+Africa&zoom=14`;
  
  // URL de sauvegarde sans clé API (vue satellite)
  const fallbackMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8234567890123!2d18.454!3d-34.092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcb5b2a3b4c5d6e%3A0x7f8g9h0i1j2k3l4!2sMarina%20Da%20Gama%2C%20Muizenberg%2C%20Cape%20Town!5e1!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza`;

  const nearbyPlaces = [
    { name: 'Muizenberg Beach', distance: '5 min', type: 'beach', icon: '🏖️' },
    { name: 'Surf spots', distance: '5 min', type: 'sport', icon: '🏄‍♂️' },
    { name: 'Restaurants', distance: '5-10 min', type: 'food', icon: '🍽️' },
    { name: 'Cape Point', distance: '30 min', type: 'nature', icon: '🏔️' },
    { name: 'Table Mountain', distance: '45 min', type: 'nature', icon: '⛰️' },
    { name: 'Cape Town Airport', distance: '45 min', type: 'transport', icon: '✈️' },
    { name: 'Boulders Beach Penguins', distance: '20 min', type: 'wildlife', icon: '🐧' },
    { name: 'Cape Town City Center', distance: '40 min', type: 'city', icon: '🏙️' }
  ];

  const directions = [
    {
      from: 'Cape Town Airport',
      duration: '45 minutes',
      description: 'Take M3 towards Muizenberg, then follow signs to Marina Da Gama'
    },
    {
      from: 'Cape Town City Center',
      duration: '40 minutes',
      description: 'Via M3 or N2, Muizenberg exit, then towards Marina Da Gama'
    },
    {
      from: 'V&A Waterfront',
      duration: '35 minutes',
      description: 'Follow the coast via M6 and M4, or take M3 for a faster route'
    }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Prime Location
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Located in peaceful Marina Da Gama, our house offers easy access to the region's best attractions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carte */}
          <div className="relative">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <iframe
                  src={fallbackMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Marina Da Gama Location"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-800">📍 {propertyData.location.address}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href={`https://maps.apple.com/?q=${lat},${lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    Open in Apple Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Points d'intérêt */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nearby Points of Interest</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl mr-3">{place.icon}</span>
                  <div>
                    <p className="font-medium text-gray-800">{place.name}</p>
                    <p className="text-sm text-gray-600">{place.distance}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-semibold text-gray-800 mb-4">How to Reach Us</h4>
            <div className="space-y-4">
              {directions.map((direction, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-gray-800">{direction.from}</h5>
                    <span className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded">
                      {direction.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{direction.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-50 rounded-lg p-4">
              <h5 className="font-medium text-green-800 mb-2">🅿️ Parking</h5>
              <p className="text-sm text-green-700">
                Secure private parking included. Easy parking in our private driveway.
              </p>
            </div>
          </div>
        </div>

        {/* Section transport */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Transportation Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h4 className="font-semibold text-gray-800 mb-2">Rental Car</h4>
              <p className="text-sm text-gray-600">
                Recommended for exploring the region. Free parking on site.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚌</div>
              <h4 className="font-semibold text-gray-800 mb-2">Public Transport</h4>
              <p className="text-sm text-gray-600">
                Train line to city center. Muizenberg station 5 minutes away.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚕</div>
              <h4 className="font-semibold text-gray-800 mb-2">Taxi / Uber</h4>
              <p className="text-sm text-gray-600">
                Available 24/7. Easy connections to all tourist sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;