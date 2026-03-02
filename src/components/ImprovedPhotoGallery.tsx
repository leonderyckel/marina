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
        let organizedPhotos = data.photos;
        
        // Réorganiser les photos worship : photo 3 en première, première en dernière
        if (folder === 'worship' && organizedPhotos.length >= 3) {
          const firstPhoto = organizedPhotos[0];
          const thirdPhoto = organizedPhotos[2];
          organizedPhotos[0] = thirdPhoto;
          organizedPhotos[2] = firstPhoto;
          // Déplacer la première photo (maintenant en position 2) à la fin
          organizedPhotos.push(organizedPhotos.splice(2, 1)[0]);
        }
        
        setPhotos(organizedPhotos);
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

      {/* Zone défilement vertical des photos - Design amélioré */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {photos.map((photo, index) => (
            <div key={index} className="group">
              {/* Conteneur photo avec effets */}
              <div className="relative">
                {/* Numéro de photo en overlay */}
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {index + 1} / {photos.length}
                </div>
                
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full max-w-4xl mx-auto object-cover max-h-[80vh] transition-all duration-300 group-hover:scale-105"
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                  
                  {/* Overlay gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>
              
              {/* Indicateur de scroll pour la prochaine photo */}
              {index < photos.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex flex-col items-center text-white/60 animate-bounce">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Navigation et actions */}
        <div className="text-center mt-12 pb-8 space-y-4">
          {/* Retour en haut */}
          <button
            onClick={() => {
              const gallery = document.querySelector('.fixed.inset-0');
              if (gallery) {
                gallery.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm font-medium"
          >
            <span className="mr-2">↑</span>
            Retour en haut
          </button>
          
          {/* Bouton fermer alternatif */}
          <div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
            >
              Fermer la galerie ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedPhotoGallery;