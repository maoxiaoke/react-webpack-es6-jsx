var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./build')
    },
    devServer: {
        inline: true,
        hot: true,
        port: 8181
    },
    module: {
        loaders:[
            {test:/\.js?$/,loader:'babel-loader',exclude:/node_modules/},
            {test:/\.jsx?$/,loader:'babel-loader',exclude:/node_modules/}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './index.html',
                filename: 'index.html',
                inject: 'body'
            }
        )
    ]
};