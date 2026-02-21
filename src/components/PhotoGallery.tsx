'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { propertyImages } from '@/data/propertyData';

interface Photo {
  src: string;
  alt: string;
  category: string;
}

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Cette fonction sera utilisée pour charger automatiquement les photos depuis /public/images
  useEffect(() => {
    // Combine example photos with actual property images
    const examplePhotos: Photo[] = [
      { src: '/images/hero-marina.jpg', alt: 'Aerial view of Marina Da Gama', category: 'exterior' },
      { src: '/images/living-room.jpg', alt: 'Living room with marina view', category: 'interior' },
      { src: '/images/kitchen.jpg', alt: 'Modern equipped kitchen', category: 'interior' },
      { src: '/images/bedroom-main.jpg', alt: 'Main bedroom', category: 'interior' },
      { src: '/images/terrace.jpg', alt: 'Terrace with water view', category: 'exterior' },
      { src: '/images/garden.jpg', alt: 'Private garden', category: 'exterior' },
      { src: '/images/bathroom.jpg', alt: 'Modern bathroom', category: 'interior' },
      // Add real property view images
      ...propertyImages.views,
      ...propertyImages.beach
    ];
    setPhotos(examplePhotos);
  }, []);

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'view', label: 'Views' },
    { id: 'beach', label: 'Beach' }
  ];

  const openModal = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? filteredPhotos.length - 1 : selectedPhoto - 1);
    }
  };

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedPhoto !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedPhoto]);

  return (
    <section id="photos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our beautiful property through these images
          </p>
          
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium text-sm">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de visualisation */}
        {selectedPhoto !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevPhoto}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeftIcon className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRightIcon className="h-8 w-8" />
            </button>

            <div className="relative max-w-4xl max-h-full">
              <Image
                src={filteredPhotos[selectedPhoto].src}
                alt={filteredPhotos[selectedPhoto].alt}
                width={1200}
                height={900}
                className="max-h-[80vh] w-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="text-center">{filteredPhotos[selectedPhoto].alt}</p>
                <p className="text-center text-sm text-gray-300 mt-1">
                  {selectedPhoto + 1} / {filteredPhotos.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;