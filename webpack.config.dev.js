const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = require('./config').devPort;

module.exports = {
    mode: 'development',
    entry: [
        'babel-polyfill',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devServer: {
        contentBase: 'app/ui/www',
        devtool: 'eval',
        hot: true,
        inline: true,
        port: port,
        // outputPath: buildPath,
        historyApiFallback: true,
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    }
};