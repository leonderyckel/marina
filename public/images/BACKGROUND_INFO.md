# Background Image Configuration

## Current Setup

The Hero section now uses a **single static background image**:

- **File**: `/public/images/worship/background.jpg`
- **Usage**: Main background for the hero section
- **Fallback**: Placeholder image if `background.jpg` fails to load

## To Change the Background

1. **Replace the image**: Add your new image as `background.jpg` in `/public/images/worship/`
2. **Recommended specs**:
   - **Format**: JPEG or WebP
   - **Resolution**: Minimum 1920x1080 (Full HD)
   - **Aspect ratio**: 16:9 or wider for best results
   - **File size**: Under 2MB for optimal loading

## Image Requirements

- **High quality**: This is the first thing visitors see
- **Good composition**: Content will be overlaid on top
- **Proper lighting**: Should work well with white text overlay
- **Represents property**: Should showcase Marina Da Gama or the house

## Technical Details

- Image is optimized automatically by Next.js
- 30% black overlay is applied for text readability
- Priority loading for immediate display
- Responsive scaling on all devices

---

**Current image path**: `/images/worship/background.jpg`