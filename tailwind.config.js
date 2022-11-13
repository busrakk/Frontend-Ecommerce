/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.1': '0.063rem'
      },
      colors: {
        'brand-color': 'rgb(244 244 245)',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
      }
    },
  },
  plugins: [],
}