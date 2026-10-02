import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { storeInfo } from '../data/jewelry';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#020306] text-slate-400 border-t border-slate-900">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full p-0.5 bg-black border border-[#C5A059]/70 flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/assets/logo.png" alt="SJ Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="serif text-base sm:text-lg font-bold tracking-[2px] text-[#F5D77F] leading-tight">
                    SHREE GANESHAM
                  </span>
                  <span className="text-[9px] tracking-[4px] text-[#C5A059] font-medium uppercase">
                    JEWELLERS
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-6 max-w-sm">
                Exquisite 92.5 silver jewellery, pure silver articles and premium gift items, crafted with purity and designed for you.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={storeInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#080C1A] border border-[#C5A059]/40 hover:border-[#F5D77F] hover:bg-[#C5A059]/20 text-[#F5D77F] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#080C1A] border border-[#C5A059]/40 hover:border-[#F5D77F] hover:bg-[#C5A059]/20 text-[#F5D77F] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#080C1A] border border-[#C5A059]/40 hover:border-[#F5D77F] hover:bg-[#C5A059]/20 text-[#F5D77F] flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={storeInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#080C1A] border border-[#C5A059]/40 hover:border-[#F5D77F] hover:bg-[#C5A059]/20 text-[#F5D77F] flex items-center justify-center transition-all"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="serif text-xs font-bold tracking-[2.5px] uppercase text-[#F5D77F] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300">
              <li>
                <a href="#home" className="hover:text-[#F5D77F] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={() => onSelectCategory('silver-articles')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  Silver Articles
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={() => onSelectCategory('gift-items')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  Gift Items
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-[#F5D77F] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#store" className="hover:text-[#F5D77F] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Collections (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="serif text-xs font-bold tracking-[2.5px] uppercase text-[#F5D77F] mb-5">
              Our Collections
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300">
              <li>
                <a
                  href="#featured"
                  onClick={() => onSelectCategory('jewellery')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  92.5 Silver Necklaces & Chokers
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  onClick={() => onSelectCategory('jewellery')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  Peacock & Jhumki Earrings
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  onClick={() => onSelectCategory('jewellery')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  Antique Filigree Bangles & Kadas
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  onClick={() => onSelectCategory('silver-articles')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  Pure Silver Pooja Thalis & Diyas
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  onClick={() => onSelectCategory('silver-articles')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  Solid Silver Ganesh & Lakshmi Idols
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  onClick={() => onSelectCategory('gift-items')}
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  Royal Silver Gift Sets & Frames
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="serif text-xs font-bold tracking-[2.5px] uppercase text-[#F5D77F] mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Near Rathi Ji Ki Haweli, Sanatan School Marg, Beawar (Raj.)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a
                  href={`tel:${storeInfo.phone}`}
                  className="text-[#F5D77F] font-bold hover:text-white transition-colors tracking-wider"
                >
                  {storeInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a
                  href={`mailto:${storeInfo.email}`}
                  className="hover:text-[#F5D77F] transition-colors break-all"
                >
                  {storeInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <a
                  href={storeInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F5D77F] transition-colors"
                >
                  {storeInfo.instagram}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Back to top scroll button */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Shree Ganesham Jewellers. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2 text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span>Crafted with Purity, Designed for You</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#F5D77F] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
}
