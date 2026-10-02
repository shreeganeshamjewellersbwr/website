import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/jewelry';

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 px-6 sm:px-10 lg:px-14 bg-[#060812] text-slate-100 border-b border-slate-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-[#C5A059] text-xs font-bold tracking-[4px] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span>VOICES OF TRUST</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
          </div>

          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
            What Our Customers Say
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
            <span className="text-[#F5D77F] text-xs">❖</span>
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
          </div>

          <p className="text-slate-400 text-sm sm:text-base italic font-serif">
            A curated selection of our generations of trusted patrons
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0A0E21] border border-[#C5A059]/30 hover:border-[#F5D77F] rounded-2xl p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#C5A059]/15 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 fill-[#C5A059]/20 text-[#F5D77F]" />
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Stars & Author */}
              <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="serif text-sm font-bold text-white tracking-wide">
                    {item.author}
                  </h4>
                  <span className="text-[10px] text-[#C5A059] tracking-wider uppercase font-bold">
                    Verified Patron • {item.city}
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
