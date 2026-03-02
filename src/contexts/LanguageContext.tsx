'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'de' | 'it';

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
    subtitle: 'Peaceful stay by the marina in Muizenberg, Cape Town, South Africa',
    reviews: '5.0 • 50+ reviews',
    peoplePlaceholder: 'people viewed this property today',
    bookNow: 'Book Now',
    exploreHouse: 'Explore the House',
    
    // Features
    freePedalos: 'Free Kayaks',
    surfNearby: 'Surf 3min away',
    marinaView: 'Marina View',
    fullyEquipped: 'Fully Equipped',
    
    // Sections
    houseExterior: 'House & Exterior',
    houseSubtitle: 'Discover your marina-front retreat',
    houseDescription: 'Fully equipped modern house with outdoor spaces and marina views',
    
    bedrooms: 'Bedrooms',
    bedroomsSubtitle: 'Comfort and tranquility for all',
    bedroomsDescription: '4 comfortable bedrooms with marina views',
    
    bathrooms: 'Bathrooms',
    bathroomsSubtitle: 'Modern and luxurious amenities',
    bathroomsDescription: '2.5 modern bathrooms with premium fixtures',
    
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
    subtitle: 'Séjour paisible au bord de la marina à Muizenberg, Cape Town, Afrique du Sud',
    reviews: '5.0 • 50+ avis',
    peoplePlaceholder: 'personnes ont consulté cette propriété aujourd\'hui',
    bookNow: 'Réserver maintenant',
    exploreHouse: 'Découvrir la maison',
    
    // Features
    freePedalos: 'Kayaks gratuits',
    surfNearby: 'Surf à 3min',
    marinaView: 'Vue marina',
    fullyEquipped: 'Entièrement équipé',
    
    // Sections
    houseExterior: 'Maison & Extérieur',
    houseSubtitle: 'Découvrez votre refuge face à la marina',
    houseDescription: 'Maison moderne entièrement équipée avec espaces extérieurs et vue marina',
    
    bedrooms: 'Chambres',
    bedroomsSubtitle: 'Confort et tranquillité pour tous',
    bedroomsDescription: '4 chambres confortables avec vue sur la marina',
    
    bathrooms: 'Salles de bain',
    bathroomsSubtitle: 'Équipements modernes et luxueux',
    bathroomsDescription: '2.5 salles de bain modernes avec équipements haut de gamme',
    
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
  },
  de: {
    // Header
    bookOnAirbnb: 'Auf Airbnb buchen',
    
    // Hero
    title: 'Birdsong Castle',
    subtitle: 'Ruhiger Aufenthalt am Yachthafen in Muizenberg, Kapstadt, Südafrika',
    reviews: '5.0 • 50+ Bewertungen',
    peoplePlaceholder: 'Personen haben heute diese Unterkunft angesehen',
    bookNow: 'Jetzt buchen',
    exploreHouse: 'Haus erkunden',
    
    // Features
    freePedalos: 'Kostenlose Kajaks',
    surfNearby: 'Surfen 3 Min entfernt',
    marinaView: 'Marina-Blick',
    fullyEquipped: 'Voll ausgestattet',
    
    // Sections
    houseExterior: 'Haus & Außenbereich',
    houseSubtitle: 'Entdecken Sie Ihren Marina-Rückzugsort',
    houseDescription: 'Voll ausgestattetes modernes Haus mit Außenbereichen und Marina-Blick',
    
    bedrooms: 'Schlafzimmer',
    bedroomsSubtitle: 'Komfort und Ruhe für alle',
    bedroomsDescription: '4 komfortable Schlafzimmer mit Marina-Blick',
    
    bathrooms: 'Badezimmer',
    bathroomsSubtitle: 'Moderne und luxuriöse Ausstattung',
    bathroomsDescription: '2,5 moderne Badezimmer mit Premium-Armaturen',
    
    location: 'Lage & Sehenswürdigkeiten',
    locationSubtitle: 'Im Herzen von Marina Da Gama',
    locationDescription: 'Strategische Lage mit allen Dienstleistungen in der Nähe',
    
    activities: 'Aktivitäten & Umgebung',
    activitiesSubtitle: 'Wassersport und Entdeckungen',
    activitiesDescription: 'Kostenlose Kajak-Fahrten, Surfen und Attraktionen in der Nähe. Seien Sie schlau - buchen Sie zusätzliche Aktivitäten beim Eigentümer!',
    
    // Common
    viewPhotos: 'Fotos ansehen',
    explorePhotos: 'Fotos entdecken',
    
    // Birding section
    activitiesProposedByOwner: 'Aktivitäten vom Eigentümer',
    natureBirdingExperiences: 'Natur & Vogelbeobachtung von Muizenberg Marina',
    
    // BirdingExperiences
    readyForAdventure: 'Bereit für ein Abenteuer?',
    bookPersonalized: 'Buchen Sie Ihr persönliches Natur- und Vogelbeobachtungserlebnis direkt bei mir während Ihres Aufenthalts.',
    contactGuide: 'Guide kontaktieren',
    whatsappBooking: 'WhatsApp Buchung',
    learnMore: 'Mehr erfahren',
    bookThisExperience: 'Diese Erfahrung buchen',
    close: 'Schließen',
    highlights: 'Höhepunkte:',
    
    // Worship Section
    worshipPlaces: 'Gebetsstätten',
    worshipDescription: 'Entdecken Sie die schönen religiösen Stätten rund um Muizenberg',
    worshipContent: 'Besuchen Sie die vielfältigen Religionsgemeinschaften unserer Region - anglikanische Kirchen, katholische Kirchen, protestantische Kirchen und die örtliche Synagoge.',
  },
  it: {
    // Header
    bookOnAirbnb: 'Prenota su Airbnb',
    
    // Hero
    title: 'Birdsong Castle',
    subtitle: 'Soggiorno tranquillo presso la marina di Muizenberg, Cape Town, Sud Africa',
    reviews: '5.0 • 50+ recensioni',
    peoplePlaceholder: 'persone hanno visualizzato questa proprietà oggi',
    bookNow: 'Prenota ora',
    exploreHouse: 'Esplora la casa',
    
    // Features
    freePedalos: 'Kayak gratuiti',
    surfNearby: 'Surf a 3 min',
    marinaView: 'Vista marina',
    fullyEquipped: 'Completamente attrezzato',
    
    // Sections
    houseExterior: 'Casa & Esterno',
    houseSubtitle: 'Scopri il tuo rifugio fronte marina',
    houseDescription: 'Casa moderna completamente attrezzata con spazi esterni e vista marina',
    
    bedrooms: 'Camere da letto',
    bedroomsSubtitle: 'Comfort e tranquillità per tutti',
    bedroomsDescription: '4 camere da letto confortevoli con vista marina',
    
    bathrooms: 'Bagni',
    bathroomsSubtitle: 'Servizi moderni e lussuosi',
    bathroomsDescription: '2,5 bagni moderni con accessori di qualità',
    
    location: 'Posizione & Punti di interesse',
    locationSubtitle: 'Nel cuore di Marina Da Gama',
    locationDescription: 'Posizione strategica con tutti i servizi nelle vicinanze',
    
    activities: 'Attività & Dintorni',
    activitiesSubtitle: 'Sport acquatici e scoperte',
    activitiesDescription: 'Gite gratuite in kayak, surf e attrazioni nelle vicinanze. Sii furbo - prenota attività aggiuntive con il proprietario!',
    
    // Common
    viewPhotos: 'Visualizza foto',
    explorePhotos: 'Esplora foto',
    
    // Birding section
    activitiesProposedByOwner: 'Attività proposte dal proprietario',
    natureBirdingExperiences: 'Esperienze natura & birdwatching da Muizenberg Marina',
    
    // BirdingExperiences
    readyForAdventure: 'Pronto per un\'avventura?',
    bookPersonalized: 'Prenota la tua esperienza personalizzata di natura e birdwatching direttamente con me durante il tuo soggiorno.',
    contactGuide: 'Contatta la guida',
    whatsappBooking: 'Prenotazione WhatsApp',
    learnMore: 'Per saperne di più',
    bookThisExperience: 'Prenota questa esperienza',
    close: 'Chiudi',
    highlights: 'Punti salienti:',
    
    // Worship Section
    worshipPlaces: 'Luoghi di culto',
    worshipDescription: 'Scopri i bellissimi siti religiosi intorno a Muizenberg',
    worshipContent: 'Visita le diverse comunità religiose della nostra zona - chiese anglicane, chiese cattoliche, chiese protestanti e la sinagoga locale.',
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