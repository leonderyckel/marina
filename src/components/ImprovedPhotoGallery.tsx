'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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

      {/* Zone photo principale */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        {photos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              className="absolute left-6 z-10 text-white hover:text-gray-300 transition-all duration-200 hover:scale-110 bg-black/30 hover:bg-black/50 rounded-full p-3"
            >
              <ChevronLeftIcon className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-6 z-10 text-white hover:text-gray-300 transition-all duration-200 hover:scale-110 bg-black/30 hover:bg-black/50 rounded-full p-3"
            >
              <ChevronRightIcon className="h-8 w-8" />
            </button>
          </>
        )}

        <div className="relative max-w-6xl max-h-full">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            width={1400}
            height={1000}
            className="max-h-[75vh] w-auto object-contain transition-opacity duration-300"
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
          />
        </div>
      </div>

      {/* Footer avec miniatures et infos */}
      <div className="bg-black/50 backdrop-blur-sm p-6">
        {/* Description de la photo */}
        <div className="text-center mb-4">
          <p className="text-white text-lg mb-2">{currentPhoto.description}</p>
          {currentPhoto.category && (
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-blue-200 text-sm mb-2">
              {currentPhoto.category}
            </div>
          )}
          <p className="text-gray-300 text-sm">
            Photo {selectedPhoto + 1} sur {photos.length}
          </p>
        </div>

        {/* Miniatures */}
        {photos.length > 1 && (
          <div className="flex justify-center gap-2 overflow-x-auto pb-2">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === selectedPhoto 
                    ? 'ring-2 ring-white scale-110' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImprovedPhotoGallery;