import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { mainCollections } from '../data/jewelry';

export default function OurCollectionsSection({ onSelectCategory }) {
  return (
    <section id="collections" className="w-full py-24 px-6 sm:px-10 lg:px-14 bg-[#FFFFFF] text-slate-900 border-b border-slate-100 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-[#8F6B1E] text-xs font-bold tracking-[4px] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>SIGNATURE ARCHIVES</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>

          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Our Collections
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <span className="text-[#C5A059] text-xs">❖</span>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base italic font-serif">
            Discover elegance in every form, crafted with unmatched purity
          </p>
        </div>

        {/* 3 Main Collection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {mainCollections.map((col) => (
            <div
              key={col.id}
              onClick={() => {
                onSelectCategory(col.category);
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#C5A059] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#C5A059]/20 hover:-translate-y-2 cursor-pointer flex flex-col justify-end min-h-[440px]"
            >
              {/* Product Image */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Elegant Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Bottom Floating White-Glass Banner */}
              <div className="relative z-10 m-5 p-6 rounded-xl bg-black/60 backdrop-blur-md border border-[#C5A059]/40 group-hover:border-[#F5D77F] group-hover:bg-black/80 text-center transition-all">
                <span className="text-[10px] text-[#F5D77F] tracking-[2px] uppercase font-bold block mb-1">
                  {col.tagline}
                </span>
                
                <h3 className="serif text-lg sm:text-xl font-bold tracking-[1.5px] uppercase text-white mb-3">
                  {col.title}
                </h3>
                
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-[#F5D77F] group-hover:text-white transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
