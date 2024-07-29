/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', // Scan HTML files in the public directory
    './src/**/*.js',      // Scan JS files in the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sarabun: ["Sarabun", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        'primary-1': '#1C1C1C',
        'primary-2': '#D7C9AC',
        'primary-3': '#D7AD4A',
        'primary-4': '#7C6C4B',
        'secondary-1': '#A38A41',
        'secondary-2': '#F7C262',
        'secondary-3': '#CDAA66',
        'secondary-4': '#EDACAA',
        'tertiary-1': '#B45B3B',
        'tertiary-2': '#6C3F2A',
        'tertiary-3': '#734837',
        'tertiary-4': '#B35D4E',
        'quaternary-1': '#93B053',
        'quaternary-2': '#5B6334',
        'quaternary-3': '#6C6A35',
        'quaternary-4': '#546D45',
        'neutral-1': '#000000',
        'neutral-2': '#4D4D4D',
        'neutral-3': '#808080',
        'neutral-4': '#CCCCCC',
        'neutral-5': '#F5F5F5',
        'neutral-6': '#C1C1C1',
      },
    },
  },
  plugins: [],
}

