import React from "react";
import { Icon } from "./Qualityshared";

// ⚠️ Show only the certifications GunaLife really holds.
const badges = [
    { icon: "factory", label: "GMP-Compliant Facility" },
    { icon: "flask", label: "Third-Party Lab Tested" },
    { icon: "shield", label: "FSSAI Compliant" },
    { icon: "leaf", label: "Non-GMO Ingredients" },
    { icon: "heart", label: "100% Vegan" },
    { icon: "package", label: "Batch Traceable" },
];

export default function QualityBadges() {
    return (
        <section className="border-b border-warm bg-cream">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-16">
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {badges.map((b) => (
                        <li
                            key={b.label}
                            className="flex items-center gap-3 rounded-xl px-2 py-2"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted-warm text-[color:var(--brand-teal)]">
                                <Icon name={b.icon} className="h-5 w-5" />
                            </span>
                            <span className="text-xs font-bold leading-snug text-brand-primary">
                                {b.label}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}