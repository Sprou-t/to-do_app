// This file defines how Webpack should process, bundle, and optimize the assets and modules in your project.
const path = require('path'); //Imports the path module from Node.js, which provides functions for working with file and directory paths. rerquire for webpack.config file, import/export for JS file
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { watchFile } = require('fs');

module.exports = {
    mode: 'development',
  entry: './src/assets/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
// path.resolve is a method provided by Node.js's path module. It's used to resolve/combine a sequence of path segments into an absolute path.
  },

  module: { //tranasfor specific files into specific modules to be imported & used
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
//If we had our own dist/index.html then it would be overwritten! In order to preserve our own HTML, 
//we provide webpack with a template html file in src, then specify the o/p html filename
    }),
],

devtool: 'inline-source-map',
devServer: { //devServer option allows you to configure the behavior of the webpack development server
    static: './dist', 
    watchFiles: ['src/index.html']
  },

  
};