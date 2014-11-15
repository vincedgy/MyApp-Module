(function () {

    'use strict';

    angular
        .module('app.attendee')
        .factory('AttendeeSrv', ['$resource', 'config', function ($resource, config) {
            return $resource(
                    config.dirs.api.prefix + config.dirs.api.attendee,
                    {_id: '@_id'},
                    {
                        update: {method: 'PUT', params: {_id: '@_id'}},
                        remove: {method: 'DELETE', params: {_id: '@_id'}}
                    });
        }
        ])
        .factory('AttendeesBySessionId', ['$resource', 'config', function ($resource, config) {
            return $resource(
                    config.dirs.api.prefix + config.dirs.api.attendeesBySession,
                    {sessionVTID: '@sessionVTID',attendeeVTID: '@attendeeVTID'});
        }
        ]);

})();