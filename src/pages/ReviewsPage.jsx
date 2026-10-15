import React from 'react';
import VerifiedReviews from '../components/common/VerifiedReviews';

const ReviewsPage = () => {
  return (
    <main className="min-h-screen bg-[var(--bg-cream)]">

      {/* Hero */}
      <section className="w-full bg-[var(--brand-primary)] text-white py-20 px-4 sm:px-8 text-center">
        <div className="max-w-[1280px] mx-auto space-y-4">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-white/70">
            REAL PEOPLE, REAL RESULTS
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight">
            Reviews
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Over 22,000 verified reviews. See what our community says about their GunaLife experience.
          </p>
        </div>
      </section>

      {/* Trustpilot summary strip */}
      <section className="w-full bg-[var(--brand-deep)] text-white py-8 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-center gap-10">
          <div className="text-center">
            <p className="font-serif text-4xl font-normal">4.5</p>
            <p className="text-xs text-white/60 mt-1">Average Rating</p>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-7 h-7 bg-[#00B67A] flex items-center justify-center text-white text-sm font-bold rounded-sm">★</div>
            ))}
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-normal">22,104</p>
            <p className="text-xs text-white/60 mt-1">Verified Reviews</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-normal">95%</p>
            <p className="text-xs text-white/60 mt-1">Would Recommend</p>
          </div>
        </div>
      </section>

      <VerifiedReviews />

    </main>
  );
};

export default ReviewsPage;
