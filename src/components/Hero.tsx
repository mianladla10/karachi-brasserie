import React from 'react';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20 sm:pt-24 pb-16"
    >
      {/* Background Image with Cinematic Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/pizza_hero_1792237134387.jpg"
          alt="Karachi Brasserie Artisanal Pizza"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow transition-transform duration-1000 ease-out"
        />
        {/* Layered luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/85 to-[#101010]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-[#101010]/60" />
        {/* Subtle decorative gold vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C9A96E]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-2xl text-left">
          {/* Small Gold Heading + Location Label */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A96E]">
              <span className="w-6 h-[1px] bg-[#C9A96E] mr-2.5 inline-block" />
              WELCOME TO KARACHI BRASSERIE
            </span>
            <span className="text-[#C9A96E]/40">·</span>
            <span className="inline-flex items-center text-[11px] sm:text-xs font-medium tracking-[0.25em] text-[#F5F0E8]/70 uppercase">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#C9A96E]" />
              SADDAR, KARACHI
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F0E8] leading-[1.1] mb-6 drop-shadow-md">
            An Exceptional{' '}
            <span className="text-[#C9A96E] italic font-normal block sm:inline">
              Dining Experience
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#F5F0E8]/85 font-light leading-relaxed max-w-xl mb-10">
            Discover delicious flavors, handcrafted favorites, and memorable moments at Karachi Brasserie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={onExploreMenu}
              className="px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] transition-all duration-300 shadow-xl shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/35 text-center cursor-pointer group"
            >
              <span className="inline-flex items-center">
                EXPLORE OUR MENU
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">→</span>
              </span>
            </button>

            <button
              onClick={onReserveTable}
              className="px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F0E8] border border-[#C9A96E]/60 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-300 text-center cursor-pointer"
            >
              RESERVE YOUR TABLE
            </button>
          </div>

          {/* Trust Highlights Strip below Hero */}
          <div className="mt-14 pt-8 border-t border-[#C9A96E]/20 grid grid-cols-3 gap-4 text-left">
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#F5F0E8]">All Day</span>
              <span className="text-[11px] tracking-wider text-[#C9A96E] uppercase">Dining & Coffee</span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#F5F0E8]">100% Fresh</span>
              <span className="text-[11px] tracking-wider text-[#C9A96E] uppercase">Handcrafted Daily</span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#F5F0E8]">Hotel Excelsior</span>
              <span className="text-[11px] tracking-wider text-[#C9A96E] uppercase">Saddar, Karachi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#featured"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-[10px] tracking-[0.25em] text-[#F5F0E8]/50 hover:text-[#C9A96E] transition-colors"
      >
        <span className="uppercase mb-1">Scroll to Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C9A96E]" />
      </a>
    </section>
  );
};
