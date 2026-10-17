import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const slides = [
    {
      video: '/video1.mp4',
      badge: 'PERFORM. TRANSFORM. SUSTAIN.',
      title: 'WORLD’S MOST',
      highlightTitle: 'ADVANCED LONGEVITY',
      subTitle: 'NUTRITION EVER',
      description: 'Science-backed nutraceutical formulas designed for peak performance, cellular repair, and everyday energy.',
      link: '/products',
      ctaText: 'EXPLORE RANGE'
    },
    {
      video: '/video2.mp4',
      badge: 'SCIENCE INSPIRED WELLNESS',
      title: 'PURE & TRANSPARENT',
      highlightTitle: 'INGREDIENT QUALITY',
      subTitle: 'WITHOUT COMPROMISE',
      description: 'Zero hidden fillers. 100% transparent active ingredients tailored for modern wellness and optimal bio-availability.',
      link: '/products',
      ctaText: 'DISCOVER MORE'
    },
    {
      video: '/video3.mp4',
      badge: 'NEXT-GEN FORMULATION',
      title: 'REDEFINE YOUR',
      highlightTitle: 'DAILY WELLNESS',
      subTitle: 'ROUTINE TODAY',
      description: 'Ultra-fast absorbing nutrients crafted to support healthy ageing, focus, and long-term vitality.',
      link: '/products',
      ctaText: 'SHOP NOW'
    },
    {
      video: '/video4.mp4',
      badge: 'PREMIUM LONGEVITY',
      title: 'OPTIMIZE YOUR',
      highlightTitle: 'CELLULAR HEALTH',
      subTitle: 'FOR LIFELONG VITALITY',
      description: 'Targeted bio-active complexes engineered to promote cellular energy production and overall balance.',
      link: '/products',
      ctaText: 'VIEW PRODUCTS'
    },
    {
      video: '/video5.mp4',
      badge: 'GUNALIFE ADVANCED',
      title: 'EXPERIENCE THE',
      highlightTitle: 'FUTURE OF WELLNESS',
      subTitle: 'REIMAGINED',
      description: 'Elevate your performance and wellbeing with our premium sports and daily nutrition range.',
      link: '/products',
      ctaText: 'EXPLORE ALL'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Ultra-Smooth Video Switch Effect
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (vid) {
        if (idx === currentIndex) {
          vid.currentTime = 0;
          const playPromise = vid.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          vid.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] max-h-[850px] bg-black text-white overflow-hidden select-none">
      
      {/* ── Pre-rendered Hardware Accelerated Videos ── */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
            style={{ willChange: 'opacity' }}
          >
            {/* Background Video */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={slide.video}
              muted
              playsInline
              preload="auto"
              onEnded={handleNext}
              className="w-full h-full object-cover object-center transform-gpu"
            />

            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/80" />

            {/* Content Slide Overlay */}
            <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between z-20">
              
              {/* Left Side Content */}
              <div className="hidden md:flex flex-col space-y-4 max-w-sm lg:max-w-md">
                <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase bg-[var(--brand-teal)]/20 text-[var(--brand-teal)] border border-[var(--brand-teal)]/40 rounded-sm w-fit backdrop-blur-sm">
                  {slide.badge}
                </span>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {slide.description}
                </p>
                <div className="pt-2">
                  <a
                    href={slide.link}
                    className="inline-flex items-center gap-3 px-7 py-3 bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-hover)] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all duration-300 shadow-lg hover:shadow-teal-900/40"
                  >
                    <span>{slide.ctaText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side Bold Typography */}
              <div className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-auto space-y-2">
                <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-semibold">
                  GUNALIFE ADVANCED
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
                  {slide.title}
                </h1>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-blue-200 leading-none py-1">
                  {slide.highlightTitle}
                </h1>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-widest text-gray-300">
                  {slide.subTitle}
                </h2>

                {/* Mobile Description & CTA */}
                <div className="md:hidden pt-4 space-y-4">
                  <p className="text-xs text-gray-300 max-w-xs mx-auto">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="inline-block px-6 py-2.5 bg-[var(--brand-teal)] text-white font-bold text-xs uppercase tracking-wider rounded"
                  >
                    {slide.ctaText}
                  </a>
                </div>
              </div>

            </div>
          </div>
        );
      })}

      {/* ── Bottom Navigation Controls ── */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="p-1.5 rounded-full text-gray-400 hover:text-white transition-colors"
          aria-label="Previous Slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-7 bg-white'
                  : 'w-2.5 bg-gray-500/60 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-1.5 rounded-full text-gray-400 hover:text-white transition-colors"
          aria-label="Next Slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default Hero;