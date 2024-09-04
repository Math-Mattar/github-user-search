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
        h5: '11px',
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
      textColor: {
        title: 'var(--title)',
        subtitle: 'var(--subtitle)',
        button: 'var(--button-text)',
        placeholder: 'var(--placeholder-text)',
        date: 'var(--date-text)',
        bio: 'var(--bio-text)',
        account: 'var(--account-title)',
        statistics: 'var(--account-statistics)',
        info: 'var(--job-text)',
        error: 'var(--error-text)',
      },
      colors: {
        background: 'var(--background)',
        'background-card': 'var(--background-card)',
        'background-details': 'var(--background-details)',
        title: 'var(--title)',
        subtitle: 'var(--subtitle)',
        button: 'var(--button-text)',
        placeholder: 'var(--placeholder-text)',
        date: 'var(--date-text)',
        bio: 'var(--bio-text)',
        account: 'var(--account-title)',
        statistics: 'var(--account-statistics)',
        info: 'var(--job-text)',
        error: 'var(--error-text)',
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
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
