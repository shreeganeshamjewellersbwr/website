import React from 'react';
import { storyPillars } from '../data/jewelry';

export default function StoryPillarsSection({ onSelectCategory }) {
  return (
    <section className="w-full py-12 px-6 sm:px-10 lg:px-14 bg-[#030408] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        
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
              className="group relative rounded-xl overflow-hidden aspect-[16/10] border border-[#C5A059]/30 hover:border-[#F5D77F] transition-all duration-500 shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={pillar.image}
                alt={pillar.titleHighlight}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              
              {/* Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h3 className="serif text-lg sm:text-xl font-bold text-white group-hover:text-[#F5D77F] transition-colors leading-tight">
                  <span className="block text-slate-300 text-sm font-normal">{pillar.titlePrefix}</span>
                  <span>{pillar.titleHighlight}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
