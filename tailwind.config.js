module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    gridColumn: ['responsive', 'hover'],
    gridColumnStart: ['responsive', 'hover'],
    gridColumnEnd: ['responsive', 'hover'],
  },
  plugins: [],
}
