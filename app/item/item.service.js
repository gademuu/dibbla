'usetrict';
(function () {
  angular
    .module('item', [])
    .service('itemService', itemService)

  itemService.$inject = ['$sessionStorage']

  function itemService($sessionStorage) {

    const items = [
      { title: 'Bike', info: 'Its a fast bike, that you will love.' },
      { title: 'Xbox360', info: 'Xbox360 with many games.' },
    ]

    this.createItem = function (item) {
      items.push(item)
    }

    this.getItems = function () {
      return items
    }

    this.deleteItem = function (item) {
      const index = items.indexOf(item)
      items.splice(index, 1)
    }

  }
})()
