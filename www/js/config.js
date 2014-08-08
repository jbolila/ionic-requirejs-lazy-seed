/* global define */

define(function() {
  'use strict';

  return {
    routes: {

      'tab': {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      },

      // Each tab has its own nav history stack:

      'tab.dash': {
        url: '/dash',
        dependencies: ['tabs/controllers/main'],
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      },

      'tab.friends': {
        url: '/friends',
        dependencies: ['tabs/factories/friends', 'tabs/controllers/main'],
        views: {
          'tab-friends': {
            templateUrl: 'templates/tab-friends.html',
            controller: 'FriendsCtrl'
          }

        }
      },

      'tab.friend-detail': {
        url: '/friend/:friendId',
        dependencies: ['tabs/factories/friends', 'tabs/controllers/main'],
        views: {
          'tab-friends': {
            templateUrl: 'templates/friend-detail.html',
            controller: 'FriendDetailCtrl'
          }
        }
      },

      'tab.account': {
        url: '/account',
        dependencies: ['tabs/controllers/main'],
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      }

    },

    // if none of the above states are matched, use this as the fallback
    otherwise: '/tab/dash',

    // END OF ROUTES (STATES)

    // $log.debug enabled?
    debugEnabled: true
  };
});
