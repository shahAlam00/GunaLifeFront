import React from 'react';

const PressTicker = () => {
  const press = [
    'VOGUE',
    'GQ',
    "MEN'S HEALTH",
    'FORBES',
    'BLOOMBERG',
    'VANITY FAIR',
    'WALL STREET JOURNAL',
    'ESQUIRE'
  ];

  return (
    <div className="w-full bg-[var(--bg-warm)] border-y border-[var(--border-warm)] py-6 overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto px-4">
        <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--text-muted)] text-center mb-4">
          AS FEATURED IN
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80">
          {press.map((outlet, idx) => (
            <span
              key={idx}
              className="font-serif text-sm sm:text-base font-bold tracking-widest text-[var(--brand-primary)] hover:text-[var(--brand-teal)] transition-colors"
            >
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressTicker;
