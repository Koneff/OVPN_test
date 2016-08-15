(function () {
    'use strict';

    angular
        .module('test_app.auth.services')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$http', '$q'];

    function AuthService ($http, $q) {

        var AuthService = {
            userLogin: userLogin
        };

        return AuthService;

        function userLogin(username, password) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "https://www.ovpn.se/v1/api/client",
                data: {
                    'username': username,
                    'password': password
                }
                }).then(function(successResponse){
                    deferred.resolve(successResponse);
                }, function(failureResponse){
                    deferred.reject(failureResponse);
                });
            return deferred.promise;
        }

}
})();
