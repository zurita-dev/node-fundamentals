const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
  console.log('Construyendo el sitio');
  setTimeout(cb, 1000);
});

gulp.task('serve', function (cb) {
  gulp.src('WWW').pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

gulp.task('default', gulp.series('build', 'serve'));
