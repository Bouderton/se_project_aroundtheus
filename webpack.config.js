const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.js",
    stats: "errors-only",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
    liveReload: true,
    hot: false,
  },
};
