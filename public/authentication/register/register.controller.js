(function () {
    'use strict'

    angular
        .module('authentication')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['authenticationService', '$sessionStorage', '$state', '$timeout', 'Upload'];
    function RegisterController(authenticationService, $sessionStorage, $state, $timeout, Upload) {
        const vm = this

        vm.registerUser = registerUser
        vm.profilePic = {}

        function registerUser(username, password) {
            Upload.base64DataUrl(vm.profilePic).then(
                
                function successCallback(base64Url) {
            console.log(vm.profilePic)
                    
                    console.log(base64Url)
                    var user = authenticationService.registerUser(username, password)
                    $sessionStorage.user = user
                    if (user) {
                        console.log(username, ' successfuly registered')
                  
                        $state.go('item-list')
                    }
                    else {
                        alert('User already exists.')
                    }
                }, function errorCallback(response) {
                    console.log('error', { error: { "message": response.data } })
                })
        }
    }
})();