'use strict';

angular.module('cRMDEVApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


