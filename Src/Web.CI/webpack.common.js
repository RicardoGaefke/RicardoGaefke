module.exports = {
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader', 'eslint-loader'],
      },
      {
        test: /\.css$|\.scss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre', test: /\.js$/, loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
