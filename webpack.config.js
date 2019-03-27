const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/app.js"]
  },
  devServer: {
    compress: true,
    disableHostCheck: true,
    host: "localhost",
    port: 5000,
    publicPath: "http://localhost:5000/"
  },
  output: {
    publicPath: "http://localhost:5000/"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"],
    modules: ["node_modules", "src"]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "./",
    filename: "[name].js",
    libraryTarget: "umd"
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   chunksSortMode(a, b) {
    //     return a.id === "polyfills" ? -1 : 1;
    //   },
    //   template: "./src/index.html"
    // }),
    new CopyPlugin([
      {
        from: "./src/index.html",
        to: "./"
      },
      {
        from:
          "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
        to: "./vendor/webcomponents/custom-elements-es5-adapter.js"
      },
      {
        from:
          "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
        to: "./vendor/webcomponents/webcomponents-loader.js"
      },
      {
        from: "./node_modules/@webcomponents/webcomponentsjs/bundles/*.js",
        to: "./vendor/webcomponents/bundles/",
        flatten: true
      }
    ])
  ]
};
