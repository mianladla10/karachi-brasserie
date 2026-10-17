import React from 'react';
import { X, Phone, MessageSquare, Utensils } from 'lucide-react';
import { MenuItem, RESTAURANT_DETAILS } from '../data/menuData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onReserveWithDish: (dish: MenuItem) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onReserveWithDish,
}) => {
  if (!dish) return null;

  const generateWhatsAppInquiry = () => {
    const text = `Hello Karachi Brasserie! I am interested in inquiring about "${dish.name}" (PKR ${dish.price.toLocaleString()}). Could you please share more details or availability for today?`;
    return `https://wa.me/${RESTAURANT_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#181818] border border-[#C9A96E]/50 w-full max-w-lg shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-[#C9A96E] bg-black/50 hover:bg-black/80 rounded-full transition-colors"
          aria-label="Close dish preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Optional Image */}
        {dish.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
            <img
              src={dish.image}
              alt={dish.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#101010] bg-[#C9A96E] px-3 py-1 shadow-md">
                {dish.category}
              </span>
            </div>
          </div>
        )}

        {/* Dish Content */}
        <div className="p-6 sm:p-8 space-y-5">
          {!dish.image && (
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#C9A96E]">
              {dish.category}
            </span>
          )}

          <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0E8]">
              {dish.name}
            </h3>
            <span className="font-mono text-xl font-bold text-[#C9A96E] tabular-nums shrink-0">
              PKR {dish.price.toLocaleString()}
            </span>
          </div>

          <p className="text-sm text-[#F5F0E8]/80 font-light leading-relaxed">
            {dish.description}
          </p>

          <div className="p-3 bg-[#101010] border border-white/5 text-xs text-[#F5F0E8]/60 flex items-center justify-between">
            <span>Prepared fresh to order</span>
            <span className="text-[#C9A96E] font-medium">All Day Eatery</span>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onReserveWithDish(dish);
                onClose();
              }}
              className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] transition-colors cursor-pointer text-center"
            >
              Request in Reservation
            </button>

            <a
              href={generateWhatsAppInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-[#25D366]/60 hover:border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center justify-center cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
