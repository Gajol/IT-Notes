Gulp.js
- TypeScript, PNG, Markdown, JavaScript, WebP (smaller images), HTML

Grunt.js : task runner

GruntJS uses configuration objects to define tasks declaratively, Gulp defines them as JavaScript functions.


# Learning Gulp
- [[Baumgartner, Stefan. Front-End Tooling with Gulp, Bower, and Yeoman. Shelter Island, NY: Manning, 2017.](http://www.worldcat.org/isbn/978-1-61729-274-3)]
  - source code : http://github.com/frontend-tooling/sample-project-gulp
  - build : Gulp
  - dependency manager : Bower
  - Scaffolding : Yeoman

- Gulp for build; tasks, piping source files to destinations, watching files (*.js, *.css) and moving to a distribute folder.   Glob double-asterisks to include sub-directories.
  - [browsersync.io](https://browsersync.io/) : watches served files and via a websocket to the browser refreshes the page (no page refresh required)
- Bower for dependency management: Designed for front-end developers.  Enforces a single-version of a library at a time, and is more flexible with versions (adopting backwards compatibility nature of the web).  NPM is not as convenient/flexible as Bower for front-end developers.   Bower uses flat-dependency trees, which is how it enforces a single-version of a dependency/library.

- NPM and Yarn for front-end developers.
