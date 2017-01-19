'use strict';
(function () {
    'use strict';

    angular
        .module('authentication')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['authenticationService', '$sessionStorage', '$state', '$timeout'];
    function RegisterController(authenticationService, $sessionStorage, $state, $timeout) {
        const vm = this

        vm.registerUser = registerUser

        function registerUser(username, password) {
            var user = authenticationService.registerUser(username, password)

            if (user) {
                $timeout(function () {
                    console.log(username, ' successfuly registered')
                    $sessionStorage.user = user
                    $state.go('item-list', {user: user})
                    
                }, 1000)
            }
            else {
                alert('User already exists.')
            }

        }
    }
})();