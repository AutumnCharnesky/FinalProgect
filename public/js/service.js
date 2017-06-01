var app = angular.module("dndMod");

// creating factory and returning the playerInfo from create.js to home.js
  app.factory('dndFactory', function() {

// making a variable called playerInfo and adding the player information (player.name, player.charName...) to the begining of said array
    var playerInfo = [];
    function setInput(player) {
      playerInfo.unshift(player)
      console.log(playerInfo);
    }
    // playerInfo added into retrieve function
    function retrieve() {
      return playerInfo;
    }
    return {
      setInput: setInput,
      retrieve: retrieve
    }

});
