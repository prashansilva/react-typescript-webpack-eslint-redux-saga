const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Production'),
      'process.env.baseUrl': JSON.stringify('/'),
    }),
  ],
}
