/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1D2549',
        'primary-dark': '#141A36',
        accent: '#FFB7C5',
        'accent-dark': '#FF9BB0',
        background: '#FFF8F0',
        surface: '#FFFFFF',
        'surface-variant': '#F5E6D3',
        text: '#1D2549',
        'text-secondary': '#6B7280',
        border: '#E8D4BB',
        'border-light': '#D4C4B0',
        divider: '#F0E0D0',
        success: '#4CAF50',
        error: '#EF4444',
        'maps-blue': '#4285F4',
      },
      fontFamily: {
        hebrew: ['NotoSansHebrew-Regular'],
        japanese: ['NotoSansJP-Regular'],
        'hebrew-bold': ['NotoSansHebrew-Bold'],
        'japanese-bold': ['NotoSansJP-Bold'],
        'hebrew-medium': ['NotoSansHebrew-Medium'],
        'japanese-medium': ['NotoSansJP-Medium'],
      },
      spacing: {
        xs: '0.25rem',     // 4
        sm: '0.5rem',      // 8
        md: '0.75rem',     // 12
        lg: '1rem',        // 16
        xl: '1.25rem',     // 20
        xxl: '1.5rem',     // 24
        xxxl: '2rem',      // 32
        '2.5': '0.625rem', // 10
        '3.5': '0.875rem', // 14
        '4.5': '1.125rem', // 18
        '11': '2.75rem',   // 44
        '12': '3rem',      // 48
      },
      width: {
        'avatar-sm': '1.75rem',    // 28
        'avatar-md': '2.5rem',     // 40
        'avatar-lg': '5rem',       // 80
        'btn-icon': '2.125rem',    // 34
        'btn-close': '2.25rem',    // 36
        'timeline-col': '2.5rem',  // 40
        'timeline-dot': '2.25rem', // 36
        'dot': '0.5rem',           // 8
        'timeline-line': '0.125rem', // 2
        'trip-card': '10rem',      // 160
      },
      height: {
        'avatar-sm': '1.75rem',    // 28
        'avatar-md': '2.5rem',     // 40
        'avatar-lg': '5rem',       // 80
        'btn-icon': '2.125rem',    // 34
        'btn-close': '2.25rem',    // 36
        'timeline-dot': '2.25rem', // 36
        'dot': '0.5rem',           // 8
        'img-sm': '6.25rem',       // 100
        'img-md': '10rem',         // 160
        'img-lg': '15rem',         // 240
        'map': '14rem',            // 224
      },
      maxWidth: {
        'modal': '22rem',  // 352
        'form': '30rem',   // 480
      },
      borderRadius: {
        sm: '0.625rem',        // 10
        md: '0.875rem',        // 14
        lg: '1rem',            // 16
        xl: '1.25rem',         // 20
        xxl: '1.5rem',         // 24
        full: '9999px',
        'avatar-sm': '0.875rem',   // 14
        'avatar-lg': '2.5rem',     // 40
        'btn-icon': '1.0625rem',   // 17
        'btn-close': '1.125rem',   // 18
        'timeline-dot': '1.125rem', // 18
        'pill': '1.75rem',         // 28
        'dot': '0.25rem',          // 4
      },
      fontSize: {
        xs: ['0.6875rem', { lineHeight: '1rem' }],      // 11 / 16
        sm: ['0.8125rem', { lineHeight: '1.125rem' }],   // 13 / 18
        md: ['0.9375rem', { lineHeight: '1.375rem' }],   // 15 / 22
        lg: ['1.0625rem', { lineHeight: '1.5rem' }],     // 17 / 24
        xl: ['1.25rem', { lineHeight: '1.75rem' }],      // 20 / 28
        '2xl': ['1.5rem', { lineHeight: '2rem' }],       // 24 / 32
        title: ['2rem', { lineHeight: '2.5rem' }],       // 32 / 40
      },
      lineHeight: {
        'tight': '1.125rem',   // 18
        'snug': '1.25rem',     // 20
        'normal': '1.375rem',  // 22
        'relaxed': '1.5rem',   // 24
      },
    },
  },
  plugins: [],
};
