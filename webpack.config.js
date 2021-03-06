const path = require('path');
module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: 'ts-loader',
    }]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['.ts', '.js'],
  }
}
