/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', // Scan HTML files in the public directory
    './src/**/*.js',      // Scan JS files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        'primary-3': '#D7AD4A',
      },
    },
  },
  plugins: [],
}

