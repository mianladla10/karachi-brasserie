import React from 'react';
import { ArrowRight, MapPin, Clock, Utensils } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/menuData';

interface AboutSectionProps {
  onDiscoverMenu: () => void;
  onReserveTable: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverMenu, onReserveTable }) => {
  return (
    <section id="story" className="py-24 bg-[#1B1B1B] relative overflow-hidden">
      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 border border-[#C9A96E]/30 p-2 sm:p-3 bg-[#101010]/60 shadow-2xl shadow-black/80">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/images/brasserie_ambiance.jpg"
                  alt="Karachi Brasserie Saddar Dining Room Ambiance"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80') {
                      target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Architectural Location Accent Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 z-20 bg-[#101010] border border-[#C9A96E]/50 p-4 sm:p-5 shadow-2xl max-w-[240px] sm:max-w-[260px] hidden sm:block">
              <div className="flex items-center space-x-2 text-[#C9A96E] mb-1">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Location</span>
              </div>
              <p className="font-serif text-sm text-[#F5F0E8] font-bold">
                Hotel Excelsior
              </p>
              <p className="text-xs text-[#F5F0E8]/70 mt-0.5">
                Opposite Atrium Mall, Saddar Town, Karachi
              </p>
            </div>

            {/* Geometric Gold Accent frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C9A96E]/40 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Story Copy & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Small Gold Label */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] sm:text-xs tracking-[0.3em] font-semibold text-[#C9A96E] uppercase">
                OUR STORY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F0E8] leading-tight mb-6">
              More Than Just a Meal
            </h2>

            {/* Description (Exact text requested) */}
            <p className="text-base sm:text-lg text-[#F5F0E8]/85 font-light leading-relaxed mb-8">
              At Karachi Brasserie, every meal is an opportunity to enjoy great food and good company. Our diverse menu brings together comforting classics and delicious contemporary favorites in a welcoming dining atmosphere.
            </p>

            {/* Key Dining Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pt-4 border-t border-white/10">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-[#101010] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#F5F0E8]">All-Day Dining</h4>
                  <p className="text-xs text-[#F5F0E8]/65 mt-1 font-light leading-normal">
                    From freshly brewed artisanal coffee and hearty sandwiches to evening steaks and pasta.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-[#101010] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#F5F0E8]">Welcoming Hours</h4>
                  <p className="text-xs text-[#F5F0E8]/65 mt-1 font-light leading-normal">
                    Open daily from 12:00 PM until 1:00 AM for lunch, tea time, dinner, and late-night cravings.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscoverMenu}
                className="px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] transition-all duration-300 shadow-lg shadow-[#C9A96E]/15 cursor-pointer inline-flex items-center group"
              >
                <span>DISCOVER OUR MENU</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onReserveTable}
                className="px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F0E8] hover:text-[#C9A96E] border border-white/15 hover:border-[#C9A96E]/50 transition-all duration-300 cursor-pointer"
              >
                BOOK YOUR VISIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
