(function(){
angular.module('item')
  .controller('ItemListController',
  ['$state', 'itemService', function($state, itemService){
    const vm = this;
    vm.items = itemService.getItems();
    vm.goToItem = goToItem;
    vm.goToCreateItem = goToCreateItem;

    function goToItem(item) {
      $state.go('view-item', {item: item})
    }

    function goToCreateItem(){
      $state.go('create-item');
    }


  }]);
})();
