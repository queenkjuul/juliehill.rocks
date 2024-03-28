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
          400: '#ee0290',
          500: '#ef0078',
          600: '#dd0074',
          700: '#c7006e',
          800: '#b1006a',
          900: '#880061',
        },
      },
    },
  },
}

module.exports = config
