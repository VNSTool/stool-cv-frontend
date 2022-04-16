module.exports = {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      width: {
        '9.5': '2.375rem',
        '35': '8.75rem',
        '42': '10.5rem',
        '120': '30rem',
        '248': '62rem',
      },
      maxWidth: {
        'xxxs': '5rem',
        'xxs': '10rem',
      },
      height: {
        '9.5': '2.375rem',
        '15': '3.75rem',
        '35': '8.75rem',
        '42': '10.5rem',
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
      boxShadow: {
        '3xl': '0px 8px 40px -10px rgba(0, 0, 0, 0.25)',
      },
    },
    colors: {
      'white': '#ffffff',
      'grey-600': '#EEEFF2',
      'grey-700': '#DCDCDC',
      'grey-900': '#B7BAC5',
      'black-800': '#737880',
      'black-900': '#494C51',
      'black': '#000000',
      'ghost-100': '#F5F8FF',
      'ghost-200': '#E6EDFF',
      'ghost-300': '#CCDBFF',
      'majorelle': '#4A4DE6'
    }
  },
  plugins: [],
}
