/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-color': '#252A34',
        'light-color': '#EAEAEA',
        crimson: '#FF2E63',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(10rem, 1fr))',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
