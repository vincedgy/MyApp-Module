/**
 * Created by Training on 21/10/2014.
 */

(function () {

    'use strict';

    /* configurations */
    angular.module('app.core').config(uiRouterConfig);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    uiRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'config'];
    function uiRouterConfig($stateProvider, $urlRouterProvider, config) {

        // Redirects and Otherwise //
        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/home');

        // State Configurations //
        $stateProvider

            // Home //
            .state('home', {
                url: '/home',
                templateUrl: config.dirs.base + config.dirs.views.partials + 'welcome.html', controller: 'HelloCtrl', controllerAs: 'vm'
            })

            // Home //
            .state('contact', {
                url: '/contact',
                templateUrl: config.dirs.base + config.dirs.views.partials + 'contact.html', controller: 'HelloCtrl', controllerAs: 'vm'
            })

            // About //
            .state('about', {
                url: '/about',
                templateUrl: config.dirs.base + config.dirs.views.partials + 'about.html', controller: 'HelloCtrl', controllerAs: 'vm'
            })

            // ---------------------------------------------------------
            // Sessions routes

            .state('sessionsList', {
                url: '/sessions',
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'list.html', controller: 'SessionsListCtrl', controllerAs: 'vm'
            })

            .state('newSession', {
                url: '/newSession',
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'new.html', controller: 'SessionCtrl', controllerAs: 'vm'
            })

            .state('editSession', {
                url: '/editSession/:_id',
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'new.html', controller: 'SessionCtrl', controllerAs: 'vm'
            })

            .state('sessionDetails', {
                url: '/session/:_id',
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'details.html', controller: 'SessionCtrl', controllerAs: 'vm'
            })

            .state('attendeesForSession', {
                url: '/session/:_id/addAttendees',
                templateUrl: config.dirs.base + config.dirs.views.sessions + 'addAttendees.html', controller: 'AddAttendeesCtrl', controllerAs: 'vm'
            })

            // ---------------------------------------------------------
            // Attendees routes
            .state('attendeesList', {
                url: '/attendees',
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'list.html', controller: 'AttendeesListCtrl', controllerAs: 'vm'
            })
            .state('attendeesListBySession', {
                url: '/session/:_id/attendees',
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'list.html', controller: 'AttendeesListCtrl', controllerAs: 'vm'
            })
            .state('attendeeDetails', {
                url: '/attendee/:_id',
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'details.html', controller: 'AttendeeCtrl', controllerAs: 'vm'
            })
            .state('newAttendee', {
                url: '/newAttendee',
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'new.html', controller: 'AttendeeCtrl', controllerAs: 'vm'
            })
            .state('editAttendee', {
                url: '/editAttendee/:_id',
                templateUrl: config.dirs.base + config.dirs.views.attendees + 'new.html', controller: 'AttendeeCtrl', controllerAs: 'vm'
            });
    }

})();