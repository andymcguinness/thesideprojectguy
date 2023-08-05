/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tspg-yellow': '#F5CB5C',
        'tspg-gray': '#333533',
        'tspg-white': '#ECEDEB',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
