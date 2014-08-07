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
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl',
              resolve: dependencyResolverFor(['tabs/controllers/main'])
            }
          }
        },

        'tab.friends': {
          url: '/friends',
          views: {
            'tab-friends': {
              templateUrl: 'templates/tab-friends.html',
              controller: 'FriendsCtrl',
              resolve: dependencyResolverFor(['tabs/factories/friends', 'tabs/controllers/main'])
            }

          }
        },

        'tab.friend-detail': {
          url: '/friend/:friendId',
          views: {
            'tab-friends': {
              templateUrl: 'templates/friend-detail.html',
              controller: 'FriendDetailCtrl',
              resolve: dependencyResolverFor(['tabs/factories/friends', 'tabs/controllers/main'])
            }
          }
        },

        'tab.account': {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl',
              resolve: dependencyResolverFor(['tabs/controllers/main'])
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
