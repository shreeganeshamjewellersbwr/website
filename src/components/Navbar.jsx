import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, Phone } from 'lucide-react';
import { storeInfo } from '../data/jewelry';

export default function Navbar({ onSelectCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId, category) => {
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060810]/95 py-3.5 px-6 lg:px-12 border-b border-[#C5A059]/30 shadow-2xl backdrop-blur-md'
            : 'bg-gradient-to-b from-[#04060C]/90 via-[#04060C]/40 to-transparent py-5 px-6 lg:px-12'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo & Title with SJ Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-3.5 group flex-shrink-0"
          >
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-black border border-[#C5A059]/70 group-hover:border-[#F5D77F] transition-all flex items-center justify-center shadow-lg shadow-black/60 overflow-hidden">
              <img src="/assets/logo.png" alt="SJ Monogram" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="serif text-base sm:text-lg font-bold tracking-[2.5px] text-[#F5D77F] leading-tight">
                SHREE GANESHAM
              </span>
              <span className="text-[9px] tracking-[4px] text-[#C5A059] font-medium uppercase">
                JEWELLERS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-9 text-xs uppercase tracking-[2px] font-medium text-slate-200">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className="hover:text-[#F5D77F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#collections"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('collections', 'all');
                }}
                className="hover:text-[#F5D77F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="#collections"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('collections', 'silver-articles');
                }}
                className="hover:text-[#F5D77F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Silver Articles
              </a>
            </li>
            <li>
              <a
                href="#collections"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('collections', 'gift-items');
                }}
                className="hover:text-[#F5D77F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Gift Items
              </a>
            </li>
            <li>
              <a
                href="#craftsmanship"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('craftsmanship');
                }}
                className="hover:text-[#F5D77F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#store"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('store');
                }}
                className="hover:text-[#F5D77F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C5A059] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right Action: Visit Us Button */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="#store"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('store');
              }}
              className="visit-btn hidden sm:inline-flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              Visit Us
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#F5D77F] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-18 left-0 w-full bg-[#060810]/98 border-b border-[#C5A059]/30 p-6 z-40 flex flex-col gap-4 text-center uppercase tracking-widest text-xs font-semibold shadow-2xl backdrop-blur-xl animate-fade-in">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="py-2 text-[#F5D77F]"
          >
            Home
          </a>
          <a
            href="#collections"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('collections', 'all');
            }}
            className="py-2 text-slate-300 hover:text-white"
          >
            Collections
          </a>
          <a
            href="#collections"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('collections', 'silver-articles');
            }}
            className="py-2 text-slate-300 hover:text-white"
          >
            Silver Articles
          </a>
          <a
            href="#collections"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('collections', 'gift-items');
            }}
            className="py-2 text-slate-300 hover:text-white"
          >
            Gift Items
          </a>
          <a
            href="#craftsmanship"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('craftsmanship');
            }}
            className="py-2 text-slate-300 hover:text-white"
          >
            About Craftsmanship
          </a>
          <a
            href="#store"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('store');
            }}
            className="py-2 text-slate-300 hover:text-white"
          >
            Visit Showroom
          </a>
          <div className="pt-2 border-t border-slate-800 flex justify-center">
            <a
              href={`tel:${storeInfo.phone}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F5D77F] tracking-widest"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              {storeInfo.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
