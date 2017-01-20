'usetrict';
(function () {
  angular
    .module('item', [])
    .service('itemService', itemService)

  itemService.$inject = ['$sessionStorage', 'authenticationService']

  function itemService($sessionStorage, authenticationService) {

    const user = $sessionStorage.user
    const items = [
      { title: 'Bike', info: 'Its a fast bike, that you will love.' },
      { title: 'Xbox360', info: 'Xbox360 with many games.' },
    ]

    this.createItem = function (item) {
      item.id = generateId()
      user.myItems.push(item)
    }

    this.getItems = function () {
      return items
    }

    this.deleteItem = function (item) {
      const index = user.myItems.indexOf(item)
      user.myItems.splice(index, 1)
    }

    function generateId() {
      let itemsArr = Array.from(items)
      let highestId = itemsArr[itemsArr.length - 1].id

      return ++highestId
    }


  }
})()
