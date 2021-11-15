module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        alfa: ['AlfaSlabOneRegular', 'system-ui'],
        courier: ['CourierPrimeRegular', 'system-ui'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
