var webpack = require('webpack');
var path = require('path');
var bundle_css = new (require('extract-text-webpack-plugin'))('css/bundle.css');
var dist_cleanup = new (require('webpack-cleanup-plugin'))
var prod_env = new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify('production') }})

var DEBUG = ((process.env.npm_lifecycle_script.split(' ')[1]).replace('--', '') !== 'production')
var SRC_DIR = path.resolve(__dirname, 'src');
var THEME_DIR = path.resolve(__dirname, 'theme');
var DIST_DIR = path.resolve(__dirname, 'dist');
var DIST_TIMESTAMP = new Date().getTime();

var config = {
  entry: {
    'js/bundle.js': [
      SRC_DIR + '/index.html',
      SRC_DIR + '/index.js'
    ]
  },
  output: {
    path: DIST_DIR,
    filename: "[name]"
  },
  module: {
    loaders: [
      {
        test: /(\.html)$/,
        loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader!ejs-html?DIST_TIMESTAMP=' + DIST_TIMESTAMP
      },
      {
        test: /(\.css)$/,
        loader: DEBUG ? 'style-loader!css-loader': bundle_css.extract('style-loader', '!css-loader')
      },
      {
        test: /(\.scss)$/,
        loader: DEBUG ? 'style-loader!css-loader!sass-loader': bundle_css.extract('style-loader', '!css-loader!sass-loader')
      },
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ["transform-regenerator"],
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(gif|jpeg|jpg|png|ico)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  plugins: DEBUG ? [bundle_css, dist_cleanup] : [bundle_css, dist_cleanup, prod_env],
  devtool: 'cheap-module-source-map'
};

module.exports = config;
