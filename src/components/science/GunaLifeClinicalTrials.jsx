import React from "react";

const study = {
    label: "CLINICAL TRIAL 1",
    title: "GunaLife Daily Wellness Formula",
    objective: "To evaluate the tolerability and potential effects of a GunaLife wellness formulation on selected health and well-being measures in adults. Study objectives, endpoints, and methodology should be based on the actual approved research protocol.",
    duration: "Study-specific",
    participants: "Eligibility defined by the study protocol",
    parameters: [
        "Self-reported energy and everyday well-being",
        "Sleep quality and daily routine",
        "Digestive comfort and tolerance",
        "Quality of life and general wellness",
        "Product tolerability and safety observations",
        "Adherence to the study protocol",
        "Changes in predefined study outcomes",
    ],
};

export default function GunaLifeClinicalTrials() {
    return (
        <section
            aria-labelledby="gunalife-trials-heading"
            className="relative isolate min-h-screen w-full overflow-hidden bg-white px-5 pb-12 pt-8 text-[var(--brand-deep)] sm:px-8 sm:pb-16 sm:pt-10 lg:px-12 lg:pb-20 lg:pt-6 xl:px-16"
        >
            {/* Soft top glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,222,217,0.62),transparent_72%)]" />

            <div className="relative mx-auto w-full max-w-[1600px]">
                <header className="mb-8 grid grid-cols-1 items-start gap-5 sm:mb-10 sm:grid-cols-[1.2fr_0.8fr] sm:gap-8 lg:mb-12 lg:gap-12">
                    <div>
                        <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.08em] sm:text-[11px]">
                            CLINICAL TRIALS
                        </p>
                        <h2 id="gunalife-trials-heading" className="font-serif text-[32px] font-normal leading-[1.08] tracking-[-0.7px] sm:text-[38px] lg:text-[48px]">
                            Setting New Standards
                        </h2>
                    </div>
                    <p className="max-w-[500px] text-[13px] leading-[1.6] sm:justify-self-end sm:pt-4 sm:text-sm lg:max-w-[540px] lg:text-[15px]">
                        At GunaLife, we believe in responsible product development, transparent communication, and evidence-informed wellness. Our approach prioritizes ingredient quality, product consistency, and clear information about the research supporting our formulations.
                    </p>
                </header>

                <div className="grid grid-cols-1 overflow-hidden rounded-[14px] bg-[var(--bg-warm)] p-5 sm:p-8 md:grid-cols-2 md:gap-9 md:p-9 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-12 lg:p-10 xl:gap-14 xl:p-12">
                    {/* Left */}
                    <div className="min-w-0 py-1 lg:py-2">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.06em] sm:text-[11px]">{study.label}</p>

                        <h3 className="border-y border-[var(--brand-deep)] py-5 font-serif text-[27px] font-normal leading-[1.12] tracking-[-0.4px] sm:text-[31px] lg:text-[34px]">
                            {study.title}
                        </h3>

                        <div className="border-b border-[var(--brand-deep)] py-5">
                            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.04em] sm:text-[11px]">OBJECTIVE:</p>
                            <p className="text-[13px] leading-[1.65] sm:text-sm lg:text-[14px]">{study.objective}</p>
                        </div>

                        <div className="grid grid-cols-[100px_minmax(0,1fr)] border-b border-[var(--brand-deep)] py-5 sm:grid-cols-[120px_minmax(0,1fr)]">
                            <div className="border-r border-[var(--brand-deep)] pr-4">
                                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.04em] sm:text-[11px]">DURATION:</p>
                                <p className="text-[13px] leading-[1.6] sm:text-sm">{study.duration}</p>
                            </div>
                            <div className="min-w-0 pl-4">
                                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.04em] sm:text-[11px]">PARTICIPANTS:</p>
                                <p className="text-[13px] leading-[1.6] sm:text-sm">{study.participants}</p>
                            </div>
                        </div>

                        <div className="pt-5">
                            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.04em] sm:text-[11px]">KEY PARAMETERS TO STUDY:</p>
                            <ul className="list-disc space-y-1.5 pl-5 text-[13px] leading-[1.5] marker:text-[var(--brand-deep)] sm:text-sm">
                                {study.parameters.map((p) => <li key={p}>{p}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Right: image */}
                    <div className="relative mt-7 min-h-[440px] overflow-hidden rounded-[12px] bg-[var(--border-warm)] sm:min-h-[540px] md:mt-0 md:min-h-[600px] lg:min-h-[680px] xl:min-h-[740px]">
                        <img
                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=85"
                            alt="Woman practicing a wellness-focused lifestyle"
                            width="1200" height="1600"
                            loading="lazy" decoding="async"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/40 via-transparent to-transparent" />

                        <div className="absolute inset-x-3 bottom-3 rounded-[11px] border border-white/70 bg-[var(--brand-primary)]/85 p-4 text-white backdrop-blur-[3px] sm:inset-x-5 sm:bottom-5 sm:p-6 lg:inset-x-6 lg:bottom-6 lg:p-7">
                            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.05em] sm:text-[11px]">
                                GUNALIFE WELLNESS & QUALITY
                            </p>
                            <p className="text-[13px] leading-[1.6] sm:text-sm lg:text-[15px]">
                                Our approach focuses on thoughtful ingredient selection, consistent product quality, and evidence-informed wellness practices designed to support informed everyday choices.
                            </p>
                            <p className="mt-4 text-[12px] leading-[1.6] text-white/90 sm:text-[13px]">
                                Product-specific clinical evidence and study details should be shared when verified documentation is available.
                            </p>
                            <a href="/quality" className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-white underline decoration-white/70 underline-offset-4 transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-xs">
                                Explore GunaLife Quality <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
