import React, { useState, useRef, useEffect } from 'react';

const TopAnnouncementBanner = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currencies = [
    { code: 'INR', label: 'INR – Indian Rupee' },
    { code: 'USD', label: 'USD – US Dollar' },
    { code: 'EUR', label: 'EUR – Euro' },
    { code: 'GBP', label: 'GBP – British Pound' },
    { code: 'AED', label: 'AED – UAE Dirham' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full bg-[var(--brand-primary)] text-white border-b border-white/10 select-none">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between min-h-[56px] px-4 md:px-8 py-2 gap-2">

        {/* Spacer */}
        <div className="hidden md:block w-36 shrink-0" />

        {/* Center — price info */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
          <p className="font-bold text-sm md:text-base tracking-tight leading-tight flex items-center gap-2 flex-wrap justify-center">
            <span>
              MRP <span className="line-through opacity-70">₹1,999</span>
              {' · '}
              Buy at ₹1,399
            </span>
            <span className="inline-block px-2 py-0.5 text-[10px] sm:text-xs font-extrabold uppercase bg-emerald-500 text-white rounded-full tracking-wider">
              Save 30%
            </span>
          </p>
          <p className="text-[11px] md:text-xs font-medium leading-tight opacity-80 mt-0.5 flex items-center justify-center gap-1.5 flex-wrap">
            <span>≈ ₹600 savings · Free shipping included</span>
            <span className="hidden sm:inline opacity-60">•</span>
            <span>90-day money-back guarantee</span>
          </p>
        </div>

        {/* Right — Currency selector */}
        <div className="relative shrink-0 w-36 flex justify-end" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm rounded-md transition-colors border border-white/30 focus:outline-none"
            aria-label="Select Currency"
            aria-expanded={isDropdownOpen}
          >
            <span>{selectedCurrency}</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-48 bg-white text-[#1a1a1a] border border-gray-200 rounded-lg shadow-2xl z-[100] overflow-hidden py-1">
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => { setSelectedCurrency(curr.code); setIsDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${selectedCurrency === curr.code
                      ? 'bg-[var(--brand-primary)]/10 font-bold text-[var(--brand-primary)]'
                      : 'hover:bg-gray-100 font-medium'
                    }`}
                >
                  <span>{curr.label}</span>
                  {selectedCurrency === curr.code && (
                    <svg className="w-3.5 h-3.5 text-[var(--brand-primary)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TopAnnouncementBanner;
