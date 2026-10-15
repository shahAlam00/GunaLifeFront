import React from "react";
import { Icon, Reveal, SectionHeading, useInView } from "./Qualityshared";

const stages = [
    "Raw-material testing",
    "In-process checks",
    "Finished-product testing",
    "Stability & shelf-life",
];

// Illustrative layout — replace with your real lab report values
const results = [
    { label: "Heavy metals", value: 100, status: "Not detected" },
    { label: "Microbial safety", value: 100, status: "Pass" },
    { label: "Pesticide residues", value: 100, status: "Below limits" },
    { label: "Label potency", value: 96, status: "Within spec" },
];

function Bar({ value, active, delay }) {
    return (
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                    width: active ? `${value}%` : "0%",
                    transitionDelay: `${delay}ms`,
                    background:
                        "linear-gradient(90deg, var(--brand-teal), var(--brand-pink))",
                }}
            />
        </div>
    );
}

export default function QualityTesting() {
    const [ref, inView] = useInView(0.3);

    return (
        <section
            id="testing"
            className="relative isolate overflow-hidden bg-brand-primary py-20 text-on-dark lg:py-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full opacity-30 blur-3xl"
                style={{ background: "var(--brand-teal)" }}
            />

            <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-16">
                {/* left copy */}
                <Reveal>
                    <SectionHeading
                        light
                        center={false}
                        eyebrow="Independent testing"
                        title="If it isn't tested, it doesn't ship"
                        text="Every GunaLife batch is sent to accredited third-party laboratories. We test for contaminants, confirm purity and verify that what is on the label is what is in the pack."
                    />

                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {stages.map((s) => (
                            <li
                                key={s}
                                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-teal)]">
                                    <Icon name="check" className="h-3.5 w-3.5" />
                                </span>
                                {s}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#batch-check"
                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-primary transition hover:bg-[color:var(--bg-muted)]"
                    >
                        Check a batch report
                        <Icon name="arrow" className="h-4 w-4" />
                    </a>
                </Reveal>

                {/* right: lab report card */}
                <Reveal delay={150}>
                    <div
                        ref={ref}
                        className="rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-md sm:p-9"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-blush">
                                    Certificate of analysis
                                </p>
                                <h3 className="mt-1 text-xl font-extrabold text-white">
                                    GunaLife · Sample Batch
                                </h3>
                            </div>
                            <span className="rounded-full bg-[color:var(--brand-teal)] px-3 py-1 text-xs font-bold text-white">
                                PASSED
                            </span>
                        </div>

                        <div className="mt-8 space-y-6">
                            {results.map((r, i) => (
                                <div key={r.label}>
                                    <div className="mb-2 flex items-center justify-between text-sm">
                                        <span className="font-semibold text-white">{r.label}</span>
                                        <span className="text-white/70">{r.status}</span>
                                    </div>
                                    <Bar value={r.value} active={inView} delay={i * 150} />
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 border-t border-white/10 pt-4 text-xs text-white/50">
                            Sample report layout for illustration. Request the report for
                            your own batch below.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}