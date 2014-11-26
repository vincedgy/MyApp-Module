(function () {
    'use strict';

    angular.module('app.session')
        .controller('SessionCtrl', SessionCtrl);

    //-------------------------------------------------------------------------------------------------
    /* @ngInject */
    SessionCtrl.$inject = ['$state', 'SessionSrv', '$scope'];
    function SessionCtrl($state, SessionSrv, $scope) {
        var vm = this;

        var passedId = $state.params._id || undefined;

        vm.session = {};
        vm.isValid = false;
        vm.editMode = false;

        if ($state.includes('newSession')) vm.editMode = false;
        if ($state.includes('editSession')) vm.editMode = true;

        var init = function () {
            if (!passedId) vm.session = new SessionSrv();
            else            vm.session = SessionSrv.get({_id: passedId});
            vm.isValid = vm.session ? true : false;
        };

        // Got to attendees list for this session
        vm.getAttendeesBySession = function (session) {
            $state.go('/session/' + session.sessionID + '/attendee');
        };

        vm.saveSession = function (session) {
            if (session.id && confirm('Please confirm')) {
                session.$update({_id: session._id}, function (savedSession) {
                    $state.go('/session/' + savedSession._id);
                });
            } else {
                session.$save(function (savedSession) {
                    $state.go('/session/' + savedSession._id);
                });
            }
            // Refresh the number of session
            $scope.$parent.eventRefreshNBSession = true;
        };

        vm.removeSession = function (session) {
            if (session._id && confirm('Please confirm session ' + session.sessionID + ' deletion.')) {
                session.$remove({_id: session._id}, function (removedSession) {
                    $state.go('/session/');
                });
            }
        };

        vm.getSessions = function () {
            return $state.go('/session/');
        };

        // Validate is taken directly from the scope too
        vm.cancel = function () {
            init();
        };

        // Initialize controller
        init();
    }
})();