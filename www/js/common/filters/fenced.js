/* global define */

define(['app'], function(app) {
  'use strict';

  app.filter('fenced', function() {
    return function (input) {
      return '[' + input.toUpperCase() + ']';
    };
  });

});
