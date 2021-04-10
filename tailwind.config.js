module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fawn: '#e7a977',
        'dark-khaki': '#c7cb85',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
