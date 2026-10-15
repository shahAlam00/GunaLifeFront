import React from "react";

export default function IngredientHero() {
  return (
    <section className="relative isolate flex min-h-[400px] w-full items-center overflow-hidden bg-[var(--brand-primary)] text-white sm:min-h-[460px] lg:min-h-[500px]">

      {/* Decorative radial glow — pure CSS, no image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 15% 50%, var(--brand-light) 0%, transparent 55%), radial-gradient(ellipse at 90% 20%, var(--brand-deep) 0%, transparent 50%)",
        }}
      />

      {/* Dot-pattern texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 2px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Content */}
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-8 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-[1.3fr_0.7fr] md:gap-10 md:px-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:px-20 xl:px-[6%]">

        {/* Left heading */}
        <div className="max-w-[760px]">
          <p className="mb-3 font-mono text-[12px] font-semibold uppercase tracking-[0.04em] text-white/70 sm:text-[14px]">
            PURE. &nbsp; POTENT. &nbsp; PREMIUM.
          </p>

          <h1 className="font-serif text-[clamp(38px,5.1vw,72px)] font-normal leading-[1.08] tracking-[-1.5px] text-white">
            <span className="block">Trusted Ingredients,</span>
            <span className="block">Optimized for</span>
            <span className="inline-block bg-[var(--brand-deep)]/50 px-1.5 rounded-sm">
              Superior Results
            </span>
          </h1>
        </div>

        {/* Right description */}
        <div className="w-full max-w-[440px] md:ml-auto md:pt-16 lg:pt-20">
          <p className="font-sans text-[14px] font-normal leading-[1.6] text-white/90 sm:text-[15px] lg:text-[16px]">
            At GunaLife, we believe great wellness begins with
            thoughtful ingredient selection and a commitment to
            quality. Our approach combines ingredient awareness,
            responsible formulation, and science-informed research
            to help you make more confident choices for everyday
            well-being.
          </p>
        </div>

      </div>
    </section>
  );
}
