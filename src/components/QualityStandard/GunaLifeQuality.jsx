import React from "react";

/**
 * GunaLifeQuality
 * Usage: import GunaLifeQuality from "./GunaLifeQuality";
 *        <GunaLifeQuality />
 * Requires: React + Tailwind CSS (no extra libraries / no images needed)
 */

const ProductBox = ({
  gradient,
  title,
  highlight,
  sub,
  tag,
  className = "",
}) => (
  <div className={`relative ${className}`}>
    {/* box lid */}
    <div
      className="relative h-full w-full rounded-t-[10px] shadow-[0_30px_60px_-20px_rgba(120,40,30,0.45)]"
      style={{ background: gradient }}
    >
      {/* side shading for 3D feel */}
      <div className="pointer-events-none absolute inset-0 rounded-t-[10px] bg-gradient-to-r from-white/15 via-transparent to-black/20" />

      {/* brand */}
      <div className="absolute left-0 right-0 top-[14%] px-4 text-center">
        <p className="font-serif text-[22px] tracking-[0.35em] text-white/90 sm:text-[28px]">
          GUNA<span className="font-light">·</span>LIFE
        </p>
        {tag && (
          <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-white/70 sm:text-[8px]">
            {tag}
          </p>
        )}
      </div>

      {/* product text */}
      <div className="absolute bottom-[18%] left-[12%] right-[8%] text-left">
        <p className="text-[10px] font-medium uppercase leading-[1.35] tracking-[0.15em] text-white/90 sm:text-xs">
          {title}
          {highlight && (
            <span className="block font-serif normal-case italic tracking-normal text-white/80">
              {highlight}
            </span>
          )}
        </p>
        {sub && (
          <p className="mt-3 text-[8px] text-white/70 sm:text-[9px]">{sub}</p>
        )}
        <p className="mt-1 text-[7px] text-white/50">Dietary Supplement</p>
      </div>
    </div>

    {/* box base */}
    <div
      className="h-[28%] w-full rounded-b-[10px] opacity-90"
      style={{ background: gradient, filter: "brightness(0.95)" }}
    />
  </div>
);

const Glass = () => (
  <div className="relative">
    {/* glass body */}
    <div
      className="relative h-32 w-32 overflow-hidden rounded-b-[26px] rounded-t-[10px] border border-white/60 bg-white/30 shadow-[0_20px_40px_-15px_rgba(160,70,50,0.45)] backdrop-blur-sm sm:h-44 sm:w-44"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.45) 0 2px, transparent 2px 9px)",
      }}
    >
      {/* drink */}
      <div className="absolute inset-x-0 bottom-0 top-[18%] bg-gradient-to-b from-[#f7b39a] via-[#f19a85] to-[#e9806f] opacity-90" />
      {/* shine */}
      <div className="absolute inset-y-0 left-2 w-3 rounded-full bg-white/40 blur-[2px]" />
    </div>
  </div>
);

export default function GunaLifeQuality() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#fdeee3] via-[#fbe2d3] to-[#fff4ec]">
      {/* ===== Background: big blurred GunaLife text ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex select-none items-center justify-center"
      >
        <span className="whitespace-nowrap font-serif text-[22vw] font-bold leading-none tracking-tight text-[#c4553f]/25 blur-2xl">
          GunaLife
        </span>
      </div>

      {/* soft light blobs (window light / plants feel) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 -z-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-amber-200/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-56 w-[28rem] rounded-full bg-orange-200/60 blur-3xl"
      />

      {/* table surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[#f6dcc6]/80 to-transparent"
      />

      <div className="mx-auto flex min-h-[480px] max-w-7xl flex-col px-6 py-16 sm:px-10 lg:min-h-[560px] lg:px-16">
        {/* ===== Products ===== */}
        <div className="relative flex flex-1 items-end justify-center gap-6 sm:gap-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-0 lg:mx-auto lg:max-w-4xl lg:justify-center lg:gap-12 lg:pt-10">
          <ProductBox
            className="h-56 w-36 sm:h-80 sm:w-52 lg:h-[26rem] lg:w-56"
            gradient="linear-gradient(160deg,#f2a35e 0%,#e8844f 45%,#d9604a 100%)"
            title="Daily Ultimate Longevity"
            highlight="+ Healthy Aging"
            sub="Mixed Berry Blend"
          />
          <ProductBox
            className="h-56 w-36 sm:h-80 sm:w-52 lg:h-[26rem] lg:w-56"
            gradient="linear-gradient(160deg,#b8505a 0%,#9c3f4d 50%,#7d2f3f 100%)"
            title="Daily Ultimate Essentials"
            tag="Crafted by GunaLife Labs"
          />
          <div className="hidden pb-6 sm:block lg:self-end lg:pb-16">
            <Glass />
          </div>
        </div>

        {/* ===== Text content ===== */}
        <div className="relative z-10 mt-10 flex flex-col justify-end gap-8 lg:mt-auto lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-md font-serif text-5xl leading-[1.05] text-[#4a0e14] sm:text-6xl">
            Our Commitment
            <br />
            to Quality
          </h2>

          <p className="max-w-xs text-sm leading-relaxed text-[#4a0e14] sm:text-[15px] lg:mb-3">
            At GunaLife, we elevate everyday nutrition with the highest
            scientific standards — backed by clinical trials and independent
            third-party testing — so every product delivers real, lasting
            benefits for a healthier life.
          </p>
        </div>
      </div>

      {/* gentle fade overlay like the reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-t from-[#fff3e9]/60 via-transparent to-transparent"
      />
    </section>
  );
}