/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A66E38',
        secondary: '#FFAD60',
      },
    },
  },
  plugins: [],
};
