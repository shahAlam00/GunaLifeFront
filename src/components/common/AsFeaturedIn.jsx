import React from 'react';

const AsFeaturedIn = () => {
    return (
        <section className="w-full bg-[var(--bg-cream)] py-12 px-4 sm:px-8 select-none border-t border-b border-[var(--border-cream)]">
            <div className="max-w-[1280px] mx-auto space-y-8">

                <div className="flex items-center justify-center space-x-4">
                    <div className="h-[1px] w-12 sm:w-20 bg-[var(--brand-primary)]/30"></div>
                    <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[var(--brand-primary)]/80">
                        AS FEATURED IN
                    </p>
                    <div className="h-[1px] w-12 sm:w-20 bg-[var(--brand-primary)]/30"></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-85">

                    <div className="flex items-center justify-center">
                        <span className="font-serif font-bold text-2xl sm:text-3xl tracking-tighter text-[var(--brand-deep)]">
                            Forbes
                        </span>
                    </div>

                    <div className="flex items-center justify-center">
                        <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-[var(--brand-deep)]">
                            Bloomberg
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-1.5">
                        <div className="flex flex-col items-center justify-center space-y-0.5">
                            <div className="w-3 h-1.5 rounded-t-full border-t border-l border-r border-[var(--brand-deep)]"></div>
                            <div className="w-4 h-2 rounded-t-full border-t border-l border-r border-[var(--brand-deep)]"></div>
                            <div className="w-5 h-2.5 rounded-t-full border-t border-l border-r border-[var(--brand-deep)]"></div>
                        </div>
                        <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-wider text-[var(--brand-deep)]">
                            TODAY
                        </span>
                    </div>

                    <div className="flex items-center justify-center text-center">
                        <span className="font-serif font-bold text-lg sm:text-xl tracking-widest uppercase text-[var(--brand-deep)]">
                            THE TIMES
                        </span>
                    </div>

                    <div className="flex items-center justify-center">
                        <span className="font-sans font-black text-lg sm:text-xl tracking-tighter uppercase italic text-[var(--brand-deep)]">
                            Men's Health
                        </span>
                    </div>

                    <div className="flex items-center justify-center">
                        <span className="font-sans font-bold text-lg sm:text-xl tracking-tighter uppercase italic text-[var(--brand-deep)]">
                            Women's Health
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AsFeaturedIn;
