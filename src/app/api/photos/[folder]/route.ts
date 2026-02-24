import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { photoDescriptions, guessPhotoCategory } from '@/data/photoDescriptions';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'df42ozttq',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

    // Chercher toutes les images sur Cloudinary et filtrer
    let allImages: any[] = [];

    try {
      const result = await cloudinary.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .max_results(500)
        .execute();
      
      allImages = result.resources.filter((image: any) => {
        const publicId = image.public_id.toLowerCase();
        const filename = image.public_id.split('/').pop()?.toLowerCase() || '';
        
        switch (folder) {
          case 'exterior':
            return publicId.includes('dsc_') || publicId.includes('marina') || publicId.includes('view') || filename.startsWith('dsc_');
          case 'our-house':
            return publicId.includes('house') || publicId.includes('chambre') || filename.includes('chambre');
          case 'worship':
            return publicId.includes('church') || publicId.includes('protestant') || publicId.includes('catholic') || publicId.includes('anglican');
          case 'activities':
            return publicId.includes('beach') || publicId.includes('muizenberg') || publicId.includes('hope');
          case 'chambers':
            return publicId.includes('chambre') || publicId.includes('bedroom');
          default:
            return false;
        }
      });
    } catch (searchError) {
      console.error('Cloudinary search error:', searchError);
    }

    const uniqueImages = Array.from(new Map(allImages.map(img => [img.public_id, img])).values());

    const photos = uniqueImages
      .filter((image: any) => image.resource_type === 'image')
      .map((image: any) => {
        const originalName = image.public_id.split('/').pop() + '.jpg';
        const photoInfo = photoDescriptions[originalName] || guessPhotoCategory(originalName);
        
        return {
          filename: originalName,
          src: image.secure_url,
          alt: photoInfo.alt,
          description: photoInfo.description,
          category: photoInfo.category,
          width: image.width,
          height: image.height,
        };
      })
      .sort((a, b) => {
        if (a.category !== b.category) {
          const categoryOrder = ['piscine', 'terrasse', 'vue', 'marina', 'salon', 'cuisine', 'chambre', 'salle_bain', 'plage', 'general'];
          return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
        }
        return a.filename.localeCompare(b.filename);
      });

    return NextResponse.json({ photos });
    
  } catch (error) {
    console.error('Error fetching photos from Cloudinary:', error);
    return NextResponse.json({ error: 'Failed to fetch photos from Cloudinary' }, { status: 500 });
  }
}