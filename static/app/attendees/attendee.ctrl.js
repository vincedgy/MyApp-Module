(function () {
    'use strict';

    angular.module('app.attendee')
        .controller('AttendeeCtrl', AttendeeCtrl);

    ///////////////

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    AttendeeCtrl.$inject = ['$scope', '$state', 'AttendeeSrv', 'AttendeesBySessionId'];

    function AttendeeCtrl($scope, $state, Attendee, AttendeesBySessionId) {
        var vm = this;
        vm.params = {};
        vm.params.sessionVTID = $state.params.sessionVTID || undefined;
        vm.params.attendeeID = $state.params.attendeeID || undefined;
        vm.params._id = $state.params._id || undefined;
        vm.attendee = {};

        vm.editMode = false;

        if ($state.includes('newAttendee')) vm.editMode = false;
        if ($state.includes('editAttendee')) vm.editMode = true;

        var init = function () {
            if (vm.params._id) vm.attendee = Attendee.get({_id: vm.params._id});
            else if (vm.params.sessionVTID && vm.params.attendeeID) vm.attendee = AttendeesBySessionId.get({sessionVTID: vm.params.sessionVTID, attendeeID: vm.params.attendeeVTID});
            else vm.attendee = new Attendee();
        };

        // Got to attendee
        vm.getAttendees = function (attendee) {
            if (attendee.sessionVTID) {
                $state.go('attendeesForSession', {'_id':attendee.sessionVTID});
            } else {
                $state.go('attendeesList');
            }
        };

        // Got to attendees list for this session
        vm.getSessions = function () {
            $state.go('sessionsList');
        };

        vm.saveAttendee = function (attendee) {
            if (attendee._id && confirm('Please confirm')) {
                attendee.$update({_id: attendee._id}, function (savedAttendee) {
                    $state.go('attendeeDetails', {'_id':savedAttendee._id});
                });
            } else {
                attendee.$save(function (savedAttendee) {
                    $state.go('attendeeDetails', {'_id':savedAttendee._id});
                });
            }
            // Refresh the number of Attendees
            $scope.$parent.eventRefreshNBAttendees = true;
        };

        vm.removeAttendee = function (attendee) {
            if (confirm('Please confirm attendee ' + attendee.attendeeVTID + ' deletion.')) {
                attendee.$remove({_id: attendee._id}, function (removedSession) {
                    $state.go('attendeesList');
                });
            }
        };

        // Validate is taken directly from the scope too
        vm.cancel = function () {
            init();
        };

        init();

    }

})();