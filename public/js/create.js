var app = angular.module("dndMod");

// cotroller for create.html
app.controller("createCtrl", function($scope, $http, $location, dndFactory) {

  $scope.classes = {}

// class toggle control
    $scope.toggle = function(index) {
      $scope.show = index;
    };


// end class toggle

// player info to views
  $scope.playerInfo = [];

  $scope.save = function(player) {
    dndFactory.setInput(player);
    console.log(player);

  // $location sends information to new stated path
    $location.path('/home');

  };
// end player info to views

// api calls
  $scope.apiLink = [];

// api d&d classes
  $http( {
    method: 'GET',
    url: 'http://5e-api.com/v1/classes/'
  })
  .then(function successCall(response) {
    console.log(response.data.class_options)
    // objects in classes
    $scope.classes = response.data.class_options;
  },
  function(error) {
    console.log(error);
  });

// random num dice
    $scope.makeRoll = function() {
      var i = Math.floor((Math.random() * 6) + 1);
       $scope.rolled = i;
      console.log($scope.rolled);
    };

    $scope.makeRoll2 = function() {
      var i = Math.floor((Math.random() * 6) + 1);
       $scope.rolled2 = i;
      console.log($scope.rolled2);
    };

    $scope.makeRoll3 = function() {
      var i = Math.floor((Math.random() * 6) + 1);
       $scope.rolled3 = i;
      // using console here for troubleshooting
      console.log($scope.rolled3);
    };
  // random dice end

});
