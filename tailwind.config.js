/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rainbowOutline: {
          '0%': { borderColor: '#ff0000', boxShadow: '0 0 10px #ff0000' },
          '20%': { borderColor: '#ff7f00', boxShadow: '0 0 10px #ff7f00' },
          '40%': { borderColor: '#ffff00', boxShadow: '0 0 10px #ffff00' },
          '60%': { borderColor: '#00ff00', boxShadow: '0 0 10px #00ff00' },
          '80%': { borderColor: '#0000ff', boxShadow: '0 0 10px #0000ff' },
          '100%': { borderColor: '#ff0000', boxShadow: '0 0 10px #ff0000' },
        },
      },
      animation: {
        rainbowOutline: 'rainbowOutline 4s linear infinite',
      },
      colors: {
        "custom-color": '#f0f4f8',
      },
      fontFamily: {
        calistoga: ['Calistoga', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}