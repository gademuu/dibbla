'use strict';
(function () {

  const externalModules = angular.module('externalModules', [
    'ui.router'
  ]);

  const dibbla = angular.module('dibbla', [
    'externalModules',
    'item',
    'authentication'
  ]);

  dibbla.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('create-item', {
      url: '/create-item',
      templateUrl: 'item/create/create-item.html',
      controller: 'CreateItemController as vm'
    })
    .state('item-list', {
      url: '/item-list',
      templateUrl: 'item/list/item-list.html',
      controller: 'ItemListController as vm',
      params: {user: null}
    })
    .state('view-item', {
      url: '/item:itemId',
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
