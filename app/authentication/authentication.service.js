'use strict';
(function () {
    'use strict';

    angular
        .module('authentication', [])
        .service('authenticationService', authenticationService);

    authenticationService.$inject = [];

    function authenticationService() {
        const users = [
            { id: 1, username: 'herman', password: 'dibbla' },
            { id: 2, username: 'Carl', password: 'dibbla' }
        ];

        function generateId() {
            return ++users.filter(x => x.id).reverse()[0].id;
        }

        this.registerUser = function (username, password) {
            var user = {};
            var id = 
            user.username = username;
            user.password = password;
            user.id = generateId();;
            
            users.push(user);

            return user;
        };

        this.getUserByCredentials = function (username, password) {
            return users.find(x => x.username === username && x.password === password);
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