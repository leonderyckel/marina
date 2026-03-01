'use client';

import { useState, useEffect } from 'react';
// Removed Next.js Image import to use standard img tags
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Photo {
  src: string;
  alt: string;
  description: string;
  category?: string;
}

interface ImprovedPhotoGalleryProps {
  folder: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImprovedPhotoGallery = ({ folder, title, isOpen, onClose }: ImprovedPhotoGalleryProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      loadPhotos();
    } else {
      setSelectedPhoto(0); // Reset when closing
    }
  }, [isOpen, folder]);

  useEffect(() => {
    setImageLoading(true);
  }, [selectedPhoto]);

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
    if (photos.length > 0) {
      setSelectedPhoto((prev) => (prev + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (photos.length > 0) {
      setSelectedPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  const goToPhoto = (index: number) => {
    setSelectedPhoto(index);
  };

  // Gestion clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isOpen && photos.length > 0) {
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
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-xl">Chargement des photos...</p>
        </div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        
        <div className="text-white text-center max-w-md">
          <div className="text-8xl mb-6">📷</div>
          <h3 className="text-3xl font-bold mb-4">Photos à venir</h3>
          <p className="text-lg">
            Les photos de <span className="font-semibold">{title.toLowerCase()}</span> seront bientôt disponibles !
          </p>
        </div>
      </div>
    );
  }

  const currentPhoto = photos[selectedPhoto];

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
      {/* Header avec titre et bouton fermer */}
      <div className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-sm">
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-all duration-200 hover:scale-110"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>

      {/* Zone défilement vertical des photos */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {photos.map((photo, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="relative mb-4">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl object-contain max-h-[70vh]"
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>
              
              {/* Description et infos */}
              <div className="text-white space-y-2">
                <p className="text-lg font-medium">{photo.description}</p>
                {photo.category && (
                  <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-blue-200 text-sm">
                    {photo.category}
                  </div>
                )}
                <p className="text-gray-400 text-sm">
                  Photo {index + 1} sur {photos.length}
                </p>
              </div>
              
              {/* Séparateur entre photos */}
              {index < photos.length - 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bouton pour remonter en haut */}
        <div className="text-center mt-8 pb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <span className="mr-2">↑</span>
            Retour en haut
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImprovedPhotoGallery;