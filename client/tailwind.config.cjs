/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  // theme: {
  //   extend: {},

  // },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: { themes: ['light', 'dark'] },
};
