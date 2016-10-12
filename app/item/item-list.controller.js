(function(){
angular.module('item')
  .controller('ItemListController',
  ['itemService', function(itemService){
    var vm = this;
    vm.items = itemService.getItems();
  }]);
})();
