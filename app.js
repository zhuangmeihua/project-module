/**
 * Created by Administrator on 2016/12/7.
 */
//引入 path 内置模块
var path = require("path");
//引入 express依赖模块，用来启动静态服务器
var express = require("express");
//引入转发请求插件
var proxy = require('http-proxy-middleware');

//定义通过 /api 访问的请求，转发到指定路径   //跨域
// app.use('/api',proxy({ //做代理，不是直接跨域
//     target:'http://122.10.30.153:9901',
//     pathRewrite:{
//         '^/api':'/'
//     }
// }));
// http://122.0.0.1:9888/api/index
//替换为 http://122.10.30.153:9901/index

//实例 express
var app =express();

console.log(__dirname);
console.log(__filename);
//拼接物理路径，用来指定虚拟路径的访问（静态页面文件）
var viewsPath = path.join(__dirname,"views");
console.log(viewsPath);
//指定访问 页面 的路径
app.use("/",express.static(viewsPath));

//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publicPath = path.join(__dirname,"public");
console.log(publicPath);
//指定访问 静态资源文件 的路径
app.use("/public",express.static(publicPath));

//监听端口9999，用来启动服务器
app.listen(16949,function () {
    console.log("server run at port 16949")
});

//模块导出
module.exports = app;
