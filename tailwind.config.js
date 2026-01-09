/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#FF7033",
          light: "#FFE5D9",
          dark: "#E55A20",
        },
        gray: {
          dark: "#333333",
          medium: "#666666",
          light: "#F5F5F5",
        },
        footer: {
          DEFAULT: "#2F3E4C",
        },
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(to bottom, #FF7033, #FFE5D9, #FFFFFF)',
        'orange-gradient-hero': 'linear-gradient(to bottom, #FF7033, #FF8A4D)',
      },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            slideUp: {
              '0%': { transform: 'translateY(20px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            slideDown: {
              '0%': { transform: 'translateY(-20px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            scaleIn: {
              '0%': { transform: 'scale(0.95)', opacity: '0' },
              '100%': { transform: 'scale(1)', opacity: '1' },
            },
          },
          animation: {
            fadeIn: 'fadeIn 0.6s ease-out',
            slideUp: 'slideUp 0.6s ease-out',
            slideDown: 'slideDown 0.6s ease-out',
            scaleIn: 'scaleIn 0.6s ease-out',
          },
    },
  },
  plugins: [],
};
