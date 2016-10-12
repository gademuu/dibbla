(function(){
angular.module('item')
  .controller('CreateItemController',
  ['$state', 'itemService', function($state, itemService){
    var vm = this;
    vm.item = {};
    vm.createItem = createItem;
    vm.goToItemList = goToItemList;

    function createItem(itemName, itemInfo){
      vm.item.itemName = itemName;
      vm.item.itemInfo = itemInfo;

      itemService.createItem(vm.item);

      alert('item created! ' + vm.item.itemName);
    }

    function goToItemList(){
      $state.go('item-list');
    }
  }]);
})();
