'use strict';

angular.module('ligabaloncestoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


