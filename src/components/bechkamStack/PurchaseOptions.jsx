import React, { useState } from 'react';
import { Check, ChevronRight, Gift } from 'lucide-react';
import Prod3 from '../../assets/Prod3.png'
import Prod4 from '../../assets/Prod4.png'
import Prod1 from '../../assets/Prod1.png'
const PurchaseOptions = ({ selectedPlan, onSelectPlan, onOpenWelcomeKitModal }) => {
  const [showKitDetails, setShowKitDetails] = useState(false);

const plans = [
  {
    id: '90-day',
    title: '90-Day Supply',
    discountBadge: '30% OFF',
    isBestValue: true,
    priceMonthly: '1,999',
    mrp: '2,999',
    billedText: 'Billed ₹5,997 every 90 days',
    perDayText: 'Approx. ₹66.63 / DAY',
    features: [
      'Supports exercise performance and muscle recovery',
      'Designed for fitness enthusiasts and gym-goers',
      'Supports energy metabolism and healthy ageing',
      'Ideal for adults with an active lifestyle',
      'Built for long-term performance and wellness',
    ],
    welcomeKit: null,
  },
  {
    id: '30-day',
    title: '30-Day Supply',
    discountBadge: '30% OFF',
    isBestValue: false,
    priceMonthly: '1,999',
    mrp: '2,999',
    billedText: 'One-time payment of ₹1,999',
    perDayText: 'Approx. ₹66.63 / DAY',
    features: [
      '150 g GUNA-AGE+ Athletes + Longevity',
      'Supports muscle performance and recovery',
      'Combines performance-focused nutrients and antioxidants',
      'Suitable for wellness-conscious adults',
    ],
    welcomeKit: null,
  },
  {
    id: 'one-time',
    title: 'One-Time Purchase',
    discountBadge: '30% OFF',
    isBestValue: false,
    priceMonthly: '1,999',
    mrp: '2,999',
    billedText: 'One-time delivery of 150 g supply',
    perDayText: 'Approx. ₹66.63 / DAY',
    features: [
      'Single 150 g product purchase',
      'No recurring subscription',
      'Supports performance, recovery, and long-term wellness',
    ],
    welcomeKit: null,
  },
];

  return (
    <div className="space-y-4 pt-4">
      <div className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--brand-primary)]">
        SUBSCRIBE & SAVE:
      </div>

      <div className="space-y-3">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => onSelectPlan(plan.id)}
              className={`relative rounded-2xl transition-all duration-200 cursor-pointer overflow-hidden ${
                isSelected
                  ? 'border-2 border-[var(--brand-primary)] bg-[var(--bg-warm)] shadow-md'
                  : 'border border-[var(--border-warm)] bg-[var(--bg-cream)] hover:border-[var(--brand-primary)]/50 hover:bg-[var(--bg-warm)]/60'
              }`}
            >
              {/* BEST VALUE top-right pill */}
              {plan.isBestValue && (
                <div className="absolute top-0 right-0 bg-[var(--brand-primary)] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-xs">
                  BEST VALUE
                </div>
              )}

              <div className="p-4 sm:p-5">
                {/* Header row: Radio + Title + Discount + Price */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Custom Radio Button */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                        isSelected
                          ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]'
                          : 'border-[var(--border-muted)] bg-white'
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-serif text-base sm:text-lg font-bold text-[var(--brand-primary)]">
                        {plan.title}
                      </span>
                      {plan.discountBadge && (
                        <span className="bg-[var(--bg-muted)] text-[var(--brand-primary)] border border-[var(--border-muted)] text-[10px] sm:text-xs font-extrabold px-2 py-0.5 rounded-full">
                          {plan.discountBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg sm:text-2xl font-serif font-bold text-[var(--brand-primary)] leading-none">
                      Mrp. {plan.priceMonthly}
                      <span className="text-xs sm:text-sm font-sans font-normal text-[var(--text-muted)]">
                        {plan.id === 'one-time' ? '' : ' /mo'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtext info row */}
                <div className="flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-[var(--text-muted)] pt-2 pb-1 border-b border-[var(--border-warm)]">
                  <span>{plan.billedText}</span>
                  <span className="font-semibold text-[var(--brand-teal)]">
                    {plan.perDayText}
                  </span>
                </div>

                {/* Only render features & kit when this plan is selected */}
                {isSelected && (
                  <div className="pt-3 space-y-3 animate-fadeIn">
                    {/* Feature bullet list */}
                    <div className="space-y-1.5">
                      {plan.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[var(--text-on-cream)] leading-tight"
                        >
                          <Check className="w-3.5 h-3.5 text-[var(--brand-teal)] mt-0.5 flex-shrink-0 stroke-[3]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Free Welcome Kit Card if available */}
                    {plan.welcomeKit && (
                      <div className="mt-3 p-2.5 sm:p-3 rounded-xl bg-[var(--bg-muted)] border border-[var(--border-muted)] flex items-center justify-between gap-3">
                        {/* 3 Item thumbnails */}
                        <div className="flex items-center gap-2">
                          {plan.welcomeKit.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="relative flex flex-col items-center group"
                            >
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white p-1 border border-[var(--border-warm)] overflow-hidden flex items-center justify-center">
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-[9px] font-bold text-[var(--brand-teal)] mt-0.5">
                                {item.price}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Right side callout */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenWelcomeKitModal) onOpenWelcomeKitModal();
                            else setShowKitDetails(!showKitDetails);
                          }}
                          className="text-right flex flex-col items-end group focus:outline-none"
                        >
                          <div className="text-xs font-bold text-[var(--brand-primary)] flex items-center gap-1 group-hover:text-[var(--brand-teal)] transition-colors">
                            <span>Free Welcome Kit</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[var(--brand-teal)] transition-transform group-hover:translate-x-0.5" />
                          </div>
                          <div className="text-[10px] text-[var(--text-muted)]">
                            {plan.welcomeKit.totalValue} value — {plan.welcomeKit.itemsCount}
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PurchaseOptions;
