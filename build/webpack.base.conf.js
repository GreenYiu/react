const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  //入口
  // entry: "./src/index.js"
  entry: path.resolve(__dirname, "../src/index.js"),

  //出口
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },

  module: {
    //Loader规则
    rules: [
      // exclude 排除  避免babel-loader去node_modules找js文件
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: [/node_modules/] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },

  plugins: [
    //html-webpack-plugin
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),

    //copy-webpack-plugin
    // new CopuWebpackPlugin({
    //   template: path.resolve([{ from: path.resolve(__dirname, "../public") }])
    // })
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, "../public") }])
  ]
};
