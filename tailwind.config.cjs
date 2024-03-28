/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#fbe2f0',
          100: '#f5b6da',
          200: '#f186c0',
          300: '#ef4fa6',
          400: '#ec008e',
          500: '#ed0076',
          600: '#db0072',
          700: '#c4006c',
          800: '#af0068',
          900: '#86005f',
        },
      },
    },
  },
}

module.exports = config
