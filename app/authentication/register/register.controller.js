'use strict';
(function () {
    'use strict';

    angular
        .module('authentication')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['authenticationService', '$state', '$timeout'];
    function RegisterController(authenticationService, $state, $timeout) {
        const vm = this;

        vm.registerUser = registerUser;

        function registerUser(username, password) {
            var user = authenticationService.registerUser(username, password);

            if (user) {
                $timeout(function () {
                    console.log(username, ' successfuly registered');
                    $state.go('item-list');
                    
                }, 1000);
            }
            else {
                alert('User already exists.');
            }

        }
    }
})();