import React from "react";

const researchCards = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
        alt: "Healthcare professional in a research environment",
        title: "Science-Informed Wellness",
        description: "At GunaLife, we believe everyday wellness starts with thoughtful choices. We focus on science-informed approaches, quality-conscious product development, and helping people make informed decisions about their health.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
        alt: "Scientific laboratory equipment",
        title: "A Thoughtful Approach to Quality",
        description: "Quality matters at every step. From ingredient selection to product development, our approach emphasizes transparency, consistency, and responsible standards to help make wellness a confident part of everyday life.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
        alt: "Scientists working in a modern laboratory",
        title: "Wellness for Everyday Living",
        description: "Everyone's wellness journey is different. GunaLife aims to make thoughtful wellness choices easier to understand, with a focus on balanced routines, informed decisions, and habits that support long-term well-being.",
    },
];

export default function GunaLifeResearch() {
    return (
        <section
            aria-labelledby="gunalife-research-heading"
            className="relative isolate w-full overflow-hidden bg-[var(--bg-warm)] px-5 py-12 text-[var(--brand-deep)] sm:px-8 sm:py-14 lg:px-10 lg:py-[52px] xl:px-12"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_10%,rgba(255,239,220,0.28),transparent_55%)]" />

            <div className="mx-auto w-full max-w-[1400px]">
                <header className="mb-7 sm:mb-8 lg:mb-7">
                    <h2
                        id="gunalife-research-heading"
                        className="max-w-[1050px] font-serif text-[27px] font-normal leading-[1.15] tracking-[-0.65px] sm:text-[32px] lg:text-[38px] lg:leading-[1.16]"
                    >
                        GunaLife's Approach to Science, Quality
                        <br className="hidden sm:block" /> and Everyday Wellness
                    </h2>
                    <p className="mt-4 max-w-[1250px] text-[12px] leading-[1.55] sm:text-[13px] lg:mt-3 lg:text-[13px] lg:leading-[1.5]">
                        At GunaLife, we believe wellness should be thoughtful, transparent, and grounded in informed choices. Our approach brings together quality-conscious product development, science-informed wellness principles, and a commitment to helping people understand the choices they make every day.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-3 lg:gap-5 xl:gap-6">
                    {researchCards.map((card) => (
                        <article key={card.id} className="group flex min-w-0 flex-col">
                            <div className="relative aspect-[1.18/1] w-full overflow-hidden rounded-[9px] bg-[var(--border-warm)]">
                                <img
                                    src={card.image}
                                    alt={card.alt}
                                    width="1000"
                                    height="850"
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                                />
                            </div>
                            <div className="flex flex-1 flex-col pt-3">
                                <h3 className="mb-1.5 font-sans text-[16px] font-medium leading-[1.3] tracking-[-0.2px] lg:text-[17px]">
                                    {card.title}
                                </h3>
                                <p className="text-[12px] leading-[1.55] tracking-[-0.05px] sm:text-[13px] lg:text-[13px]">
                                    {card.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 flex justify-center lg:mt-6">
                    <a
                        href="/about"
                        className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[var(--brand-primary)] px-8 py-3 font-sans text-[11px] font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[var(--brand-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-warm)] sm:min-w-[170px]"
                    >
                        Discover GunaLife
                    </a>
                </div>
            </div>
        </section>
    );
}
