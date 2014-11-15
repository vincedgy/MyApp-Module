/**
 # constants.js
 ------------------------------------------------------------------------
 * Author  : A6252532
 * Date    : 12/11/2014 11:03
 * Project : MyApp-master
 * IDE     : WebStorm
 *
 */


(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        //.constant('moment', moment)

        // Global config constants for Application
        .constant('config', {
            'name': 'TrainU',
            'version': '0.3.0b',
            'partial_dir': 'partials',
            'dirs': {
                'base': 'app/',
                'api': {
                    'prefix': '/api'
                    // Session API
                    , 'sessions': '/session', 'session': '/session/:_id', 'sessionBySessionID': '/sessionBSI/:sessionID', 'newSession': '/newSession', 'editSession': '/editSession/:_id', 'addAttendees': '/session/:_id/addAttendees'

                    // Attendee API
                    , 'attendees': '/attendee', 'attendee': '/attendee/:_id', 'attendeesBySession': '/session/:sessionVTID/attendee', 'newAttendee': '/newAttendee', 'editAttendee': '/editAttendee/:_id'
                },
                'views': {
                    'partials': 'partials/', 'layout': 'layout/', 'sessions': 'sessions/', 'attendees': 'attendees/'
                }}
        });

})();
 
 
