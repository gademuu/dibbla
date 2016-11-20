'use strict';
(function () {
    'use strict';

    angular
        .module('authentication', [])
        .service('authenticationService', authenticationService);

    authenticationService.$inject = [];

    function authenticationService() {
        const users = [
            { id: 1, name: 'herman', password: '123' },
            { id: 2, name: 'Carl', password: 'abc' }
        ];

        this.registerUser = function (user) {
            users.push(user);
            console.log(users);
        };

        this.getUserByCredentials = function (name, password) {
            return users.find(x => x.name === name && x.password === password);
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