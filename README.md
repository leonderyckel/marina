# Marina Da Gama Airbnb - Next.js Website

Modern and responsive website to promote an Airbnb located in Marina Da Gama, Muizenberg, Cape Town (South Africa).

## 🏖️ Overview

This site showcases a beautiful marina-front property featuring:
- House presentation and amenities
- Interactive responsive photo gallery
- Activities and points of interest section
- Interactive location map
- Places of worship directory
- Guest testimonials
- Ocean-inspired design with animations

## 🚀 Technologies Used

- **Next.js 15** (App Router)
- **TypeScript** for code robustness
- **Tailwind CSS** for styling
- **Heroicons** for icons
- **Next/Image** for image optimization
- **React Hooks** for interactivity

## 📸 How to Add Photos

1. **Place your images** in the `/public/images/` folder
2. **Recommended formats**: JPEG or WebP, high resolution
3. **Naming**: Use descriptive names (e.g., `living-room-sunset.jpg`)

4. **Update the code**:
   ```typescript
   // In src/components/PhotoGallery.tsx
   const examplePhotos: Photo[] = [
     { src: '/images/your-new-image.jpg', alt: 'Description', category: 'interior' },
     // ... other images
   ];
   ```

5. **Available categories**:
   - `interior` - Interior photos
   - `exterior` - Exterior photos
   - `view` - Views and landscapes

## 🏛️ Adding Worship Places Photos

1. **Place worship images** in `/public/images/worship/`
2. **Follow naming convention** from `/public/images/worship/README.md`
3. **Update WorshipPlaces component** to display them
4. **Be respectful** when photographing religious buildings

## 🛠️ Installation and Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be accessible at `http://localhost:3000`

## 🚀 Deployment on Vercel

### Automatic method (recommended)
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Connect with GitHub
   - Click "New Project"
   - Select the `marina_airbnb` repository
   - Click "Deploy"

### Vercel Configuration
- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `npm run build` (automatic)
- **Output Directory**: `.next` (automatic)

## 🎯 Customization

### Modify Content
Edit `/src/data/propertyData.ts` to change:
- Property title and description
- Amenities and features
- Nearby activities
- Guest testimonials
- Places of worship information

### Add New Sections
Create new components in `/src/components/` and import them in `/src/app/page.tsx`

## 🏛️ Worship Places Features

The site includes a comprehensive worship places section with:
- **Multi-faith directory** (Christian, Islamic, Jewish, Hindu, Buddhist)
- **Detailed information** for each place (address, services, contact)
- **Organized by religion** for easy browsing
- **Respectful presentation** of all faiths
- **Practical visitor information**

---

**Created with ❤️ for Marina Da Gama Airbnb**