'use strict' // makes the JavaScript you write a little bit better

var gulp = require('gulp')
const Gitdown = require('gitdown');

gulp.task('default', function() {
    console.log('Here is the default task')
})

gulp.task('sometask', function() {
    console.log('Here is some task')
})

gulp.task('someothertask', async function() {
    console.log('Here is some other task')
})

gulp.task('ARA', async function() {
    console.log('Building Application Reference Architecture')
    console.log(__dirname)
})


gulp.task('gitdown', () => {
  return Gitdown
    .readFile('./.README/README.md')
    .writeFile('README.md');
});

gulp.task('watch', () => {
  gulp.watch(['./.README/*'], ['gitdown']);
});
