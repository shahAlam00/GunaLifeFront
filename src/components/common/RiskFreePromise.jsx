import React, { useState } from 'react';

const RiskFreePromise = () => {
    const [activeTab, setActiveTab] = useState('quarterly');

    return (
        <section className="w-full bg-[var(--bg-cream)] text-[var(--text-heading-dark)] py-16 px-4 sm:px-8 select-none border-t border-[var(--border-cream)]">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center space-y-6">

                <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-12 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[var(--accent-gold)] drop-shadow-xs" stroke="currentColor" strokeWidth="1.2">
                            <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V7l-9-5z" fill="#F3E5C8" />
                            <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V7l-9-5z" stroke="var(--accent-gold)" />
                            <path d="M9 12l2 2 4-4" stroke="var(--brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="px-4 py-1 rounded-full bg-[var(--bg-muted)] text-[var(--brand-primary)] text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase border border-[var(--border-muted)]">
                        OUR PROMISE
                    </span>
                </div>

                <div className="space-y-1 max-w-xl">
                    <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[var(--text-heading-dark)]">
                        Risk-Free
                    </h2>
                    <p className="font-serif italic text-lg sm:text-xl text-[var(--text-heading-dark)]/80 font-light">
                        Feel it, or get your money back.
                    </p>
                </div>

                <div className="w-full max-w-[480px] bg-[var(--bg-muted)]/80 border border-[var(--border-muted)] rounded-2xl p-6 sm:p-8 space-y-3 shadow-2xs">
                    <div className="flex items-baseline justify-center gap-1.5">
                        <span className="font-serif text-5xl sm:text-6xl font-normal text-[var(--text-heading-dark)] leading-none">
                            {activeTab === 'quarterly' ? '90' : '30'}
                        </span>
                        <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--text-heading-dark)] uppercase">DAY</span>
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--brand-primary)]">
                        GUARANTEE — {activeTab === 'quarterly' ? 'QUARTERLY PLAN' : 'MONTHLY PLAN'}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text-heading-dark)]/80 leading-relaxed font-normal pt-1 max-w-sm mx-auto">
                        {activeTab === 'quarterly'
                            ? "Three full months to experience the difference. If you don't feel it — complete refund, no questions."
                            : "One full month to experience the difference. If you don't feel it — complete refund, no questions."}
                    </p>
                </div>

                <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
                    {[
                        { key: 'quarterly', label: '✦ 90-DAY GUARANTEE (QUARTERLY)' },
                        { key: 'monthly', label: '✦ 30-DAY GUARANTEE (MONTHLY)' },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 border cursor-pointer ${activeTab === key
                                    ? 'bg-[var(--bg-muted)] text-[var(--text-heading-dark)] border-[var(--accent-gold)] shadow-2xs'
                                    : 'bg-transparent text-[var(--text-heading-dark)]/60 border-[var(--border-muted)] hover:text-[var(--text-heading-dark)]'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-center flex-wrap gap-2 pt-1">
                    {['✦ FREE SHIPPING', '✦ CANCEL ANYTIME', '✦ NSF CERTIFIED'].map((badge) => (
                        <span key={badge} className="px-4 py-1.5 rounded-full bg-[var(--bg-muted)]/60 border border-[var(--border-muted)] text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[var(--text-heading-dark)]">
                            {badge}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default RiskFreePromise;
