import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/jewelry';

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 px-6 sm:px-10 lg:px-14 bg-[#FFFFFF] text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-[#8F6B1E] text-xs font-bold tracking-[4px] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>HEIRLOOM TESTIMONIALS</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>

          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            What Our Customers Say
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <span className="text-[#C5A059] text-xs">❖</span>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base italic font-serif">
            A curated selection of our generations of trusted patrons
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 hover:border-[#C5A059] rounded-2xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-[#C5A059]/10 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 fill-[#C5A059]/20 text-[#C5A059]" />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Stars & Author */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="serif text-sm font-bold text-slate-900 tracking-wide">
                    {item.author}
                  </h4>
                  <span className="text-[10px] text-[#8F6B1E] tracking-wider uppercase font-bold">
                    Verified Patron • {item.city}
                  </span>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
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
