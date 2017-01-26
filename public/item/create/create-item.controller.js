(function () {
  'use strict'

  angular.module('item')
    .controller('CreateItemController',
    ['$state', '$sessionStorage', 'itemService', 'Upload', function ($state, $sessionStorage, itemService, Upload) {
      const vm = this
      const user = $sessionStorage.user
      
      vm.item = {}
      vm.itemPic = {}
      vm.registerItem = registerItem
      vm.goToItemList = goToItemList

      function registerItem() {
        vm.item.UserId = user.Id
        Upload.base64DataUrl(vm.itemPic).then(
          function successCallback(base64Url) {
            itemService.registerItem(vm.item)
              .then(function (response) {
                console.log('Success: ', response.status)
                goToItemList()
              }, function errorCallback(response) {
                console.log('Fail: ', response.status)
              })
          }, function errorCallback(response) {
            console.log('Fail: ', { error: { "message": response.data } })
          })
      }

      function goToItemList() {
        $state.go('item-list')
      }
    }])
})()

