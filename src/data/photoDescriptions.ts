// Descriptions intelligentes basées sur l'analyse des photos
export const photoDescriptions: { [key: string]: { alt: string; description: string; category: string } } = {
  // Photos de piscine et extérieur - DSC_1833
  'DSC_1833.jpg': {
    alt: 'Piscine privée avec vue sur la marina',
    description: 'Magnifique piscine privée entourée d\'une terrasse spacieuse avec vue sur Marina Da Gama et les montagnes',
    category: 'piscine'
  },
  
  // Ponton privé - DSC_1836 
  'DSC_1836.jpg': {
    alt: 'Ponton privé avec accès direct à la marina',
    description: 'Votre ponton privé en bois avec accès direct aux canaux de Marina Da Gama - parfait pour les kayaks',
    category: 'marina'
  },
  
  // Vue panoramique marina - DSC_1840
  'DSC_1840.jpg': {
    alt: 'Vue panoramique sur Marina Da Gama depuis la terrasse',
    description: 'Vue époustouflante sur les canaux de Marina Da Gama depuis votre terrasse privée',
    category: 'vue'
  },
  
  // Terrasse avec piscine et vue - DSC_1841
  'DSC_1841.jpg': {
    alt: 'Terrasse principale avec salon extérieur et piscine',
    description: 'Espace détente extérieur avec salon de jardin, piscine et vue directe sur la marina',
    category: 'terrasse'
  },
  
  // Vue depuis la terrasse - DSC_1844
  'DSC_1844.jpg': {
    alt: 'Vue depuis la terrasse sur Marina Da Gama',
    description: 'Panorama exceptionnel sur les maisons flottantes et canaux de Marina Da Gama',
    category: 'vue'
  },

  // Chambre avec lits jumeaux - chambre 1 (2)
  'chambre 1 (2).jpg': {
    alt: 'Chambre lumineuse avec lits jumeaux',
    description: 'Chambre spacieuse et lumineuse avec deux lits simples, bureau et grandes fenêtres',
    category: 'chambre'
  },

  // Photos supplémentaires qu'on peut déduire par nom
  'marina da gama view 1.jpg': {
    alt: 'Vue aérienne de Marina Da Gama',
    description: 'Vue panoramique sur le quartier résidentiel de Marina Da Gama et ses canaux',
    category: 'vue'
  },
  
  'marina da gama view 2.jpg': {
    alt: 'Canaux de Marina Da Gama',
    description: 'Les paisibles canaux bordés de maisons dans le quartier de Marina Da Gama',
    category: 'marina'
  },
  
  'muizenberg beach .jpg': {
    alt: 'Plage de Muizenberg avec cabines colorées',
    description: 'La célèbre plage de Muizenberg avec ses cabines victoriennes colorées - à 3 minutes de la maison',
    category: 'plage'
  },
  
  'view from the house.jpg': {
    alt: 'Vue directe depuis la maison',
    description: 'La vue que vous aurez chaque matin depuis votre fenêtre - pure tranquillité sur la marina',
    category: 'vue'
  }
};

// Classification automatique par type de contenu
export const photoCategories = {
  piscine: {
    title: 'Piscine & Détente',
    icon: '🏊‍♂️',
    description: 'Espace piscine privée pour se rafraîchir'
  },
  marina: {
    title: 'Accès Marina',
    icon: '⛵',
    description: 'Accès direct aux canaux et activités nautiques'
  },
  terrasse: {
    title: 'Espaces Extérieurs',
    icon: '🌿',
    description: 'Terrasses et jardins pour profiter du plein air'
  },
  vue: {
    title: 'Vues Panoramiques',
    icon: '🌅',
    description: 'Les vues spectaculaires depuis la propriété'
  },
  chambre: {
    title: 'Chambres',
    icon: '🛏️',
    description: 'Espaces de repos confortables et lumineux'
  },
  salon: {
    title: 'Espaces de Vie',
    icon: '🛋️',
    description: 'Salon et espaces de détente intérieurs'
  },
  cuisine: {
    title: 'Cuisine',
    icon: '🍽️',
    description: 'Cuisine moderne entièrement équipée'
  },
  salle_bain: {
    title: 'Salles de Bain',
    icon: '🚿',
    description: 'Salles de bain modernes et fonctionnelles'
  },
  plage: {
    title: 'Plages Nearby',
    icon: '🏖️',
    description: 'Plages magnifiques à quelques minutes'
  }
};

// Fonction pour deviner la catégorie si pas dans la base
export function guessPhotoCategory(filename: string): { alt: string; description: string; category: string } {
  const name = filename.toLowerCase();
  
  // Chambres
  if (name.includes('chambre') || name.includes('bedroom')) {
    return {
      alt: 'Chambre confortable avec vue',
      description: 'Chambre spacieuse et lumineuse avec tout le confort nécessaire',
      category: 'chambre'
    };
  }
  
  // Vues et extérieur
  if (name.includes('view') || name.includes('vue') || name.includes('marina')) {
    return {
      alt: 'Vue magnifique sur Marina Da Gama',
      description: 'Panorama exceptionnel sur les canaux paisibles de Marina Da Gama',
      category: 'vue'
    };
  }
  
  // Plage et activités
  if (name.includes('beach') || name.includes('plage') || name.includes('muizenberg')) {
    return {
      alt: 'Activités à proximité',
      description: 'Attractions et activités dans les environs immédiats',
      category: 'plage'
    };
  }
  
  // Numéros DSC - classification par numéro
  const dscMatch = name.match(/dsc[_-]?(\d+)/);
  if (dscMatch) {
    const num = parseInt(dscMatch[1]);
    
    // 1833-1844: Extérieur, piscine, terrasse
    if (num >= 1833 && num <= 1844) {
      return {
        alt: 'Espace extérieur avec piscine et vue marina',
        description: 'Magnifique espace extérieur avec piscine, terrasse et vue directe sur la marina',
        category: 'piscine'
      };
    }
    
    // 1850-1870: Intérieur maison
    if (num >= 1850 && num <= 1870) {
      return {
        alt: 'Intérieur moderne et spacieux',
        description: 'Espaces de vie intérieurs modernes et confortables avec vue sur l\'eau',
        category: 'salon'
      };
    }
    
    // 1890+: Chambres et espaces privés
    if (num >= 1890) {
      return {
        alt: 'Espaces de repos et chambres',
        description: 'Chambres confortables et espaces privés pour un séjour relaxant',
        category: 'chambre'
      };
    }
  }
  
  // Par défaut
  return {
    alt: 'Belle photo de la propriété',
    description: 'Découvrez les espaces magnifiques de votre séjour à Marina Da Gama',
    category: 'general'
  };
}