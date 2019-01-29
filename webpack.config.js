const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        { 
          test: /\.(js)$/, 
          exclude: /node_modules/,
          use: 'babel-loader' 
        },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  mode: 'development',
  devServer : {
    historyApiFallback: true,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    },
    contentBase: path.resolve(__dirname, "../src"),
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    })
  ]
}