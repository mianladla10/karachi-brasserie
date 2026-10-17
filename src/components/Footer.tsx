import React from 'react';
import { Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/menuData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onMenuClick: () => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onMenuClick, onBookClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101010] text-[#F5F0E8] border-t border-[#C9A96E]/30 relative pt-16 pb-12">
      {/* Top Gold Divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Logo & Short Restaurant Description (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <a href="#home" className="inline-block group mb-4">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors uppercase block">
                Karachi Brasserie
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#C9A96E] font-medium uppercase mt-0.5 block">
                All Day Eatery
              </span>
            </a>

            <p className="text-xs sm:text-sm text-[#F5F0E8]/70 font-light leading-relaxed max-w-sm mb-6">
              A premium dining destination in Saddar, Karachi. Serving handcrafted stone-oven pizzas, chef signature chicken dishes, prime steaks, artisanal pastas, and handcrafted specialty beverages in an ambiance of timeless comfort.
            </p>

            <button
              onClick={onBookClick}
              className="px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] transition-colors shadow-md cursor-pointer inline-flex items-center"
            >
              Reserve a Table
            </button>
          </div>

          {/* Col 2: Quick Navigation & Menu Links (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F0E8]/75">
              <li>
                <a href="#home" className="hover:text-[#C9A96E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={onMenuClick}
                  className="hover:text-[#C9A96E] transition-colors cursor-pointer text-left"
                >
                  Our Menu (Explore All Dishes)
                </button>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#C9A96E] transition-colors">
                  Chef Signatures
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#C9A96E] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C9A96E] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#C9A96E] transition-colors">
                  Reservations & Inquiries
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C9A96E] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Location & Contact (4 cols) */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
              Find Us
            </h4>
            <div className="space-y-3 text-xs text-[#F5F0E8]/75">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Hotel Excelsior, Opposite Atrium Mall, Saddar Town, Karachi, Pakistan
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#C9A96E] shrink-0" />
                  <a
                    href={`tel:${RESTAURANT_DETAILS.phone}`}
                    className="hover:text-[#C9A96E] font-mono transition-colors"
                  >
                    {RESTAURANT_DETAILS.phoneFormatted}
                  </a>
                </div>
                <a
                  href={RESTAURANT_DETAILS.whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] font-semibold tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] px-2.5 py-1 rounded-xs transition-colors ml-1"
                >
                  <WhatsAppIcon className="w-3 h-3 mr-1" />
                  Order on WhatsApp
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Instagram className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <a
                  href={RESTAURANT_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  {RESTAURANT_DETAILS.instagram}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#C9A96E]/80">
                <span>{RESTAURANT_DETAILS.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E8]/50">
          <p className="text-center sm:text-left">
            © 2026 Karachi Brasserie. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-[#C9A96E] hover:text-[#DFC798] transition-colors cursor-pointer text-[11px] tracking-wider uppercase"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
