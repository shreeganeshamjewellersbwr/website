import React, { useState } from 'react';
import { ShoppingBag, Eye, ArrowRight, Sparkles } from 'lucide-react';
import { featuredProducts } from '../data/jewelry';

export default function FeaturedProductsSection({ onOpenQuickView }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all'
    ? featuredProducts
    : featuredProducts.filter((p) => p.category === activeFilter);

  return (
    <section id="featured" className="w-full py-24 px-6 sm:px-10 lg:px-14 bg-[#F8F9FB] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-[#8F6B1E] text-xs font-bold tracking-[4px] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>EXCLUSIVE CATALOG</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>

          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Featured Products
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <span className="text-[#C5A059] text-xs">❖</span>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base italic font-serif">
            A curated selection of our finest hallmarked jewellery and articles
          </p>
        </div>

        {/* Filter Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-4 border-b border-slate-200">
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#C5A059] text-black shadow-md shadow-[#C5A059]/30'
                  : 'bg-white text-slate-700 hover:text-black border border-slate-200 hover:border-slate-300'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveFilter('jewellery')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === 'jewellery'
                  ? 'bg-[#C5A059] text-black shadow-md shadow-[#C5A059]/30'
                  : 'bg-white text-slate-700 hover:text-black border border-slate-200 hover:border-slate-300'
              }`}
            >
              JEWELLERY
            </button>
            <button
              onClick={() => setActiveFilter('silver-articles')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === 'silver-articles'
                  ? 'bg-[#C5A059] text-black shadow-md shadow-[#C5A059]/30'
                  : 'bg-white text-slate-700 hover:text-black border border-slate-200 hover:border-slate-300'
              }`}
            >
              SILVER ARTICLES
            </button>
            <button
              onClick={() => setActiveFilter('gift-items')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === 'gift-items'
                  ? 'bg-[#C5A059] text-black shadow-md shadow-[#C5A059]/30'
                  : 'bg-white text-slate-700 hover:text-black border border-slate-200 hover:border-slate-300'
              }`}
            >
              GIFT ITEMS
            </button>
          </div>

          {/* View All Link */}
          <button
            onClick={() => setActiveFilter('all')}
            className="text-xs font-bold tracking-[2px] uppercase text-[#8F6B1E] hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer"
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
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#C5A059] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#C5A059]/10 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Product Image Area */}
              <div
                onClick={() => onOpenQuickView(product)}
                className="relative aspect-square overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Badge Tag */}
                {product.tag && (
                  <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm border border-[#C5A059]/50 rounded px-2 py-0.5 text-[9px] font-bold tracking-wider text-[#F5D77F] uppercase">
                    {product.tag}
                  </div>
                )}

                {/* Quick View Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="w-10 h-10 rounded-full bg-[#C5A059] text-black font-bold flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Product Details & Footer */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    onClick={() => onOpenQuickView(product)}
                    className="serif text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#8F6B1E] transition-colors line-clamp-1 cursor-pointer"
                    title={product.name}
                  >
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-0.5 tracking-wider uppercase font-medium flex items-center justify-between">
                    <span>{product.purity}</span>
                    {product.weight && <span className="font-semibold text-[#8F6B1E]">{product.weight}</span>}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-[#8F6B1E] tracking-tight">
                    {product.price}
                  </span>
                  
                  {/* Shopping Bag / Quick Inquiry Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuickView(product);
                    }}
                    className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#C5A059] text-slate-700 hover:text-black border border-slate-200 hover:border-[#C5A059] flex items-center justify-center transition-all cursor-pointer shadow-sm"
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
