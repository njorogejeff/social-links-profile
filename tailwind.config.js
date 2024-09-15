/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      colors: {
        // Primary Colors
        socialGreen: 'hsl(75, 94%, 57%)',

        // Neutral Colors
        socialWhite: 'hsl(0, 0%, 100%)',
        grey700: 'hsl(0, 0%, 20%)',
        grey800: 'hsl(0, 0%, 12%)',
        grey900: 'hsl(0, 0%, 8%)'
      },
      screens: {
        sm: '375px',
        md: '480px',
        lg: '640px',
        xl: '768px',
        '2xl': '976px',
        '3xl': '1024px',
        '4xl': '1280px',
        '5xl': '1440px',
        '6xl': '1536px',
        '7xl': '1600px',
      },
    },
  },
  plugins: [],
}

