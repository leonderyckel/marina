export const propertyData = {
  title: "Marina Da Gama House - Waterfront View",
  subtitle: "Peaceful stay by the marina in Muizenberg",
  description: "Discover our charming house located in the peaceful Marina Da Gama neighborhood in Muizenberg. Enjoy an exceptional waterfront setting, just minutes away from the famous Muizenberg Beach and its legendary surf spots.",
  
  features: [
    {
      icon: "🏠",
      title: "Capacity",
      description: "Up to 6 guests, 3 bedrooms, 2 bathrooms"
    },
    {
      icon: "🌊",
      title: "Marina View",
      description: "Direct view of the marina and canals"
    },
    {
      icon: "🏄‍♂️",
      title: "Beach Nearby",
      description: "5 minutes to Muizenberg Beach"
    },
    {
      icon: "🅿️",
      title: "Parking",
      description: "Secure private parking"
    },
    {
      icon: "🌿",
      title: "Nature",
      description: "Quiet and natural environment"
    },
    {
      icon: "🍽️",
      title: "Equipped",
      description: "Full kitchen and modern amenities"
    }
  ],

  amenities: [
    "Free WiFi",
    "Fully equipped kitchen",
    "Washing machine and dryer",
    "Waterfront terrace",
    "Barbecue",
    "Private parking",
    "Air conditioning",
    "Flat screen TV",
    "Private garden",
    "Kayaks available"
  ],

  location: {
    coordinates: [-34.0928, 18.4569], // Marina Da Gama coordinates
    address: "Marina Da Gama, Muizenberg, Cape Town, South Africa"
  }
};

export const activities = [
  {
    title: "Surfing at Muizenberg",
    description: "Learn to surf on one of South Africa's best beaches, known for its perfect beginner-friendly waves and warm water.",
    icon: "🏄‍♂️",
    distance: "3 min drive",
    category: "Water Sports",
    bestTime: "Year-round, best waves 6-10 AM"
  },
  {
    title: "Kayaking in the Marina",
    description: "Explore the peaceful canals of Marina Da Gama by kayak. Equipment available at the property.",
    icon: "🚣‍♀️",
    distance: "At your doorstep",
    category: "Water Sports",
    bestTime: "Early morning or late afternoon"
  },
  {
    title: "Muizenberg Beach Promenade",
    description: "Walk along the famous beach with colorful Victorian beach huts, cafes, and stunning mountain views.",
    icon: "🏖️",
    distance: "3 min drive",
    category: "Beach & Relaxation",
    bestTime: "Sunset walks are magical"
  },
  {
    title: "Cape Point Nature Reserve",
    description: "Visit the dramatic cliffs at Africa's southwestern tip. Include Cape of Good Hope and lighthouse.",
    icon: "🏔️",
    distance: "35 min drive",
    category: "Nature & Wildlife",
    bestTime: "Full day trip, avoid weekends"
  },
  {
    title: "Table Mountain Cable Car",
    description: "Take the rotating cable car to Table Mountain's summit for 360° views of Cape Town.",
    icon: "🚠",
    distance: "40 min drive",
    category: "Nature & Adventure",
    bestTime: "Clear days, book online in advance"
  },
  {
    title: "Kalk Bay Harbor & Restaurants",
    description: "Explore this charming fishing village with art galleries, antique shops, and excellent seafood.",
    icon: "🎣",
    distance: "8 min drive",
    category: "Culture & Dining",
    bestTime: "Morning fish market, lunch at harbor"
  },
  {
    title: "Whale Watching (Hermanus)",
    description: "Best land-based whale watching in the world. Southern Right whales from June to November.",
    icon: "🐋",
    distance: "75 min drive",
    category: "Wildlife",
    bestTime: "June-November, early morning"
  },
  {
    title: "Boulders Beach Penguins",
    description: "Walk among 3,000 African penguins in their natural habitat. Boardwalk protects both visitors and wildlife.",
    icon: "🐧",
    distance: "15 min drive",
    category: "Wildlife",
    bestTime: "Early morning or late afternoon"
  },
  {
    title: "Chapman's Peak Drive",
    description: "One of the world's most scenic coastal drives with dramatic cliffs and ocean views.",
    icon: "🛣️",
    distance: "25 min drive",
    category: "Scenic Drives",
    bestTime: "Sunset drive, clear weather"
  },
  {
    title: "V&A Waterfront",
    description: "Cape Town's premier shopping and entertainment destination with aquarium, restaurants, and harbor views.",
    icon: "🛍️",
    distance: "35 min drive",
    category: "Shopping & Entertainment",
    bestTime: "Afternoon and evening"
  }
];

