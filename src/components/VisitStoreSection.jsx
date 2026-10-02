import React from 'react';
import { MapPin, Phone, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { storeInfo } from '../data/jewelry';

export default function VisitStoreSection() {
  return (
    <section id="store" className="w-full py-20 px-6 sm:px-10 lg:px-14 bg-[#030408] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Luxury Showroom Interior Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30 group">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              <img
                src="/assets/images/showroom.jpg"
                alt="Shree Ganesham Jewellers Showroom"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Showroom Badge */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-[#C5A059]/50 rounded-lg px-4 py-2 text-xs font-semibold text-[#F5D77F]">
              <span>Experience Royal Hospitality in Beawar</span>
            </div>
          </div>

          {/* Right: Showroom Details & Contact */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 text-[#C5A059] text-[11px] font-bold tracking-[3px] uppercase mb-2">
              <span>VISIT OUR STORE</span>
            </div>

            <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              A Heritage <br />
              <span className="serif italic text-[#F5D77F] font-normal">In Beawar</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Located near Rathi Ji Ki Haveli, Shree Ganesham Jewellers has been a trusted name in Beawar for decades, offering pure silver jewellery, exquisite articles and memorable gifts.
            </p>

            {/* Directions Button */}
            <div className="mb-8">
              <a
                href={storeInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold tracking-[2.5px] uppercase text-[#F5D77F] border border-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all shadow-lg"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Information Rows */}
            <div className="space-y-4 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F5D77F]" />
                </div>
                <div>
                  <p className="text-white font-medium">Shree Ganesham Jewellers</p>
                  <p className="text-slate-400 font-light mt-0.5">{storeInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#F5D77F]" />
                </div>
                <a
                  href={`tel:${storeInfo.phone}`}
                  className="text-[#F5D77F] font-bold hover:text-white transition-colors tracking-wider"
                >
                  {storeInfo.phone} / {storeInfo.formattedPhone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#F5D77F]" />
                </div>
                <span className="text-slate-300">{storeInfo.hours}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#F5D77F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <a
                  href={storeInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-[#F5D77F] transition-colors"
                >
                  {storeInfo.instagram}
                </a>
              </div>

            </div>

            {/* Bottom Flourish */}
            <div className="flex items-center gap-3 mt-8 max-w-xs">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C5A059] to-transparent"></div>
              <span className="text-[#F5D77F] text-xs">❖</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-[#C5A059] to-transparent"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
