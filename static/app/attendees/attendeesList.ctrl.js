(function () {
    'use strict';

    angular.module('app.attendee')
        .controller('AttendeesListCtrl', AttendeesListCtrl);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    AttendeesListCtrl.$inject = ['$state', 'AttendeesBySessionId', 'AttendeeSrv', 'SessionBySessionId'];
    function AttendeesListCtrl($state, AttendeesBySessionId, Attendee, SessionBySessionId) {
        var vm = this;
        vm.sessionVTID = $state.params._id || undefined;
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
                $state.go('attendeeDetails', {'_id':attendee._id});
            }
        };

        // Got to attendees list for this session
        vm.getSessions = function () {
            $state.go('sessionsList');
        };

        // Validate is taken directly from the scope too
        vm.newAttendee = function () {
            $state.go('newAttendee');
        };

        // Validate is taken directly from the scope too
        vm.addAttendee = function (id) {
            $state.go('attendeesForSession', {'_id': id});
        };
        // Init controller
        init();
    }

})();