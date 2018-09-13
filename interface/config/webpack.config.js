const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./interface/src/main.jsx'],
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: 'overlay.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /(\.js[x]?$)/, loader: 'babel-loader' }
    ]
  }
}