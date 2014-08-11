gulp = require 'gulp'
coffee = require 'gulp-coffee'
stylus = require 'gulp-stylus'
concat = require 'gulp-concat'
bower = require 'gulp-bower'
notify = require 'gulp-notify'
browserify = require 'gulp-browserify'
sourcemaps = require 'gulp-sourcemaps'
jade = require 'gulp-jade'
{task, watch, serve} = require './gulp-task-watch'
{reload} = browsersync = require 'browser-sync'

gulp.task 'templates', ->
  gulp.src('src/**/*.jade')
  .pipe jade pretty: true
  .pipe gulp.dest('bin/')

gulp.task 'scripts', ->
  gulp.src('src/js/**/*.coffee')
  .pipe sourcemaps.init()
  .pipe coffee()
  .pipe gulp.dest('build/js')

gulp.task 'modules', ->
  gulp.src('build/js/*.js')
  .pipe browserify(debug: yes)
  .pipe concat('app.js')
  .pipe sourcemaps.write()
  .pipe gulp.dest('bin/js')
  .pipe notify('Wrote file file: <%= file.relative %>')

gulp.task 'styles', ->
  gulp.src('src/css/**/*.styl')
  .pipe stylus set: ['compress']
  .pipe gulp.dest 'bin/css'
  .pipe reload(stream: yes)

gulp.task 'watch', ->
  gulp.watch('src/js/**/*.coffee', ['scripts'])
  gulp.watch('build/js/**/*.js', ['modules', reload])
  gulp.watch('src/**/*.jade', ['templates', reload])
  gulp.watch('src/css/**/*.styl', ['styles'])

gulp.task 'server', ->
  browsersync
    server: 'bin/'
    notify: true

gulp.task 'default',
  ['server', 'watch', 'scripts', 'modules', 'templates', 'styles']
