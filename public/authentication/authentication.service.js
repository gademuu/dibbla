(function () {
'use strict';

    angular
        .module('authentication', [])
        .service('authenticationService', authenticationService)

    authenticationService.$inject = ['$http']

    function authenticationService($http) {

        const apiUrl = 'http://localhost:3000/api/user/'

        this.registerUser = function (user) {
            return $http.post(apiUrl, user)
        }

        this.loginUser = function (user) {
            return $http.post(apiUrl + 'login/', user)
        }

        this.deleteUser = function (user) {
            users.delete(user)
        }

    }
})()
