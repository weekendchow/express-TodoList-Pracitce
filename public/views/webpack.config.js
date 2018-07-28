const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app_webpack.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
   mode: 'development'
}
