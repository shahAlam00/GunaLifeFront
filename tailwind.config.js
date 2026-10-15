/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── GunaLife Brand tokens (CSS variable–backed) ── */
        brand: {
          primary: 'var(--brand-primary)',
          deep: 'var(--brand-deep)',
          light: 'var(--brand-light)',
        },
        cream: 'var(--bg-cream)',
        warm: 'var(--bg-warm)',
        blush: 'var(--text-blush)',
        gold: 'var(--accent-gold)',
        navy: {
          950: '#060911',
          900: '#0B1120',
          850: '#0F172A',
          800: '#151E36',
          750: '#1A2542',
          700: '#223055',
          600: '#32426E',
          500: '#465A8E',
        },
        violet: {
          950: '#1E0A3C',
          900: '#2E1065',
          800: '#4C1D95',
          700: '#5B21B6',
          600: '#6D28D9',
          500: '#7C3AED',
          400: '#8B5CF6',
          300: '#A78BFA',
          200: '#C4B5FD',
          100: '#EDE9FE',
          50: '#F5F3FF',
        },
        ivory: {
          50: '#FDFBF7',
          100: '#F8F5EE',
          200: '#F0EBE1',
          300: '#E2D9CA',
          400: '#C8BEAE',
          500: '#A79D8E',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 25px -5px rgba(124, 58, 237, 0.4)',
        'glow-violet-lg': '0 0 50px -10px rgba(139, 92, 246, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(124, 58, 237, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-glow': 'radial-gradient(at 20% 20%, rgba(124, 58, 237, 0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(76, 29, 149, 0.2) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
