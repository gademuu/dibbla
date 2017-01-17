'use strict';
(function(){
angular.module('item')
  .controller('ViewItemController',
  ['$state', '$stateParams', 'itemService', function($state, $stateParams, itemService){
    const vm = this
    vm.item = $stateParams.item
    vm.goToItemList = goToItemList
    vm.deleteItem = deleteItem

    function deleteItem(item){
      itemService.deleteItem(item)
      goToItemList()
    }

    function goToItemList(){
      $state.go('item-list')
    }

  }])
})()
