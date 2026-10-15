import React, { useState, useEffect, useRef } from 'react';

export default function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('login');
  const [showLoginPwd, setShowLoginPwd] = useState(false);
  const [showRegPwd, setShowRegPwd] = useState(false);
  const [showRegConfirm, setShowRegConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // form fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [regFirst, setRegFirst] = useState('');
  const [regLast, setRegLast] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPwd, setRegPwd] = useState('');
  const [regConfirm, setRegConfirm] = useState('');
  const [terms, setTerms] = useState(false);

  const overlayRef = useRef(null);

  useEffect(() => {
    setError(''); setSuccess('');
  }, [tab]);

  useEffect(() => {
    if (!isOpen) return;
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const pwdStrength = (p) => {
    if (!p) return null;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    if (s <= 1) return { label: 'Weak', w: 'w-1/3', color: 'bg-red-400' };
    if (s <= 2) return { label: 'Fair', w: 'w-2/3', color: 'bg-yellow-400' };
    return { label: 'Strong', w: 'w-full', color: 'bg-green-500' };
  };
  const strength = pwdStrength(regPwd);

  const handleLogin = (e) => {
    e.preventDefault(); setError(''); setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess('Welcome back! Logged in successfully.');
      setTimeout(() => { setSuccess(''); onClose(); }, 1500);
    }, 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault(); setError('');
    if (regPwd !== regConfirm) { setError('Passwords do not match.'); return; }
    if (!terms) { setError('Please accept the Terms of Service.'); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess('Account created! Welcome to GunaLife.');
      setTimeout(() => { setSuccess(''); onClose(); }, 1500);
    }, 1000);
  };

  const inputCls = 'w-full rounded-xl border border-[var(--border-cream)] bg-white px-4 py-3 text-sm text-[var(--brand-primary)] placeholder:text-[var(--brand-primary)]/35 outline-none transition focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/10';

  const EyeBtn = ({ show, toggle }) => (
    <button type="button" tabIndex={-1} onClick={toggle}
      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--brand-primary)]/40 hover:text-[var(--brand-primary)] transition-colors p-0.5">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {show ? (
          <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
            <line strokeLinecap="round" strokeWidth="1.8" x1="1" y1="1" x2="23" y2="23" />
          </>
        ) : (
          <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
          </>
        )}
      </svg>
    </button>
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onMouseDown={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[var(--brand-primary)]/40 backdrop-blur-md" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-[420px] rounded-3xl bg-[var(--bg-cream)] shadow-2xl overflow-hidden">

        {/* Top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[var(--brand-deep)] via-[var(--brand-light)] to-[var(--brand-deep)]" />

        <div className="px-7 pt-7 pb-8 max-h-[90vh] overflow-y-auto no-scrollbar">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-serif text-xl font-bold tracking-[0.2em] text-[var(--brand-primary)] uppercase">
              GunaLife
            </span>
            <button onClick={onClose} aria-label="Close"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--bg-warm)] text-[var(--brand-primary)]/50 hover:text-[var(--brand-primary)] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Alerts */}
          {success && (
            <div className="mb-5 flex items-center gap-2.5 p-3.5 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-semibold">
              <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 text-[10px]">✓</span>
              {success}
            </div>
          )}
          {error && (
            <div className="mb-5 flex items-center gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              <span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 text-[10px]">!</span>
              {error}
            </div>
          )}

          {/* Tabs */}
          <div className="flex rounded-2xl bg-[var(--bg-warm)] p-1 mb-6 gap-1">
            {['login', 'register'].map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 ${tab === t
                    ? 'bg-[var(--brand-primary)] text-white shadow-md'
                    : 'text-[var(--brand-primary)]/50 hover:text-[var(--brand-primary)]'
                  }`}>
                {t === 'login' ? 'Log In' : 'Register'}
              </button>
            ))}
          </div>

          {/* ── LOGIN ── */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/55 mb-1.5">Email</label>
                <input type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
                  placeholder="you@example.com" className={inputCls} required />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/55 mb-1.5">Password</label>
                <div className="relative">
                  <input type={showLoginPwd ? 'text' : 'password'} value={loginPwd} onChange={e => setLoginPwd(e.target.value)}
                    placeholder="Enter your password" className={`${inputCls} pr-11`} required />
                  <EyeBtn show={showLoginPwd} toggle={() => setShowLoginPwd(!showLoginPwd)} />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="button" className="text-xs text-[var(--brand-primary)]/55 hover:text-[var(--brand-primary)] font-semibold transition-colors">
                  Forgot password?
                </button>
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white font-bold text-sm tracking-wider transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70">
                {loading && <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
                {loading ? 'Logging in...' : 'Log In'}
              </button>
              <p className="text-center text-xs text-[var(--brand-primary)]/50 pt-1">
                No account?{' '}
                <button type="button" onClick={() => setTab('register')} className="font-bold text-[var(--brand-primary)] hover:underline">Create one</button>
              </p>
            </form>
          )}

          {/* ── REGISTER ── */}
          {tab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/55 mb-1.5">First Name</label>
                  <input type="text" value={regFirst} onChange={e => setRegFirst(e.target.value)} placeholder="John" className={inputCls} required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/55 mb-1.5">Last Name</label>
                  <input type="text" value={regLast} onChange={e => setRegLast(e.target.value)} placeholder="Doe" className={inputCls} required />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/55 mb-1.5">Email</label>
                <input type="email" value={regEmail} onChange={e => setRegEmail(e.target.value)} placeholder="you@example.com" className={inputCls} required />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/55 mb-1.5">Password</label>
                <div className="relative">
                  <input type={showRegPwd ? 'text' : 'password'} value={regPwd} onChange={e => setRegPwd(e.target.value)}
                    placeholder="Min. 8 characters" className={`${inputCls} pr-11`} required />
                  <EyeBtn show={showRegPwd} toggle={() => setShowRegPwd(!showRegPwd)} />
                </div>
                {strength && (
                  <div className="mt-2 space-y-1">
                    <div className="h-1.5 w-full bg-[var(--border-cream)] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-300 ${strength.w} ${strength.color}`} />
                    </div>
                    <p className="text-[10px] font-semibold text-[var(--brand-primary)]/50">Strength: {strength.label}</p>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/55 mb-1.5">Confirm Password</label>
                <div className="relative">
                  <input type={showRegConfirm ? 'text' : 'password'} value={regConfirm} onChange={e => setRegConfirm(e.target.value)}
                    placeholder="Repeat password" className={`${inputCls} pr-11`} required />
                  <EyeBtn show={showRegConfirm} toggle={() => setShowRegConfirm(!showRegConfirm)} />
                </div>
              </div>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" checked={terms} onChange={e => setTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[var(--brand-primary)] shrink-0" />
                <span className="text-xs text-[var(--brand-primary)]/60 leading-relaxed">
                  I agree to the{' '}
                  <a href="/terms" className="font-bold text-[var(--brand-primary)] hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="font-bold text-[var(--brand-primary)] hover:underline">Privacy Policy</a>
                </span>
              </label>
              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white font-bold text-sm tracking-wider transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70">
                {loading && <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
              <p className="text-center text-xs text-[var(--brand-primary)]/50 pt-1">
                Already have an account?{' '}
                <button type="button" onClick={() => setTab('login')} className="font-bold text-[var(--brand-primary)] hover:underline">Log in</button>
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
