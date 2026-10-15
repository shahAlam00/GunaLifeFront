import React from "react";

const study = {
    label: "WELLNESS STUDY 2",
    title: "GunaLife Daily Wellness Formula",
    objective: "To describe the formulation, quality considerations, and intended wellness positioning of GunaLife products. Any efficacy or safety outcomes should be reported only when supported by a completed, appropriately designed study.",
    duration: "Protocol-dependent",
    participants: "Defined by the approved study protocol",
    parameters: [
        "Ingredient identity and formulation quality",
        "Product tolerability and safety observations",
        "Self-reported energy and everyday well-being",
        "Sleep quality and daily routines",
        "Digestive comfort and wellness measures",
        "Quality of life and participant-reported outcomes",
        "Changes in predefined study endpoints",
    ],
};

const PRODUCT_IMAGE = "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=85";

export default function GunaLifeLongevityStudy() {
    return (
        <section className="w-full bg-white px-4 py-5 text-[var(--brand-deep)] sm:px-7 sm:py-8 lg:px-10 lg:py-10 xl:px-12">
            <div className="mx-auto w-full max-w-[1600px]">
                <article className="grid grid-cols-1 gap-6 rounded-[14px] bg-[var(--bg-warm)] p-5 sm:p-7 md:grid-cols-2 md:gap-8 md:p-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:p-10 xl:gap-[68px] xl:p-12">

                    {/* LEFT */}
                    <div className="min-w-0">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.06em] sm:text-[11px]">{study.label}</p>

                        <h2 className="border-y border-[var(--brand-deep)] py-4 font-serif text-[27px] font-normal leading-[1.12] tracking-[-0.55px] sm:text-[31px] lg:text-[34px]">
                            {study.title}
                        </h2>

                        <div className="border-b border-[var(--brand-deep)] py-5">
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.04em] sm:text-[11px]">OBJECTIVE:</p>
                            <p className="text-[12px] leading-[1.55] sm:text-[13px] lg:text-[14px]">{study.objective}</p>
                        </div>

                        <div className="grid grid-cols-[95px_minmax(0,1fr)] border-b border-[var(--brand-deep)] py-5 sm:grid-cols-[115px_minmax(0,1fr)]">
                            <div className="border-r border-[var(--brand-deep)] pr-3">
                                <p className="mb-3 font-mono text-[10px] uppercase sm:text-[11px]">DURATION:</p>
                                <p className="text-[12px] leading-[1.5] sm:text-[13px]">{study.duration}</p>
                            </div>
                            <div className="min-w-0 pl-4">
                                <p className="mb-3 font-mono text-[10px] uppercase sm:text-[11px]">PARTICIPANTS:</p>
                                <p className="text-[12px] leading-[1.5] sm:text-[13px]">{study.participants}</p>
                            </div>
                        </div>

                        <div className="pt-5">
                            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.04em] sm:text-[11px]">KEY PARAMETERS:</p>
                            <ul className="list-disc space-y-1 pl-4 text-[12px] leading-[1.45] marker:text-[var(--brand-deep)] sm:text-[13px]">
                                {study.parameters.map((p) => <li key={p}>{p}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: image */}
                    <div className="relative min-h-[420px] overflow-hidden rounded-[12px] bg-[var(--border-warm)] sm:min-h-[500px] md:min-h-[100%] lg:min-h-[650px] xl:min-h-[720px]">
                        <img
                            src={PRODUCT_IMAGE}
                            alt="Placeholder wellness product photograph for GunaLife"
                            width="1400" height="1800"
                            loading="lazy" decoding="async"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/40 via-transparent to-transparent" />

                        <div className="absolute inset-x-3 bottom-3 rounded-[11px] border border-white/70 bg-[var(--brand-primary)]/85 p-4 text-white backdrop-blur-[2px] sm:inset-x-5 sm:bottom-5 sm:p-5 lg:inset-x-6 lg:bottom-6 lg:p-6">
                            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.04em] sm:text-[11px]">
                                GUNALIFE QUALITY & WELLNESS
                            </p>
                            <p className="text-[12px] leading-[1.55] sm:text-[13px] lg:text-[14px]">
                                Thoughtfully developed wellness products with a focus on ingredient awareness, quality-conscious formulation, and informed everyday choices.
                            </p>
                            <p className="mt-4 text-[11px] leading-[1.55] text-white/95 sm:text-[12px]">
                                Explore product ingredients, formulation details, and verified quality information.
                            </p>
                            <a href="/quality" className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide underline decoration-white/70 underline-offset-4 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[11px]">
                                Explore GunaLife Quality <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
