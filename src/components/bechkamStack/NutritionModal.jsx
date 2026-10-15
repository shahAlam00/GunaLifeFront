import React, { useState } from 'react';
import { X, CheckCircle, FileText, ShieldCheck } from 'lucide-react';

const NutritionModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('essentials');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[var(--border-warm)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-warm)] bg-[var(--bg-warm)]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--brand-primary)]">
                GunaLife Supplement Facts
              </h3>
              <p className="text-xs text-[var(--brand-teal)]">
                NSF Certified for Sport • 100% Transparent Formula
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[var(--brand-primary)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[var(--border-warm)] bg-[var(--bg-cream)] px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('essentials')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'essentials'
                ? 'border-[var(--brand-primary)] text-[var(--brand-primary)]'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--brand-primary)]'
            }`}
          >
            <span>GunaLife Essentials Pro</span>
            <span className="text-[10px] bg-[var(--brand-teal)]/15 text-[var(--brand-teal)] px-2 py-0.5 rounded-full font-semibold">
              90 Ingredients
            </span>
          </button>

          <button
            onClick={() => setActiveTab('longevity')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'longevity'
                ? 'border-[var(--brand-primary)] text-[var(--brand-primary)]'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--brand-primary)]'
            }`}
          >
            <span>GunaLife Longevity Pro</span>
            <span className="text-[10px] bg-[var(--brand-teal)]/15 text-[var(--brand-teal)] px-2 py-0.5 rounded-full font-semibold">
              10 Actives
            </span>
          </button>
        </div>

        {/* Modal Body / Nutrition Facts */}
        <div className="overflow-y-auto p-6 space-y-6 text-[var(--text-on-cream)] shop-scrollbar">
          {activeTab === 'essentials' ? (
            <div className="space-y-6">
              <div className="border-4 border-[var(--brand-primary)] p-4 font-sans text-xs">
                <h4 className="text-3xl font-extrabold tracking-tight border-b-8 border-[var(--brand-primary)] pb-1 text-[var(--brand-primary)]">
                  Supplement Facts
                </h4>
                <div className="py-1 text-xs border-b border-[var(--brand-primary)] text-[var(--text-on-cream)]">
                  Serving Size: 1 Scoop (12g) / Servings Per Container: 30
                </div>

                <div className="flex justify-between font-bold py-1 border-b-4 border-[var(--brand-primary)]">
                  <span>Amount Per Serving</span>
                  <span>% Daily Value*</span>
                </div>

                {/* Key nutrients */}
                {[
                  { name: 'Vitamin A (as beta-carotene)', amount: '900 mcg RAE', dv: '100%' },
                  { name: 'Vitamin C (as ascorbic acid & acerola cherry)', amount: '250 mg', dv: '278%' },
                  { name: 'Vitamin D3 (as cholecalciferol from lichen)', amount: '50 mcg (2,000 IU)', dv: '250%' },
                  { name: 'Vitamin E (as d-alpha tocopherol)', amount: '20 mg', dv: '133%' },
                  { name: 'Vitamin K2 (as MK-7 menaquinone)', amount: '120 mcg', dv: '100%' },
                  { name: 'Thiamin (Vitamin B1)', amount: '3 mg', dv: '250%' },
                  { name: 'Riboflavin (Vitamin B2)', amount: '3.4 mg', dv: '262%' },
                  { name: 'Niacin (as niacinamide)', amount: '25 mg', dv: '156%' },
                  { name: 'Vitamin B6 (as pyridoxal-5-phosphate)', amount: '4 mg', dv: '235%' },
                  { name: 'Folate (as L-methylfolate)', amount: '680 mcg DFE', dv: '170%' },
                  { name: 'Vitamin B12 (as methylcobalamin)', amount: '50 mcg', dv: '2,083%' },
                  { name: 'Biotin', amount: '300 mcg', dv: '1,000%' },
                  { name: 'Pantothenic Acid', amount: '10 mg', dv: '200%' },
                  { name: 'Magnesium (as glycinate & malate)', amount: '120 mg', dv: '29%' },
                  { name: 'Zinc (as bisglycinate chelate)', amount: '15 mg', dv: '136%' },
                  { name: 'Selenium (as L-selenomethionine)', amount: '70 mcg', dv: '127%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-[var(--border-warm)]">
                    <span className="font-semibold">{item.name}</span>
                    <div className="flex gap-4">
                      <span className="text-[var(--text-muted)]">{item.amount}</span>
                      <span className="font-bold w-12 text-right">{item.dv}</span>
                    </div>
                  </div>
                ))}

                {/* Proprietary Blends */}
                <div className="pt-3 pb-1 border-t-4 border-[var(--brand-primary)] font-bold flex justify-between">
                  <span>Gut Microbiome, Pre-, Pro- & Post-Biotics (12.5 Billion CFU)</span>
                  <span>*</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)] pb-2">
                  L. acidophilus, B. lactis, L. plantarum, B. bifidum, Organic Inulin, Apple Pectin.
                </p>

                <div className="pt-2 pb-1 border-t border-[var(--brand-primary)] font-bold flex justify-between">
                  <span>Cellular Energy & Vitality Complex (CoQ10 + MSM)</span>
                  <span>250 mg *</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)] pb-2">
                  Coenzyme Q10 (Ubiquinone 100mg), OptiMSM® (150mg).
                </p>

                <div className="pt-2 pb-1 border-t border-[var(--brand-primary)] font-bold flex justify-between">
                  <span>Organic Superfoods, Greens & Adaptogen Matrix</span>
                  <span>4,200 mg *</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)] pb-2">
                  Organic Spirulina, Chlorella, Wheatgrass, KSM-66® Ashwagandha, Rhodiola Rosea, Lion's Mane Mushroom, Reishi.
                </p>

                <div className="text-[10px] text-[var(--text-muted)] pt-2 border-t border-[var(--brand-primary)] italic">
                  *Percent Daily Values are based on a 2,000 calorie diet. †Daily Value not established.
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-4 border-[var(--brand-primary)] p-4 font-sans text-xs">
                <h4 className="text-3xl font-extrabold tracking-tight border-b-8 border-[var(--brand-primary)] pb-1 text-[var(--brand-primary)]">
                  Longevity Supplement Facts
                </h4>
                <div className="py-1 text-xs border-b border-[var(--brand-primary)] text-[var(--text-on-cream)]">
                  Serving Size: 1 Daily Sachet (8g) / Servings Per Container: 30
                </div>

                <div className="flex justify-between font-bold py-1 border-b-4 border-[var(--brand-primary)]">
                  <span>10 Core Longevity Actives (12 Hallmarks of Aging)</span>
                  <span>Amount</span>
                </div>

                {[
                  { compound: 'NMN (β-Nicotinamide Mononucleotide)', target: 'NAD+ Cellular Energy & Repair', amount: '500 mg' },
                  { compound: 'Spermidine (from Wheat Germ Extract)', target: 'Autophagy & Cellular Rejuvenation', amount: '10 mg' },
                  { compound: 'Urolithin A', target: 'Mitochondrial Biogenesis & Muscle Strength', amount: '250 mg' },
                  { compound: 'Fisetin (Cotinus coggygria extract)', target: 'Senolytic Cellular Clearance', amount: '100 mg' },
                  { compound: 'Trans-Resveratrol (98% pure)', target: 'SIRT1 Sirtuin Longevity Activation', amount: '250 mg' },
                  { compound: 'Ca-AKG (Calcium Alpha-Ketoglutarate)', target: 'Epigenetic Reprogramming & Vitality', amount: '1,000 mg' },
                  { compound: 'Quercetin Phytosome', target: 'Cellular Defense & Senolytic Synergy', amount: '250 mg' },
                  { compound: 'Natural Astaxanthin', target: 'Deep Cellular Protection & Skin Elasticity', amount: '6 mg' },
                  { compound: 'Ergothioneine (L-Ergothioneine)', target: 'Master Intracellular Antioxidant', amount: '5 mg' },
                  { compound: 'PQQ (Pyrroloquinoline Quinone)', target: 'Mitochondrial Growth & Brain Health', amount: '20 mg' },
                ].map((item, idx) => (
                  <div key={idx} className="py-2.5 border-b border-[var(--border-warm)]">
                    <div className="flex justify-between items-baseline font-bold">
                      <span className="text-sm text-[var(--brand-primary)]">{item.compound}</span>
                      <span className="font-extrabold text-[var(--brand-teal)]">{item.amount}</span>
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] mt-0.5 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                      <span>{item.target}</span>
                    </div>
                  </div>
                ))}

                <div className="text-[10px] text-[var(--text-muted)] pt-3 border-t border-[var(--brand-primary)] italic">
                  *Daily Value not established. Manufactured in an NSF-registered cGMP certified facility.
                </div>
              </div>
            </div>
          )}

          {/* Bottom guarantee badge */}
          <div className="flex items-center gap-3 bg-[var(--bg-warm)] p-4 rounded-xl border border-[var(--border-warm)]">
            <ShieldCheck className="w-6 h-6 text-[var(--brand-teal)] flex-shrink-0" />
            <p className="text-xs text-[var(--text-on-cream)] leading-relaxed">
              <strong className="text-[var(--brand-primary)]">100% GunaLife Purity Guarantee:</strong> Zero artificial sweeteners, zero synthetic dyes, non-GMO, vegan, gluten-free, dairy-free, and third-party lab tested for over 280 banned athletic substances.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border-warm)] bg-[var(--bg-warm)] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[var(--brand-primary)] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[var(--brand-deep)] transition-colors cursor-pointer"
          >
            Close Nutrition Facts
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutritionModal;
