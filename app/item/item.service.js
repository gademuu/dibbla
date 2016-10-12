(function(){
angular.module('item', [])
  .service('itemService', function(){

    var items = [];

    this.createItem = function(item) {
      items.push(item);
    };

    this.getItems = function() {
      return items;
    };
  });
})();
