const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  mode: "development",
  // plugins: [htmlPlugin],
  performance: {
    hints: false
  },
  devtool: 'eval-source-map', // this helps to browser to point to the exact file in the console, helps in debug
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    headers: {
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
   }
  }
};
