/**
 * Created by Administrator on 2016/12/8.
 */
//首先引入 gulp 模块
var gulp = require("gulp");
//引入 gulp-stylus 插件
var stylus = require("gulp-stylus");
//引入 压缩css 插件
var minifycss = require("gulp-minify-css");
//引入压缩 js 插件
var uglify = require("gulp-uglify");

var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var nodemon = require("gulp-nodemon");

//install gulp-nodemon --save-dev

gulp.task("nodemon",function (ab) {
    var ft = false;
    return nodemon({
        script: './sever.js'
    }).on('start',function () {
        if(!ft){
            ab();
            ft = true;
        }
    })
});

gulp.task('browserSync',['nodemon'],function () {
    browserSync.init({
        proxy:{
            target:'http://127.0.0.1:16949'
        },
        files:["*"],
        port:9888,
        open:false
    })
});


//创建一个编译 stylus 的任务
gulp.task("stylus",function () {
    //获取要编译的文件
    //指定一个文件
    // gulp.src("./stylus/index.styl")
    //指定多个文件
    //gulp.src(["./stylus/index.styl","./stylus/css.styl"])
    //指定一个目录下所有（不包含子目录）
    //gulp.src("./stylus/*.styl")
    //指定一个目录及所有子目录下的文件，两个*，子目录下的子目录
   return gulp.src("./stylus/**/*.styl")
        //执行 stylus 编译
        .pipe(stylus())
        //输出编译后的文件
        .pipe(gulp.dest("./public/css"))
});
// 不要写成.pipe(gulp.dest("./public/**/*.css"))

//创建一个 logs 任务
gulp.task("logs",function () {
    console.log("this is logs")
});
gulp.task("es6",function () {
    console.log("this is es6")
});

gulp.task("minifycss",["stylus"],function () {
    return gulp.src("./public/css/**/*.css")
            .pipe(minifycss())
            .pipe(gulp.dest("./public/mincss"))
});

gulp.task("uglify",["stylus"],function () {
    return gulp.src("./public/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./public/minjs"))
});

gulp.task("watcher",["browserSync","stylus","uglify"],function () {
     gulp.watch("./stylus/**/*.styl",["stylus"]);
     gulp.watch("./public/js/**/*.js",["uglify"]);

     //编译后的
     gulp.watch(['./public/css/**/*.css','./public/minijs/**/*.js']).on('change',function () {
         reload();
     })
});

//先执行es6,执行完后再执行minijs
gulp.task("minijs",["es6"],function () {
    console.log("this is minijs")
});

//创建一个执行其他任务的 任务
gulp.task("all",["es6"],function () {
    console.log("this is all")
});



//创建一个 default 任务
gulp.task("default",function () {
    console.log("this default")
});