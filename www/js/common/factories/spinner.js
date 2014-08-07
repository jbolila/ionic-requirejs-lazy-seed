/* global define */

define(['app', 'jquery'], function(app, $) {
  'use strict';

  app.factory('spinHttpInterceptor', function($q) {
    var pending = 0;

    return {
      request: function(config) {
        pending++;
        $('#loading').show();
        return config || $q.when(config);
      },

      response: function(response) {
        pending--;
        if (pending <= 0) {
          $('#loading').hide();
        }
        return response || $q.when(response);
      },

      responseError: function(rejection) {
        pending--;
        if (pending <= 0) {
          $('#loading').hide();
        }
        return $q.reject(rejection);
      }
    };
  });

});
