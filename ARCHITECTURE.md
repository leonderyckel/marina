# Architecture du Site Marina Da Gama Airbnb

## 📁 Structure complète du projet

```
marina_airbnb/
├── public/
│   └── images/
│       └── README.md           # Guide pour ajouter des images
├── src/
│   ├── app/
│   │   ├── globals.css         # Styles CSS et animations personnalisées
│   │   ├── layout.tsx          # Layout principal avec SEO optimisé
│   │   └── page.tsx            # Page d'accueil assemblant tous les composants
│   ├── components/
│   │   ├── Header.tsx          # Navigation responsive avec menu mobile
│   │   ├── Footer.tsx          # Pied de page avec liens et informations
│   │   ├── Layout.tsx          # Wrapper layout pour structure de page
│   │   ├── Hero.tsx            # Section hero avec image de fond
│   │   ├── Features.tsx        # Caractéristiques et équipements
│   │   ├── PhotoGallery.tsx    # Galerie photos avec filtres et modal
│   │   ├── Activities.tsx      # Activités et points d'intérêt locaux
│   │   ├── Location.tsx        # Carte interactive et informations de localisation
│   │   ├── Testimonials.tsx    # Témoignages clients
│   │   └── PlaceholderImage.tsx # Images de remplacement automatiques
│   └── data/
│       └── propertyData.ts     # Données centralisées de la propriété
├── .env.example                # Variables d'environnement d'exemple
├── vercel.json                 # Configuration de déploiement Vercel
├── README.md                   # Documentation complète
├── ARCHITECTURE.md             # Ce fichier
├── package.json                # Dépendances et scripts
├── tailwind.config.js          # Configuration Tailwind CSS
├── tsconfig.json               # Configuration TypeScript
└── next.config.js              # Configuration Next.js
```

## 🔧 Technologies et dépendances

### Framework principal
- **Next.js 15** (App Router) - Framework React full-stack
- **TypeScript** - Typage statique pour la robustesse du code
- **React 18** - Bibliothèque d'interface utilisateur

### Styling et UI
- **Tailwind CSS** - Framework CSS utility-first
- **Heroicons** - Icônes SVG optimisées
- **CSS Animations** - Animations personnalisées pour l'interactivité

### Optimisations
- **next/image** - Optimisation automatique des images
- **next/font** - Optimisation des polices (Inter)
- **App Router** - Routing et organisation moderne de Next.js

## 🎨 Design System

### Couleurs principales
- **Bleu océan** : #2563eb (primary)
- **Cyan** : #06b6d4 (accents)
- **Gris neutre** : #6b7280 (texte)
- **Blanc** : #ffffff (arrière-plan)

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Tailles** : text-sm à text-6xl (Tailwind scale)
- **Poids** : font-medium à font-bold

### Responsive breakpoints
- **Mobile** : < 640px
- **Tablette** : 640px - 1024px
- **Desktop** : > 1024px

## 🔄 Flux de données

### Structure des données
Toutes les données sont centralisées dans `/src/data/propertyData.ts` :

```typescript
export const propertyData = {
  title: string,
  subtitle: string,
  description: string,
  features: Array<{icon, title, description}>,
  amenities: string[],
  location: {coordinates, address}
}

export const activities = Array<{title, description, icon, distance}>
export const testimonials = Array<{name, country, text, rating}>
```

### Gestion des images
- **Emplacement** : `/public/images/`
- **Optimisation** : Automatique avec next/image
- **Fallback** : PlaceholderImage en cas d'erreur
- **Formats** : JPEG, WebP recommandés

## 📱 Composants et fonctionnalités

### Header.tsx
- Navigation responsive
- Menu hamburger mobile
- Smooth scroll vers les sections
- Bouton CTA "Réserver sur Airbnb"

### PhotoGallery.tsx
- Filtres par catégorie (intérieur, extérieur, vues)
- Modal plein écran avec navigation
- Support clavier (ESC, arrows)
- Lazy loading automatique

### Location.tsx
- Carte Google Maps intégrée
- Points d'intérêt avec distances
- Informations de transport
- Liens vers applications de cartes

### Responsive Features
- **Mobile-first** design
- **Touch-friendly** interactions
- **Adaptive** layouts pour tous écrans

## ⚡ Performance

### Optimisations automatiques
- **Code splitting** par page/composant
- **Image optimization** avec next/image
- **Font optimization** avec next/font
- **Static generation** des pages

### Métriques cibles
- **Performance** : 90+ (Lighthouse)
- **Accessibilité** : 95+ (WCAG compliant)
- **SEO** : 100 (métadonnées complètes)
- **Best Practices** : 100

## 🛡️ SEO et métadonnées

### Configuration dans layout.tsx
- **Title templates** dynamiques
- **Open Graph** pour réseaux sociaux
- **Twitter Cards** optimisées
- **Structured data** ready (JSON-LD)

### URLs et routing
- **Clean URLs** avec App Router
- **Canonical URLs** configurées
- **Sitemap** automatique
- **Robots.txt** optimisé

## 🚀 Déploiement

### Vercel (recommandé)
- **Auto-deploy** depuis GitHub
- **Preview** automatiques des PR
- **Analytics** intégrées
- **Edge Functions** supportées

### Configuration vercel.json
- **Headers** de sécurité
- **Cache** optimisé pour images
- **Redirects** et rewrites
- **Regions** configurables

## 🔧 Maintenance

### Mise à jour du contenu
1. **Textes** : Modifier `/src/data/propertyData.ts`
2. **Images** : Ajouter dans `/public/images/` et mettre à jour PhotoGallery.tsx
3. **Styles** : Modifier `/src/app/globals.css` ou composants

### Ajout de fonctionnalités
1. **Nouveaux composants** : Créer dans `/src/components/`
2. **Nouvelles pages** : Utiliser App Router dans `/src/app/`
3. **API** : Ajouter routes dans `/src/app/api/`

### Monitoring
- **Vercel Analytics** pour performance
- **Error tracking** automatique
- **Build logs** détaillés
- **Preview deployments** pour tests

## 🧪 Tests et qualité

### Outils disponibles
- **TypeScript** - Vérification de types
- **ESLint** - Qualité du code
- **Prettier** - Formatage automatique
- **Next.js** - Optimisations intégrées

### Scripts package.json
```bash
npm run dev      # Développement
npm run build    # Production build
npm run start    # Serveur production
npm run lint     # Vérification code
```

---

**Architecture conçue pour la scalabilité et la performance**