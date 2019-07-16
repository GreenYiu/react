//1.引入base merge path
const path = require("path");
const baseConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");

//暴露出去
module.exports = merge(baseConfig, {
  //mode
  mode: "development",

  //devServer
  devServer: {
    //提供web服务根目录
    contentBase: path.resolve(__dirname, "../dist")
  }
});
