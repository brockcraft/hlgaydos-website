/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'site-bg':    '#fcf6f3',
        'light-bg':   '#f3e4dc',
        'dark-bg':    '#353d38',
        'accent':     '#a96a44',
        'accent2':    '#718973',
        'site-text':  '#383534',
      },
      fontFamily: {
        heading: ['"Roboto Slab"', 'Georgia', 'serif'],
        body:    ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
