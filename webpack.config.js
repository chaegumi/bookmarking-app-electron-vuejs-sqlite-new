const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: './app/main.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'app')
        }
    },
    module: {
        rules: [
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]
}