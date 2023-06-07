import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Inter', ...defaultTheme.fontFamily.sans],
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

