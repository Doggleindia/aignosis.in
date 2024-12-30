/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        cormorant: ['CormorantGaramond', 'sans-serif'], // Fixed key to follow standard naming
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(94.68deg, #1E0923 -0.01%, rgba(117, 35, 137, 0.04) 97.09%)',
        'new-gradient': 'linear-gradient(135deg, #FEFAFF, #F8E5FF, #EDB9FF)',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
