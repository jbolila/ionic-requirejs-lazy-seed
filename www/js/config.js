/* global define */

define(['common/services/dependencyResolverFor'],
  function(dependencyResolverFor) {
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
          views: {
            'tab-dash': {
              resolve: dependencyResolverFor(['tabs/controllers/main']),
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl'
            }
          }
        },

        'tab.friends': {
          url: '/friends',
          views: {
            'tab-friends': {
              resolve: dependencyResolverFor(['tabs/factories/friends', 'tabs/controllers/main']),
              templateUrl: 'templates/tab-friends.html',
              controller: 'FriendsCtrl'
            }

          }
        },

        'tab.friend-detail': {
          url: '/friend/:friendId',
          views: {
            'tab-friends': {
              resolve: dependencyResolverFor(['tabs/factories/friends', 'tabs/controllers/main']),
              templateUrl: 'templates/friend-detail.html',
              controller: 'FriendDetailCtrl'
            }
          }
        },

        'tab.account': {
          url: '/account',
          views: {
            'tab-account': {
              resolve: dependencyResolverFor(['tabs/controllers/main']),
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
  }
);
