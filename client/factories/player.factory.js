(function() {
'use strict';

    angular
        .module('teamApp')
        .factory('PlayerFactory', PlayerFactory);

    PlayerFactory.$inject = ['$http'];
    function PlayerFactory($http) {
        var factory = {};

        factory.GetPlayer = GetPlayer;
        factory.CreatePlayer = CreatePlayer;
        factory.DeletePlayer = DeletePlayer;
        factory.UpdatePlayer = UpdatePlayer;

        return factory;

        function GetPlayer(){
            return $http.get('/players').then(handleSuccess, handleError('Error getting all Players'));
        }
        function CreatePlayer(player){
            return $http.post('/players', player).then(handleSuccess, handleError('Error creating Player'));
        }
        function DeletePlayer(id){
            return $http.delete('/players' + id).then(handleSuccess, handleError('Error deleting Palyer'));
        }
        function UpdatePlayer(player){
            return $http.put('/players/' + player.id, player).then(handleSuccess, handleError('Error updating player'));
        }

        function handleSuccess(res){
            return res.data;
        }
        function handleError(error){
            return function (){
                return { success: false, mesage: error};
            };
        }
    }
})();