module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        ux: '400px',
        xs: '500px',  // Small screens, such as small phones
        sm: '680px',  // Tablets or small desktop screens
        md: '970px',  // Larger tablets or small laptops
        lg: '1024px', // Laptops or small desktop screens
        xl: '1280px', // Larger desktop screens
        '2xl': '1536px', // Very large desktop screens
      },
    },
  },
  variants: {},
  plugins: [],
};
