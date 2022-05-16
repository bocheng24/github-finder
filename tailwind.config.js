module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1248px'
    },

    extend: {
      colors: {
        'main': '#0D3959',
        'secondary': '#693A78',
        'danger': '#D14D5F',
        'warning': 'E98C30',
        'sunny': '#E46B3F'
      }
    },
  },
  plugins: [],
}
