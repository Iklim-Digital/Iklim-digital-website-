import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        // CSS-only staggered fade-ups — no JS/Framer Motion needed, works on SSR
        'fade-up':     'fadeUp 0.6s ease-out both',
        'fade-up-100': 'fadeUp 0.6s ease-out 0.1s both',
        'fade-up-200': 'fadeUp 0.6s ease-out 0.2s both',
        'fade-up-300': 'fadeUp 0.6s ease-out 0.3s both',
        'fade-up-500': 'fadeUp 0.6s ease-out 0.5s both',
        'fade-up-700': 'fadeUp 0.6s ease-out 0.7s both',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
