(function () {
  'usetrict';

  angular
    .module('item', [])
    .service('itemService', itemService)

  itemService.$inject = ['$sessionStorage', '$http', 'authenticationService']

  function itemService($sessionStorage, $http, authenticationService) {

    const user = $sessionStorage.user
    const apiUrl = 'http://localhost:3000/api/'

    this.registerItem = function (item) {
      console.log('ITEM', item);
      return $http.post(apiUrl + 'item/', item)
    }

    this.getItems = function () {
      return $http.get(apiUrl + 'items')
    }
  }
})()
