/* global define */

define(['app'], function(app) {
  'use strict';

  app.directive('autoFocus', function() {
    return {
      restrict: 'AC',
      link: function(_scope, _element) {
        _element[0].focus();
      }
    };
  });

});
