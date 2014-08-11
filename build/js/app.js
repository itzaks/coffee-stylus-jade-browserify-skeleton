(function() {
  var $, $$, App, Page, View, lasso, page, pages, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ref = require('space-pen'), View = _ref.View, $$ = _ref.$$, $ = _ref.$;

  lasso = require('lasso-js');

  Page = require('./page');

  page = require('page');

  pages = ['/', 'space', 'je taime', 'mind'];

  require('./lib/helpers');

  App = (function(_super) {
    __extends(App, _super);

    function App() {
      this.open_page = __bind(this.open_page, this);
      return App.__super__.constructor.apply(this, arguments);
    }

    App.content = function(params) {
      return this.div({
        "class": 'app'
      }, (function(_this) {
        return function() {
          _this.nav(function() {
            var url, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = pages.length; _i < _len; _i++) {
              url = pages[_i];
              _results.push(_this.a({
                href: "/" + url
              }, url));
            }
            return _results;
          });
          return _this.div({
            "class": 'page',
            outlet: 'page_container'
          }, function() {
            return _this.h2("Pagess");
          });
        };
      })(this));
    };

    App.prototype.route = function(event, element) {
      page(element.attr('href'));
      return event.preventDefault();
    };

    App.prototype.initialize = function(on_dom) {
      var url, _i, _len;
      for (_i = 0, _len = pages.length; _i < _len; _i++) {
        url = pages[_i];
        page(url, this.open_page);
      }
      page({
        dispatch: false
      });
      return console.log('entering spaceshipzxxx ey mada faks yookoko');
    };

    App.prototype.open_page = function(context) {
      return this.page_container.html(new Page({
        title: context.pathname
      }));
    };

    return App;

  })(View);

  $(function() {
    return $('body').html(new App());
  });

}).call(this);
