'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/data/propertyData';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="#home" className="text-2xl font-bold text-blue-600">
            Birdsong Castle
          </Link>

          {/* Desktop Menu - Simplified */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
            <a
              href={siteConfig.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg"
            >
              {t('bookOnAirbnb')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Simplified */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-4">
              <div className="flex justify-center">
                <LanguageSelector 
                  currentLanguage={language}
                  onLanguageChange={setLanguage}
                />
              </div>
              <a
                href={siteConfig.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-center block shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('bookOnAirbnb')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;