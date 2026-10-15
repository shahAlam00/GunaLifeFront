import React from 'react';

const FlavorSelector = ({ selectedFlavor, onSelectFlavor }) => {
  const flavors = [
    {
      id: 'variety-pack',
      name: 'Variety Pack',
      isBest: true,
      swatchGradient: 'linear-gradient(135deg, #061F50 0%, #123A70 50%, #079B83 100%)',
      subtext: 'GunaLife Daily Ultimate Essentials (All 3 Flavors) + Daily Ultimate Longevity',
      description: 'Experience all 3 award-winning flavors in convenient single-serve sachets with daily Longevity.'
    },
    {
      id: 'acai-berries',
      name: 'Açaí + Mixed Berries',
      isBest: false,
      swatchGradient: 'linear-gradient(135deg, #2E1065 0%, #5B21B6 50%, #7C3AED 100%)',
      subtext: 'GunaLife Daily Ultimate Essentials (Açaí Berries) + Daily Ultimate Longevity',
      description: 'Rich dark wild berries with subtle cacao earthy undertones and clean antioxidant finish.'
    },
    {
      id: 'lemon-orange',
      name: 'Lemon + Orange',
      isBest: false,
      swatchGradient: 'linear-gradient(135deg, #079B83 0%, #067F6D 50%, #E99AB8 100%)',
      subtext: 'GunaLife Daily Ultimate Essentials (Lemon Orange) + Daily Ultimate Longevity',
      description: 'Sun-drenched Mediterranean citrus zest with an energizing crisp morning finish.'
    },
    {
      id: 'mango-passion',
      name: 'Mango Passion Fruit',
      isBest: false,
      swatchGradient: 'linear-gradient(135deg, #E99AB8 0%, #D882A4 50%, #061F50 100%)',
      subtext: 'GunaLife Daily Ultimate Essentials (Mango Passion) + Daily Ultimate Longevity',
      description: 'Exotic ripe Alfonso mango nectar blended with tangy tropical passion fruit.'
    }
  ];

  const current = flavors.find((f) => f.id === selectedFlavor) || flavors[0];

  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--brand-primary)]">
          SELECT FLAVOR:
        </span>
        <span className="text-xs font-semibold text-[var(--brand-teal)]">
          {current.name}
        </span>
      </div>

      {/* Swatch items row */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {flavors.map((flv) => {
          const isSelected = selectedFlavor === flv.id;

          return (
            <button
              key={flv.id}
              onClick={() => onSelectFlavor(flv.id)}
              className="flex flex-col items-center group relative text-center focus:outline-none"
            >
              {/* "BEST" tag above the variety pack */}
              {flv.isBest ? (
                <span className="mb-1 text-[9px] font-extrabold uppercase tracking-wider text-white bg-[var(--brand-primary)] px-2 py-0.5 rounded-full shadow-xs">
                  BEST
                </span>
              ) : (
                <span className="mb-1 text-[9px] opacity-0 pointer-events-none">
                  BEST
                </span>
              )}

              {/* Circular swatch button */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[3px] transition-all duration-300 ${
                  isSelected
                    ? 'ring-2 ring-[var(--brand-primary)] ring-offset-2 scale-105 shadow-md'
                    : 'border border-[var(--border-warm)] group-hover:scale-105 group-hover:border-[var(--brand-primary)]/60'
                }`}
              >
                <div
                  className="w-full h-full rounded-full shadow-inner relative overflow-hidden"
                  style={{ background: flv.swatchGradient }}
                >
                  <div className="absolute inset-0 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Flavor Label */}
              <span
                className={`mt-2 text-[10px] sm:text-xs leading-tight transition-colors ${
                  isSelected
                    ? 'font-bold text-[var(--brand-primary)]'
                    : 'font-medium text-[var(--text-muted)] group-hover:text-[var(--brand-primary)]'
                }`}
              >
                {flv.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected flavor subtext description */}
      <div className="p-3 bg-[var(--bg-warm)] rounded-xl border border-[var(--border-warm)] text-[11px] text-[var(--text-on-cream)] leading-relaxed">
        <span className="font-bold text-[var(--brand-primary)]">Formula composition: </span>
        {current.subtext}
      </div>
    </div>
  );
};

export default FlavorSelector;
