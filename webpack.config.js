const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  loaders: [
    {
      test: /\.(ico|png|eot|svg|ttf|woff|woff2)$/,
      loader: "file?name=[name]-[hash:6].[ext]",
    },
  ],
};
