/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        card: "#0B1120",
        accent: "#2563EB",
        luxury: "#D4AF37",
        text: "#F8FAFC",
        muted: "#94A3B8"
      }
    },
  },
  plugins: [],
}
