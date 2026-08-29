const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    clean: true
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  optimization: {
    splitChunks: { chunks: "all" }
  },
  devServer: { static: "./dist", port: 55000, hot: true }
};