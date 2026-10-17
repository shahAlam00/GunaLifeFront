
import React, { useState } from 'react';

const phases = [
  {
    id: 1,
    title: 'START',
    days: 'DAYS 01–30',
    heading: 'Build Your Foundation',
    description:
      'Start with small, intentional actions. Set your personal wellness goals and establish daily routines that fit your lifestyle.',
    goals: [
      'Set personal wellness goals',
      'Track daily hydration and nutrition',
      'Build a consistent sleep routine',
      'Begin tracking movement and recovery',
    ],
  },
  {
    id: 2,
    title: 'BUILD',
    days: 'DAYS 31–60',
    heading: 'Strengthen Your Consistency',
    description:
      'Turn your early efforts into sustainable habits. Focus on consistency, active living, and routines that support everyday wellbeing.',
    goals: [
      'Maintain healthy daily habits',
      'Track physical activity and movement',
      'Review sleep and recovery routines',
      'Stay accountable to your goals',
    ],
  },
  {
    id: 3,
    title: 'ADVANCE',
    days: 'DAYS 61–90',
    heading: 'Create Your Long-Term Plan',
    description:
      'Reflect on your progress, recognize the routines that work for you, and create a practical plan for continued wellness.',
    goals: [
      'Review your 90-day progress',
      'Identify habits worth continuing',
      'Celebrate your consistency',
      'Build your long-term wellness plan',
    ],
  },
];

const includedItems = [
  {
    number: '01',
    title: '90-Day Framework',
    description:
      'A structured wellness journey divided into three manageable phases.',
    icon: 'calendar',
  },
  {
    number: '02',
    title: 'Daily Habit Tracking',
    description:
      'A simple checklist to help you stay aware, consistent, and accountable.',
    icon: 'check',
  },
  {
    number: '03',
    title: 'Nutrition & Hydration',
    description:
      'Educational guidance for mindful eating and everyday hydration.',
    icon: 'water',
  },
  {
    number: '04',
    title: 'Skin Wellness',
    description:
      'Practical skincare and healthy-lifestyle education.',
    icon: 'sparkle',
  },
  {
    number: '05',
    title: 'Movement & Recovery',
    description:
      'Keep track of physical activity, sleep, rest, and recovery routines.',
    icon: 'activity',
  },
  {
    number: '06',
    title: 'Progress Reviews',
    description:
      'Reflect on your journey at the 30, 60, and 90-day milestones.',
    icon: 'chart',
  },
];

