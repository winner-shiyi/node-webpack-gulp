var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass',function(){
    gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))//sass压缩后的路径
        .pipe(browserSync.reload({
            stream:true
        }))
});

//热刷新
gulp.task('browserSync',function(){
    browserSync.init({
        server:{
            baseDir:'app'
        }
    })
});

gulp.task('watch',['browserSync','sass'],function(){
    gulp.watch('app/scss/**/*.scss',['sass']);
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 

});
