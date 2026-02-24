'use client';

import { useState } from 'react';

interface Experience {
  id: string;
  icon: string;
  title: string;
  location?: string;
  duration: string;
  price: string;
  description: string;
  highlights?: string[];
}

const experiences: Experience[] = [
  {
    id: 'park-island',
    icon: '🕊️',
    title: '2-Hour Park Island Bird Walk',
    location: 'Park Island, Muizenberg',
    duration: '2 hours',
    price: '800 ZAR',
    description: 'Discover the local birds of the marina and wetlands in a relaxed, easy walk.',
    highlights: ['Marina birds', 'Wetlands species', 'Easy walk', 'Great for beginners']
  },
  {
    id: 'cape-point',
    icon: '🌊',
    title: 'Full Day – Cape of Good Hope Nature Tour',
    duration: 'Full day',
    price: '3000 ZAR',
    description: 'Explore the southern peninsula including Cape of Good Hope, Cape Point, and Olifantsbos area.',
    highlights: ['Cape of Good Hope', 'Cape Point', 'Coastal fynbos', 'Ocean views', 'Mammals & birds']
  },
  {
    id: 'stellenbosch',
    icon: '🍷',
    title: 'Full Day – Stellenbosch Winelands',
    duration: 'Full day',
    price: '3000 ZAR',
    description: 'Visit the famous vineyards of Stellenbosch. Wine tasting, landscapes, and Cape heritage.',
    highlights: ['Wine tasting', 'Vineyard landscapes', 'Cape heritage', 'Cultural experience']
  },
  {
    id: 'peninsula-highlights',
    icon: '🌍',
    title: 'Full Day – Highlights of the Cape Peninsula',
    duration: 'Full day',
    price: '3000 ZAR',
    description: 'Scenic tour including Simon\'s Town, Chapman\'s Peak Drive, Camps Bay, Clifton, Sea Point, and V&A Waterfront.',
    highlights: ['Simon\'s Town', 'Chapman\'s Peak Drive', 'Camps Bay', 'Clifton & Sea Point', 'V&A Waterfront']
  },
  {
    id: 'wetlands',
    icon: '🦆',
    title: 'Full Day – Wetlands Birding Tour',
    duration: 'Full day',
    price: '2500 ZAR',
    description: 'Explore prime birding sites: Sandvlei, Rondevlei Nature Reserve, and Strandfontein Bird Sanctuary.',
    highlights: ['Sandvlei', 'Rondevlei Nature Reserve', 'Strandfontein Bird Sanctuary', 'Diverse wetland birds']
  },
  {
    id: 'rooiels',
    icon: '🏔️',
    title: 'Full Day – Rooiels Scenic Birding',
    duration: 'Full day',
    price: '3500 ZAR',
    description: 'Panoramic coastal route to Rooiels with Cape Rockjumper observation, Harold Porter Botanical Garden, and Stony Point.',
    highlights: ['Cape Rockjumper', 'Harold Porter Botanical Garden', 'Stony Point Nature Reserve', 'Coastal route']
  },
  {
    id: 'table-mountain',
    icon: '⛰️',
    title: 'Half Day – Table Mountain Hike',
    location: 'Constantia Nek',
    duration: '4 hours',
    price: '1500 ZAR',
    description: 'From Constantia Nek with birding and mountain flora. 4-hour walk.',
    highlights: ['Mountain birds', 'Indigenous flora', 'Hiking', '4-hour walk']
  },
  {
    id: 'muizenberg-mountain',
    icon: '🌄',
    title: 'Muizenberg Mountain Hike',
    duration: '3 hours',
    price: '1000 ZAR',
    description: 'A 3-hour walk above Muizenberg with birding opportunities.',
    highlights: ['Local mountain birds', 'Muizenberg views', '3-hour hike', 'Close to villa']
  },
  {
    id: 'kirstenbosch',
    icon: '🌺',
    title: 'Half Day – Kirstenbosch Birding & Vegetation',
    duration: 'Half day',
    price: '1000 ZAR',
    description: 'Explore Kirstenbosch National Botanical Garden, focusing on indigenous plants and forest birds.',
    highlights: ['Indigenous plants', 'Forest birds', 'Botanical garden', 'Educational']
  }
];

const BirdingExperiences = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🌿</div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Nature & Birding Experiences from Muizenberg Marina
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
              <p>
                I am a local ornithologist with deep knowledge of the birds, wildlife, and many coastal trails of the Cape Peninsula. 
                I also enjoy photographing plants and learning more about the local flora.
              </p>
              <p>
                I offer private guided excursions departing from the villa, designed for guests who want to discover the biodiversity 
                of the area while enjoying a personalized experience.
              </p>
            </div>
          </div>

          {/* Transport info */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
              🚗 Transport & Guiding
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                I usually guide from the guests' vehicle for a closer, interactive experience, allowing questions and learning opportunities.
              </p>
              <p>
                If the guests' vehicle is full, or the site requires it, I will use my own vehicle — <strong>no extra charge</strong>.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-4">
                <p className="text-amber-800">
                  <strong>Important:</strong> All prices are for the guide service only. 
                  Entrance fees to parks, botanical gardens, or reserves are not included.
                </p>
              </div>
            </div>
          </div>

          {/* Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <div 
                key={experience.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedExperience(experience)}
              >
                <div className="text-4xl mb-4">{experience.icon}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{experience.title}</h3>
                {experience.location && (
                  <p className="text-sm text-gray-600 mb-2">📍 {experience.location}</p>
                )}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-blue-600">⏰ {experience.duration}</span>
                  <span className="text-lg font-bold text-green-600">{experience.price}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{experience.description}</p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Ready for an Adventure?</h3>
              <p className="text-gray-700 mb-6">
                Book your personalized birding and nature experience directly with me during your stay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                  Contact Guide
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  WhatsApp Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-green-900">{selectedExperience.title}</h3>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="text-6xl mb-4">{selectedExperience.icon}</div>
              
              {selectedExperience.location && (
                <p className="text-gray-600 mb-3">📍 {selectedExperience.location}</p>
              )}
              
              <div className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-blue-600">⏰ {selectedExperience.duration}</span>
                <span className="text-2xl font-bold text-green-600">{selectedExperience.price}</span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{selectedExperience.description}</p>

              {selectedExperience.highlights && (
                <div className="mb-6">
                  <h4 className="font-bold text-green-900 mb-3">Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedExperience.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <span className="mr-2">✓</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                  Book This Experience
                </button>
                <button 
                  onClick={() => setSelectedExperience(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BirdingExperiences;