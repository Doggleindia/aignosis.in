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
      Cormorant: ['CormorantGaramond', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(94.68deg, #1E0923 -0.01%, rgba(117, 35, 137, 0.04) 97.09%)',

      },
    },
  },
  plugins: [],
}
