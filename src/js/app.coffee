{ View, $$, $ } = require 'space-pen'
lasso = require 'lasso-js'
Page = require './page'
page = require 'page'
pages = ['/', 'space', 'je taime', 'mind']
require './lib/helpers'

class App extends View
  @content: (params) ->
    @div class: 'app', =>
      @nav => for url in pages
        @a href: "/#{ url }", url
      @div {class: 'page', outlet: 'page_container'}, =>
        @h2 "Pagess"

  route: (event, element) ->
    page element.attr 'href'
    event.preventDefault()

  initialize: (on_dom) ->
    page url, @open_page for url in pages
    page dispatch: no
    console.log 'entering spaceshipzxxx ey mada faks yookoko'

  open_page: (context) =>
    @page_container.html new Page(title: context.pathname)

$ ->
  $ 'body'
  .html new App()
