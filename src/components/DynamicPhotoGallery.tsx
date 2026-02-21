'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface DynamicPhoto {
  src: string;
  alt: string;
  description?: string;
  exists?: boolean;
}

interface DynamicPhotoGalleryProps {
  folderPath: string;
  folderType: string;
  isOpen: boolean;
  onClose: () => void;
}

const DynamicPhotoGallery = ({ folderPath, folderType, isOpen, onClose }: DynamicPhotoGalleryProps) => {
  const [photos, setPhotos] = useState<DynamicPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (isOpen) {
      loadPhotosFromFolder();
    }
  }, [isOpen, folderPath]);

  const loadPhotosFromFolder = async () => {
    setLoading(true);
    
    try {
      // Extraire le nom du dossier depuis le folderPath
      const folderName = folderPath.split('/').pop() || '';
      
      // Appeler l'API pour récupérer toutes les photos du dossier
      const response = await fetch(`/api/photos/${folderName}`);
      const data = await response.json();
      
      if (response.ok && data.photos) {
        const foundPhotos: DynamicPhoto[] = data.photos.map((photo: any) => ({
          src: photo.src,
          alt: photo.alt,
          description: photo.description,
          exists: true
        }));
        
        setPhotos(foundPhotos);
      } else {
        setPhotos([]);
      }
    } catch (error) {
      console.error('Error loading photos:', error);
      setPhotos([]);
    }
    
    setLoading(false);
  };

  const checkImageExists = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = document.createElement('img');
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  };

  const generateAlt = (filename: string, folderType: string) => {
    const cleanName = filename.replace(/[-_]/g, ' ');
    return `${folderType} - ${cleanName}`;
  };

  const generateDescription = (filename: string, folderType: string) => {
    // Descriptions spécifiques basées sur le nom du fichier
    const specificDescriptions: { [key: string]: string } = {
      'DSC_1833': 'Salon spacieux avec vue sur la marina',
      'DSC_1836': 'Cuisine moderne entièrement équipée',
      'DSC_1840': 'Chambre principale avec vue sur l\'eau',
      'DSC_1841': 'Salle de bain moderne et lumineuse',
      'DSC_1844': 'Terrasse privée avec accès direct à la marina',
      'test-photo': 'Photo d\'ambiance de votre futur séjour',
      'marina da gama view 1': 'Vue panoramique sur Marina Da Gama',
      'marina da gama view 2': 'Les canaux paisibles de Marina Da Gama',
      'view from the house': 'Vue directe depuis votre maison',
      'muizenberg beach': 'Plage de Muizenberg à 3 minutes',
      'catholic church St james': 'Église catholique Saint-James',
      'anglican church constantia': 'Église anglicane de Constantia',
      'protestan church kalk bay': 'Église protestante de Kalk Bay',
      'synagogue muizenberg': 'Synagogue de Muizenberg',
      'habibia soofie Saheb Masjid': 'Mosquée Habibia Soofie Saheb',
      'good hope view1': 'Vue spectaculaire sur Good Hope',
      'good hpe view 2': 'Paysage du Cap de Bonne-Espérance'
    };

    const filenameKey = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    if (specificDescriptions[filenameKey]) {
      return specificDescriptions[filenameKey];
    }

    const descriptions: { [key: string]: string } = {
      'our-house': 'Intérieur magnifique de votre maison Marina Da Gama',
      'exterior': 'Espaces extérieurs et vue sur la marina',
      'activities': 'Sports nautiques et activités passionnantes',
      'worship': 'Lieux de culte et spiritualité locaux'
    };
    
    return descriptions[folderType] || 'Belle vue à Marina Da Gama';
  };

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, photos.length]);

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mb-4 mx-auto"></div>
          <p>Chargement des photos...</p>
        </div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        
        <div className="text-white text-center max-w-md">
          <div className="text-6xl mb-6">📸</div>
          <h3 className="text-2xl font-bold mb-4">Aucune photo trouvée</h3>
          <p className="text-lg mb-4">
            Ajoutez des photos dans le dossier :<br/>
            <code className="bg-white/20 px-2 py-1 rounded text-sm">{folderPath}</code>
          </p>
          <p className="text-sm text-gray-300">
            Formats supportés : JPG, PNG, WebP<br/>
            Tout nom de fichier fonctionne !
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>
      
      {photos.length > 1 && (
        <>
          <button
            onClick={prevPhoto}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </>
      )}

      <div className="relative max-w-4xl max-h-full">
        <Image
          src={photos[selectedPhoto].src}
          alt={photos[selectedPhoto].alt}
          width={1200}
          height={900}
          className="max-h-[80vh] w-auto object-contain transition-all duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
          <p className="text-center font-medium">{photos[selectedPhoto].alt}</p>
          {photos[selectedPhoto].description && (
            <p className="text-center text-sm text-gray-300 mt-1">
              {photos[selectedPhoto].description}
            </p>
          )}
          <p className="text-center text-sm text-gray-300 mt-1">
            {selectedPhoto + 1} / {photos.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicPhotoGallery;