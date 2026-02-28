// Simplified site structure
export const sections = [
  {
    id: 'house-exterior',
    title: 'House & Exterior',
    subtitle: 'Discover your marina-front retreat',
    titleKey: 'houseExterior',
    subtitleKey: 'houseSubtitle',
    descriptionKey: 'houseDescription',
    icon: 'house',
    folder: 'exterior',
    description: 'Fully equipped modern house with outdoor spaces and marina views',
    backgroundColor: 'bg-blue-50',
    textColor: 'text-blue-900'
  },
  {
    id: 'bedrooms',
    title: 'Bedrooms',
    subtitle: 'Comfort and tranquility for all',
    titleKey: 'bedrooms',
    subtitleKey: 'bedroomsSubtitle',
    descriptionKey: 'bedroomsDescription',
    icon: 'bed',
    folder: 'chambers',
    description: '3 comfortable bedrooms with marina views',
    backgroundColor: 'bg-green-50',
    textColor: 'text-green-900'
  },
  {
    id: 'location',
    title: 'Location & Points of Interest',
    subtitle: 'In the heart of Marina Da Gama',
    titleKey: 'location',
    subtitleKey: 'locationSubtitle',
    descriptionKey: 'locationDescription',
    icon: 'map-pin',
    folder: 'worship',
    description: 'Strategic position with all services nearby',
    backgroundColor: 'bg-purple-50',
    textColor: 'text-purple-900',
    showMap: true
  },
  {
    id: 'activities',
    title: 'Activities & Surroundings',
    subtitle: 'Water sports and discoveries',
    titleKey: 'activities',
    subtitleKey: 'activitiesSubtitle',
    descriptionKey: 'activitiesDescription',
    icon: 'activity',
    folder: 'activities',
    description: 'Free pedalo rides, surfing, and nearby attractions. Be clever - book additional activities with the owner!',
    backgroundColor: 'bg-cyan-50',
    textColor: 'text-cyan-900'
  }
];

// Points of interest for the map
export const pointsOfInterest = [
  // Beaches & Water Sports
  {
    name: 'Muizenberg Beach',
    type: 'beach',
    icon: '🏄‍♂️',
    distance: '3 min',
    coordinates: [-34.1050, 18.4679],
    description: 'World-famous surf beach with colorful beach huts'
  },
  {
    name: 'Fish Hoek Beach',
    type: 'beach',
    icon: '🏊‍♂️',
    distance: '10 min',
    coordinates: [-34.1377, 18.4308],
    description: 'Protected family beach, perfect for swimming'
  },
  
  // Villages & Culture
  {
    name: 'Kalk Bay Village',
    type: 'village',
    icon: '🎨',
    distance: '8 min',
    coordinates: [-34.1282, 18.4481],
    description: 'Bohemian village with art galleries and restaurants'
  },
  {
    name: 'St James Tidal Pool',
    type: 'village',
    icon: '🏊',
    distance: '10 min',
    coordinates: [-34.1200, 18.4550],
    description: 'Natural heated seawater tidal pool'
  },
  
  // Wineries & Gastronomy
  {
    name: 'Klein Constantia Wine Estate',
    type: 'wine',
    icon: '🍷',
    distance: '15 min',
    coordinates: [-34.0150, 18.4100],
    description: 'Historic wine estate with tastings'
  },
  {
    name: 'Groot Constantia',
    type: 'wine',
    icon: '🍇',
    distance: '18 min',
    coordinates: [-34.0200, 18.4200],
    description: 'South Africa\'s oldest wine estate'
  },
  {
    name: 'Steenberg Wine Estate',
    type: 'wine',
    icon: '🥂',
    distance: '20 min',
    coordinates: [-34.0800, 18.4300],
    description: 'Premium vineyard with gourmet restaurant'
  },
  
  // Nature & Wildlife
  {
    name: 'Boulders Beach Penguins',
    type: 'wildlife',
    icon: '🐧',
    distance: '15 min',
    coordinates: [-34.1975, 18.4500],
    description: '3000 African penguins in their natural habitat'
  },
  {
    name: 'Cape Point Nature Reserve',
    type: 'nature',
    icon: '🏔️',
    distance: '35 min',
    coordinates: [-34.3570, 18.4963],
    description: 'Spectacular cliffs and lighthouse at the tip of Africa'
  },
  {
    name: 'Table Mountain',
    type: 'nature',
    icon: '🚠',
    distance: '40 min',
    coordinates: [-33.9628, 18.4098],
    description: 'Cable car to the summit, 360° views'
  },
  {
    name: 'Chapman\'s Peak Drive',
    type: 'nature',
    icon: '🛣️',
    distance: '25 min',
    coordinates: [-34.1580, 18.3720],
    description: 'One of the world\'s most spectacular coastal routes'
  },
  
  // Special Adventures
  {
    name: 'Whale Watching Hermanus',
    type: 'wildlife',
    icon: '🐋',
    distance: '75 min',
    coordinates: [-34.4187, 19.2345],
    description: 'Land-based whale watching (June-November)'
  },
  {
    name: 'V&A Waterfront',
    type: 'village',
    icon: '🛍️',
    distance: '35 min',
    coordinates: [-33.9024, 18.4190],
    description: 'Shopping, restaurants and Two Oceans Aquarium'
  },
  {
    name: 'Lion\'s Head Hike',
    type: 'nature',
    icon: '🦁',
    distance: '45 min',
    coordinates: [-33.9361, 18.4075],
    description: 'Popular hike with breathtaking views'
  }
];

// General configuration
export const siteConfig = {
  title: "Birdsong Castle",
  subtitle: "Peaceful stay by the marina in Muizenberg",
  description: "Fully equipped house in the peaceful Marina Da Gama neighborhood. Exceptional marina view, just minutes from famous Muizenberg Beach.",
  airbnbUrl: "https://airbnb.co.za/h/birdsongcastle",
  coordinates: [-34.1058, 18.4742], // 4 de Lille Square, Muizenberg
  keyFeatures: [
    { icon: '🚲', text: 'Free Pedalos' },
    { icon: '🏄‍♂️', text: 'Surf 3min away' },
    { icon: '🌊', text: 'Marina View' },
    { icon: '🏠', text: 'Fully Equipped' }
  ]
};