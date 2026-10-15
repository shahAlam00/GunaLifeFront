import React, { useRef, useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';

const CARD_WIDTH = 310;
const CARD_GAP = 20;
const STEP = CARD_WIDTH + CARD_GAP;

const PerformersSlider = () => {
    const trackRef = useRef(null);
    const wrapperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const dragState = useRef({ active: false, startX: 0, startTranslate: 0, currentTranslate: 0 });

    const performers = [
        {
            id: 1,
            name: 'David Beckham',
            role: 'Co-Founder of GunaLife',
            badge: 'CO-FOUNDER & PARTNER',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
            quote: 'Daily Ultimate Essentials is an integral part of my morning routine.',
        },
        {
            id: 2,
            name: 'Giannis Antetokounmpo',
            role: 'NBA CHAMPION • GLOBAL AMBASSADOR & SHAREHOLDER',
            badge: '9X NBA ALL-STAR',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
            quote: 'Where I grew up, we didnt have supplements.The idea that someone can take one thing every morning and know their body has what it needs — I wish I had that as a kid.',
    },
        {
            id: 3,
            name: 'Aryna Sabalenka',
            role: 'World No. 1 Tennis Player • Global Ambassador & Shareholder',
            badge: '4X GRAND SLAM CHAMPION',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
            quote: 'Gives me the stamina and recovery needed to perform at the highest level every day.',
        },
        {
            id: 4,
            name: 'Ollie Bearman',
            role: 'Formula 1 Driver • Global Ambassador & Shareholder',
            badge: 'FORMULA 1 DRIVER',
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600',
            quote: 'Focus and energy on and off the track with GunaLife.',
        },
        {
            id: 5,
            name: 'Dr. Dawn Mussallem',
            role: 'CMO of Fountain Life & Founder of Mayo Clinic Program',
            badge: 'MAYO CLINIC INTEGRATIVE ONCOLOGIST',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
            quote: 'Scientifically backed nutrition formulated for peak cellular health.',
        },
    ];

    const maxIndex = performers.length - 1;

    useEffect(() => {
        const measure = () => {
            if (!wrapperRef.current) return;
            const w = wrapperRef.current.offsetWidth;
            setVisibleCount(Math.max(1, Math.floor((w + CARD_GAP) / STEP)));
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (wrapperRef.current) ro.observe(wrapperRef.current);
        return () => ro.disconnect();
    }, []);

    const slideTo = useCallback((idx) => {
        const clampedIdx = Math.max(0, Math.min(idx, maxIndex));
        const targetX = -clampedIdx * STEP;
        gsap.to(trackRef.current, { x: targetX, duration: 0.45, ease: 'power2.out' });
        dragState.current.startTranslate = targetX;
        dragState.current.currentTranslate = targetX;
        setCurrentIndex(clampedIdx);
    }, [maxIndex]);

    const onPointerDown = (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
        e.currentTarget.setPointerCapture(e.pointerId);
        dragState.current.active = true;
        dragState.current.startX = e.clientX;
        dragState.current.startTranslate = dragState.current.currentTranslate;
        gsap.killTweensOf(trackRef.current);
    };

    const onPointerMove = (e) => {
        if (!dragState.current.active) return;
        const delta = e.clientX - dragState.current.startX;
        const next = Math.max(-maxIndex * STEP, Math.min(0, dragState.current.startTranslate + delta));
        dragState.current.currentTranslate = next;
        gsap.set(trackRef.current, { x: next });
    };

    const onPointerUp = () => {
        if (!dragState.current.active) return;
        dragState.current.active = false;
        const moved = dragState.current.currentTranslate - dragState.current.startTranslate;
        let newIdx = currentIndex;
        if (moved < -50) newIdx = Math.min(currentIndex + 1, maxIndex);
        else if (moved > 50) newIdx = Math.max(currentIndex - 1, 0);
        slideTo(newIdx);
    };

    const arrowBase = 'flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0';

    return (
        <section className="w-full bg-[var(--brand-deep)] text-white py-14 px-4 sm:px-8 overflow-hidden select-none">
            <div className="max-w-[1440px] mx-auto space-y-8">

                <div className="text-center space-y-2">
                    <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[var(--text-blush)]/80">
                        TRUSTED BY THE WORLD'S BEST
                    </p>
                    <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-tight text-white max-w-3xl mx-auto">
                        The daily routine behind the world's highest performers.
                    </h2>
                    <p className="font-serif italic text-lg sm:text-2xl text-[var(--text-blush)] font-light">
                        68M+ Servings delivered worldwide.
                    </p>
                </div>

                <div className="flex items-center gap-3 md:gap-4">

                    <button onClick={() => slideTo(currentIndex - 1)} disabled={currentIndex === 0} className={arrowBase} aria-label="Previous">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div
                        ref={wrapperRef}
                        className="flex-1 overflow-hidden py-4 cursor-grab active:cursor-grabbing"
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerLeave={onPointerUp}
                    >
                        <div
                            ref={trackRef}
                            className="flex items-stretch gap-5 will-change-transform"
                            style={{ width: `${performers.length * STEP - CARD_GAP}px` }}
                        >
                            {performers.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative w-[290px] sm:w-[310px] h-[440px] sm:h-[470px] bg-[var(--brand-primary)] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex-shrink-0"
                                >
                                    <div className="w-full h-[320px] sm:h-[340px] overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            draggable="false"
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-4 bg-[var(--brand-primary)] flex flex-col justify-between h-[120px] sm:h-[130px]">
                                        <div>
                                            <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">{item.name}</h3>
                                            <p className="text-[11px] text-[var(--text-blush)]/80 mt-0.5 line-clamp-1">{item.role}</p>
                                        </div>
                                        {item.badge && (
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[9px] font-bold tracking-wider text-white uppercase">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-[var(--brand-primary)] p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                        <div className="space-y-4">
                                            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--text-blush)]">{item.role}</p>
                                            <h3 className="font-serif text-xl font-bold text-white italic">{item.name}</h3>
                                            <p className="font-serif italic text-xs sm:text-sm text-[var(--text-blush-alt)] leading-relaxed">"{item.quote}"</p>
                                        </div>
                                        {item.badge && (
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/30 text-[9px] font-bold tracking-wider text-white uppercase">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={() => slideTo(currentIndex + 1)} disabled={currentIndex >= maxIndex} className={arrowBase} aria-label="Next">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>

                <div className="flex items-center justify-center gap-1.5 pt-1">
                    {performers.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => slideTo(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PerformersSlider;
