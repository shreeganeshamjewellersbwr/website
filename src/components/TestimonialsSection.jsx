import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/jewelry';

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 px-6 sm:px-10 lg:px-14 bg-[#070912] border-b border-slate-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="serif text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#F5D77F] mb-2">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <span className="text-[#F5D77F] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>
          <p className="text-slate-400 text-sm italic font-serif">
            A curated selection of our generations
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0D1224]/90 border border-[#C5A059]/25 hover:border-[#F5D77F]/60 rounded-2xl p-7 lg:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Quote Icon */}
                <div className="mb-4 text-[#F5D77F]">
                  <Quote className="w-7 h-7 fill-[#C5A059]/20 text-[#F5D77F]" />
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Stars & Author */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="serif text-sm font-bold text-white tracking-wide">
                    {item.author}
                  </h4>
                  <span className="text-[10px] text-[#C5A059] tracking-wider uppercase font-semibold">
                    Verified Customer • {item.city}
                  </span>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 text-[#F5D77F]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F5D77F]" />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
