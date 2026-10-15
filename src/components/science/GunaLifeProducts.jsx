import React from "react";

const products = [
    {
        id: 1,
        badge: "BEST SELLER",
        tag: "FEEL AMAZING TODAY",
        name: "GunaLife Daily Essentials",
        subtitle: "All-in-One Wellness",
        description: "A thoughtfully designed daily wellness formula to complement your everyday routine.",
        price: "Explore product",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=85",
        imageAlt: "Premium wellness product arrangement",
        href: "/products/daily-essentials",
    },
    {
        id: 2,
        badge: "",
        tag: "YOUR DAILY WELLNESS RITUAL",
        name: "GunaLife Longevity",
        subtitle: "Everyday Wellness",
        description: "Discover a considered approach to wellness, with a focus on quality and thoughtful ingredient selection.",
        price: "Explore product",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85",
        imageAlt: "Premium skincare and wellness product display",
        href: "/products/longevity",
        cta: true,
    },
    {
        id: 3,
        badge: "POPULAR",
        tag: "YOUR COMPLETE DAILY RITUAL",
        name: "GunaLife Wellness Set",
        subtitle: "Daily Essentials Collection",
        description: "Bring your wellness essentials together with a collection designed for a considered daily routine.",
        price: "Explore collection",
        image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=85",
        imageAlt: "Wellness and personal care products",
        href: "/products/wellness-set",
    },
];

function ProductCard({ product }) {
    return (
        <article className="group min-w-0">
            <div className="relative aspect-[1.12/1] w-full overflow-hidden rounded-[12px] bg-[var(--bg-warm)] sm:aspect-[1.04/1] lg:aspect-[1.04/1]">
                <img
                    src={product.image}
                    alt={product.imageAlt}
                    width="1000" height="960"
                    loading="lazy" decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                />

                {product.badge && (
                    <div className="absolute right-3 top-3 flex h-[48px] w-[48px] items-center justify-center bg-[var(--brand-primary)] text-center text-[8px] font-bold uppercase leading-[1.15] text-white [clip-path:polygon(50%_0%,88%_16%,100%_50%,88%_84%,50%_100%,12%_84%,0%_50%,12%_16%)] sm:h-[54px] sm:w-[54px]">
                        {product.badge}
                    </div>
                )}

                {product.cta && (
                    <a
                        href={product.href}
                        className="absolute bottom-3 right-3 inline-flex min-h-[36px] items-center justify-center rounded-full border border-[var(--brand-deep)]/20 bg-[var(--bg-cream)] px-5 text-[10px] font-bold uppercase text-[var(--brand-deep)] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                    >
                        Discover
                    </a>
                )}
            </div>

            <div className="pt-3">
                <span className="inline-flex max-w-full items-center rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--accent-gold)] px-3 py-[6px] text-[8px] font-bold uppercase leading-none tracking-[0.02em] text-white sm:text-[9px]">
                    {product.tag}
                </span>

                <h3 className="mt-3 font-serif text-[20px] font-normal leading-[1.12] tracking-[-0.35px] text-[var(--brand-deep)] sm:text-[21px] lg:text-[22px]">
                    {product.name}
                    <span className="block">{product.subtitle}</span>
                </h3>

                <p className="mt-2 text-[12px] leading-[1.55] text-[var(--brand-deep)] sm:text-[13px]">
                    {product.description}
                </p>

                <a
                    href={product.href}
                    className="mt-2 inline-flex text-[11px] font-semibold text-[var(--brand-deep)] underline decoration-[var(--brand-deep)]/40 underline-offset-4 transition-colors hover:text-[var(--brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                    {product.price}
                </a>
            </div>
        </article>
    );
}

export default function GunaLifeProducts() {
    return (
        <section className="w-full bg-white px-5 py-10 text-[var(--brand-deep)] sm:px-8 sm:py-12 lg:px-10 lg:py-12 xl:px-12">
            <div className="mx-auto w-full max-w-[1400px]">
                <header className="mb-7 sm:mb-8">
                    <h2 className="font-serif text-[34px] font-normal leading-[1.08] tracking-[-1px] sm:text-[40px] lg:text-[44px]">
                        Premium Core Nutrition
                    </h2>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] sm:gap-x-6 sm:text-[11px]">
                        {["Thoughtfully selected ingredients", "Quality-conscious formulations", "Wellness for everyday living"].map((item) => (
                            <span key={item} className="inline-flex items-center gap-1.5">
                                <span className="flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[var(--brand-primary)] text-[8px] font-bold text-white">✓</span>
                                {item}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-3 xl:gap-x-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
