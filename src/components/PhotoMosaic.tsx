'use client';

import { useState, useEffect } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

interface Photo {
  src: string;
  alt: string;
  description: string;
  category?: string;
}

interface PhotoMosaicProps {
  folder: string;
  title: string;
  onViewGallery: () => void;
}

const PhotoMosaic = ({ folder, title, onViewGallery }: PhotoMosaicProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPhotos();
  }, [folder]);

  const loadPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/photos/${folder}`);
      const data = await response.json();
      
      if (response.ok && data.photos && data.photos.length > 0) {
        setPhotos(data.photos.slice(0, 6)); // Limiter à 6 photos pour la mosaïque
      } else {
        setPhotos([]);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des photos:', error);
      setPhotos([]);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="relative w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="relative w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📷</div>
          <p>Photos à venir</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Mosaïque de photos */}
      <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden shadow-lg">
        {/* Photo principale (2x2) */}
        <div className="col-span-2 row-span-2 relative group">
          <img
            src={photos[0]?.src}
            alt={photos[0]?.alt}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            style={{ aspectRatio: '1' }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        </div>

        {/* Photos secondaires */}
        {photos.slice(1, 5).map((photo, index) => (
          <div key={index} className="relative group">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              style={{ aspectRatio: '1' }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Overlay avec compteur et bouton */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer group"
           onClick={onViewGallery}>
        <div className="text-center text-white transform scale-75 group-hover:scale-100 transition-all duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 mx-auto w-fit">
            <PlayIcon className="h-8 w-8" />
          </div>
          <p className="font-bold text-xl mb-2">Voir toutes les photos</p>
          <p className="text-sm opacity-90">
            {photos.length} photo{photos.length > 1 ? 's' : ''} • {title}
          </p>
        </div>
      </div>

      {/* Indicateur de photos supplémentaires */}
      {photos.length > 4 && (
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          +{photos.length - 4} photos
        </div>
      )}
    </div>
  );
};

export default PhotoMosaic;