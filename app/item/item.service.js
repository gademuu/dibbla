(function(){
angular.module('item', [])
  .service('itemService', function(){

    var items = [
      {title:'Cyckel', info: 'snabb och mysig'},
      {title:'Bil', info: 'inte sa snabb men den gar bra'},
  ];
  // var items = [];
    this.createItem = function(item) {
      items.push(item);
    };

    this.getItems = function() {
      return items;
    };

    this.deleteItem = function(item) {
      var index = items.indexOf(item);
      items.splice(index, 1);
    };
  });
})();
