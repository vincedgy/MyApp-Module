(function () {

    'use strict';

    angular.module('app.session')
        .factory('SessionSrv', SessionSrv);

    angular.module('app.session')
        .factory('SessionBySessionId', SessionBySessionId);

    ////////////////

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    SessionSrv.$inject = ['$resource', 'config'];
    function SessionSrv($resource, config) {
        return $resource(
                config.dirs.api.prefix + config.dirs.api.session,
            {_id: '@id'},
            {
                update: {method: 'PUT', params: {_id: '@id'}},
                remove: {method: 'DELETE', params: {_id: '@id'}}
            });
    }

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    SessionBySessionId.$inject = ['$resource', 'config'];
    function SessionBySessionId($resource, config) {
        return $resource(
                config.dirs.api.prefix + config.dirs.api.sessionBySessionID,
            {sessionID: '@sessionID'});
    }

})();