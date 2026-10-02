import React from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';
import { bullionRates } from '../data/jewelry';

export default function LiveBullionTicker() {
  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <section className="bg-[#050811] py-4 px-6 border-y border-[#C5A059]/30 text-xs text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="uppercase tracking-[2px] text-[#C5A059] font-bold">
            Live Bullion Benchmark:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Gold 24K:</span>
            <strong className="text-[#F5D77F] font-bold text-sm">
              ₹ {bullionRates.gold24k.toLocaleString('en-IN')}
            </strong>
            <span className="text-[10px] text-slate-500">/10g</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Gold 22K (916):</span>
            <strong className="text-[#F5D77F] font-bold text-sm">
              ₹ {bullionRates.gold22k.toLocaleString('en-IN')}
            </strong>
            <span className="text-[10px] text-slate-500">/10g</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Silver 999:</span>
            <strong className="text-slate-100 font-bold text-sm">
              ₹ {bullionRates.silver999.toLocaleString('en-IN')}
            </strong>
            <span className="text-[10px] text-slate-500">/kg</span>
          </div>
        </div>

        <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span>Updated {today} • Beawar Mandi</span>
        </div>

      </div>
    </section>
  );
}
