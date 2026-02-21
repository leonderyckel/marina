'use client';

import { useState, useEffect } from 'react';
// Using standard img tag instead of Next.js Image
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Photo {
  src: string;
  alt: string;
  description: string;
}

interface SimplePhotoGalleryProps {
  folder: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const SimplePhotoGallery = ({ folder, title, isOpen, onClose }: SimplePhotoGalleryProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      loadPhotos();
    }
  }, [isOpen, folder]);

  const loadPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/photos/${folder}`);
      const data = await response.json();
      
      if (response.ok && data.photos && data.photos.length > 0) {
        setPhotos(data.photos);
      } else {
        setPhotos([]);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des photos:', error);
      setPhotos([]);
    }
    setLoading(false);
  };

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Gestion clavier
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
          <div className="animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full mb-4 mx-auto"></div>
          <p className="text-lg">Chargement des photos...</p>
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
          <div className="text-6xl mb-6">📷</div>
          <h3 className="text-2xl font-bold mb-4">Aucune photo disponible</h3>
          <p className="text-lg mb-4">
            Les photos de {title.toLowerCase()} seront bientôt ajoutées !
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
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
            <ChevronLeftIcon className="h-10 w-10" />
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110"
          >
            <ChevronRightIcon className="h-10 w-10" />
          </button>
        </>
      )}

      <div className="relative max-w-5xl max-h-full">
        <img
          src={photos[selectedPhoto].src}
          alt={photos[selectedPhoto].alt}
          className="max-h-[85vh] w-auto object-contain transition-all duration-300"
        />
        
        {/* Info photo */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm opacity-90 mb-2">{photos[selectedPhoto].description}</p>
          <p className="text-sm opacity-75">
            {selectedPhoto + 1} / {photos.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimplePhotoGallery;