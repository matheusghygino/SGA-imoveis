/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F4E79", // Azul profundo (confiança e seriedade)
          light: "#3E73A1", // Azul mais leve para contrastes
        },
        secondary: {
          DEFAULT: "#F4D58D", // Amarelo areia (reflete sol e litoral)
          dark: "#D6B75A", // Tom dourado mais discreto
        },
        accent: {
          DEFAULT: "#5C8D89", // Verde-água suave (praia e tranquilidade)
          light: "#89BDB9", // Tom mais claro para toques leves
        },
        neutral: {
          DEFAULT: "#F9F9F9", // Branco gelo para fundos limpos
          dark: "#C4C4C4", // Cinza claro moderno
        },
      },
    },
    fontFamily: {
      heading: ["Playfair Display", "serif"],
      body: ["Source Sans Pro", "sans-serif"],
    },
  },
  plugins: [],
};
