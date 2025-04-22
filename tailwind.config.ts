
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#9b87f5',
        },
        secondary: {
          DEFAULT: '#222235',
        },
        border: {
          DEFAULT: '#e2e8f0', // Adding border color
        },
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(135deg,#181c2e 0%,#242640 100%)',
        'section-gradient': 'linear-gradient(135deg,#13131a 0%,#232546 100%)',
      },
      boxShadow: {
        glass: '0 4px 32px 0 rgba(80,63,205,0.16)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease',
        'hover-scale': 'hover-scale 0.2s ease',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'hover-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
