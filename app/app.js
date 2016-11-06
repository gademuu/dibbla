(function () {
  'use strict';

  var externalModules = angular.module('externalModules', [
    'ui.router'
  ]);

  var dibbla = angular.module('dibbla', [
    'externalModules',
    'user',
    'item',
    'authentication'
  ]);

  dibbla.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/create-item');

    $stateProvider
    .state('create-item', {
      url: '/create-item',
      templateUrl: 'item/create/create-item.html',
      controller: 'CreateItemController as vm'
    })
    .state('item-list', {
      url: '/item-list',
      templateUrl: 'item/list/item-list.html',
      controller: 'ItemListController as vm'
    })
    .state('view-item', {
      url: '/item',
      templateUrl: 'item/view/view-item.html',
      controller: 'ViewItemController as vm',
      params: {item: null}
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'LoginController as vm'
    })
    .state('register-user', {
      url: '/registerUser',
      templateUrl: 'authentication/register/register-user.html',
      controller: 'RegisterController as vm' 
    })
  })
})();
