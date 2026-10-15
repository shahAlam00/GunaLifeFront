import React from 'react';
import { Star, Check } from 'lucide-react';

const ProductHeader = () => {
  return (
    <div className="space-y-4">
      {/* Review Rating & Savings Row */}
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[var(--brand-primary)]">
        <div className="flex items-center text-[var(--brand-teal)] gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[var(--brand-teal)] text-[var(--brand-teal)]" />
          ))}
        </div>
        <span className="font-bold">4.8</span>
        <span className="text-[var(--text-muted)]">from 22,104 Verified Reviews</span>
        <span className="text-[var(--border-cream)]">|</span>
        <span className="font-semibold text-[var(--brand-teal)]">$8M+ savings</span>
      </div>

      {/* Eyebrow Subtitle */}
      <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-teal)]">
        GUNALIFE ESSENTIALS PRO + LONGEVITY SET
      </div>

      {/* Main Title */}
      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[var(--brand-primary)] tracking-tight leading-[1.1]">
        The Beckham Stack
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-[var(--text-on-cream)]/90 font-light leading-relaxed">
        90 ingredients — 10 longevity compounds in one daily ritual. Co-founded by David Beckham for GunaLife and developed with a world-class scientific team to help you feel amazing today and stay young tomorrow.
      </p>

      {/* 4 Feature Badges / Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
        {[
          "The complete daily system — nutrition today, longevity tomorrow",
          "NSF Certified for Sport",
          "Replaces $4,000+/year in supplements for $6 a day",
          "90-day money-back guarantee",
        ].map((feat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--bg-warm)] border border-[var(--border-warm)] text-[var(--brand-primary)] text-xs font-medium leading-snug"
          >
            <div className="w-4 h-4 rounded-full bg-[var(--brand-teal)]/15 flex items-center justify-center flex-shrink-0 text-[var(--brand-teal)]">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
            <span>{feat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHeader;
