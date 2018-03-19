
const path = require('path');

var LiveReloadPlugin = require('webpack-livereload-plugin');
const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main-webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        }
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin(
      {
        options: {
          port: 35729
        }
      })
  ]
};

module.exports = config;