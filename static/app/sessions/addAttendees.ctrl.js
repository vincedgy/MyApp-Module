(function () {
    'use strict';

    angular
        .module('app.session')
        .controller('AddAttendeesCtrl', AddAttendeesCtrl);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    AddAttendeesCtrl.$inject = ['$route', '$routeParams', 'SessionSrv', 'AttendeeSrv', 'AttendeesBySessionId'];
    function AddAttendeesCtrl($route, $routeParams, SessionSrv, Attendee, AttendeesBySessionId) {
        var vm = this;
        var sessionID = $routeParams._id || undefined;
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

        vm.moveItem = function (items, from, to) {
            angular.forEach(items, function(item) {
                var idx = from.indexOf(item);
                if (idx != -1) {
                    from.splice(idx, 1);
                    to.push(item);
                }
            });
        };

        vm.moveAll = function (from, to) {
            angular.forEach(from, function (item) {
                to.push(item);
            });
            from.length = 0;
        };

        vm.save = function () {
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
        };

        vm.cancel = function () {
            $route.reload();
        };

        // Initialize controller
        init();
    }
})();