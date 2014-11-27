(function () {
    'use strict';

    angular
        .module('app.session')
        .controller('AddAttendeesCtrl', AddAttendeesCtrl);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    AddAttendeesCtrl.$inject = ['$state', 'SessionSrv', 'AttendeeSrv', 'AttendeesBySessionId', 'toastr'];
    function AddAttendeesCtrl($state, SessionSrv, Attendee, AttendeesBySessionId,toastr) {
        var vm = this;
        var sessionID = $state.params._id || undefined;
        vm.needToSave = false;
        vm.session = {};
        vm.available = [];
        vm.selected = [];
        vm.attendeesOfSession = [];
        vm.attendeesAvailable = [];

        var index = 0;

        var init = function () {
            if (sessionID) {
                SessionSrv.get({_id: sessionID},
                    function (session) {
                        vm.session = session;
                        AttendeesBySessionId
                            .query({'sessionVTID': session.sessionID},
                            function (result) {
                                vm.attendeesOfSession = result;
                                Attendee
                                    .query({},
                                    function (result) {
                                        vm.attendeesAvailable = result;
                                        // Search and remove each item in Available list
                                        angular.forEach(vm.attendeesOfSession, function (attendeeInSession) {
                                            for (index = 0; index < vm.attendeesAvailable.length; index++) {
                                                if (vm.attendeesAvailable[index]._id === attendeeInSession._id) {
                                                    vm.attendeesAvailable.splice(index, 1);
                                                }
                                            }
                                        });
                                    });
                            });
                    });
            }
        };

        vm.moveItem = function (items, from, to, inSession) {
            angular.forEach(items, function(item) {
                var idx = from.indexOf(item);
                if (idx != -1) {
                    from.splice(idx, 1);
                    to.push(item);

                    // Save item
                    if (inSession) saveItem(item,vm.session);
                    else saveItem(item);
                }
            });
        };

        vm.moveAll = function (from, to) {
            angular.forEach(from, function (item) {
                to.push(item);
            });
            from.length = 0;
            vm.needToSave = true;
        };

        var saveItem = function(people, session) {
            if (session) {
                Attendee.get({'_id': people._id}, function (attendee) {
                    attendee.sessionVTID = session.sessionID;
                    attendee.$update();
                });
            } else {
                Attendee.get({'_id': people._id}, function (attendee) {
                    attendee.sessionVTID = null;
                    attendee.$update();
                });
            }
            toastr.info('Saving attendee ' + people._id);
        };

        vm.save = function () {
            if (vm.needToSave) {
                angular.forEach(vm.attendeesOfSession, function (attendeeInSession) {
                    Attendee.get({'_id': attendeeInSession._id}, function (attendee) {
                        attendee.sessionVTID = vm.session.sessionID;
                        attendee.$update();
                    });
                });
                angular.forEach(vm.attendeesAvailable, function (attendeeAvailable) {
                    Attendee.get({'_id': attendeeAvailable._id}, function (attendee) {
                        attendee.sessionVTID = null;
                        attendee.$update();
                    });
                });
                vm.needToSave = false;
            }
            toastr.info('Saving all attendees');
        };

        vm.cancel = function () {
            $state.reload();
            toastr.info('Cancelling and refresh the lists');
        };

        vm.getDetails = function(attendees){
            if (attendees[0]._id) {
                $state.go('attendeeDetails',{'_id':attendees[0]._id});
            }
        };

        // Initialize controller
        init();
    }
})();