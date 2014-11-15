(function () {
    'use strict';

    angular.module('app.session')
        .controller('SessionCtrl', SessionCtrl);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    SessionCtrl.$inject = ['$location', '$routeParams', 'SessionSrv', '$scope'];
    function SessionCtrl($location, $routeParams, SessionSrv, $scope) {
        var vm = this;

        var passedId = $routeParams._id || undefined;

        vm.session = {};
        vm.isValid = false;
        vm.editMode = false;

        var currentLocation = $location.path().split('/')[1];
        if (currentLocation === 'newSession') vm.editMode = false;
        if (currentLocation === 'editSession') vm.editMode = true;

        var init = function () {
            if (!passedId) vm.session = new SessionSrv();
            else            vm.session = SessionSrv.get({_id: passedId});
            vm.isValid = vm.session ? true : false;
        };

        // Got to attendees list for this session
        vm.getAttendeesBySession = function (session) {
            $location.url('/session/' + session.sessionID + '/attendee');
        };

        vm.saveSession = function (session) {
            if (session.id && confirm('Please confirm')) {
                session.$update({_id: session._id}, function (savedSession) {
                    $location.url('/session/' + savedSession._id);
                });
            } else {
                session.$save(function (savedSession) {
                    $location.url('/session/' + savedSession._id);
                });
            }
            // Refresh the number of session
            $scope.$parent.eventRefreshNBSession = true;
        };

        vm.removeSession = function (session) {
            if (session._id && confirm('Please confirm session ' + session.sessionID + ' deletion.')) {
                session.$remove({_id: session._id}, function (removedSession) {
                    $location.url('/session/');
                });
            }
        };

        vm.getSessions = function () {
            return $location.url('/session/');
        };

        // Validate is taken directly from the scope too
        vm.cancel = function () {
            init();
        };

        // Initialize controller
        init();
    }
})();