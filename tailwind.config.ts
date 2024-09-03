import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontSize: {
        body: '15px',
        h1: '26px',
        h2: '22px',
        h3: '16px',
        h4: '13px',
      },
      lineHeight: {
        xs: '20px',
        sm: '24px',
        md: '25px',
        lg: '33xpx',
        xl: '38px',
      },
      letterSpacing: {
        theme: '2.5px',
      },
      colors: {
        background: 'var(--background)',
        'background-card': 'var(--background-card)',
        'background-details': 'var(--background-details)',
        title: 'var(--title)',
        subtitle: 'var(--subtitle)',
        'join-date-text': 'var(--join-date-text)',
        'bio-text': 'var(--bio-text)',
        error: 'var(--error)',
        white: 'var(--white)',
        'hover-button': 'var(--hover-button)',
      },
      boxShadow: {
        card: '0 16px 30px -10px rgba(70,96,187,19.86%)',
      },
      borderRadius: {
        sm: '10px',
        md: '15px',
      },
      backgroundImage: {
        'search-icon': "url('/search-icon.png')",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
