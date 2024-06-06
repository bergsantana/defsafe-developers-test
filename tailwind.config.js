/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#22223B',
        'light-gray': '#4A4E69',
        'dark-brown': '#9A8C98',
        'light-brown': '#C9ADA7',
        'beige': '#F2E9E4'

      } 
    },
  },
  plugins: [],
}

