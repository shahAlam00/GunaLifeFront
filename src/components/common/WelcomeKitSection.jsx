import React from 'react';
import Prod1 from '../../assets/Prod1.png';

const WelcomeKitSection = () => {
    // Pricing calculation
    const originalPrice = 1999;
    const discountPercent = 30;
    const discountedPrice = Math.round(originalPrice * (1 - discountPercent / 100)); // ₹1,399
    const totalSavings = originalPrice - discountedPrice; // ₹600

    // Updated Bonus Items
    const bonusItems = [
        { title: "30-Day Anti-Aging Program", description: "Daily wellness, nutrition and skincare routine" },
        { title: "90-Day Longevity Countdown", description: "A structured 90-day habit tracker" },
        { title: "Longevity Diet Chart", description: "A practical nutrition and meal-planning guide" },
        { title: "Extra Voucher for Second Order", description: "A discount voucher for a future purchase" },
    ];

    return (
        <section className="w-full bg-[var(--bg-cream)] text-[var(--brand-primary)] select-none overflow-hidden">
            <div className="w-full min-h-[680px] grid grid-cols-1 lg:grid-cols-2">

                {/* Left: Light panel with prominent product display & bonus list */}
                <div className="bg-[var(--bg-cream)] p-6 sm:p-10 lg:p-14 flex flex-col justify-between items-center relative">
                    
                    {/* Header Banner Title */}
                    <div className="w-full text-center lg:text-left mb-6">
                        <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-primary)]/80">
                            Your Longevity Journey Starts Here — Get 4 Exclusive Bonuses with the GUNALIFE Stack Pro Kit
                        </p>
                    </div>

                    {/* Enhanced Product Image Wrapper */}
                    <div className="relative w-full max-w-[520px] my-auto py-2 flex items-center justify-center">
                        <img
                            src={Prod1}
                            alt="GunaLife Welcome Kit & Daily Stack Pro"
                            className="w-full h-auto object-contain max-h-[420px] drop-shadow-xl transition-transform duration-500 hover:scale-[1.03]"
                        />
                    </div>

                    {/* Step-by-step Bonus Points List */}
                    <div className="w-full mt-6 space-y-2.5 border-t border-[var(--brand-primary)]/15 pt-5">
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--brand-primary)]/80 mb-3">
                            INCLUDED WITH YOUR KIT:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {bonusItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white/70 p-3 rounded-xl border border-[var(--brand-primary)]/10 shadow-2xs">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--brand-primary)] text-white text-[10px] font-bold shrink-0 mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-xs text-[var(--brand-primary)] leading-snug">
                                            {item.title}
                                        </h4>
                                        <p className="text-[10px] text-[var(--brand-primary)]/75 font-light leading-normal mt-0.5">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right: Deep crimson panel */}
                <div className="bg-[var(--brand-deep)] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[var(--text-blush)]/80">
                                GUNALIFE EXCLUSIVE
                            </p>
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                                {discountPercent}% OFF
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
                            Get started with the GunaLife Stack today
                        </h2>
                        <p className="text-xs sm:text-sm text-[var(--text-blush)]/90 font-light leading-relaxed max-w-lg">
                            A complete ritual kit designed for the GunaLife system: Daily Ultimate Essentials, Longevity, and the premium tools to build a continuous wellness habit.
                        </p>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                        <div>
                            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">The GunaLife Stack Pro</h3>
                            <p className="text-[11px] text-[var(--text-blush)]/70">Daily Essentials + Daily Ultimate Longevity</p>
                        </div>
                        <div className="text-right">
                            <span className="line-through text-white/40 text-xs sm:text-sm mr-2">₹{originalPrice.toLocaleString('en-IN')}</span>
                            <span className="font-serif text-2xl sm:text-3xl font-bold text-white">₹{discountedPrice.toLocaleString('en-IN')}</span>
                            <span className="text-xs text-[var(--text-blush)]/70 font-normal"> /mo</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                        <span className="font-serif text-lg sm:text-xl font-bold text-white">Total Savings</span>
                        <span className="text-xs sm:text-sm font-bold text-[var(--text-blush)] uppercase tracking-wider">
                            Save ₹{totalSavings.toLocaleString('en-IN')} ({discountPercent}% OFF)
                        </span>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full py-4 bg-white hover:bg-[var(--bg-cream)] text-[var(--brand-primary)] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-200 shadow-xl active:scale-[0.98] cursor-pointer">
                            SHOP THE GUNALIFE STACK
                        </button>
                        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
                            {['Includes 4 Exclusive Bonuses', 'NSF Certified', 'Cancel anytime'].map((pill) => (
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