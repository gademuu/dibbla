(function () {
  'use strict'

  angular.module('item')
    .controller('CreateItemController',
    ['$state', 'itemService', 'Upload', function ($state, itemService, Upload) {
      const vm = this
      vm.item = {}
      vm.itemPic = {}
      vm.registerItem = registerItem
      vm.goToItemList = goToItemList

      function registerItem() {
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

