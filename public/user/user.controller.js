(function() {
'use strict'

  angular
    .module('user', [])
    .controller('UserController', UserController)

  UserController.$inject = ['$state', '$stateParams']

  function UserController($state, $stateParams) {
    var vm = this
    vm.user = $stateParams.user
    vm.goToItem = goToItem

    function goToItem(item) {
      $state.go('view-item', {item: item})
    }


  }
})()  