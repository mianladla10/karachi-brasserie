import React, { useState, useEffect, useMemo } from 'react';

interface FoodImageProps {
  src?: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  category?: string;
  loading?: 'eager' | 'lazy';
}

// Map dish/image keywords to direct public images in /public/images/
const LOCAL_PUBLIC_MAP: Record<string, string> = {
  parmesan: '/images/parmesan_chicken.jpg',
  fajita: '/images/fajita_pizza.jpg',
  pizza: '/images/fajita_pizza.jpg',
  sandwich: '/images/chicken_sandwich.jpg',
  focaccia: '/images/chicken_sandwich.jpg',
  brownie: '/images/brownie_dessert.jpg',
  pasta: '/images/creamy_pasta.jpg',
  alfredo: '/images/creamy_pasta.jpg',
  moroccan: '/images/moroccan_chicken.jpg',
  mango: '/images/drinks_smoothies.jpg',
  smoothie: '/images/drinks_smoothies.jpg',
  shake: '/images/drinks_smoothies.jpg',
  vanilla: '/images/drinks_smoothies.jpg',
  ambiance: '/images/brasserie_ambiance.jpg',
  interior: '/images/brasserie_ambiance.jpg'
};

// Verified dual-CDN fallbacks (Pexels + Unsplash) for maximum global reliability
const CATEGORY_FALLBACKS: Record<string, string[]> = {
  Pizza: [
    '/images/fajita_pizza.jpg',
    'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80'
  ],
  Chicken: [
    '/images/parmesan_chicken.jpg',
    '/images/moroccan_chicken.jpg',
    'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80'
  ],
  Steak: [
    'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  ],
  Pasta: [
    '/images/creamy_pasta.jpg',
    'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
  ],
  Burgers: [
    'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  ],
  Sandwiches: [
    '/images/chicken_sandwich.jpg',
    'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  ],
  Salads: [
    'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
  ],
  Soups: [
    'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80'
  ],
  Starters: [
    'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80'
  ],
  Seafood: [
    'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  ],
  'Stir Fry': [
    'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80'
  ],
  Sides: [
    'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80'
  ],
  Desserts: [
    '/images/brownie_dessert.jpg',
    'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  ],
  Coffee: [
    'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
  ],
  Mocktails: [
    'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  ],
  Milkshakes: [
    '/images/drinks_smoothies.jpg',
    'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  ],
  Smoothies: [
    '/images/drinks_smoothies.jpg',
    'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80'
  ],
  Default: [
    '/images/parmesan_chicken.jpg',
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  ]
};

const INLINE_FOOD_FALLBACK = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450' width='600' height='450'%3e%3cdefs%3e%3clinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%231B1B1B'/%3e%3cstop offset='100%25' stop-color='%23101010'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23g)'/%3e%3ccircle cx='300' cy='190' r='90' fill='%23141414' stroke='%23C9A96E' stroke-width='2' stroke-dasharray='6 6' opacity='0.7'/%3e%3ccircle cx='300' cy='190' r='75' fill='%231A1A1A' stroke='%23C9A96E' stroke-width='1.5'/%3e%3cpath d='M265 185 Q300 150 335 185 Q300 220 265 185 Z' fill='none' stroke='%23C9A96E' stroke-width='2' stroke-linejoin='round'/%3e%3ccircle cx='300' cy='185' r='8' fill='%23C9A96E'/%3e%3ctext x='300' y='320' font-family='Georgia, serif' font-size='18' font-weight='bold' fill='%23C9A96E' text-anchor='middle' letter-spacing='3'%3eKARACHI BRASSERIE%3c/text%3e%3ctext x='300' y='345' font-family='sans-serif' font-size='11' fill='%23F5F0E8' opacity='0.6' text-anchor='middle' letter-spacing='2'%3eALL DAY EATERY · SADDAR%3c/text%3e%3c/svg%3e";

export const FoodImage: React.FC<FoodImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  category = 'Default',
  loading = 'eager'
}) => {
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Build a deduplicated, prioritized list of image candidates
  const candidateList = useMemo(() => {
    const list: string[] = [];

    const addCandidate = (url?: string) => {
      if (!url) return;
      const clean = typeof url === 'string' ? url.trim() : '';
      if (clean && !list.includes(clean)) {
        list.push(clean);
      }
    };

    // 1. Primary src prop
    addCandidate(src);

    // 2. Check if src or alt hints at a known local public image
    const searchString = `${src || ''} ${alt || ''} ${category || ''}`.toLowerCase();
    for (const [key, publicPath] of Object.entries(LOCAL_PUBLIC_MAP)) {
      if (searchString.includes(key)) {
        addCandidate(publicPath);
        break;
      }
    }

    // 3. Explicit fallbackSrc prop
    addCandidate(fallbackSrc);

    // 4. Category-specific verified images (dual CDN Pexels + Unsplash)
    const categoryKey = CATEGORY_FALLBACKS[category] ? category : 'Default';
    const categoryUrls = CATEGORY_FALLBACKS[categoryKey] || CATEGORY_FALLBACKS.Default;
    for (const url of categoryUrls) {
      addCandidate(url);
    }

    // 5. Global default fallbacks
    for (const url of CATEGORY_FALLBACKS.Default) {
      addCandidate(url);
    }

    // 6. Inline styled SVG
    addCandidate(INLINE_FOOD_FALLBACK);

    return list;
  }, [src, fallbackSrc, category, alt]);

  // Reset to first candidate whenever props change
  useEffect(() => {
    setCandidateIndex(0);
    setIsLoaded(false);
  }, [src, fallbackSrc, category]);

  const activeSrc = candidateList[candidateIndex] || INLINE_FOOD_FALLBACK;

  const handleError = () => {
    setCandidateIndex((prev) => {
      if (prev < candidateList.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#151515]">
      {/* Subtle gold shimmer background placeholder while image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#1A1A1A] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-[#C9A96E]/30 border-t-[#C9A96E] animate-spin opacity-40" />
        </div>
      )}

      {/* Actual Food Image - key={activeSrc} ensures clean DOM remount on fallback */}
      <img
        key={activeSrc}
        src={activeSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};
