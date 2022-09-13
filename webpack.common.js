const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/pages/home/app.js",
    user: "./src/pages/user/app.js",
    bootstrap: "./src/bootstrap.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  }
};
