var app = angular.module("dndMod");

// cotroller
app.controller("createCtrl", function($scope, $http, $location, dndFactory) {
console.log('ctrl 2 works');


  $scope.classes = {}

// class toggle control
    $scope.toggle = function(index) {
      $scope.show = index;
    };

    $scope.toggleLi = function(index) {
      $scope.openLi = index;
    };
// end class toggle

// player info to views
  $scope.playerInfo = [];

  $scope.save = function(player) {
    dndFactory.setInput(player);
    console.log(player);
    // console.log(player.name, player.charName, player.race, player.class, player.strength, player.dex, player.con, player.intel, player.wisdom, player.charisma);
    //
    // $scope.playerInfo.unshift( {
    //   name: player.name,
    //   character: player.charName,
    //   race: player.race,
    //   class: player.class,
    //   strength: player.strength,
    //   dex: player.dex,
    //   con: player.con,
    //   intel: player.intel,
    //   wisdom: player.wisdom,
    //   charisma: player.charisma
    // });
    // console.log($scope.playerInfo);

    $location.path('/home');

  };
// end player info to views

// api calls
  $scope.apiLink = [];

// // api d&d races
//   $http( {
//     method: 'GET',
//     url: 'http://5e-api.com/v1/races/'
//   })
//   .then(function successCall(response) {
//     console.log(response.data)
//
//   });

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
      var i = Math.floor(Math.random() * (6-1) + 1);
      console.log(i);
      $scope.rolled = i;
      console.log($scope.rolled);

    };

    $scope.makeRoll2 = function() {
      var i = Math.floor(Math.random() * (6-1) + 1);
      console.log(i);
      $scope.rolled2 = i;
      console.log($scope.rolled2);

    };

    $scope.makeRoll3 = function() {
      var i = Math.floor(Math.random() * (6-1) + 1);
      console.log(i);
      $scope.rolled3 = i;
      console.log($scope.rolled3);

    };
  // reandom dice end

});
