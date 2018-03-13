const merge = require('webpack-merge');
var common = require('./webpack.common');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'hidden-source-map',
    'plugins': [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Víctor Valencia - Fullstack Developer',
            filename: path.resolve(__dirname,'index.html'),
            template: path.resolve(__dirname,'src/index.html'),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
});