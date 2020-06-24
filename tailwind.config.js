module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
         'brand-blue':'rgb(8, 52, 102);',
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
