/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      formSizing: {
        'content': 'content',
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.form-sizing-content': {
          'form-sizing': 'content',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

