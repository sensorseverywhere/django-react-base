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
      // query: {
      //   presets: ['react', 'es2015', 'stage-1']
      // }
    }]
  },
  mode: 'none',

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
