import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Marina Da Gama Airbnb - Waterfront Stay in Muizenberg",
    template: "%s | Marina Da Gama Airbnb"
  },
  description: "Discover our charming house in peaceful Marina Da Gama, Muizenberg. Marina views, close to beach and water activities. Unforgettable stay in Cape Town, South Africa.",
  keywords: [
    "Airbnb",
    "Marina Da Gama", 
    "Muizenberg",
    "Cape Town",
    "South Africa",
    "vacation rental",
    "marina view",
    "beach",
    "surf",
    "kayak",
    "Table Mountain",
    "Cape Point",
    "worship places",
    "churches",
    "mosques",
    "synagogues"
  ],
  authors: [{ name: "Marina Da Gama Airbnb" }],
  creator: "Marina Da Gama Airbnb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marina-da-gama-airbnb.vercel.app",
    title: "Marina Da Gama Airbnb - Waterfront Stay in Muizenberg",
    description: "Peaceful waterfront stay in Muizenberg marina. Water views, close to surf beach, kayaks included. Discover Cape Town from our exceptional house.",
    siteName: "Marina Da Gama Airbnb",
    images: [
      {
        url: "/images/hero-marina.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of Marina Da Gama with our waterfront house",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Da Gama Airbnb - Waterfront Stay",
    description: "Peaceful waterfront stay in Muizenberg marina, Cape Town. Water views, beach nearby, water activities included.",
    images: ["/images/hero-marina.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://marina-da-gama-airbnb.vercel.app",
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
