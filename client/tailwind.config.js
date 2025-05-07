/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
        background: '#ffffff',
        foreground: '#1e293b',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 