export const testimonials = [
  {
    name: "Sophie M.",
    country: "France",
    text: "Absolutely perfect stay! The house is beautiful with an incredible view of the marina. Waking up to the water view every morning was pure magic. The location is ideal for exploring the region.",
    rating: 5,
    stayMonth: "March 2024"
  },
  {
    name: "James L.",
    country: "United Kingdom", 
    text: "We loved our stay. The proximity to Muizenberg Beach and the calm of Marina Da Gama made our vacation unforgettable. The kayaks were a fantastic bonus - we used them every day!",
    rating: 5,
    stayMonth: "January 2024"
  },
  {
    name: "Maria S.",
    country: "Spain",
    text: "Very well-equipped house, welcoming hosts and peaceful environment. Perfect for recharging while being close to attractions. The sunrise from the terrace is breathtaking.",
    rating: 5,
    stayMonth: "November 2023"
  },
  {
    name: "Chen W.",
    country: "Singapore",
    text: "Best Airbnb experience ever! The house exceeded all expectations. Having the marina right at our doorstep felt like staying in a luxury resort. Highly recommend!",
    rating: 5,
    stayMonth: "February 2024"
  },
  {
    name: "Oliver K.",
    country: "Germany",
    text: "Amazing location for surf enthusiasts! 3 minutes to Muizenberg Beach, and the house has everything you need. The hosts provided excellent local tips. Will definitely return!",
    rating: 5,
    stayMonth: "December 2023"
  }
];

// Configuration
export const siteConfig = {
  airbnbUrl: "https://airbnb.co.za/h/birdsongcastle", // Updated Airbnb URL
  bookingUrgency: {
    enabled: true,
    recentBookings: 12,
    viewersToday: 28
  },
  specialOffers: {
    enabled: true,
    weeklyDiscount: 15,
    monthlyDiscount: 25
  }
};

export const worshipPlaces = [
  {
    name: "St. James Catholic Church",
    type: "Christian - Catholic",
    icon: "⛪",
    address: "Main Road, St James, Cape Town",
    distance: "8 min drive",
    description: "Beautiful Catholic church in St James with stunning stained glass windows and ocean views.",
    services: "Saturday 6:00 PM, Sunday 8:00 AM & 10:00 AM",
    contact: "+27 21 788 6418",
    image: "/images/worship/catholic church St james .jpg"
  },
  {
    name: "Anglican Church Constantia",
    type: "Christian - Anglican",
    icon: "⛪",
    address: "Constantia, Cape Town",
    distance: "15 min drive",
    description: "Historic Anglican church in the beautiful Constantia wine region.",
    services: "Sunday 8:00 AM & 10:30 AM",
    contact: "+27 21 794 7093",
    image: "/images/worship/anglican church constantia .jpg"
  },
  {
    name: "Kalk Bay Protestant Church",
    type: "Christian - Protestant",
    icon: "⛪",
    address: "Main Road, Kalk Bay, Cape Town",
    distance: "12 min drive",
    description: "Welcoming Protestant community in the heart of charming Kalk Bay fishing village.",
    services: "Sunday 9:30 AM",
    contact: "+27 21 788 1762",
    image: "/images/worship/protestan church kalk bay .jpg"
  },
  {
    name: "Muizenberg Synagogue",
    type: "Jewish",
    icon: "✡️",
    address: "Muizenberg, Cape Town",
    distance: "5 min drive",
    description: "Local synagogue serving the Jewish community in Muizenberg and surrounding areas.",
    services: "Friday 7:30 PM, Saturday 9:30 AM",
    contact: "+27 21 788 4321",
    image: "/images/worship/synagogue muizenberg.jpg"
  },
  {
    name: "Habibia Soofie Saheb Masjid",
    type: "Islamic",
    icon: "🕌",
    address: "Cape Town",
    distance: "25 min drive",
    description: "Beautiful mosque serving the Muslim community with regular prayers and community programs.",
    services: "Daily prayers, Jumu'ah Friday 1:00 PM",
    contact: "+27 21 671 0271",
    image: "/images/worship/habibia soofie Saheb Masjid.jpg"
  }
];

// Additional property images for other sections
export const propertyImages = {
  views: [
    {
      src: "/images/worship/marina da gama view 1.jpg",
      alt: "Beautiful marina view from Marina Da Gama",
      category: "view"
    },
    {
      src: "/images/worship/marina da gama view 2.jpg", 
      alt: "Panoramic view of Marina Da Gama canals",
      category: "view"
    },
    {
      src: "/images/worship/view from the house.jpg",
      alt: "Direct view from our waterfront house",
      category: "view"
    },
    {
      src: "/images/worship/good hope view1 .jpg",
      alt: "Good Hope views from the area",
      category: "view"
    },
    {
      src: "/images/worship/good hpe view 2.jpg",
      alt: "Stunning landscape views",
      category: "view"  
    }
  ],
  beach: [
    {
      src: "/images/worship/muizenberg beach .jpg",
      alt: "Famous Muizenberg Beach with colorful huts",
      category: "beach"
    }
  ]
};

