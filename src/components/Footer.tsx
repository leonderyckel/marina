import Link from 'next/link';
import { siteConfig } from '@/data/propertyData';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Marina Da Gama Airbnb</h3>
            <p className="text-gray-300 leading-relaxed">
              Discover an unforgettable stay in our waterfront house in Marina Da Gama, Muizenberg, 
              Cape Town. Enjoy the calm of nature and proximity to the most beautiful beaches.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#photos" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Photos
                </Link>
              </li>
              <li>
                <Link href="#activities" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="#worship" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Worship
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Muizenberg - Marina Da Gama</p>
              <p>Cape Town, South Africa</p>
              <a 
                href={siteConfig.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-2"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Marina Da Gama Airbnb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;