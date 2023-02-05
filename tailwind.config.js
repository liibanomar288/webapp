/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'hero': "url('/src/components/main.jpg')",
      'news': "url('/src/components/news.png')",

      
    }},
  },
  plugins: [],
}
