import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LiveBullionTicker from './components/LiveBullionTicker';
import OurCollectionsSection from './components/OurCollectionsSection';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import FeaturedProductsSection from './components/FeaturedProductsSection';
import PriceCalculator from './components/PriceCalculator';
import VisitStoreSection from './components/VisitStoreSection';
import TestimonialsSection from './components/TestimonialsSection';
import StoryPillarsSection from './components/StoryPillarsSection';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import { storeInfo } from './data/jewelry';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quickViewItem, setQuickViewItem] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030408] text-slate-100 flex flex-col antialiased selection:bg-[#C5A059] selection:text-black">
      
      {/* 1. Brand Navbar with SJ Monogram Logo */}
      <Navbar onSelectCategory={handleSelectCategory} />

      {/* 2. Dark Luxury Hero Section (Matching Uploaded Mockup) */}
      <HeroSection onSelectCategory={handleSelectCategory} />

      {/* 3. Live Bullion Ticker (24K Gold, 22K Gold, 999 Silver) */}
      <LiveBullionTicker />

      {/* 4. Our Collections (3 Signature Large Cards) */}
      <OurCollectionsSection onSelectCategory={handleSelectCategory} />

      {/* 5. Fine Craftsmanship (Handcrafted With Devotion Spotlight) */}
      <CraftsmanshipSection />

      {/* 6. Featured Products (5-Product Catalog Grid with Tab Filters) */}
      <FeaturedProductsSection onOpenQuickView={setQuickViewItem} />

      {/* 7. Interactive Gold & Silver Price Calculator */}
      <PriceCalculator />

      {/* 8. Visit Our Store: A Heritage In Beawar */}
      <VisitStoreSection />

      {/* 9. What Our Customers Say (Testimonials) */}
      <TestimonialsSection />

      {/* 10. 3 Visual Story Pillars */}
      <StoryPillarsSection onSelectCategory={handleSelectCategory} />

      {/* 11. Luxury 4-Column Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* 12. Quick View Modal for Product Inquiries */}
      <QuickViewModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
      />

      {/* 13. Floating WhatsApp Direct Concierge */}
      <a
        href={`https://wa.me/91${storeInfo.phone}?text=Namaste%20Shree%20Ganesham%20Jewellers%20(Beawar),%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 transform hover:scale-110 transition-all flex items-center justify-center group"
        title="Chat with Shree Ganesham Jewellers on WhatsApp"
        aria-label="WhatsApp Concierge"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

    </div>
  );
}
