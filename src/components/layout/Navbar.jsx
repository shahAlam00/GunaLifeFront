import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import { useCart } from '../../context/CartContext';
import AuthModal from '../auth/AuthModal';
import Prod3 from "../../assets/Prod3.png"
import Prod4 from "../../assets/Prod4.png"
const discoverLinks = [
  {
    to: '/about',
    label: 'About Us',
    desc: 'Our mission, story and the team behind GunaLife.',
    icon: '🌿',
  },
  {
    to: '/quality',
    label: 'Quality and Standards',
    desc: 'Third-party testing, NSF certification and our quality promise.',
    icon: '🏅',
  },
];

const Navbar = () => {
  const { totalCount, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const shopTimerRef = useRef(null);
  const discoverTimerRef = useRef(null);

const shopProducts = [
  {
    id: 4,
    title: "GUNA-AGE+ Skin Transformation",
    subtitle:
      "Advanced longevity formula for skin transformation and daily wellness.",
    image: Prod3,
    href: "/shop",
    quantity: "120 gm",
    category: "Skin Transformation",
  },
  {
    id: 5,
    title: "GUNA-AGE+ Athletes + Longevity",
    subtitle:
      "Advanced longevity formula designed around athletic performance and everyday wellness.",
    image: Prod4,
    href: "/shop",
    quantity: "150 gm",
    category: "Athletes + Longevity",
  },
];

  // left nav links
  const leftLinks = [
    { to: '/science', label: 'Science' },
    { to: '/beckham-stack', label: 'The Beckham Stack' },
    { to: '/welcome', label: 'Welcome from David' },
  ];

  // right nav links
  const rightLinks = [
    { to: '/reviews', label: 'Reviews' },
    { to: '/ingredients', label: 'Ingredients' },
  ];

  // mobile only (all links flattened)
  const mobileLinks = [
    { to: '/science', label: 'Science' },
    { to: '/beckham-stack', label: 'The Beckham Stack' },
    { to: '/welcome', label: 'Welcome from David' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/ingredients', label: 'Ingredients' },
    { to: '/about', label: 'About Us' },
    { to: '/quality', label: 'Quality and Standards' },
  ];

  const handleShopEnter = () => {
    clearTimeout(shopTimerRef.current);
    setIsShopOpen(true);
  };
  const handleShopLeave = () => {
    shopTimerRef.current = setTimeout(() => setIsShopOpen(false), 120);
  };

  const handleDiscoverEnter = () => {
    clearTimeout(discoverTimerRef.current);
    setIsDiscoverOpen(true);
  };
  const handleDiscoverLeave = () => {
    discoverTimerRef.current = setTimeout(() => setIsDiscoverOpen(false), 120);
  };

  // active link style helper
  const navLinkClass = ({ isActive }) =>
    `transition-opacity outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 ${isActive ? 'font-bold opacity-70' : 'hover:opacity-70'}`;

  return (
    <>
      <nav className="relative z-50 w-full border-0 bg-white text-[var(--brand-primary)] font-sans">
        <div className="relative mx-auto flex min-h-[68px] max-w-[1440px] items-center justify-between px-4 md:min-h-[76px] md:px-8">

          {/* ── LEFT NAV (desktop) ── */}
          <div className="hidden lg:flex items-center gap-7 font-medium text-[15px] tracking-tight self-stretch">

            {/* Shop dropdown trigger */}
            <div
              className="flex items-center cursor-pointer relative self-stretch"
              onMouseEnter={handleShopEnter}
              onMouseLeave={handleShopLeave}
            >
              <div className={`flex items-center gap-1 transition-opacity duration-150 ${isShopOpen ? 'opacity-70' : ''}`}>
                <span className="font-semibold">Shop</span>
                <svg
                  className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Mega dropdown */}
              {isShopOpen && (
                <div
                  className="absolute left-0 top-[calc(100%+1px)] w-[400px] max-h-[calc(100vh-136px)] overflow-y-auto shop-scrollbar bg-[var(--bg-cream)] border border-[var(--border-cream)] shadow-2xl rounded-b-2xl rounded-tr-2xl z-50 p-4 space-y-3"
                  onMouseEnter={handleShopEnter}
                  onMouseLeave={handleShopLeave}
                >
                  {shopProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={product.href}
                      onClick={() => setIsShopOpen(false)}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-warm)] hover:bg-[#EBDCCB] transition-all duration-200 border border-[var(--border-warm)]"
                    >
                      <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-[var(--brand-primary)] group-hover:underline leading-tight">
                          {product.title}
                        </h4>
                        <p className="text-[11px] text-[var(--brand-primary)]/70 mt-0.5 leading-snug line-clamp-2">
                          {product.subtitle}
                        </p>
                      </div>
                      <svg className="w-4 h-4 text-[var(--brand-primary)]/40 shrink-0 group-hover:text-[var(--brand-primary)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}

                  <Link
                    to="/shop"
                    onClick={() => setIsShopOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 mt-1 rounded-xl bg-[var(--brand-primary)] text-white text-sm font-semibold hover:bg-[var(--brand-deep)] transition-colors"
                  >
                    View all products
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>

            {leftLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={navLinkClass}>{label}</NavLink>
            ))}
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--brand-primary)] focus:outline-none shrink-0"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* ── CENTER LOGO ── absolute on desktop, flex-1 center on mobile ── */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="inline-flex items-center justify-center">
              <img
                src={Logo}
                alt="GunaLife"
                className="h-24 md:h-28 w-auto object-contain"
                draggable="false"
              />
            </Link>
          </div>

          {/* ── RIGHT (desktop) ── */}
          <div className="flex items-center gap-5 md:gap-6">
            <div className="hidden lg:flex items-center gap-7 font-medium text-[15px] tracking-tight">
              {rightLinks.map(({ to, label }) => (
                <NavLink key={to} to={to} className={navLinkClass}>{label}</NavLink>
              ))}

              {/* Discover dropdown */}
              <div
                className="h-full flex items-center cursor-pointer relative"
                onMouseEnter={handleDiscoverEnter}
                onMouseLeave={handleDiscoverLeave}
              >
                <div className={`flex items-center gap-1 transition-opacity duration-150 ${isDiscoverOpen ? 'opacity-70' : ''}`}>
                  <span className="font-medium">Discover</span>
                  <svg
                    className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 ${isDiscoverOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {isDiscoverOpen && (
                  <div
                    className="absolute right-0 top-[calc(100%+1px)] w-[260px] bg-[var(--bg-cream)] border border-[var(--border-cream)] shadow-2xl rounded-b-2xl rounded-tl-2xl z-50 p-3 space-y-2"
                    onMouseEnter={handleDiscoverEnter}
                    onMouseLeave={handleDiscoverLeave}
                  >
                    {discoverLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsDiscoverOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-warm)] hover:bg-[#EBDCCB] transition-all duration-200 border border-[var(--border-warm)]"
                      >
                        <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                        <div className="min-w-0">
                          <p className="font-bold text-sm text-[var(--brand-primary)] group-hover:underline leading-tight">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-[var(--brand-primary)]/70 mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Account */}
            <button
              onClick={() => setIsAuthOpen(true)}
              className="hover:opacity-70 transition-opacity p-1"
              aria-label="Account"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative hover:opacity-70 transition-opacity p-1 cursor-pointer"
              aria-label={`Cart with ${totalCount} items`}
            >
              <div className="w-7 h-7 flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <polygon points="7.86,2 16.14,2 22,7.86 22,16.14 16.14,22 7.86,22 2,16.14 2,7.86" />
                </svg>
                <span className={`text-xs font-bold z-10 leading-none ${totalCount > 0 ? 'text-[var(--brand-teal)]' : ''}`}>
                  {totalCount}
                </span>
              </div>
            </button>
          </div>

        </div>

        {/* ── MOBILE MENU ── */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[var(--bg-cream)] border-t border-[var(--border-cream)] px-5 py-5 font-medium text-[15px] space-y-1">

            {/* Shop accordion */}
            <div>
              <button
                onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                className="w-full flex items-center justify-between py-2.5 font-bold text-[var(--brand-primary)]"
              >
                <span>Shop</span>
                <svg
                  className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${isMobileShopOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileShopOpen && (
                <div className="pl-3 space-y-2 pb-2">
                  {shopProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={product.href}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-[var(--bg-warm)] border border-[var(--border-warm)] hover:bg-[#EBDCCB] transition-colors"
                      onClick={() => { setIsMobileMenuOpen(false); setIsMobileShopOpen(false); }}
                    >
                      <div className="w-12 h-10 rounded-lg overflow-hidden shrink-0">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs text-[var(--brand-primary)] leading-tight">{product.title}</p>
                        <p className="text-[10px] text-[var(--brand-primary)]/70 mt-0.5 line-clamp-1">{product.subtitle}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mobileLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 border-b border-[var(--border-cream)] last:border-none hover:opacity-70 transition-opacity ${isActive ? 'font-bold' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Navbar;
