import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { photoDescriptions, guessPhotoCategory } from '@/data/photoDescriptions';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ folder: string }> }
) {
  try {
    const { folder } = await params;
    
    // Sécurité : seulement autoriser certains dossiers
    const allowedFolders = ['our-house', 'exterior', 'activities', 'worship', 'chambers'];
    if (!allowedFolders.includes(folder)) {
      return NextResponse.json({ error: 'Folder not allowed' }, { status: 403 });
    }

    const imagesDirectory = path.join(process.cwd(), 'public', 'images', folder);
    
    // Vérifier si le dossier existe
    if (!fs.existsSync(imagesDirectory)) {
      return NextResponse.json({ photos: [] });
    }

    // Lire tous les fichiers du dossier
    const files = fs.readdirSync(imagesDirectory);
    
    // Filtrer seulement les images (jpg, jpeg, png, webp)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const photos = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext) && !file.toLowerCase().includes('readme');
      })
      .map(file => {
        // Utiliser les descriptions personnalisées si disponibles, sinon deviner
        const photoInfo = photoDescriptions[file] || guessPhotoCategory(file);
        
        return {
          filename: file,
          src: `/images/${folder}/${file}`,
          alt: photoInfo.alt,
          description: photoInfo.description,
          category: photoInfo.category
        };
      })
      .sort((a, b) => {
        // Trier par catégorie puis par nom de fichier
        if (a.category !== b.category) {
          const categoryOrder = ['piscine', 'terrasse', 'vue', 'marina', 'salon', 'cuisine', 'chambre', 'salle_bain', 'plage', 'general'];
          return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
        }
        return a.filename.localeCompare(b.filename);
      });

    return NextResponse.json({ photos });
    
  } catch (error) {
    console.error('Error reading photos:', error);
    return NextResponse.json({ error: 'Failed to read photos' }, { status: 500 });
  }
}