(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    // will create an AuthenticationService to handle the logic of authenticating username and password
    // and a FlashService to handle either success or error upon logging in
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {

            // A call to this function (Login) will handle the username and password logic
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SaveCredentials(vm.username, vm.password); //save username and password
                    $location.path('/'); //go to home page?
                } else {
                    FlashService.Error(response.message);

                }
            });
        };
    }

})();
