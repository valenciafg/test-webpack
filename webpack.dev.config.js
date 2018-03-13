var config = require('./webpack.base.config'),
    webpack = require('webpack'),
    path = require('path');

config.mode = 'development';
config.devtool = 'eval-source-map';
config.devServer = {
  contentBase: './',
  index: 'index.html',
  publicPath: path.resolve(__dirname,'dist'),
  port: 9000,
  hot: true,
  compress: true,
  open: true,
  stats: 'errors-only'
};
config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
console.log(config);
module.exports = config;