// Interface for site categories
interface SiteCategory {
  title: string;
  subtitle: string;
  items: {
    icon: string;
    title: string;
    description: string;
    details?: string;
  }[];
  folderPaths?: string[];
  fallbackPhotos?: {
    src: string;
    alt: string;
    description?: string;
  }[];
  backgroundColor?: string;
  textColor?: string;
  special?: boolean;
  showMap?: boolean;
}

// Organized categories for the new layout
export const siteCategories: SiteCategory[] = [
  {
    title: "Your Waterfront Home",
    subtitle: "Discover your perfect Marina Da Gama escape with stunning views and modern comfort",
    items: [
      {
        icon: "🏡",
        title: "Waterfront Paradise",
        description: "Direct marina views with private terrace overlooking peaceful canals",
        details: "Wake up to stunning water views every morning"
      },
      {
        icon: "🛏️",
        title: "Luxury Bedrooms",
        description: "3 comfortable bedrooms with marina views and modern amenities",
        details: "Queen beds, en-suite bathrooms, air conditioning"
      },
      {
        icon: "🍽️",
        title: "Gourmet Kitchen",
        description: "Fully equipped modern kitchen with waterfront dining area",
        details: "Premium appliances, coffee machine, dishwasher"
      },
      {
        icon: "🌅",
        title: "Private Terrace",
        description: "Expansive outdoor space with direct canal access",
        details: "Perfect for morning coffee and evening sunsets"
      },
      {
        icon: "🅿️",
        title: "Secure Parking",
        description: "Private gated parking for 2 vehicles",
        details: "Safe and convenient on-site parking"
      },
      {
        icon: "📍",
        title: "Prime Location",
        description: "Strategic position in prestigious Marina Da Gama",
        details: "Walking distance to amenities and water activities"
      }
    ],
    folderPaths: ["/images/our-house", "/images/exterior"],
    fallbackPhotos: [
      { src: "/images/worship/marina da gama view 1.jpg", alt: "Stunning marina views", description: "The view that will take your breath away" },
      { src: "/images/worship/view from the house.jpg", alt: "Direct view from the house", description: "Your daily dose of tranquility" },
      { src: "/images/worship/marina da gama view 2.jpg", alt: "Marina Da Gama location", description: "Prime waterfront location" }
    ],
    backgroundColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    textColor: "text-blue-900",
    special: true,
    showMap: true
  },
  {
    title: "Water Sports & Beach Adventures",
    subtitle: "Endless aquatic fun right at your doorstep",
    items: [
      {
        icon: "🚣",
        title: "Free Kayaks Included",
        description: "Explore Marina Da Gama canals with complimentary kayaks",
        details: "At your doorstep • Equipment & safety gear provided"
      },
      {
        icon: "🏄‍♂️",
        title: "Surfing at Muizenberg",
        description: "World-famous beginner-friendly surf beach",
        details: "3 min drive • Perfect waves year-round"
      },
      {
        icon: "🏖️",
        title: "Colorful Beach Huts",
        description: "Iconic Victorian beach huts and sandy shores",
        details: "3 min drive • Perfect for Instagram shots"
      },
      {
        icon: "🌊",
        title: "Marina Views",
        description: "Direct access to pristine marina waters",
        details: "At your doorstep • Perfect for relaxation"
      }
    ],
    folderPaths: ["/images/worship"], // Using worship folder for marina and beach views
    fallbackPhotos: [
      { src: "/images/worship/muizenberg beach .jpg", alt: "Famous Muizenberg Beach with colorful huts", description: "World-famous surf beach just 3 minutes away" },
      { src: "/images/worship/marina da gama view 1.jpg", alt: "Marina Da Gama waterfront", description: "Your private waterfront paradise" },
      { src: "/images/worship/marina da gama view 2.jpg", alt: "Marina canals view", description: "Peaceful canal system perfect for kayaking" }
    ],
    backgroundColor: "bg-gradient-to-br from-cyan-50 to-blue-100",
    textColor: "text-cyan-900"
  },
  {
    title: "Nature & Wildlife Wonders",
    subtitle: "Discover Cape Town's breathtaking natural treasures",
    items: [
      {
        icon: "🐧",
        title: "African Penguin Colony",
        description: "Walk among 3,000 adorable African penguins at Boulders Beach",
        details: "15 min drive • Best time: early morning or late afternoon"
      },
      {
        icon: "🏔️",
        title: "Cape Point Adventure",
        description: "Dramatic cliffs and lighthouse at Africa's southwestern tip",
        details: "35 min drive • Full day experience with hiking trails"
      },
      {
        icon: "🚠",
        title: "Table Mountain Summit",
        description: "Iconic cable car ride to 360° panoramic views",
        details: "40 min drive • Book tickets online to avoid queues"
      },
      {
        icon: "🌅",
        title: "Scenic Viewpoints",
        description: "Breathtaking panoramic views of coast and mountains",
        details: "Multiple viewpoints within 30 minutes drive"
      }
    ],
    folderPaths: ["/images/worship"], // Using worship folder for scenic views
    fallbackPhotos: [
      { src: "/images/worship/good hope view1 .jpg", alt: "Cape Point dramatic cliffs and lighthouse", description: "Stand at the edge of the African continent" },
      { src: "/images/worship/good hpe view 2.jpg", alt: "Stunning Cape Point landscape views", description: "Where the Atlantic and Indian Oceans meet" },
      { src: "/images/worship/view from the house.jpg", alt: "Direct view from your Marina Da Gama home", description: "Wake up to this stunning view every morning" }
    ],
    backgroundColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    textColor: "text-green-900"
  },
  {
    title: "Local Discoveries",
    subtitle: "Charming nearby attractions just minutes away",
    items: [
      {
        icon: "🎨",
        title: "Kalk Bay Village",
        description: "Bohemian fishing village with galleries and cafes",
        details: "8 min drive • Artisan shops & fresh seafood"
      },
      {
        icon: "🍷",
        title: "Constantia Wineries",
        description: "World-class wine estates with mountain views",
        details: "20 min drive • Historic vineyards & tastings"
      },
      {
        icon: "🛣️",
        title: "Chapman's Peak Drive",
        description: "Spectacular coastal drive with ocean views",
        details: "25 min drive • One of the world's most scenic routes"
      }
    ],
    folderPaths: ["/images/worship"],
    fallbackPhotos: [
      { src: "/images/worship/marina da gama view 2.jpg", alt: "Local area attractions", description: "Discover charming local gems nearby" }
    ],
    backgroundColor: "bg-gradient-to-br from-purple-50 to-pink-100",
    textColor: "text-purple-900"
  },
  {
    title: "Worship Places Nearby",
    subtitle: "Find spiritual comfort during your stay",
    items: [
      {
        icon: "⛪",
        title: "St. James Catholic Church",
        description: "Beautiful Catholic church with ocean views",
        details: "8 min drive • Weekend & Sunday services"
      },
      {
        icon: "⛪",
        title: "Kalk Bay Protestant Church", 
        description: "Welcoming community in charming Kalk Bay",
        details: "12 min drive • Sunday services"
      },
      {
        icon: "✡️",
        title: "Muizenberg Synagogue",
        description: "Local synagogue serving the Jewish community",
        details: "5 min drive • Friday & Saturday services"
      },
      {
        icon: "🕌",
        title: "Habibia Soofie Saheb Masjid",
        description: "Beautiful mosque with community programs",
        details: "25 min drive • Daily prayers & Friday Jumu'ah"
      }
    ],
    folderPaths: ["/images/worship"],
    fallbackPhotos: [
      { src: "/images/worship/catholic church St james .jpg", alt: "St. James Catholic Church" },
      { src: "/images/worship/anglican church constantia .jpg", alt: "Anglican Church Constantia" },
      { src: "/images/worship/protestan church kalk bay .jpg", alt: "Protestant Church in Kalk Bay" },
      { src: "/images/worship/synagogue muizenberg.jpg", alt: "Muizenberg Synagogue" },
      { src: "/images/worship/habibia soofie Saheb Masjid.jpg", alt: "Habibia Soofie Saheb Masjid" }
    ],
    backgroundColor: "bg-amber-50",
    textColor: "text-amber-900"
  },
  {
    title: "Guest Favorites",
    subtitle: "What makes our Marina Da Gama home special",
    items: [
      {
        icon: "⭐",
        title: "5-Star Experience",
        description: "\"Absolutely perfect stay! Pure magic waking up to water views\"",
        details: "Perfect rating • 50+ reviews"
      },
      {
        icon: "🌅",
        title: "Stunning Views",
        description: "\"The sunrise from the terrace is breathtaking. Pure tranquility\"",
        details: "Daily sunrises • Private waterfront"
      },
      {
        icon: "🚣",
        title: "Perfect Location",
        description: "\"Used the kayaks daily! Already planning our return\"",
        details: "Free kayaks included • Marina access"
      }
    ],
    folderPaths: ["/images/worship"],
    fallbackPhotos: [
      { src: "/images/worship/view from the house.jpg", alt: "The breathtaking view guests wake up to", description: "This is what guests call 'pure magic' every morning" },
      { src: "/images/worship/marina da gama view 2.jpg", alt: "Marina views that create lasting memories", description: "Where unforgettable moments are made" }
    ],
    backgroundColor: "bg-gradient-to-br from-rose-50 to-orange-100",
    textColor: "text-rose-900"
  }
];