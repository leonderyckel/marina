'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/data/propertyData';

const BookingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showUrgency, setShowUrgency] = useState(false);

  useEffect(() => {
    // Show banner after user scrolls down a bit
    const handleScroll = () => {
      if (window.scrollY > 600 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show urgency message after 30 seconds
    const urgencyTimer = setTimeout(() => {
      setShowUrgency(true);
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(urgencyTimer);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <div className="text-2xl">🏖️</div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Ready to Book Your Marina Paradise?</h3>
                <div className="text-sm text-blue-100 flex items-center space-x-4">
                  {siteConfig.bookingUrgency.enabled && (
                    <>
                      <span>📈 {siteConfig.bookingUrgency.viewersToday} people viewed today</span>
                      <span>🔥 {siteConfig.bookingUrgency.recentBookings} booked this month</span>
                    </>
                  )}
                </div>
                {showUrgency && (
                  <div className="text-sm text-yellow-300 mt-1 animate-pulse">
                    ⚡ Limited availability - Book now to secure your dates!
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {siteConfig.specialOffers.enabled && (
              <div className="hidden md:block text-sm bg-white/20 px-3 py-1 rounded-full">
                Save {siteConfig.specialOffers.weeklyDiscount}% on weekly stays
              </div>
            )}
            <a
              href={siteConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Now on Airbnb
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-300 p-1"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBanner;