(function () {
    'use strict';

    angular.module('app.attendee')
        .controller('AttendeesListCtrl', AttendeesListCtrl);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    AttendeesListCtrl.$inject = ['$location', '$routeParams', 'AttendeesBySessionId', 'AttendeeSrv', 'SessionBySessionId'];
    function AttendeesListCtrl($location, $routeParams, AttendeesBySessionId, Attendee, SessionBySessionId) {
        var vm = this;
        vm.sessionVTID = $routeParams.sessionVTID || undefined;
        vm.session = {};
        vm.attendees = [];

        var init = function () {
            if (vm.sessionVTID) {
                vm.attendees = AttendeesBySessionId.query({'sessionVTID': vm.sessionVTID}) || [];
                vm.session = SessionBySessionId.get({'sessionID': vm.sessionVTID}) || {};
            } else {
                vm.attendees = Attendee.query() || [];
            }
        };

        vm.refresh = function () {
            init();
        };

        vm.select = function (attendee) {
            if (attendee._id) {
                $location.url('/attendee/' + attendee._id);
            }
        };

        // Got to attendees list for this session
        vm.gotoSessions = function () {
            $location.url('/session/');
        };

        // Validate is taken directly from the scope too
        vm.newAttendee = function () {
            $location.url('/newAttendee/');
        };

        // Validate is taken directly from the scope too
        vm.addAttendee = function (id) {
            $location.url('/session/' + id + '/addAttendees');
        };
        // Init controller
        init();
    }

})();