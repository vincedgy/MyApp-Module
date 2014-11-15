(function () {
    'use strict';

    angular.module('app.attendee')
        .controller('AttendeeCtrl', AttendeeCtrl);

    ///////////////

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    AttendeeCtrl.$inject = ['$scope', '$location', '$routeParams', 'AttendeeSrv', 'AttendeesBySessionId'];

    function AttendeeCtrl($scope, $location, $routeParams, Attendee, AttendeesBySessionId) {
        var vm = this;
        var sessionVTID = $routeParams.sessionVTID || undefined;
        var attendeeID = $routeParams.attendeeID || undefined;
        var _id = $routeParams._id || undefined;
        vm.attendee = {};

        vm.editMode = false;

        var currentLocation = $location.path().split('/')[1];
        if (currentLocation === 'newAttendee') vm.editMode = false;
        if (currentLocation === 'editAttendee') vm.editMode = true;

        var init = function () {
            if (_id) vm.attendee = Attendee.get({_id: _id});
            else if (sessionVTID && attendeeID) vm.attendee = AttendeesBySessionId.get({sessionVTID: sessionVTID, attendeeID: attendeeVTID});
            else vm.attendee = new Attendee();
        };

        // Got to attendee
        vm.getAttendees = function (attendee) {
            if (attendee.sessionVTID) {
                $location.url('/session/' + attendee.sessionVTID + '/attendee');
            } else {
                $location.url('/attendee/');
            }
        };

        // Got to attendees list for this session
        vm.getSessions = function () {
            $location.url('/session/');
        };

        vm.saveAttendee = function (attendee) {
            if (attendee._id && confirm('Please confirm')) {
                attendee.$update({_id: attendee._id}, function (savedAttendee) {
                    $location.url('/attendee/' + savedAttendee._id);
                });
            } else {
                attendee.$save(function (savedAttendee) {
                    $location.url('/attendee/' + savedAttendee._id);
                });
            }
            // Refresh the number of Attendees
            $scope.$parent.eventRefreshNBAttendees = true;
        };

        vm.removeAttendee = function (attendee) {
            if (confirm('Please confirm attendee ' + attendee.attendeeVTID + ' deletion.')) {
                attendee.$remove({_id: attendee._id}, function (removedSession) {
                    $location.url('/attendee/');
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