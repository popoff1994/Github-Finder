module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes:['dark'],
  },
}