var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var source = 'src';
var dist = 'dist/';

gulp.task('build', function() {
    var task = gulp.src(path.join(source, '/**/*.js'))
            // concat into foldername.js
            .pipe(concat('angular-utilities.js'))
            // write to output
            .pipe(gulp.dest(dist))
            // minify
            .pipe(uglify())
            // rename to folder.min.js
            .pipe(rename('angular-utilities.min.js'))
            // write to output again
            .pipe(gulp.dest(dist));


   return task;
});