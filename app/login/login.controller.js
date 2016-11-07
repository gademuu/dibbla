'use strict';
(function(){
angular.module('user', [])
  .controller('LoginController',
  ['$state', '$timeout', function($state, $timeout){
    const vm = this;
    vm.sumbitted = false;

    vm.submitLogin = submitLogin;
    vm.goToItemList = goToItemList;
    vm.goToRegisterUser = goToRegisterUser;

    function submitLogin() {
      vm.sumbitted = true;
      $timeout( function(){ goToItemList(); }, 1000);
      console.log('hejx');
    }

    function goToItemList() {
      $state.go('item-list');
    }

    function goToRegisterUser() {
      $state.go('register-user');
    }
  }]);
})();
