const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};
const webpack = require("webpack");
const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";

module.exports = {
  baseUrl: BASE_URL,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    proxy: {
      "/api": {
        target: "https://chrome.open.sixi.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"))
      .set("_js", resolve("src/assets/js"));
  },
  pages: {
    workOrder: {
      entry: "src/workOrder/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "安装教程",
      chunks: ["chunk-vendors", "chunk-common", "workOrder"]
    },
    activity: {
      entry: "src/activity/main.js",
      template: "public/index.html",
      filename: "activity.html",
      title: "活动",
      chunks: ["chunk-vendors", "chunk-common", "activity"]
    },
  },
};
