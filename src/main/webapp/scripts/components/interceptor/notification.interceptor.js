 'use strict';

angular.module('cRMDEVApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-cRMDEVApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-cRMDEVApp-params')});
                }
                return response;
            }
        };
    });
