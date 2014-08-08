/* global define requirejs */

define([], function() {
  'use strict';

  return function(dependencies) {
    console.log('Resolve:', dependencies);

    var definition = {
      load: ['$q', '$log', '$rootScope',
        function($q, $log, $rootScope) {
          var deferred = $q.defer();

          $log.debug('Resolve called!', dependencies);

          requirejs(dependencies, function() {
            $rootScope.$apply(function() {

              $log.debug("RESOLVED!", dependencies);
              deferred.resolve();
            });
          });

          return deferred.promise;
        }
      ]
    };

    return definition;
  };

});
