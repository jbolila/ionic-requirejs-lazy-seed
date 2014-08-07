/* global define */

define(['app', 'tabs/factories/friends'],

  function(app) {
    'use strict';

    console.log('load tabs controllers');

    app.controller('DashCtrl', ['$scope',
      function($scope) {}
    ])

    .controller('FriendsCtrl', ['$scope', '$log', 'Friends',
      function($scope, $log, Friends) {
        $scope.friends = Friends.all();
      }
    ])

    .controller('FriendDetailCtrl', ['$scope', '$log', 'Friends',
      function($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
      }
    ])

    .controller('AccountCtrl', ['$scope',
      function($scope) {}
    ]);

    return app;
  }
);
