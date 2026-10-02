import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { storyPillars } from '../data/jewelry';

export default function StoryPillarsSection({ onSelectCategory }) {
  return (
    <section className="w-full py-20 px-6 sm:px-10 lg:px-14 bg-[#FFFFFF] text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-[#8F6B1E] text-xs font-bold tracking-[4px] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>HEIRLOOM PILLARS</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>

          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Tradition & Elegance
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <span className="text-[#C5A059] text-xs">❖</span>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base italic font-serif">
            Creating timeless memories and sacred heirlooms for every generation
          </p>
        </div>

        {/* 3 Visual Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {storyPillars.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => {
                const map = {
                  1: 'jewellery',
                  2: 'silver-articles',
                  3: 'gift-items'
                };
                onSelectCategory(map[pillar.id] || 'all');
                document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[16/11] border border-slate-200 hover:border-[#C5A059] transition-all duration-500 shadow-md hover:shadow-2xl hover:shadow-[#C5A059]/20 hover:-translate-y-2 cursor-pointer bg-slate-900"
            >
              {/* Background Image */}
              <img
                src={pillar.image}
                alt={pillar.titleHighlight}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Dark Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h3 className="serif text-lg sm:text-xl font-bold text-white group-hover:text-[#F5D77F] transition-colors leading-tight">
                  <span className="block text-slate-300 text-xs sm:text-sm font-normal tracking-wide uppercase">{pillar.titlePrefix}</span>
                  <span className="text-white group-hover:text-[#F5D77F]">{pillar.titleHighlight}</span>
                </h3>

                <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-[2px] uppercase text-[#F5D77F] group-hover:text-white mt-2 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
