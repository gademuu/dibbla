'use strict';
(function() {
'use strict';

    angular
        .module('authentication')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['authenticationService'];
    function RegisterController(authenticationService) {
        const vm = this;
        const user = {};
        
        vm.registerUser = registerUser;
     
        function registerUser(name, password) { 
            user.name = name;
            user.password = password;
            console.log('registered user:', user.name, ' password:', user.password);
            authenticationService.registerUser(user);
        }
    }
})();