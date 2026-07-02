/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        surface: {
          900: '#0A0A0F',
          800: '#111118',
          700: '#1A1A24',
          600: '#222230',
          500: '#2A2A3A',
        },
        accent: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#B91C1C',
          glow: 'rgba(220, 38, 38, 0.15)',
        },
        fire: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
          glow: 'rgba(249, 115, 22, 0.15)',
        },
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.8 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
