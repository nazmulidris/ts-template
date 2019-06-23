const path = require('path');

module.exports = {
  watch: true,
  entry: './src/index',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    hot: true
  }
};
