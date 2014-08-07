/* global define */

define(['app'], function(app) {
  'use strict';

  // to open on a new window _blank use target-blank (can be used on div or a)
  app.directive('targetBlank', function() {
    return {
      compile: function(element) {
        var elems = (element.prop('tagName') === 'A') ? element : element.find('a');
        elems.attr('target', '_blank');
      }
    };
  });

});
