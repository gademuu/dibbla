'use strict';
(function () {

    angular
        .module('authentication', [])
        .service('authenticationService', authenticationService);

    authenticationService.$inject = [];

    function authenticationService  () {
        const users = new Set([
            { id: 1, username: 'herman', password: 'dibbla' },
            { id: 2, username: 'Carl', password: 'dibbla' }
        ]);

        function generateId () {
            let highestId = Array.from(users).reverse()[0].id;
            highestId++;
            
            return highestId;
        }

        this.registerUser = function (username, password) {
            let user = {};
            user.username = username;
            user.password = password;
            user.id = generateId();

            users.add(user);
            console.log(user, '\nl', users)
            return user;
        };

        this.getUserByCredentials = function (username, password) {
            // let arr = Array.from(users);
            return Array.from(users).find(x => x.username === username && x.password === password);
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