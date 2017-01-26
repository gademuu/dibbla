'use strict';
(function () {
  angular.module('authentication')
    .controller('LoginController',
    ['$state', '$timeout', '$sessionStorage', 'authenticationService', function ($state, $timeout, $sessionStorage, authenticationService) {
      const vm = this
      $sessionStorage.$reset()
      vm.user = {}
      vm.sumbitted = false
      vm.loginUser = loginUser
      vm.goToRegisterUser = goToRegisterUser

      function loginUser () {
        vm.sumbitted = true

        authenticationService.loginUser(vm.user)
          .then(function (response) {
            console.log('Login: ', response.status)
            console.log('Login: ', response.data)
            $sessionStorage.user = response.data[0]
            $sessionStorage.myItems = response.data[1]
            goToItemList()
        }, function (response) {
          console.log('Failed to login: ', response.status)
        })
      }

      function goToItemList () {
        $state.go('item-list')
      }

      function goToRegisterUser () {
        $state.go('register-user')
      }
    }])
})()
