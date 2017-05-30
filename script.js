(function() {
var app = angular.module("dndMod", ["ngRoute", "ui.bootstrap"])

app.config(function($routeProvider) {
  $routeProvider.when("/view", {
    templateUrl: "view.html"
  })
  .when("/view1", {
    templateUrl: "view1.html"
  })
  // .when("/save", {
  //   templateUrl: "view.html"
  // })
  .otherwise( {
    template: "<center><h3>Welcome</h3><br><h5>Build your own Dungeons & Dragons character or view characters already created with the above links.</5></center>"
  })
})

app.controller("dndCtrl", function($scope, $http) {
console.log('ctrl works');

    $scope.toggle = function () {
      $scope.show = !$scope.show;
    };

    $scope.toggle1 = function () {
      $scope.show1 = !$scope.show1;
    };

    $scope.toggle2 = function () {
      $scope.show2 = !$scope.show2;
    };

    $scope.toggle3 = function () {
      $scope.show3 = !$scope3.show;
    };

    $scope.toggle4 = function () {
      $scope.show4 = !$scope.show4;
    };

    $scope.toggle5 = function () {
      $scope.show5 = !$scope.show5;
    };

    $scope.toggle6 = function () {
      $scope.show6 = !$scope.show6;
    };

    $scope.toggle7 = function () {
      $scope.show7 = !$scope.show7;
    };

    $scope.toggle8 = function () {
      $scope.show8 = !$scope.show8;
    };

    $scope.toggle9 = function () {
      $scope.show9 = !$scope.show9;
    };

    $scope.toggle10 = function () {
      $scope.show10 = !$scope.show10;
    };

    $scope.toggle11 = function () {
      $scope.show11 = !$scope.show11;
    };



  $scope.playerInfo = [];

  $scope.save = function(player) {
    console.log(player.name, player.charName, player.race, player.class, $scope.rolled);

    $scope.playerInfo.unshift( {
      name: player.name,
      character: player.charName,
      race: player.race,
      class: player.class
    //  roll: player.rolled
    });
    console.log($scope.playerInfo);

  };

  $scope.apiLink = [];

  // $http( {
  //   method: 'GET',
  //   url: 'http://www.dnd5eapi.co/api/races'
  // })
  // .then(function successCall(response) {
  //   console.log(response.data)
  // });

  $http( {
    method: 'GET',
    url: 'http://5e-api.com/v1/classes/'
  })
  .then(function successCall(response) {
    console.log(response.data.class_options)
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
  },
  function(error) {
    console.log(error);
  });

  app.directive('apiPost', function() {

    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'view1.html'
    }

  })

    $scope.makeRoll = function() {
      var i = Math.floor(Math.random() * (6-1) + 1);
      console.log(i);
      $scope.rolled = i;
      console.log($scope.rolled);
      $scope.playerInfo.unshift( {
        roll: $scope.rolled
      });
    };

});

})();






// api
// http://www.dnd5eapi.co/api/classes
//
// [1:37]
// http://www.dnd5eapi.co/api/races
