import React, { useState } from 'react';
import { Calculator, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { bullionRates, storeInfo } from '../data/jewelry';

export default function PriceCalculator() {
  const [purity, setPurity] = useState('silver');
  const [weight, setWeight] = useState(50);
  const [makingPercent, setMakingPercent] = useState(12);

  let ratePerGram = 0;
  if (purity === '24k') {
    ratePerGram = bullionRates.gold24k / 10;
  } else if (purity === '22k') {
    ratePerGram = bullionRates.gold22k / 10;
  } else if (purity === '18k') {
    ratePerGram = bullionRates.gold18k / 10;
  } else if (purity === 'silver') {
    ratePerGram = bullionRates.silver999 / 1000;
  }

  const metalCost = weight * ratePerGram;
  const makingCost = metalCost * (makingPercent / 100);
  const subtotal = metalCost + makingCost;
  const gst = subtotal * 0.03;
  const finalTotal = subtotal + gst;

  const handleWhatsAppQuote = () => {
    const text = `Hello Shree Ganesham Jewellers (Beawar),%0A%0AI used your website price calculator and would like to lock in this estimate:%0A- Metal: ${purity.toUpperCase()}%0A- Weight: ${weight}g%0A- Making Charges: ${makingPercent}%%0A- Estimated Total: ₹ ${Math.round(finalTotal).toLocaleString('en-IN')}%0A%0APlease confirm showroom availability at Osatwal Square, Beawar.`;
    window.open(`https://wa.me/91${storeInfo.phone}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-14 bg-[#060812] text-slate-100 border-b border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[4px] text-[#C5A059] font-bold mb-2">
            100% Price Transparency
          </p>
          <h2 className="serif text-3xl sm:text-4xl font-bold text-white mb-2">
            Jewellery Price Calculator
          </h2>
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <span className="text-[#F5D77F] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Calculate exact metal price, making charges, and statutory 3% GST transparently before visiting our Beawar showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#0A0E1F] p-7 rounded-2xl border border-[#C5A059]/35 shadow-2xl space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 font-bold mb-2">
                Metal Purity Standard
              </label>
              <select
                value={purity}
                onChange={(e) => setPurity(e.target.value)}
                className="w-full bg-[#050711] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-sm text-[#F5D77F] font-medium focus:outline-none focus:border-[#F5D77F]"
              >
                <option value="silver">Silver 999 / 925 (Pure Chandi, Articles & Jewellery)</option>
                <option value="22k">22 Karat (916 BIS Hallmarked Gold) - Standard</option>
                <option value="24k">24 Karat (999 Pure Bullion / Gold Coins)</option>
                <option value="18k">18 Karat (750 Diamond Mount Gold)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 font-bold mb-2">
                <span>Gross Weight</span>
                <span className="text-[#F5D77F] font-bold text-sm">{weight} Grams</span>
              </div>
              <input
                type="range"
                min="1"
                max="250"
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg cursor-pointer accent-[#F5D77F]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1g (Lightweight)</span>
                <span>50g (Jewellery Set)</span>
                <span>250g+ (Puja Thali / Articles)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-300 font-bold mb-2">
                Craftsmanship / Making Charges
              </label>
              <select
                value={makingPercent}
                onChange={(e) => setMakingPercent(parseFloat(e.target.value))}
                className="w-full bg-[#050711] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-sm text-[#F5D77F] font-medium focus:outline-none focus:border-[#F5D77F]"
              >
                <option value="9">Standard Cast (9% - Bangles & Silver Articles)</option>
                <option value="12">Fine Designer Jewellery (12% - Necklaces & Rings)</option>
                <option value="16">Heritage Rajasthani Jadau (16% - Aad, Borla, Meenakari)</option>
                <option value="19">Master Antique Temple Art (19% - Intricate Karigari)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>SGJ Promise: You pay metal price strictly on net metal weight.</span>
            </div>
          </div>

          {/* Breakdown Receipt Slip (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F152E] to-[#090D1C] p-7 rounded-2xl border border-[#C5A059]/50 shadow-2xl space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="serif text-sm font-bold text-white block">ESTIMATE BREAKDOWN</span>
                <span className="text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold">Shree Ganesham Jewellers</span>
              </div>
              <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded font-bold">
                BIS Hallmarked
              </span>
            </div>

            <div className="space-y-3 pt-1">
              <div className="flex justify-between text-slate-300">
                <span>Base Rate:</span>
                <span className="font-semibold text-white">₹ {ratePerGram.toFixed(1)} / g</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Net Weight:</span>
                <span className="font-semibold text-white">{weight.toFixed(2)} g</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Pure Metal Cost:</span>
                <span className="font-semibold text-white">
                  ₹ {Math.round(metalCost).toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Making Charges ({makingPercent}%):</span>
                <span className="font-semibold text-white">
                  ₹ {Math.round(makingCost).toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800">
                <span>GST (3% Indian Bullion Tax):</span>
                <span className="font-semibold text-white">
                  ₹ {Math.round(gst).toLocaleString('en-IN')}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F5D77F] font-bold block">
                    Estimated Total
                  </span>
                  <span className="text-[10px] text-slate-400">All taxes included</span>
                </div>
                <div className="serif text-2xl font-bold text-[#F5D77F]">
                  ₹ {Math.round(finalTotal).toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppQuote}
              className="w-full mt-3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/40 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Lock Estimate on WhatsApp
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
