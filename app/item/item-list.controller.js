(function(){
angular.module('item')
  .controller('ItemListController',
  ['$state', 'itemService', function($state, itemService){
    var vm = this;
    vm.items = itemService.getItems();
    vm.goToItem = goToItem;

    function goToItem(item) {
      console.log(item);
      $state.go('view-item', {item: item})
    }

  }]);
})();
