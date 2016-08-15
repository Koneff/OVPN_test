(function () {
    'use strict';

    angular
        .module('test_app.auth.controllers')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$scope','AuthService'];

    function AuthController($scope, AuthService) {
        var vm = this;
        vm.isSaving = false;
        vm.buttonText = 'Sign In';
        vm.danger = true;
        vm.success = false;
        vm.errorText = '';
        vm.username = '';
        vm.password = '';

        vm.login = login;

        function login() {
            if ($scope.form.$valid){
            vm.buttonText = "Wait ...";
            vm.isSaving = true;
            var promise = AuthService.userLogin(vm.username, vm.password);
            promise.then(
                function(payload) {
                    console.log(payload);
                    vm.username = '';
                    vm.password = '';
                    vm.buttonText = 'Sign In';
                    vm.isSaving = false;
                    vm.success = true;
                },
                function(errorPayload) {
                    console.log(errorPayload);
                    vm.errorText = errorPayload.data.error;
                    vm.danger = false;
                    vm.buttonText = 'Sign In';
                    vm.isSaving = false;
                });
            }
        }
    }
})();
