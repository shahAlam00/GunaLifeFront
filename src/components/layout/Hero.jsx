
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-[var(--bg-cream)] text-[var(--brand-primary)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">

        {/* Left Side: Image with Overlay Quote */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-full bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1200&auto=format&fit=crop"
            alt="GunaLife wellness and healthy lifestyle"
            className="w-full h-full object-cover object-top"
          />

          <div className="absolute top-6 left-6 max-w-[220px] sm:max-w-[260px] bg-white/40 backdrop-blur-sm p-3 rounded-sm">
            <p className="font-serif italic text-xs sm:text-sm text-[var(--brand-primary)] leading-snug font-medium">
              "Wellness starts with understanding what your body needs."
            </p>

            <p className="text-[10px] sm:text-xs tracking-widest font-bold uppercase text-[var(--brand-primary)] mt-1.5">
              — GUNALIFE WELLNESS
            </p>
          </div>
        </div>

        {/* Right Side: GunaLife Brand Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-10 sm:py-14 space-y-5 bg-[var(--bg-cream)]">

          {/* Eyebrow */}
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--brand-primary)]">
            THE FUTURE OF WELLNESS
          </span>

          {/* Main Heading */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--brand-primary)] tracking-tight leading-tight">
              Wellness, <br className="hidden sm:block" />
              <span className="italic">Reimagined.</span>
            </h1>

            <p className="font-bold text-base sm:text-lg text-[var(--brand-primary)] leading-snug">
              Introducing GUNALIFE — Premium Wellness & Nutrition
            </p>
          </div>

          {/* Brand Highlight */}
          <div className="inline-flex items-center gap-3 p-3 rounded-lg border border-[var(--brand-primary)]/20 bg-white/60 max-w-fit">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364-2.121 2.121M7.757 16.243l-2.121 2.121m12.728 0-2.121-2.121M7.757 7.757 5.636 5.636M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>

            <div>
              <p className="font-serif font-bold text-xs sm:text-sm text-[var(--brand-primary)] leading-tight">
                Science-Inspired Wellness
              </p>

              <p className="text-[10px] sm:text-xs text-[var(--brand-primary)]/80 mt-1 leading-relaxed">
                Modern nutrition with a focus on transparency and quality.
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[var(--brand-primary)]/90 leading-relaxed max-w-lg">
            GUNALIFE is a premium wellness and nutraceutical brand concept
            focused on modern nutrition, fitness-related wellness, ingredient
            transparency, and healthy ageing. Discover a thoughtful approach
            to everyday wellbeing designed around informed choices and
            healthier living.
          </p>

          {/* Brand Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

            <div className="p-3 rounded-lg border border-[var(--brand-primary)]/15 bg-white/60">
              <div className="text-[var(--brand-primary)] mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              </div>

              <p className="font-bold text-xs text-[var(--brand-primary)]">
                Quality Focus
              </p>

              <p className="text-[10px] text-[var(--brand-primary)]/75 mt-1 leading-relaxed">
                Thoughtful product standards.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-[var(--brand-primary)]/15 bg-white/60">
              <div className="text-[var(--brand-primary)] mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M12 21s-8-4.5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 10c0 6.5-8 11-8 11z"
                  />
                </svg>
              </div>

              <p className="font-bold text-xs text-[var(--brand-primary)]">
                Everyday Wellness
              </p>

              <p className="text-[10px] text-[var(--brand-primary)]/75 mt-1 leading-relaxed">
                Nutrition for daily routines.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-[var(--brand-primary)]/15 bg-white/60">
              <div className="text-[var(--brand-primary)] mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="M12 7v10m-4-5h8"
                  />
                </svg>
              </div>

              <p className="font-bold text-xs text-[var(--brand-primary)]">
                Healthy Ageing
              </p>

              <p className="text-[10px] text-[var(--brand-primary)]/75 mt-1 leading-relaxed">
                Supporting a wellness-first lifestyle.
              </p>
            </div>

          </div>

          {/* CTA Button */}
          <div>
            <a
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>EXPLORE OUR WELLNESS RANGE</span>

              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Trust / Brand Attributes */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-semibold text-[var(--brand-primary)]">
            <span className="px-2.5 py-1.5 rounded-full bg-white border border-[var(--brand-primary)]/15">
              ✓ Modern Nutrition
            </span>

            <span className="px-2.5 py-1.5 rounded-full bg-white border border-[var(--brand-primary)]/15">
              ✓ Ingredient Transparency
            </span>

            <span className="px-2.5 py-1.5 rounded-full bg-white border border-[var(--brand-primary)]/15">
              ✓ Healthy Ageing
            </span>
          </div>

          {/* Brand Philosophy */}
          <div className="flex items-start gap-3 p-3 rounded-lg border border-[var(--brand-primary)]/20 bg-white/70 max-w-lg">
            <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z"
                />
              </svg>
            </div>

            <div>
              <p className="font-bold text-xs text-[var(--brand-primary)]">
                Wellness with Intention
              </p>

              <p className="text-[10px] sm:text-xs text-[var(--brand-primary)]/75 mt-1 leading-relaxed">
                A modern approach to nutrition, fitness, transparency, and
                long-term wellbeing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;