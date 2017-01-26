(function () {
  'usetrict';

  angular
    .module('item', [])
    .service('itemService', itemService)

  itemService.$inject = ['$sessionStorage', '$http', 'authenticationService']

  function itemService($sessionStorage, $http, authenticationService) {

    const user = $sessionStorage.user
    const apiUrl = 'http://localhost:3000/api/item/'

    this.registerItem = function (item) {
      console.log('ITEM', item);
      return $http.post(apiUrl, item)
    }

    // this.getItems = function () {
    //   return items
    // }

    // this.deleteItem = function (item) {
    //   const index = user.myItems.indexOf(item)
    //   user.myItems.splice(index, 1)
    // }

    // function generateId() {
    //   let itemsArr = Array.from(items)
    //   let highestId = itemsArr[itemsArr.length - 1].id

    //   return ++highestId
    // }


  }
})()
