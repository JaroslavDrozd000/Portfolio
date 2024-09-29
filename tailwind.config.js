/** @type {import('tailwindcss').Config} */
import * as defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#98A7F2',
      },
    },
  },
  plugins: [],
};
