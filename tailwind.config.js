/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 0px 5px rgba(0, 0, 0, 0.15)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.6)',
        'custom-color': '0 4px 6px rgba(255, 105, 180, 0.5)',
        'custom-deep': '0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      screens:{
          "1000px": "1000px",
          "1100px": "1100px",
          "1200px": "1200px",
          "1300px": "1300px",
          "1500px": "1500px",
          "1600px": "1600px",
          "992px": "992px",
          "800px": "800px",
          "400px": "400px" 
      }
    },
  },
  plugins: [],
}