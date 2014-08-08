/* global define */

define(['app'],

  function(app) {
    'use strict';

    app.controller('DashCtrl', ['$scope',
      function($scope) {
        console.log('DCtrl!');
      }
    ]);

    app.controller('FriendsCtrl', ['$scope', '$log', 'Friends',
      function($scope, $log, Friends) {
        $scope.friends = Friends.all();
      }
    ])

    app.controller('FriendDetailCtrl', ['$scope', '$log', 'Friends',
      function($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
      }
    ])

    app.controller('AccountCtrl', ['$scope',
      function($scope) {}
    ]);

    return app;
  }
);
