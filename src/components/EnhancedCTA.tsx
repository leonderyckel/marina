import { siteConfig } from '@/data/propertyData';

interface EnhancedCTAProps {
  variant?: 'primary' | 'secondary' | 'urgent';
  size?: 'sm' | 'md' | 'lg';
  showOffers?: boolean;
  className?: string;
}

const EnhancedCTA = ({ 
  variant = 'primary', 
  size = 'md', 
  showOffers = false, 
  className = '' 
}: EnhancedCTAProps) => {
  const baseClasses = "font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
    urgent: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white animate-pulse"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <div className={`text-center ${className}`}>
      {showOffers && siteConfig.specialOffers.enabled && (
        <div className="mb-4">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
            <span className="mr-2">💰</span>
            Special Offer: Save {siteConfig.specialOffers.weeklyDiscount}% on weekly stays!
          </div>
        </div>
      )}
      
      <a
        href={siteConfig.airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      >
        <span className="mr-2">🏖️</span>
        Book Your Marina Paradise
        <span className="ml-2">→</span>
      </a>
      
      {variant === 'urgent' && (
        <div className="mt-2 text-sm text-orange-600">
          ⚡ Limited availability - Secure your dates today!
        </div>
      )}
    </div>
  );
};

export default EnhancedCTA;