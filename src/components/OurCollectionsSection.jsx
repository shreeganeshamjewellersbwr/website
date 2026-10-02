import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mainCollections } from '../data/jewelry';

export default function OurCollectionsSection({ onSelectCategory }) {
  return (
    <section id="collections" className="w-full py-20 px-6 sm:px-10 lg:px-14 bg-[#030408] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="serif text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#F5D77F] mb-2">
            OUR COLLECTIONS
          </h2>
          {/* Flourish */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <span className="text-[#F5D77F] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>
          <p className="text-slate-400 text-sm italic font-serif">
            Discover elegance in every form
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
              className="group relative rounded-2xl overflow-hidden bg-[#080D1D] border border-[#C5A059]/30 hover:border-[#F5D77F] transition-all duration-500 shadow-2xl hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)] hover:-translate-y-2 cursor-pointer flex flex-col justify-end min-h-[420px]"
            >
              {/* Image with subtle zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Dark Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030408] via-[#030408]/40 to-transparent"></div>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center">
                <h3 className="serif text-lg sm:text-xl font-bold tracking-[2px] uppercase text-white group-hover:text-[#F5D77F] transition-colors mb-2">
                  {col.title}
                </h3>
                
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[2px] uppercase text-[#F5D77F] group-hover:text-white transition-colors mt-2">
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
