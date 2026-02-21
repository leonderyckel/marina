'use client';

import { useState } from 'react';
import Image from 'next/image';
import { worshipPlaces } from '@/data/propertyData';

const WorshipPlaces = () => {
  const groupedPlaces = worshipPlaces.reduce((acc, place) => {
    const religion = place.type.split(' - ')[0];
    if (!acc[religion]) {
      acc[religion] = [];
    }
    acc[religion].push(place);
    return acc;
  }, {} as Record<string, typeof worshipPlaces>);

  return (
    <section id="worship" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Places of Worship
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cape Town is home to diverse religious communities. Find nearby places of worship for spiritual connection during your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(groupedPlaces).map(([religion, places]) => (
            <div key={religion} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <span className="text-2xl mr-3">{places[0].icon}</span>
                  {religion}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {places.map((place, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      {/* @ts-ignore - image property exists after data update */}
                      {place.image && (
                        <div className="mb-4">
                          <Image
                            src={place.image}
                            alt={place.name}
                            width={300}
                            height={200}
                            className="rounded-lg object-cover w-full h-48"
                          />
                        </div>
                      )}
                      
                      <h4 className="font-semibold text-gray-800 mb-2">{place.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{place.description}</p>
                      
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center text-gray-700">
                          <span className="font-medium mr-2">📍</span>
                          {place.address}
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="font-medium mr-2">🚗</span>
                          {place.distance}
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="font-medium mr-2">⏰</span>
                          {place.services}
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="font-medium mr-2">📞</span>
                          <a href={`tel:${place.contact}`} className="text-blue-600 hover:underline">
                            {place.contact}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Visiting Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="font-semibold text-gray-800 mb-2">Before You Visit</h4>
              <p className="text-sm text-gray-600">
                We recommend calling ahead to confirm service times and any special requirements for visitors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">👕</div>
              <h4 className="font-semibold text-gray-800 mb-2">Dress Code</h4>
              <p className="text-sm text-gray-600">
                Most places of worship appreciate modest, respectful attire. Some may require head coverings.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-semibold text-gray-800 mb-2">Community Welcome</h4>
              <p className="text-sm text-gray-600">
                Cape Town's religious communities are generally welcoming to visitors and travelers.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <span className="text-blue-500 text-xl mr-3">ℹ️</span>
              <div>
                <h5 className="font-medium text-blue-800 mb-1">Note for Guests</h5>
                <p className="text-sm text-blue-700">
                  If you need assistance finding specific religious services or have dietary requirements related to your faith,
                  please don't hesitate to reach out. We're happy to help you connect with the appropriate community.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Directory for adding photos */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-2">📸 Adding Photos</h4>
          <p className="text-sm text-yellow-700">
            To add photos of these worship places, place images in <code className="bg-yellow-100 px-1 rounded">/public/images/worship/</code> 
            with filenames like <code className="bg-yellow-100 px-1 rounded">st-james-anglican.jpg</code>, then update this component to display them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorshipPlaces;