/**
 * Created by Training on 21/10/2014.
 */

(function () {

    'user strict';

    /* configurations */

    angular.module('app')

    // route configurations
    .config(['$routeProvider', 'config', function ($routeProvider, config) {
        $routeProvider.
            when('/home', {
                templateUrl: config.dirs.base + config.dirs.views.partials + 'welcome.html',
                controller: 'HelloCtrl'
            }).
            when('/contact', {
                templateUrl: config.dirs.base + config.dirs.views.partials + 'contact.html',
                controller: 'HelloCtrl'
            }).
            when('/about', {
                templateUrl: config.dirs.base + config.dirs.views.partials + 'about.html',
                controller: 'HelloCtrl'
            }).

            // ---------------------------------------------------------
            // Sessions routes

            when(config.dirs.api.sessions, {
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'list.html',
                controller: 'SessionsListCtrl'
            }).
            when(config.dirs.api.newSession, {
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'new.html',
                controller: 'SessionCtrl'
            }).
            when(config.dirs.api.editSession, {
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'new.html',
                controller: 'SessionCtrl'
            }).
            when(config.dirs.api.session, {
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'details.html',
                controller: 'SessionCtrl'
            }).
            when(config.dirs.api.addAttendees, {
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'addAttendees.html',
                controller: 'AddAttendeesCtrl'
            }).
            // ---------------------------------------------------------
            // Attendees routes
            when(config.dirs.api.attendees, {
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'list.html',
                controller: 'AttendeesListCtrl'
            }).
            when(config.dirs.api.attendee, {
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'details.html',
                controller: 'AttendeeCtrl'
            }).
            when(config.dirs.api.attendeesBySession, {
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'list.html',
                controller: 'AttendeesListCtrl'
            }).
            when(config.dirs.api.newAttendee, {
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'new.html',
                controller: 'AttendeeCtrl'
            }).
            when(config.dirs.api.editAttendee, {
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'new.html',
                controller: 'AttendeeCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });

    }]);

})();