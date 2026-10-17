import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedFood } from './components/FeaturedFood';
import { AboutSection } from './components/AboutSection';
import { MenuPreview } from './components/MenuPreview';
import { PhotoGallery } from './components/PhotoGallery';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FullMenuModal } from './components/FullMenuModal';
import { DishDetailModal } from './components/DishDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MenuItem } from './data/menuData';

export default function App() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [menuInitialCategory, setMenuInitialCategory] = useState<string>('Featured');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTableClick = () => {
    scrollToSection('reservation');
  };

  const handleMenuClick = () => {
    scrollToSection('menu');
  };

  const handleViewMenuCategory = (category: string) => {
    setMenuInitialCategory(category);
    scrollToSection('menu');
  };

  const handleReserveWithDish = (dish: MenuItem) => {
    scrollToSection('reservation');
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F0E8] flex flex-col font-sans selection:bg-[#C9A96E]/30 selection:text-white">
      {/* 1. STYLISH STICKY NAVIGATION BAR */}
      <Navbar onBookClick={handleBookTableClick} onMenuClick={handleMenuClick} />

      <main className="flex-1">
        {/* 2. CINEMATIC HERO SECTION */}
        <Hero
          onExploreMenu={handleMenuClick}
          onReserveTable={handleBookTableClick}
        />

        {/* 3. FEATURED FOOD SECTION ("Crafted to Delight") */}
        <FeaturedFood
          onViewMenuCategory={handleViewMenuCategory}
          onSelectDish={(item) => {
            setSelectedDish({
              id: item.id,
              name: item.name,
              price: item.price,
              category: item.category,
              description: item.description,
              image: item.image
            });
          }}
        />

        {/* 4. ABOUT SECTION ("More Than Just a Meal") */}
        <AboutSection
          onDiscoverMenu={handleMenuClick}
          onReserveTable={handleBookTableClick}
        />

        {/* 5. INTERACTIVE MENU PREVIEW */}
        <MenuPreview
          initialCategory={menuInitialCategory}
          onOpenFullMenuModal={() => setIsFullMenuOpen(true)}
          onDishSelect={(dish) => setSelectedDish(dish)}
        />

        {/* 6. PHOTO GALLERY ("A Taste of Brasserie") */}
        <PhotoGallery />

        {/* 7. RESERVATION SECTION ("Your Table Awaits") */}
        <ReservationSection />

        {/* 8. CONTACT SECTION ("Find Us in Karachi") */}
        <ContactSection />
      </main>

      {/* 9. PREMIUM FOOTER */}
      <Footer
        onMenuClick={handleMenuClick}
        onBookClick={handleBookTableClick}
      />

      {/* FLOATING WHATSAPP ORDERING BUTTON */}
      <FloatingWhatsApp />

      {/* FULL MENU MODAL */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        onSelectDish={(dish) => setSelectedDish(dish)}
      />

      {/* DISH DETAIL PREVIEW MODAL */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveWithDish={handleReserveWithDish}
      />
    </div>
  );
}
