(function() {
  var $, $$, App, View, lasso, page, pages, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ref = require('space-pen'), View = _ref.View, $$ = _ref.$$, $ = _ref.$;

  lasso = require('lasso-js');

  page = require('page');

  pages = ['/', 'space', 'je taime', 'mind'];

  require('./lib/helpers');

  App = (function(_super) {
    __extends(App, _super);

    function App() {
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
            "class": 'page'
          }, function() {
            return _this.h2("Page???");
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
      return page({
        dispatch: false
      });
    };

    App.prototype.open_page = function(event, yo, loo) {
      return console.log(event, yo, loo);
    };

    return App;

  })(View);

  $(function() {
    return $('body').html(new App());
  });

}).call(this);
