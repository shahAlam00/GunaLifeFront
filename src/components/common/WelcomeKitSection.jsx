import React from 'react';
import Prod1 from '../../assets/Prod1.png'

const WelcomeKitSection = () => {
    const kitItems = [
        { title: "5x Bonus Sachets", description: "Included with first order", originalPrice: "Dhs. 85", isFree: true },
        { title: "Essentials Box", description: "Display-ready sachet storage", originalPrice: "Dhs. 37", isFree: true },
        { title: "Longevity Box", description: "Dedicated stack ritual case", originalPrice: "Dhs. 37", isFree: true },
        { title: "Luxe Edition Mixer", description: "Included with first order", originalPrice: "Dhs. 85", isFree: true },
        { title: "Shaker Bottle", description: "Included with first order", originalPrice: "Dhs. 207", isFree: true },
    ];

    return (
        <section className="w-full bg-[var(--bg-cream)] text-[var(--brand-primary)] select-none overflow-hidden">
            <div className="w-full min-h-[640px] grid grid-cols-1 lg:grid-cols-2">

                {/* Left: Light panel */}
                <div className="bg-[var(--bg-cream)] p-8 sm:p-12 lg:p-16 flex flex-col justify-between items-center relative">
                    <div className="w-full text-center lg:text-left mb-8">
                        <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[var(--brand-primary)]/80">
                            WELCOME KIT — ARRIVES WITH FIRST ORDER
                        </p>
                    </div>
                    <div className="relative w-full max-w-[500px] my-auto py-6 flex items-center justify-center">
                        <img
                            src={Prod1}
                            alt="GunaLife Welcome Kit & Beckham Stack Pro"
                            className="w-full h-auto object-contain max-h-[380px]  transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                    <div className="hidden lg:block" />
                </div>

                {/* Right: Deep crimson panel */}
                <div className="bg-[var(--brand-deep)] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">

                    <div className="space-y-3">
                        <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[var(--text-blush)]/80">
                            BECKHAM STACK EXCLUSIVE
                        </p>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
                            Get started with the Beckham Stack today
                        </h2>
                        <p className="text-xs sm:text-sm text-[var(--text-blush)]/90 font-light leading-relaxed max-w-lg">
                            A first-order ritual kit designed for the complete GunaLife system: Daily Ultimate Essentials, Longevity, and the tools that make the habit feel inevitable.
                        </p>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                        <div>
                            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">The Beckham Stack Pro</h3>
                            <p className="text-[11px] text-[var(--text-blush)]/70">Daily Essentials + Daily Ultimate Longevity</p>
                        </div>
                        <div className="text-right">
                            <span className="font-serif text-2xl sm:text-3xl font-bold text-white">Dhs. 932.33</span>
                            <span className="text-xs text-[var(--text-blush)]/70 font-normal"> /mo</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--text-blush)]/80">
                            FIRST PURCHASE INCLUDES:
                        </p>
                        <div className="space-y-3">
                            {kitItems.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs border-b border-white/5 pb-2.5">
                                    <div>
                                        <p className="font-bold text-white text-xs sm:text-sm">{item.title}</p>
                                        <p className="text-[10px] text-[var(--text-blush)]/70">{item.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="line-through text-white/40 text-[11px]">{item.originalPrice}</span>
                                        <span className="font-bold text-white text-xs sm:text-sm uppercase tracking-wide">Free</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <span className="font-serif text-lg sm:text-xl font-bold text-white">Total</span>
                        <span className="text-xs sm:text-sm font-bold text-[var(--text-blush)] uppercase tracking-wider">Save Dhs. 451</span>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full py-4 bg-white hover:bg-[var(--bg-cream)] text-[var(--brand-primary)] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-200 shadow-xl active:scale-[0.98]">
                            SHOP THE BECKHAM STACK
                        </button>
                        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
                            {['Free gifts with first order', 'NSF Certified', 'Cancel anytime'].map((pill) => (
                                <span key={pill} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[9px] sm:text-[10px] font-medium text-white">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-blush)]" />
                                    {pill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WelcomeKitSection;
