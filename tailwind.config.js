/** @type {import('tailwindcss').Config} */
import tailwindcss from '@tailwindcss/vite'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"]
      },
      screens: {
        'bg': { 'min': '768px', 'max': '1042px' },
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
}
