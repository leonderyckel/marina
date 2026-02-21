import { activities } from '@/data/propertyData';
import EnhancedCTA from './EnhancedCTA';

const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Nearby Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover all the wonders that the Muizenberg and Cape Town region has to offer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 text-center group-hover:animate-bounce">
                {activity.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                {activity.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    📍 {activity.distance}
                  </span>
                </div>
                {/* @ts-ignore - activity.bestTime exists after data update */}
                {activity.bestTime && (
                  <div className="flex items-center justify-center">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      ⏰ {activity.bestTime}
                    </span>
                  </div>
                )}
                {/* @ts-ignore - activity.category exists after data update */}
                {activity.category && (
                  <div className="flex items-center justify-center">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                      {activity.category}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section bonus avec carte des activités */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Plan Your Stay
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">🌊 Water Activities</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Surfing at Muizenberg Beach</li>
                <li>• Kayaking in the marina</li>
                <li>• Stand-up paddleboarding</li>
                <li>• Whale watching</li>
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">🏔️ Nature & Adventure</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Table Mountain</li>
                <li>• Cape Point</li>
                <li>• Coastal hiking</li>
                <li>• Boulders Beach Penguins</li>
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">🍷 Culture & Food</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Local restaurants</li>
                <li>• Wine estates nearby</li>
                <li>• Artisan markets</li>
                <li>• Historical sites</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              We provide a complete activity guide with our personal recommendations and insider tips
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                🚗 Free parking
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                🚣 Kayaks included
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                📋 Local guide included
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                🎯 Insider tips provided
              </span>
            </div>
            
            <EnhancedCTA 
              variant="secondary" 
              size="lg" 
              showOffers={true}
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;