(function () {
    'use strict';

    angular
        .module('authentication', [])
        .service('authenticationService', authenticationService);

    authenticationService.$inject = [];
    function authenticationService() {
        var users = [
            { name: 'herman', password: '123' },
            { title: 'Carl', info: 'abc' }
        ];

        this.registerUser = function (user) {
            users.push(user);
            console.log(users);
        };

        this.getUsers = function () {
            return users;
        };

        this.deleteUser = function (user) {
            var index = users.indexOf(user);
            users.splice(index, 1);
        };

    }
})();   