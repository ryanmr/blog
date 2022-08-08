const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "8rem",
      },
      minWidth: {
        64: "16rem",
      },
      colors: {
        "ryan-off-white": "rgb(221, 221, 221)",
        "ryan-black": "rgb(24, 24, 24)",
        "ryan-black-transparent": "rgba(0, 0, 0, .5)",
        orange: colors.orange,
      },
      fontFamily: {
        brand: ["League Gothic", "sans-serif"],
        scrawl: ["League Script Number One", "serif"],
        cursive: ["Pacifico", "cursive"],
        hyper: ["Atkinson Hyperlegible", defaultTheme.fontFamily.sans],
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            fontFamily: theme("fontFamily.hyper").join(", "),

            "--tw-prose-body": "#fff",
            "--tw-prose-headings": "#fff",
            "--tw-prose-bold": "#fff",
            "--tw-prose-links": "#fff",
            "--tw-prose-quotes": "#fff",
            "--tw-prose-quote-borders": theme("colors.red[600]"),
            "--tw-prose-code": "#fff",

            blockquote: {
              // paddingTop: theme("spacing[1]"),
              // paddingBottom: theme("spacing[1]"),
              fontStyle: "normal",
            },

            p: {
              maxWidth: theme("maxWidth.prose"),
            },

            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
