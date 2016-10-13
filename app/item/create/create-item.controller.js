(function(){
angular.module('item')
  .controller('CreateItemController',
  ['$state', 'itemService', function($state, itemService){
    var vm = this;
    vm.item = {};
    vm.createItem = createItem;
    vm.goToItemList = goToItemList;

    //TODO skrivs över om man försöker skapa flera items
    function createItem(title, info){
      vm.item.title = title;
      vm.item.info = info;

      itemService.createItem(vm.item);
      console.log('Item created!');
    }

    function goToItemList(){
      $state.go('item-list');
    }
  }]);
})();
