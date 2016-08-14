(function () {
'use strict';
var dibbla = angular.module('dibbla', [
 'ui.router'
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
