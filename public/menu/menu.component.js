(function () {
    'use strict'

    function MenuController($sessionStorage, $state) {
        const ctrl = this

        ctrl.user = $sessionStorage.user
        ctrl.goToItem = goToItem
        ctrl.goToUser = goToUser

        function goToItem(item) {
            $state.go('view-item', { item: item })
        }

        function goToUser() {
            $state.go('user-profile', { user: ctrl.user})
        }
    }

    angular
        .module('menu', [])
        .component('menu', {
            templateUrl: 'menu/menu.html',
            controller: MenuController,
            bindings: {

            }
        })

})()

