(function() {
  var $, $$, App, Menu, Page, View, lasso, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ref = require('space-pen'), View = _ref.View, $$ = _ref.$$, $ = _ref.$;

  lasso = require('lasso-js');

  Page = require('./page');

  Menu = require('./menu');

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
          _this.subview('menu', new Menu());
          return _this.div({
            "class": 'page',
            outlet: 'page_container'
          }, function() {
            return _this.h2("Page container");
          });
        };
      })(this));
    };

    App.prototype.initialize = function(on_dom) {
      var page, url, _i, _len, _ref1;
      page = require('page');
      _ref1 = require('./lib/pages');
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        url = _ref1[_i];
        page(url, this.open_page);
      }
      return page({
        dispatch: false
      });
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
