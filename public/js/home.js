var app = angular.module("dndMod");

// cotroller
app.controller("homeCtrl", function($scope, $http, $location, dndFactory) {
console.log(' home ctrl 2 works');

  $scope.playerInfo = dndFactory.retrieve();

  $scope.toggleLi = function(index) {
    $scope.openLi = index;
  };

});

// api posting onto view1
  app.directive('listItem', function() {

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'listItem.html'
    }

  })
