'use strict';
(function () {
  angular.module('authentication')
    .controller('LoginController',
    ['$state', '$timeout', 'authenticationService', function ($state, $timeout, authenticationService) {
      const vm = this;
      vm.sumbitted = false;

      vm.submitLogin = submitLogin;
      vm.goToRegisterUser = goToRegisterUser;

      function submitLogin(username, password) {
        vm.sumbitted = true;

        let user = authenticationService.getUserByCredentials(username, password);

        if (user) {
          $timeout(function () {
            goToItemList(user);
            console.log(username, ' successfuly logged in.');
          }, 1000);
        }
        else {
          alert('Wrong username or password.');
        }
      }

      function goToItemList(user) {
        console.log(user, 'gick vidare till item list')
        $state.go('item-list', {user: user});
      }

      function goToRegisterUser() {
        $state.go('register-user');
      }
    }]);
})();
