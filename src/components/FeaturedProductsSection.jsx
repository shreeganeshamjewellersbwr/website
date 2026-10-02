import React, { useState } from 'react';
import { ShoppingBag, Eye, ArrowRight, Sparkles } from 'lucide-react';
import { featuredProducts } from '../data/jewelry';

export default function FeaturedProductsSection({ onOpenQuickView }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all'
    ? featuredProducts
    : featuredProducts.filter((p) => p.category === activeFilter);

  return (
    <section id="featured" className="w-full py-20 px-6 sm:px-10 lg:px-14 bg-[#05070E] border-b border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="serif text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#F5D77F] mb-2">
            FEATURED PRODUCTS
          </h2>
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <span className="text-[#F5D77F] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>
          <p className="text-slate-400 text-sm italic font-serif">
            A curated selection of our finest pieces
          </p>
        </div>

        {/* Filter Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-800/80">
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#C5A059] text-black font-bold shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0E1324] text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveFilter('jewellery')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeFilter === 'jewellery'
                  ? 'bg-[#C5A059] text-black font-bold shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0E1324] text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              JEWELLERY
            </button>
            <button
              onClick={() => setActiveFilter('silver-articles')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeFilter === 'silver-articles'
                  ? 'bg-[#C5A059] text-black font-bold shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0E1324] text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              SILVER ARTICLES
            </button>
            <button
              onClick={() => setActiveFilter('gift-items')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeFilter === 'gift-items'
                  ? 'bg-[#C5A059] text-black font-bold shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0E1324] text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              GIFT ITEMS
            </button>
          </div>

          {/* View All Link */}
          <button
            onClick={() => setActiveFilter('all')}
            className="text-xs font-bold tracking-[2px] uppercase text-[#F5D77F] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* 5-Column Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#090D1C] rounded-xl overflow-hidden border border-[#C5A059]/30 hover:border-[#F5D77F] transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex flex-col justify-between"
            >
              {/* Product Image Area */}
              <div
                onClick={() => onOpenQuickView(product)}
                className="relative aspect-square overflow-hidden bg-slate-950 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Badge Tag */}
                {product.tag && (
                  <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm border border-[#C5A059]/50 rounded px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#F5D77F] uppercase">
                    {product.tag}
                  </div>
                )}

                {/* Quick View Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="w-9 h-9 rounded-full bg-[#F5D77F] text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Product Details & Footer */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    onClick={() => onOpenQuickView(product)}
                    className="serif text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-[#F5D77F] transition-colors line-clamp-1 cursor-pointer"
                    title={product.name}
                  >
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 mt-0.5 tracking-wider uppercase">
                    {product.purity}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#F5D77F] tracking-wide">
                    {product.price}
                  </span>
                  
                  {/* Shopping Bag / Quick Inquiry Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuickView(product);
                    }}
                    className="w-7 h-7 rounded-md border border-[#C5A059]/50 hover:border-[#F5D77F] hover:bg-[#C5A059]/20 text-[#F5D77F] flex items-center justify-center transition-all"
                    title="Quick Inquire"
                    aria-label="Quick Inquire"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
