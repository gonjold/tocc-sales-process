import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'toyota-red': {
          DEFAULT: '#EB0A1E',
          dark: '#C50818',
          light: '#FF3344',
        },
        'toyota-blue': '#0066FF',
        'electric-blue': '#00CDFF',
        'action-blue': '#1C63FF',
        'navy': {
          DEFAULT: '#03215C',
          deep: '#021947',
          black: '#010D25',
        },
        'success': {
          DEFAULT: '#16A34A',
          light: '#DCFCE7',
        },
        'warning': {
          DEFAULT: '#CA8A04',
          light: '#FEF9C3',
        },
        'error': {
          DEFAULT: '#DC2626',
          light: '#FEE2E2',
        },
        'info': {
          DEFAULT: '#2563EB',
          light: '#DBEAFE',
        },
      },
      fontFamily: {
        'display': ['Toyota Type', 'Inter', 'sans-serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 25px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease',
        'slide-down': 'slideDown 0.2s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
