{ View, $$, $ } = require 'space-pen'
lasso = require 'lasso-js'
page = require 'page'
pages = ['/', 'space', 'je taime', 'mind']
require './lib/helpers'

class App extends View
  @content: (params) ->
    @div class: 'app', =>
      @nav => for url in pages
        @a {href: "/#{ url }"}, url
      @div class: 'page', =>
        @h2 "Page???"

  route: (event, element) ->
    page element.attr 'href'
    event.preventDefault()

  initialize: (on_dom) ->
    page url, @open_page for url in pages
    page dispatch: no

  open_page: (event, yo, loo) ->
    console.log event, yo, loo

$ ->
  $ 'body'
  .html new App()
