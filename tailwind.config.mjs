/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#faf6ee",
          100: "#f4ede0",
          200: "#e7dac1",
        },
        bark: {
          700: "#3a2a1f",
          800: "#2a1f17",
          900: "#1a120c",
        },
        tan: {
          400: "#b58463",
          500: "#8b5a3c",
          600: "#6e3e26",
          700: "#523019",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};
