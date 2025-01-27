/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'basic': '#0e78b5',
      'deepBlue': '#021828',
      'deepBlue2': '#022438',
      'lightBlue': '#73ccf3',
      'gold': '#f7921d',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#000000',
      'cream': '#F5F5F5'
    },
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-200px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "bounce-reverse": {
          "0%, 100%": { transform: "translateY(25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(-10%) translateX(-10%)", animationTimingFunction: "cubic-bezier(0.3, 0, 0.2, 1)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(0) translateX(10%)", animationTimingFunction: "cubic-bezier(0.3, 0, 0.2, 1)" },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out ',
        'bounce-slow': 'bounce-slow 10s linear infinite',
        'bounce-reverse': 'bounce-reverse 10s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
