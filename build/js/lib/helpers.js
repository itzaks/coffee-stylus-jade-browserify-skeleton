(function() {
  var $, lasso, page;

  $ = require('space-pen').$;

  lasso = require('lasso-js');

  page = require('page');

  (function() {
    return $(document).on("click", "a[href^='/']", function(event) {
      var $link, href, passThrough, url;
      $link = $(event.currentTarget);
      href = $link.attr('href');
      passThrough = $link.attr("target") === '_blank';
      if (!passThrough && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        event.preventDefault();
        url = href.replace(/^\//, '').replace('\#\!\/', '');
        lasso.broadcast('route', url);
        page(url);
        return false;
      }
    });
  })();

}).call(this);
