import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, FileText, CheckCircle2 } from 'lucide-react';

const ProductAccordions = ({ onOpenNutritionModal }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordions = [
    {
      title: "What's Included in The Beckham Stack",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[var(--text-on-cream)] leading-relaxed">
          <p>
            <strong>The Beckham Stack Pro</strong> is the pinnacle of modern daily nutrition and cellular longevity, unifying two clinical-grade GunaLife formulations:
          </p>
          <div className="p-3 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] space-y-2">
            <div className="font-bold text-[var(--brand-primary)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)]" />
              <span>1. Creatine Monohydrate — 3,000 mg</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] pl-3.5">
              A well-researched compound that supports performance during repeated high-intensity exercise and helps improve strength and exercise capacity when combined with appropriate training.
            </p>
          </div>
          <div className="p-3 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] space-y-2">
            <div className="font-bold text-[var(--brand-primary)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-teal)]" />
              <span>2. Taurine — 1,000 mg</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] pl-3.5">
              An amino-sulfonic compound naturally present in the body that plays a role in cellular function, fluid balance, and normal physiological processes.            </p>
          </div>
          <div className="p-3 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] space-y-2">
            <div className="font-bold text-[var(--brand-primary)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-teal)]" />
              <span>3. L-Leucine — 1,000 mg</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] pl-3.5">
           An essential branched-chain amino acid involved in muscle protein synthesis. It contributes to the body's muscle maintenance and recovery processes alongside adequate protein intake.         </p>
            </div>
          <div className="p-3 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] space-y-2">
            <div className="font-bold text-[var(--brand-primary)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-teal)]" />
              <span>4. Resveratrol — 150 mg</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] pl-3.5">
              A naturally occurring polyphenol found in certain plants. It is studied for its antioxidant properties and potential role in supporting cellular health.
</p>
          </div>
          <div className="p-3 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] space-y-2">
            <div className="font-bold text-[var(--brand-primary)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-teal)]" />
              <span>5. Glutathione — 150 mg</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] pl-3.5">
             Glutathione 150 mg is a powerful antioxidant naturally produced by the body. It helps protect cells from oxidative stress and supports cellular health. It has also been studied for potential skin-brightening effects, although results vary.
</p>
          </div>
          <div className="pt-1">
            <button
              onClick={onOpenNutritionModal}
              className="text-xs font-bold text-[var(--brand-teal)] hover:underline flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View complete GunaLife Supplement Facts & Ingredients →</span>
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Free Welcome Kit (Arrives with Order #1)",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[var(--text-on-cream)] leading-relaxed">
          <p>
            Every new GunaLife Beckham Stack subscription arrives with the complimentary US$80 (Dhs. 377) Welcome Kit:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] text-center space-y-1">
              <div className="font-bold text-[var(--brand-primary)] text-xs">Signature Red Cup</div>
              <div className="text-[11px] text-[var(--brand-teal)] font-bold">Dhs. 170 VALUE</div>
              <p className="text-[11px] text-[var(--text-muted)]">Double-walled stainless steel insulated travel tumbler.</p>
            </div>
            <div className="p-3 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] text-center space-y-1">
              <div className="font-bold text-[var(--brand-primary)] text-xs">Luxe Edition Mixer</div>
              <div className="text-[11px] text-[var(--brand-teal)] font-bold">Dhs. 70 VALUE</div>
              <p className="text-[11px] text-[var(--text-muted)]">Ultra-quiet high-torque frother for smooth texture.</p>
            </div>
            <div className="p-3 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] text-center space-y-1">
              <div className="font-bold text-[var(--brand-primary)] text-xs">5x Bonus Sachets</div>
              <div className="text-[11px] text-[var(--brand-teal)] font-bold">Dhs. 137 VALUE</div>
              <p className="text-[11px] text-[var(--text-muted)]">Travel sachets to take anywhere on the go.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How to Enjoy & Daily Ritual",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[var(--text-on-cream)] leading-relaxed">
          <p>
            Designed to seamlessly fit into your morning routine in under 60 seconds:
          </p>
          <ol className="space-y-2 list-decimal list-inside pl-1 text-xs">
            <li>
              <strong>Mix Essentials Pro:</strong> Add 1 scoop (or sachet) to 8-12 oz of cold water, juice, or smoothie. Blend or shake with your Luxe Mixer.
            </li>
            <li>
              <strong>Add Longevity:</strong> Empty 1 Longevity sachet into the same glass or enjoy separately with breakfast for optimal mitochondrial absorption.
            </li>
            <li>
              <strong>Feel the Difference:</strong> Drink daily each morning to sustain cellular energy, gut balance, and long-term youthfulness.
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Third-Party Tested & NSF Certified for Sport",
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-[var(--text-on-cream)] leading-relaxed">
          <p>
            Every single batch is rigorously verified by ISO-accredited independent laboratories:
          </p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-teal)]" />
              <span>Screens for over 280 banned athletic substances.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-teal)]" />
              <span>Heavy metal, microbial, and herbicide zero-tolerance screening.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-teal)]" />
              <span>cGMP facility certified with exact label claim potency match.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Tasting Notes & Flavors",
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-[var(--text-on-cream)] leading-relaxed">
          <p><strong>Açaí + Mixed Berries:</strong> Earthy dark berries with subtle cacao undertones and a smooth finish.</p>
          <p><strong>Lemon + Orange:</strong> Crisp Mediterranean sun-kissed citrus with an invigorating clean zest.</p>
          <p><strong>Mango Passion Fruit:</strong> Luscious ripe mango with bright tropical passion fruit nectar notes.</p>
          <p><strong>Daily Longevity:</strong> Natural pomegranate berry infusion designed to blend harmoniously with any flavor.</p>
        </div>
      )
    },
    {
      title: "90-Day Money-Back Guarantee & Cancellation",
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-[var(--text-on-cream)] leading-relaxed">
          <p>
            Try The GunaLife Beckham Stack completely risk-free for a full 90 days. If you don't feel noticeably more energized, focused, and revitalized, contact us for a 100% full refund on your product purchase.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Pause, modify flavors, or cancel anytime in your dashboard with zero lock-in or cancellation fees.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-2 pt-4 border-t border-[var(--border-warm)]">
      {accordions.map((acc, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="rounded-xl border border-[var(--border-warm)] bg-[var(--bg-warm)] overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full py-3.5 px-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
            >
              <span className="font-serif text-sm sm:text-base font-bold text-[var(--brand-primary)] group-hover:text-[var(--brand-teal)] transition-colors">
                {acc.title}
              </span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[var(--brand-primary)] flex-shrink-0 transition-transform duration-200 shadow-xs">
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5" />
                )}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-1 animate-fadeIn border-t border-[var(--border-warm)]">
                {acc.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductAccordions;
