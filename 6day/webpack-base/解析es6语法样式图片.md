##安装babel

`npm install babel-core --save-dev`
`npm install babel-loader --save-dev`

##babel-preset-es2015
`npm install babel-preset-es2015 --save-dev`

##解析css 
- css-loader 将css转成模块 再将内容插入到style标签内
`npm install css-loader style-loader --save-dev`

##解析图片
-
`npm install file-loader url-loader --save-dev`

##不需要自己在html中引用js文件，自动在src的html文件中插入js
`npm install html-webpack-plugin --save-dev`


##webpack开发服务器
-这里面内置了服务，可以帮我们启动一个端口号，当代码更新时，可以自动打包（内存中，不是实体文件，读写实体文件 消耗性能）
`npm install webpack-dev-server --save-dev`
