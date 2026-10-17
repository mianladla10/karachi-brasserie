import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FoodImage } from './FoodImage';
import { LOCAL_IMAGES } from '../assets/images';

export interface GalleryPhoto {
  id: string;
  title: string;
  dishName: string;
  category: string;
  image: string;
  fallbackImage: string;
  description: string;
  price: string;
  colSpan: string; // for asymmetric grid
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'pizza',
    title: 'Artisanal Pizza',
    dishName: 'Pepperoni & Mozzarella Pizza',
    category: 'Pizza',
    image: '/images/pizza_hero.jpg',
    fallbackImage: LOCAL_IMAGES.pizzaHero,
    description: 'Thin hand-stretched crust topped with rich marinara, melted mozzarella, and beef pepperoni on a rustic wooden peel.',
    price: 'PKR 1,480',
    colSpan: 'col-span-12 md:col-span-8 h-80 sm:h-96'
  },
  {
    id: 'parmesan-chicken',
    title: 'Creamy Chicken',
    dishName: 'Parmesan Crusted Chicken',
    category: 'Chicken',
    image: '/images/parmesan_chicken.jpg',
    fallbackImage: LOCAL_IMAGES.parmesanChicken,
    description: 'Crisp golden parmesan crust with velvety white cheese sauce, scallion threads, and mini wire basket fries.',
    price: 'PKR 1,560',
    colSpan: 'col-span-12 md:col-span-4 h-80 sm:h-96'
  },
  {
    id: 'sandwich',
    title: 'Grilled Chicken Sandwich',
    dishName: 'Gourmet Focaccia Sandwich',
    category: 'Sandwiches',
    image: '/images/chicken_sandwich.jpg',
    fallbackImage: LOCAL_IMAGES.chickenSandwich,
    description: 'Toasted herb focaccia bread layered with grilled chicken breast, melted cheddar cheese, and fresh greens.',
    price: 'PKR 1,360',
    colSpan: 'col-span-12 md:col-span-4 h-72 sm:h-80'
  },
  {
    id: 'pasta',
    title: 'Creamy Pasta',
    dishName: 'Fettuccine Alfredo',
    category: 'Pasta',
    image: '/images/creamy_pasta.jpg',
    fallbackImage: LOCAL_IMAGES.creamyPasta,
    description: 'Silky parmesan garlic cream sauce topped with crispy potato straw nest and sliced herb chicken breast.',
    price: 'PKR 1,400',
    colSpan: 'col-span-12 md:col-span-4 h-72 sm:h-80'
  },
  {
    id: 'brownie',
    title: 'Brownie with Ice Cream',
    dishName: 'Decadent Chocolate Fudge Brownie',
    category: 'Desserts',
    image: '/images/brownie_dessert.jpg',
    fallbackImage: LOCAL_IMAGES.brownieDessert,
    description: 'Warm fudge brownie crowned with a scoop of premium vanilla bean ice cream and fine chocolate drizzle.',
    price: 'PKR 880',
    colSpan: 'col-span-12 md:col-span-4 h-72 sm:h-80'
  },
  {
    id: 'chicken-mains',
    title: 'Chicken Main Course',
    dishName: 'Moroccan Chicken',
    category: 'Chicken',
    image: '/images/moroccan_chicken.jpg',
    fallbackImage: LOCAL_IMAGES.moroccanChicken,
    description: 'Char-grilled chicken fillets simmered in rich creamy spiced sambal sauce with crispy fries.',
    price: 'PKR 1,550',
    colSpan: 'col-span-12 md:col-span-6 h-80 sm:h-88'
  },
  {
    id: 'mango-drink',
    title: 'Mango Drink',
    dishName: 'Seasonal Ripe Mango Smoothie',
    category: 'Smoothies',
    image: '/images/drinks_smoothies.jpg',
    fallbackImage: LOCAL_IMAGES.drinksSmoothies,
    description: 'Thick golden smoothie made with luscious fresh Sindhri mangoes and crushed ice.',
    price: 'PKR 740',
    colSpan: 'col-span-12 md:col-span-3 h-80 sm:h-88'
  },
  {
    id: 'vanilla-drink',
    title: 'Vanilla Drink',
    dishName: 'Vanilla Gelato Milkshake',
    category: 'Milkshakes',
    image: '/images/drinks_smoothies.jpg',
    fallbackImage: LOCAL_IMAGES.drinksSmoothies,
    description: 'Handcrafted rich milkshake churned from authentic vanilla gelato with whipped cream and pineapple garnish.',
    price: 'PKR 700',
    colSpan: 'col-span-12 md:col-span-3 h-80 sm:h-88'
  }
];

export const PhotoGallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY_PHOTOS.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev! < GALLERY_PHOTOS.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] tracking-[0.3em] font-semibold text-[#C9A96E] uppercase">
              VISUAL FEAST
            </span>
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F0E8] tracking-tight mb-4">
            A Taste of Brasserie
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-light">
            Every dish is thoughtfully composed, photographed fresh from our kitchen.
          </p>
        </div>

        {/* Asymmetric Modern Grid Layout */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id + index}
              onClick={() => handleOpenLightbox(index)}
              className={`${photo.colSpan} group relative overflow-hidden bg-[#101010] border border-[#C9A96E]/20 hover:border-[#C9A96E]/70 transition-all duration-500 cursor-pointer shadow-lg`}
            >
              {/* Photo Image using FoodImage */}
              <FoodImage
                src={photo.image}
                fallbackSrc={photo.fallbackImage}
                alt={photo.dishName}
                category={photo.category}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/90 via-[#101010]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Dish Metadata overlay */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-[#101010] bg-[#C9A96E] px-2.5 py-0.5">
                    {photo.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 group-hover:text-[#C9A96E] group-hover:border-[#C9A96E] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#F5F0E8] mb-1 group-hover:text-[#C9A96E] transition-colors">
                    {photo.dishName}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#F5F0E8]/70 font-light line-clamp-1 max-w-[80%]">
                      {photo.description}
                    </p>
                    <span className="font-mono text-xs font-semibold text-[#C9A96E] tabular-nums">
                      {photo.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Gold border accent on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A96E]/50 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 text-white/70 hover:text-[#C9A96E] transition-colors bg-white/10 hover:bg-white/20 rounded-full cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-[#C9A96E] bg-black/60 hover:bg-black/90 border border-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-[#C9A96E] bg-black/60 hover:bg-black/90 border border-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden border border-[#C9A96E]/30 bg-[#101010] shadow-2xl max-h-[70vh]">
              <FoodImage
                src={GALLERY_PHOTOS[activePhotoIndex].image}
                fallbackSrc={GALLERY_PHOTOS[activePhotoIndex].fallbackImage}
                alt={GALLERY_PHOTOS[activePhotoIndex].dishName}
                category={GALLERY_PHOTOS[activePhotoIndex].category}
                className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Photo Caption Strip */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E] font-semibold">
                {GALLERY_PHOTOS[activePhotoIndex].category} · {activePhotoIndex + 1} of {GALLERY_PHOTOS.length}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0E8] mt-1">
                {GALLERY_PHOTOS[activePhotoIndex].dishName}
              </h4>
              <p className="text-xs sm:text-sm text-[#F5F0E8]/75 mt-1 font-light">
                {GALLERY_PHOTOS[activePhotoIndex].description}
              </p>
              <p className="font-mono text-sm font-semibold text-[#C9A96E] mt-2 tabular-nums">
                {GALLERY_PHOTOS[activePhotoIndex].price}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
