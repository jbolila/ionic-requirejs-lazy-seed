/* global define angular */

define(['config'],
  function(config) {
    'use strict';


    var app = angular.module('app', [
      'ngAnimate',
      'ngSanitize',
      'ui.router'
    ]);

    app.config([
      '$controllerProvider',
      '$compileProvider',
      '$filterProvider',
      '$provide',
      '$locationProvider',
      '$stateProvider',
      '$urlRouterProvider',
      '$logProvider',

      function($controllerProvider, $compileProvider, $filterProvider, $provide,
        $locationProvider, $stateProvider, $urlRouterProvider, $logProvider) {

        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;

        if (config.routes !== undefined) {
          angular.forEach(config.routes, function(options, state) {
            console.log("define state " + state);
            if (options.abstract) {
              $stateProvider.state(state, {
                url: options.url,
                abstract: true,
                templateUrl: options.templateUrl
              });
            } else {
              $stateProvider.state(state, {
                url: options.url,
                views: options.views
              });
            }
          });
        }

        if (config.otherwise !== undefined) {
          $urlRouterProvider.otherwise(config.otherwise);
        }

        // Configuration of global behavior:

        // $httpProvider.defaults.useXDomain = true;
        // $httpProvider.defaults.cache = config.globalCache;
        // $httpProvider.defaults.headers.common['X-Requested-With'] = undefined;
        // $httpProvider.defaults.cache = $cacheFactory('localCache', {
        //   capacity: 20
        // });

        // $httpProvider.interceptors.push('spinHttpInterceptor');
        // $httpProvider.interceptors.push('authInterceptor');

        $logProvider.debugEnabled(config.debugEnabled);
      }
    ]);

    return app;
  }
);
