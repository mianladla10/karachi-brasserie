import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/menuData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onBookClick: () => void;
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu', onClick: onMenuClick },
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, customClick?: () => void) => {
    if (customClick) {
      customClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101010]/95 backdrop-blur-md border-b border-[#C9A96E]/20 shadow-xl shadow-black/50 py-3.5'
          : 'bg-gradient-to-b from-[#101010]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Brand Wordmark */}
        <a href="#home" className="flex flex-col group text-left">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors uppercase">
            Karachi Brasserie
          </span>
          <span className="text-[10px] tracking-[0.35em] text-[#C9A96E] font-medium uppercase mt-0.5">
            All Day Eatery
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.onClick)}
              className="text-xs uppercase tracking-[0.2em] text-[#F5F0E8]/80 hover:text-[#C9A96E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A96E] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
          {/* Call Link */}
          <a
            href={`tel:${RESTAURANT_DETAILS.phone}`}
            className="hidden md:flex items-center text-xs tracking-wider text-[#C9A96E] hover:text-[#DFC798] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 opacity-80" />
            <span className="font-mono">{RESTAURANT_DETAILS.phoneFormatted}</span>
          </a>

          {/* Green Order on WhatsApp Button */}
          <a
            href={RESTAURANT_DETAILS.whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs font-semibold tracking-wider uppercase bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all duration-300 shadow-md shadow-[#25D366]/20 hover:shadow-[#25D366]/35 active:scale-95 inline-flex items-center cursor-pointer group"
            aria-label="Order on WhatsApp (+92 330 8880773)"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden xl:inline">Order on WhatsApp</span>
            <span className="xl:hidden">WhatsApp</span>
          </a>

          {/* Book a Table */}
          <button
            onClick={onBookClick}
            className="px-4 lg:px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] transition-all duration-300 shadow-lg shadow-[#C9A96E]/15 hover:shadow-[#C9A96E]/30 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Quick WhatsApp Action */}
        <div className="flex sm:hidden items-center space-x-2">
          <a
            href={RESTAURANT_DETAILS.whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#25D366] text-white rounded-sm shadow-md"
            aria-label="Order on WhatsApp (+92 330 8880773)"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          <button
            onClick={onBookClick}
            className="px-3 py-1.5 text-[10px] font-semibold tracking-wider uppercase bg-[#C9A96E] text-[#101010]"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F0E8] hover:text-[#C9A96E] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#101010] border-b border-[#C9A96E]/20 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.onClick)}
                className="text-sm font-medium tracking-[0.15em] uppercase text-[#F5F0E8]/90 hover:text-[#C9A96E] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col space-y-3">
            {/* Direct Phone Call Button */}
            <a
              href={`tel:${RESTAURANT_DETAILS.phone}`}
              className="flex items-center text-xs tracking-wider text-[#C9A96E] py-1 font-mono"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call: {RESTAURANT_DETAILS.phoneFormatted}</span>
            </a>

            {/* Green Order on WhatsApp Button in Mobile Drawer */}
            <a
              href={RESTAURANT_DETAILS.whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-semibold tracking-[0.18em] uppercase bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Book a Table */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-[0.2em] uppercase bg-[#C9A96E] text-[#101010]"
            >
              Book a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
