/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008000'
      }
    }
  },
  plugins: [],
  corePlugins: {
    // preflight: false
  }
}
