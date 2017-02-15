var webpack = require('webpack');
var path = require('path');
var bundle_css = new (require('extract-text-webpack-plugin'))('assets/css/bundle.css');
var dist_cleanup = new (require('webpack-cleanup-plugin'));
var prod_env = new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify('production') }});

var PARAMS = process.env.npm_lifecycle_script.split(' ');
var DEBUG = (PARAMS[1].replace('--', '') !== 'production');
var DEPLOY = PARAMS[PARAMS.length-1].replace(/\"/g, '').replace('--', '').split('=');
var DEPLOY_PATH = (DEPLOY[0] == 'deploy') ? DEPLOY[1] : ''
var WP_THEME_PATH = (DEPLOY_PATH !== '') ? 'wp-content/themes/' + DEPLOY_PATH.split('/').pop() + '/' : ''

console.log(WP_THEME_PATH)

var SRC_DIR = path.resolve(__dirname, 'src');
var THEME_DIR = path.resolve(__dirname, 'theme');
var DIST_DIR = (DEPLOY_PATH == '') ? path.resolve(__dirname, 'dist') : DEPLOY_PATH;
var DIST_TIMESTAMP = new Date().getTime();

var config = {
  entry: {
    'assets/js/bundle.js': [SRC_DIR + '/index.js']
  },
  output: {
    path: DIST_DIR,
    filename: "[name]"
  },
  module: {
    loaders: [
      {
        test: /template(.*)\.(css)$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /template(.*)\.(php)$/,
        loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader!ejs-html?DIST_TIMESTAMP=' + DIST_TIMESTAMP + (DEBUG ? '&DEBUG':'')
      },
      {
        test: /(\.html)$/,
        loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader!ejs-html?DIST_TIMESTAMP=' + DIST_TIMESTAMP + (DEBUG ? '&DEBUG':'')
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
        test: /fonts(.*)\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /img(.*)\.(gif|jpeg|jpg|png|svg|ico)$/,
        loader: 'file-loader?name=assets/img/[name].[ext]&publicPath=' + WP_THEME_PATH
      }
    ]
  },
  plugins: DEBUG ? [bundle_css, dist_cleanup] : [bundle_css, dist_cleanup, prod_env],
  devtool: 'cheap-module-source-map'
};

module.exports = config;
