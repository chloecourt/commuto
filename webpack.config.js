const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { NONAME } = require("dns");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: "/node_modules/",
        loader: require.resolve("babel-loader"),
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env", "@babel/preset-react"],
        //   },
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|jpe?g|gif$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    proxy: { "/cookie": "http://localhost:3000" },
    hot: true,
    static: {
      directory: path.join(__dirname, "build"),
      publicPath: "/",
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
