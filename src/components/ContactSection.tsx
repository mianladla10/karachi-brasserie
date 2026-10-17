import React from 'react';
import { MapPin, Phone, Instagram, Clock, Navigation, ExternalLink } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/menuData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] tracking-[0.3em] font-semibold text-[#C9A96E] uppercase">
              LOCATION & DETAILS
            </span>
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F0E8] tracking-tight mb-4">
            Find Us in Karachi
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-light">
            Conveniently situated in the historic culinary heart of Saddar Town.
          </p>
        </div>

        {/* Contact Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Phone, Social & Primary Action Buttons */}
          <div className="lg:col-span-6 bg-[#101010] border border-[#C9A96E]/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Restaurant Branding Tag */}
              <div className="mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">
                  ALL DAY EATERY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0E8] mt-1">
                  Karachi Brasserie
                </h3>
              </div>

              {/* Exact Location Details */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#1B1B1B] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C9A96E] font-medium mb-1">
                      Address
                    </h4>
                    <p className="text-sm sm:text-base text-[#F5F0E8] font-serif font-bold">
                      {RESTAURANT_DETAILS.name}
                    </p>
                    <p className="text-xs sm:text-sm text-[#F5F0E8]/80 mt-0.5">
                      Hotel Excelsior
                    </p>
                    <p className="text-xs sm:text-sm text-[#F5F0E8]/80">
                      Opposite Atrium Mall
                    </p>
                    <p className="text-xs sm:text-sm text-[#F5F0E8]/80">
                      Saddar Town, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#1B1B1B] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C9A96E] font-medium mb-1">
                      Direct Inquiries & Bookings
                    </h4>
                    <a
                      href={`tel:${RESTAURANT_DETAILS.phone}`}
                      className="font-mono text-base sm:text-lg font-bold text-[#C9A96E] hover:text-[#DFC798] transition-colors"
                    >
                      {RESTAURANT_DETAILS.phoneFormatted}
                    </a>
                    <p className="text-[11px] text-[#F5F0E8]/60 mt-0.5 font-light">
                      Available for table reservations and takeaway orders
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#1B1B1B] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C9A96E] font-medium mb-1">
                      Instagram
                    </h4>
                    <a
                      href={RESTAURANT_DETAILS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-[#F5F0E8] hover:text-[#C9A96E] transition-colors inline-flex items-center gap-1"
                    >
                      {RESTAURANT_DETAILS.instagram}
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                    <p className="text-[11px] text-[#F5F0E8]/60 mt-0.5 font-light">
                      Follow our daily specials, chef highlights, and community
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#1B1B1B] border border-[#C9A96E]/30 text-[#C9A96E] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C9A96E] font-medium mb-1">
                      Hours of Operation
                    </h4>
                    <p className="text-sm font-semibold text-[#F5F0E8]">
                      {RESTAURANT_DETAILS.hours}
                    </p>
                    <p className="text-[11px] text-[#F5F0E8]/60 mt-0.5 font-light">
                      Serving lunch, hi-tea, dinner, and late-night supper
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Required Action Buttons: CALL NOW, GET DIRECTIONS, FOLLOW ON INSTAGRAM */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${RESTAURANT_DETAILS.phone}`}
                className="py-3 px-4 text-center text-xs font-semibold tracking-wider uppercase bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] transition-colors cursor-pointer shadow-md inline-flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                CALL NOW
              </a>

              <a
                href={RESTAURANT_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-center text-xs font-semibold tracking-wider uppercase border border-[#C9A96E]/60 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 text-[#F5F0E8] transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                <Navigation className="w-3.5 h-3.5 mr-1.5 text-[#C9A96E]" />
                GET DIRECTIONS
              </a>

              <a
                href={RESTAURANT_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-center text-xs font-semibold tracking-wider uppercase border border-white/20 hover:border-[#C9A96E] hover:bg-white/5 text-[#F5F0E8] transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                <Instagram className="w-3.5 h-3.5 mr-1.5 text-[#C9A96E]" />
                FOLLOW ON IG
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Directions Preview Card */}
          <div className="lg:col-span-6 bg-[#101010] border border-[#C9A96E]/30 p-2 sm:p-3 flex flex-col shadow-2xl relative">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#181818] overflow-hidden border border-white/5 flex flex-col justify-between p-6">
              {/* Map background graphic overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.07] pointer-events-none" />

              {/* Map location badge top */}
              <div className="relative z-10 bg-[#101010]/90 backdrop-blur-md border border-[#C9A96E]/40 p-4 max-w-sm">
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C9A96E]">
                  DIRECTIONS & LANDMARK
                </span>
                <p className="font-serif text-base text-[#F5F0E8] font-bold mt-1">
                  Opposite Atrium Mall
                </p>
                <p className="text-xs text-[#F5F0E8]/70 mt-0.5">
                  Located within Hotel Excelsior, Saddar Town. Ample valet and parking facilities.
                </p>
              </div>

              {/* Center Map Visual Card */}
              <div className="relative z-10 my-auto text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#C9A96E]/15 border-2 border-[#C9A96E] flex items-center justify-center mx-auto text-[#C9A96E] shadow-xl animate-pulse">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#F5F0E8] mt-4">
                  Karachi Brasserie
                </h4>
                <p className="text-xs text-[#C9A96E] tracking-wider mt-1 uppercase">
                  Saddar · Karachi · Pakistan
                </p>
              </div>

              {/* Bottom Interactive Directions Trigger */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#F5F0E8]/60 block font-light">
                    Direct Navigation
                  </span>
                  <span className="text-xs font-semibold text-[#F5F0E8]">
                    Open in Google Maps App
                  </span>
                </div>

                <a
                  href={RESTAURANT_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center cursor-pointer shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1.5" />
                  Launch Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
