/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#10B981',
        accent: '#F59E0B',
        background: '#1E293B',
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
        },
        interactive: '#38BDF8',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'heading-desktop': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-mobile': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['24px', { lineHeight: '1.3' }],
        'body': ['16px', { lineHeight: '1.6' }],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #0F172A, #1E293B)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(56, 189, 248, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
