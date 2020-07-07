const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}