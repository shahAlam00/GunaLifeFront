
import React, { useState } from "react";

const ingredients = [
    {
        id: 1,
        name: "Fucoidan",
        image:
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=240&q=80",
        description:
            "Fucoidan is a naturally occurring compound found in certain brown seaweeds. It is studied for its potential antioxidant and immune-related properties.",
        detail:
            "GunaLife ingredient focus: understand the source, quality, and role of seaweed-derived ingredients in a thoughtfully designed wellness routine.",
    },
    {
        id: 2,
        name: "Berberine HCl",
        image:
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=240&q=80",
        description:
            "Berberine is a plant-derived compound that has been studied for its potential role in metabolic health and glucose regulation.",
        detail:
            "Ingredient focus: plant-derived compounds, responsible formulation, and evidence-informed approaches to wellness.",
    },
    {
        id: 3,
        name: "Haematococcus Pluvialis",
        image:
            "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=240&q=80",
        description:
            "Haematococcus pluvialis is a microalga known as a natural source of astaxanthin, a carotenoid with antioxidant activity.",
        detail:
            "Ingredient focus: naturally occurring carotenoids and their role in nutritional research.",
    },
    {
        id: 4,
        name: "Ashwagandha",
        image:
            "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=240&q=80",
        description:
            "Ashwagandha is a traditional botanical that continues to be studied for its potential relationship with stress and well-being.",
        detail:
            "Ingredient focus: botanical sourcing, formulation quality, and understanding the available scientific evidence.",
    },
    {
        id: 5,
        name: "Curcumin",
        image:
            "https://images.unsplash.com/photo-1615485500704-8e990f9900f4?auto=format&fit=crop&w=240&q=80",
        description:
            "Curcumin is a naturally occurring compound in turmeric that has received scientific attention for its antioxidant and biological properties.",
        detail:
            "Ingredient focus: turmeric-derived compounds, ingredient composition, and responsible nutritional research.",
    },
    {
        id: 6,
        name: "Green Tea Extract",
        image:
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=240&q=80",
        description:
            "Green tea extract contains plant compounds called catechins, including EGCG, which are widely studied in nutrition research.",
        detail:
            "Ingredient focus: plant polyphenols, extract standardization, and thoughtful ingredient selection.",
    },
    {
        id: 7,
        name: "CoQ10",
        image:
            "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=240&q=80",
        description:
            "Coenzyme Q10 is a compound naturally present in the body that participates in cellular energy production.",
        detail:
            "Ingredient focus: cellular energy pathways and the role of essential compounds in human biology.",
    },
    {
        id: 8,
        name: "Resveratrol",
        image:
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=240&q=80",
        description:
            "Resveratrol is a plant-derived polyphenol found in sources such as grapes. It is studied for its antioxidant properties.",
        detail:
            "Ingredient focus: naturally occurring polyphenols, scientific research, and evidence-informed wellness.",
    },
];

function PlusIcon({ expanded }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className={`h-7 w-7 shrink-0 transition-transform duration-300 ${expanded ? "rotate-45" : ""
                }`}
        >
            <path
                d="M12 3V21M3 12H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
        </svg>
    );
}

