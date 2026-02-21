'use client';

// Cette fonction charge automatiquement toutes les photos d'un dossier
export const loadPhotosFromFolder = async (folderPath: string) => {
  const photos: { src: string; alt: string; description: string }[] = [];
  
  // Extensions d'images supportées
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  
  try {
    // Essayer de charger chaque image potentielle
    // On ne peut pas lister les fichiers côté client, donc on utilise une approche différente
    // Nous allons retourner les chemins et laisser Next.js gérer les images manquantes
    
    // Pour l'instant, retournons un tableau vide et gérons cela différemment
    return photos;
  } catch (error) {
    console.log('Pas de photos trouvées dans', folderPath);
    return photos;
  }
};

// Fonction pour générer des descriptions automatiques basées sur le nom du fichier
export const generatePhotoDescription = (filename: string, folderType: string) => {
  const cleanName = filename.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '').replace(/[-_]/g, ' ');
  
  const descriptions: { [key: string]: string } = {
    'our-house': `Beautiful interior view of ${cleanName}`,
    'exterior': `Stunning exterior view of ${cleanName}`,
    'activities': `Exciting ${cleanName} activity`,
    'worship': `${cleanName} place of worship`
  };
  
  return descriptions[folderType] || `Beautiful ${cleanName} at Marina Da Gama`;
};