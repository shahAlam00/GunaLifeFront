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
      discountBadge: 'SAVE 33%',
      isBestValue: true,
      priceMonthly: '932.33',
      billedText: 'Billed Dhs. 2,797.00 every 12 weeks',
      perDayText: 'Dhs. 31.08 AED / DAY',
      features: [
        'Exclusive Access to 90 Day GunaLife Transformation Program (US $180 in value)',
        'Free GunaLife Welcome Kit (Dhs. 377 in value)',
        'Maximum savings — lowest price per serving',
        '90-Day Money-Back Guarantee',
        'Cancel or pause anytime'
      ],
      welcomeKit: {
        totalValue: 'Dhs. 377',
        itemsCount: '3 items',
        items: [
          {
            name: 'Signature Red Bottle',
            price: 'Dhs. 170',
            img: Prod3
          },
          {
            name: 'Luxe Edition Mixer',
            price: 'Dhs. 70',
            img: Prod4
          },
          {
            name: '5x Bonus Sachets',
            price: 'Dhs. 137',
            img: Prod1
          }
        ]
      }
    },
    {
      id: '30-day',
      title: '30-Day Supply',
      discountBadge: 'SAVE 20%',
      isBestValue: false,
      priceMonthly: '1,065',
      billedText: 'Billed Dhs. 1,065.00 every 4 weeks',
      perDayText: 'Dhs. 35.50 AED / DAY',
      features: [
        'Free GunaLife Welcome Kit (Dhs. 240 in value)',
        '90-Day Money-Back Guarantee',
        'Cancel or pause anytime'
      ],
      welcomeKit: {
        totalValue: 'Dhs. 240',
        itemsCount: '2 items',
        items: [
          {
            name: 'Signature Red Bottle',
            price: 'Dhs. 170',
            img: 'https://im8health.com/cdn/shop/files/red-cup3_peach_1.jpg?v=1758690939&width=240'
          },
          {
            name: '5x Bonus Sachets',
            price: 'Dhs. 70',
            img: 'https://im8health.com/cdn/shop/files/bonus_sachets_1.png?v=1776413344&width=240'
          }
        ]
      }
    },
    {
      id: 'one-time',
      title: 'One-Time Purchase',
      discountBadge: null,
      isBestValue: false,
      priceMonthly: '1,335',
      billedText: 'One-time delivery of 30-day supply',
      perDayText: 'Dhs. 44.50 AED / DAY',
      features: [
        'Single 30-day supply (no recurring subscription)',
        '30-Day Money-Back Guarantee',
        'Standard GunaLife Welcome Gift'
      ],
      welcomeKit: null
    }
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
                      Dhs. {plan.priceMonthly}
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
