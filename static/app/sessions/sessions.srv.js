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
                '/api/session/:_id',
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
                '/api/sessionBSI/:sessionID',
            {sessionID: '@sessionID'});
    }

})();