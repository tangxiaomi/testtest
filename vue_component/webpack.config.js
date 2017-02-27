var htmlWebpackPlugin = require('html-webpack-plugin');
// 配置path路径
var path = require('path');
var distPath = path.join(__dirname, '/dist');
module.exports = {
    entry: './src/main.js',
    output: {
        path: distPath,
        filename: 'build.js',
    },
    module: {
        // 打包ES6语法
        loaders: [{
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'

            },
            {
                test: /\.vue$/,
                exclude: '/node_modules/',
                loader: 'vue-loader'

            },
            // 将css打包成js 注意顺序
            // autoprefixer 加前缀
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            // 将less文件打包成Js
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // 打包图片成js
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader'
            },
        ]

    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: 'index.html'
        })
    ],

}