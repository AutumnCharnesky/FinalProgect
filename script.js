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

  $scope.playerInfo = [];

  $scope.save = function(player) {
    console.log(player.name, player.charName, player.race, player.class);

    $scope.playerInfo.unshift( {
      name: player.name,
      character: player.charName,
      race: player.race,
      class: player.class
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

});

})();






// api
// http://www.dnd5eapi.co/api/classes
//
// [1:37]
// http://www.dnd5eapi.co/api/races
