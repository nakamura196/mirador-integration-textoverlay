const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs/dist'),
    publicPath: './docs/dist/',
    library: "integration",
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ]
};
