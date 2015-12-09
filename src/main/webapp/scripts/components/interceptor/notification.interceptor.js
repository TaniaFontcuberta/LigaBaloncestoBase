 'use strict';

angular.module('ligabaloncestoApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-ligabaloncestoApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-ligabaloncestoApp-params')});
                }
                return response;
            },
        };
    });