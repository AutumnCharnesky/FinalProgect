var app = angular.module("dndMod", ["ngRoute", "ui.bootstrap"])

// routes to home or create view, sends to a welcome page on open
app.config(function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "home.html",
    controller: "homeCtrl"
  })
  .when("/create", {
    templateUrl: "create.html",
    controller: "createCtrl"
  })
  .otherwise( {
    template: "<center id='otherwise'><h3>Welcome</h3><br><h5>Build your own Dungeons & Dragons character or view characters already created with the above links.</h3></center>"
  })
})




// api links just in case
//
// http://5e-api.com/v1/classes/
// http://5e-api.com/v1/races/
