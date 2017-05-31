(function() {
var app = angular.module("dndMod", ["ngRoute", "ui.bootstrap"])

// view route
app.config(function($routeProvider) {
  $routeProvider.when("/view", {
    templateUrl: "view.html"
  })
  .when("/view1", {
    templateUrl: "view1.html"
  })
  .otherwise( {
    template: "<center><h3>Welcome</h3><br><h5>Build your own Dungeons & Dragons character or view characters already created with the above links.</h3></center>"
  })
})

// cotroller
app.controller("dndCtrl", function($scope, $http, $location) {
console.log('ctrl works');

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
    console.log(player.name, player.charName, player.race, player.class, player.strength, player.dex, player.con, player.intel, player.wisdom, player.charisma);

    $scope.playerInfo.unshift( {
      name: player.name,
      character: player.charName,
      race: player.race,
      class: player.class,
      strength: player.strength,
      dex: player.dex,
      con: player.con,
      intel: player.intel,
      wisdom: player.wisdom,
      charisma: player.charisma
    });
    console.log($scope.playerInfo);

    $location.path('/view');

  };
// end player info to views

// api calls
  $scope.apiLink = [];

// api d&d races
  $http( {
    method: 'GET',
    url: 'http://5e-api.com/v1/races/'
  })
  .then(function successCall(response) {
    console.log(response.data)

  });

// api d&d classes
  $http( {
    method: 'GET',
    url: 'http://5e-api.com/v1/classes/'
  })
  .then(function successCall(response) {
    console.log(response.data.class_options)
    // objects in classes
    $scope.posts1 = response.data.class_options.barbarian.short_description;
    $scope.posts2 = response.data.class_options.bard.short_description;
    $scope.posts3 = response.data.class_options.cleric.short_description;
    $scope.posts4 = response.data.class_options.druid.short_description;
    $scope.posts5 = response.data.class_options.fighter.short_description;
    $scope.posts6 = response.data.class_options.monk.short_description;
    $scope.posts7 = response.data.class_options.paladin.short_description;
    $scope.posts8 = response.data.class_options.ranger.short_description;
    $scope.posts9 = response.data.class_options.rogue.short_description;
    $scope.posts10 = response.data.class_options.sorcerer.short_description;
    $scope.posts11= response.data.class_options.warlock.short_description;
    $scope.posts12 = response.data.class_options.wizard.short_description;
    $scope.classes = response.data.class_options;
  },
  function(error) {
    console.log(error);
  });

// api posting onto view1
  app.directive('apiPost', function() {

    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'view1.html'
    }

  })
// api call end

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

})();




// apiiiiissss
//
// http://5e-api.com/v1/classes/
// http://5e-api.com/v1/races/
