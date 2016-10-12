(function () {
'use strict';

var externalModules = angular.module('externalModules', [
  'ui.router'
]);

var dibbla = angular.module('dibbla', [
 'externalModules',
 'item'
]);

dibbla.config(function($stateProvider, $urlRouterProvider){
 $urlRouterProvider.otherwise('/item');

$stateProvider
    .state('create-item', {
        url: '/item',
        templateUrl: 'item/create-item.html',
        controller: 'CreateItemController as vm'
    })
})
})();
