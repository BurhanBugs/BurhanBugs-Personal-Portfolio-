/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {


      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutToLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        borderSpin: {
          '0%': { borderColor: ' #3b82f6' }, // blue
          '25%': { borderColor : ' #ec4899 ' }, // pink
          '50%': { borderColor: ' #10b981 ' }, // green
          '75%': { borderColor: ' #f59e0b ' }, // yellow
          '100%': { borderColor: ' #3b82f6' }, // back to blue
        },
        spinDot: {
          '0%': { transform: 'rotate(0deg)', 'border-color': '#93c5fd', 'Color': '#93c5fd' }, // Blue
          '25%': { transform: 'rotate(90deg)', 'border-color': '#f472b6', 'Color': '#f472b6' }, // Pink
          '50%': { transform: 'rotate(180deg)', 'border-color': '#34d399', 'Color': '#34d399' }, // Green
          '75%': { transform: 'rotate(270deg)', 'border-color': '#fbbf24', 'Color': '#fbbf24' }, // Yellow
          '100%': { transform: 'rotate(360deg)', 'border-color': '#93c5fd', 'Color': '#93c5fd' }, // Blue (back to start)
        },
      },
      animation: {
        borderSpin: 'borderSpin 5s ease-in-out infinite',
        spinDot: 'spinDot 4s linear infinite',
        slideInFromLeft: 'slideInFromLeft 0.5s ease-out forwards',
        slideOutToLeft: 'slideOutToLeft 0.5s ease-in forwards',
      },

    },
  },
  plugins: [],
}