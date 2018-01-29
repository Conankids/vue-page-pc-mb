const htmlWebpackPlugin = require('html-webpack-plugin'); //commonjs语法引用插件

const ExtractTextPlugin = require("extract-text-webpack-plugin");//单独打包css

const webpack = require('webpack');

const path = require('path'); //获取路径

module.exports = {
    context: __dirname,
    entry: './js/index.js', //入口文件路径
    // 输出文件的路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        filename: 'static/js/[name].[hash].js'
    },
    // 引用的loader
    module: {
        // loader是从右往左即从下往上执行的
        loaders: [
            {
                test: /\.js$/, //js正则
                loader: 'babel-loader',  //使用的loader，可以把es6转为es5的语法
                include: path.resolve(__dirname, 'src'),  //loader的使用的范围
                exclude: path.resolve(__dirname, 'node_modules'),  //loader不使用的范围
                options: {
                    presets: ['env']  //loader的配置
                }
            },
            {
                test: /\.css$/,  //css正则
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../../',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('postcss-import')(), require('autoprefixer')()] //处理import进来css的文件；增加浏览器兼容属性
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/,  //处理html文件
                loader: 'html-loader'
            },
            {
                test: /\.(jpg|png|svg|gif)$/i,  //处理图片文件
                use: [
                    // loader: 'file-loader' 打包文件
                    {
                        loader: 'url-loader',  //把图片文件转换成base64嵌入页面中
                        options: {
                            limit: 10000,  //配置大小大于10k的图片不转换
                            name: 'static/images/[name]-[hash:5].[ext]', //配置打包后的文件名称(file-loader使用)
                        }
                    },
                    {
                        loader: 'image-webpack-loader',  //图片打包loader
                    }
                ]
            }
        ]

    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join('/', 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: 'localhost',
        port: 8888,
        open: false,
        publicPath: '/',
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: false,
        }
    },
    plugins: [
        //html打包插件(生成index)
        new htmlWebpackPlugin({
            filename: 'index.html',  //输出html文件的名字
            template: 'index.html',  //使用的模板文件
            inject: true,           //js插入文件的位置
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new ExtractTextPlugin({
            filename: 'static/css/[name].[hash].css'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            parallel: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
