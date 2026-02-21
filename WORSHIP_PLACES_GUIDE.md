# Worship Places Guide - Marina Da Gama Airbnb

## 🏛️ Overview

This guide details the worship places feature added to the Marina Da Gama Airbnb website, providing guests with information about nearby religious communities.

## ✨ Features Added

### 1. Multi-Faith Directory
The worship section includes:
- **Christian Churches** (Anglican, Methodist, Baptist, Catholic)
- **Islamic Mosques** (Historic Claremont Main Road Mosque)
- **Jewish Synagogues** (Progressive congregation)
- **Hindu Temples** (Traditional temple)
- **Buddhist Centers** (Retreat and meditation)

### 2. Detailed Information
Each place of worship includes:
- **Name and denomination**
- **Full address**
- **Distance from property**
- **Service times**
- **Contact phone number**
- **Brief description**
- **Religious icon**

### 3. Organized Display
- **Grouped by religion** for easy browsing
- **Color-coded cards** with religious symbols
- **Responsive design** for all devices
- **Professional layout** with respect for all faiths

## 📍 Locations Included

### Christian Churches
1. **St. James Anglican Church** (8 min drive)
   - Historic church with stained glass windows
   - Sunday services: 8:00 AM & 10:30 AM

2. **Kalk Bay Methodist Church** (12 min drive)
   - Welcoming community in Kalk Bay
   - Sunday service: 9:30 AM

3. **Muizenberg Baptist Church** (6 min drive)
   - Local Baptist congregation
   - Sunday services: 9:00 AM & 6:00 PM

4. **Sacred Heart Catholic Church** (15 min drive)
   - Regular masses and community programs
   - Services: Sat 6:00 PM, Sun 8:00 AM & 10:00 AM

### Islamic
5. **Claremont Main Road Mosque** (20 min drive)
   - Historic mosque since 1854
   - Daily prayers, Jumu'ah Friday 1:00 PM

### Jewish
6. **Rondebosch United Hebrew Congregation** (25 min drive)
   - Progressive Jewish community
   - Services: Fri 7:30 PM, Sat 9:30 AM

### Hindu
7. **Cape Town Hindu Temple** (30 min drive)
   - Traditional temple serving various denominations
   - Daily prayers and festival ceremonies

### Buddhist
8. **Buddhist Retreat Centre** (Weekend retreats)
   - Meditation retreats and teachings
   - Weekend programs available

## 📸 Adding Photos

### Directory Structure
Photos should be placed in `/public/images/worship/` with these names:
- `st-james-anglican.jpg`
- `kalk-bay-methodist.jpg`
- `muizenberg-baptist.jpg`
- `sacred-heart-catholic.jpg`
- `claremont-mosque.jpg`
- `rondebosch-synagogue.jpg`
- `cape-town-hindu-temple.jpg`
- `buddhist-retreat.jpg`

### Photography Guidelines
- **Exterior shots preferred** to respect privacy
- **High resolution** (min. 800x600px)
- **Respectful composition** focusing on architecture
- **Avoid photographing during services** unless permitted
- **Get permission** from religious authorities when possible

### Code Integration
To display photos, update the `WorshipPlaces.tsx` component:

```typescript
// Add image display to each place card
<div className="mb-4">
  <Image
    src={`/images/worship/${place.name.toLowerCase().replace(/ /g, '-')}.jpg`}
    alt={place.name}
    width={300}
    height={200}
    className="rounded-lg object-cover w-full"
  />
</div>
```

## 🗂️ File Structure

```
src/
├── components/
│   └── WorshipPlaces.tsx        # Main worship places component
├── data/
│   └── propertyData.ts          # Worship places data array
public/
└── images/
    └── worship/
        ├── README.md            # Photo guidelines
        ├── st-james-anglican.jpg
        ├── kalk-bay-methodist.jpg
        └── [other worship photos]
```

## 🎯 Navigation Integration

The worship section is integrated into:
- **Header navigation** with "Worship" link
- **Footer navigation** with worship link
- **Page flow** between Activities and Location sections
- **Smooth scroll** navigation to #worship anchor

## 🔄 Content Updates

### Adding New Places
To add new worship places, update `/src/data/propertyData.ts`:

```typescript
export const worshipPlaces = [
  // ... existing places
  {
    name: "New Place Name",
    type: "Religion - Denomination",
    icon: "🏛️", // Choose appropriate religious symbol
    address: "Full Address",
    distance: "X min drive",
    description: "Brief description of the place",
    services: "Service times",
    contact: "+27 XX XXX XXXX"
  }
];
```

### Modifying Existing Information
Edit the same file to update:
- **Service times** (may change seasonally)
- **Contact information** (verify periodically)
- **Descriptions** (keep respectful and accurate)
- **Distances** (recalculate if needed)

## 🤝 Community Respect

### Guidelines for Guests
The worship section includes visitor information:
- **Call ahead** to confirm service times
- **Dress modestly** and respectfully
- **Be aware** that some places may require head coverings
- **Respect** local customs and traditions

### Host Responsibilities
As the host, you can:
- **Verify information** periodically with religious communities
- **Update contact details** if they change
- **Add new places** that guests discover
- **Provide directions** if guests need assistance

## 🔧 Technical Implementation

### Component Features
- **Responsive grid layout** (1-2-3 columns)
- **Grouped by religion** for organization
- **Interactive cards** with hover effects
- **Phone number links** for easy calling
- **Professional styling** with religious icons

### SEO Optimization
Keywords added to metadata:
- "worship places"
- "churches"
- "mosques" 
- "synagogues"
- Religious community terms

### Accessibility
- **High contrast** colors for readability
- **Clear typography** for important information
- **Structured headings** for screen readers
- **Keyboard navigation** support

---

This worship places feature enhances the guest experience by connecting them with local faith communities during their stay in Cape Town.