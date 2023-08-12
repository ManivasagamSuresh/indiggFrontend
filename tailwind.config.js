/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'grad-start': '#CFE7FA',
        'grad-mid': '#A8C6E0', // You can adjust this midpoint color
        'grad-end': '#72a2cf',
      },
      textShadow: {
        'custom': '2px 2px black',
      },
      boxShadow: {
        'custome': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // Add more custom box shadows here
      },
    },
  },
  plugins: [],
}

