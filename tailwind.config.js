/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.html",
    "./docs/assets/scripts/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#588501',
        'primary-dark': '#003b4a',
        'primary-blue': 'rgb(42, 77, 125)',
        'gray-dark': 'rgb(98, 98, 98)',
        secondary: '#589a00',
        background: '#f7f7f7',
        'footer-bg': '#003b4a',
        'footer-text': '#fff',
        'link-hover': '#589a00',
        'light-gray': '#f4f4f4',
        'blockquote-bg': '#e1f7d5',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        noto: ['Noto Serif', 'serif'],
      },
      boxShadow: {
        custom: '1px 5px 5px rgba(0, 59, 74, 0.25)',
      },
      borderRadius: {
        lg: '0.5rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
