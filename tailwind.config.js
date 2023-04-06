/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      bread: ['Didact Gothic', 'sans-serif']
    },
    colors: {
      'current': 'currentColor',
      'white': '#FFFFFF',
      'black': '#000000',
      'dark': '#282828',
      'transparent': 'rgba(255,255,255,0)',
      green: {
        DEFAULT: '#66B760',
        dark: '#4AB345',
        contrast: '#831618',
      },
      blue: {
        DEFAULT: '#9AB9CB',
        dark: '#748A93',
        contrast: '#5C3D00'
      },
    }
  },
    extend: {

  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}
