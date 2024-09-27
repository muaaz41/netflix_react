/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", 
    "./src/App.js",        // Explicitly include App.js
    "./src/LandingPage.js", // Explicitly include LandingPage.js
    "./src/index.js",      // Explicitly include index.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

