/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      gray: {
        0: "var(--gray-0)",
        50: "var(--gray-50)",
        200: "var(--gray-200)",
        400: "var(--gray-400)",
        600: "var(--gray-600)",
        800: "var(--gray-800)",
        900: "var(--gray-900)",
      },
      orange: {
        200: "var(--orange-200)",
        400: "var(--orange-400)",
        600: "var(--orange-600)",
      },
      red: {
        200: "var(--red-200)",
        400: "var(--red-400)",
        600: "var(--red-600)",
      },
      green: {
        0: "var(--green-0)",
        200: "var(--green-200)",
        400: "var(--green-400)",
        600: "var(--green-600)",
        800: "var(--green-800)",
      },
    },
  },
};
