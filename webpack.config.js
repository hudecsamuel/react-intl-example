var webpack = require("webpack");
var path = require("path");

const sourcePath = path.join(__dirname, './src');

module.exports = {
    context: sourcePath,
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        // 'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        "index.js",

        // 'react-hot-loader/patch',
        // activate HMR for React
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
        }, ],
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [ ".js", ".jsx", ".json", ".css"],
    },
    // performance: {
    //     hints: "warning", // enum
    //     maxAssetSize: 200000, // int (in bytes),
    //     maxEntrypointSize: 400000, // int (in bytes)
    //     assetFilter: function (assetFilename) {
    //         // Function predicate that provides asset filenames
    //         return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    //     }
    // },
    devtool: "cheap-source-map",

    devServer: {
        contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'dist')], // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        // ...
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
}