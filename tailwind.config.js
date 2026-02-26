/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
        fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
     keyframes: {
        blink: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        'blink-3':  'blink 3s ease-in-out infinite',
        'blink-35': 'blink 3.5s ease-in-out infinite',
        'blink-4':  'blink 4s ease-in-out infinite',
      },
  },
  plugins: [],
};
