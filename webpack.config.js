const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // Mode of the build
  mode: 'development', // 'production' or 'development'
  // Entry point of your application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Path to static files
    },
    compress: true,
    port: 9000, // You can change the port if needed
    open: true, // Open the browser after server starts
    hot: true, // Enable Hot Module Replacement
    // Add any other devServer options you need
  },


  // Module resolutions
  module: {
    rules: [
      {
        test: /\.js$/, // Handling JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript files
          options: {
            presets: ['@babel/preset-env'] // Preset used for env setup
          }
        }
      },
      {
        test: /\.css$/, // Handling CSS files
        use: ['style-loader', 'css-loader'] // Use these loaders for CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handling image files
        type: 'asset/resource'
      }
    ]
  },

  // Plugins (if any)
  plugins: [
    // Add plugins here
    new HtmlWebpackPlugin({
      template: './_index.html' // Path to HTML file
    })
  ],



  // Enable source maps for debugging
  devtool: 'source-map',

  // Resolve options for modules
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'] // Automatically resolve certain extensions
  }
};
