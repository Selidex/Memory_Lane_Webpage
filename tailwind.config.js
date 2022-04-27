module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#bdbff9',

          secondary: '#ffa3be',

          accent: '#6b3cb7',

          neutral: '#1B1D22',

          'base-100': '#303154',

          info: '#50CBF1',

          success: '#21C060',

          warning: '#EEAE3F',

          error: '#EB194A',
        },
      },
    ],
  },
};
