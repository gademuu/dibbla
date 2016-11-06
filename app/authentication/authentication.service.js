(function() {
'use strict';

    angular
        .module('authentication', [])
        .service('authenticationService', authenticationService);

    authenticationService.$inject = [];
    function authenticationService() {
        this.exposedFn = exposedFn;
        
        function exposedFn() { }
        }
})();   