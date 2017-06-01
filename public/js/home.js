var app = angular.module("dndMod");

// cotroller for home.html
app.controller("homeCtrl", function($scope, $http, $location, dndFactory) {

// collecting info from retrieve and setting it equal to the factory variable named playerInfo
  $scope.playerInfo = dndFactory.retrieve();

  $scope.toggleLi = function(index) {
    $scope.openLi = index;
  };

});

// taking information from listItem.html and making it a directive called on home.html
  app.directive('listItem', function() {

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'listItem.html'
    }
  })
