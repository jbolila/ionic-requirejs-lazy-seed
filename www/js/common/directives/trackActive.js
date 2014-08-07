/* global define */

define(['app', 'angular'], function(app, angular) {
  'use strict';

  app.directive('trackActive', function($location) {

    function link(scope, element) {
      scope.$watch(function() {
        return $location.path();
      }, function() {
        var links = element.find('a'),
          loc = $location.path();
        // El is valid in the context of config!
        if (loc.indexOf('/el/') === 0) {
          loc = '/';
        }
        links.removeClass('active');
        links.parent('li').removeClass('active');
        angular.forEach(links, function(value) {
          var a = angular.element(value);
          if (a.attr('href') === '#' + loc) {
            a.parent('li').addClass('active');
            a.addClass('active');
          }
        });
      });
    }

    return {
      link: link
    };
  });
});
