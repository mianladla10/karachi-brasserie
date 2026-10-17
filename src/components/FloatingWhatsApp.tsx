import React from 'react';
import { RESTAURANT_DETAILS } from '../data/menuData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <a
        href={RESTAURANT_DETAILS.whatsappOrderUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp (+92 330 8880773)"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-white/20"
      >
        <WhatsAppIcon className="w-5 h-5 shrink-0 animate-bounce-subtle" />
        <span className="text-xs font-bold tracking-wider uppercase font-sans whitespace-nowrap hidden sm:inline">
          Order on WhatsApp
        </span>
        <span className="text-xs font-bold tracking-wider uppercase font-sans whitespace-nowrap sm:hidden">
          Order
        </span>
      </a>
    </aside>
  );
};
