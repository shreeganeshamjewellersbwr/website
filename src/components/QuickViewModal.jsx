import React from 'react';
import { X, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { storeInfo } from '../data/jewelry';

export default function QuickViewModal({ item, onClose }) {
  if (!item) return null;

  const handleWhatsApp = () => {
    const msg = `Namaste Shree Ganesham Jewellers (Beawar),%0A%0AI am interested in viewing this piece from your collection:%0A*${item.name}* (SKU: ${item.id})%0A- Weight: ${item.weight || 'Available on request'}%0A- Purity: ${item.purity}%0A- Price: ${item.price || item.priceEstimate || 'On Inquiry'}%0A%0APlease share available designs and booking details at Osatwal Square showroom.`;
    window.open(`https://wa.me/91${storeInfo.phone}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#090D1C] rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 text-slate-100 border border-[#C5A059]/50 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#12182E] text-slate-400 hover:text-white hover:bg-slate-800 border border-[#C5A059]/30 flex items-center justify-center transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          
          {/* Product Image */}
          <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden bg-black border border-[#C5A059]/30">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-between text-xs space-y-4">
            <div>
              <span className="text-[#C5A059] font-bold uppercase tracking-widest text-[10px] block mb-1">
                {item.categoryLabel || 'Shree Ganesham Collection'}
              </span>
              <h3 className="serif text-xl sm:text-2xl font-bold text-white leading-snug mb-2">
                {item.name}
              </h3>
              <div className="serif text-xl font-bold text-[#F5D77F] mb-3">
                {item.price || item.priceEstimate}
              </div>

              <div className="bg-[#050711] rounded-xl p-3.5 border border-[#C5A059]/25 space-y-1.5 text-xs mb-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Purity:</span>
                  <span className="font-semibold text-white">{item.purity}</span>
                </div>
                {item.weight && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Approx. Weight:</span>
                    <span className="font-semibold text-white">{item.weight}</span>
                  </div>
                )}
                {item.stones && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Crafting / Finish:</span>
                    <span className="font-semibold text-[#F5D77F] text-right max-w-[160px]">{item.stones}</span>
                  </div>
                )}
              </div>

              <p className="text-slate-300 leading-relaxed font-light text-xs">
                {item.description}
              </p>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/40 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Inquire on WhatsApp with SGJ
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
