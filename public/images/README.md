# Images for Marina Da Gama Airbnb

This folder contains all website images.

## Recommended Structure:

### Main Images:
- `hero-marina.jpg` - Main/hero image for homepage (aerial view of Marina Da Gama)

### Interior:
- `living-room.jpg` - Living room with marina view
- `kitchen.jpg` - Modern equipped kitchen
- `bedroom-main.jpg` - Main bedroom
- `bedroom-2.jpg` - Second bedroom
- `bedroom-3.jpg` - Third bedroom
- `bathroom.jpg` - Modern bathroom
- `bathroom-2.jpg` - Second bathroom

### Exterior:
- `terrace.jpg` - Terrace with water view
- `garden.jpg` - Private garden
- `parking.jpg` - Private parking
- `exterior-front.jpg` - Front view of house
- `exterior-back.jpg` - Back view with marina

### Views and Environment:
- `marina-view.jpg` - Direct marina view
- `canal-view.jpg` - Canal view
- `sunset-view.jpg` - Sunset from terrace
- `muizenberg-beach.jpg` - Muizenberg Beach
- `surroundings.jpg` - Natural environment

## Recommended Format:
- Format: JPEG or WebP
- Quality: High resolution (min. 1920x1080 for main images)
- Optimization: Compressed for web
- Ratio: 4:3 for gallery, 16:9 for hero

## How to Add New Photos:

1. **Add your images** to this folder `/public/images/`
2. **Naming**: Use descriptive English names (e.g., `living-room-sunset.jpg`)
3. **Code Update**: 
   - Open `/src/components/PhotoGallery.tsx`
   - Add your new images to the `examplePhotos` array
   - Format: `{ src: '/images/your-image.jpg', alt: 'Description', category: 'interior|exterior|view' }`

Example:
```typescript
{ src: '/images/new-photo.jpg', alt: 'Photo description', category: 'interior' }
```

4. **Available Categories**:
   - `interior` - Interior photos
   - `exterior` - Exterior photos  
   - `view` - Views and landscapes

5. **Restart the development server** to see your new images.