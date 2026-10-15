import React from 'react';
import { useNavigate } from 'react-router-dom';

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

import Prod3 from '../../assets/Prod3.png';
import Prod4 from '../../assets/Prod4.png';

const products = [
  {
    id: 1,
    topRibbon: '★ Popular Choice',
    isFeatured: true,
    image: Prod3,
    topBadges: ["Clinicians' Choice"],
    category: 'DAILY CELLULAR REJUVENATION',
    title: 'GUNALIFE GUNA-AGE+ Skin Transformation Longevity',
    description:
      'Scientifically formulated daily skin transformation supplement designed to support skin health, hydration, elasticity, and radiance while promoting a smoother, brighter, and more youthful-looking complexion from within.',
    mrp: '₹2,999',
    price: '₹1,999.00',
    perServing: '≈ ₹46.64/serving',
    discountBadge: '30% OFF',
    subtext: 'Free shipping included',
    features: [
      '✓ Supports healthy ageing and cellular health',
      '✓ Antioxidant support for everyday wellness',
      '✓ Helps support skin hydration and elasticity',
      '✓ Designed for daily longevity support',
    ],
    buttonText: 'Add to Cart',
    bottomLink: '',
    imageScaleClass: 'scale-110 sm:scale-125', // Zoom adjustment specifically for Prod3
  },
  {
    id: 2,
    topRibbon: '★ POPULAR CHOICE',
    isFeatured: false,
    image: Prod4,
    topBadges: ['Anti-Aging Expert Pick'],
    category: 'ULTIMATE YOUTH STACK',
    title: 'GUNALIFE GUNA-AGE+ Athletes + Longevity',
    description:
      'GUNALIFE GUNA-AGE+ Athletes + Longevity is an advanced daily supplement formulated to support exercise performance, muscle recovery, energy metabolism, and healthy ageing with key nutrients and antioxidants.',
    mrp: '₹2,999',
    price: '₹1,999.00',
    perServing: '≈ ₹46.64/serving',
    discountBadge: '30% OFF',
    subtext: 'Free shipping included',
    features: [
      '✓ Supports exercise performance and endurance',
      '✓ Promotes skin elasticity and collagen synthesis',
      '✓ Supports energy metabolism',
      '✓ Formulated by world-class longevity scientists',
    ],
    buttonText: 'Add to Cart',
    imageScaleClass: 'scale-100', // Standard scale for Prod4
  },
];

const ProductCards = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[var(--bg-cream)] text-[var(--brand-primary)] py-16 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto space-y-12">

        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[var(--brand-primary)]/70">
            ADVANCED ANTI-AGING & LONGEVITY SYSTEMS
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--brand-primary)] tracking-tight">
            Science-backed cellular longevity.
          </h2>

          <p className="text-xs sm:text-sm text-[var(--brand-primary)]/80 leading-relaxed">
            Elevate your daily routine with GunaLife's premier anti-aging formulations, designed to promote healthy aging and peak cellular vitality.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch max-w-[820px] mx-auto">
          {products.map((product) => (
            <article
              key={product.id}
              className={`relative w-full max-w-[380px] mx-auto bg-[var(--bg-cream)] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
                product.isFeatured
                  ? 'border-2 border-[var(--brand-primary)] shadow-xl'
                  : 'border border-[var(--border-cream)] shadow-md hover:shadow-lg'
              }`}
            >
              {/* Top Ribbon */}
              {product.topRibbon && (
                <div className="w-full bg-[var(--brand-primary)] text-white text-[10px] font-bold tracking-widest uppercase text-center py-2 px-3">
                  {product.topRibbon}
                </div>
              )}

              {/* Image & Zoom Container */}
              <div className="relative w-full h-[280px] bg-white flex items-center justify-center p-4 overflow-hidden">
                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none gap-2">
                  {product.topBadges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-sm bg-white/90 text-[8px] sm:text-[9px] font-bold tracking-wider uppercase text-[var(--brand-primary)] border border-[var(--brand-primary)]/15 shadow-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Full Image Box with custom scaling */}
                <div className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${product.imageScaleClass}`}>
                  <InnerImageZoom
                    src={product.image}
                    zoomSrc={product.image}
                    zoomType="hover"
                    zoomPreload={true}
                    alt={product.title}
                    className="w-full h-full max-h-[240px] object-contain flex items-center justify-center"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--brand-primary)]/70">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-xl font-bold text-[var(--brand-primary)] leading-tight">
                    {product.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[var(--brand-primary)]/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Pricing Section */}
                <div className="pt-3 border-t border-[var(--border-cream)] space-y-2">
                  <div className="flex items-baseline flex-wrap gap-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[var(--brand-primary)]">
                      {product.price}
                    </span>

                    <span className="text-sm text-[var(--brand-primary)]/60 line-through">
                      {product.mrp}
                    </span>
                  </div>

                  <div className="flex items-center flex-wrap gap-2">
                    <span className="px-2 py-1 rounded bg-[var(--accent-gold)]/20 text-[var(--brand-primary)] text-[9px] font-bold uppercase tracking-wide border border-[var(--accent-gold)]/30">
                      {product.discountBadge}
                    </span>

                    <span className="text-[11px] text-[var(--brand-primary)] font-semibold">
                      {product.perServing}
                    </span>
                  </div>

                  <p className="text-[11px] text-[var(--brand-primary)]/70">
                    {product.subtext}
                  </p>
                </div>

                {/* Features Bullet List */}
                <div className="space-y-1.5">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[var(--border-cream)] rounded-full py-2 px-3"
                    >
                      <p className="text-[10px] sm:text-[11px] text-[var(--brand-primary)]/90 font-medium leading-tight">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => navigate('/beckham-stack')}
                    className="w-full py-3.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-200 shadow-md active:scale-[0.98]"
                  >
                    {product.buttonText}
                  </button>

                  {product.bottomLink && (
                    <a
                      href="#stack"
                      className="block text-center text-[10px] font-bold text-[var(--brand-primary)] hover:underline pt-1"
                    >
                      {product.bottomLink}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;