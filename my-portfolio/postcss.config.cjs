const tailwindPlugin = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [tailwindPlugin(), autoprefixer()],
}
