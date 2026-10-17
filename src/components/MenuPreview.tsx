import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, Filter, ChevronRight, Eye } from 'lucide-react';
import { ALL_MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';
import { FoodImage } from './FoodImage';

interface MenuPreviewProps {
  initialCategory?: string;
  onOpenFullMenuModal: () => void;
  onDishSelect: (item: MenuItem) => void;
}

export const MenuPreview: React.FC<MenuPreviewProps> = ({
  initialCategory = 'Featured',
  onOpenFullMenuModal,
  onDishSelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter items
  const filteredItems = useMemo(() => {
    let items = ALL_MENU_ITEMS;

    // Apply Search
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      return items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    // Apply Category
    if (selectedCategory === 'Featured') {
      return items.filter((item) => item.featured || item.popular);
    } else if (selectedCategory !== 'All') {
      return items.filter((item) => item.category === selectedCategory);
    }

    return items;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#101010] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] tracking-[0.3em] font-semibold text-[#C9A96E] uppercase">
              ALL DAY DINING
            </span>
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F0E8] tracking-tight mb-4">
            Culinary Selection
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-light">
            Discover handcrafted classics, artisanal stone-oven pizzas, aged steaks, and specialty brews.
          </p>
        </div>

        {/* Search Bar & Controls */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A96E]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Parmesan Chicken, Pizza, Steak, Latte)..."
              className="w-full bg-[#1B1B1B] border border-[#C9A96E]/30 focus:border-[#C9A96E] text-[#F5F0E8] placeholder-[#F5F0E8]/40 pl-11 pr-10 py-3 text-sm focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#F5F0E8]/50 hover:text-[#C9A96E]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-xs text-[#C9A96E] mt-2 text-center">
              Showing results for &ldquo;{searchQuery}&rdquo; ({filteredItems.length} dishes found)
            </p>
          )}
        </div>

        {/* Interactive Horizontal Category Filter Tabs */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#C9A96E]/20 scrollbar-track-transparent">
          <div className="flex items-center justify-start lg:justify-center gap-1.5 min-w-max px-2">
            {MENU_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category && !searchQuery;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSearchQuery('');
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-[#C9A96E] text-[#101010] border-[#C9A96E] font-semibold shadow-md shadow-[#C9A96E]/15'
                      : 'bg-[#1B1B1B]/70 text-[#F5F0E8]/70 border-white/5 hover:border-[#C9A96E]/40 hover:text-[#F5F0E8]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#1B1B1B]/40 border border-white/5 p-8">
            <p className="font-serif text-lg text-[#F5F0E8]">No dishes found matching your selection.</p>
            <p className="text-xs text-[#F5F0E8]/60 mt-1">Try another search term or reset category filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-5 py-2 text-xs tracking-wider uppercase bg-[#C9A96E] text-[#101010] font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {filteredItems.slice(0, 16).map((item) => (
              <div
                key={item.id}
                onClick={() => onDishSelect(item)}
                className="group relative p-4 bg-[#1B1B1B]/50 hover:bg-[#1B1B1B] border border-white/5 hover:border-[#C9A96E]/50 transition-all duration-300 cursor-pointer flex items-start gap-4"
              >
                {/* Food Image Thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-black/40 border border-[#C9A96E]/20">
                  <FoodImage
                    src={item.image}
                    fallbackSrc={item.fallbackImage}
                    alt={item.name}
                    category={item.category}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors truncate">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="font-mono text-sm sm:text-base font-semibold text-[#C9A96E] tabular-nums">
                        PKR {item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#F5F0E8]/65 font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#C9A96E]/70 font-medium">
                    <span className="tracking-wider uppercase text-[10px] text-[#F5F0E8]/40">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 group-hover:text-[#C9A96E] transition-colors text-[10px] uppercase tracking-wider">
                      Details <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Menu Button (Primary Gold Button requested) */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenFullMenuModal}
            className="px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] transition-all duration-300 shadow-xl shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/35 cursor-pointer inline-flex items-center group"
          >
            <span>VIEW FULL MENU ({ALL_MENU_ITEMS.length} DISHES)</span>
            <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <p className="text-[11px] tracking-wider text-[#F5F0E8]/50 uppercase mt-3">
            All prices are exclusive of applicable government sales tax
          </p>
        </div>
      </div>
    </section>
  );
};
