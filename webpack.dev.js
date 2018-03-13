const webpack = require('webpack');
const merge = require('webpack-merge');
var common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');
    
module.exports = merge( common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname,'dist'),
    index: 'index.html',
    publicPath: '/dist/',
    port: 9000,
    inline: true,
    hot: true,
    compress: true,
    // open: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Testing',
      filename: path.resolve(__dirname,'dist/index.html'),
      template: path.resolve(__dirname,'src/index.html'),
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});