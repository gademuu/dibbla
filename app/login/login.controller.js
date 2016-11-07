'use strict';
(function(){
angular.module('authentication')
  .controller('LoginController',
  ['$state', '$timeout', 'authenticationService', function($state, $timeout, authenticationService){
    const vm = this;
    vm.sumbitted = false;

    vm.submitLogin = submitLogin;
    vm.goToItemList = goToItemList;
    vm.goToRegisterUser = goToRegisterUser;

    //HERMAN FORTSÄTT HÄR....
    function submitLogin(name, pasword) {
      var user = {
        name: name,
        password: password
      }
      vm.sumbitted = true;
      var gettingLoggedIn = authenticationService.getUserByCredentials(user);
      console.log(gettingLoggedIn);
      // if (gettingLoggedIn){
      // $timeout( function(){ 
      //   goToItemList(); 
      //   console.log(username, ' successfuly logged in.');
      // }, 3000);
      // }
      // else{
      //   console.log('Wrong username or password.');
      // }
    }

    function goToItemList() {
      $state.go('item-list');
    }

    function goToRegisterUser() {
      $state.go('register-user');
    }
  }]);
})();
