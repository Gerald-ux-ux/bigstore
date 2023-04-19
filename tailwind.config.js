/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '821px', 
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },
  },
  plugins: [],
}

