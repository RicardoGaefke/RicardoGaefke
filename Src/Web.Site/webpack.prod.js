const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: '#source-map',
  entry: {
    app: path.resolve(__dirname, './React/index.jsx'),
    // server: path.resolve(__dirname, './React/server.jsx'),
    // app: './React/index.jsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './wwwroot/dist'),
  },
});
