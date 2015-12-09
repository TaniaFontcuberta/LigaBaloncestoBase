'use strict';

angular.module('ligabaloncestoApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
