var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  devServer: {
    inline: true,
    port: 8181
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true,
            formatter: require('eslint-friendly-formatter')
          }
        }],
        include: path.resolve(__dirname, './app'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './index.html',
        filename: 'index.html',
        inject: 'body'
      })]
}
