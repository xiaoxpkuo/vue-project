let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: "./src/main",
    output: {
        filename: "bundle.js",
        path: path.resolve('./dist') //__dirname+"./dist"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']//use从右往左写
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:'url-loader?limit=8192',//默认转成base64 限制8k以下才转化

            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({ //自动插入到dist目录
            template:"./src/index.html",//使用模板名
            //filename:'example.html'//产出的文件名
        }),
        new VueLoaderPlugin()
    ]
};