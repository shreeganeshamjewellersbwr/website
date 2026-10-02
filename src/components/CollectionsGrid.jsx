import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { jewelryCollection } from '../data/jewelry';

export default function CollectionsGrid({
  selectedCategory,
  onSelectCategory,
  onOpenQuickView
}) {
  const categories = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'silver-articles', label: 'Pure Silver Articles' },
    { id: 'silver-jewellery', label: '92.5 Silver Jewellery' },
    { id: 'gift-items', label: 'Gift Items' },
    { id: 'rajputi', label: 'Rajputi Heritage' },
    { id: 'bridal', label: 'Bridal Jadau & Polki' },
    { id: 'gold', label: 'Pure 916 Gold' },
    { id: 'diamond', label: 'Certified Diamonds' }
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? jewelryCollection
      : jewelryCollection.filter((item) => item.category === selectedCategory);

  const handleWhatsAppInquiry = (item) => {
    const msg = `Namaste Shree Ganesham Jewellers (Beawar),%0A%0AI am interested in viewing this piece from your collection:%0A*${item.name}* (SKU: ${item.id})%0A%0APlease share available weights, hallmarks, and current pricing.`;
    window.open(`https://wa.me/919414000000?text=${msg}`, '_blank');
  };

  return (
    <section id="collections" className="py-24 px-6 lg:px-12 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[3px] text-[#C5A059] font-bold mb-2">
            Exquisite Artistry
          </p>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            Our Curated Collections
          </h2>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            Handcrafted with devotion. Explore certified 92.5 sterling silver, pure silver puja articles, festive gift items, and 916 BIS hallmark gold.
          </p>
        </div>

        {/* Filter Tabs on Clean White */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`filter-tab-btn-white ${
                selectedCategory === cat.id ? 'active' : ''
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="product-card-white flex flex-col justify-between group"
            >
              {/* Product Image Frame */}
              <div
                onClick={() => onOpenQuickView(item)}
                className="relative overflow-hidden aspect-square bg-slate-50 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Tag */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#8F6B1E] text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-200 uppercase tracking-wider shadow-sm">
                  {item.tag}
                </span>

                {/* Purity */}
                <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                  {item.purity}
                </span>

                {/* Quick View Icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-1">
                    {item.categoryLabel}
                  </div>
                  <h3
                    onClick={() => onOpenQuickView(item)}
                    className="serif text-base font-bold text-slate-900 group-hover:text-[#C5A059] transition-colors leading-snug mb-2 cursor-pointer"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400">
                      Weight:{' '}
                      <span className="text-slate-700 font-semibold">{item.weight}</span>
                    </div>
                    <div className="text-[#8F6B1E] serif font-bold text-base mt-0.5">
                      {item.priceEstimate}*
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppInquiry(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Inquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
