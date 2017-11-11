const webpack = require('webpack')
const path = require('path')

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'dist')

var webpackConfig = {
  entry: [
    'react-hot-loader/patch',
    './src/main.js'
  ],

  output: {
    path: DIST,
    filename: 'app.bundle.js'
  },

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 9000,
    contentBase: './src', 
    open: false
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /\.(woff2?|jpe?g|png|gif|ico)$/, 
        loader: 'file-loader?name=./assets/images/[name].[ext]' 
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   include: /\.js($|\?)/i,
    //   minimize: true,
    // })
  ],

  resolve: {
    alias: {
      config: path.resolve(__dirname, 'dist/static-config.json')
    }
  },

  node: {
    fs: 'empty'
  }
}

module.exports = webpackConfig