'use strict';
(function(){
angular.module('item', [])
  .service('itemService', function(){

    const items = [
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
      const index = items.indexOf(item);
      items.splice(index, 1);
    };
  });
})();
