module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "current": "#54AD6D",
        "location": "#4C4F4D",
        "search-text": "#7C7C7C",
        "search-bg": "#F2F3F2",
        "overlay-color": "rgba(0, 0, 0, 0.3)",
        "call-brd": "#5582AD",
        "discount": "#EAFFF1"
      },
      // minWidth: {
      //   '3': '0',
      //   '1/4': '25%',
      //   '1/2': '50%',
      //   '3/4': '75%',
      //   'full': '100%',
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
