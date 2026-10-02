import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroStageCards } from '../data/jewelry';

export default function Hero3DStage({ onSelectCategory }) {
  // Center is Pure Silver Articles (index 1)
  const [activeIndex, setActiveIndex] = useState(1);
  const totalCards = heroStageCards.length;

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const getCardStyle = (index) => {
    // Calculate relative offset from activeIndex: -1 (left), 0 (center), 1 (right)
    let offset = (index - activeIndex) % totalCards;
    if (offset < -1) offset += totalCards;
    if (offset > 1) offset -= totalCards;

    if (offset === 0) {
      // Center Active Card
      return {
        x: 0,
        y: -10,
        z: 100,
        rotateY: 0,
        scale: 1.08,
        opacity: 1,
        zIndex: 10,
        filter: 'brightness(1.05) contrast(1.02)',
        border: '2px solid rgba(245, 215, 127, 0.9)',
        boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.45)'
      };
    } else if (offset === 1) {
      // Right Card
      return {
        x: 260,
        y: 12,
        z: -30,
        rotateY: -16,
        scale: 0.88,
        opacity: 0.82,
        zIndex: 4,
        filter: 'brightness(0.75)',
        border: '1.5px solid rgba(197, 160, 89, 0.6)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.85), 0 0 15px rgba(197, 160, 89, 0.2)'
      };
    } else if (offset === -1) {
      // Left Card
      return {
        x: -260,
        y: 12,
        z: -30,
        rotateY: 16,
        scale: 0.88,
        opacity: 0.82,
        zIndex: 4,
        filter: 'brightness(0.75)',
        border: '1.5px solid rgba(197, 160, 89, 0.6)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.85), 0 0 15px rgba(197, 160, 89, 0.2)'
      };
    } else {
      return {
        x: 0,
        y: 50,
        z: -200,
        rotateY: 0,
        scale: 0.5,
        opacity: 0,
        zIndex: 1,
        filter: 'brightness(0.3)',
        border: '1px solid #C5A059',
        boxShadow: 'none'
      };
    }
  };

  return (
    <section id="home" className="hero-wrapper w-full overflow-hidden">
      
      {/* Top Header Tagline & Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hero-header-text pt-2 px-4"
      >
        <div className="hero-tagline flex items-center justify-center gap-2">
          <span>✦</span>
          <span>CRAFTED WITH PURITY, DESIGNED FOR YOU</span>
          <span>✦</span>
        </div>

        <h1 className="hero-title serif text-gold-bright">
          Shree Ganesham Jewellers
        </h1>

        <div className="hero-subtags">
          <span>92.5 SILVER JEWELLERY</span>
          <span className="text-[#C5A059] font-bold">|</span>
          <span>PURE SILVER ARTICLES</span>
          <span className="text-[#C5A059] font-bold">|</span>
          <span>ANTI-TARNISH</span>
          <span className="text-[#C5A059] font-bold">|</span>
          <span>GIFT ITEMS</span>
        </div>
      </motion.div>

      {/* 3D Stage & 3 Cards Presentation */}
      <div className="w-full max-w-5xl mx-auto px-4 my-4 relative">
        <div className="carousel-3d-stage">
          
          {/* Left Arrow */}
          <button
            onClick={prevCard}
            className="nav-arrow-btn nav-arrow-left"
            aria-label="Previous Jewellery"
          >
            <ChevronLeft className="w-5 h-5 text-[#F5D77F]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextCard}
            className="nav-arrow-btn nav-arrow-right"
            aria-label="Next Jewellery"
          >
            <ChevronRight className="w-5 h-5 text-[#F5D77F]" />
          </button>

          {/* Soft Reflective Stage Base Floor (Below Cards) */}
          <div className="stage-floor-reflection"></div>

          {/* 3D Cards Deck */}
          <div className="cards-deck-3d">
            {heroStageCards.map((card, index) => {
              const style = getCardStyle(index);
              const isCenter = (index - activeIndex + totalCards) % totalCards === 0;

              return (
                <motion.div
                  key={card.id}
                  animate={style}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(index);
                    } else {
                      onSelectCategory(card.category);
                      document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="deck-card group"
                >
                  <div className="deck-card-img-wrap">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>

                  {/* Clean Bottom Label Banner */}
                  <div className="deck-card-banner">
                    <span>{card.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Explore Collection Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-center pb-2 z-20"
      >
        <a
          href="#collections"
          onClick={() => onSelectCategory('all')}
          className="explore-btn"
        >
          EXPLORE COLLECTION <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

    </section>
  );
}
