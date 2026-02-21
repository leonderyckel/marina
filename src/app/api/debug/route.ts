import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'images');
    
    // Vérifier si le dossier public/images existe
    const publicImagesExists = fs.existsSync(imagesDirectory);
    
    // Lister tous les dossiers et fichiers
    let folders: { [key: string]: string[] } = {};
    let totalFiles = 0;
    
    if (publicImagesExists) {
      const mainFolders = fs.readdirSync(imagesDirectory);
      
      for (const folder of mainFolders) {
        const folderPath = path.join(imagesDirectory, folder);
        if (fs.statSync(folderPath).isDirectory()) {
          const files = fs.readdirSync(folderPath).filter(file => 
            file.toLowerCase().endsWith('.jpg') || 
            file.toLowerCase().endsWith('.jpeg') || 
            file.toLowerCase().endsWith('.png')
          );
          folders[folder] = files;
          totalFiles += files.length;
        }
      }
    }
    
    return NextResponse.json({
      debug: {
        cwd: process.cwd(),
        publicImagesExists,
        totalImageFiles: totalFiles,
        folders,
        environment: process.env.NODE_ENV,
        vercelEnv: process.env.VERCEL_ENV || 'local'
      }
    });
    
  } catch (error) {
    return NextResponse.json({ 
      error: 'Debug failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}