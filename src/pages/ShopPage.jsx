import React from 'react';
import ProductCards from '../components/common/ProductCards';

const ShopPage = () => {
  return (
    <main className="min-h-screen bg-[var(--bg-cream)]">

      {/* Hero Banner */}
      <section className="w-full bg-[var(--brand-primary)] text-white py-20 px-4 sm:px-8 text-center">
        <div className="max-w-[1280px] mx-auto space-y-4">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-white/70">
            THE GUNALIFE COLLECTION
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight">
            Shop All Products
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Science-backed supplements trusted by world-class athletes and everyday performers alike.
          </p>
        </div>
      </section>

      {/* Products */}
      <ProductCards />

      {/* Trust Strip */}
      <section className="w-full bg-[var(--brand-deep)] text-white py-10 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { icon: '🛡️', label: '90-Day Money-Back Guarantee' },
            { icon: '🚚', label: 'Free Shipping on All Orders' },
            { icon: '✅', label: 'NSF Certified for Sport' },
            { icon: '🔬', label: 'Third-Party Tested' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-xs font-bold tracking-wider uppercase text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default ShopPage;
