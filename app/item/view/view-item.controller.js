(function(){
angular.module('item')
  .controller('ViewItemController',
  ['$state', '$stateParams', 'itemService', function($state, $stateParams, itemService){
    var vm = this;
    vm.item = $stateParams.item;
    vm.goToItemList = goToItemList;

    function goToItemList(){
      $state.go('item-list');
    }
  }]);
})();
