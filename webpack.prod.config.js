var config = require('./webpack.base.config'),
    webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');;

config.mode = 'production';
config.devtool = 'hidden-source-map';
config.plugins.push(new CleanWebpackPlugin(['dist']));


module.exports = config;