const Icon = ({ name, className = 'h-5 w-5' }) => {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    water: (
      <>
        <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" />
        <path d="M9 15a3 3 0 0 0 3 3" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
        <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
      </>
    ),
    activity: (
      <>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 3 6-7" />
      </>
    ),
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const RiskFreePromise = () => {
  const [activePhase, setActivePhase] = useState(1);
  const selectedPhase = phases[activePhase - 1];

  return (
    <section
      id="gunalife-90"
      className="relative isolate overflow-hidden border-t border-[var(--border-cream)] bg-[var(--bg-cream)] text-[var(--text-on-cream)]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 -z-10 h-80 w-80 rounded-full border border-[var(--brand-teal)]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-36 -z-10 h-56 w-56 rounded-full border border-[var(--brand-teal)]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[700px] -z-10 h-80 w-80 rounded-full bg-[var(--bg-muted)]/60 blur-3xl"
      />

      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HERO SECTION */}
        <header className="mx-auto max-w-4xl text-center">
          <div className="mb-7 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-muted)] bg-[var(--bg-muted)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand-primary)] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
              A More Mindful Approach to Wellness
            </span>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--brand-teal)] sm:text-sm">
            GUNALIFE ADVANCED LONGEVITY
          </p>

          <h1 className=" text-4xl font-normal leading-[1.12]  text-[var(--text-heading-dark)] sm:text-6xl lg:text-7xl">
            GUNALIFE{' '}
            <span className=" text-[var(--brand-teal)]">90</span>
            <span className="mt-2 block">
              Wellness, Longevity
            </span>
            <span className="block">&amp; Performance Challenge</span>
          </h1>

          <p className="mt-6 font-serif text-xl italic text-[var(--brand-primary)]/80 sm:text-2xl">
            Perform. Transform. Sustain.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--text-on-cream)]/80 sm:text-base sm:leading-8">
            Your journey towards better everyday wellness starts here.
            Build consistent habits around nutrition, skin wellness,
            physical activity, hydration, sleep, and recovery with a
            structured 90-day framework designed to fit your lifestyle.
          </p>

          <a
            href="#your-journey"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--brand-primary)] px-7 py-3 text-xs font-bold uppercase tracking-[0.13em] text-[var(--text-on-dark)] transition duration-300 hover:bg-[var(--brand-light)] focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)] focus-visible:ring-offset-4 sm:px-9"
          >
            Explore Your Journey
            <Icon name="arrow" className="h-4 w-4" />
          </a>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-[var(--border-muted)] border-y border-[var(--border-cream)] py-6 sm:mt-16 sm:py-8">
            {[
              { number: '90', label: 'Days of Focus' },
              { number: '03', label: 'Journey Phases' },
              { number: '03', label: 'Progress Reviews' },
            ].map((stat) => (
              <div key={stat.label} className="px-2 sm:px-5">
                <p className="font-serif text-3xl text-[var(--brand-primary)] sm:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.16em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </header>

        {/* JOURNEY SECTION */}
        <div id="your-journey" className="scroll-mt-24 pt-20 sm:pt-28">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--brand-teal)] sm:text-xs">
              A Journey With Purpose
            </p>

            <h2 className="font-serif text-3xl font-normal text-[var(--text-heading-dark)] sm:text-5xl">
              Your 90-Day Journey
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--text-on-cream)]/75 sm:text-base">
              Three focused phases. One consistent approach to building
              healthier everyday routines.
            </p>
          </div>

          {/* Interactive phase selector */}
          <div
            className="mx-auto mb-8 grid max-w-3xl grid-cols-3 gap-2 sm:mb-10 sm:gap-4"
            role="group"
            aria-label="Choose a journey phase"
          >
            {phases.map((phase) => {
              const isActive = activePhase === phase.id;

              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhase(phase.id)}
                  aria-pressed={isActive}
                  className={`rounded-xl border p-3 text-left transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)] focus-visible:ring-offset-2 sm:rounded-2xl sm:p-5 ${
                    isActive
                      ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)] text-[var(--text-on-dark)] shadow-lg'
                      : 'border-[var(--border-muted)] bg-[var(--bg-warm)] text-[var(--text-heading-dark)] hover:border-[var(--brand-teal)] hover:bg-[var(--bg-muted)]'
                  }`}
                >
                  <span
                    className={`block font-serif text-xl sm:text-3xl ${
                      isActive
                        ? 'text-[var(--brand-teal)]'
                        : 'text-[var(--brand-primary)]'
                    }`}
                  >
                    0{phase.id}
                  </span>

                  <span className="mt-3 block text-[10px] font-bold uppercase tracking-wider sm:text-sm">
                    {phase.title}
                  </span>

                  <span
                    className={`mt-1 block text-[8px] leading-4 sm:text-[10px] ${
                      isActive
                        ? 'text-white/75'
                        : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {phase.days}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Phase details */}
          <div
            key={selectedPhase.id}
            aria-live="polite"
            className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-warm)] animate-fadeIn md:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <span className="mb-5 w-fit rounded-full border border-[var(--border-muted)] bg-[var(--bg-muted)] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
                PHASE {selectedPhase.id} / 03
              </span>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
                {selectedPhase.days}
              </p>

              <h3 className="font-serif text-3xl leading-tight text-[var(--text-heading-dark)] sm:text-4xl">
                {selectedPhase.heading}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--text-on-cream)]/80 sm:text-base">
                {selectedPhase.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {['Daily Habits', 'Personal Progress'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border-muted)] px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-[var(--brand-primary)] sm:text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--border-warm)] bg-[var(--bg-muted)]/70 p-6 sm:p-10 md:border-l md:border-t-0 lg:p-12">
              <h4 className="font-serif text-xl text-[var(--text-heading-dark)] sm:text-2xl">
                Your Focus Checklist
              </h4>

              <p className="mt-2 text-xs leading-6 text-[var(--text-muted)] sm:text-sm">
                Small actions to guide your daily routine.
              </p>

              <ul className="mt-6 space-y-4">
                {selectedPhase.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--brand-teal)]/40 bg-[var(--bg-cream)] text-[var(--brand-teal)]">
                      <Icon name="check" className="h-4 w-4" />
                    </span>

                    <span className="text-sm leading-6 text-[var(--text-on-cream)]/90">
                      {goal}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[var(--border-muted)] pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-teal)]">
                  THE GUNALIFE APPROACH
                </p>
                <p className="mt-2 text-xs leading-6 text-[var(--text-on-cream)]/80 sm:text-sm">
                  Focus on consistency, reflect on your progress, and
                  adapt your routine to your individual needs.
                </p>
              </div>
            </div>
          </div>

          {/* Progress review milestones */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-3 sm:mt-16 sm:gap-8">
            {[
              {
                day: 'DAY 30',
                title: 'Reflect',
                text: 'Review your foundation.',
              },
              {
                day: 'DAY 60',
                title: 'Reassess',
                text: 'Evaluate your consistency.',
              },
              {
                day: 'DAY 90',
                title: 'Plan Ahead',
                text: 'Build your next routine.',
              },
            ].map((review) => (
              <div key={review.day} className="relative text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-muted)] bg-[var(--bg-muted)] text-[var(--brand-teal)] sm:h-12 sm:w-12">
                  <Icon name="check" className="h-5 w-5" />
                </div>

                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--brand-teal)] sm:text-xs">
                  {review.day}
                </p>

                <h4 className="mt-2 font-serif text-base text-[var(--text-heading-dark)] sm:text-xl">
                  {review.title}
                </h4>

                <p className="mx-auto mt-2 max-w-40 text-[10px] leading-5 text-[var(--text-muted)] sm:text-xs sm:leading-6">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="pt-20 sm:pt-28">
          <div className="mb-10 grid gap-5 sm:mb-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--brand-teal)] sm:text-xs">
                Designed For Everyday Living
              </p>

              <h2 className="max-w-xl font-serif text-3xl leading-tight text-[var(--text-heading-dark)] sm:text-5xl">
                Everything You Need to Stay Consistent
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[var(--text-on-cream)]/75 md:justify-self-end sm:text-base">
              A practical framework that brings together daily tracking,
              educational resources, and regular reflection — without
              making wellness unnecessarily complicated.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-warm)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-teal)] hover:shadow-lg sm:p-7"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-serif text-2xl text-[var(--brand-teal)]">
                    {item.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-muted)] bg-[var(--bg-muted)] text-[var(--brand-primary)] transition-colors group-hover:border-[var(--brand-teal)]">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[var(--text-heading-dark)] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-on-cream)]/75">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* WHO IS IT FOR */}
        <div className="mt-20 grid overflow-hidden rounded-2xl border border-[var(--border-cream)] sm:mt-28 md:grid-cols-2">
          <div className="bg-[var(--brand-primary)] p-7 text-[var(--text-on-dark)] sm:p-10 lg:p-14">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[var(--brand-teal)]">
              <Icon name="sparkle" className="h-6 w-6" />
            </div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--brand-teal)] sm:text-xs">
              Made For Your Journey
            </p>

            <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
              Wellness That Fits Your Life
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
              GUNALIFE 90 is designed for adults who want a more structured
              approach to everyday wellness, skin care, active living,
              and long-term healthy habits.
            </p>
          </div>

          <div className="bg-[var(--bg-muted)] p-7 sm:p-10 lg:p-14">
            <h3 className="font-serif text-2xl text-[var(--text-heading-dark)] sm:text-3xl">
              Make Every Day Count
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                'Build more consistent daily routines',
                'Become more mindful of hydration and nutrition',
                'Create space for movement, sleep, and recovery',
                'Track your habits and reflect on your progress',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-[var(--brand-teal)]">
                    <Icon name="check" className="h-4 w-4" />
                  </span>

                  <span className="text-sm leading-6 text-[var(--text-on-cream)]/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-[var(--border-muted)] bg-[var(--bg-muted)] px-5 py-12 text-center sm:mt-28 sm:px-12 sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full border border-[var(--brand-teal)]/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-12 h-64 w-64 rounded-full border border-[var(--brand-teal)]/20"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--brand-teal)] sm:text-xs">
              Your Next Chapter Begins Now
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[var(--text-heading-dark)] sm:text-5xl lg:text-6xl">
              Small Actions.
              <br />
              <span className="italic text-[var(--brand-teal)]">
                Lasting Routines.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[var(--text-on-cream)]/80 sm:text-base sm:leading-8">
              Commit to your next 90 days with GUNALIFE Advanced Longevity.
              Start with simple daily actions, stay mindful of your progress,
              and build a wellness routine you can continue beyond day 90.
            </p>

            <a
              href="#your-journey"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--brand-primary)] px-7 py-3 text-xs font-bold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-[var(--brand-light)] focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)] focus-visible:ring-offset-4 sm:px-9"
            >
              Begin Your 90-Day Journey
              <Icon name="arrow" className="h-4 w-4" />
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)] sm:gap-x-5 sm:text-[10px] sm:tracking-[0.15em]">
              <span>Mindful Living</span>
              <span className="text-[var(--brand-teal)]">✦</span>
              <span>Daily Consistency</span>
              <span className="text-[var(--brand-teal)]">✦</span>
              <span>Long-Term Wellness</span>
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-[10px] leading-6 text-[var(--text-muted)] sm:text-xs">
          Individual experiences and results vary. This program supports
          healthy lifestyle habits and does not guarantee specific skin,
          fitness, anti-aging, or health outcomes. Educational content is
          not a substitute for professional medical advice.
        </p>
      </div>
    </section>
  );
};

export default RiskFreePromise;
