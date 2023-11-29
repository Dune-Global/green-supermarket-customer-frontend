/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      gray: {
        0: "hsl(var(--gray-0))",
        50: "hsl(var(--gray-50))",
        200: "hsl(var(--gray-200))",
        400: "hsl(var(--gray-400))",
        600: "hsl(var(--gray-600))",
        800: "hsl(var(--gray-800))",
        900: "hsl(var(--gray-900))",
      },
      orange: {
        200: "hsl(var(--orange-200))",
        400: "hsl(var(--orange-400))",
        800: "hsl(var(--orange-600))",
      },
      red: {
        200: "hsl(var(--red-200))",
        400: "hsl(var(--red-400))",
        600: "hsl(var(--red-600))",
      },
      green: {
        0: "hsl(var(--green-0))",
        200: "hsl(var(--green-200))",
        400: "hsl(var(--green-400))",
        600: "hsl(var(--green-600))",
        800: "hsl(var(--green-800))",
      },
      transparent: "transparent",

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
