const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/main.ts",
  mode: "development",
  watch: true,
  resolve: {
    extensions: [".mjs", ".json", ".ts"],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@tests": path.resolve(__dirname, "./tests"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [
          [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, ".webpack"),
          ],
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new NodemonPlugin()],
};
