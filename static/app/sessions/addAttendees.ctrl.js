(function () {
    'use strict';

    angular
        .module('app.session')
        .controller('AddAttendeesCtrl', AddAttendeesCtrl);

            AddAttendeesCtrl.$inject = ['$routeParams', 'SessionSrv', 'AttendeeSrv', 'AttendeesBySessionId'];           
            function AddAttendeesCtrl ($routeParams, SessionSrv, Attendee, AttendeesBySessionId) {
                var vm = this;
                var sessionID = $routeParams._id || undefined;
                vm.session = {};
                vm.available = [];
                vm.selected = [];
                vm.attendeesOfSession = [];
                vm.attendeesAvailable = [];

                var init = function () {
                    if (sessionID) {
                        SessionSrv.get({_id: sessionID}, function (session) {
                            vm.session = session;
                            vm.attendeesOfSession = AttendeesBySessionId.query({'sessionVTID': session.sessionID}) || [];
                            vm.attendeesAvailable = Attendee.query() || [];
                        });
                    }
                };

                vm.moveItem = function (item, from, to) {
                    console.log('Move item   Item: ' + item + ' From:: ' + from + ' To:: ' + to);
                    //Here from is returned as blank and to as undefined

                    var idx = from.indexOf(item);
                    if (idx != -1) {
                        from.splice(idx, 1);
                        to.push(item);
                    }
                };
                vm.moveAll = function (from, to) {

                    console.log('Move all  From:: ' + from + ' To:: ' + to);
                    //Here from is returned as blank and to as undefined

                    angular.forEach(from, function (item) {
                        to.push(item);
                    });
                    from.length = 0;
                };


                vm.save = function (session) {
                    alert('TBD');
                };


                // Initialize controller
                init();
            }
})();