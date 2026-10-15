import React from "react";
import { Icon, Reveal } from "../QualityStandard/Qualityshared";

const HIGHLIGHTS = [
    {
        number: "01",
        title: "Science-led Wellness",
        description:
            "Thoughtfully developed wellness solutions inspired by modern nutritional science.",
        icon: "sparkle",
    },
    {
        number: "02",
        title: "Quality First",
        description:
            "A commitment to carefully selected ingredients and uncompromising quality.",
        icon: "shield",
    },
    {
        number: "03",
        title: "Healthy Longevity",
        description:
            "Supporting everyday wellbeing with a long-term approach to healthier living.",
        icon: "heart",
    },
];

export default function AboutHero() {
    return (
        <section
            id="about"
            className="relative isolate overflow-hidden bg-warm"
        >
            {/* Soft background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(45% 45% at 100% 0%, rgba(7,155,131,0.12), transparent 70%), radial-gradient(40% 45% at 0% 100%, rgba(233,154,184,0.16), transparent 70%)",
                }}
            />

            {/* Subtle brand watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-4%] top-[8%] -z-10 select-none"
            >
                <span className="font-serif text-[20vw] font-bold leading-none tracking-tight text-brand-primary opacity-[0.035]">
                    G
                </span>
            </div>

            <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-16 lg:pb-20 lg:pt-12">
                {/* Main content */}
                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    {/* Left content */}
                    <Reveal>
                        <div className="max-w-2xl">
                            {/* Eyebrow */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-muted)] bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-teal)] shadow-sm sm:text-xs">
                                <Icon
                                    name="sparkle"
                                    className="h-4 w-4"
                                />
                                The GunaLife Philosophy
                            </div>

                            {/* Heading */}
                            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-brand-primary sm:text-5xl md:text-6xl lg:text-[64px]">
                                A better way to
                                <span className="mt-1 block text-[color:var(--brand-teal)]">
                                    live longer.
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-5 max-w-xl text-sm leading-7 text-[color:var(--text-on-cream)] sm:text-base sm:leading-8">
                                At GunaLife, we believe wellness begins with
                                better choices. Our philosophy brings together
                                thoughtful nutrition, carefully selected
                                ingredients and a science-led approach to
                                everyday wellbeing — making healthy living
                                feel simple, purposeful and sustainable.
                            </p>

                            {/* Brand values */}
                            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                                {[
                                    "Mindful Nutrition",
                                    "Quality Ingredients",
                                    "Everyday Wellness",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-teal)]/10">
                                            <Icon
                                                name="check"
                                                className="h-3 w-3 text-[color:var(--brand-teal)]"
                                            />
                                        </span>

                                        <span className="text-xs font-semibold text-brand-primary sm:text-sm">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#story"
                                    className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#061F50]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-light"
                                >
                                    Discover Our Story
                                    <Icon
                                        name="arrow"
                                        className="h-4 w-4"
                                    />
                                </a>

                                <a
                                    href="#team"
                                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-muted)] bg-white/80 px-6 py-3 text-sm font-bold text-brand-primary transition duration-300 hover:border-[color:var(--brand-teal)] hover:text-[color:var(--brand-teal)]"
                                >
                                    Meet Our Team
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right content: Premium typography panel */}
                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_25px_80px_rgba(6,31,80,0.08)] backdrop-blur-sm sm:p-8">
                                {/* Decorative elements */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[color:var(--brand-teal)]/15"
                                />

                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full border border-[color:var(--brand-teal)]/10"
                                />

                                {/* Brand label */}
                                <div className="relative flex items-center justify-between gap-3">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--brand-teal)] sm:text-xs">
                                        Our Purpose
                                    </span>

                                    <span className="rounded-full bg-[color:var(--brand-teal)]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[color:var(--brand-teal)] sm:text-[10px]">
                                        Advanced Longevity
                                    </span>
                                </div>

                                {/* Main statement */}
                                <div className="relative py-9 sm:py-12">
                                    <span
                                        aria-hidden="true"
                                        className="font-serif text-6xl leading-none text-[color:var(--brand-teal)]/30 sm:text-7xl"
                                    >
                                        “
                                    </span>

                                    <h2 className="-mt-3 max-w-md font-serif text-3xl font-bold leading-tight text-brand-primary sm:text-4xl md:text-[42px]">
                                        Goodness in every choice.
                                        <span className="mt-1 block italic text-[color:var(--brand-teal)]">
                                            Wellness in every day.
                                        </span>
                                    </h2>

                                    <p className="mt-5 max-w-sm text-sm leading-7 text-[color:var(--text-on-cream)]">
                                        Inspired by the meaning of Guna —
                                        quality, virtue and good qualities —
                                        we put thoughtful wellness at the
                                        heart of everything we do.
                                    </p>
                                </div>

                                {/* Brand signature */}
                                <div className="flex items-center gap-4 border-t border-[color:var(--border-muted)] pt-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-xl font-bold text-white">
                                        G
                                    </div>

                                    <div>
                                        <p className="font-serif text-lg font-bold tracking-[0.12em] text-brand-primary">
                                            GUNALIFE
                                        </p>

                                        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-teal)] sm:text-[10px]">
                                            Advanced Longevity
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div
                                aria-hidden="true"
                                className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[color:var(--brand-teal)] to-pink-300"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Quality highlights */}
                <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-3 lg:mt-20">
                    {HIGHLIGHTS.map((item, index) => (
                        <Reveal key={item.number} delay={index * 100}>
                            <div className="group h-full rounded-2xl border border-[color:var(--border-muted)] bg-white/65 p-5 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-teal)]/40 hover:bg-white hover:shadow-xl hover:shadow-[#061F50]/5 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--brand-teal)]/10 text-[color:var(--brand-teal)] transition group-hover:bg-brand-primary group-hover:text-white">
                                        <Icon
                                            name={item.icon}
                                            className="h-5 w-5"
                                        />
                                    </div>

                                    <span className="font-serif text-2xl font-bold text-brand-primary/15">
                                        {item.number}
                                    </span>
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-brand-primary">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[color:var(--text-on-cream)]">
                                    {item.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}