export default function GunaLifeIngredients() {
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleIngredient = (id) => {
        setExpandedItems((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        );
    };

    return (
        <section
            aria-label="GunaLife ingredients and wellness philosophy"
            className="grid w-full grid-cols-1 bg-white text-[var(--brand-deep)] lg:h-screen lg:min-h-[560px] lg:grid-cols-2 lg:overflow-hidden mt-4"
        >
            {/* LEFT PANEL: Sticky on desktop */}
            <div className="relative isolate flex w-full flex-col justify-center overflow-hidden bg-[var(--brand-primary)] px-7 py-16 text-white sm:px-12 sm:py-20 lg:sticky lg:top-0 lg:h-screen lg:min-h-[560px] lg:px-10 lg:py-12 xl:px-[8%]">
                {/* Burgundy gradient */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_35%,rgba(207,41,59,0.65),transparent_48%),radial-gradient(ellipse_at_90%_90%,rgba(77,0,12,0.45),transparent_50%),linear-gradient(120deg,var(--brand-primary),#790B1A)]"
                />

                {/* Decorative particle texture */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 opacity-30"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #F65B67 1.5px, transparent 2px), radial-gradient(circle, #F65B67 1px, transparent 2px)",
                        backgroundSize: "19px 19px, 31px 31px",
                        backgroundPosition: "0 0, 9px 12px",
                        maskImage:
                            "linear-gradient(120deg, black 0%, black 48%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(120deg, black 0%, black 48%, transparent 100%)",
                    }}
                />

                {/* Left content */}
                <div className="mx-auto w-full max-w-[570px] lg:mx-0">
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/75 sm:text-sm">
                        The GunaLife Approach
                    </p>

                    <h2 className="max-w-[520px] font-serif text-[clamp(37px,4.1vw,58px)] font-normal leading-[1.04] tracking-[-1.4px] text-[#F4A0A0]">
                        A Deeper Dive:
                        <br />
                        The Science of
                        <br />
                        Everyday Wellness
                    </h2>

                    <div className="mt-8 max-w-[470px] space-y-4 font-sans text-[14px] leading-[1.65] text-white/95 sm:text-[15px]">
                        <p>
                            At GunaLife, our approach to wellness begins with
                            thoughtful ingredient selection, quality-conscious
                            product development, and an appreciation for the
                            science behind nutrition.
                        </p>

                        <p>
                            Each ingredient has its own story, source, and
                            characteristics. We believe in exploring these
                            differences and making wellness information easier
                            to understand.
                        </p>

                        <p className="text-white/80">
                            Discover the ingredients, learn about their origins,
                            and explore the research behind them.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#F4A0A0]" />
                        <span className="text-xs uppercase tracking-[0.18em] text-white/80">
                            Explore the ingredients
                        </span>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL: Independently scrollable on desktop */}
            <div
                className="min-h-0 w-full bg-white lg:h-screen lg:overflow-y-auto lg:overscroll-contain no-scrollbar"
            >
                <div className="mx-auto w-full max-w-[760px] px-5 py-5 sm:px-9 sm:py-8 lg:px-10 lg:py-10 xl:px-[8%]">
                    <div className="mb-6 border-b border-[var(--border-warm)] pb-5 lg:mb-2 lg:pb-6">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary)]/70">
                            Inside GunaLife
                        </p>
                        <h3 className="mt-2 font-serif text-2xl font-normal text-[var(--brand-deep)] sm:text-3xl">
                            Explore Our Ingredients
                        </h3>
                        <p className="mt-2 max-w-lg text-sm leading-6 text-[var(--brand-deep)]/75">
                            Discover the sources, characteristics, and research
                            associated with selected wellness ingredients.
                        </p>
                    </div>

                    <div>
                        {ingredients.map((ingredient, index) => {
                            const isExpanded = expandedItems.includes(ingredient.id);
                            const panelId = `ingredient-details-${ingredient.id}`;

                            return (
                                <article
                                    key={ingredient.id}
                                    className="border-b border-[var(--border-warm)] last:border-b-0"
                                >
                                    <div className="flex items-center gap-3 py-6 sm:gap-4 sm:py-7 lg:gap-4 lg:py-7">
                                        {/* Circular ingredient image */}
                                        <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full bg-[var(--bg-warm)] sm:h-[86px] sm:w-[86px] lg:h-[94px] lg:w-[94px]">
                                            <img
                                                src={ingredient.image}
                                                alt=""
                                                width="188"
                                                height="188"
                                                loading={index < 2 ? "eager" : "lazy"}
                                                decoding="async"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* Name and description */}
                                        <div className="min-w-0 flex-1">
                                            <h4 className="font-serif text-[18px] font-semibold leading-tight tracking-[-0.35px] text-[var(--brand-deep)] sm:text-xl">
                                                {ingredient.name}
                                            </h4>

                                            <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--brand-deep)] sm:text-[14px]">
                                                {ingredient.description}
                                            </p>
                                        </div>

                                        {/* Expand button */}
                                        <button
                                            type="button"
                                            aria-expanded={isExpanded}
                                            aria-controls={panelId}
                                            aria-label={`${isExpanded ? "Collapse" : "Expand"} ${ingredient.name} details`}
                                            onClick={() => toggleIngredient(ingredient.id)}
                                            className="flex h-10 w-8 shrink-0 items-center justify-center text-[var(--brand-deep)] transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 sm:w-10"
                                        >
                                            <PlusIcon expanded={isExpanded} />
                                        </button>
                                    </div>

                                    {/* Expandable details */}
                                    <div
                                        id={panelId}
                                        hidden={!isExpanded}
                                        className="pb-6 pl-0 pr-10 sm:pb-7 sm:pl-[102px] lg:pl-[110px]"
                                    >
                                        <p className="text-sm leading-6 text-[var(--brand-deep)]/80">
                                            {ingredient.detail}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <p className="border-t border-[var(--border-warm)] py-6 text-xs leading-5 text-[var(--brand-deep)]/60">
                        Ingredient information is provided for general educational
                        purposes and is not medical advice. Research findings do
                        not necessarily establish the effects of a finished product.
                    </p>
                </div>
            </div>
        </section>
    );
}
