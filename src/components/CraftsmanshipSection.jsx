import React from 'react';
import { ArrowRight, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="w-full py-20 px-6 sm:px-10 lg:px-14 bg-[#0A0C14] border-b border-slate-900 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Macro Bangle Photography */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30 group">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <img
                src="/assets/images/craftsmanship_bangles.jpg"
                alt="Handcrafted Silver Bangles"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            {/* Subtle hallmarked badge */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#C5A059]/50 rounded-full px-4 py-1.5 flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#F5D77F] uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              925 Hallmarked Certified
            </div>
          </div>

          {/* Right: Elegant Craftsmanship Narrative Card */}
          <div className="lg:col-span-5 relative bg-gradient-to-br from-[#1C1710] via-[#14100A] to-[#0A0704] border border-[#C5A059]/40 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-center">
            
            {/* Subtle Background Watermark */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="#C5A059" className="w-full h-full">
                <circle cx="50" cy="50" r="45" stroke="#C5A059" strokeWidth="1" fill="none" />
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#C5A059" strokeWidth="0.7" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Category Tag */}
              <div className="flex items-center gap-2 text-[#C5A059] text-[11px] font-bold tracking-[3px] uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
                <span>FINE CRAFTSMANSHIP</span>
              </div>

              {/* Headline */}
              <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EAD4] leading-tight mb-5">
                Handcrafted <br />
                <span className="italic text-[#F5D77F] font-normal">With Devotion</span>
              </h2>

              {/* Decorative Divider */}
              <div className="flex items-center gap-3 my-4 max-w-xs">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C5A059] to-transparent"></div>
                <span className="text-[#F5D77F] text-xs">❖</span>
              </div>

              {/* Paragraph */}
              <p className="text-[#D4C5B0] text-sm sm:text-base leading-relaxed mb-8 font-light">
                Each piece is a reflection of tradition, artistry and uncompromising purity. Discover jewellery and silver articles that carry a legacy of trust.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8 pt-4 border-t border-[#C5A059]/20 text-xs text-[#E5D7C2]">
                <div className="flex items-center gap-2">
                  <span className="text-[#F5D77F]">✓</span> 100% 92.5 Sterling Silver
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F5D77F]">✓</span> Rhodium Anti-Tarnish
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F5D77F]">✓</span> Pure 999 Pooja Articles
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F5D77F]">✓</span> Heritage Rajasthani Karigari
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#store"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('store')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold tracking-[2.5px] uppercase text-[#1C1710] bg-[#F5D77F] hover:bg-white transition-all shadow-lg hover:shadow-[#F5D77F]/30"
                >
                  <span>OUR STORY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
