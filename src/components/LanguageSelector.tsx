'use client';

import { useState } from 'react';

interface LanguageSelectorProps {
  currentLanguage: 'en' | 'fr';
  onLanguageChange: (language: 'en' | 'fr') => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          currentLanguage === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('fr')}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          currentLanguage === 'fr'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;