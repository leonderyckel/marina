# Setup Instructions - Marina Da Gama Airbnb Website

## 🚀 Final Setup Steps

### 1. Configure Your Airbnb URL

**IMPORTANT**: Replace the placeholder Airbnb URL with your actual listing URL.

1. Open `/src/data/propertyData.ts`
2. Find line ~181: `airbnbUrl: "https://www.airbnb.com/rooms/your-listing-id"`
3. Replace `your-listing-id` with your actual Airbnb listing ID

Example:
```typescript
export const siteConfig = {
  airbnbUrl: "https://www.airbnb.com/rooms/12345678", // Your actual listing
  // ... rest of config
};
```

### 2. Add Your House Photos

Your worship places photos are already added! Now add your house photos:

1. **Add house photos** to `/public/images/`
2. **Use these exact filenames** for automatic display:
   - `hero-marina.jpg` - Main hero image (aerial view)
   - `living-room.jpg` - Living room with marina view
   - `kitchen.jpg` - Modern equipped kitchen
   - `bedroom-main.jpg` - Main bedroom
   - `terrace.jpg` - Terrace with water view
   - `garden.jpg` - Private garden
   - `bathroom.jpg` - Modern bathroom

### 3. Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Final version with optimizations"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Deploy automatically

## ✨ Website Features

### Booking Optimization
- ✅ **Multiple CTA buttons** throughout the site
- ✅ **Floating booking banner** appears on scroll
- ✅ **Social proof** with ratings and guest counts
- ✅ **Urgency elements** (limited availability, viewer counts)
- ✅ **Special offers** display (weekly/monthly discounts)

### Visual Enhancements
- ✅ **Dynamic hero background** with your actual property photos
- ✅ **Auto-cycling images** (changes every 8 seconds)
- ✅ **Interactive image indicators** (clickable dots)
- ✅ **Photo galleries** with real property images
- ✅ **Worship places** with your actual photos
- ✅ **Interactive maps** and location info
- ✅ **Responsive design** for all devices
- ✅ **Professional animations** and hover effects

### Content Quality
- ✅ **Verified information** for all activities and distances
- ✅ **Enhanced testimonials** with verification badges
- ✅ **Detailed activity info** with best times and categories
- ✅ **Multi-faith worship directory** with photos

## 🎯 Conversion Elements

### Psychological Triggers
- **Social Proof**: "5.0 Rating • 50+ Happy Guests"
- **Urgency**: "28 people viewed today", "Limited availability"
- **Authority**: "Verified guests", "Local insider tips"
- **Benefits**: "Free Kayaks", "3min to Surf Beach"

### Strategic Placement
- **Hero Section**: Primary CTA with key selling points
- **Activities Section**: Secondary CTA with offers
- **Testimonials**: Strong final CTA with stats
- **Floating Banner**: Persistent availability reminder

## 📊 Performance Optimized

- **Next.js 15** with App Router for optimal performance
- **Image optimization** with next/image
- **SEO optimized** with complete metadata
- **Mobile-first** responsive design
- **Fast loading** with code splitting

## 🛠️ Customization

### To Update Content
Edit `/src/data/propertyData.ts`:
- Property details and amenities
- Activities and distances
- Testimonials and ratings
- Special offers and pricing
- Worship places information

### To Add More Photos
1. Add images to `/public/images/`
2. Update photo arrays in `propertyData.ts`
3. Follow naming conventions in `/public/images/README.md`

## 📞 Support

The website is now fully optimized for conversions and ready for production. All features are designed to encourage bookings while providing comprehensive information about your property and the surrounding area.

**Key Success Metrics to Track:**
- Click-through rate on "Book Now" buttons
- Time spent on site
- Mobile vs desktop conversion
- Most viewed photo categories

---

**🎉 Your Marina Da Gama Airbnb website is ready to welcome guests!**