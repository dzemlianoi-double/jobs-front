const path = require('path');
const Dotenv = require('dotenv-webpack');
const dotenv = new Dotenv({path: './config/.env'});
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // eslint-disable-line no-undef
    filename: 'main.js',
    publicPath: '/dist/'

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.resolve(__dirname, 'translations') // eslint-disable-line no-undef
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    dotenv,
    new HtmlWebpackPlugin({
      hash: true,
      favicon: './src/assets/images/favicon.ico',
      filename: './index.html',
      title: 'Custom template',
      inject: false,
    })
  ]
};
