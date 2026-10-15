import React from 'react';

const ClinicalProofSection = () => {
    const stats = [
        { id: 1, title: "More Energy", percentage: "95%", description: "Of participants felt a noticeable boost in daily energy" },
        { id: 2, title: "A Healthier Gut", percentage: "85%", description: "Of participants experienced better digestion and less bloating" },
        { id: 3, title: "Sleep Better", percentage: "80%", description: "Participants reported getting better sleep" },
        { id: 4, title: "Perform Sharper", percentage: "75%", description: "Of participants noticed sharper focus and improved mental clarity" },
    ];

    return (
        <section className="relative w-full bg-[var(--brand-primary)] text-white py-20 px-4 sm:px-8 select-none overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1600')` }}
            />

            <div className="relative max-w-[1280px] mx-auto space-y-12 z-10">

                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-white tracking-tight">
                        Clinically Proven. Third-Party Tested. <br />
                        
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--text-blush)]/90 font-light leading-relaxed max-w-2xl mx-auto">
                       Every ingredient in GUNALIFE is carefully selected to meet our quality standards. We are committed to ingredient transparency, product quality, and responsible manufacturing practices. Our products can be tested by independent third-party laboratories for purity, heavy metals, and contaminants to help ensure quality and safety.
                    </p>
                    <div className="pt-2">
                        <button className="px-8 py-3.5 bg-white hover:bg-[var(--bg-cream)] text-[var(--brand-primary)] font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-200 shadow-xl active:scale-95 cursor-pointer">
                            VIEW VERIFICATION RESULTS
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto pt-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-between space-y-4 shadow-2xl hover:bg-white/15 transition-all duration-300"
                        >
                            <h3 className="font-serif italic text-xl sm:text-2xl text-white font-normal">{stat.title}</h3>
                            <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--text-blush)] tracking-tight">
                                {stat.percentage}
                            </div>
                            <p className="text-[11px] sm:text-xs text-[var(--text-on-dark)]/80 leading-relaxed font-light">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-2">
                    <p className="text-[9px] sm:text-[10px] text-[var(--text-on-dark)]/60 font-light tracking-wide">
                        Results based on a 12-Week Randomized, Double-Blind, Placebo-Controlled Clinical Trial conducted by the San Francisco Research Institute.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ClinicalProofSection;
