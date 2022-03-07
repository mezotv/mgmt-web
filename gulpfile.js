const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStylesMain() {
  return src('scss/*.scss').pipe(sass()).pipe(dest('styles'));
}

function watchTask() {
  watch(['scss/*.scss'], buildStylesMain);
  watch(['scss/components/*.scss'], buildStylesMain);
  watch(['scss/utils/*.scss'], buildStylesMain);
}

exports.default = series(buildStylesMain, watchTask);
