(function() {
'use strict';

    angular
        .module('teamApp')
        .controller('PlayerController', PlayerController);

    PlayerController.$inject = [];
    function PlayerController(PlayerFactory) {
        var vm = this;
        var players = [];

        PlayerFactory.getPlayer
    }
})();