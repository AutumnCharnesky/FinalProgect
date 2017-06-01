var app = angular.module("dndMod");

// cotroller for create.html
app.controller("createCtrl", function($scope, $http, $location, dndFactory) {

  // api call in a json package
  // code starts on line 15 and 98
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

  $scope.classes = {}

// toggles class list to open on click
// code starts on line 15
    $scope.toggle = function(index) {
      $scope.show = index;
    };
// end class toggle

// random number generator to make three d6 die
// code starts on line 26
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

  // player info to into array to console log
  // code takes information/input from lines 84-130 on save click from line 145
    $scope.playerInfo = [];

    $scope.save = function(player) {
      dndFactory.setInput(player);
      console.log(player);

    // $location sends information to new stated path
    // brings to home page on save click
      $location.path('/home');

    };

});
