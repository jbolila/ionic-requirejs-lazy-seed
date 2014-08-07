/* global window, requirejs */

(function(document) {
  'use strict';

  requirejs.config({
    baseUrl: '/js',
    paths: {
      'cordova': '../cordova',
      'angular': '../lib/angular/angular',
      'uiRouter': '../lib/angular-ui-router/release/angular-ui-router',
      'angularSanitize': '../lib/angular-sanitize/angular-sanitize',
      'angularAnimate': '../lib/angular-animate/angular-animate',
      'ionic': '../lib/ionic/js/ionic',
      'ionicAngular': '../lib/ionic/js/ionic-angular'
    },
    shim: {
      'angular': {
        exports: 'angular'
      },
      'uiRouter': {
        deps: ['angular']
      },
      'angularSanitize': {
        deps: ['angular']
      },
      'angularAnimate': {
        deps: ['angular']
      },
      'ionic': {
        exports: 'ionic'
      },
      'ionicAngular': {
        deps: ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize']
      },
      // 'angularMocks': {
      //   deps: ['angular'],
      //   exports: 'angular.mock'
      // },
      'app': {
        deps: [
          'angular', 'uiRouter', 'angularSanitize', 'angularAnimate',
          'ionic', 'ionicAngular'
        ]
      }
    },
    priority: [
      'app'
    ]
  });

  // Angular starts here!
  requirejs(['angular', 'ionic', 'app', 'cordova'],
    function(angular, ionic, app, cordova) {
      function start() {
        angular.bootstrap(document, [app.name]);

        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          window.StatusBar.styleDefault();
        }
      }

      document.addEventListener('devicceready', start, false);

      if (typeof cordova === 'undefined') {
        angular.element(document.getElementsByTagName('html')[0]).ready(function() {
          try {
            start();
          } catch (e) {
            console.error(e.stack || e.message || e);
          }
        });
      }

    });

}(window.document));
