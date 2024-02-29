/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue':'#071A45',
        'white':'#FFFFFF',
        'gray':'#d1d5db',
        'light-blue':'#0ea5e9',
        'slight-gray':'#D6E9F0',
        'sky-blue': '#2C8FB5'
      },
      
      borderRadius: {     
        'custom-7xl': '6rem',   
        'custom-10xl': '10rem',         
      },
      boxShadow: {
        'top-white': '0 -4px 4px rgba(255, 255, 255, 0.5)',
        'bottom-white': '0 4px 4px rgba(255, 255, 255, 0.5)',
      },
    },
    
  },
  plugins: [],
}