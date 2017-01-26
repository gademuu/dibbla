(function(){
'use strict';
  
angular.module('item')
  .controller('ItemListController',
  ['$state',  '$sessionStorage','itemService', function($state, $sessionStorage, itemService){
    
    const vm = this
    const user = $sessionStorage.user
    
    vm.goToItem = goToItem
    vm.goToCreateItem = goToCreateItem
    
    vm.items = []

    itemService.getItems().then(function (response) {
      vm.items = response.data
    }, function (response) {
      console.log('Fail: ', response.status);
    })

    function goToItem(item) {
      $state.go('view-item', {item: item})
    }

    function goToCreateItem(){
      $state.go('create-item')
    }


  }])
})()
