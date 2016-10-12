angular.module('item', [])
  .controller('CreateItemController', ['$scope', function($scope){
    var vm = this;
    vm.item = {};
    vm.createItem = createItem;

    function createItem(itemName, itemInfo){
      vm.item = {
        itemName: itemName,
        itemInfo: itemInfo
      };
      alert('item created! ' + vm.item.itemName);

    }
  }]);
