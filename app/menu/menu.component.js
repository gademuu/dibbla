(function () {
'use strict'

    function MenuController($sessionStorage) {
        const ctrl = this

        ctrl.user = $sessionStorage.user

        console.log(ctrl)
        // console.log('component ', ctrl.user)

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

