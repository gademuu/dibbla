angular.module('item', [])
  .controller('CreateItemController', ['$scope', function($scope){
    
    var vm = this;
    vm.item = {
      name: 'Cyckel'
    };

  }]);
