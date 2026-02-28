'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    bookOnAirbnb: 'Book on Airbnb',
    
    // Hero
    title: 'Birdsong Castle',
    subtitle: 'Peaceful stay by the marina in Muizenberg',
    reviews: '5.0 • 50+ reviews',
    peoplePlaceholder: 'people viewed this property today',
    bookNow: 'Book Now',
    exploreHouse: 'Explore the House',
    
    // Features
    freePedalos: 'Free Pedalos',
    surfNearby: 'Surf 3min away',
    marinaView: 'Marina View',
    fullyEquipped: 'Fully Equipped',
    
    // Sections
    houseExterior: 'House & Exterior',
    houseSubtitle: 'Discover your marina-front retreat',
    houseDescription: 'Fully equipped modern house with outdoor spaces and marina views',
    
    bedrooms: 'Bedrooms',
    bedroomsSubtitle: 'Comfort and tranquility for all',
    bedroomsDescription: '3 comfortable bedrooms with marina views',
    
    location: 'Location & Points of Interest',
    locationSubtitle: 'In the heart of Marina Da Gama',
    locationDescription: 'Strategic position with all services nearby',
    
    activities: 'Activities & Surroundings',
    activitiesSubtitle: 'Water sports and discoveries',
    activitiesDescription: 'Free pedalo rides, surfing, and nearby attractions. Be clever - book additional activities with the owner!',
    
    // Common
    viewPhotos: 'View Photos',
    explorePhotos: 'Explore Photos',
    
    // Birding section
    activitiesProposedByOwner: 'Activities Proposed by Owner',
    natureBirdingExperiences: 'Nature & Birding Experiences from Muizenberg Marina',
    
    // BirdingExperiences
    readyForAdventure: 'Ready for an Adventure?',
    bookPersonalized: 'Book your personalized birding and nature experience directly with me during your stay.',
    contactGuide: 'Contact Guide',
    whatsappBooking: 'WhatsApp Booking',
    learnMore: 'Learn More',
    bookThisExperience: 'Book This Experience',
    close: 'Close',
    highlights: 'Highlights:',
    
    // Worship Section
    worshipPlaces: 'Places of Worship',
    worshipDescription: 'Discover the beautiful religious sites around Muizenberg',
    worshipContent: 'Visit the diverse religious communities in our area - Anglican churches, Catholic churches, Protestant churches, and the local synagogue.',
  },
  fr: {
    // Header
    bookOnAirbnb: 'Réserver sur Airbnb',
    
    // Hero
    title: 'Birdsong Castle',
    subtitle: 'Séjour paisible au bord de la marina à Muizenberg',
    reviews: '5.0 • 50+ avis',
    peoplePlaceholder: 'personnes ont consulté cette propriété aujourd\'hui',
    bookNow: 'Réserver maintenant',
    exploreHouse: 'Découvrir la maison',
    
    // Features
    freePedalos: 'Pédalos gratuits',
    surfNearby: 'Surf à 3min',
    marinaView: 'Vue marina',
    fullyEquipped: 'Entièrement équipé',
    
    // Sections
    houseExterior: 'Maison & Extérieur',
    houseSubtitle: 'Découvrez votre refuge face à la marina',
    houseDescription: 'Maison moderne entièrement équipée avec espaces extérieurs et vue marina',
    
    bedrooms: 'Chambres',
    bedroomsSubtitle: 'Confort et tranquillité pour tous',
    bedroomsDescription: '3 chambres confortables avec vue sur la marina',
    
    location: 'Localisation & Points d\'Intérêt',
    locationSubtitle: 'Au cœur de Marina Da Gama',
    locationDescription: 'Position stratégique avec tous les services à proximité',
    
    activities: 'Activités & Alentours',
    activitiesSubtitle: 'Sports nautiques et découvertes',
    activitiesDescription: 'Pédalos gratuits, surf, et attractions à proximité. Soyez malin - réservez des activités supplémentaires avec le propriétaire !',
    
    // Common
    viewPhotos: 'Voir les photos',
    explorePhotos: 'Découvrir les photos',
    
    // Birding section
    activitiesProposedByOwner: 'Activités proposées par le propriétaire',
    natureBirdingExperiences: 'Expériences Nature & Ornithologie depuis Muizenberg Marina',
    
    // BirdingExperiences
    readyForAdventure: 'Prêt pour une aventure ?',
    bookPersonalized: 'Réservez votre expérience d\'ornithologie et nature personnalisée directement avec moi pendant votre séjour.',
    contactGuide: 'Contacter le Guide',
    whatsappBooking: 'Réservation WhatsApp',
    learnMore: 'En savoir plus',
    bookThisExperience: 'Réserver cette expérience',
    close: 'Fermer',
    highlights: 'Points forts :',
    
    // Worship Section
    worshipPlaces: 'Lieux de Culte',
    worshipDescription: 'Découvrez les beaux sites religieux autour de Muizenberg',
    worshipContent: 'Visitez les diverses communautés religieuses de notre région - églises anglicanes, églises catholiques, églises protestantes, et la synagogue locale.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};