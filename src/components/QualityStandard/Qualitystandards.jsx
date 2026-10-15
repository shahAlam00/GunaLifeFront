import React from "react";
import { Icon, Reveal, SectionHeading, SmartImage } from "./Qualityshared";

// 👉 Put your photo at: /public/images/quality/clean.jpg
const CLEAN_IMG = "/images/quality/clean.jpg";

const standards = [
    {
        icon: "leaf",
        title: "Non-GMO",
        text: "Ingredients from non-genetically modified sources.",
    },
    {
        icon: "heart",
        title: "100% Vegan",
        text: "No animal-derived ingredients, ever.",
    },
    {
        icon: "check",
        title: "Gluten-free",
        text: "Suitable for gluten-sensitive routines.",
    },
    {
        icon: "sparkle",
        title: "No artificial additives",
        text: "No artificial colors, flavors or sweeteners.",
    },
    {
        icon: "drop",
        title: "No added sugar",
        text: "Naturally balanced, without sugar spikes.",
    },
    {
        icon: "shield",
        title: "Allergen-aware",
        text: "Formulated and labelled with care for sensitivities.",
    },
];

export default function QualityStandards() {
    return (
        <section className="bg-cream py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-16">
                <Reveal>
                    <SectionHeading
                        eyebrow="Our standards"
                        title="Clean by design, not by claim"
                        text="Six non-negotiables that guide every formula we create."
                    />
                </Reveal>

                <div className="mt-14 grid gap-5 lg:grid-cols-4">
                    {/* feature image card */}
                    <Reveal className="lg:col-span-2 lg:row-span-3">
                        <div className="relative h-full min-h-[360px] overflow-hidden rounded-[2rem]">
                            <SmartImage
                                src={CLEAN_IMG}
                                alt="Clean ingredients"
                                className="absolute inset-0 h-full w-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-deep)] via-[color:var(--brand-deep)]/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-8">
                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-blush">
                                    The GunaLife promise
                                </span>
                                <h3 className="mt-2 text-3xl font-extrabold leading-tight text-white">
                                    Only what your body needs. Nothing it doesn't.
                                </h3>
                            </div>
                        </div>
                    </Reveal>

                    {/* small cards */}
                    {standards.map((s, i) => (
                        <Reveal key={s.title} delay={i * 80}>
                            <div className="group h-full rounded-2xl border border-warm bg-warm p-6 transition hover:-translate-y-1 hover:border-[color:var(--brand-teal)] hover:bg-white hover:shadow-xl hover:shadow-[#061F50]/10">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[color:var(--brand-teal)] transition group-hover:bg-[color:var(--brand-teal)] group-hover:text-white">
                                    <Icon name={s.icon} />
                                </span>
                                <h3 className="mt-5 text-lg font-extrabold text-brand-primary">
                                    {s.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--text-muted)]">
                                    {s.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}