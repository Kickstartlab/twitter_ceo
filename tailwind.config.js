/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      yellow: {
        "50": "#FDD08F",
        "100": "#FFB543",
      },
      blue: {
        "50": "#00C4F4",
        "100": "#132047",
        "200": "#564DCA"
      },
      black: {
        "50": "#030B15",
        "100": "#06071B",
      },
      white: {
        "50": "#F5F5F5",
        "100": "#fff",
      },
      gray: {
        "50": "#A4B4C3",
      },
    },
    fontFamily: {
      'outfit': ["'Outfit', sans-serif"],
      'poppins': ["'Poppins', sans-serif"]
    }
  },
  plugins: [],
}
