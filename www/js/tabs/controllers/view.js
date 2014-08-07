/* global define */

define(['app', 'homepage/factories/model', 'common/filters/fenced'],

  function(app) {
    'use strict';

    app.controller('ViewCtrl', function($scope, superModel) {
      $scope.superModel = superModel;
    });

    return app;
  }

);
