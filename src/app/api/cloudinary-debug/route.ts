import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'df42ozttq',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('resource_type:image')
      .sort_by('created_at', 'desc')
      .max_results(20)
      .execute();

    return NextResponse.json({
      status: 'success',
      total_found: result.total_count,
      sample_images: result.resources.slice(0, 20).map(img => ({
        public_id: img.public_id,
        secure_url: img.secure_url,
        filename: img.public_id.split('/').pop(),
      })),
      categories: {
        exterior: result.resources.filter(img => 
          img.public_id.toLowerCase().includes('dsc_') || 
          img.public_id.toLowerCase().includes('marina') || 
          img.public_id.toLowerCase().includes('view')
        ).length,
        worship: result.resources.filter(img => 
          img.public_id.toLowerCase().includes('church') || 
          img.public_id.toLowerCase().includes('protestant') || 
          img.public_id.toLowerCase().includes('catholic')
        ).length,
        chambers: result.resources.filter(img => 
          img.public_id.toLowerCase().includes('chambre')
        ).length,
        activities: result.resources.filter(img => 
          img.public_id.toLowerCase().includes('beach') || 
          img.public_id.toLowerCase().includes('muizenberg')
        ).length,
      }
    });
    
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}