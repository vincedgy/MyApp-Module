(function () {

    'use strict';

    angular.module('app.session')
        .factory('SessionSrv', ['$resource', 'config', function ($resource, config) {
            return $resource(
                    config.dirs.api.prefix + config.dirs.api.session,
                {_id: '@id'},
                {
                    update: {method: 'PUT', params: {_id: '@id'}},
                    remove: {method: 'DELETE', params: {_id: '@id'}}
                });
        }
        ])
        .factory('SessionBySessionId', ['$resource', 'config', function ($resource, config) {
            return $resource(
                    config.dirs.api.prefix + config.dirs.api.sessionBySessionID,
                {sessionID: '@sessionID'});
        }
        ]);
})();