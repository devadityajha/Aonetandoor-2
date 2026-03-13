// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           DEFAULT: "#944E4E",
//           light: "#B06060",
//           dark: "#6B3232",
//           muted: "#C47A7A",
//         },
//         clay: {
//           50: "#FAF6F3",
//           100: "#F2EAE4",
//           200: "#E4D0C6",
//           300: "#CFB09F",
//           400: "#B88B75",
//           500: "#9E6B56",
//           600: "#7D5040",
//           700: "#5E3A2C",
//           800: "#3E261D",
//           900: "#201410",
//         },
//         charcoal: {
//           DEFAULT: "#1A1614",
//           light: "#2C2420",
//           mid: "#3D3330",
//           soft: "#5C5250",
//         },
//         beige: {
//           DEFAULT: "#F5EDE6",
//           warm: "#EDE0D4",
//           dark: "#D9C9BC",
//           charcoal: "#1a1a1a",
//           "charcoal-light": "#2a2a2a",
//         },
//       },
//       fontFamily: {
//         display: ['"Playfair Display"', "Georgia", "serif"],
//         sans: ['"Inter"', "system-ui", "sans-serif"],
//       },
//       letterSpacing: {
//         ultra: "0.35em",
//       },
//       backgroundImage: {
//         "gradient-brand": "linear-gradient(135deg, #944E4E 0%, #6B3232 100%)",
//         "gradient-warm": "linear-gradient(180deg, #FAF6F3 0%, #F2EAE4 100%)",
//         "gradient-dark": "linear-gradient(180deg, #1A1614 0%, #2C2420 100%)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#944E4E",
          light: "#B06060",
          dark: "#6B3232",
          muted: "#C47A7A",
          // ✅ charcoal wale hata diye yahan se
        },
        clay: {
          50: "#FAF6F3",
          100: "#F2EAE4",
          200: "#E4D0C6",
          300: "#CFB09F",
          400: "#B88B75",
          500: "#9E6B56",
          600: "#7D5040",
          700: "#5E3A2C",
          800: "#3E261D",
          900: "#201410",
        },
        charcoal: {
          DEFAULT: "#1A1614", // mere "#1a1a1a" se better — warm dark
          light: "#2C2420", // mere "#2a2a2a" se better — warm tone
          mid: "#3D3330",
          soft: "#5C5250",
        },

        beige: {
          DEFAULT: "#F5EDE6",
          warm: "#EDE0D4",
          dark: "#D9C9BC",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.35em",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #944E4E 0%, #6B3232 100%)",
        "gradient-warm": "linear-gradient(180deg, #FAF6F3 0%, #F2EAE4 100%)",
        "gradient-dark": "linear-gradient(180deg, #1A1614 0%, #2C2420 100%)",
      },
    },
  },
  plugins: [],
};
