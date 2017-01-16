'use strict';
(function(){
angular.module('item')
  .controller('ItemListController',
  ['$state', '$stateParams', 'itemService', function($state, $stateParams, itemService){
    const vm = this;
    vm.items = itemService.getItems();
    vm.goToItem = goToItem;
    vm.goToCreateItem = goToCreateItem;
    const user = $stateParams.user;
    console.log(user, 'INNE I ITEM LIST')

    function goToItem(item) {
      $state.go('view-item', {item: item})
    }

    function goToCreateItem(){
      $state.go('create-item');
    }


  }]);
})();
