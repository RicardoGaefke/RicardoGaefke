const path = require('path');

module.exports = {
  entry: './React/index.jsx',
  output: {
    path: path.resolve(__dirname, './wwwroot/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './wwwroot/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
