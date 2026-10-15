import React from 'react';

const ScienceHeroSection = () => {
    return (
        <section className="relative w-full min-h-[380px] sm:min-h-[560px] lg:min-h-[640px] bg-[var(--brand-deep)] text-white flex items-center justify-start px-6 sm:px-12 md:px-16 lg:px-24 select-none overflow-hidden">

            {/* Background texture */}
            <div
                className="absolute inset-0 bg-cover bg-right sm:bg-center opacity-40 mix-blend-screen pointer-events-none scale-105 transition-transform duration-1000 hover:scale-100"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=2000')` }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)] via-[var(--brand-deep)]/80 to-transparent z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-[850px] space-y-4 sm:space-y-6 my-auto py-12">
                <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[var(--text-blush)] opacity-90">
                    THE SCIENCE BEHIND GUNALIFE
                </p>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] text-white tracking-tight">
                    Pioneering Health With Leaders in Academia, Medicine and Space Science.
                </h1>
            </div>

        </section>
    );
};

export default ScienceHeroSection;
