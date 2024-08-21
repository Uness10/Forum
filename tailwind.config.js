/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {             colors: {
      'logo-dark-green': '#004d40', // Assuming a dark green from the logo
      'logo-gold': '#bca136',       // A gold/brown shade from the logo
      'logo-cream': '#f3f1e7',      // A light cream color possibly for backgrounds
      'logo-brown': '#9c5b3c',      // For texts or other elements
    },
    fontFamily: {
      'body': ['Nunito', 'sans-serif'], // Example font
    }
    },
  },
  plugins: [],
};
