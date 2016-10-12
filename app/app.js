(function () {
'use strict';

var externalModules = angular.module('externalModules', [
  'ui.router'
]);

var dibbla = angular.module('dibbla', [
 'externalModules',
]);

dibbla.config(function($stateProvider, $urlRouterProvider){
 $urlRouterProvider.otherwise('/home');

$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })
})
})();
