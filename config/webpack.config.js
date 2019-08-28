const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const IS_DEV_SERVER = ['start-storybook', 'webpack-dev-server'].some(command => process.argv[1].includes(command));
const IS_STORYBOOK = ['start-storybook'].some(command => process.argv[1].includes(command));
const BASE_PATH = path.resolve(__dirname, '..');
let ENTRY_PATH = path.resolve(BASE_PATH, 'src/index.js');
let OUTPUT_PATH =  path.resolve(BASE_PATH, 'build');

// ENVIRONMENT VARIABLES
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const PAGE =  process.env.PAGE;

if (PAGE !== undefined) {
  ENTRY_PATH = path.resolve(BASE_PATH, 'pages', PAGE, 'build');
  OUTPUT_PATH = path.resolve(BASE_PATH, 'pages', PAGE, 'build');
}

// A JavaScript class.
class BailPlugin {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.done.tap(
      'BailPlugin',
      (stats) => {
        if (IS_DEV_SERVER === false && stats.hasErrors() === true) {
          throw new Error(stats.compilation.errors.map((err) => err.message || err));
        }
      }
    );
  }
}


module.exports = {
  mode: NODE_ENV,
  bail: IS_DEV_SERVER === false,
  entry: ENTRY_PATH,
  output: {
    path: OUTPUT_PATH,
    filename: 'app.bundle.js',
    publicPath: IS_DEV_SERVER === true ? '/' : OUTPUT_PATH + '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [
          path.resolve(BASE_PATH, 'src/components'),
          path.resolve(BASE_PATH, 'src/pages'),
        ],
        use: [
          IS_STORYBOOK === true ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [
          path.resolve(BASE_PATH, 'src/styles'),
          path.resolve(BASE_PATH, 'node_modules'),
        ],
        use: [
          IS_STORYBOOK === true ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }
    ],
  },
  resolve: {
    alias: {
      Components: path.resolve(BASE_PATH, 'src/components'),
      Styles: path.resolve(BASE_PATH, 'src/styles'),
      Images: path.resolve(BASE_PATH, 'src/images'),
      Fonts: path.resolve(BASE_PATH, 'src/fonts'),
      Pages: path.resolve(BASE_PATH, 'src/pages'),
      API: path.resolve(BASE_PATH, 'src/api'),
      Vendor: path.resolve(BASE_PATH, 'vendor'),
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new BailPlugin(),
  ],
  devServer: {
    port: 9000,
    hot: true,
    inline: true,
    open: true,
    contentBase: path.resolve(BASE_PATH),
    publicPath: '/build/',
    proxy: {
      "/api/*": {
        target: 'http://localhost:8000/',
        secure: false,
      },
    },
  },
};
