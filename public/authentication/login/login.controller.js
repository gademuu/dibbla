'use strict';
(function () {
  angular.module('authentication')
    .controller('LoginController',
    ['$state', '$timeout', '$sessionStorage', 'authenticationService', function ($state, $timeout, $sessionStorage, authenticationService) {
      const vm = this
      $sessionStorage.$reset()
      vm.sumbitted = false

      vm.submitLogin = submitLogin
      vm.goToRegisterUser = goToRegisterUser

      function submitLogin(username, password) {
        vm.sumbitted = true

        let user = authenticationService.getUserByCredentials(username, password)
        $sessionStorage.user = user

        if (user) {
          $timeout(function () {
            goToItemList()
          }, 1000)
        }
        else {
          alert('Wrong username or password.')
        }
      }

      function goToItemList() {
        $state.go('item-list')
      }

      function goToRegisterUser() {
        $state.go('register-user')
      }
    }])
})()
