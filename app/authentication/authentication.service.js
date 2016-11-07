'use strict';
(function () {
    'use strict';

    angular
        .module('authentication', [])
        .service('authenticationService', authenticationService);

    authenticationService.$inject = [];
    function authenticationService() {
        const users = [
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
            const index = users.indexOf(user);
            users.splice(index, 1);
        };

    }
})();   