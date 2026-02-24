// Intelligent descriptions based on photo analysis
export const photoDescriptions: { [key: string]: { alt: string; description: string; category: string } } = {
  // Pool and exterior photos - DSC_1833
  'DSC_1833.jpg': {
    alt: 'Private pool with marina view',
    description: 'Beautiful private pool surrounded by spacious terrace with view of Marina Da Gama and mountains',
    category: 'piscine'
  },
  
  // Private jetty - DSC_1836 
  'DSC_1836.jpg': {
    alt: 'Private wooden jetty with direct marina access',
    description: 'Your private wooden jetty with direct access to Marina Da Gama canals - perfect for kayaks',
    category: 'marina'
  },
  
  // Marina panoramic view - DSC_1840
  'DSC_1840.jpg': {
    alt: 'Panoramic view of Marina Da Gama from terrace',
    description: 'Breathtaking view of Marina Da Gama canals from your private terrace',
    category: 'vue'
  },
  
  // Terrace with pool and view - DSC_1841
  'DSC_1841.jpg': {
    alt: 'Main terrace with outdoor lounge and pool',
    description: 'Outdoor relaxation space with garden furniture, pool and direct marina view',
    category: 'terrasse'
  },
  
  // View from terrace - DSC_1844
  'DSC_1844.jpg': {
    alt: 'View from terrace over Marina Da Gama',
    description: 'Exceptional panorama over floating homes and canals of Marina Da Gama',
    category: 'vue'
  },

  // Twin bedroom - chambre 1 (2)
  'chambre 1 (2).jpg': {
    alt: 'Bright bedroom with twin beds',
    description: 'Spacious and bright bedroom with two single beds, desk and large windows',
    category: 'chambre'
  },

  // Additional photos we can deduce by name
  'marina da gama view 1.jpg': {
    alt: 'Aerial view of Marina Da Gama',
    description: 'Panoramic view of the Marina Da Gama residential area and its canals',
    category: 'vue'
  },
  
  'marina da gama view 2.jpg': {
    alt: 'Marina Da Gama canals',
    description: 'Peaceful canals lined with houses in the Marina Da Gama neighborhood',
    category: 'marina'
  },
  
  'muizenberg beach .jpg': {
    alt: 'Muizenberg Beach with colorful huts',
    description: 'Famous Muizenberg Beach with colorful Victorian beach huts - 3 minutes from the house',
    category: 'plage'
  },
  
  'view from the house.jpg': {
    alt: 'Direct view from the house',
    description: 'The view you will have every morning from your window - pure tranquility over the marina',
    category: 'vue'
  }
};

// Automatic classification by content type
export const photoCategories = {
  piscine: {
    title: 'Pool & Relaxation',
    icon: '🏊‍♂️',
    description: 'Private pool area to cool off'
  },
  marina: {
    title: 'Marina Access',
    icon: '⛵',
    description: 'Direct access to canals and water activities'
  },
  terrasse: {
    title: 'Outdoor Spaces',
    icon: '🌿',
    description: 'Terraces and gardens to enjoy the outdoors'
  },
  vue: {
    title: 'Panoramic Views',
    icon: '🌅',
    description: 'Spectacular views from the property'
  },
  chambre: {
    title: 'Bedrooms',
    icon: '🛏️',
    description: 'Comfortable and bright sleeping spaces'
  },
  salon: {
    title: 'Living Areas',
    icon: '🛋️',
    description: 'Lounge and indoor relaxation spaces'
  },
  cuisine: {
    title: 'Kitchen',
    icon: '🍽️',
    description: 'Fully equipped modern kitchen'
  },
  salle_bain: {
    title: 'Bathrooms',
    icon: '🚿',
    description: 'Modern and functional bathrooms'
  },
  plage: {
    title: 'Nearby Beaches',
    icon: '🏖️',
    description: 'Beautiful beaches just minutes away'
  }
};

// Function to guess category if not in database
export function guessPhotoCategory(filename: string): { alt: string; description: string; category: string } {
  const name = filename.toLowerCase();
  
  // Bedrooms
  if (name.includes('chambre') || name.includes('bedroom')) {
    return {
      alt: 'Comfortable bedroom with view',
      description: 'Spacious and bright bedroom with all necessary comfort',
      category: 'chambre'
    };
  }
  
  // Views and exterior
  if (name.includes('view') || name.includes('vue') || name.includes('marina')) {
    return {
      alt: 'Beautiful view of Marina Da Gama',
      description: 'Exceptional panorama over the peaceful canals of Marina Da Gama',
      category: 'vue'
    };
  }
  
  // Beach and activities
  if (name.includes('beach') || name.includes('plage') || name.includes('muizenberg')) {
    return {
      alt: 'Nearby activities',
      description: 'Attractions and activities in the immediate surroundings',
      category: 'plage'
    };
  }
  
  // DSC numbers - classification by number
  const dscMatch = name.match(/dsc[_-]?(\d+)/);
  if (dscMatch) {
    const num = parseInt(dscMatch[1]);
    
    // 1833-1844: Exterior, pool, terrace
    if (num >= 1833 && num <= 1844) {
      return {
        alt: 'Outdoor space with pool and marina view',
        description: 'Beautiful outdoor space with pool, terrace and direct marina view',
        category: 'piscine'
      };
    }
    
    // 1850-1870: House interior
    if (num >= 1850 && num <= 1870) {
      return {
        alt: 'Modern and spacious interior',
        description: 'Modern and comfortable indoor living spaces with water view',
        category: 'salon'
      };
    }
    
    // 1890+: Bedrooms and private spaces
    if (num >= 1890) {
      return {
        alt: 'Rest areas and bedrooms',
        description: 'Comfortable bedrooms and private spaces for a relaxing stay',
        category: 'chambre'
      };
    }
  }
  
  // Default
  return {
    alt: 'Beautiful property photo',
    description: 'Discover the magnificent spaces of your stay at Marina Da Gama',
    category: 'general'
  };
}