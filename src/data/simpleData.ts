// Structure simplifiée du site
export const sections = [
  {
    id: 'maison-exterieur',
    title: 'La Maison & Extérieur',
    subtitle: 'Découvrez votre refuge face à la marina',
    icon: '🏡',
    folder: 'our-house',
    description: 'Intérieur moderne et espaces extérieurs avec vue marina',
    backgroundColor: 'bg-blue-50',
    textColor: 'text-blue-900'
  },
  {
    id: 'chambres',
    title: 'Les Chambres',
    subtitle: 'Confort et tranquillité pour tous',
    icon: '🛏️',
    folder: 'chambers',
    description: '3 chambres confortables avec vue sur la marina',
    backgroundColor: 'bg-green-50',
    textColor: 'text-green-900'
  },
  {
    id: 'activites',
    title: 'Activités & Alentours',
    subtitle: 'Sports nautiques et découvertes',
    icon: '🚣',
    folder: 'activities',
    description: 'Kayak gratuit, surf, et attractions à proximité',
    backgroundColor: 'bg-cyan-50',
    textColor: 'text-cyan-900'
  },
  {
    id: 'localisation',
    title: 'Localisation & Points d\'Intérêt',
    subtitle: 'Au cœur de Marina Da Gama',
    icon: '📍',
    folder: 'worship',
    description: 'Position stratégique avec tous les services à proximité',
    backgroundColor: 'bg-purple-50',
    textColor: 'text-purple-900',
    showMap: true
  }
];

// Points d'intérêt pour la carte
export const pointsOfInterest = [
  // Plages & Sports nautiques
  {
    name: 'Muizenberg Beach',
    type: 'beach',
    icon: '🏄‍♂️',
    distance: '3 min',
    coordinates: [-34.1050, 18.4679],
    description: 'Plage de surf mondialement connue avec cabines colorées'
  },
  {
    name: 'Fish Hoek Beach',
    type: 'beach',
    icon: '🏊‍♂️',
    distance: '10 min',
    coordinates: [-34.1377, 18.4308],
    description: 'Plage familiale protégée, parfaite pour la baignade'
  },
  
  // Villages & Culture
  {
    name: 'Kalk Bay Village',
    type: 'village',
    icon: '🎨',
    distance: '8 min',
    coordinates: [-34.1282, 18.4481],
    description: 'Village bohème avec galeries d\'art et restaurants'
  },
  {
    name: 'St James Tidal Pool',
    type: 'village',
    icon: '🏊',
    distance: '10 min',
    coordinates: [-34.1200, 18.4550],
    description: 'Piscine naturelle d\'eau de mer chauffée'
  },
  
  // Vignobles & Gastronomie
  {
    name: 'Klein Constantia Wine Estate',
    type: 'wine',
    icon: '🍷',
    distance: '15 min',
    coordinates: [-34.0150, 18.4100],
    description: 'Domaine vinicole historique avec dégustations'
  },
  {
    name: 'Groot Constantia',
    type: 'wine',
    icon: '🍇',
    distance: '18 min',
    coordinates: [-34.0200, 18.4200],
    description: 'Plus ancien domaine vinicole d\'Afrique du Sud'
  },
  {
    name: 'Steenberg Wine Estate',
    type: 'wine',
    icon: '🥂',
    distance: '20 min',
    coordinates: [-34.0800, 18.4300],
    description: 'Vignoble premium avec restaurant gastronomique'
  },
  
  // Nature & Animaux
  {
    name: 'Boulders Beach Penguins',
    type: 'wildlife',
    icon: '🐧',
    distance: '15 min',
    coordinates: [-34.1975, 18.4500],
    description: '3000 pingouins africains dans leur habitat naturel'
  },
  {
    name: 'Cape Point Nature Reserve',
    type: 'nature',
    icon: '🏔️',
    distance: '35 min',
    coordinates: [-34.3570, 18.4963],
    description: 'Falaises spectaculaires et phare au bout de l\'Afrique'
  },
  {
    name: 'Table Mountain',
    type: 'nature',
    icon: '🚠',
    distance: '40 min',
    coordinates: [-33.9628, 18.4098],
    description: 'Téléphérique vers le sommet, vues à 360°'
  },
  {
    name: 'Chapman\'s Peak Drive',
    type: 'nature',
    icon: '🛣️',
    distance: '25 min',
    coordinates: [-34.1580, 18.3720],
    description: 'Une des routes côtières les plus spectaculaires au monde'
  },
  
  // Aventures spéciales
  {
    name: 'Whale Watching Hermanus',
    type: 'wildlife',
    icon: '🐋',
    distance: '75 min',
    coordinates: [-34.4187, 19.2345],
    description: 'Observation des baleines depuis la côte (juin-novembre)'
  },
  {
    name: 'V&A Waterfront',
    type: 'village',
    icon: '🛍️',
    distance: '35 min',
    coordinates: [-33.9024, 18.4190],
    description: 'Shopping, restaurants et aquarium Two Oceans'
  },
  {
    name: 'Lion\'s Head Hike',
    type: 'nature',
    icon: '🦁',
    distance: '45 min',
    coordinates: [-33.9361, 18.4075],
    description: 'Randonnée populaire avec vues époustouflantes'
  }
];

// Configuration générale
export const siteConfig = {
  title: "Marina Da Gama House - Vue Marina",
  subtitle: "Séjour paisible au bord de la marina à Muizenberg",
  description: "Maison charmante dans le quartier paisible de Marina Da Gama. Vue exceptionnelle sur la marina, à quelques minutes de la célèbre plage de Muizenberg.",
  airbnbUrl: "https://www.airbnb.com/rooms/your-listing-id",
  coordinates: [-34.0928, 18.4569], // Marina Da Gama
  keyFeatures: [
    { icon: '🚣', text: 'Kayaks inclus' },
    { icon: '🏄‍♂️', text: 'Surf à 3min' },
    { icon: '🌊', text: 'Vue marina' },
    { icon: '🅿️', text: 'Parking privé' }
  ]
};