'use client';

import { useState } from 'react';

interface LanguageSelectorProps {
  currentLanguage: 'en' | 'fr' | 'de' | 'it';
  onLanguageChange: (language: 'en' | 'fr' | 'de' | 'it') => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
          currentLanguage === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('fr')}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
          currentLanguage === 'fr'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => onLanguageChange('de')}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
          currentLanguage === 'de'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => onLanguageChange('it')}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
          currentLanguage === 'it'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSelector;