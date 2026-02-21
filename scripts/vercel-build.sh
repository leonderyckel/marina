#!/bin/bash
set -e

echo "🔧 Configuration Git LFS pour Vercel..."

# Configuration Git LFS pour GitHub
git config lfs.https://github.com/leonderyckel/marina.git/info/lfs.access basic

# Pull des fichiers LFS
echo "📥 Téléchargement des images avec Git LFS..."
git lfs pull || echo "⚠️  Git LFS pull failed, continuing with build..."

# Vérifier si les images existent
echo "🔍 Vérification des images..."
if [ -d "public/images/our-house" ] && [ "$(ls -A public/images/our-house)" ]; then
    echo "✅ Images trouvées dans our-house"
else
    echo "❌ Aucune image trouvée dans our-house"
fi

# Build Next.js
echo "🚀 Building Next.js..."
npm run build