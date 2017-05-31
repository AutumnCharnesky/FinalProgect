var app = angular.module("dndMod");

  app.factory('dndFactory', function() {
    console.log('factory works');

    var playerInfo = [];
    function setInput(player) {
      playerInfo.unshift(player)
      console.log(playerInfo);
    }
    function retrieve() {
      return playerInfo;
    }
    return {
      setInput: setInput,
      retrieve: retrieve
    }

});
