import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-[var(--bg-cream)] text-[var(--brand-primary)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">

        {/* Left Side: Image with Overlay Quote */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-full bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Lily Collins"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-6 left-6 max-w-[220px] sm:max-w-[260px] bg-white/40 backdrop-blur-xs p-3 rounded-sm">
            <p className="font-serif italic text-xs sm:text-sm text-[var(--brand-primary)] leading-snug font-medium">
              "I was a customer of GunaLife for months before I became a partner."
            </p>
            <p className="text-[10px] sm:text-xs tracking-widest font-bold uppercase text-[var(--brand-primary)] mt-1.5">
              — LILY COLLINS
            </p>
          </div>
        </div>

        {/* Right Side: Content Details */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-10 sm:py-14 space-y-5 bg-[var(--bg-cream)]">

          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--brand-primary)]">
            INTRODUCING
          </span>

          <div className="space-y-1">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--brand-primary)] tracking-tight leading-tight">
              Lily Collins
            </h1>
            <p className="font-bold text-base sm:text-lg text-[var(--brand-primary)] leading-tight">
              Emily in Paris Star &amp;<br className="hidden sm:inline" /> GunaLife Global Ambassador
            </p>
          </div>

          <div className="inline-flex items-center gap-3 p-3 rounded-lg border border-[var(--brand-primary)]/20 bg-white/60 max-w-fit">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-serif font-bold text-xs sm:text-sm text-[var(--brand-primary)] leading-none">
                Clinicians' Choice
              </p>
              <p className="text-[10px] sm:text-xs text-[var(--brand-primary)]/80 mt-0.5 leading-tight">
                Hundreds of clinicians shared this with their patients without compensation.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[var(--brand-primary)]/90 leading-relaxed max-w-lg">
            Lily Collins has joined GunaLife as our Global Ambassador because she truly believes in our mission, our science, and the difference our products make every day.
          </p>

          <div className="flex items-center gap-2 text-xs text-[var(--brand-primary)]">
            <div className="flex text-amber-600">{'★'.repeat(5)}</div>
            <span className="font-bold">4.8</span>
            <span className="text-[var(--brand-primary)]/70">• 22,104 reviews</span>
          </div>

          <div>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95">
              <span>SAVE 30% + GET FREE WELCOME GIFTS</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-semibold text-[var(--brand-primary)]">
            <span className="px-2.5 py-1 rounded-full bg-white border border-[var(--brand-primary)]/15 shadow-2xs">
              ✓ Up to 90-Day Money Back Guarantee
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white border border-[var(--brand-primary)]/15 shadow-2xs">
              ✓ NSF Certified for Sport
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white border border-[var(--brand-primary)]/15 shadow-2xs">
              ✓ Third-Party Tested
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg border border-[var(--brand-primary)]/20 bg-white/70 text-[11px] max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-[10px]">✓</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[var(--brand-primary)]">Lab-verified by Light Labs</span>
                  <span className="bg-slate-200 text-[9px] px-1 rounded text-slate-700 uppercase">DEC 2026</span>
                </div>
                <p className="text-[10px] text-[var(--brand-primary)]/70">50 substances screened</p>
              </div>
            </div>
            <a href="#report" className="text-[var(--brand-primary)] font-bold hover:underline text-[10px]">
              See the report &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
