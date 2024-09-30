/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        jump: 'jump 2s infinite',
      },
      colors: {
        primary: '#A66E38',
        secondary: '#FFAD60',
      },
    },
  },
  plugins: [],
};
