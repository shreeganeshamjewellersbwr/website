import React from 'react';
import { Award, Shield, CheckCircle, Sparkles } from 'lucide-react';

export default function AboutStudio() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Story (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          <p className="text-xs uppercase tracking-[3px] text-[#C5A059] font-bold">
            Our Heritage & Craft
          </p>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            A Legacy of Pure Trust in <span className="text-[#8F6B1E]">Beawar, Rajasthan</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-light">
            Located in the historic heart of Beawar at <strong>Osatwal Square</strong>, Shree Ganesham Jewellers has stood as a sanctuary of authentic hallmarked gold, pristine sterling silver, and royal Rajasthani karigari.
          </p>
          <p className="text-slate-500 text-xs leading-relaxed font-light">
            Every creation—from delicate 92.5 anti-tarnish silver jewellery and handcrafted puja thalis to grand 22K hallmarked bridal trousseaus—is crafted by generational master artisans with lifelong devotion.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Shield className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
              <div className="serif text-lg font-bold text-slate-900">100%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">BIS Hallmarked</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Award className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
              <div className="serif text-lg font-bold text-slate-900">92.5</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Anti-Tarnish Silver</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Sparkles className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
              <div className="serif text-lg font-bold text-slate-900">Beawar</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Osatwal Square</div>
            </div>
          </div>
        </div>

        {/* Showroom Visual (6 cols) */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
            <img
              src="/assets/images/showroom.jpg"
              alt="Shree Ganesham Jewellers Showroom Craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
              <div className="serif text-sm font-bold text-slate-900">SHREE GANESHAM JEWELLERS</div>
              <div className="text-[11px] text-slate-500 font-medium">
                Osatwal Square, Near Rathi Ji Ki Haveli, Sanatan School, Charkhi Gali, Beawar 305901
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
