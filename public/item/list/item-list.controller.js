(function(){
'use strict';
  
angular.module('item')
  .controller('ItemListController',
  ['$state',  '$sessionStorage','itemService', function($state, $sessionStorage, itemService){
    
    const vm = this
    vm.goToItem = goToItem
    vm.goToCreateItem = goToCreateItem
    vm.items = itemService.getItems()
    const user = $sessionStorage.user
    console.log($sessionStorage)

    function goToItem(item) {
      $state.go('view-item', {item: item})
    }

    function goToCreateItem(){
      $state.go('create-item')
    }


  }])
})()
