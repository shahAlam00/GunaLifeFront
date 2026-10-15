import React from 'react';
import { Activity, ShieldCheck, Zap, Heart } from 'lucide-react';

const ClinicalHighlights = () => {
  const stats = [
    {
      icon: <Zap className="w-5 h-5 text-[var(--brand-teal)]" />,
      number: "88%",
      label: "Reported More Sustained Energy",
      subtext: "Without jitters or afternoon crashes within 14 days"
    },
    {
      icon: <Activity className="w-5 h-5 text-[var(--brand-teal)]" />,
      number: "83%",
      label: "Improved Digestion & Gut Health",
      subtext: "Powered by 12.5 Billion CFU pre-, pro-, and postbiotics"
    },
    {
      icon: <Heart className="w-5 h-5 text-[var(--brand-teal)]" />,
      number: "10",
      label: "Longevity Compounds",
      subtext: "Targeting all 12 biological hallmarks of cellular aging"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[var(--brand-teal)]" />,
      number: "90",
      label: "Nutrient-Dense Ingredients",
      subtext: "Replacing $4,000+/year in 16+ separate supplement bottles"
    }
  ];

  return (
    <section className="w-full bg-[var(--bg-warm)] py-14 px-4 sm:px-6 border-b border-[var(--border-warm)] select-none">
      <div className="max-w-[1240px] mx-auto space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-teal)]">
            CLINICALLY PROVEN & THIRD-PARTY TESTED
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-[var(--brand-primary)] font-normal tracking-tight">
            Science you can feel from day one.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--bg-cream)] border border-[var(--border-warm)] shadow-xs flex flex-col justify-between space-y-3 text-center sm:text-left hover:border-[var(--brand-primary)]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--brand-teal)]/10 flex items-center justify-center mx-auto sm:mx-0">
                {stat.icon}
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-normal text-[var(--brand-primary)]">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-[var(--brand-primary)] mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalHighlights;
