"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var server = require("browser-sync").create();
var run = require("run-sequence");
var del = require("del");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("html:copy", function(){
  return gulp.src("*.html")
  .pipe(gulp.dect("build"));
})
gulp.task("html:update", ["html:copy"], function(done){
  server.reload();
  done();
})
gulp.task("serve", function() {
  /*
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });*/
  server.init({
    server: "build/"
  });

  gulp.watch("less/**/*.less", ["style"]);
  /*gulp.watch("*.html").on("change", server.reload);*/
  gulp.watch("*.html", ["html:update"]);
});

gulp.task("symbols", function(){
    return gulp.src("img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("img"));
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
  .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest("img"))
});

gulp.task("copy", function(){
  return gulp.src([
    "fonts/**/*.{woff, woo2}",
    "img/**",
    "js/**",
    "css/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"))
})

gulp.task("clean", function(){
  return del("build")
})

gulp.task("build", function(fn){
  run("style", "images", "symbols", "clean", "copy", fn)
});
