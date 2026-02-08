/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        romantic: {
          black: '#0a0608',
          purple: '#1a0a1e',
          deep: '#120b0e',
          pink: '#ff4d6d',
          rose: '#ff8fa3',
          violet: '#a855f7',
          gold: '#fbbf24',
        },
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        glow: { '0%': { boxShadow: '0 0 20px rgba(255,77,109,0.4)' }, '100%': { boxShadow: '0 0 40px rgba(255,77,109,0.7)' } },
      },
      backgroundImage: {
        'gradient-romantic': 'linear-gradient(135deg, #0a0608 0%, #1a0a1e 40%, #120b0e 100%)',
        'gradient-hero': 'radial-gradient(ellipse 120% 80% at 50% -20%, rgba(255,77,109,0.15) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 80% 50%, rgba(168,85,247,0.08) 0%, transparent 45%)',
      },
    },
  },
  plugins: [],
};
