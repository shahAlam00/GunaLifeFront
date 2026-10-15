import React from "react";

const trustItems = [
    "Vegan",
    "Allergen-Free",
    "Gluten-Free",
    "No artificial flavors",
    "No added sugar",
    "No artificial sweeteners",
];

function CheckBadge() {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-[17px] w-[17px] shrink-0">
            <path
                d="M10 0.8 14.1 2.3 17.7 2.3 19.2 6 19.2 10 17.7 14.1 14.1 17.7 10 19.2 6 17.7 2.3 17.7 0.8 14.1 0.8 10 2.3 6 2.3 2.3 6 0.8Z"
                fill="var(--brand-primary)"
            />
            <path d="m6.1 10.1 2.5 2.5 5.2-5.3" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function TrustIcon({ type, title, lines }) {
    return (
        <div
            className="flex h-[63px] w-[44px] shrink-0 flex-col items-center justify-center gap-[2px] rounded-[5px] border border-[var(--brand-primary)]/65 text-[var(--brand-deep)]"
            aria-label={title}
            title={title}
        >
            {type === "tested" ? (
                <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="h-[25px] w-[25px]">
                    <path d="M16 2.5 27 6.5V15c0 7-4.6 11.4-11 14.5C9.6 26.4 5 22 5 15V6.5L16 2.5Z" stroke="currentColor" strokeWidth="1.1" />
                    <path d="m10.5 15.5 3.5 3.5 7-7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="h-[25px] w-[25px]">
                    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.1" />
                    <path d="M6 16a10 10 0 0 1 20 0v5h-5v-5a5 5 0 0 0-10 0v5H6v-5Z" stroke="currentColor" strokeWidth="1.1" />
                    <path d="M8 23h16" stroke="currentColor" strokeWidth="1.1" />
                </svg>
            )}
            <span className="text-center font-sans text-[8px] font-medium uppercase leading-[1.05]">
                {lines.map((line) => (
                    <React.Fragment key={line}>{line}<br /></React.Fragment>
                ))}
            </span>
        </div>
    );
}

export default function GunaLifeTrustBar() {
    return (
        <section aria-label="GunaLife product quality information" className="w-full bg-white px-4 py-6 sm:px-7 lg:px-10">
            <div className="relative mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-x-5 gap-y-4 overflow-hidden rounded-[12px] bg-gradient-to-r from-[var(--bg-warm)] via-[var(--bg-muted)] to-[#F9C5C5] px-5 py-4 sm:px-7 sm:py-4 lg:flex-nowrap lg:gap-x-8 lg:px-8">

                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8)_0px,transparent_3px),radial-gradient(circle_at_65%_70%,rgba(255,255,255,0.55)_0px,transparent_3px),radial-gradient(circle_at_94%_18%,rgba(255,255,255,0.7)_0px,transparent_3px)]" />

                <div className="relative flex shrink-0 items-center gap-3">
                    <TrustIcon type="tested" title="Third-party testing" lines={["THIRD", "PARTY", "TESTED"]} />
                    <TrustIcon type="non-gmo" title="Non-GMO" lines={["NON", "GMO"]} />
                </div>

                <ul className="relative flex min-w-0 flex-1 flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-7 lg:flex-nowrap lg:justify-between lg:gap-x-5">
                    {trustItems.map((item) => (
                        <li key={item} className="flex shrink-0 items-center gap-2 text-[var(--brand-deep)]">
                            <CheckBadge />
                            <span className="font-sans text-[12px] font-medium leading-tight sm:text-[13px] lg:text-[13px]">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
