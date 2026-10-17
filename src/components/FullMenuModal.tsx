import React, { useState, useMemo } from 'react';
import { X, Search, Sparkles, ChevronDown } from 'lucide-react';
import { ALL_MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';
import { FoodImage } from './FoodImage';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDish: (dish: MenuItem) => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose, onSelectDish }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [query, setQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    let list = ALL_MENU_ITEMS;
    if (query.trim() !== '') {
      const q = query.toLowerCase().trim();
      list = list.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q)
      );
    } else if (activeCategory !== 'All') {
      list = list.filter((i) => i.category === activeCategory);
    }
    return list;
  }, [activeCategory, query]);

  // Group items by category for full overview
  const groupedByCategory = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative bg-[#141414] border border-[#C9A96E]/40 w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#C9A96E]/20 flex items-center justify-between bg-[#101010]">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-semibold text-[#C9A96E] uppercase block">
              KARACHI BRASSERIE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0E8] mt-0.5">
              Complete Dining & Beverage Menu
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#F5F0E8]/70 hover:text-[#C9A96E] bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close Full Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search and Category Filter Toolbar */}
        <div className="p-4 bg-[#181818] border-b border-white/5 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A96E]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes, steaks, pasta, coffee..."
              className="w-full bg-[#101010] border border-white/15 focus:border-[#C9A96E] text-xs text-[#F5F0E8] placeholder-[#F5F0E8]/40 pl-10 pr-8 py-2.5 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Select on Mobile or Tabs on Desktop */}
          <div className="overflow-x-auto pb-1 max-w-full">
            <div className="flex items-center gap-1.5 min-w-max">
              {['All', 'Soups', 'Starters', 'Salads', 'Sandwiches', 'Burgers', 'Pizza', 'Chicken', 'Steak', 'Pasta', 'Seafood', 'Coffee', 'Desserts'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setQuery('');
                    }}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer border ${
                      activeCategory === cat && !query
                        ? 'bg-[#C9A96E] text-[#101010] border-[#C9A96E] font-semibold'
                        : 'bg-[#101010] text-[#F5F0E8]/70 border-white/10 hover:border-[#C9A96E]/40'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10">
          {Object.keys(groupedByCategory).length === 0 ? (
            <div className="text-center py-12">
              <p className="font-serif text-lg text-[#F5F0E8]">No dishes found</p>
              <button
                onClick={() => {
                  setQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 px-4 py-2 text-xs uppercase bg-[#C9A96E] text-[#101010] font-semibold"
              >
                Clear Search
              </button>
            </div>
          ) : (
            Object.entries(groupedByCategory).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[#C9A96E]/30 pb-2">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#C9A96E]">
                    {category}
                  </h4>
                  <span className="text-xs text-[#F5F0E8]/50">
                    ({items.length} items)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectDish(item);
                        onClose();
                      }}
                      className="p-3.5 bg-[#181818]/70 hover:bg-[#1E1E1E] border border-white/5 hover:border-[#C9A96E]/40 transition-all flex items-start gap-3.5 cursor-pointer group"
                    >
                      <div className="w-16 h-16 shrink-0 overflow-hidden bg-black border border-[#C9A96E]/20">
                        <FoodImage
                          src={item.image}
                          fallbackSrc={item.fallbackImage}
                          alt={item.name}
                          category={item.category}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <h5 className="font-serif text-base font-bold text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors truncate">
                            {item.name}
                          </h5>
                          <span className="font-mono text-xs font-semibold text-[#C9A96E] tabular-nums shrink-0">
                            PKR {item.price.toLocaleString()}
                          </span>
                        </div>

                        <p className="text-xs text-[#F5F0E8]/60 font-light line-clamp-2 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="p-4 bg-[#101010] border-t border-[#C9A96E]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F0E8]/60 gap-2">
          <span>Hotel Excelsior · Saddar Town, Karachi</span>
          <span className="text-[#C9A96E]">Call to order or inquire: 0330 8880773</span>
        </div>
      </div>
    </div>
  );
};
