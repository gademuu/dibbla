(function() {
'use strict'

  angular
    .module('user', [])
    .controller('UserController', UserController)

  UserController.$inject = ['$state', '$stateParams', '$sessionStorage']

  function UserController($state, $stateParams, $sessionStorage) {
    var vm = this
    vm.user = $stateParams.user
    vm.myItems = $sessionStorage.myItems
    vm.goToItem = goToItem
    console.log('my items ', vm.myItems);
    

    function goToItem(item) {
      $state.go('view-item', {item: item})
    }


  }
})()  