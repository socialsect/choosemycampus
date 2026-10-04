/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          'blue-dark': '#1d4ed8',
          green: '#16a34a',
          'green-dark': '#15803d',
          yellow: '#eab308',
          'yellow-dark': '#ca8a04',
          purple: '#4c1d95',
          'purple-dark': '#3b0764',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
