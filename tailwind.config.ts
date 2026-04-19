import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F5C518',
          600: '#D4A017',
          700: '#B8860B',
          800: '#92400e',
          900: '#78350f',
        },
        navy: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3B72E8',
          600: '#1B4FBF',
          700: '#0D2B6B',
          800: '#071A47',
          900: '#020D2A',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-in': 'fadeIn 0.5s ease both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(245,197,24,0.4)' },
          '50%':     { boxShadow: '0 0 0 16px rgba(245,197,24,0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5C518, #D4A017)',
        'navy-gradient': 'linear-gradient(135deg, #020D2A, #0D2B6B)',
        'hero-gradient': 'linear-gradient(135deg, #020D2A 0%, #071A47 50%, #0D2B6B 100%)',
      },
    },
  },
  plugins: [],
}
export default config
