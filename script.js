(function() {
var app = angular.module("dndMod", ["ngRoute"])

app.controller("dndCtrl", function($scope) {
});

  app.config(function($routeProvider) {
    $routeProvider.when("/view", {
      templateUrl: "view.html"
    })
    .when("/view1", {
      templateUrl: "view1.html"
    })
    .otherwise( {
      template: "<center><h3>Welcome</h3></center>"
    })
  })


})();
