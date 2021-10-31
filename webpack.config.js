const webpack = require("webpack");
const path = require("path");

module.exports = (env) => {
  let exports = {
    plugins: [
      new webpack.DefinePlugin({
        BASENAME: JSON.stringify(process.env.BASENAME),
      }),
    ],
    entry: "./src/app.js",
    resolve: {
      extensions: [".js", ".jsx"],
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.jsx?$/,
          exclude: /node_modules/,
        },
        {
          use: ["style-loader", "css-loader", "sass-loader"],
          test: /\.(sa|c)ss$/,
        },
      ],
    },
  };

  if (env !== "production") {
    exports = {
      ...exports,
      mode: "development",
      devtool: "eval-cheap-source-map",
      devServer: {
        static: {
          directory: path.resolve(__dirname, "public"),
        },
        host: "0.0.0.0",
        hot: true,
        historyApiFallback: true,
      },
    };
  }

  return exports;
};
