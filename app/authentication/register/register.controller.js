(function() {
'use strict';

    angular
        .module('authentication')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['authenticationService'];
    function RegisterController(authenticationService) {
        var vm = this;

        vm.registerUser = registerUser;

        function registerUser(user) { 
            // var user = {};
            console.log('hej');
        }
    }
})();