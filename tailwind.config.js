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
        'tspg-yellow': '#fbdb5b',
        'tspg-gray': '#d9d9d9',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
