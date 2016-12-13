(function() {
    'use strict';

    angular.module('teamApp', ['ngRoute']).config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider){
        $routeProvider
        .when('/players', {
            templateUrl: 'partials/players.html',
            controller: 'PlayerController',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});
    }
})();