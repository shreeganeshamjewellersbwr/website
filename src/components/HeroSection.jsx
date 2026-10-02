import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Gem, 
  Sparkles, 
  ShieldCheck, 
  Gift, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { storeInfo } from '../data/jewelry';

export default function HeroSection({ onSelectCategory }) {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#030408]">
      
      {/* Pristine Clean Background Image (No baked text) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_background.jpg"
          alt="Shree Ganesham Jewellers Royal Stage"
          className="w-full h-full object-cover object-[center_right] sm:object-center"
        />
        {/* Cinematic Vignettes for flawless text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030408]/95 via-[#030408]/75 md:via-[#030408]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-transparent to-black/60"></div>
      </div>

      {/* Main Hero Typography & Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-32 sm:pt-36 lg:pt-40 pb-16 flex-1 flex items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Top Tagline */}
          <div className="flex items-center gap-2 text-[#C5A059] text-xs sm:text-sm font-semibold tracking-[3.5px] uppercase mb-3.5">
            <span className="text-[#F5D77F]">✦</span>
            <span>CRAFTED WITH PURITY, DESIGNED FOR YOU</span>
            <span className="text-[#F5D77F]">✦</span>
          </div>

          {/* Real Brand Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            <span className="serif text-gold-bright block drop-shadow-2xl font-bold">
              Shree Ganesham
            </span>
            <span className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[8px] sm:tracking-[12px] uppercase text-[#F5D77F] block mt-2.5 drop-shadow-lg">
              JEWELLERS
            </span>
          </h1>

          {/* Elegant Gold Flourish Ornament */}
          <div className="flex items-center gap-3 my-5 max-w-sm">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
            <span className="text-[#F5D77F] text-sm">❖</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-light drop-shadow">
            Discover our exquisite collection of 92.5 silver jewellery, pure silver articles, anti-tarnish jewellery and premium gift items in Beawar.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#collections"
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory('all');
                document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="explore-btn"
            >
              EXPLORE COLLECTION <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href="#store"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('store')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full text-xs font-semibold tracking-[2px] uppercase text-slate-200 hover:text-[#F5D77F] border border-slate-700 hover:border-[#C5A059] transition-all backdrop-blur-md bg-black/40 shadow-lg"
            >
              Visit Showroom
            </a>
          </div>

        </motion.div>

      </div>

      {/* Bottom Feature & Contact Ribbon */}
      <div className="relative z-10 w-full bg-[#060810]/95 border-t border-[#C5A059]/30 backdrop-blur-md py-4 px-6 sm:px-10 lg:px-14 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
            
            <div 
              className="flex items-center gap-2.5 group cursor-pointer" 
              onClick={() => {
                onSelectCategory('jewellery');
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-black/70 border border-[#C5A059]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#F5D77F] transition-colors">
                <Gem className="w-4 h-4 text-[#F5D77F]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white group-hover:text-[#F5D77F] transition-colors">
                  92.5 SILVER
                </span>
                <span className="text-[9px] text-[#C5A059] tracking-wider uppercase">
                  JEWELLERY
                </span>
              </div>
            </div>

            <div 
              className="flex items-center gap-2.5 group cursor-pointer" 
              onClick={() => {
                onSelectCategory('silver-articles');
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-black/70 border border-[#C5A059]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#F5D77F] transition-colors">
                <Sparkles className="w-4 h-4 text-[#F5D77F]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white group-hover:text-[#F5D77F] transition-colors">
                  PURE SILVER
                </span>
                <span className="text-[9px] text-[#C5A059] tracking-wider uppercase">
                  ARTICLES
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-black/70 border border-[#C5A059]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#F5D77F] transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#F5D77F]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white group-hover:text-[#F5D77F] transition-colors">
                  ANTI-TARNISH
                </span>
                <span className="text-[9px] text-[#C5A059] tracking-wider uppercase">
                  POLISHED
                </span>
              </div>
            </div>

            <div 
              className="flex items-center gap-2.5 group cursor-pointer" 
              onClick={() => {
                onSelectCategory('gift-items');
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-black/70 border border-[#C5A059]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#F5D77F] transition-colors">
                <Gift className="w-4 h-4 text-[#F5D77F]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white group-hover:text-[#F5D77F] transition-colors">
                  PREMIUM
                </span>
                <span className="text-[9px] text-[#C5A059] tracking-wider uppercase">
                  GIFT ITEMS
                </span>
              </div>
            </div>

          </div>

          {/* Right Showroom Quick Info */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800 w-full lg:w-auto text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span className="text-slate-300 font-light text-[11px] sm:text-xs">
                {storeInfo.shortAddress}
              </span>
            </div>
            <a
              href={`tel:${storeInfo.phone}`}
              className="flex items-center gap-2 text-[#F5D77F] font-bold hover:text-white transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/60 flex items-center justify-center">
                <Phone className="w-3 h-3 text-[#F5D77F]" />
              </div>
              <span className="tracking-wider">{storeInfo.phone}</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
