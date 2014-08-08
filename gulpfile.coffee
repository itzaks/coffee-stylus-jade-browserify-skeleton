gulp = require 'gulp'
coffee = require 'gulp-coffee'
stylus = require 'gulp-stylus'
concat = require 'gulp-concat'
bower = require 'gulp-bower'
browserify = require 'gulp-browserify'
jade = require 'gulp-jade'
{task, watch, serve} = require './gulp-task-watch'

watch 'css',
  'src/css/**/*.styl'
  -> stylus set: ['compress']
  'bin/css'
  '**/*.css'

watch 'js',
  'src/js/**/*.coffee'
  -> coffee()
  'build/js'
  no

watch 'templates',
  'src/**/*.jade'
  -> jade pretty: true
  'bin'
  '**/*.html'

task 'bower',
  -> bower()
  'build/js/lib'

watch 'browserify',
  'build/js/*.js'
  -> browserify()
  -> concat('app.js')
  'bin/js/'
  'app.js'

task 'buildjs', [
  'js'
  'bower'
  'browserify'
]

# Default Task
task 'default', [
  'buildjs'
  'browserify'
  'css'
  'templates'
], ->
  serve 'bin'
