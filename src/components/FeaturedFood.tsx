import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FoodImage } from './FoodImage';
import { LOCAL_IMAGES } from '../assets/images';

interface FeaturedItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  fallbackImage?: string;
  tag: string;
}

interface FeaturedFoodProps {
  onViewMenuCategory: (category: string) => void;
  onSelectDish: (item: FeaturedItem) => void;
}

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: 'parmesan-crusted-chicken',
    name: 'Parmesan Crusted Chicken',
    price: 1560,
    category: 'Chicken',
    description: 'Golden parmesan crusted chicken fillet served with mashed potatoes, sauté vegetables, and velvety cheese sauce.',
    image: '/images/parmesan_chicken.jpg',
    fallbackImage: LOCAL_IMAGES.parmesanChicken,
    tag: 'Guest Favorite'
  },
  {
    id: 'chicken-fajita-pizza',
    name: 'Chicken Fajita Pizza',
    price: 1540,
    category: 'Pizza',
    description: 'House special fajita sauce, tender spiced chicken, sweet peppers, olives, sweet corn, and bubbly golden mozzarella.',
    image: '/images/fajita_pizza.jpg',
    fallbackImage: LOCAL_IMAGES.fajitaPizza,
    tag: 'Artisanal Pizza'
  },
  {
    id: 'grilled-chicken-sandwich',
    name: 'Grilled Chicken Sandwich',
    price: 1360,
    category: 'Sandwiches',
    description: 'Succulent grilled chicken, melted cheese, crisp greens served between freshly baked artisanal herb focaccia.',
    image: '/images/chicken_sandwich.jpg',
    fallbackImage: LOCAL_IMAGES.chickenSandwich,
    tag: 'House Specialty'
  },
  {
    id: 'brownie-with-ice-cream',
    name: 'Brownie with Ice Cream',
    price: 880,
    category: 'Desserts',
    description: 'Warm fudge brownie topped with a chilled scoop of vanilla bean ice cream and artfully drizzled chocolate reduction.',
    image: '/images/brownie_dessert.jpg',
    fallbackImage: LOCAL_IMAGES.brownieDessert,
    tag: 'Sweet Indulgence'
  }
];

export const FeaturedFood: React.FC<FeaturedFoodProps> = ({ onViewMenuCategory, onSelectDish }) => {
  return (
    <section id="featured" className="py-24 bg-[#101010] relative">
      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] tracking-[0.3em] font-semibold text-[#C9A96E] uppercase">
              CHEF SIGNATURES
            </span>
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F0E8] tracking-tight mb-4">
            Crafted to Delight
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-light">
            Explore some of our guest favorites.
          </p>
        </div>

        {/* 4 Premium Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#1B1B1B] border border-[#C9A96E]/20 hover:border-[#C9A96E]/70 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#C9A96E]/10"
            >
              {/* Top Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <FoodImage
                  src={item.image}
                  fallbackSrc={item.fallbackImage}
                  alt={item.name}
                  category={item.category}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-transparent to-black/20" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#101010] bg-[#C9A96E] px-2.5 py-1 shadow-sm">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#F5F0E8]/70 line-clamp-2 leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-wider uppercase text-[#C9A96E]/70">Price</span>
                    <span className="font-mono text-base font-semibold text-[#C9A96E] tabular-nums">
                      PKR {item.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onSelectDish(item);
                      onViewMenuCategory(item.category);
                    }}
                    className="inline-flex items-center text-xs tracking-wider font-semibold uppercase text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors cursor-pointer py-1.5 px-3 border border-transparent group-hover:border-[#C9A96E]/40"
                  >
                    View Menu
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1 text-[#C9A96E]" />
                  </button>
                </div>
              </div>

              {/* Bottom Subtle Gold Highlight Line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-[#C9A96E] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
