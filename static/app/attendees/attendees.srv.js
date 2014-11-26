(function () {

    'use strict';

    angular.module('app.attendee')
        .factory('AttendeeSrv', AttendeeSrv);

    angular.module('app.attendee')
        .factory('AttendeesBySessionId', AttendeesBySessionId);


    //////////////////

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    AttendeeSrv.$inject = ['$resource', 'config'];
    function AttendeeSrv($resource, config) {
        return $resource(
                '/api/attendee/:_id',
            {_id: '@_id'},
            {
                update: {method: 'PUT', params: {_id: '@_id'}},
                remove: {method: 'DELETE', params: {_id: '@_id'}}
            });
    }

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    AttendeesBySessionId.$inject = ['$resource', 'config'];
    function AttendeesBySessionId($resource, config) {
        return $resource(
                '/api/session/:sessionVTID/attendee',
            {sessionVTID: '@sessionVTID', attendeeVTID: '@attendeeVTID'}
        );
    }

})();