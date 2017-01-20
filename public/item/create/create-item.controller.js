'use strict';
(function(){
angular.module('item')
  .controller('CreateItemController',
  ['$state', 'itemService', function($state, itemService){
    const vm = this;
    vm.item = {};
    vm.createItem = createItem;
    vm.goToItemList = goToItemList;

    //TODO skrivs över om man försöker skapa flera items
    function createItem(name, info){
      vm.item.name = name;
      vm.item.info = info;

      itemService.createItem(vm.item);
      console.log('Item created!');
    }

    function goToItemList(){
      $state.go('item-list');
    }
  }]);
})();
