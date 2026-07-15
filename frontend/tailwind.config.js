module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7f5ff",
          100: "#ede8ff",
          200: "#d6ccff",
          300: "#b5a0ff",
          400: "#8b6fff",
          500: "#6a4dff",
          600: "#4c32f7",
          700: "#391fd1",
          800: "#2d1a9f",
          900: "#241676"
        }
      },
      boxShadow: {
        glass: "0 20px 120px rgba(59, 130, 246, 0.15)"
      }
    }
  },
  plugins: []
}
