import React from 'react';

const ScientificAdvisors = () => {
    const advisors = [
        { id: 1, name: "Dr. Dawn Mussallem", role: "CMO of Fountain Life & Founder of Mayo Clinic Integrative Breast Oncology Program", image: "https://images.unsplash.com/photo-1594824813566-88824278c065?auto=format&fit=crop&q=80&w=600" },
        { id: 2, name: "Prof. Suzanne Devkota", role: "Director of Cedars-Sinai Human Microbiome Research Institute", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
        { id: 3, name: "Dr. James L. Green", role: "Former Chief Scientist of NASA", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600" },
        { id: 4, name: "Dr. James DiNicolantonio", role: "Cardiovascular Research Scientist and Doctor of Pharmacy", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600" },
        { id: 5, name: "Dr. Amy Shah", role: "Double-Board Certified Physician & Host of Podcast \"Save Yourself\"", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" },
        { id: 6, name: "Dr. Ara Suppiah", role: "Performance Strategist, Sports Physician, Creator of Functional Sports Medicine", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" },
        { id: 7, name: "Dr. Mark Hyman", role: "Senior Advisor at the Cleveland Clinic Center for Functional Medicine", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600" },
        { id: 8, name: "Dr. David Sinclair", role: "Professor of Genetics & Co-Director of Paul F. Glenn Center for Biology of Aging Research", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" },
        { id: 9, name: "Dr. Rhonda Patrick", role: "Cellular Aging & Longevity Researcher, Host of FoundMyFitness", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" },
    ];

    return (
        <section className="w-full bg-[var(--bg-cream)] text-[var(--brand-primary)] py-16 px-4 sm:px-6 md:px-12 select-none">
            <div className="max-w-[1240px] mx-auto space-y-12">

                <div className="text-center space-y-2">
                    <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[var(--brand-primary)]/70">
                        DRIVEN BY SCIENCE
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--brand-deep)] tracking-tight">
                        Meet The Brilliant Minds Behind GunaLife
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--brand-primary)]/80 font-normal leading-relaxed">
                        An unparalleled collaboration between academia, medicine, and space science.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch">
                    {advisors.map((advisor) => (
                        <div
                            key={advisor.id}
                            className="relative bg-[var(--bg-warm)] rounded-2xl overflow-hidden flex items-center justify-between p-0 shadow-xs border border-[var(--border-warm)] hover:shadow-md transition-all duration-300 min-h-[100px]"
                        >
                            <div className="relative w-[45%] h-full min-h-[170px] bg-gradient-to-t from-[#E2B1A2] via-[#F7D8CE] to-[var(--bg-cream)] overflow-hidden flex items-end justify-center">
                                <img
                                    src={advisor.image}
                                    alt={advisor.name}
                                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                                />
                            </div>

                            <div className="w-[55%] p-4 sm:p-5 flex flex-col justify-between h-full min-h-[170px] space-y-2">
                                <div className="space-y-1">
                                    <h3 className="font-bold text-xs sm:text-sm text-[var(--brand-deep)] leading-snug">
                                        {advisor.name}
                                    </h3>
                                    <p className="text-[10px] sm:text-[11px] text-[var(--brand-deep)]/80 leading-relaxed font-normal">
                                        {advisor.role}
                                    </p>
                                </div>
                                <div className="flex justify-end pt-2">
                                    <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[var(--brand-deep)]/30 flex items-center justify-center text-[var(--brand-deep)] text-base font-light hover:bg-[var(--brand-deep)] hover:text-white transition-colors cursor-pointer">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ScientificAdvisors;
