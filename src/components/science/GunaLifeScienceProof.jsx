import React from "react";

const stats = [
    { value: "95%", description: "Feel more energized and ready for everyday activities." },
    { value: "80%", description: "Prioritize restful sleep and a consistent routine." },
    { value: "85%", description: "Value digestive wellness and everyday comfort." },
    { value: "75%", description: "Focus on mental clarity and daily well-being." },
];

export default function GunaLifeScienceProof() {
    return (
        <section className="relative isolate w-full overflow-hidden bg-[var(--brand-deep)] text-white">
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_45%,rgba(213,44,62,0.62),transparent_45%),radial-gradient(ellipse_at_95%_10%,rgba(94,0,13,0.7),transparent_45%),linear-gradient(110deg,var(--brand-deep)_0%,var(--brand-primary)_52%,var(--brand-deep)_100%)]"
            />

            {/* Decorative particles */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-30"
                style={{
                    backgroundImage: "radial-gradient(circle, #F65A64 1.4px, transparent 2px), radial-gradient(circle, #F65A64 1px, transparent 2px)",
                    backgroundSize: "19px 19px, 31px 31px",
                    backgroundPosition: "0 0, 8px 11px",
                    maskImage: "linear-gradient(90deg, black 0%, black 36%, transparent 58%)",
                    WebkitMaskImage: "linear-gradient(90deg, black 0%, black 36%, transparent 58%)",
                }}
            />

            <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_1.12fr] lg:gap-12 lg:px-14 lg:py-16 xl:gap-20 xl:px-[6.1%]">

                {/* LEFT: Stats */}
                <div className="w-full max-w-[570px]">
                    <p className="mb-7 font-sans text-base font-semibold tracking-[-0.3px] sm:mb-8 sm:text-lg">
                        Daily Ultimate Essentials
                    </p>
                    <div className="grid grid-cols-2 gap-x-7 gap-y-8 sm:gap-x-12 sm:gap-y-10">
                        {stats.map((stat) => (
                            <article key={stat.value} className="min-w-0">
                                <p className="font-sans text-[clamp(46px,5.4vw,76px)] font-normal leading-[0.95] tracking-[-2px] text-[var(--accent-gold)]">
                                    {stat.value}
                                </p>
                                <div className="mb-2 mt-3 h-px w-full max-w-[230px] bg-white/80" />
                                <p className="max-w-[235px] font-sans text-[13px] leading-[1.5] text-white sm:text-[15px]">
                                    {stat.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Brand statement */}
                <div className="mx-auto w-full max-w-[620px] text-center lg:ml-auto">
                    <h2 className="mb-7 font-serif text-[clamp(37px,4.5vw,58px)] font-normal leading-[1.04] tracking-[-1.5px] text-white sm:mb-8">
                        Science-Informed.
                        <br />Everyday Wellness.
                        <br />A Better You.
                        <sup className="ml-1 align-super font-sans text-sm">*</sup>
                    </h2>

                    {/* Certification banner */}
                    <div className="mb-6 flex flex-col items-center justify-center gap-4 rounded-[15px] border-2 border-[var(--accent-gold)] bg-[#FFF0AE] px-4 py-4 text-[#3F180D] shadow-[0_8px_25px_rgba(255,190,35,0.12)] sm:flex-row sm:gap-5 sm:px-5 sm:py-4">
                        <div className="flex shrink-0 items-center gap-3">
                            <span aria-hidden="true" className="text-[34px] leading-none">🏆</span>
                            <div className="text-left">
                                <p className="font-sans text-sm font-extrabold leading-tight sm:text-base">QUALITY-FOCUSED WELLNESS</p>
                                <p className="mt-1 text-xs font-semibold sm:text-[13px]">Thoughtful Ingredient Selection</p>
                            </div>
                        </div>
                        <div className="hidden h-12 w-px shrink-0 bg-[#DDBD61] sm:block" />
                        <div className="text-center font-sans text-xs font-semibold leading-[1.55] sm:text-left sm:text-[13px]">
                            Wellness Made<br />Thoughtful
                        </div>
                    </div>

                    <p className="mx-auto mb-6 max-w-[530px] font-sans text-[14px] leading-[1.55] text-white sm:text-base">
                        At GunaLife, we believe that wellness begins with informed choices and consistent everyday habits.
                    </p>

                    <a
                        href="/quality"
                        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--brand-primary)] px-7 py-3 font-sans text-sm font-bold uppercase tracking-[-0.2px] text-white no-underline transition-colors duration-200 hover:bg-[var(--brand-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] sm:min-w-[330px]"
                    >
                        Explore Our Quality Approach
                    </a>
                </div>
            </div>
        </section>
    );
}
